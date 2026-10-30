import type { Metadata } from "next";
import { StrategyCallLanding, DEFAULT_COPY, STEPS, type StrategyCallCopy } from "../StrategyCallLanding";

// HVAC version of the paid strategy-call page (Joel, 2026-10-26: ASP pivots
// toward HVAC; HVAC may be called out in ads). Same layout and form as
// /strategy-call; only the copy below changes. Copy is the citation-verified
// draft (scratchpad hvac/draft.md). Noindex, not in the sitemap or nav.

export const metadata: Metadata = {
  title: "Strategy Call for HVAC Owners",
  description:
    "Can't tell which marketing booked which jobs? Talk with Joel, a partner at ASP, about whether we're a fit for your HVAC company.",
  // Overrides the site-wide keyword list, which names other trades.
  keywords: ["HVAC marketing", "HVAC lead tracking", "HVAC marketing agency"],
  robots: { index: false, follow: false },
};

const HVAC_COPY: StrategyCallCopy = {
  ...DEFAULT_COPY,
  heroEyebrow: "Strategy call for HVAC owners",
  heroLead: "HVAC owners:",
  heroGradient: "can't tell which marketing booked which jobs?",
  heroSub:
    "Follow our onboarding process and within 30 days you'll see which channel, campaign and page produced each digital lead. We run your marketing and build the tracking that proves which marketing booked which jobs.",
  // Joel, 2026-10-28: HVAC customers call; they don't walk in. The walk-ins
  // caveat stays on the general page only. Call-tracking wording is from the
  // citation-checked HVAC video script (2026-10-28).
  steps: STEPS.map((s) =>
    s.step === "3" ? { ...s, body: "Every month, we meet with you to go over the numbers." } : s,
  ),
  proof: [
    { stat: "$3M+", label: "Revenue barrier broken", source: "Regional HVAC company, 12-month case study" },
    { stat: "161+", label: "Google Ads conversions", source: "Regional HVAC company, 12-month case study" },
    { stat: "$29.27", label: "Cost per Local Service Ads lead", source: "Regional HVAC company, 12-month case study" },
    { stat: "244", label: "Call clicks from Google Business Profile", source: "Regional HVAC company case study" },
  ],
  casesEyebrow: "HVAC case study",
  casesHeading: "How a regional HVAC company broke past $3M in revenue",
  fitYes: [
    "You run an HVAC company doing about $65K or more a month.",
    "You have a 3-5 person team.",
    "You still run the business hands-on.",
  ],
  fitNo: [
    "HVAC companies under about $65K a month or with fewer than 3 people.",
    "Owners who can't fund ad spend on top of our fee.",
    "Shops that won't keep every job and lead in one field system.",
  ],
  faqs: [
    {
      q: "Does it matter which field system we use?",
      a: "To trace booked jobs to their source, every job and lead needs to live in one field system. We're an official Housecall Pro Affiliate Partner.",
    },
    ...DEFAULT_COPY.faqs.map((f) =>
      f.q === "What can you track and what can't you?"
        ? {
            q: "How do you track phone calls?",
            a: "When somebody finds you online and calls, call tracking records the call and shows where it came from, like the Google ad or keyword. For calls tracking can't see, your office asks how they found you. Follow our onboarding process and within 30 days you'll see which channel, campaign and page produced each digital lead.",
          }
        : f,
    ),
  ],
  // Joel's HVAC strategy-call video (YouTube, unlisted, uploaded 2026-10-30). The
  // points are lines from the video itself.
  video: {
    id: "3lnb2z6PenM",
    title: "HVAC Owners: Do You Know Which Marketing Made the Phone Ring?",
    poster: "/images/video/hvac-strategy-call-poster.webp",
    eyebrow: "Watch: 2 minutes with Joel",
    heading: "See which marketing made the phone ring.",
    points: [
      "Call tracking records each call and shows where it came from, like the Google ad or keyword.",
      "We set up the tracking first, then run the marketing on top of it, every month.",
      "Every account is in your name: the website, the ad accounts, the data.",
    ],
  },
  reviewsNote: "Reviews from ASP clients across industries.",
  // Viking's Google Ads in its ASP dashboard, Jul 1 – Sep 30, 2026 (Joel, 2026-10-26:
  // use an HVAC client's dashboard and the strongest period). 114.16 conversions
  // reported by Google Ads / 655 clicks = 17.4%.
  dashboardSrc: { src: "/images/proof/viking-google-ads-q3-2026.webp", width: 1297, height: 487 },
  dashboardAlt:
    "Viking Heating and Air Conditioning's Google Ads in its ASP dashboard, July to September 2026: $11,459.59 spend, 655 clicks, and conversions reported by Google Ads including 63.56 schedule-now clicks, 18 calls from ads, 15 contact forms, 10.6 call-link clicks and 7 Local Services phone leads.",
  dashboardCaption:
    "Viking Heating and Air Conditioning's Google Ads, July to September 2026: 114 conversions from 655 ad clicks, a 17.4% conversion rate."
};

export default function StrategyCallHvacPage() {
  return <StrategyCallLanding copy={HVAC_COPY} />;
}
