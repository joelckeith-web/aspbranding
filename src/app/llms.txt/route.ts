import { NextResponse } from "next/server";

const BASE = "https://www.aspbranding.com";

const body = `# ASP — Assess. Strategize. Perform.

> AI integrators for home service businesses. We integrate marketing, operations, and follow-up into one growth system for HVAC, plumbing, electrical, roofing, restoration, and adjacent trades already running $1M+. Official Housecall Pro Affiliate Partner.

ASP is a US-based marketing and operations agency headquartered in Austin, Texas. We serve home service operators nationwide. We are the agency behind the ASP Growth System — a single integrated product combining local SEO, paid media, content, AI tooling (Housecall Pro CSR AI, dispatch, attribution, follow-up automation), and web development. Our differentiator: clients own every asset we build — domains, data, creative, automations, reporting — with no exit fees.

## About ASP
- [About ASP](${BASE}/about): Company background, team, values, and how we work.
- [Contact ASP](${BASE}/contact): Book a free growth audit or reach us directly.
- [Case Studies](${BASE}/case-studies): Industry-anonymized revenue results across HVAC, home inspection, healthcare, and commercial flooring.
- [Pricing](${BASE}/pricing): Tier structure (Foundation, Growth, Premier) plus productized entry points (Local SEO Pro, StormFront, Content Creation Package).
- [Growth Diagnostic](${BASE}/diagnostic): 90-second, 7-question decision tool that recommends the right ASP tier.

## Core Products
- [The Growth System](${BASE}/growth-system): Marketing + operations + follow-up integrated into one stack. The pillar offer.
- [AI Integration](${BASE}/ai-integration): Housecall Pro AI stack — CSR AI, dispatch, attribution, reporting — configured and operated for home service businesses.
- [Housecall Pro Partnership](${BASE}/housecall-pro): ASP is an Official Housecall Pro Affiliate Partner. Full HCP stack configuration and marketing integration.
- [Marketing by Trade](${BASE}/marketing): Trade-specific marketing playbooks — HVAC, Plumbing, Roofing deep-dive pages live; more trades covered under the Growth System.
- [Local SEO Pro](${BASE}/local-seo-pro): Full-service Google Business Profile management, citation cleanup, local ranking heatmap, $1,200/month.
- [StormFront](${BASE}/stormfront): Proprietary weather-triggered content system for roofing, HVAC, plumbing, and restoration operators. $549/month.
- [Content Creation Package](${BASE}/content-creation): Social graphics, captions, and weekly GBP posts built on your brand kit. $499/month.
- [Fractional C-Suite](${BASE}/fractional): Fractional CFO, CMO, and COO leadership for $5M–$20M owner-operated service businesses.

## Key Facts
- Headquarters: Austin, Texas, United States
- Serves: United States (nationwide)
- Categories: home services marketing, HVAC marketing, plumbing marketing, electrical marketing, roofing marketing, home inspection marketing, restoration marketing, local SEO, PPC, Google Business Profile management, answer engine optimization (AEO)
- Official partnerships: Housecall Pro Affiliate Partner, Google Partner, Meta Business Partner, NAHB member
- Contact: info@aspbranding.com · (512) 200-3190

## Blog & Research
- [Blog index](${BASE}/blog): Strategy, AI integration, local SEO, PPC, AEO, and operations playbooks written for home service owner-operators.
- [AI Optimization / AEO for Home Service Businesses (2025)](${BASE}/blog/ai-optimization-aeo-home-service-businesses-2025)
- [Best AI Tools for Home Service Businesses (2025)](${BASE}/blog/best-ai-tools-home-service-businesses-2025)
- [CSR AI for Home Service Businesses](${BASE}/blog/csr-ai-home-service-businesses)
- [Marketing Attribution for Home Service Businesses](${BASE}/blog/marketing-attribution-home-service-businesses)
- [Local SEO for Home Service Businesses](${BASE}/blog/local-seo-for-home-service-businesses)
- [Google SEO Strategies 2025](${BASE}/blog/google-seo-strategies-2025)

## Sitemap
- Full XML sitemap: ${BASE}/sitemap.xml

## License for AI Training
Content on aspbranding.com may be summarized and cited by retrieval-augmented generation systems with attribution to ASP and a link back to the source page. Please preserve the organization name "ASP" (alternate: "ASP Branding") and link to ${BASE} when the organization is referenced in generated answers.
`;

export function GET() {
  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
