import { NextResponse } from "next/server";

const MIN_SCORE = 0.5;

type EnterpriseAssessment = {
  tokenProperties?: {
    valid?: boolean;
    action?: string;
    invalidReason?: string;
  };
  riskAnalysis?: {
    score?: number;
    reasons?: string[];
  };
};

async function verifyRecaptcha(
  token: string | undefined,
  expectedAction: string | undefined
): Promise<{ ok: boolean; reason?: string }> {
  const projectId = process.env.RECAPTCHA_PROJECT_ID;
  const apiKey = process.env.RECAPTCHA_API_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Not fully configured — skip silently (dev / unconfigured).
  if (!projectId || !apiKey || !siteKey) {
    return { ok: true };
  }
  if (!token) {
    return { ok: false, reason: "Missing reCAPTCHA token." };
  }

  try {
    const res = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: {
            token,
            expectedAction: expectedAction ?? "contact_submit",
            siteKey,
          },
        }),
      }
    );

    if (!res.ok) {
      return { ok: false, reason: "reCAPTCHA verification error." };
    }

    const data = (await res.json()) as EnterpriseAssessment;

    if (!data.tokenProperties?.valid) {
      return {
        ok: false,
        reason: `reCAPTCHA token invalid: ${data.tokenProperties?.invalidReason ?? "unknown"}.`,
      };
    }

    if (
      expectedAction &&
      data.tokenProperties.action &&
      data.tokenProperties.action !== expectedAction
    ) {
      return { ok: false, reason: "reCAPTCHA action mismatch." };
    }

    if (
      typeof data.riskAnalysis?.score === "number" &&
      data.riskAnalysis.score < MIN_SCORE
    ) {
      return { ok: false, reason: "reCAPTCHA score too low." };
    }

    return { ok: true };
  } catch {
    return { ok: false, reason: "reCAPTCHA verification error." };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
      marketingConsent,
      recaptchaToken,
      recaptchaAction,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const consented =
      marketingConsent === true ||
      marketingConsent === "yes" ||
      marketingConsent === "on";

    const captcha = await verifyRecaptcha(recaptchaToken, recaptchaAction);
    if (!captcha.ok) {
      return NextResponse.json(
        { error: captcha.reason ?? "Verification failed." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ASP Website <noreply@aspbranding.com>",
          to: ["info@aspbranding.com"],
          subject: `New Contact Form: ${name} — ${service || "General Inquiry"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Interest:</strong> ${service || "Not specified"}</p>
            <p><strong>Marketing consent:</strong> ${consented ? "Yes — add to newsletter" : "No"}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${String(message).replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (consented) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ASP Website <noreply@aspbranding.com>",
            to: ["joel.keith@aspbranding.com"],
            subject: `Newsletter Signup (via contact form): ${email}`,
            html: `
              <h2>Newsletter Signup (from contact form)</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || "Not provided"}</p>
              <hr />
              <p><em>Marketing consent given. Beehiiv integration is paused — please add this subscriber manually.</em></p>
            `,
          }),
        });
      }
    } else {
      console.log("Contact form submission:", { name, email, phone, company, service, message, consented });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to process submission." }, { status: 500 });
  }
}
