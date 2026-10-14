// Live webinar with Ryan Estes (Inbox Alchemy). Two landing-page variants
// test the topic: /webinar/know-your-numbers and /webinar/ai-search.
//
// The date and Zoom link are not set yet (Joel + Ryan lock them on a call).
// Until they are, the pages say "date coming soon" and the confirmation email
// promises the link by email. Fill these in — nothing else needs to change.

export const WEBINAR = {
  /** e.g. "Tuesday, November 11 at 1:00 PM ET". null = not announced. */
  dateLabel: null as string | null,
  /** Zoom join/registration link sent in the confirmation email. */
  zoomUrl: null as string | null,
};

export const WEBINAR_TOPICS = {
  numbers: "Know your numbers",
  "ai-search": "Getting found in AI search",
} as const;

export type WebinarTopic = keyof typeof WEBINAR_TOPICS;

export const REVENUE_RANGES = [
  "Under $500K",
  "$500K – $1M",
  "$1M – $3M",
  "$3M – $10M",
  "$10M+",
] as const;

export function dateText(fallback = "Date coming soon"): string {
  return WEBINAR.dateLabel ?? fallback;
}

/** Fill {{DATE}} in copy. Until a date is set, "on {{DATE}}" drops out of
 *  sentences and a bare {{DATE}} reads as the fallback. */
export function fillDate(text: string, fallback = "Date coming soon"): string {
  if (WEBINAR.dateLabel) return text.replaceAll("{{DATE}}", WEBINAR.dateLabel);
  return text.replaceAll(" on {{DATE}}", "").replaceAll("{{DATE}}", fallback);
}
