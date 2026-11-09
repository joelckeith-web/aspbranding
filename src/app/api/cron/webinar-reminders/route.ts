import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { readRange, updateCell } from "@/lib/sheets";
import { isTestLead } from "@/lib/test-lead";
import { WEBINAR, fillDate } from "@/lib/webinar";
import {
  COL,
  SENT_COLUMN,
  dueReminder,
  rowNeedsReminder,
  type ReminderKind,
} from "@/lib/webinar-reminders";
import { WEBINAR_COPY } from "@/app/webinar/copy";

// Vercel Cron, every 15 minutes (vercel.json). Sends the day-before and
// hour-before emails to the "Registrations" tab of WEBINAR_SHEET_ID and stamps
// columns L and M as each one goes out, so a retry never double-sends.
//
// Idle until WEBINAR.startsAt, dateLabel and zoomUrl are all set.
//
// Manual checks (Authorization: Bearer CRON_SECRET):
//   ?dryRun=1&at=2026-12-08T19:05:00Z  who would be emailed at that moment
//   ?previewTo=name+test@aspbranding.com  send both emails to one test address

export const maxDuration = 120;

const MAX_PER_RUN = 60;

const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

function buildEmail(kind: ReminderKind, name: string): { subject: string; html: string } {
  const zoom = WEBINAR.zoomUrl ?? "";
  const copy = WEBINAR_COPY.reminderEmails[kind];
  const link = `<a href="${esc(zoom)}">${esc(zoom)}</a>`;
  const paragraphs = esc(fillDate(copy.body))
    .replaceAll("{{ZOOM_LINK}}", link)
    .split(/\n{2,}/)
    .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
    .join("");
  const first = String(name).trim().split(/\s+/)[0];
  return { subject: copy.subject, html: `${first ? `<p>${esc(first)},</p>` : ""}${paragraphs}` };
}

function sendReminder(kind: ReminderKind, to: string, name: string) {
  const { subject, html } = buildEmail(kind, name);
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
  if (!cronSecret || request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { startsAt, dateLabel, zoomUrl } = WEBINAR;
  if (!startsAt || !dateLabel || !zoomUrl) {
    return NextResponse.json({ success: true, skipped: "webinar date, time or Zoom link not set" });
  }

  const params = request.nextUrl.searchParams;

  const previewTo = params.get("previewTo");
  if (previewTo) {
    if (!isTestLead(previewTo)) {
      return NextResponse.json({ error: "previewTo must be a test address" }, { status: 400 });
    }
    const day = await sendReminder("dayBefore", previewTo, "Test");
    const hour = await sendReminder("hourBefore", previewTo, "Test");
    return NextResponse.json({ success: day.ok && hour.ok, day, hour });
  }

  const dryRun = params.get("dryRun") === "1";
  const at = params.get("at");
  const now = dryRun && at ? new Date(at) : new Date();
  const kind = dueReminder(startsAt, now);
  if (!kind) return NextResponse.json({ success: true, due: null });

  const sheetId = process.env.WEBINAR_SHEET_ID;
  if (!sheetId) {
    console.error("[webinar-reminders] WEBINAR_SHEET_ID is not set; reminder not sent:", kind);
    return NextResponse.json({ error: "WEBINAR_SHEET_ID is not set" }, { status: 500 });
  }

  const data = await readRange(sheetId, "Registrations!A2:M");
  if (!data.ok) {
    console.error("[webinar-reminders] sheet read failed:", data.reason);
    return NextResponse.json({ error: data.reason }, { status: 502 });
  }

  // Sheet row number = array index + 2 (the range starts at row 2).
  const pending = data.rows
    .map((row, i) => ({ row, sheetRow: i + 2 }))
    .filter(({ row }) => rowNeedsReminder(row, kind, startsAt));

  if (dryRun) {
    return NextResponse.json({
      success: true,
      dryRun: true,
      due: kind,
      count: pending.length,
      recipients: pending.map(({ row }) => row[COL.email]),
    });
  }

  let sent = 0;
  let failed = 0;
  const seen = new Set<string>();

  for (const { row, sheetRow } of pending.slice(0, MAX_PER_RUN)) {
    const email = row[COL.email].trim();
    const key = email.toLowerCase();
    const cell = `Registrations!${SENT_COLUMN[kind]}${sheetRow}`;
    const stamp = new Date().toISOString();

    // Someone who registered twice gets one email; the extra row is just stamped.
    if (seen.has(key)) {
      await updateCell(sheetId, cell, `duplicate ${stamp}`);
      continue;
    }
    seen.add(key);

    const delivery = await sendReminder(kind, email, row[COL.name] ?? "");
    if (!delivery.ok) {
      failed += 1;
      console.error("[webinar-reminders] send failed:", delivery.reason, { email, kind });
      continue;
    }
    sent += 1;

    const marked = await updateCell(sheetId, cell, stamp);
    if (!marked.ok) {
      // Without the stamp the next run would email this person again, so stop.
      console.error("[webinar-reminders] could not stamp row, stopping:", marked.reason, { email, kind });
      return NextResponse.json({ error: marked.reason, kind, sent, failed }, { status: 502 });
    }
  }

  console.log("[webinar-reminders]", { kind, sent, failed, pending: pending.length });
  return NextResponse.json({ success: true, kind, sent, failed, remaining: Math.max(pending.length - MAX_PER_RUN, 0) });
}
