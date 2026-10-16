import { appendRow } from "@/lib/sheets";

// Spam filters used to drop a submission with nothing but a log line, and
// runtime logs only keep a day. A real prospect tripped one on 2026-10-15
// (GA4 recorded the submit; no email, no sheet row, no way to recover it).
// Now every filtered submission still lands in the call queue, marked
// "Filtered", so a person can see it and decide. The visitor still gets the
// same silent success, so bots learn nothing.

export async function queueFiltered(input: {
  form: "frameworks" | "lead-engine";
  reason: string;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  websiteUrl?: unknown;
  revenue?: unknown;
  body: Record<string, unknown>;
}): Promise<void> {
  const sheetId = process.env.FRAMEWORKS_SHEET_ID;
  if (!sheetId) return;
  const s = (v: unknown) => (typeof v === "string" ? v.slice(0, 300) : "");
  const queued = await appendRow(sheetId, "Leads!A:O", [
    new Date().toISOString().replace("T", " ").slice(0, 16),
    s(input.name),
    s(input.websiteUrl),
    s(input.phone),
    s(input.email),
    "",
    s(input.revenue),
    s(input.body.utm_content),
    s(input.body.utm_campaign),
    s(input.body.utm_source),
    "",
    `Filtered (${input.form})`,
    "",
    "",
    input.reason.slice(0, 300),
  ]);
  if (!queued.ok) {
    console.error(`[${input.form}] filtered-row append failed:`, queued.reason);
  }
}
