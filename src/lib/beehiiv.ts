// Adds a consenting registrant to the ASP newsletter in beehiiv. Best-effort:
// a beehiiv outage must never cost us a registration, so this never throws.
//
// reactivate_existing stays false so anyone who unsubscribed stays unsubscribed.

const PUBLICATION_ID = "pub_67117734-0ee0-4af7-a852-f0225dc8ef96";
const BASE = `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}`;
const TIMEOUT_MS = 8000;

export async function addNewsletterSubscriber(
  email: string,
  opts: { tag: string; utmCampaign: string; utmMedium: string; utmSource: string },
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const key = process.env.BEEHIIV_API_KEY;
  if (!key) return { ok: false, reason: "BEEHIIV_API_KEY is not set" };

  const headers = { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
  try {
    const created = await fetch(`${BASE}/subscriptions`, {
      method: "POST",
      headers,
      signal: AbortSignal.timeout(TIMEOUT_MS),
      body: JSON.stringify({
        email: email.trim(),
        reactivate_existing: false,
        send_welcome_email: false,
        utm_source: opts.utmSource,
        utm_medium: opts.utmMedium,
        utm_campaign: opts.utmCampaign,
      }),
    });
    if (!created.ok) return { ok: false, reason: `create ${created.status}: ${await created.text()}` };

    const body = await created.json();
    const id = body?.data?.id;
    if (!id) return { ok: false, reason: "create returned no subscriber id" };

    const tagged = await fetch(`${BASE}/subscriptions/${id}/tags`, {
      method: "POST",
      headers,
      signal: AbortSignal.timeout(TIMEOUT_MS),
      body: JSON.stringify({ tags: [opts.tag] }),
    });
    if (!tagged.ok) return { ok: false, reason: `tag ${tagged.status}: ${await tagged.text()}` };

    return { ok: true };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.message : "unknown error" };
  }
}
