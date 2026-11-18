import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { readRange, updateCell } from "@/lib/sheets";
import { isTestLead } from "@/lib/test-lead";
import { WEBINAR } from "@/lib/webinar";
import {
  FCOL,
  FOLLOWUP_COLUMN,
  FOLLOWUP_COPY,
  REPLAY_URL,
  buildFollowup,
  copyKey,
  dueFollowups,
  replayReady,
  rowNeedsFollowup,
  type FollowupKind,
} from "@/lib/webinar-followups";

// Vercel Cron, every 15 minutes (vercel.json). Sends the five pre-event and
// follow-up emails to the "Registrations" tab of WEBINAR_SHEET_ID and stamps
// columns O-R ("A 2026-12-02T15:00Z" = subject A) so a retry never double-sends.
// Windows and rules are in src/lib/webinar-followups.ts.
//
// Manual checks:
//   ?dryRun=1&at=2026-12-02T15:05:00Z   who would be emailed then (Bearer CRON_SECRET;
//                                        on a preview deployment, counts only, no auth)
//   ?previewTo=name+test@aspbranding.com send all five emails to one test address
//                                        (Bearer CRON_SECRET, or no auth on a preview deployment)

export const maxDuration = 120;

const MAX_PER_RUN = 60;

const isPreview = () => process.env.VERCEL_ENV === "preview";

function send(key: keyof typeof FOLLOWUP_COPY, to: string, name: string, variant: 0 | 1) {
  const { subject, html } = buildFollowup(key, name, variant, {
    zoom: WEBINAR.zoomUrl ?? "",
    replay: REPLAY_URL,
  });
  return sendMail({
    to,
    subject,
    html,
    from: `Joel Keith <${process.env.SMTP_USER}>`,
    replyTo: "info@aspbranding.com",
  });
}

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authed = Boolean(cronSecret) && request.headers.get("authorization") === `Bearer ${cronSecret}`;
  const params = request.nextUrl.searchParams;

  const previewTo = params.get("previewTo");
  if (previewTo) {
    if (!authed && !isPreview()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    if (!isTestLead(previewTo)) {
      return NextResponse.json({ error: "previewTo must be a test address" }, { status: 400 });
    }
    const results: Record<string, unknown> = {};
    for (const key of Object.keys(FOLLOWUP_COPY) as (keyof typeof FOLLOWUP_COPY)[]) {
      results[key] = await send(key, previewTo, "Test", 0);
    }
    return NextResponse.json({ success: true, results });
  }

  const dryRun = params.get("dryRun") === "1";
  if (!authed && !(dryRun && isPreview())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!WEBINAR.startsAt || !WEBINAR.zoomUrl) {
    return NextResponse.json({ success: true, skipped: "webinar start or Zoom link not set" });
  }

  const at = params.get("at");
  const now = dryRun && at ? new Date(at) : new Date();
  const due = dueFollowups(now).filter((k) => k !== "recording" || replayReady());
  if (due.length === 0) {
    return NextResponse.json({ success: true, due: [], waitingOnReplay: dueFollowups(now).includes("recording") });
  }

  const sheetId = process.env.WEBINAR_SHEET_ID;
  if (!sheetId) {
    console.error("[webinar-followups] WEBINAR_SHEET_ID is not set");
    return NextResponse.json({ error: "WEBINAR_SHEET_ID is not set" }, { status: 500 });
  }

  const data = await readRange(sheetId, "Registrations!A2:R");
  if (!data.ok) {
    console.error("[webinar-followups] sheet read failed:", data.reason);
    return NextResponse.json({ error: data.reason }, { status: 502 });
  }

  // Sheet row number = array index + 2 (the range starts at row 2).
  const rows = data.rows.map((row, i) => ({ row, sheetRow: i + 2 }));

  if (dryRun) {
    const plan = Object.fromEntries(
      due.map((kind) => {
        const pending = rows.filter(({ row }) => rowNeedsFollowup(row, kind));
        return [
          kind,
          authed
            ? pending.map(({ row }) => ({ email: row[FCOL.email], copy: copyKey(kind, row) }))
            : { count: pending.length },
        ];
      }),
    );
    return NextResponse.json({ success: true, dryRun: true, at: now.toISOString(), plan });
  }

  const summary: Record<string, { sent: number; failed: number; remaining: number }> = {};
  let budget = MAX_PER_RUN;

  for (const kind of due as FollowupKind[]) {
    const pending = rows.filter(({ row }) => rowNeedsFollowup(row, kind));
    const seen = new Set<string>();
    let sent = 0;
    let failed = 0;

    for (const { row, sheetRow } of pending) {
      if (budget <= 0) break;
      const email = row[FCOL.email].trim();
      const key = email.toLowerCase();
      const cell = `Registrations!${FOLLOWUP_COLUMN[kind]}${sheetRow}`;
      const stamp = new Date().toISOString().slice(0, 16) + "Z";

      // Someone who registered twice gets one email; the extra row is just stamped.
      if (seen.has(key)) {
        await updateCell(sheetId, cell, `duplicate ${stamp}`);
        continue;
      }
      seen.add(key);

      const variant: 0 | 1 = sheetRow % 2 === 0 ? 0 : 1;
      budget -= 1;
      const delivery = await send(copyKey(kind, row), email, row[FCOL.name] ?? "", variant);
      if (!delivery.ok) {
        failed += 1;
        console.error("[webinar-followups] send failed:", delivery.reason, { email, kind });
        continue;
      }
      sent += 1;

      const marked = await updateCell(sheetId, cell, `${variant === 0 ? "A" : "B"} ${stamp}`);
      if (!marked.ok) {
        // Without the stamp the next run would email this person again, so stop.
        console.error("[webinar-followups] could not stamp row, stopping:", marked.reason, { email, kind });
        return NextResponse.json({ error: marked.reason, kind, summary }, { status: 502 });
      }
    }
    summary[kind] = { sent, failed, remaining: pending.length - sent - failed };
  }

  console.log("[webinar-followups]", summary);
  return NextResponse.json({ success: true, summary });
}
