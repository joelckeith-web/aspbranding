// ═══════════════════════════════════════════════════════════
//  ASP Blog System — Site Configuration
//  All data verified from aspbranding.com and constants.ts
// ═══════════════════════════════════════════════════════════

export const siteConfig = {
  // ── Business Identity ──
  name: "ASP",
  legalName: "ASP - Assess. Strategize. Perform.",
  tagline: "Assess. Strategize. Perform.",
  url: "https://aspbranding.com",
  blogUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://aspbranding.com/blog",
  phone: "(512) 200-3190",
  phoneLink: "5122003190",
  email: "info@aspbranding.com",
  address: {
    city: "Austin",
    state: "TX",
    region: "Central Texas",
    country: "US",
  },

  // ── Brand Voice ──
  brandVoice: {
    tone: "Expert but accessible — no jargon without explanation",
    style: "Data-driven, systematic, transparent, actionable",
    personality:
      "Like a growth-focused business partner who explains the 'why' behind every recommendation",
    languageProfile: [
      "Results-driven — every recommendation ties to revenue impact",
      "Systematic — follows the Assess, Strategize, Perform framework",
      "Transparent — no black-box tactics, explain what we do and why",
      "Growth-focused — everything connects to business growth milestones",
      "Actionable — every post gives readers something they can implement today",
    ],
    signatureTerms: [
      "ASP Growth System",
      "Assess. Strategize. Perform.",
      "revenue barrier",
      "growth plateau",
      "digital foundation",
      "local search dominance",
    ],
  },

  // ── Social Media ──
  social: {
    facebook: "https://www.facebook.com/atomicsoulsproductions/",
    linkedin: "https://www.linkedin.com/company/atomicsoulsproductions/",
    instagram: "https://www.instagram.com/atomicsoulsproductions/",
  },

  sameAs: [
    "https://aspbranding.com",
    "https://www.facebook.com/atomicsoulsproductions/",
    "https://www.linkedin.com/company/atomicsoulsproductions/",
    "https://www.instagram.com/atomicsoulsproductions/",
  ],

  // ── Author — Joel Keith (CEO) ──
  author: {
    name: "Joel Keith",
    title: "CEO & Growth Strategist",
    bio: "Joel Keith is the CEO of ASP, a digital marketing agency helping home service businesses scale past revenue barriers. With deep expertise in local SEO, paid advertising, and systematic growth strategies, Joel and the ASP team have helped hundreds of service businesses build sustainable digital marketing systems that drive measurable results.",
    avatar: "/images/joel-keith-avatar.jpg",
    website: "https://joelkeith.me",
  },

  // ── Verified Service Pages (from constants.ts FOOTER_SOLUTIONS) ──
  services: {
    localSeo: {
      label: "Local SEO",
      url: "https://aspbranding.com/solutions/local-seo",
      description: "Dominate local search results and Google Maps",
    },
    ppc: {
      label: "PPC Management",
      url: "https://aspbranding.com/solutions/ppc-management",
      description: "Data-driven paid advertising campaigns",
    },
    socialMedia: {
      label: "Social Media Marketing",
      url: "https://aspbranding.com/solutions/social-media-marketing",
      description: "Strategic social media presence that generates leads",
    },
    webDesign: {
      label: "Web Design & Development",
      url: "https://aspbranding.com/solutions/web-design",
      description: "Conversion-optimized websites built on modern platforms",
    },
    branding: {
      label: "Branding & Graphic Design",
      url: "https://aspbranding.com/solutions/branding",
      description: "Brand identities that differentiate and build trust",
    },
    consulting: {
      label: "Consulting & Brand Therapy",
      url: "https://aspbranding.com/solutions/consulting",
      description: "Strategic guidance for breaking through revenue barriers",
    },
  },

  // ── Key Pages ──
  pages: {
    home: "https://aspbranding.com/",
    solutions: "https://aspbranding.com/solutions",
    about: "https://aspbranding.com/about",
    blog: "https://aspbranding.com/blog",
    contact: "https://aspbranding.com/contact",
  },

  // ── Content Pillars (4 posts/month rotation) ──
  contentPillars: {
    "google-algorithm-updates": {
      label: "Google & Algorithm Updates",
      description:
        "Breaking down Google algorithm changes, Search Console updates, and what they mean for home service businesses",
      frequency: "1x/month (Week 1)",
      suggestedCategories: ["seo", "local-seo", "aeo", "industry-trends"],
    },
    "service-deep-dive": {
      label: "Service Deep-Dive",
      description:
        "In-depth guides on specific marketing services — Local SEO, PPC, Social Media, Web Design, Branding",
      frequency: "1x/month (Week 2)",
      suggestedCategories: [
        "seo",
        "ppc",
        "social-media",
        "web-design",
        "local-seo",
        "aeo",
      ],
    },
    "business-growth-strategy": {
      label: "Business Growth & Strategy",
      description:
        "Revenue milestone strategies, growth playbooks, and business coaching insights for home service owners",
      frequency: "1x/month (Week 3)",
      suggestedCategories: ["business-growth", "industry-trends"],
    },
    "tech-stack-case-study": {
      label: "Tech Stack & Case Studies",
      description:
        "Tool reviews, tech stack recommendations, and real-world case studies from home service marketing",
      frequency: "1x/month (Week 4)",
      suggestedCategories: ["tech-stack", "case-studies"],
    },
  },

  // ── Target Audience ──
  targetAudience: {
    primary: "Home service business owners trying to grow past $1M / $3M / $5M revenue",
    industries: [
      "HVAC",
      "Plumbing",
      "Electrical",
      "Roofing",
      "Landscaping",
      "Pest Control",
      "Cleaning",
      "General Contracting",
    ],
    painPoints: [
      "Stuck at a revenue plateau and unsure how to break through",
      "Wasting money on marketing that does not generate measurable ROI",
      "Losing leads to competitors who rank higher in local search",
      "No systematic approach to digital marketing — doing random acts of marketing",
      "Overwhelmed by marketing options and conflicting advice",
    ],
    revenueMilestones: [
      "$0–$500K: Building the foundation — website, GBP, basic SEO",
      "$500K–$1M: Scaling lead generation — PPC, Local SEO, reviews",
      "$1M–$3M: Systematizing marketing — brand, multi-channel, hiring",
      "$3M–$5M+: Market dominance — expansion, diversification, authority",
    ],
  },

  // ── Verified External Authority Sources ──
  externalAuthoritySources: [
    {
      name: "Google Search Central",
      url: "https://developers.google.com/search",
      type: "industry",
    },
    {
      name: "Google Business Profile Help",
      url: "https://support.google.com/business",
      type: "industry",
    },
    {
      name: "Search Engine Journal",
      url: "https://www.searchenginejournal.com",
      type: "industry",
    },
    { name: "Moz", url: "https://moz.com", type: "industry" },
    { name: "Ahrefs Blog", url: "https://ahrefs.com/blog", type: "industry" },
    {
      name: "Semrush Blog",
      url: "https://www.semrush.com/blog",
      type: "industry",
    },
    {
      name: "Search Engine Land",
      url: "https://searchengineland.com",
      type: "industry",
    },
    {
      name: "HubSpot Blog",
      url: "https://blog.hubspot.com",
      type: "industry",
    },
    { name: "SBA.gov", url: "https://www.sba.gov", type: "gov" },
    { name: "FTC.gov", url: "https://www.ftc.gov", type: "gov" },
    {
      name: "Census Bureau (Business Data)",
      url: "https://www.census.gov/econ",
      type: "gov",
    },
    {
      name: "MIT Sloan Management Review",
      url: "https://sloanreview.mit.edu",
      type: "edu",
    },
    {
      name: "Harvard Business Review",
      url: "https://hbr.org",
      type: "edu",
    },
    {
      name: "Stanford Digital Economy Lab",
      url: "https://digitaleconomy.stanford.edu",
      type: "edu",
    },
  ],

  // ── Industries Served ──
  industriesServed: [
    { name: "HVAC", keywords: ["hvac", "heating", "cooling", "air conditioning"] },
    { name: "Plumbing", keywords: ["plumber", "plumbing", "drain", "water heater"] },
    { name: "Electrical", keywords: ["electrician", "electrical", "wiring", "panel"] },
    { name: "Roofing", keywords: ["roofing", "roof repair", "roof replacement"] },
    { name: "Landscaping", keywords: ["landscaping", "lawn care", "hardscaping"] },
    { name: "Pest Control", keywords: ["pest control", "exterminator", "termite"] },
    { name: "Cleaning", keywords: ["cleaning", "maid service", "janitorial"] },
    {
      name: "General Contracting",
      keywords: ["contractor", "remodeling", "renovation", "construction"],
    },
  ],

  // ── Topic Calendar Structure ──
  topicCalendar: {
    postsPerMonth: 4,
    schedule: [
      { week: 1, pillar: "google-algorithm-updates" as const },
      { week: 2, pillar: "service-deep-dive" as const },
      { week: 3, pillar: "business-growth-strategy" as const },
      { week: 4, pillar: "tech-stack-case-study" as const },
    ],
  },
} as const;

/** Service deep-dive rotation — cycles through ASP services */
export const serviceRotation = [
  "localSeo",
  "ppc",
  "socialMedia",
  "webDesign",
  "branding",
  "consulting",
] as const;

/** Industry rotation for examples in business growth posts */
export const industryRotation = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping",
  "Pest Control",
  "Cleaning",
  "General Contracting",
] as const;
