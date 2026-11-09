// Live audit workshop: AI for Founders (Ryan Estes hosts) with ASP (Joel Keith,
// guest). Registration lives on /webinar/ai-search.
//
// Setting any of these back to null closes sign-ups or turns reminders off.

export const WEBINAR = {
  /** e.g. "Wednesday, December 9 at 1:00 PM ET". null = not announced. */
  dateLabel: "Wednesday, December 9 at 2:00 PM ET" as string | null,
  /** Zoom join/registration link sent in the confirmation email. */
  zoomUrl: "https://us06web.zoom.us/j/87936094365" as string | null,
  /** Exact start with offset, e.g. "2026-12-09T14:00:00-05:00". Reminder emails
   *  are timed from this and stay off while it is null. */
  startsAt: "2026-12-09T14:00:00-05:00" as string | null,
};

export const WEBINAR_NAME = "AI for Founders x ASP live audits";

export const REVENUE_RANGES = [
  "Under $500K",
  "$500K – $1M",
  "$1M – $3M",
  "$3M – $10M",
  "$10M+",
] as const;

/** Fill {{DATE}} in copy. Until a date is set, "on {{DATE}}" drops out of
 *  sentences and a bare {{DATE}} reads as the fallback. */
export function fillDate(text: string, fallback = "Date coming soon"): string {
  if (WEBINAR.dateLabel) return text.replaceAll("{{DATE}}", WEBINAR.dateLabel);
  return text.replaceAll(" on {{DATE}}", "").replaceAll("{{DATE}}", fallback);
}
