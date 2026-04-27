import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";

// Temporary: Beehiiv integration is paused. Signups are emailed to Joel for
// manual entry until the Beehiiv issue is resolved. Preserve the Beehiiv env
// vars (BEEHIIV_PUBLICATION_ID / BEEHIIV_API_KEY) for the cutover.
const NOTIFY_TO = "joel.keith@aspbranding.com";

const MIN_FORM_TIME_MS = 3000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      email,
      source,
      recaptchaToken,
      recaptchaAction,
      formTime,
      website,
    } = body;

    // Honeypot — bots tend to fill any input they find. If the hidden
    // "website" field has a value, silently 200 so we don't telegraph
    // the trap, but never send the email.
    if (typeof website === "string" && website.length > 0) {
      console.log("[newsletter] honeypot tripped:", { email, website });
      return NextResponse.json({ success: true });
    }

    // Time-gate — humans need a beat to type an email and click submit.
    if (typeof formTime === "number" && formTime < MIN_FORM_TIME_MS) {
      console.log("[newsletter] too-fast submit:", { email, formTime });
      return NextResponse.json(
        { error: "Submission was too fast. Please try again." },
        { status: 400 },
      );
    }

    if (!email || typeof email !== "string" || !/.+@.+\..+/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const captcha = await verifyRecaptcha(
      recaptchaToken,
      recaptchaAction || "newsletter_submit",
    );
    if (!captcha.ok) {
      return NextResponse.json(
        { error: captcha.reason ?? "Verification failed." },
        { status: 400 },
      );
    }

    const result = await sendMail({
      to: NOTIFY_TO,
      subject: `New Newsletter Signup: ${email}`,
      html: `
        <h2>New Newsletter Signup</h2>
        <p>Someone just subscribed from the ASP website.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source || "aspbranding.com"}</p>
        <hr />
        <p><em>Beehiiv integration is paused — please add this subscriber manually once the platform is back online.</em></p>
      `,
      replyTo: email,
    });

    if (!result.ok) {
      console.error("Newsletter notify failed:", result.reason);
      return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter route error", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
