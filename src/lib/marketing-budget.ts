// Data + math for the Marketing Budget Calculator (/marketing-budget-calculator).
//
// PROVENANCE — every number on this page traces to one of three places, and the
// page says which. Do not blur these together.
//
//   Google      cpc — Google Ads Keyword Planner top-of-page bid estimates,
//               pulled 2026-07-27 via the Google Ads API v23 under the ASP
//               Branding MCC. United States, English, Google Search only.
//               Refresh script: code/anvil/_tmp-trade-cpc-benchmarks.mjs
//   ASP         The 7-12% budget band and the three tiers. This is ASP's own
//               guidance drawn from its client base, NOT an industry benchmark
//               and NOT a Google figure. Labeled as such wherever it renders.
//   The visitor Their revenue and industry.
//
// Google publishes a low and a high top-of-page bid. The high runs 5-6x the low
// in every trade because it reflects the most expensive markets and the most
// aggressive bidders, so the low is used as the planning figure. Full data:
// "ASP Calculator — Trade CPC Benchmarks" in Drive > Systems & Tools.

export const CPC_SOURCE_DATE = "July 2026";

export const ATTRIBUTION =
  "Cost-per-click data: Google Ads Keyword Planner. These are Google's figures, not ASP estimates.";

export interface Industry {
  id: string;
  name: string;
  /** Google Keyword Planner low top-of-page bid, US nationwide, USD. */
  cpc: number;
  description: string;
}

export const industries: Industry[] = [
  {
    id: "hvac",
    name: "HVAC",
    cpc: 12.62,
    description:
      "Heating, ventilation, and air conditioning services. Highly seasonal with strong local competition.",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    cpc: 10.83,
    description:
      "Emergency and scheduled plumbing services. High urgency drives strong PPC returns.",
  },
  {
    id: "electrical",
    name: "Electrical",
    cpc: 6.32,
    description:
      "Residential and commercial electrical services. Steady demand with moderate competition.",
  },
  {
    id: "roofing",
    name: "Roofing",
    cpc: 13.5,
    description:
      "Roofing installation and repair. Higher ticket size with intense metro competition.",
  },
  {
    id: "landscaping",
    name: "Landscaping & Lawn Care",
    cpc: 3.18,
    description:
      "Lawn maintenance, landscaping, and outdoor living services. Seasonal with recurring revenue opportunities.",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    cpc: 9.0,
    description:
      "Residential and commercial pest management. Recurring service model with strong digital acquisition.",
  },
  {
    id: "cleaning",
    name: "Cleaning Services",
    cpc: 4.32,
    description:
      "Residential and commercial cleaning. Low barrier to entry means heavier ad spend needed to stand out.",
  },
  {
    id: "painting",
    name: "Painting",
    cpc: 6.7,
    description:
      "Interior and exterior painting services. Project-based with strong referral potential.",
  },
  {
    id: "garage-door",
    name: "Garage Door Services",
    cpc: 16.24,
    description:
      "Garage door repair, installation, and maintenance. Emergency-driven with high conversion rates.",
  },
  {
    id: "remodeling",
    name: "Remodeling & General Contracting",
    cpc: 7.91,
    description:
      "Home renovation and general contracting. Higher ticket, longer sales cycle requiring brand investment.",
  },
  {
    id: "flooring",
    name: "Flooring",
    cpc: 3.96,
    description:
      "Flooring installation and refinishing. Competitive market with strong visual marketing opportunities.",
  },
  {
    id: "fencing",
    name: "Fencing",
    cpc: 3.65,
    description:
      "Residential and commercial fence installation. Seasonal demand with strong local SEO opportunity.",
  },
  {
    id: "pool",
    name: "Pool Services",
    cpc: 2.04,
    description:
      "Pool construction, maintenance, and repair. Seasonal with high-value projects and recurring service.",
  },
  {
    id: "windows-doors",
    name: "Windows & Doors",
    cpc: 12.2,
    description:
      "Window and door replacement. Higher ticket with longer consideration cycle.",
  },
  {
    id: "solar",
    name: "Solar Installation",
    cpc: 3.61,
    description:
      "Solar panel installation and energy services. High CAC but strong lifetime value. Very competitive in metro areas.",
  },
];

export type TierKey = "maintain" | "compete" | "dominate";

export interface TierInfo {
  key: TierKey;
  label: string;
  tagline: string;
  /** Percent of gross revenue — total marketing budget, not ad spend alone. */
  range: [number, number];
  meaning: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

// ASP guidance, uniform across trades. The 7-12% band is where ASP's own
// clients run; 7-10% is where results have been best. Above 12% is a choice to
// push hard in a competitive market. Deliberately NOT varied per industry —
// ASP has no per-industry data to support that. The industry-specific number on
// this page is the Google CPC, and it is labeled as Google's.
export const tiers: TierInfo[] = [
  {
    key: "maintain",
    label: "Maintain",
    tagline: "Hold Your Position",
    range: [7, 9],
    meaning:
      "Enough to defend the ground you have. Covers core SEO, your Google Business Profile, reviews, and steady local ads. A fit if referrals still carry most of your work and you want digital backing them up.",
    color: "#4CC9F0",
    bgColor: "rgba(76, 201, 240, 0.08)",
    borderColor: "rgba(76, 201, 240, 0.25)",
  },
  {
    key: "compete",
    label: "Compete",
    tagline: "Push for Growth",
    range: [9, 12],
    meaning:
      "Enough to take work from someone else. Supports paid search, content that ranks, and reputation work running at the same time. This is where most businesses need to be to break through a revenue ceiling.",
    color: "#9F4CFF",
    bgColor: "rgba(159, 76, 255, 0.08)",
    borderColor: "rgba(159, 76, 255, 0.25)",
  },
  {
    key: "dominate",
    label: "Dominate",
    tagline: "Take Market Share",
    range: [12, 15],
    meaning:
      "Going after the whole market. Aggressive paid media, brand campaigns, video, and real attribution behind it. Above 12% is a deliberate choice, not a default.",
    color: "#002366",
    bgColor: "rgba(0, 35, 102, 0.08)",
    borderColor: "rgba(0, 35, 102, 0.25)",
  },
];

export interface BudgetResult {
  tier: TierKey;
  label: string;
  low: number;
  high: number;
  lowPct: number;
  highPct: number;
}

export function calculateBudget(revenue: number): BudgetResult[] {
  return tiers.map((tier) => {
    const [lowPct, highPct] = tier.range;
    return {
      tier: tier.key,
      label: tier.label,
      low: Math.round((revenue * lowPct) / 100),
      high: Math.round((revenue * highPct) / 100),
      lowPct,
      highPct,
    };
  });
}

/**
 * Clicks bought per $1,000 of ad spend at this trade's national CPC.
 * Expressed as a unit rate on purpose: the budget band above is TOTAL marketing,
 * and there is no sourced figure for what share of it goes to paid ads. Dividing
 * the full budget by CPC would overstate clicks.
 */
export function clicksPerThousand(cpc: number): number {
  return Math.round(1000 / cpc);
}

export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "How much should a home service business spend on marketing?",
    answer:
      "Most home service businesses should invest about 7–12% of gross revenue in marketing. Most of the businesses ASP works with run 7–10%, and those tend to see the best results. Go above 12% if you are pushing hard in a competitive market.",
  },
  {
    question: "Does this budget cover everything, or just ads?",
    answer:
      "Everything. The percentage covers your whole marketing budget — ad spend, your website, content, SEO, and any agency or contractor fees. Ad spend is only one piece of it, so do not plan your paid budget off the full number.",
  },
  {
    question: "Should my marketing budget be based on revenue or profit?",
    answer:
      "Base it on gross revenue, not profit. A percentage of your top-line revenue keeps your marketing investment tied to the size of your business and your growth goals, instead of shrinking the moment a slow month hits.",
  },
  {
    question: "What is a good marketing budget for a $1 million business?",
    answer:
      "At $1M in revenue, plan on about $70,000–$120,000 per year (7–12%). Most ASP clients land between $70,000 and $100,000. Lean higher if you are in a competitive market or pushing for fast growth.",
  },
  {
    question: "Where do the cost-per-click numbers come from?",
    answer:
      "Google. They are top-of-page bid estimates pulled from Google Ads Keyword Planner for United States search. They are Google's own figures, not ASP estimates and not modeled from client accounts. Your real cost per click will vary by market, competition, ad quality, and time of year.",
  },
  {
    question: "Is a bigger marketing budget actually worth it?",
    answer:
      "It is when the math works. If a customer is worth far more than it costs to acquire them, spending more to win more customers grows your business. The number to watch is your cost to acquire a customer versus that customer's lifetime value.",
  },
];
