import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { checkSpam } from "@/lib/spam-filter";
import { reviewSubmission } from "@/lib/ai-spam-review";
import { appendRow } from "@/lib/sheets";

// Delivery handler for the gated lead magnet. Mirrors the /api/lead-engine
// defense stack (honeypot → keyword filter → time-gate → reCAPTCHA → AI
// review) with this form's lighter field set.
//
// Two mails go out: the guide to the prospect, and a notification to ASP.
// The prospect mail is the one that matters — if it fails, the submission
// fails loudly, because a lead who never receives the guide is worse than
// no lead at all.

const MIN_FORM_TIME_MS = 3000;

const GUIDE_PATH = "/downloads/asp-5-marketing-frameworks.pdf";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

function guideUrl(request: Request): string {
  // Absolute URL for the email. Prefer the request's own origin so the link
  // works on the leadengine subdomain, preview deploys, and localhost alike.
  try {
    return new URL(GUIDE_PATH, new URL(request.url).origin).toString();
  } catch {
    return `https://leadengine.aspbranding.com${GUIDE_PATH}`;
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
      trade,
      revenue,
      marketingConsent,
      consentText,
      consentAt,
      recaptchaToken,
      recaptchaAction,
      formTime,
      fax,
    } = body;

    // Honeypot — silent 200 so bots don't learn the trap exists.
    if (typeof fax === "string" && fax.length > 0) {
      console.log("[frameworks] honeypot tripped:", { email, fax });
      return NextResponse.json({ success: true });
    }

    const spam = checkSpam({ name, company, message: trade });
    if (spam.isSpam) {
      console.log("[frameworks] spam filter matched:", {
        email,
        matched: spam.matched,
        name,
        company,
      });
      return NextResponse.json({ success: true });
    }

    if (typeof formTime === "number" && formTime < MIN_FORM_TIME_MS) {
      console.log("[frameworks] too-fast submit:", { email, formTime });
      return NextResponse.json(
        { error: "Submission was too fast. Please try again." },
        { status: 400 },
      );
    }

    if (!name || !email || !phone || !company || !trade || !revenue) {
      return NextResponse.json(
        { error: "Name, email, phone, company, trade, and annual revenue are all required." },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptcha(
      recaptchaToken,
      recaptchaAction || "frameworks_download",
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
      service: "5-marketing-frameworks",
      message: `Trade: ${trade} · Revenue: ${revenue} · Phone: ${phone}`,
    });
    if (review.classification === "vendor") {
      console.log("[frameworks] AI flagged as vendor:", {
        email,
        company,
        reason: review.reason,
      });
      return NextResponse.json({ success: true });
    }
    if (review.errored) {
      console.warn("[frameworks] AI review errored, failing open:", review.reason);
    }

    // --- Deliver the guide. This is the promise made on the page. ---
    const url = guideUrl(request);
    const delivery = await sendMail({
      to: email,
      subject: "The 5 Marketing Frameworks for Trades Businesses",
      replyTo: "info@aspbranding.com",
      html: `
        <p>${name},</p>
        <p>Here it is — the five frameworks we install for trades businesses:</p>
        <p><a href="${url}"
              style="display:inline-block;padding:12px 22px;border-radius:999px;
                     background:#2E7DFF;color:#ffffff;font-weight:600;
                     text-decoration:none">Download the 5 Frameworks (PDF)</a></p>
        <ol>
          <li><strong>The Lead Source Map</strong> — trace every digital lead back to the channel that produced it.</li>
          <li><strong>The Speed-to-Lead System</strong> — the response times that decide who books the job.</li>
          <li><strong>The Google Business Profile Engine</strong> — turn a listing into a measurable channel.</li>
          <li><strong>The Money Math</strong> — margin by job type, breakeven, and what you can afford to spend to win a job.</li>
          <li><strong>The Site That Books Work</strong> — the page structure that turns a visitor into a booked job.</li>
        </ol>
        <p>Work through them in order. The first one is the one most businesses are missing,
           and it is what makes the other four measurable.</p>
        <p>If you would rather we walked through your numbers together, just reply to this
           email and we will set up a time.</p>
        <p>— Joel Keith<br/>ASP</p>
        <p style="color:#888;font-size:12px">
          Direct link if the button does not work: <a href="${url}">${url}</a>
        </p>
      `,
    });

    if (!delivery.ok) {
      console.error("[frameworks] guide delivery FAILED:", delivery.reason, { email });
      return NextResponse.json(
        {
          error:
            "We couldn't send the guide just now. Please try again, or email info@aspbranding.com and we'll send it straight over.",
        },
        { status: 502 },
      );
    }

    // --- Notify ASP. Best-effort: a failure here must not cost us the lead. ---
    const utmRows = UTM_KEYS.filter((k) => typeof body[k] === "string" && body[k])
      .map((k) => `<p><strong>${k}:</strong> ${body[k]}</p>`)
      .join("");

    const notify = await sendMail({
      to: "info@aspbranding.com",
      subject: `Frameworks download: ${name} — ${company} (${trade}, ${revenue})`,
      replyTo: email,
      html: `
        <h2>New 5 Frameworks download</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Trade:</strong> ${trade}</p>
        <p><strong>Annual revenue:</strong> ${revenue}</p>
        <hr />
        <h3>Marketing consent</h3>
        <p><strong>Consented:</strong> ${marketingConsent || "Not recorded"}</p>
        <p><strong>Wording shown:</strong> ${consentText || "Not recorded"}</p>
        <p><strong>Timestamp:</strong> ${consentAt || "Not recorded"}</p>
        <hr />
        <h3>Source attribution</h3>
        ${utmRows || "<p><em>No UTM parameters captured (direct visit).</em></p>"}
      `,
    });
    if (!notify.ok) {
      console.error("[frameworks] ASP notification failed:", notify.reason, { email });
    }

    // --- Call queue. Best-effort: a Sheets outage must not cost us the lead. ---
    // The email is the instant alert; this is the follow-up work queue, so it
    // lands with status "New" for whoever works the phone.
    const sheetId = process.env.FRAMEWORKS_SHEET_ID;
    if (sheetId) {
      const queued = await appendRow(sheetId, "Leads!A:O", [
        new Date().toISOString().replace("T", " ").slice(0, 16),
        name,
        company,
        phone,
        email,
        trade,
        revenue,
        typeof body.utm_content === "string" ? body.utm_content : "",
        typeof body.utm_campaign === "string" ? body.utm_campaign : "",
        typeof body.utm_source === "string" ? body.utm_source : "",
        marketingConsent || "",
        "New",
        "",
        "",
        "",
      ]);
      if (!queued.ok) {
        console.error("[frameworks] call-queue append failed:", queued.reason, { email });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Frameworks form error:", error);
    return NextResponse.json({ error: "Failed to process submission." }, { status: 500 });
  }
}
