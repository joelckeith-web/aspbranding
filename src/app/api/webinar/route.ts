import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { checkSpam } from "@/lib/spam-filter";
import { reviewSubmission } from "@/lib/ai-spam-review";
import { appendRow } from "@/lib/sheets";
import { clientIp, resolveFbc, sendMetaEvent } from "@/lib/meta-capi";
import { isTestLead } from "@/lib/test-lead";
import { WEBINAR, WEBINAR_TOPICS, REVENUE_RANGES, fillDate, type WebinarTopic } from "@/lib/webinar";
import { WEBINAR_COPY } from "@/app/webinar/copy";

// Registration handler for the live webinar. Same defense stack as
// /api/frameworks (honeypot → keyword filter → time-gate → reCAPTCHA → AI
// review). The confirmation email is the promise made on the page, so a
// failed send fails the registration loudly.

const MIN_FORM_TIME_MS = 3000;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

function fillTokens(text: string): string {
  return fillDate(text, "to be announced (we will email you the date)")
    .replaceAll(
      "{{ZOOM_LINK}}",
      WEBINAR.zoomUrl ?? "the Zoom link (it comes in a separate email before the webinar)",
    );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      websiteUrl,
      revenueRange,
      marketingConsent,
      consentText,
      consentAt,
      recaptchaToken,
      recaptchaAction,
      formTime,
      fax,
    } = body;
    const topic: WebinarTopic = body.topic === "ai-search" ? "ai-search" : "numbers";

    if (typeof fax === "string" && fax.length > 0) {
      console.log("[webinar] honeypot tripped:", { email, fax });
      return NextResponse.json({ success: true });
    }

    const spam = checkSpam({ name, company: websiteUrl, message: websiteUrl });
    if (spam.isSpam) {
      console.log("[webinar] spam filter matched:", { email, matched: spam.matched });
      return NextResponse.json({ success: true });
    }

    if (typeof formTime === "number" && formTime < MIN_FORM_TIME_MS) {
      return NextResponse.json(
        { error: "Submission was too fast. Please try again." },
        { status: 400 },
      );
    }

    if (!name || !email || !websiteUrl || !REVENUE_RANGES.includes(revenueRange)) {
      return NextResponse.json(
        { error: "Name, email, business website and revenue range are required." },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptcha(recaptchaToken, recaptchaAction || "webinar_register");
    if (!captcha.ok) {
      return NextResponse.json({ error: captcha.reason ?? "Verification failed." }, { status: 400 });
    }

    const testLead = isTestLead(email);
    const review = testLead
      ? { classification: "prospect", errored: false, reason: "test lead" }
      : await reviewSubmission({
        name,
        email,
        company: websiteUrl,
        service: `webinar-${topic}`,
        message: `Website: ${websiteUrl} · Revenue: ${revenueRange} · Phone: ${phone || "not given"}`,
      });
    if (review.classification === "vendor") {
      console.log("[webinar] AI flagged as vendor:", { email, reason: review.reason });
      return NextResponse.json({ success: true });
    }

    // --- Confirmation email. This is the promise made on the page. ---
    const mail = WEBINAR_COPY[topic].confirmationEmail;
    const paragraphs = fillTokens(mail.body)
      .split(/\n{2,}/)
      .map((p) => `<p>${esc(p).replace(/\n/g, "<br/>")}</p>`)
      .join("");
    const delivery = await sendMail({
      to: email,
      subject: fillTokens(mail.subject),
      replyTo: "info@aspbranding.com",
      html: `<p>${esc(String(name).trim().split(/\s+/)[0])},</p>${paragraphs}`,
    });
    if (!delivery.ok) {
      console.error("[webinar] confirmation FAILED:", delivery.reason, { email });
      return NextResponse.json(
        {
          error:
            "We couldn't send your confirmation just now. Please try again, or email info@aspbranding.com and we'll register you.",
        },
        { status: 502 },
      );
    }

    const [firstName, ...rest] = String(name).trim().split(/\s+/);
    const metaStatus = await sendMetaEvent({
      eventName: "CompleteRegistration",
      eventId:
        typeof body.metaEventId === "string" && /^[\w-]{8,80}$/.test(body.metaEventId)
          ? body.metaEventId
          : `reg-${Date.now()}`,
      eventSourceUrl: request.headers.get("referer") || undefined,
      ip: clientIp(request.headers),
      userAgent: request.headers.get("user-agent") || undefined,
      fbp: typeof body.fbp === "string" ? body.fbp : undefined,
      fbc: resolveFbc(
        typeof body.fbc === "string" ? body.fbc : undefined,
        typeof body.fbclid === "string" ? body.fbclid : undefined,
      ),
      user: { email, phone, firstName, lastName: rest.join(" ") || undefined },
      test: testLead,
      customData: { content_name: `Webinar: ${WEBINAR_TOPICS[topic]}` },
    });
    console.log("[webinar] meta capi:", metaStatus);

    const utmRows = UTM_KEYS.filter((k) => typeof body[k] === "string" && body[k])
      .map((k) => `<p><strong>${k}:</strong> ${esc(body[k])}</p>`)
      .join("");
    const notify = await sendMail({
      to: "info@aspbranding.com",
      subject: `${testLead ? "[TEST] " : ""}Webinar registration (${WEBINAR_TOPICS[topic]}): ${name} — ${revenueRange}`,
      replyTo: email,
      html: `
        <h2>New webinar registration — ${esc(WEBINAR_TOPICS[topic])}</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone || "Not given")}</p>
        <p><strong>Website:</strong> ${esc(websiteUrl)}</p>
        <p><strong>Revenue:</strong> ${esc(revenueRange)}</p>
        <hr />
        <p><strong>Marketing consent:</strong> ${esc(marketingConsent || "Not recorded")} — ${esc(consentText || "")} (${esc(consentAt || "")})</p>
        <hr />
        ${utmRows || "<p><em>No UTM parameters captured (direct visit).</em></p>"}
      `,
    });
    if (!notify.ok) console.error("[webinar] ASP notification failed:", notify.reason, { email });

    // Registrant list. Best-effort; set WEBINAR_SHEET_ID (tab "Registrations").
    const sheetId = process.env.WEBINAR_SHEET_ID;
    if (sheetId) {
      const queued = await appendRow(sheetId, "Registrations!A:K", [
        new Date().toISOString().replace("T", " ").slice(0, 16),
        WEBINAR_TOPICS[topic],
        name,
        email,
        websiteUrl,
        revenueRange,
        phone || "",
        marketingConsent || "",
        typeof body.utm_source === "string" ? body.utm_source : "",
        typeof body.utm_content === "string" ? body.utm_content : "",
        testLead ? "TEST" : "Registered",
      ]);
      if (!queued.ok) console.error("[webinar] sheet append failed:", queued.reason, { email });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webinar form error:", error);
    return NextResponse.json({ error: "Failed to process registration." }, { status: 500 });
  }
}
