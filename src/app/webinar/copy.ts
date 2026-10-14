// Copy for both webinar landing-page variants. Drafted by the bounded writer
// from the 2026-10-14 job packet; every factual line traces to Joel's
// confirmed LinkedIn About, the live site, or Ryan's own published bio
// (Kitcaster media kit, inboxalchemy.co). {{DATE}} / {{ZOOM_LINK}} are filled
// from src/lib/webinar.ts.

import type { WebinarTopic } from "@/lib/webinar";

export type WebinarCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; subhead: string; dateLine: string };
  learn: { header: string; items: { title: string; body: string }[] };
  who: { header: string; body: string };
  hosts: { header: string; joel: string; ryan: string };
  faq: { q: string; a: string }[];
  finalCta: { header: string; body: string; button: string };
  form: { heading: string; subtext: string; submitLabel: string };
  confirmationEmail: { subject: string; body: string };
};

const RYAN_BIO =
  "Ryan Estes co-founded the bootstrapped agency Kitcaster, which Moburst acquired in April 2025. He created the podcast, newsletter and workshop series AI for Founders. Inbox Alchemy builds, grows and monetizes newsletters for clients from solopreneurs to enterprise businesses, and it drafts The Joel Keith Newsletter. On this webinar, Ryan talks about email newsletters as a way to own your audience, and he runs the Q&A.";

const FORM = {
  heading: "Register for the webinar",
  subtext: "Your confirmation email has the Zoom link.",
  submitLabel: "Register for free",
};

const FAQ_FREE = { q: "Is the webinar free?", a: "Yes. It is free to register and free to attend live on Zoom." };
const FAQ_LINK = {
  q: "How do I get the link?",
  a: "Register with the form on this page. Your confirmation email has the Zoom link. If you do not see it, check your spam or promotions folder.",
};

export const WEBINAR_COPY: Record<WebinarTopic, WebinarCopy> = {
  numbers: {
    meta: {
      title: "Know Your Numbers | Free Webinar for Home Service Owners",
      description:
        "A free live webinar for home service business owners. Learn to trace every digital lead to the channel that produced it, with Joel Keith and Ryan Estes.",
    },
    hero: {
      eyebrow: "Free live webinar on Zoom",
      h1: "Find out which marketing books your jobs.",
      subhead:
        "A free live session for home service business owners who want to know where their work comes from. Joel Keith of ASP gives a short presentation, and Ryan Estes of Inbox Alchemy speaks and runs the Q&A.",
      dateLine: "Live on Zoom · {{DATE}}",
    },
    learn: {
      header: "What we will cover",
      items: [
        {
          title: "Trace every digital lead to its source.",
          body: "How to trace each form and call back to the channel that produced it, and why the Business Profile is the one most businesses get wrong.",
        },
        {
          title: "Response-time rules that decide who books the job.",
          body: "The speed-to-lead rules that decide who books the job when a new lead comes in.",
        },
        {
          title: "The money math behind your marketing.",
          body: "Margin by job type, breakeven, and what you can afford to spend to win a job.",
        },
        {
          title: "Build an audience your business owns.",
          body: "Ryan Estes of Inbox Alchemy on using an email newsletter to build an audience that belongs to your business.",
        },
      ],
    },
    who: {
      header: "Home service businesses with customers, revenue and a crew.",
      body: "This webinar is for owners of home service businesses that already have customers, revenue and a crew. It assumes you already have work coming in and want to know where it comes from.",
    },
    hosts: {
      header: "Who you will hear from",
      joel: "Joel Keith is the CEO and Managing Partner at ASP, a marketing agency for home service businesses. He thinks marketing should be judged on leads, not traffic: forms submitted and calls made, traced back to the channel that produced them. He wants owners to be able to check their results for themselves. At ASP, the team runs the marketing and builds the dashboard and attribution that prove it, and the client owns the website, the accounts and the data. ASP is an Official Housecall Pro Affiliate Partner.",
      ryan: RYAN_BIO,
    },
    faq: [
      FAQ_FREE,
      {
        q: "Who is it for?",
        a: "Owners of home service businesses that already have customers, revenue and a crew, and want to know which marketing brings in their work.",
      },
      {
        q: "What do I need to join?",
        a: "The Zoom link from your confirmation email. Bring any questions you have about your own marketing for the Q&A.",
      },
      FAQ_LINK,
    ],
    finalCta: {
      header: "See where your work comes from.",
      body: "Register for the live webinar on {{DATE}} and bring your questions for the Q&A.",
      button: "Register for free",
    },
    form: FORM,
    confirmationEmail: {
      subject: "You're registered: Know Your Numbers on {{DATE}}",
      body: "Thanks for registering for Know Your Numbers, a free live webinar for home service business owners.\n\nWhen: {{DATE}}\nJoin on Zoom: {{ZOOM_LINK}}\n\nI'll walk through how to trace each digital lead back to the channel that produced it. Ryan Estes of Inbox Alchemy will cover newsletters and run the Q&A. Bring your questions.\n\nJoel Keith, ASP",
    },
  },

  "ai-search": {
    meta: {
      title: "Getting Found in AI Search | Free Home Service Webinar",
      description:
        "A free live webinar for home service business owners on showing up in Google AI Overviews, AI Mode and ChatGPT. With Joel Keith and Ryan Estes.",
    },
    hero: {
      eyebrow: "Free live webinar on Zoom",
      h1: "Getting found when customers ask AI who to call.",
      subhead:
        "A free live session for home service business owners on how your business shows up when customers ask Google's AI Overviews, AI Mode or ChatGPT for a recommendation. Joel Keith of ASP gives a short presentation, and Ryan Estes of Inbox Alchemy speaks and runs the Q&A.",
      dateLine: "Live on Zoom · {{DATE}}",
    },
    learn: {
      header: "Questions we will answer",
      items: [
        {
          title: "What are AI Overviews and AI Mode?",
          body: "What each one is, explained in plain English, and where ChatGPT fits alongside them.",
        },
        {
          title: "What does answer engine optimization mean?",
          body: "What AEO means and what it looks like on a home service business website.",
        },
        {
          title: "Where does your business show up today?",
          body: "How to check whether AI Overviews, ChatGPT, Perplexity and Gemini mention your business, the kind of tracking ASP does for its clients.",
        },
        {
          title: "How do you own your audience?",
          body: "Ryan Estes of Inbox Alchemy on email newsletters as an audience your business owns, since AI answers are a channel you do not own.",
        },
      ],
    },
    who: {
      header: "Home service businesses with customers, revenue and a crew.",
      body: "This webinar is for owners of home service businesses that already have customers, revenue and a crew. It fits owners who want to know how their business shows up when customers turn to AI search.",
    },
    hosts: {
      header: "Who you will hear from",
      joel: "Joel Keith is the CEO and Managing Partner at ASP, a marketing agency for home service businesses. AI search is one of the subjects he works on, including Google AI Overviews, AI Mode and answer engine optimization (AEO). He thinks marketing should be judged on leads, not traffic, meaning forms submitted and calls made, traced back to the channel that produced them. At ASP, the client owns everything: the website, the accounts and the data. ASP is an Official Housecall Pro Affiliate Partner.",
      ryan: RYAN_BIO,
    },
    faq: [
      FAQ_FREE,
      {
        q: "Who is it for?",
        a: "Owners of home service businesses that already have customers, revenue and a crew, and want to know how their business shows up in AI search.",
      },
      {
        q: "What do I need to join?",
        a: "The Zoom link from your confirmation email. Bring your questions for the Q&A.",
      },
      FAQ_LINK,
    ],
    finalCta: {
      header: "Bring your AI search questions.",
      body: "Register for the live webinar on {{DATE}} and ask your questions in the Q&A.",
      button: "Register for free",
    },
    form: FORM,
    confirmationEmail: {
      subject: "You're registered: Getting Found in AI Search on {{DATE}}",
      body: "Thanks for registering for Getting Found in AI Search, a free live webinar for home service business owners.\n\nWhen: {{DATE}}\nJoin on Zoom: {{ZOOM_LINK}}\n\nI'll cover how your business can show up in Google AI Overviews, AI Mode and ChatGPT. Ryan Estes of Inbox Alchemy will cover newsletters and run the Q&A. Bring your questions.\n\nJoel Keith, ASP",
    },
  },
};
