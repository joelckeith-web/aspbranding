import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { checkSpam } from "@/lib/spam-filter";
import { reviewSubmission } from "@/lib/ai-spam-review";
import { appendRow } from "@/lib/sheets";
import { clientIp, resolveFbc, sendMetaEvent } from "@/lib/meta-capi";
import { isTestLead } from "@/lib/test-lead";

// Gate for the AI Search Audit Kit, the folder promised at the end of the AI
// for Founders x ASP live audit workshop. Attendees reach /audit-kit from the
// QR code on the deck's download slide.
//
// Joel 2026-11-05: they fill in their info and download it right there. So the
// success screen shows the download button, and the same link is emailed as a
// copy to keep. Same defense stack and flag-don't-drop rule as /api/frameworks
// (Joel 2026-10-16): the honeypot, keyword and AI checks flag a submission,
// only reCAPTCHA and the time-gate block.

const MIN_FORM_TIME_MS = 3000;

const KIT_PATH = "/downloads/ai-search-audit-kit.zip";

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

function kitUrl(request: Request): string {
  try {
    return new URL(KIT_PATH, new URL(request.url).origin).toString();
  } catch {
    return `https://aspbranding.com${KIT_PATH}`;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      marketingConsent,
      consentText,
      consentAt,
      recaptchaToken,
      recaptchaAction,
      formTime,
      fax,
    } = body;

    let flagged = "";
    if (typeof fax === "string" && fax.length > 0) {
      console.log("[audit-kit] honeypot tripped:", { email, fax });
      flagged = "honeypot field filled";
    }
    const spam = checkSpam({ name, company: "", message: String(email ?? "") });
    if (spam.isSpam) {
      console.log("[audit-kit] spam filter matched:", { email, matched: spam.matched });
      flagged = flagged || `keyword filter: ${spam.matched}`;
    }

    if (typeof formTime === "number" && formTime < MIN_FORM_TIME_MS) {
      return NextResponse.json(
        { error: "Submission was too fast. Please try again." },
        { status: 400 },
      );
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptcha(recaptchaToken, recaptchaAction || "audit_kit_download");
    if (!captcha.ok) {
      return NextResponse.json({ error: captcha.reason ?? "Verification failed." }, { status: 400 });
    }

    const testLead = isTestLead(email);
    const review = testLead
      ? { classification: "prospect", errored: false, reason: "test lead" }
      : await reviewSubmission({
        name,
        email,
        company: "",
        service: "ai-search-audit-kit",
        message: `Webinar kit download · Phone: ${phone || "not given"}`,
      });
    if (review.classification === "vendor") {
      console.log("[audit-kit] AI flagged as vendor:", { email, reason: review.reason });
      flagged = flagged || `AI vendor check: ${review.reason}`;
    }
    if (review.errored) console.warn("[audit-kit] AI review errored, failing open:", review.reason);

    // --- The copy to keep. The download already happened on the page, so a
    // failed send is logged, not shown as a failure to the person. ---
    const url = kitUrl(request);
    const firstName = esc(String(name).trim().split(/\s+/)[0]);
    const delivery = await sendMail({
      to: email,
      subject: "Your AI Search Audit Kit",
      replyTo: "info@aspbranding.com",
      html: `
        <p>${firstName},</p>
        <p>Here's the folder from the workshop, so you have it to keep.</p>
        <p><a href="${url}"
              style="display:inline-block;padding:12px 22px;border-radius:10px;
                     background:#2E7DFF;color:#ffffff;font-weight:600;
                     text-decoration:none">Download the AI Search Audit Kit</a></p>
        <p>Start with the README. The first file is one prompt that runs everything: fill in your business
           details, paste it into Claude with web search on, and it runs the audit, then writes a 30-day
           plan for your business.</p>
        <p>If you'd rather we ran it for you, you can book a strategy call at
           <a href="https://www.aspbranding.com/strategy-call">aspbranding.com/strategy-call</a>.</p>
        <p>Joel Keith<br/>ASP</p>
        <p style="color:#888;font-size:12px">
          Direct link if the button doesn't work: <a href="${url}">${url}</a>
        </p>
      `,
    });
    if (!delivery.ok) console.error("[audit-kit] copy email FAILED:", delivery.reason, { email });

    const [first, ...rest] = String(name).trim().split(/\s+/);
    const metaStatus = flagged ? "skipped (flagged)" : await sendMetaEvent({
      eventName: "Lead",
      eventId:
        typeof body.metaEventId === "string" && /^[\w-]{8,80}$/.test(body.metaEventId)
          ? body.metaEventId
          : `lead-${Date.now()}`,
      eventSourceUrl: request.headers.get("referer") || undefined,
      ip: clientIp(request.headers),
      userAgent: request.headers.get("user-agent") || undefined,
      fbp: typeof body.fbp === "string" ? body.fbp : undefined,
      fbc: resolveFbc(
        typeof body.fbc === "string" ? body.fbc : undefined,
        typeof body.fbclid === "string" ? body.fbclid : undefined,
      ),
      user: { email, phone, firstName: first, lastName: rest.join(" ") || undefined },
      test: testLead,
      customData: { content_name: "AI Search Audit Kit" },
    });
    console.log("[audit-kit] meta capi:", metaStatus);

    const utmRows = UTM_KEYS.filter((k) => typeof body[k] === "string" && body[k])
      .map((k) => `<p><strong>${k}:</strong> ${esc(body[k])}</p>`)
      .join("");
    const notify = await sendMail({
      to: "info@aspbranding.com",
      subject: `${testLead ? "[TEST] " : ""}${flagged ? "[FLAGGED] " : ""}Audit kit download: ${name}`,
      replyTo: email,
      html: `
        <h2>New AI Search Audit Kit download</h2>
        ${flagged ? `<p style="color:#b45309"><strong>Spam check flagged this:</strong> ${esc(flagged)}. It came through anyway, so judge it yourself.</p>` : ""}
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone || "Not given")}</p>
        <p><strong>Copy email sent:</strong> ${delivery.ok ? "Yes" : `No (${esc(delivery.reason)})`}</p>
        <hr />
        <p><strong>Marketing consent:</strong> ${esc(marketingConsent || "Not recorded")} — ${esc(consentText || "")} (${esc(consentAt || "")})</p>
        <hr />
        ${utmRows || "<p><em>No UTM parameters captured (direct visit).</em></p>"}
      `,
    });
    if (!notify.ok) console.error("[audit-kit] ASP notification failed:", notify.reason, { email });

    // Download list. Best-effort; set AUDIT_KIT_SHEET_ID (tab "Downloads").
    const sheetId = process.env.AUDIT_KIT_SHEET_ID;
    if (sheetId) {
      const queued = await appendRow(sheetId, "Downloads!A:I", [
        new Date().toISOString().replace("T", " ").slice(0, 16),
        name,
        email,
        phone || "",
        marketingConsent || "",
        typeof body.utm_source === "string" ? body.utm_source : "",
        typeof body.utm_content === "string" ? body.utm_content : "",
        testLead ? "TEST" : flagged ? "Flagged" : "New",
        flagged,
      ]);
      if (!queued.ok) console.error("[audit-kit] sheet append failed:", queued.reason, { email });
    }

    return NextResponse.json({ success: true, downloadUrl: KIT_PATH });
  } catch (error) {
    console.error("Audit kit form error:", error);
    return NextResponse.json({ error: "Failed to process your request." }, { status: 500 });
  }
}
