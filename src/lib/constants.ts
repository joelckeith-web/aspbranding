export const BUSINESS = {
  name: "ASP",
  legalName: "ASP - Assess. Strategize. Perform.",
  tagline: "Assess. Strategize. Perform.",
  phone: "(512) 200-3190",
  phoneLink: "5122003190",
  email: "info@aspbranding.com",
  url: "https://aspbranding.com",
  address: {
    city: "Austin",
    state: "TX",
    country: "US",
  },
  social: {
    facebook: "https://www.facebook.com/atomicsoulsproductions/",
    linkedin: "https://www.linkedin.com/company/atomicsoulsproductions/",
    instagram: "https://www.instagram.com/atomicsoulsproductions/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SOLUTIONS = [
  { label: "Foundation", href: "/#pricing" },
  { label: "Growth", href: "/#pricing" },
  { label: "Premier", href: "/#pricing" },
  { label: "Local SEO Pro", href: "/#pricing" },
  { label: "StormFront", href: "/#pricing" },
  { label: "Content Creation Package", href: "/#pricing" },
] as const;
