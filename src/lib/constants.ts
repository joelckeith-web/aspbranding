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

export type NavLink = { label: string; href: string; icon?: string };
export type NavGroup = {
  label: string;
  children: readonly NavLink[];
  /** Optional footer link inside the dropdown, e.g. "View all services". */
  viewAll?: NavLink;
};
export type NavItem = NavLink | NavGroup;

// Growth System stays the lead item; Services and AI Integration are dropdowns.
export const NAV_LINKS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Growth System", href: "/growth-system" },
  {
    label: "Services",
    children: [
      { label: "Search Engine Optimization (SEO)", href: "/seo", icon: "search" },
      { label: "Pay Per Click (PPC)", href: "/ppc", icon: "cursor" },
      { label: "Meta Ads Management", href: "/meta-ads", icon: "megaphone" },
      { label: "Answer Engine Optimization (AEO)", href: "/aeo", icon: "chat" },
      { label: "Generative Engine Optimization (GEO)", href: "/geo", icon: "sparkle" },
      { label: "Local SEO Pro", href: "/local-seo-pro", icon: "pin" },
      { label: "StormFront System", href: "/stormfront", icon: "storm" },
      { label: "Content Creation Package", href: "/content-creation", icon: "doc" },
      { label: "ChatGPT Ads Management", href: "/chatgpt-ads-management", icon: "bubble" },
      { label: "Custom AI Solutions", href: "/custom-ai-solutions", icon: "chip" },
      { label: "Fractional C-Suite", href: "/fractional", icon: "briefcase" },
    ],
    viewAll: { label: "View all services", href: "/solutions" },
  },
  {
    label: "AI Integration",
    children: [
      { label: "AI Integration", href: "/ai-integration", icon: "plug" },
      { label: "AI Consulting", href: "/ai-consulting", icon: "bulb" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export const FOOTER_SYSTEM = [
  { label: "The Growth System", href: "/growth-system" },
  { label: "AI Integration", href: "/ai-integration", icon: "plug" },
  { label: "Pricing", href: "/pricing" },
  { label: "Growth Diagnostic", href: "/diagnostic" },
  { label: "AI Readiness Check", href: "/ai-readiness" },
  { label: "Marketing Budget Calculator", href: "/marketing-budget-calculator" },
] as const;

export const FOOTER_PRODUCTS = [
  { label: "Search Engine Optimization (SEO)", href: "/seo", icon: "search" },
  { label: "Pay Per Click (PPC)", href: "/ppc", icon: "cursor" },
  { label: "Meta Ads Management", href: "/meta-ads", icon: "megaphone" },
  { label: "Custom AI Solutions", href: "/custom-ai-solutions", icon: "chip" },
  { label: "Answer Engine Optimization (AEO)", href: "/aeo", icon: "chat" },
  { label: "Generative Engine Optimization (GEO)", href: "/geo", icon: "sparkle" },
  { label: "Local SEO Pro", href: "/local-seo-pro", icon: "pin" },
  { label: "StormFront System", href: "/stormfront", icon: "storm" },
  { label: "Content Creation Package", href: "/content-creation", icon: "doc" },
  { label: "Podcast Studio", href: "/podcast" },
  { label: "AI Consulting", href: "/ai-consulting", icon: "bulb" },
  { label: "Fractional C-Suite", href: "/fractional", icon: "briefcase" },
] as const;

export const FOOTER_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Fractional C-Suite", href: "/fractional", icon: "briefcase" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Pillar/hub guides — the top of each blog content cluster. Append as hubs publish.
export const FOOTER_GUIDES = [
  { label: "AI for Home Service Businesses", href: "/blog/ai-for-home-service-businesses" },
  { label: "Local SEO for Home Service Businesses", href: "/blog/local-seo-for-home-service-businesses" },
  { label: "Speed to Lead for Home Service Businesses", href: "/blog/speed-to-lead-home-service-businesses" },
] as const;

// Legacy export kept for any stragglers until the whole codebase is migrated.
export const FOOTER_SOLUTIONS = FOOTER_SYSTEM;
