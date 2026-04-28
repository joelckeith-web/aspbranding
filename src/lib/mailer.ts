import nodemailer from "nodemailer";

// Gmail / Google Workspace SMTP. Requires an App Password from
// https://myaccount.google.com/apppasswords (2FA must be enabled on the account).
//
// Env vars (set in Vercel):
//   SMTP_USER      = joel.keith@aspbranding.com (or whichever sending address)
//   SMTP_PASSWORD  = 16-character app password

interface SendMailInput {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  cc?: string | string[];
}

export async function sendMail({
  to,
  subject,
  html,
  from,
  replyTo,
  cc,
}: SendMailInput): Promise<
  { ok: true } | { ok: false; reason: string }
> {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    console.log(
      "[mailer] SMTP not configured — would have sent:",
      JSON.stringify({ to, subject }),
    );
    return { ok: false, reason: "SMTP credentials not configured" };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: from ?? `ASP Website <${user}>`,
      to,
      subject,
      html,
      ...(replyTo ? { replyTo } : {}),
      ...(cc ? { cc } : {}),
    });
    return { ok: true };
  } catch (err) {
    console.error("[mailer] send failed:", err);
    return {
      ok: false,
      reason: err instanceof Error ? err.message : "Unknown SMTP error",
    };
  }
}
