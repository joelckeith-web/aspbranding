import type { Metadata } from "next";
import { StrategyCallLanding, DEFAULT_COPY, type StrategyCallCopy } from "../StrategyCallLanding";

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
    "Follow our onboarding process and within 30 days you'll see which channel, campaign and page produced each digital lead. We run your marketing and build the tracking that proves which marketing booked which jobs. Word of mouth and walk-ins can't be traced by any system, and we'll say so.",
  proof: [
    { stat: "$3M+", label: "Revenue barrier broken", source: "Regional HVAC company, 12-month case study" },
    { stat: "161+", label: "Google Ads conversions", source: "Regional HVAC company, 12-month case study" },
    { stat: "$29.27", label: "Cost per Local Service Ads lead", source: "Regional HVAC company, 12-month case study" },
    { stat: "244", label: "Call clicks from Google Business Profile", source: "Regional HVAC company case study" },
  ],
  casesEyebrow: "HVAC case study",
  casesHeading: "How a regional HVAC company broke past $3M in revenue",
  fitYes: [
    "You run an HVAC company doing about $750,000 or more a year.",
    "You have a team of at least 3 people.",
    "You still run the business hands-on.",
  ],
  fitNo: [
    "HVAC companies under about $750K a year or with fewer than 3 people.",
    "Owners who can't fund ad spend on top of our fee.",
    "Shops that won't keep every job and lead in one field system.",
  ],
  faqs: [
    {
      q: "Does it matter which field system we use?",
      a: "To trace booked jobs to their source, every job and lead needs to live in one field system. We're an official Housecall Pro Affiliate Partner.",
    },
    ...DEFAULT_COPY.faqs,
  ],
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
