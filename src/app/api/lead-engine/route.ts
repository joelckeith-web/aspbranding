import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { checkSpam } from "@/lib/spam-filter";
import { reviewSubmission } from "@/lib/ai-spam-review";
import { clientIp, resolveFbc, sendMetaEvent } from "@/lib/meta-capi";
import { isTestLead } from "@/lib/test-lead";
import { appendRow } from "@/lib/sheets";

// Application handler for the 90-Day Install offer. Mirrors the
// /api/contact defense stack (honeypot → keyword filter → time-gate →
// reCAPTCHA → AI review) with this form's own field set. The honeypot is
// "fax" here because this form has a REAL website field.

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      websiteUrl,
      crm,
      revenue,
      jobValue,
      marketingConsent,
      consentText,
      consentAt,
      recaptchaToken,
      recaptchaAction,
      formTime,
      fax,
      question,
    } = body;

    // Two forms post here: the full application, and (since 2026-10-16) the
    // free Systems Audit request at the top of /lead-engine.
    const isAudit = body.kind === "audit";

    // Joel 2026-10-16: loosen the spam filters and let everything through.
    // The honeypot, keyword and AI checks now FLAG an application ([FLAGGED]
    // subject + reason in the email) and never drop it. reCAPTCHA, the
    // time-gate and required fields still block. Tighten only if it gets noisy.
    let flagged = "";
    if (typeof fax === "string" && fax.length > 0) {
      console.log("[lead-engine] honeypot tripped:", { email, fax });
      flagged = "honeypot field filled";
    }

    // Cold-pitch keyword filter — same silent-200 pattern as /api/contact.
    const spam = checkSpam({ name, company, message: isAudit ? `${websiteUrl || ""} ${question || ""}` : websiteUrl });
    if (spam.isSpam) {
      console.log("[lead-engine] spam filter matched:", {
        email,
        matched: spam.matched,
        name,
        company,
      });
      flagged = flagged || `keyword filter: ${spam.matched}`;
    }

    // Time-gate — anything filled out faster than 3s is bot behaviour.
    if (typeof formTime === "number" && formTime < MIN_FORM_TIME_MS) {
      console.log("[lead-engine] too-fast submit:", { email, formTime });
      return NextResponse.json(
        { error: "Submission was too fast. Please try again." },
        { status: 400 },
      );
    }

    // Audit request: contact details + CRM + the homework question.
    if (isAudit && (!name || !email || !phone || !crm || !question)) {
      return NextResponse.json(
        { error: "Name, email, phone, CRM and your question are all required." },
        { status: 400 },
      );
    }

    // Every field but phone is required — the form is the qualification filter.
    if (!isAudit && (!name || !email || !company || !websiteUrl || !crm || !revenue || !jobValue)) {
      return NextResponse.json(
        {
          error:
            "Name, email, company, website (or 'I don't have one'), CRM, annual revenue, and average job value are all required.",
        },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptcha(
      recaptchaToken,
      recaptchaAction || (isAudit ? "audit_request" : "lead_engine_apply"),
    );
    if (!captcha.ok) {
      return NextResponse.json(
        { error: captcha.reason ?? "Verification failed." },
        { status: 400 },
      );
    }

    // AI second-pass — semantic vendor-vs-prospect classifier. Fails open.
    // Test-lane submissions skip it: it would drop an internal address.
    const testLead = isTestLead(email);
    const review = testLead
      ? { classification: "prospect", errored: false, reason: "test lead" }
      : await reviewSubmission({
        name,
        email,
        company,
        service: isAudit ? "free-systems-audit" : "90-day-lead-engine",
        message: isAudit
          ? `Website: ${websiteUrl || "not given"} · CRM: ${crm} · Question: ${question}`
          : `Website: ${websiteUrl} · CRM: ${crm} · Revenue: ${revenue} · Avg job: ${jobValue}`,
      });
    if (review.classification === "vendor") {
      console.log("[lead-engine] AI flagged as vendor:", {
        email,
        company,
        reason: review.reason,
      });
      flagged = flagged || `AI vendor check: ${review.reason}`;
    }
    if (review.errored) {
      console.warn("[lead-engine] AI review errored, failing open:", review.reason);
    }


    // Server-side twin of the browser pixel event (Meta Conversions API).
    // Reaches Meta even when the browser blocks the pixel; dedupes on event_id.
    // Never throws, so tracking can never cost the lead.
    const [firstName, ...rest] = String(name).trim().split(/\s+/);
    // Flagged submits skip CAPI so likely junk doesn't train Meta's delivery.
    const metaStatus = flagged ? "skipped (flagged)" : await sendMetaEvent({
      eventName: "SubmitApplication",
      eventId:
        typeof body.metaEventId === "string" && /^[\w-]{8,80}$/.test(body.metaEventId)
          ? body.metaEventId
          : `apply-${Date.now()}`,
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
      customData: {
        content_name: isAudit ? "Free Systems Audit request" : "90-Day Install Application",
      },
    });
    console.log("[lead-engine] meta capi:", metaStatus);

    // Source attribution block — whatever UTM/click-id params rode in.
    const utmRows = UTM_KEYS.filter((k) => typeof body[k] === "string" && body[k])
      .map((k) => `<p><strong>${k}:</strong> ${body[k]}</p>`)
      .join("");
    const variantRow =
      typeof body.lp_variant === "string" && /^[A-Z]$/.test(body.lp_variant)
        ? `<p><strong>Landing page variant:</strong> ${body.lp_variant}</p>`
        : "";

    await sendMail({
      to: "info@aspbranding.com",
      subject: isAudit
        ? `${testLead ? "[TEST] " : ""}${flagged ? "[FLAGGED] " : ""}Free Systems Audit request: ${name} — ${websiteUrl || "no website given"}`
        : `${testLead ? "[TEST] " : ""}${flagged ? "[FLAGGED] " : ""}Lead Engine Application: ${name} — ${company} (${revenue})`,
      replyTo: email,
      html: `
        <h2>${isAudit ? "New Free Systems Audit request" : "New 90-Day Install Application"}</h2>
        ${isAudit ? `<p>They were sent straight to the Business Audit calendar. If no Calendly booking follows, call them.</p><p><strong>Their question:</strong> ${question}</p>` : ""}
        ${flagged ? `<p style="color:#b45309"><strong>Spam check flagged this:</strong> ${flagged}. It came through anyway — judge it yourself.</p>` : ""}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not given"}</p>
        ${isAudit ? "" : `<p><strong>Company:</strong> ${company}</p>`}
        <p><strong>Website:</strong> ${websiteUrl || "Not given"}</p>
        <p><strong>CRM:</strong> ${crm}</p>
        ${isAudit ? "" : `<p><strong>Annual revenue:</strong> ${revenue}</p>
        <p><strong>Average job value:</strong> ${jobValue}</p>`}
        <hr />
        <h3>Marketing consent</h3>
        <p><strong>Consented:</strong> ${marketingConsent || "Not recorded"}</p>
        <p><strong>Wording shown:</strong> ${consentText || "Not recorded"}</p>
        <p><strong>Timestamp:</strong> ${consentAt || "Not recorded"}</p>
        <hr />
        <h3>Source attribution</h3>
        ${variantRow}
        ${utmRows || "<p><em>No UTM parameters captured (direct visit).</em></p>"}
      `,
    });

    // Audit requests also go in the call queue, so a request that never
    // books (or books and no-shows) is still a lead someone calls.
    const sheetId = process.env.FRAMEWORKS_SHEET_ID;
    if (isAudit && sheetId) {
      const queued = await appendRow(sheetId, "Leads!A:O", [
        new Date().toISOString().replace("T", " ").slice(0, 16),
        name,
        websiteUrl || "",
        phone || "",
        email,
        "",
        "",
        typeof body.utm_content === "string" ? body.utm_content : "",
        typeof body.utm_campaign === "string" ? body.utm_campaign : "",
        typeof body.utm_source === "string" ? body.utm_source : "",
        marketingConsent || "",
        testLead ? "TEST" : flagged ? "Flagged" : "Audit requested",
        "",
        "",
        [`Q: ${String(question).slice(0, 400)}`, `CRM: ${crm}`, flagged].filter(Boolean).join(" · "),
      ]);
      if (!queued.ok) {
        console.error("[lead-engine] audit call-queue append failed:", queued.reason, { email });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead engine form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 },
    );
  }
}
