export const BUSINESS = {
  name: "ASP",
  legalName: "ASP - Assess. Strategize. Perform.",
  tagline: "Assess. Strategize. Perform.",
  phone: "(512) 200-3190",
  phoneLink: "5122003190",
  email: "info@aspbranding.com",
  url: "https://www.aspbranding.com",
  address: {
    city: "Austin",
    state: "TX",
    country: "US",
  },
  // Social URLs: leave empty strings for channels ASP hasn't opened yet.
  // Footer + schema rendering both skip empty values. Drop in the real
  // handles as they come online.
  social: {
    facebook: "",
    linkedin: "",
    instagram: "",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Growth System", href: "/growth-system" },
  { label: "AI Integration", href: "/ai-integration" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const FOOTER_SYSTEM = [
  { label: "The Growth System", href: "/growth-system" },
  { label: "AI Integration", href: "/ai-integration" },
  { label: "Pricing", href: "/pricing" },
  { label: "Growth Diagnostic", href: "/diagnostic" },
  { label: "Marketing Budget Calculator", href: "/marketing-budget-calculator" },
] as const;

export const FOOTER_PRODUCTS = [
  { label: "Local SEO Pro", href: "/local-seo-pro" },
  { label: "StormFront", href: "/stormfront" },
  { label: "Content Creation Package", href: "/content-creation" },
  { label: "Podcast Studio", href: "/podcast" },
  { label: "Fractional C-Suite", href: "/fractional" },
] as const;

export const FOOTER_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Fractional C-Suite", href: "/fractional" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Pillar/hub guides — the top of each blog content cluster. Append as hubs publish.
export const FOOTER_GUIDES = [
  { label: "AI for Home Service Businesses", href: "/blog/ai-for-home-service-businesses" },
] as const;

// Legacy export kept for any stragglers until the whole codebase is migrated.
export const FOOTER_SOLUTIONS = FOOTER_SYSTEM;
