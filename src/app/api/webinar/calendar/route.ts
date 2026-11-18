import { icsFile } from "@/lib/webinar-calendar";

// Serves the webinar as an .ics file for the "Apple or Outlook" link in the
// confirmation email. 404 until WEBINAR.startsAt is set.
export function GET() {
  const ics = icsFile();
  if (!ics) return new Response("Not found", { status: 404 });
  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="ai-audits-webinar-dec-9.ics"',
      "Cache-Control": "public, max-age=300",
    },
  });
}
