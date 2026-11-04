// Copy for the AI for Founders x ASP live audit workshop. Drafted by the bounded
// writer from the 2026-11-04 job packet (Joel's 10/20 brief, the deck's run of
// show, the approved bios). {{DATE}} / {{ZOOM_LINK}} are filled from
// src/lib/webinar.ts.

export type WebinarCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; subhead: string; dateLine: string };
  learn: { header: string; items: { title: string; body: string }[] };
  show: { header: string; rows: { time: string; body: string }[] };
  who: { header: string; body: string };
  hosts: { header: string; ryan: string; joel: string };
  faq: { q: string; a: string }[];
  finalCta: { header: string; body: string; button: string };
  form: { heading: string; subtext: string; submitLabel: string };
  confirmationEmail: { subject: string; body: string };
};

export const WEBINAR_COPY: WebinarCopy = {
  meta: {
    title: "Does AI recommend your business? Free live audit workshop",
    description:
      "Watch real Google Business Profiles and websites get audited live with Claude. A free 60-minute Zoom workshop for home service business owners.",
  },
  hero: {
    eyebrow: "Free live workshop from AI for Founders with ASP",
    h1: "When a customer asks AI who to call, does it name you?",
    subhead:
      "Joel Keith audits real Google Business Profiles and websites live, using the AI tool Claude. Ryan Estes hosts, and attendees get a prompt pack, a tools list and a 30-day plan.",
    dateLine: "Live on Zoom on {{DATE}}. 60 minutes. Free.",
  },
  learn: {
    header: "What you will see and take with you",
    items: [
      {
        title: "Real profiles and websites, audited live",
        body: "Joel audits real Google Business Profiles and websites, live with Claude. While Claude works, he and Ryan look at the profile and the site on a phone.",
      },
      {
        title: "What the AI tools answer",
        body: "Joel pulls up the answers from Google AI Overviews, Google AI Mode, ChatGPT, Gemini and Perplexity. You see them live, as the audit runs.",
      },
      {
        title: "The basics that still book jobs",
        body: "AI is the focus, but Joel and Ryan also cover the basics: answer fast, know what books jobs, price for profit and own your audience.",
      },
      {
        title: "A prompt pack, a tools list and a 30-day plan",
        body: "Attendees get this handout. We cover resources and next steps at the end.",
      },
    ],
  },
  show: {
    header: "How the 60 minutes run",
    rows: [
      { time: "Minutes 0 to 5", body: "Ryan opens, introduces Joel and explains what we will do today." },
      { time: "Minutes 5 to 15", body: "Joel explains why AI comes first and how customers find contractors now." },
      {
        time: "Minutes 15 to 35",
        body: "Live audit one. Joel drives and Ryan asks questions. While Claude works, they look at the profile, the site on a phone and the answers from AI tools.",
      },
      {
        time: "Minutes 35 to 45",
        body: "Live audit two, or an attendee's business on the hot seat for an audit. Joel drives and Ryan picks.",
      },
      { time: "Minutes 45 to 50", body: "Beyond AI. Joel and Ryan cover the basics that still book jobs." },
      { time: "Minutes 50 to 60", body: "Ryan takes your questions from the chat. Then we close with resources and next steps." },
    ],
  },
  who: {
    header: "Who this is for",
    body: "This is for owners of home service businesses that already have customers, revenue and a crew. The businesses lined up for the audits are picked in advance, with the owners' OK, and come from different trades.",
  },
  hosts: {
    header: "Meet your host and guest",
    ryan: "Ryan Estes co-founded the bootstrapped agency Kitcaster, which Moburst acquired in April 2025. He created the podcast, newsletter and workshop series AI for Founders. Here, he hosts the workshop, reads the chat and runs the Q&A.",
    joel: "Joel Keith is the CEO at ASP, a marketing agency for home service businesses. AI search is one of the subjects he works on, including Google AI Overviews, AI Mode and answer engine optimization (AEO). He thinks marketing should be judged on leads, not traffic, meaning forms submitted and calls made, traced back to the channel that produced them. At ASP, the client owns everything: the website, the accounts and the data. ASP is an Official Housecall Pro Affiliate Partner. On this workshop, he runs the live audits.",
  },
  faq: [
    { q: "Is it free?", a: "Yes. The workshop is free. It runs live on Zoom for 60 minutes." },
    {
      q: "Who is it for?",
      a: "Owners of home service businesses that already have customers, revenue and a crew.",
    },
    {
      q: "What do I need to join?",
      a: "You need the Zoom link, which we email you when you sign up. Bring your questions for the chat.",
    },
    {
      q: "How do I get the link?",
      a: "Fill out the form on this page. Your Zoom link comes in the confirmation email.",
    },
  ],
  finalCta: {
    header: "See what AI says about a real business, live",
    body: "Join us live on Zoom on {{DATE}}. Watch the audits, ask your question in the chat and get the handout.",
    button: "Sign up free",
  },
  form: {
    heading: "Sign up for the free workshop",
    subtext: "Tell us where to send your Zoom link.",
    submitLabel: "Send me the Zoom link",
  },
  confirmationEmail: {
    subject: "You're in: your Zoom link for the live AI audits",
    body: "You are signed up for our free live workshop. We will audit real Google Business Profiles and websites, live with Claude, and look at the answers from AI tools.\n\nWhen: {{DATE}} (live, 60 minutes)\nJoin on Zoom: {{ZOOM_LINK}}\n\nRyan Estes hosts. I run the audits. Attendees get a handout with a prompt pack, a tools list and a 30-day plan.\n\nBring your questions. Ryan takes them from the chat near the end.\n\nSee you there.\n\nJoel Keith, ASP",
  },
};
