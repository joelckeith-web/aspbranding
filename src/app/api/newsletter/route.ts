import { NextResponse } from "next/server";

// Temporary: Beehiiv integration is paused. Signups are emailed to Joel for
// manual entry until the Beehiiv issue is resolved. Preserve the Beehiiv env
// vars (BEEHIIV_PUBLICATION_ID / BEEHIIV_API_KEY) for the cutover.
const NOTIFY_TO = "joel.keith@aspbranding.com";
const FROM_ADDRESS = "ASP Website <noreply@aspbranding.com>";

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || typeof email !== "string" || !/.+@.+\..+/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.log("Newsletter signup (no Resend configured):", { email, source });
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [NOTIFY_TO],
        subject: `New Newsletter Signup: ${email}`,
        html: `
          <h2>New Newsletter Signup</h2>
          <p>Someone just subscribed from the ASP website.</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Source:</strong> ${source || "aspbranding.com"}</p>
          <hr />
          <p><em>Beehiiv integration is paused — please add this subscriber manually once the platform is back online.</em></p>
        `,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Newsletter notify email failed", res.status, detail);
      return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter route error", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
