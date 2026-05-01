// AI-backed second-pass classifier for the contact form.
//
// Layer 2 of spam defense (layer 1 is the keyword filter in spam-filter.ts).
// Distinguishes "vendor pitching ASP" from "prospect inquiring about ASP's
// services" using semantic understanding. ASP is a marketing agency selling
// SEO / PPC / content / web — so prospects legitimately mention those terms,
// which is exactly where the keyword filter has to stay conservative and
// where this layer carries the load.
//
// Uses Claude Haiku 4.5 — fast and cheap enough that every form submission
// can be classified (~$0.001 per call with prompt caching). System prompt
// is cached so repeat classifications inside a 5-minute window cost ~10% of
// the first call.
//
// Fail-open posture: if the API errors, times out, or the key is missing,
// classify as "unclear" and let the submission through. Losing a real lead
// is worse than letting one spam email through.

import Anthropic from "@anthropic-ai/sdk";

export type SpamClassification = "vendor" | "prospect" | "unclear";

export type SpamReviewResult = {
  classification: SpamClassification;
  reason: string;
  errored: boolean;
};

const MODEL = "claude-haiku-4-5-20251001";
const TIMEOUT_MS = 4000;

const SYSTEM_PROMPT = `You are a spam classifier for ASP Branding's contact form.

ABOUT ASP: ASP Branding is a marketing agency in Texas. They sell SEO, PPC, content marketing, web design, social media, and email marketing services to small-to-mid-size businesses (especially home services — HVAC, plumbing, roofing, etc.). Their contact form is for inbound prospects who want to BUY these services.

YOUR JOB: classify each submission as one of:
- "vendor"   — someone reaching out to PITCH services TO ASP (they want ASP as a customer, not the other way around). DROP.
- "prospect" — a real or possible customer asking ABOUT or wanting to BUY ASP's services. KEEP.
- "unclear"  — genuinely ambiguous; default to KEEP.

VENDOR markers (any one is strong; multiple = high confidence):
- Generic cold-email openers: "I came across your website", "hope this finds you well", "we're reaching out"
- Pitch direction TOWARD ASP: "we can rank your site", "boost your rankings", "we offer SEO/link building/lead generation"
- Vendor-identity in name/company/email (e.g., name="SEO Expert", company="DigiRank Solutions", domain mismatched to person)
- Offering services ASP itself sells (SEO, PPC, web dev, lead gen, link building, content writing) FROM the sender TO ASP
- Foreign-vendor giveaways: WhatsApp/Skype handles, "based in India/Pakistan/Philippines", non-native phrasing combined with sales pitch
- Calendly / scheduling links pasted into the message body
- Generic "let's discuss" / "few minutes of your time" closes

PROSPECT markers:
- Specific to THEIR business: industry, location, problem, current state, goals, revenue
- Asks ABOUT ASP's services rather than offering them
- Mentions ASP's actual packages or pages they read
- Real-sounding company name tied to a real industry (not "Global SEO Services Pvt Ltd")
- US-based contact info (most ASP prospects are US small businesses)

EDGE CASES:
- Other marketing agencies asking about WHITE-LABEL or PARTNER programs are PROSPECTS (ASP does partnerships).
- A prospect saying "I need help with SEO and PPC" is a PROSPECT, not a vendor — direction matters.
- Someone offering content writing or guest posts TO ASP is a VENDOR.
- A real estate agent asking about marketing for their listings is a PROSPECT.
- Anyone offering "qualified leads" or "appointment setting" services TO ASP is a VENDOR.

OUTPUT: Respond with ONLY a JSON object, no prose, no code fences:
{"classification": "vendor" | "prospect" | "unclear", "reason": "<one short sentence>"}`;

function buildUserPrompt(input: {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}): string {
  const fields = [
    `Name: ${input.name || "(empty)"}`,
    `Email: ${input.email || "(empty)"}`,
    `Phone: ${input.phone || "(empty)"}`,
    `Company: ${input.company || "(empty)"}`,
    `Service interest: ${input.service || "(empty)"}`,
    `Message:`,
    input.message || "(empty)",
  ];
  return `Classify this contact-form submission:\n\n${fields.join("\n")}`;
}

function parseResponse(raw: string): {
  classification: SpamClassification;
  reason: string;
} | null {
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    const parsed = JSON.parse(match[0]) as {
      classification?: string;
      reason?: string;
    };
    const c = parsed.classification;
    if (c !== "vendor" && c !== "prospect" && c !== "unclear") return null;
    return {
      classification: c,
      reason: typeof parsed.reason === "string" ? parsed.reason : "",
    };
  } catch {
    return null;
  }
}

export async function reviewSubmission(input: {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}): Promise<SpamReviewResult> {
  if (!process.env.ANTHROPIC_API_KEY) {
    return {
      classification: "unclear",
      reason: "ANTHROPIC_API_KEY not set — fail open",
      errored: true,
    };
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await client.messages.create(
      {
        model: MODEL,
        max_tokens: 200,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [{ role: "user", content: buildUserPrompt(input) }],
      },
      { signal: controller.signal },
    );

    const raw =
      response.content[0]?.type === "text" ? response.content[0].text : "";
    const parsed = parseResponse(raw);
    if (!parsed) {
      return {
        classification: "unclear",
        reason: `unparseable response: ${raw.slice(0, 100)}`,
        errored: true,
      };
    }
    return { ...parsed, errored: false };
  } catch (err) {
    return {
      classification: "unclear",
      reason: `api error: ${err instanceof Error ? err.message : String(err)}`,
      errored: true,
    };
  } finally {
    clearTimeout(timer);
  }
}
