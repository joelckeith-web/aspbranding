// The five pre-event and follow-up emails for the Dec 9 workshop. Copy comes
// from the Google Doc "AI for Founders Webinar - Pre-Event and Follow-Up
// Emails" (18QrgdLpk_AN3Yl-jUTqhBseCKwYcf9Njr5C0PHF94ak). Kept free of I/O so
// the send route stays small and these rules can be checked on their own.
//
// Registrations sheet, columns added for this job:
//   N  Attended         "Yes" / "No", filled from the Zoom attendance report
//   O  Email 1 Sent     two-minute check
//   P  Email 2/3 Sent   recording (2 = attended, 3 = missed it)
//   Q  Email 4 Sent     what to do first
//   R  Email 5 Sent     free audit invitation (marketing consent only)

import { BUSINESS } from "@/lib/constants";
import { REPLAY, REPLAY_PATH } from "@/lib/webinar-replay";

export type FollowupKind = "email1" | "recording" | "email4" | "email5";

/** Registrations sheet columns (zero-based). */
export const FCOL = {
  registeredAt: 0,
  name: 2,
  email: 3,
  consent: 7,
  status: 10,
  attended: 13,
  email1: 14,
  recording: 15,
  email4: 16,
  email5: 17,
} as const;

export const FOLLOWUP_COLUMN: Record<FollowupKind, "O" | "P" | "Q" | "R"> = {
  email1: "O",
  recording: "P",
  email4: "Q",
  email5: "R",
};

// Send windows, UTC. 15:00Z is 10:00 AM Eastern in December. Each window
// spans many 15-minute cron runs, so a missed run still goes out.
const WINDOWS: Record<FollowupKind, { opens: string; closes: string }> = {
  // Wed Dec 2, 10 AM ET, until the morning of the day-before reminder.
  email1: { opens: "2026-12-02T15:00:00Z", closes: "2026-12-08T12:00:00Z" },
  // From 75 minutes after the 2 PM ET start. Also waits for the replay video
  // and the Attended column (see rowNeedsFollowup).
  recording: { opens: "2026-12-09T20:15:00Z", closes: "2026-12-16T15:00:00Z" },
  // Fri Dec 11, 10 AM ET.
  email4: { opens: "2026-12-11T15:00:00Z", closes: "2026-12-13T15:00:00Z" },
  // Wed Dec 16, 10 AM ET.
  email5: { opens: "2026-12-16T15:00:00Z", closes: "2026-12-18T15:00:00Z" },
};

export const REPLAY_URL = `${BUSINESS.url}${REPLAY_PATH}`;

/** Every follow-up open at `now`. */
export function dueFollowups(now: Date): FollowupKind[] {
  const t = now.getTime();
  return (Object.keys(WINDOWS) as FollowupKind[]).filter(
    (k) => t >= Date.parse(WINDOWS[k].opens) && t <= Date.parse(WINDOWS[k].closes),
  );
}

/** The recording email only goes out once the replay video is on the page. */
export const replayReady = () => Boolean(REPLAY.youtubeId);

const yesNo = (v: string | undefined) => (v ?? "").trim().toLowerCase();

/**
 * True when this row should get `kind` now: real registrants only, once each.
 * The recording email waits until the row's Attended cell says Yes or No.
 * Email 5 goes only to people who gave marketing consent.
 */
export function rowNeedsFollowup(row: string[], kind: FollowupKind): boolean {
  if ((row[FCOL.status] ?? "").trim() !== "Registered") return false;
  if (!(row[FCOL.email] ?? "").includes("@")) return false;
  if ((row[FCOL[kind]] ?? "").trim()) return false;
  if (kind === "recording") {
    const a = yesNo(row[FCOL.attended]);
    return a === "yes" || a === "no";
  }
  if (kind === "email5") return yesNo(row[FCOL.consent]) === "yes";
  return true;
}

type Copy = { subjects: [string, string]; body: string };

// Bodies are the Doc text. {{FIRST_NAME}}, {{ZOOM_LINK}} and {{REPLAY_LINK}}
// are filled at send time; bare https:// URLs become links.
const AUDIT_URL =
  "https://calendly.com/joel-keith-asp/free-30-minute-ai-search-audit?utm_source=webinar&utm_medium=email&utm_campaign=webinar-dec-9";
const KIT_URL = "https://www.aspbranding.com/audit-kit";

export const FOLLOWUP_COPY: Record<"email1" | "email2" | "email3" | "email4" | "email5", Copy> = {
  email1: {
    subjects: ["Will ChatGPT name your business?", "A two-minute check for the December 9 workshop"],
    body: `Hey {{FIRST_NAME}},

You're registered for the free workshop with Ryan Estes and me on Wednesday, December 9 at 2:00 PM ET. It's live on Zoom and runs 60 minutes.

Join on Zoom here: {{ZOOM_LINK}}

I have one two-minute check for you to do ahead of it.

Open ChatGPT. Type a full sentence asking who to call for your service in your town, the way a customer would. Then see whether your business gets named.

Feel free to reply to this email with what you found. I'd love to see it.

See you on the 9th!

Thanks,
Joel`,
  },
  email2: {
    subjects: ["The recording and your audit kit", "Thanks for joining the workshop"],
    body: `Hey {{FIRST_NAME}},

Thanks for joining Ryan and me today.

The recording is here if you want it: {{REPLAY_LINK}}

You can get the free audit kit here: ${KIT_URL}

To start, fill in your business details in the prompt. Then paste it into a new Claude chat with web search on. Attach screenshots of your Google profile if you have them. It audits your business and then writes a 30-day plan.

A full run can take anywhere from 20 minutes to an hour and a half, depending on how big your business is.

Claude makes mistakes. Open the links it gives you first, then act on what it says.

If you'd rather we run this audit on your business with you, book a free 30-minute audit here: ${AUDIT_URL}

If you hire ASP after, we'll put a $1,000 credit toward your first month.

Hope it helps!

Thanks,
Joel`,
  },
  email3: {
    subjects: ["The workshop recording", "The recording and a free audit kit"],
    body: `Hey {{FIRST_NAME}},

Sorry we missed you at the workshop today. The day gets away from all of us.

The recording is here whenever you have time: {{REPLAY_LINK}}

In it, I audit real Google Business Profiles and websites live using Claude and look at the answers from Google AI Overviews, Google AI Mode, ChatGPT, Gemini and Perplexity.

There's also a free audit kit. It has one prompt that audits your business and then writes a 30-day plan.

You can get it here: ${KIT_URL}

It runs in Claude, and Claude makes mistakes, so open the links it gives you first, then act on what it says.

If you'd rather we run this audit on your business with you, book a free 30-minute audit here: ${AUDIT_URL}

If you hire ASP after, we'll put a $1,000 credit toward your first month.

Feel free to reply if you have any questions.

Thanks,
Joel`,
  },
  email4: {
    subjects: ["What to do first with your 30-day plan", "Start with week one"],
    body: `Hey {{FIRST_NAME}},

If you've run the audit prompt, you have a 30-day plan. Pick the first week and start there.

Each week has 3 to 5 tasks, written for an owner to start on without hiring anyone. Each task says what to do, why it matters and where it goes.

The plan covers what to build out, like missing service pages, town pages or profile details. It covers plain answers to what customers ask, with real details. And it covers where to get listed, in directories and lists that don't mention you yet.

If you haven't run it yet, the prompt is in the free audit kit: ${KIT_URL}

A full run can take 20 minutes to an hour and a half, depending on how big your business is.

If you'd rather we run this audit on your business with you, book a free 30-minute audit here: ${AUDIT_URL}

If you hire ASP after, we'll put a $1,000 credit toward your first month.

Thanks,
Joel`,
  },
  email5: {
    subjects: ["Would you rather have someone run this?", "If you'd like ASP to run this for you"],
    body: `Hey {{FIRST_NAME}},

The prompt in the free audit kit writes a 30-day plan for an owner to start on without hiring anyone. If you'd rather have ASP run this for you, I'd be glad to talk.

ASP runs marketing for home service businesses and builds the tracking that proves which marketing booked which jobs.

Following our onboarding process, within 30 days you'd see which channel, campaign and page produced each digital lead.

Our clients own the website, the accounts and the data.

If that sounds useful, book a free 30-minute audit here: ${AUDIT_URL}

We'll go through your business together. If you decide to work with ASP after, you get a $1,000 credit toward your first month.

And if you'd rather take this on yourself, I hope it goes well!

Thanks,
Joel`,
  },
};

/** Which Doc email a row gets for `kind`. */
export function copyKey(kind: FollowupKind, row: string[]): keyof typeof FOLLOWUP_COPY {
  if (kind === "recording") return yesNo(row[FCOL.attended]) === "yes" ? "email2" : "email3";
  return kind;
}

const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

const FOOTER =
  "You're getting this because you registered for the AI for Founders x ASP workshop. Reply \"stop\" and I won't email you about it again.";

/**
 * Builds one email. `variant` picks subject A (0) or B (1); the route splits
 * the list by sheet row so both subjects get tested.
 */
export function buildFollowup(
  key: keyof typeof FOLLOWUP_COPY,
  name: string,
  variant: 0 | 1,
  links: { zoom: string; replay: string },
): { subject: string; html: string; text: string } {
  const copy = FOLLOWUP_COPY[key];
  const first = String(name ?? "").trim().split(/\s+/)[0] || "there";
  const text = copy.body
    .replaceAll("{{FIRST_NAME}}", first)
    .replaceAll("{{ZOOM_LINK}}", links.zoom)
    .replaceAll("{{REPLAY_LINK}}", links.replay);
  const html =
    text
      .split(/\n{2,}/)
      .map((p) =>
        `<p>${esc(p)
          .replace(/https:\/\/[^\s<]+/g, (u) => `<a href="${u}">${u}</a>`)
          .replace(/\n/g, "<br/>")}</p>`,
      )
      .join("") + `<p style="color:#888;font-size:12px">${esc(FOOTER)}</p>`;
  return { subject: copy.subjects[variant], html, text: `${text}\n\n${FOOTER}` };
}
