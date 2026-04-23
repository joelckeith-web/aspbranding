import { NextResponse } from "next/server";

const BEEHIIV_API = "https://api.beehiiv.com/v2";

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || typeof email !== "string" || !/.+@.+\..+/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
    const apiKey = process.env.BEEHIIV_API_KEY;

    if (!publicationId || !apiKey) {
      console.error("Missing Beehiiv env vars");
      return NextResponse.json({ error: "Newsletter unavailable" }, { status: 500 });
    }

    const res = await fetch(
      `${BEEHIIV_API}/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: source || "aspbranding.com",
          utm_medium: "organic",
        }),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("Beehiiv subscribe failed", res.status, detail);
      return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter route error", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
