export type TradeStat = { value: string; label: string };

export type TradeFaq = { question: string; answer: string };

export type TradeCaseBlock = {
  name: string;
  timeframe: string;
  headline: string;
  body: string;
  stats: TradeStat[];
};

export type TradeData = {
  slug: string;
  trade: string; // "HVAC", "Plumbing", etc.
  hero: {
    eyebrow: string;
    heading: string; // may include <br> and <span class='hero-text-gradient'>
    subheading: string;
    imageUrl: string;
    imagePosition?: string;
  };
  metaTitle: string;
  metaDescription: string;
  intro: {
    eyebrow: string;
    heading: string;
    body: string[];
  };
  revenueMath: {
    eyebrow: string;
    heading: string;
    subheading: string;
    points: { label: string; body: string }[];
  };
  playbook: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  caseStudy?: TradeCaseBlock;
  faqs: TradeFaq[];
};

// Shared "what the Growth System actually runs" copy reused across trades,
// phrased in ASP's voice (operator-first, revenue-oriented, no fluff).
const BASE_PLAYBOOK = [
  {
    title: "Google Business Profile + local SEO",
    body: "GBP optimized for every service area you run. Citation cleanup across 60+ directories. Local ranking heatmap reported against booked revenue, not vanity positions.",
  },
  {
    title: "Paid media managed to revenue",
    body: "Google Ads, Local Services Ads, and Meta rebuilt around booked jobs — not clicks. Every dollar tied back to revenue inside your CRM.",
  },
  {
    title: "Housecall Pro + attribution",
    body: "Official HCP Affiliate Partner. CSR AI, dispatch, attribution, and follow-up automation configured from day one. Every lead answered, tracked, and tied to the channel that delivered it.",
  },
  {
    title: "Content that ranks and converts",
    body: "Blog, service pages, GBP posts, and social — built on your brand, written by humans, informed by AI research. Timed to the moments your customers are actually searching.",
  },
  {
    title: "Follow-up and margin protection",
    body: "Quote-to-close sequences, win-back automation, review capture, and reporting that proves which plays move revenue. Marketing earns its seat at the table.",
  },
];

export const TRADES: Record<string, TradeData> = {
  hvac: {
    slug: "hvac",
    trade: "HVAC",
    metaTitle: "HVAC Marketing Agency — Grow Your HVAC Business",
    metaDescription:
      "The ASP Growth System for HVAC operators. Local SEO, paid media, Housecall Pro integration, and follow-up automation — engineered around booked revenue, not clicks.",
    hero: {
      eyebrow: "HVAC Marketing",
      heading:
        "HVAC marketing<br><span class='hero-text-gradient'>built for booked jobs.</span>",
      subheading:
        "The ASP Growth System for HVAC operators already running $1M+. Local SEO, Google Ads, LSA, Meta, HCP integration, and the follow-up layer that turns call volume into closed revenue. You own every asset we build.",
      imageUrl: "/images/industries/hvac-viking.jpg",
      imagePosition: "center center",
    },
    intro: {
      eyebrow: "Why HVAC is different",
      heading: "Call volume isn't the problem. Conversion is.",
      body: [
        "Most HVAC shops already get leads. What chokes growth is what happens after the phone rings — which calls are answered, which become booked jobs, which close at the margin the business can actually live on.",
        "ASP treats HVAC as an operations problem disguised as a marketing problem. We run the lead generation, but we also configure the Housecall Pro AI stack that attributes every booked job back to the marketing dollar that earned it — so you stop optimizing ads to cost-per-click and start optimizing to cost-per-closed-revenue.",
      ],
    },
    revenueMath: {
      eyebrow: "The HVAC revenue math",
      heading: "Every lever, sized to the HVAC book.",
      subheading:
        "A typical HVAC operator on the Growth System sees movement on four numbers. Here's how they compound.",
      points: [
        {
          label: "Lead volume",
          body: "LSA + Google Ads + GBP ranking push typically adds 20–40% qualified inbound within the first 90 days. The ceiling is seasonality, not spend.",
        },
        {
          label: "Answer rate",
          body: "HCP CSR AI answers after-hours and peak-volume overflow. Most shops recover 10–18% of missed-call revenue immediately — no new lead required.",
        },
        {
          label: "Close rate",
          body: "Quote-to-close follow-up sequences move stuck estimates across the line. Every extra closed job is pure margin — the lead was already paid for.",
        },
        {
          label: "Repeat + referral",
          body: "Review capture and maintenance reminders compound into the next season. Reputation becomes a ranking signal, and retained customers become cheap booked revenue.",
        },
      ],
    },
    playbook: {
      eyebrow: "What we run for HVAC",
      heading: "Five components. One growth system.",
      items: BASE_PLAYBOOK,
    },
    caseStudy: {
      name: "Regional HVAC operator",
      timeframe: "12 Months",
      headline: "Broke the $3M revenue ceiling.",
      body: "A multi-location HVAC operator plateaued at $3M for two years. Twelve months into the Growth System they crossed it, with 161+ conversions from Google Ads, $29.27 cost per LSA lead, 130 net-new Google reviews, and 13K+ GBP impressions.",
      stats: [
        { value: "$3M+", label: "Revenue barrier broken" },
        { value: "$29.27", label: "Cost per LSA lead" },
        { value: "13K+", label: "GBP impressions" },
      ],
    },
    faqs: [
      {
        question: "What minimum spend makes sense for HVAC?",
        answer:
          "Most HVAC clients start at Foundation ($2,500/mo) plus paid media on top. That keeps the Growth System running end-to-end. If you're earlier — pre-$1M — Local SEO Pro at $1,200/mo is a better first lever than paid media.",
      },
      {
        question: "Do you need us on Housecall Pro?",
        answer:
          "It's the fastest path. We're an Official HCP Affiliate Partner and most of our deepest attribution work runs natively in HCP. If you're on a different CRM we still run the Growth System — we adapt the attribution and automation layer to your stack. Switching to HCP often pays for itself in attribution gains alone.",
      },
      {
        question: "How fast will we see results?",
        answer:
          "Paid media books jobs in week one. GBP and local SEO movement shows up in 60–90 days. Attribution and HCP setup changes how you see the business inside the first month — which means budget reallocates toward what's working much sooner.",
      },
      {
        question: "Do you handle storm / seasonal spikes?",
        answer:
          "Yes — StormFront ($549/mo) is our proprietary weather-triggered content system. When qualifying heat waves or cold snaps hit your service area, it fires targeted content to your blog, GBP, and social to catch the search spike.",
      },
    ],
  },

  plumbing: {
    slug: "plumbing",
    trade: "Plumbing",
    metaTitle: "Plumbing Marketing Agency — Grow Your Plumbing Business",
    metaDescription:
      "The ASP Growth System for plumbing operators. Local SEO, LSA, paid media, Housecall Pro integration, and follow-up automation — tuned for emergency demand and recurring service.",
    hero: {
      eyebrow: "Plumbing Marketing",
      heading:
        "Plumbing marketing<br><span class='hero-text-gradient'>that shows up when the pipe bursts.</span>",
      subheading:
        "Plumbing is emergency demand plus recurring service. The ASP Growth System wins both — Local Services Ads and map-pack dominance for the urgent calls, content and follow-up systems for the long-tail revenue your competitors miss.",
      imageUrl: "/images/backgrounds/team-at-work.jpg",
      imagePosition: "center center",
    },
    intro: {
      eyebrow: "Why plumbing is different",
      heading: "Two demand curves. One system.",
      body: [
        "Plumbing has two revenue surfaces. The emergency surface — burst pipes, flooded basements, no hot water — is won at the top of the Google map pack and the top of Local Services Ads. Miss those positions and the call goes to the next shop that ranks.",
        "The recurring surface — drain cleaning, water heater replacement, repiping, maintenance plans — is won through content, review depth, and the follow-up sequences that turn a one-time emergency call into a returning customer. Most plumbing agencies only solve the first. ASP runs both.",
      ],
    },
    revenueMath: {
      eyebrow: "The plumbing revenue math",
      heading: "Emergency + recurring, layered.",
      subheading:
        "Four movers decide whether a plumbing business compounds or plateaus. The Growth System is built around each of them.",
      points: [
        {
          label: "Map pack position",
          body: "The difference between rank #1 and #4 in an emergency search is usually 40–60% of the clicks. GBP optimization + citation cleanup + review velocity is the fastest ROI in plumbing.",
        },
        {
          label: "LSA presence",
          body: "Local Services Ads sit above the map pack. Properly managed — not set-and-forget — they become the most reliable cost-per-booked-job channel we run for plumbing.",
        },
        {
          label: "Recurring conversion",
          body: "A customer who just had a water heater replaced is the cheapest next lead you'll ever get. Maintenance reminders, repipe quotes, and review capture flow automatically inside HCP.",
        },
        {
          label: "After-hours answer",
          body: "Emergency calls don't wait. CSR AI answers the overflow and the after-hours window. Recovering even 10% of missed-call revenue often pays for the full engagement.",
        },
      ],
    },
    playbook: {
      eyebrow: "What we run for plumbing",
      heading: "Five components. One growth system.",
      items: BASE_PLAYBOOK,
    },
    faqs: [
      {
        question: "How important are Google reviews for plumbing?",
        answer:
          "Critical. Review volume and recency are two of the strongest map-pack ranking signals, and they're often the only thing a homeowner sees before calling. The Growth System includes review capture flows fired at the right moment — after a completed job, routed to the right platform — so reputation compounds into ranking.",
      },
      {
        question: "Do you run LSA or Google Ads?",
        answer:
          "Both, layered. LSA delivers the lowest cost-per-booked-job for emergency searches. Google Ads covers the high-intent terms LSA doesn't reach. Meta covers retargeting and recurring-service audiences. All three are managed against revenue inside HCP, not cost-per-click.",
      },
      {
        question: "Will this work for a shop with only one truck?",
        answer:
          "Not yet. The Growth System is engineered for operators already running $1M+ or approaching it. If you're earlier, start with Local SEO Pro ($1,200/mo) and build the foundation — emergency presence is won with GBP and reviews long before it makes sense to turn on the full system.",
      },
      {
        question: "How long until we see LSA converting?",
        answer:
          "LSA typically delivers its first booked jobs in week one or two after launch. The lever inside the first 90 days is optimizing call quality and dispute rate, which pulls cost-per-booked-job down meaningfully over time.",
      },
    ],
  },

  roofing: {
    slug: "roofing",
    trade: "Roofing",
    metaTitle: "Roofing Marketing Agency — Grow Your Roofing Business",
    metaDescription:
      "The ASP Growth System for roofing operators. Storm-driven content, Google Ads, LSA, Housecall Pro integration, and the follow-up layer that turns estimates into roofs.",
    hero: {
      eyebrow: "Roofing Marketing",
      heading:
        "Roofing marketing<br><span class='hero-text-gradient'>built for storm season and after.</span>",
      subheading:
        "Roofing is weather-driven demand on a short window. The ASP Growth System captures the spike when the storm hits and compounds the rest of the year through content, reviews, and quote-to-close follow-up. You own every asset we build.",
      imageUrl: "/images/industries/roofing.png",
      imagePosition: "center center",
    },
    intro: {
      eyebrow: "Why roofing is different",
      heading: "The revenue window is shorter than you think.",
      body: [
        "When a hail storm hits, homeowners search in hours — not weeks. Roofers who show up at the top of the map pack, the top of Google Ads, and the top of LSA in those hours win the season. Everyone else lives off door-knocking and referrals.",
        "ASP runs both plays. StormFront — our proprietary weather-triggered content system — fires location-aware posts the moment qualifying weather events hit your service area, so you're already ranking when the search spike starts. The Growth System runs the rest of the year: paid media, reviews, content, and the HCP-native quote-to-close automation that turns inspections into contracts.",
      ],
    },
    revenueMath: {
      eyebrow: "The roofing revenue math",
      heading: "Capture the storm. Compound the rest.",
      subheading:
        "Four levers decide whether a roofer lives or dies in a given year. The Growth System is engineered around each.",
      points: [
        {
          label: "Storm-trigger speed",
          body: "StormFront publishes targeted content to blog, GBP, and social within hours of a qualifying weather event. Priority indexing submission gets every piece into search as fast as the platform allows.",
        },
        {
          label: "Ad presence in the spike",
          body: "Google Ads + LSA campaigns scale automatically during storm windows. No manual bid adjustments, no missed demand — the system surfaces where your buyers are already looking.",
        },
        {
          label: "Quote-to-close follow-up",
          body: "Most roofers lose 30–50% of estimates to no follow-up. HCP-native sequences keep every inspection alive until it's signed or lost for a real reason.",
        },
        {
          label: "Off-season content",
          body: "Maintenance content, insurance-claim guides, and category authority posts keep the brand warm between storms — so when the next one hits, you're already the trusted result.",
        },
      ],
    },
    playbook: {
      eyebrow: "What we run for roofing",
      heading: "Five components. One growth system.",
      items: BASE_PLAYBOOK,
    },
    faqs: [
      {
        question: "What exactly is StormFront?",
        answer:
          "StormFront is ASP's proprietary content system that watches National Weather Service feeds and other data sources across your service area. When a qualifying event fires — hail, high winds, major storm — it automatically publishes location-aware content to your blog, GBP, and social, timed to the search spike. $549/mo standalone or bundled inside the Growth System.",
      },
      {
        question: "How do you handle insurance vs. retail work?",
        answer:
          "Different content tracks and different ad structures. Retail-focused campaigns run high-intent terms with strong quote-to-close follow-up. Insurance-focused tracks run claim-guide content and longer nurture sequences that respect the timeline of an insurance process. Same Growth System, two distinct playbooks.",
      },
      {
        question: "Will this replace door-knocking?",
        answer:
          "No — it compounds it. Every homeowner who gets a knock also checks Google. If you're not in the map pack, LSA, and local search results, a big share of those door-knock contacts still end up calling a competitor. The Growth System makes sure the canvasser's work converts.",
      },
      {
        question: "Does StormFront work outside hail territory?",
        answer:
          "Yes — high wind, heavy rain, hurricane, and hail all trigger the system. If your service area sees any weather that drives roof demand, StormFront fires. It's not just hail-belt-specific.",
      },
    ],
  },
};
