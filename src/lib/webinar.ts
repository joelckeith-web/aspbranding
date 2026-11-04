// Live audit workshop: AI for Founders (Ryan Estes hosts) with ASP (Joel Keith,
// guest). Registration lives on /webinar/ai-search.
//
// The date and Zoom link are not set yet (Joel + Ryan lock them by email). Until
// they are, the page says "date coming soon" and the confirmation email promises
// the link by email. Fill these in, nothing else needs to change.

export const WEBINAR = {
  /** e.g. "Wednesday, December 9 at 1:00 PM ET". null = not announced. */
  dateLabel: null as string | null,
  /** Zoom join/registration link sent in the confirmation email. */
  zoomUrl: null as string | null,
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
