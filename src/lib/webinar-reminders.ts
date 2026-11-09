// Timing rules for the webinar reminder emails. Kept free of I/O so the send
// route stays small and these rules can be exercised on their own.

export type ReminderKind = "dayBefore" | "hourBefore";

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;

// Each window spans several 15-minute cron runs, so a missed run or a batch
// that needs a second pass still goes out on time.
const WINDOWS: Record<ReminderKind, { opensBefore: number; closesBefore: number }> = {
  dayBefore: { opensBefore: 24 * HOUR, closesBefore: 20 * HOUR },
  hourBefore: { opensBefore: 60 * MINUTE, closesBefore: 15 * MINUTE },
};

/** Registrants sheet columns (zero-based) used by the reminder job. */
export const COL = { registeredAt: 0, name: 2, email: 3, status: 10, dayBefore: 11, hourBefore: 12 } as const;
/** Column letters for the "sent" stamps. */
export const SENT_COLUMN: Record<ReminderKind, "L" | "M"> = { dayBefore: "L", hourBefore: "M" };

/** Which reminder is due at `now`, if any. */
export function dueReminder(startsAt: string | null, now: Date): ReminderKind | null {
  if (!startsAt) return null;
  const start = new Date(startsAt).getTime();
  if (Number.isNaN(start)) return null;
  const t = now.getTime();
  for (const kind of Object.keys(WINDOWS) as ReminderKind[]) {
    const { opensBefore, closesBefore } = WINDOWS[kind];
    if (t >= start - opensBefore && t <= start - closesBefore) return kind;
  }
  return null;
}

/** Sheet stamps are UTC "YYYY-MM-DD HH:MM". Returns null if unreadable. */
function parseStamp(value: string | undefined): number | null {
  if (!value) return null;
  const t = new Date(`${value.trim().replace(" ", "T")}Z`).getTime();
  return Number.isNaN(t) ? null : t;
}

/**
 * True when this row should get `kind` now. Only real registrants, only once,
 * and not someone who signed up after the reminder window opened: their
 * confirmation email is more recent than the reminder would be. A timestamp we
 * cannot read still gets the reminder, since a missed reminder costs more than
 * a redundant one.
 */
export function rowNeedsReminder(row: string[], kind: ReminderKind, startsAt: string): boolean {
  if ((row[COL.status] ?? "").trim() !== "Registered") return false;
  if (!(row[COL.email] ?? "").includes("@")) return false;
  if ((row[COL[kind]] ?? "").trim()) return false;
  const registered = parseStamp(row[COL.registeredAt]);
  if (registered === null) return true;
  return registered < new Date(startsAt).getTime() - WINDOWS[kind].opensBefore;
}
