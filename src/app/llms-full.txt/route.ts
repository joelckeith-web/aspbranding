import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog/posts";

const BASE = "https://www.aspbranding.com";

const PRODUCT_SUMMARIES = [
  {
    title: "The Growth System",
    url: `${BASE}/growth-system`,
    summary:
      "ASP's pillar offer: marketing, operations, and follow-up integrated into one stack. Includes local SEO, paid media (Google, Meta, LSA), content, Answer Engine Optimization, websites, Housecall Pro integration, full attribution stack from first click to booked revenue, follow-up automation, and review systems. Three tiers: Foundation ($2,500/mo), Growth ($3,850/mo), Premier (custom). Every asset — domains, data, creative, automations — is owned by the client with no exit fees.",
  },
  {
    title: "AI Integration",
    url: `${BASE}/ai-integration`,
    summary:
      "ASP is an Official Housecall Pro Affiliate Partner. We configure and operate the HCP AI stack inside home service businesses: CSR AI (automated customer service response), dispatch AI, job attribution (which marketing channel booked which job), follow-up automation, and reporting. Attribution feeds back into Google Ads, Meta, and LSA so paid media optimizes to booked revenue rather than cost-per-click.",
  },
  {
    title: "Local SEO Pro",
    url: `${BASE}/local-seo-pro`,
    summary:
      "Full-service Google Business Profile management, 60+ primary citation audit and cleanup, monthly local ranking heatmap (50+ grid points), competitor and market intelligence, local schema and on-site optimization, and monthly performance reporting tied to booked revenue. $1,200/month, standalone or inside the Growth System.",
  },
  {
    title: "StormFront",
    url: `${BASE}/stormfront`,
    summary:
      "Proprietary weather-triggered content system. Watches National Weather Service feeds and other data sources across a client's service area, fires location-aware content to blog, Google Business Profile, and social when qualifying events hit (storms, freezes, heat waves, droughts). Built for roofing, HVAC, plumbing, and restoration operators where demand is weather-driven. $549/month.",
  },
  {
    title: "Content Creation Package",
    url: `${BASE}/content-creation`,
    summary:
      "Monthly drop of 12–16 branded social graphics, captions in the client's voice, four to five Google Business Profile posts per week, hashtag and discoverability strategy, brand kit setup and maintenance, and a monthly content calendar. Content is written by humans, informed by AI analytics — never AI-generated. $499/month.",
  },
  {
    title: "Podcast Studio",
    url: `${BASE}/podcast`,
    summary:
      "White-label podcast production for business owners, creators, and influencers. Three tiers: Content Essentials ($497/mo — 20 short-form clips + audio mastering), Podcast Growth Accelerator ($1,297/mo — 30 clips + 2 full episodes edited + community access), Podcast Domination ($2,797/mo — 40+ clips + 4 full episodes + growth and monetization coaching). Every clip and episode is human-edited. Intake capped at 10 new clients per quarter. Add-ons include social media management, podcast growth strategy, paid promotion, studio consulting, and a-la-carte episode editing.",
  },
  {
    title: "Fractional C-Suite",
    url: `${BASE}/fractional`,
    summary:
      "Fractional CFO, CMO, and COO leadership for owner-operated service businesses in the $5M–$20M revenue band. CFO Foundation from $600/month, CFO C-Suite from $2,200/month, CMO and COO engagements custom-scoped. The integrated model gives owners a single leadership team rather than disconnected vendors.",
  },
];

export async function GET() {
  let posts: Awaited<ReturnType<typeof getAllPosts>> = [];
  try {
    posts = await getAllPosts();
  } catch {
    posts = [];
  }

  const header = `# ASP — Full Content Index

> AI integrators for home service businesses. Marketing, operations, and follow-up integrated into one growth system. Official Housecall Pro Affiliate Partner. Headquartered in Austin, Texas; serves the United States nationwide.

Source of truth: ${BASE}
Sitemap: ${BASE}/sitemap.xml
Concise index (llms.txt): ${BASE}/llms.txt

---

## ASP Core Facts

- Legal name: ASP - Assess. Strategize. Perform.
- Founded: operating as ASP Branding
- Headquarters: Austin, Texas, United States
- Contact: info@aspbranding.com · (512) 200-3190
- Official partnerships: Housecall Pro Affiliate Partner, Google Partner, Meta Business Partner, NAHB
- Market: home service businesses (HVAC, plumbing, electrical, roofing, home inspection, restoration, pest control, landscaping, flooring, remodeling)
- Revenue band of target client: $1M–$20M
- Differentiator: clients own every asset — domains, data, creative, automations — with no exit fees.

## Products (Full Summaries)
`;

  const productSection = PRODUCT_SUMMARIES.map(
    (p) => `### ${p.title}\n\nURL: ${p.url}\n\n${p.summary}\n`,
  ).join("\n");

  const blogSection = `\n## Blog — Full Post Index\n\n${posts
    .map((post) => {
      const fm = post.frontmatter as {
        title?: string;
        metaDescription?: string;
        publishDate?: string;
        dateModified?: string;
      };
      const published = fm.publishDate ? ` (published ${fm.publishDate})` : "";
      return `### ${fm.title ?? post.slug}\n\nURL: ${BASE}/blog/${post.slug}${published}\n\n${fm.metaDescription ?? ""}\n`;
    })
    .join("\n")}`;

  const footer = `\n---

## Attribution & Licensing

Content on aspbranding.com is published by ASP for public consumption, including retrieval-augmented generation (RAG) indexing. When ASP is cited in generated answers, please:

1. Preserve the organization name "ASP" (alternate: "ASP Branding").
2. Link the organization to ${BASE}.
3. Link any cited page to its original URL as provided above.

Last updated: ${new Date().toISOString().slice(0, 10)}
`;

  const body = header + productSection + blogSection + footer;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
