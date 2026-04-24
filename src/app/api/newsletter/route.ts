import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

// Temporary: Beehiiv integration is paused. Signups are emailed to Joel for
// manual entry until the Beehiiv issue is resolved. Preserve the Beehiiv env
// vars (BEEHIIV_PUBLICATION_ID / BEEHIIV_API_KEY) for the cutover.
const NOTIFY_TO = "joel.keith@aspbranding.com";

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || typeof email !== "string" || !/.+@.+\..+/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
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
