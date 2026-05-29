// Data + math for the Marketing Budget Calculator (/marketing-budget-calculator).

export interface Industry {
  id: string;
  name: string;
  /** Base percentage adjustments per tier [startup, growth, aggressive] */
  baseRanges: {
    startup: [number, number];
    growth: [number, number];
    aggressive: [number, number];
  };
  /** Additional percentage added when in/near a metro area */
  metroBoost: number;
  description: string;
}

export const industries: Industry[] = [
  {
    id: "hvac",
    name: "HVAC",
    baseRanges: { startup: [5, 7], growth: [8, 11], aggressive: [12, 15] },
    metroBoost: 2,
    description:
      "Heating, ventilation, and air conditioning services. Highly seasonal with strong local competition.",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    baseRanges: { startup: [4, 7], growth: [8, 10], aggressive: [12, 15] },
    metroBoost: 2,
    description:
      "Emergency and scheduled plumbing services. High urgency drives strong PPC returns.",
  },
  {
    id: "electrical",
    name: "Electrical",
    baseRanges: { startup: [4, 6], growth: [8, 10], aggressive: [12, 14] },
    metroBoost: 1.5,
    description:
      "Residential and commercial electrical services. Steady demand with moderate competition.",
  },
  {
    id: "roofing",
    name: "Roofing",
    baseRanges: { startup: [5, 7], growth: [9, 11], aggressive: [13, 16] },
    metroBoost: 2.5,
    description:
      "Roofing installation and repair. Higher ticket size with intense metro competition.",
  },
  {
    id: "landscaping",
    name: "Landscaping & Lawn Care",
    baseRanges: { startup: [4, 6], growth: [8, 10], aggressive: [12, 14] },
    metroBoost: 1.5,
    description:
      "Lawn maintenance, landscaping, and outdoor living services. Seasonal with recurring revenue opportunities.",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    baseRanges: { startup: [5, 7], growth: [8, 11], aggressive: [12, 15] },
    metroBoost: 2,
    description:
      "Residential and commercial pest management. Recurring service model with strong digital acquisition.",
  },
  {
    id: "cleaning",
    name: "Cleaning Services",
    baseRanges: { startup: [5, 7], growth: [9, 11], aggressive: [13, 16] },
    metroBoost: 2.5,
    description:
      "Residential and commercial cleaning. Low barrier to entry means heavier ad spend needed to stand out.",
  },
  {
    id: "painting",
    name: "Painting",
    baseRanges: { startup: [4, 6], growth: [8, 10], aggressive: [12, 14] },
    metroBoost: 1.5,
    description:
      "Interior and exterior painting services. Project-based with strong referral potential.",
  },
  {
    id: "garage-door",
    name: "Garage Door Services",
    baseRanges: { startup: [5, 7], growth: [8, 11], aggressive: [12, 15] },
    metroBoost: 2,
    description:
      "Garage door repair, installation, and maintenance. Emergency-driven with high conversion rates.",
  },
  {
    id: "remodeling",
    name: "Remodeling & General Contracting",
    baseRanges: { startup: [4, 7], growth: [8, 11], aggressive: [12, 15] },
    metroBoost: 2,
    description:
      "Home renovation and general contracting. Higher ticket, longer sales cycle requiring brand investment.",
  },
  {
    id: "flooring",
    name: "Flooring",
    baseRanges: { startup: [4, 6], growth: [8, 10], aggressive: [12, 14] },
    metroBoost: 1.5,
    description:
      "Flooring installation and refinishing. Competitive market with strong visual marketing opportunities.",
  },
  {
    id: "fencing",
    name: "Fencing",
    baseRanges: { startup: [4, 6], growth: [8, 10], aggressive: [12, 14] },
    metroBoost: 1.5,
    description:
      "Residential and commercial fence installation. Seasonal demand with strong local SEO opportunity.",
  },
  {
    id: "pool",
    name: "Pool Services",
    baseRanges: { startup: [5, 7], growth: [9, 11], aggressive: [13, 16] },
    metroBoost: 2,
    description:
      "Pool construction, maintenance, and repair. Seasonal with high-value projects and recurring service.",
  },
  {
    id: "windows-doors",
    name: "Windows & Doors",
    baseRanges: { startup: [5, 7], growth: [9, 11], aggressive: [12, 15] },
    metroBoost: 2,
    description:
      "Window and door replacement. Higher ticket with longer consideration cycle.",
  },
  {
    id: "solar",
    name: "Solar Installation",
    baseRanges: { startup: [6, 8], growth: [10, 13], aggressive: [14, 18] },
    metroBoost: 2.5,
    description:
      "Solar panel installation and energy services. High CAC but strong lifetime value. Very competitive in metro areas.",
  },
];

export type TierKey = "startup" | "growth" | "aggressive";

export interface TierInfo {
  key: TierKey;
  label: string;
  tagline: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const tiers: TierInfo[] = [
  {
    key: "startup",
    label: "Foundation",
    tagline: "Establish Your Presence",
    color: "#4CC9F0",
    bgColor: "rgba(76, 201, 240, 0.08)",
    borderColor: "rgba(76, 201, 240, 0.25)",
  },
  {
    key: "growth",
    label: "Growth",
    tagline: "Scale Your Reach",
    color: "#9F4CFF",
    bgColor: "rgba(159, 76, 255, 0.08)",
    borderColor: "rgba(159, 76, 255, 0.25)",
  },
  {
    key: "aggressive",
    label: "Domination",
    tagline: "Own Your Market",
    color: "#002366",
    bgColor: "rgba(0, 35, 102, 0.08)",
    borderColor: "rgba(0, 35, 102, 0.25)",
  },
];

export function calculateBudget(
  revenue: number,
  industry: Industry,
  isMetro: boolean
): { tier: TierKey; label: string; low: number; high: number; lowPct: number; highPct: number }[] {
  return tiers.map((tier) => {
    const range = industry.baseRanges[tier.key];
    const boost = isMetro ? industry.metroBoost : 0;
    const lowPct = range[0] + boost;
    const highPct = range[1] + boost;
    const low = Math.round((revenue * lowPct) / 100);
    const high = Math.round((revenue * highPct) / 100);
    return { tier: tier.key, label: tier.label, low, high, lowPct, highPct };
  });
}

export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "How much should a home service business spend on marketing?",
    answer:
      "Most home service businesses should invest about 5–15% of gross revenue in marketing. The right number depends on your growth goals and how competitive your market is. Use the calculator to get a range based on your revenue and industry.",
  },
  {
    question: "Should my marketing budget be based on revenue or profit?",
    answer:
      "Base it on gross revenue, not profit. A percentage of your top-line revenue keeps your marketing investment tied to the size of your business and your growth goals, instead of shrinking the moment a slow month hits.",
  },
  {
    question: "What is a good marketing budget for a $1 million business?",
    answer:
      "At $1M in revenue, a typical range is about $50,000–$150,000 per year (5–15%). Lean toward the higher end if you are in a competitive metro area or pushing for fast growth.",
  },
  {
    question: "Is a bigger marketing budget actually worth it?",
    answer:
      "It is when the math works. If a customer is worth far more than it costs to acquire them, spending more to win more customers grows your business. The number to watch is your cost to acquire a customer versus that customer's lifetime value.",
  },
];
