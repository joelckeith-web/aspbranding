import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";

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

    if (!name || !email || !company || !service || !message) {
      return NextResponse.json(
        {
          error:
            "Name, email, company, growth package, and message are all required.",
        },
        { status: 400 }
      );
    }

    const consented =
      marketingConsent === true ||
      marketingConsent === "yes" ||
      marketingConsent === "on";

    if (!consented) {
      return NextResponse.json(
        { error: "Marketing consent is required to submit this form." },
        { status: 400 }
      );
    }

    const captcha = await verifyRecaptcha(
      recaptchaToken,
      recaptchaAction || "contact_submit",
    );
    if (!captcha.ok) {
      return NextResponse.json(
        { error: captcha.reason ?? "Verification failed." },
        { status: 400 }
      );
    }

    await sendMail({
      to: "info@aspbranding.com",
      subject: `New Contact Form: ${name} — ${service || "General Inquiry"}`,
      replyTo: email,
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
    });

    if (consented) {
      await sendMail({
        to: "joel.keith@aspbranding.com",
        subject: `Newsletter Signup (via contact form): ${email}`,
        replyTo: email,
        html: `
          <h2>Newsletter Signup (from contact form)</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <hr />
          <p><em>Marketing consent given. Beehiiv integration is paused — please add this subscriber manually.</em></p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to process submission." }, { status: 500 });
  }
}
