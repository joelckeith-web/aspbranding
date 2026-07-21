import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { checkSpam } from "@/lib/spam-filter";
import { reviewSubmission } from "@/lib/ai-spam-review";

// Application handler for the 90-Day Lead Engine offer. Mirrors the
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
      company,
      websiteUrl,
      crm,
      revenue,
      recaptchaToken,
      recaptchaAction,
      formTime,
      fax,
    } = body;

    // Honeypot — silent 200 so bots don't learn the trap exists.
    if (typeof fax === "string" && fax.length > 0) {
      console.log("[lead-engine] honeypot tripped:", { email, fax });
      return NextResponse.json({ success: true });
    }

    // Cold-pitch keyword filter — same silent-200 pattern as /api/contact.
    const spam = checkSpam({ name, company, message: websiteUrl });
    if (spam.isSpam) {
      console.log("[lead-engine] spam filter matched:", {
        email,
        matched: spam.matched,
        name,
        company,
      });
      return NextResponse.json({ success: true });
    }

    // Time-gate — anything filled out faster than 3s is bot behaviour.
    if (typeof formTime === "number" && formTime < MIN_FORM_TIME_MS) {
      console.log("[lead-engine] too-fast submit:", { email, formTime });
      return NextResponse.json(
        { error: "Submission was too fast. Please try again." },
        { status: 400 },
      );
    }

    // Every field is required — the form is the qualification filter.
    if (!name || !email || !company || !websiteUrl || !crm || !revenue) {
      return NextResponse.json(
        {
          error:
            "Name, email, company, website (or 'I don't have one'), CRM, and annual revenue are all required.",
        },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptcha(
      recaptchaToken,
      recaptchaAction || "lead_engine_apply",
    );
    if (!captcha.ok) {
      return NextResponse.json(
        { error: captcha.reason ?? "Verification failed." },
        { status: 400 },
      );
    }

    // AI second-pass — semantic vendor-vs-prospect classifier. Fails open.
    const review = await reviewSubmission({
      name,
      email,
      company,
      service: "90-day-lead-engine",
      message: `Website: ${websiteUrl} · CRM: ${crm} · Revenue: ${revenue}`,
    });
    if (review.classification === "vendor") {
      console.log("[lead-engine] AI flagged as vendor:", {
        email,
        company,
        reason: review.reason,
      });
      return NextResponse.json({ success: true });
    }
    if (review.errored) {
      console.warn("[lead-engine] AI review errored, failing open:", review.reason);
    }

    // Source attribution block — whatever UTM/click-id params rode in.
    const utmRows = UTM_KEYS.filter((k) => typeof body[k] === "string" && body[k])
      .map((k) => `<p><strong>${k}:</strong> ${body[k]}</p>`)
      .join("");

    await sendMail({
      to: "info@aspbranding.com",
      subject: `Lead Engine Application: ${name} — ${company} (${revenue})`,
      replyTo: email,
      html: `
        <h2>New 90-Day Lead Engine Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${websiteUrl}</p>
        <p><strong>CRM:</strong> ${crm}</p>
        <p><strong>Annual revenue:</strong> ${revenue}</p>
        <hr />
        <h3>Source attribution</h3>
        ${utmRows || "<p><em>No UTM parameters captured (direct visit).</em></p>"}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead engine form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 },
    );
  }
}
