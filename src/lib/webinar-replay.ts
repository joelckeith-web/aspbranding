// Replay page settings for /webinar/ai-search/replay. The page is ungated: the
// video plays for anyone with the link, and the free audit booking sits right
// under it (7FA step 18). Follow-up emails link here as {{REPLAY_LINK}}.

export const REPLAY = {
  /** YouTube video ID once the replay is uploaded. null = "coming soon" frame. */
  youtubeId: null as string | null,
  /** Timestamps for "in case you missed this part". Empty = section hidden. */
  chapters: [] as { time: string; seconds: number; label: string }[],
};

const AUDIT_BASE = "https://calendly.com/joel-keith-asp/free-30-minute-ai-search-audit";

/** Free 30-minute audit booking link, tagged so replay bookings show apart. */
export const auditBookingUrl = (content: string) =>
  `${AUDIT_BASE}?utm_source=webinar&utm_medium=replay&utm_campaign=webinar-dec-9&utm_content=${content}`;

export const REPLAY_COPY = {
  meta: {
    title: "Replay: live AI audits of real home service businesses",
    description:
      "Watch the AI for Founders x ASP workshop: real Google Business Profiles and websites audited live with Claude, plus a free 30-minute audit of your own business.",
  },
  hero: {
    eyebrow: "Workshop replay · AI for Founders with ASP",
    h1: "When a customer asks AI who to call, does it name you?",
    subhead:
      "Joel Keith audits real Google Business Profiles and websites live, using the AI tool Claude. Ryan Estes hosts.",
    comingSoon: "The replay goes up here after the live workshop on December 9.",
  },
  offer: {
    eyebrow: "Want this done for your business?",
    header: "Book a free 30-minute audit",
    body: "We run this audit on your business, with you, in 30 minutes. If you hire ASP after, you get a $1,000 credit toward your first month.",
    button: "Book your free audit",
    kitLead: "Rather run it yourself?",
    kitButton: "Get the free audit kit",
  },
  chapters: { header: "Jump to a part" },
  hosts: { header: "Who you'll hear from" },
  finalCta: {
    header: "See what AI says about your business",
    body: "Book a free 30-minute audit and we'll go through it with you.",
  },
};
