import { BUSINESS } from "@/lib/constants";
import { WEBINAR } from "@/lib/webinar";

// Add-to-calendar support for the webinar confirmation email: a Google
// Calendar link and a hosted .ics file (Apple Calendar, Outlook and others).
// Both stay off while WEBINAR.startsAt is null.

const DURATION_MIN = 60;
const TITLE = "Live AI audits: AI for Founders x ASP";
export const ICS_PATH = "/api/webinar/calendar";

function eventWindow(): { start: Date; end: Date } | null {
  if (!WEBINAR.startsAt) return null;
  const start = new Date(WEBINAR.startsAt);
  if (Number.isNaN(start.getTime())) return null;
  return { start, end: new Date(start.getTime() + DURATION_MIN * 60_000) };
}

/** 2026-12-09T19:00:00.000Z -> 20261209T190000Z */
const utcStamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

function details(): string {
  return [
    WEBINAR.zoomUrl ? `Join on Zoom: ${WEBINAR.zoomUrl}` : null,
    "Ryan Estes hosts. Joel Keith of ASP runs live audits of real home service businesses with Claude.",
  ]
    .filter(Boolean)
    .join("\n\n");
}

export function googleCalendarUrl(): string | null {
  const w = eventWindow();
  if (!w) return null;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: TITLE,
    dates: `${utcStamp(w.start)}/${utcStamp(w.end)}`,
    details: details(),
    location: WEBINAR.zoomUrl ?? "Zoom",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function icsUrl(): string | null {
  return eventWindow() ? `${BUSINESS.url}${ICS_PATH}` : null;
}

/** RFC 5545 text escaping. */
const icsText = (s: string) =>
  s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");

/** Fold lines longer than 75 octets (RFC 5545 3.1). */
function fold(line: string): string {
  const out: string[] = [];
  let rest = line;
  while (rest.length > 74) {
    out.push(rest.slice(0, 74));
    rest = " " + rest.slice(74);
  }
  out.push(rest);
  return out.join("\r\n");
}

export function icsFile(): string | null {
  const w = eventWindow();
  if (!w) return null;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ASP//Webinar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:webinar-${utcStamp(w.start)}@aspbranding.com`,
    `DTSTAMP:${utcStamp(w.start)}`,
    `DTSTART:${utcStamp(w.start)}`,
    `DTEND:${utcStamp(w.end)}`,
    `SUMMARY:${icsText(TITLE)}`,
    `DESCRIPTION:${icsText(details())}`,
    `LOCATION:${icsText(WEBINAR.zoomUrl ?? "Zoom")}`,
    ...(WEBINAR.zoomUrl ? [`URL:${WEBINAR.zoomUrl}`] : []),
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:${icsText(TITLE)}`,
    "TRIGGER:-PT15M",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.map(fold).join("\r\n") + "\r\n";
}

/** HTML line for the confirmation email, or "" when the date isn't set. */
export function calendarLinksHtml(): string {
  const g = googleCalendarUrl();
  const i = icsUrl();
  if (!g || !i) return "";
  return `<p>Add it to your calendar: <a href="${g.replace(/&/g, "&amp;")}">Google Calendar</a> · <a href="${i}">Apple or Outlook</a></p>`;
}
