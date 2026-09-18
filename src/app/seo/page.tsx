import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ExpandableDetails } from "@/components/sections/ExpandableDetails";
import { SectionBreak } from "@/components/sections/SectionBreak";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, ServiceSchema } from "@/components/schema/StructuredData";

const PAGE_TITLE = "Home Service SEO for Contractors";
const PAGE_DESCRIPTION =
  "Home service SEO: organic rankings, real content, and technical fixes that hold up over time. No backlink buying, no DA promises. See how ASP builds it.";
const PAGE_URL = "https://www.aspbranding.com/seo";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  // Page-level openGraph/twitter replace the root objects wholesale, so the site defaults are restated here.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ASP",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ASP — Assess. Strategize. Perform." }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aspbranding",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

/**
 * Trade grid. Phase 1 renders these as non-linking cards — the per-trade SEO
 * pages don't exist yet, and the site's rule is that we never ship a link to a
 * 404. Phase 2 turns `href` on and points each card at /seo/<slug>.
 */
const TRADES = [
  { name: "HVAC", slug: "hvac", icon: "thermometer" },
  { name: "Plumbing", slug: "plumbing", icon: "wrench" },
  { name: "Roofing", slug: "roofing", icon: "home" },
  { name: "Electrical", slug: "electrical", icon: "zap" },
  { name: "Restoration", slug: "restoration", icon: "shield" },
  { name: "Home Inspection", slug: "home-inspection", icon: "search" },
  { name: "Flooring", slug: "flooring", icon: "grid" },
  { name: "Remodeling", slug: "remodeling", icon: "hammer" },
  { name: "Landscaping", slug: "landscaping", icon: "leaf" },
  { name: "Pressure Washing", slug: "pressure-washing", icon: "droplet" },
  { name: "Pest Control", slug: "pest-control", icon: "bug" },
  { name: "Appliance Repair", slug: "appliance-repair", icon: "plug" },
];

const ICONS: Record<string, string> = {
  thermometer: "M12 3a2 2 0 00-2 2v9.1a4 4 0 104 0V5a2 2 0 00-2-2z",
  wrench: "M14.7 6.3a4 4 0 01-5 5L4 17v3h3l5.7-5.7a4 4 0 015-5l2-2-3-3-2 2z",
  home: "M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10z",
  zap: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  shield: "M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6l8-3z",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4",
  grid: "M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z",
  hammer: "M14 4l6 6-3 3-6-6 3-3zM10 8l-7 7v5h5l7-7",
  leaf: "M4 20c0-8 5-13 16-13 0 9-5 14-13 14H4v-1zM7 17c3-4 6-6 9-7",
  droplet: "M12 3s6 6.4 6 10.5A6 6 0 016 13.5C6 9.4 12 3 12 3z",
  bug: "M9 8a3 3 0 016 0v5a3 3 0 11-6 0V8zM5 10h4m6 0h4M5 15h4m6 0h4M9 5L7 3m8 2l2-2",
  plug: "M9 3v5m6-5v5M6 8h12v3a6 6 0 01-12 0V8zM12 17v4",
};

// Lives inside the expandable panel — depth without page length.
const LEVERS = [
  {
    label: "First-hand experience",
    body: "Content that ranks and gets cited says what the rest of the internet can't: what a job cost last month, why the cheap repair fails in year three, what you tell a homeowner before they ask. This is the part we can't do without you, so we interview for it — we sit with you or a senior tech, record it, and pull out the numbers and the failure modes.",
  },
  {
    label: "Depth over breadth",
    body: "One page per service is a starting point; a cluster is that page plus the method comparison, the cost breakdown, and the seasonal problem, all linked together. We build clusters in order of what a booked job is worth to you, not in order of search volume.",
  },
  {
    label: "Named, credentialed authorship",
    body: "Real authors, real credentials, accurate dates, and citations that hold up. You have licenses, years in the trade, and thousands of completed jobs behind you — most sites bury all of it behind a stock photo.",
  },
  {
    label: "Technical health",
    body: "Correct status codes, redirects that don't chain, canonicals pointing where they should, valid schema, a current sitemap, and pages that load fast on a phone. We fix in order of what the problem costs you — an indexation issue blocking forty pages outranks a slow hero image.",
  },
  {
    label: "Local signals",
    body: "For “near me” and map-pack queries, Business Profile data, review volume and recency, and citation consistency carry real weight. Both sides land in one report so they aren't pulling against each other.",
  },
];

const WORK = [
  {
    label: "Research first",
    body: "What your buyers search, what those searches are worth once they book, and what the companies already ranking have that you don't. Nothing gets written or changed before that.",
  },
  {
    label: "Unblock before building",
    body: "Indexation problems, redirect chains and crawl issues get sequenced by what they cost you, not by an audit tool's severity score.",
  },
  {
    label: "On-page work where the money is",
    body: "Titles, headings, structure and body copy written to answer the search rather than hit a keyword target. Where a service has real demand and no page, we build the page.",
  },
  {
    label: "Content depth on a schedule",
    body: "Clusters around your highest-value services, built out over months rather than dumped at once.",
  },
  {
    label: "Reporting against booked revenue",
    body: "Rankings and impressions are leading indicators; where your CRM supports attribution, we wire lead source through to the job.",
  },
  {
    label: "A monthly review where you learn the system",
    body: "We build it, then show you how to run it: what the numbers mean, what's next, and what you'd do without us.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Run the Growth Diagnostic",
    body: "About 90 seconds online. You get a read on where your marketing stands before anyone tries to sell you anything.",
  },
  {
    n: "02",
    title: "Audit and gap analysis",
    body: "A 30-minute call, then we go through the site: what's indexed, what's ranking, what's broken, and which searches your competitors own. You get the findings whether or not you hire us.",
  },
  {
    n: "03",
    title: "Your first ninety days",
    body: "We clear whatever is blocking, then build against the highest-value gaps the audit found. You see what changed and what it moved.",
  },
];

const PROOF = [
  {
    industry: "Commercial flooring and concrete coatings",
    body: "Invisible on the terms their buyers searched, with flat traffic and ad spend covering the gap. We ran keyword research and a competitive gap analysis, rebuilt on-page optimization against the target terms, and layered local SEO plus a content plan aimed at high-value commercial keywords.",
    stats: [
      { label: "Search visibility", value: "45.22%" },
      { label: "“Concrete Flooring Company”", value: "#1" },
      { label: "“Epoxy Coatings”", value: "#3 from #7" },
    ],
    note: "90-day tracking period. On track to break $5M inside twelve months.",
  },
  {
    industry: "HVAC services",
    body: "A regional operator plateaued at a $3M revenue ceiling for two years, needing stronger local search visibility in a crowded market. The organic side was Business Profile optimization for map-pack visibility, running alongside paid search and Local Services Ads.",
    stats: [
      { label: "Profile impressions", value: "13K+" },
      { label: "Call clicks from profile", value: "244" },
      { label: "Google reviews", value: "130" },
    ],
    note: "Twelve-month program. The ceiling broke, with paid media carrying a large share of that result.",
  },
];

const FAQS = [
  {
    question: "What is SEO for a home service business?",
    answer:
      "It's the work of getting found by people ready to book — in the map pack, the organic results, and the AI answers above both. It covers four parts: the service pages buyers read before calling, the content that answers the questions they search, the technical health that lets Google index all of it, and the local signals behind map-pack placement. We measure it against booked jobs, not a ranking report.",
  },
  {
    question: "How do you decide which services get their own page?",
    answer:
      "Demand first, then value, then competition. We look at what your buyers search and how often, what a booked job in that service is worth, and what the companies ranking have on the page. A service with steady demand, good margin and weak incumbent pages gets built first. A service nobody searches for by name gets handled inside a broader page instead. You see the list before anything gets written.",
  },
  {
    question: "SEO vs. PPC — which should I start with?",
    answer:
      "It depends on runway. Paid search gets you in front of buyers today and stops when the budget stops. SEO takes months to move and keeps returning after it does. If you need jobs booked this month, start with paid and build organic underneath it. If lead flow is steady and cost per lead climbs every year, organic is where the margin is. Most established operators run both.",
  },
  {
    question: "How is this different from Local SEO Pro?",
    answer:
      "Local SEO Pro is the local side: Google Business Profile management, citation audits across 60+ directories on a 90-day cycle, a ranking heatmap from 50+ grid points a month, competitor intelligence, and local schema. For “near me” searches, the map pack or your Business Profile, that's the page you want. This page covers keyword strategy, service pages, content depth and technical SEO. Most clients need both, and they report together.",
  },
  {
    question: "Is SEO still worth it now that AI Overviews are changing search?",
    answer:
      "Yes, and the work that wins there is the same work. AI answers are assembled from content that's already indexed, useful and trusted, so the levers are unchanged: first-hand experience, clear authorship and credentials, and a site that crawls cleanly. There's no separate file to publish and no markup that makes an AI cite you. What changed is measurement — some searches resolve without a click, so impressions and cited mentions matter alongside clicks.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "There's no honest fixed timeline, and any agency quoting you one is quoting a sales number. It depends on your domain's history, the technical debt in the way, and how competitive your market is. The sequence is predictable: technical fixes show first, on-page work moves next, and new clusters are slowest and most durable. If a quarter passes with nothing moving, we'd rather say so than hide it in a report.",
  },
  {
    question: "Do you build backlinks?",
    answer:
      "No. We don't buy links and we don't sell link packages. Our standard is earn, don't buy — bought links are increasingly a waste of money, and the outcome you were promised usually wasn't measurable. Links that come from genuinely useful content, real partnerships and PR are worth having, and any link ASP influences uses brand, bare-URL or natural anchor text rather than exact-match commercial anchors.",
  },
  {
    question: "How do you measure whether SEO is working?",
    answer:
      "Against booked revenue, with rankings and impressions as the leading indicators. Rankings and organic impressions tell you whether visibility is moving; clicks and leads tell you whether it's landing; booked jobs tell you whether it was worth doing. Where your CRM supports attribution, we wire lead source through to the job. You won't see Domain Authority in the report — DA and DR are third-party scores Google doesn't use.",
  },
  {
    question: "How is SEO priced?",
    answer:
      "SEO isn't sold here as a standalone retainer with a rate card. The scope depends on what the audit finds — how much technical debt is in the way, how many service pages need building, and how deep the content has to go to compete in your market. That scope is what sets the number, and you see it before you commit to anything. Current options are on the pricing page.",
  },
  {
    question: "Do you do SEO for a specific trade — roofing, HVAC, electrical, or plumbing?",
    answer:
      "Yes. Roofing, HVAC, electrician and plumbing SEO run on the same method with different calendars and cluster plans — roofing moves in storm-driven bursts, HVAC and electrical follow seasonal and emergency demand, and plumbing splits between instant-decision emergencies and planned work like repipes. We also work with flooring, inspection, restoration, remodel and specialty contractors. If your trade isn't listed, the method still applies; the research tells us how your buyers search.",
  },
];

const RELATED = [
  {
    label: "Local",
    href: "/local-seo-pro",
    title: "Local SEO Pro",
    body: "Business Profile management, citation cleanup, and a ranking heatmap: the local half of the work.",
  },
  {
    label: "Pillar",
    href: "/growth-system",
    title: "The Growth System",
    body: "Marketing, operations, and follow-up on one stack, against one revenue number.",
  },
  {
    label: "Guide",
    href: "/blog/google-seo-strategies-2025",
    title: "Google SEO Strategies for Home Service Businesses",
    body: "The long version: clusters, technical basics, and how paid and organic stack.",
  },
];

export default function SeoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "SEO", url: PAGE_URL },
        ]}
      />
      {/* No price field — /seo is a method page, not an offer page. */}
      <ServiceSchema
        name="Home Service SEO"
        description="Organic, technical, and content SEO for home service businesses: keyword strategy, service pages, content depth, and technical fixes, measured against booked jobs. Separate from Local SEO Pro's Business Profile and citation scope."
        url={PAGE_URL}
        serviceType="Search Engine Optimization"
        audienceType="Home service businesses"
      />

      <Hero
        eyebrow="Services"
        heading="Home Service SEO"
        subheading="Organic rankings, service pages that answer the search, and the technical work that lets Google read all of it — measured against booked jobs."
        ctaText="Book a call"
        ctaUrl="/contact"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/backgrounds/growth-system-bg.png"
        imagePosition="72% 62%"
        size="compact"
      />

      {/* Value prop — short. */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <p className="font-black uppercase tracking-wide text-sm text-asp-blue">
              Contractor SEO
            </p>
            <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight text-asp-black">
              What home service SEO covers
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Home service SEO is the work of showing up for every search that ends in a booked job:
              the map pack, the service page a homeowner reads before calling, and the comparison
              they run between you and the company two towns over. We build that, then measure it
              against booked revenue.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Book a call
              </Link>
              <Link
                href="/local-seo-pro"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                See Local SEO Pro
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[var(--radius-asp-2xl)] shadow-asp-lg">
              <Image
                src="/images/portfolio/portfolio-mockup.avif"
                alt="A home service website built by ASP, shown on desktop and mobile"
                width={880}
                height={660}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trade grid. Cards are not links in phase 1 — the per-trade pages don't exist yet. */}
      <section className="py-14 md:py-16 bg-asp-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue-light">
                Every trade, every home service
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight">
                SEO for roofing, HVAC, plumbing, electrical and every other home service trade
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70 leading-relaxed">
                One method, tuned per trade. Roofing moves in storm-driven bursts; HVAC and
                electrical follow season and emergency; plumbing splits between instant-decision
                emergencies and planned work; cleaning and lawn care run on recurring demand.
                What changes is the calendar and the cluster plan, not the method.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {TRADES.map((t) => (
                <div
                  key={t.slug}
                  className="flex flex-col items-center gap-3 rounded-[var(--radius-asp-xl)] border border-asp-blue-light/25 bg-white/[0.03] px-4 py-6 text-center transition-colors hover:border-asp-blue-light/60"
                >
                  <svg
                    className="h-8 w-8 text-asp-blue-light"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[t.icon]} />
                  </svg>
                  <span className="font-bold text-base">{t.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Depth lives here, collapsed by default. Content stays in the HTML for crawlers. */}
      <ExpandableDetails heading="More details about our SEO services">
        <h3 className="font-black text-2xl text-asp-black">What moves rankings in 2026</h3>
        <p className="mt-4 text-lg text-black/70 leading-relaxed">
          AI Overviews now sit above the results on a chunk of queries, and the old playbook of thin
          pages and bought links stopped paying long before that. What a winning page looks like has
          not changed: the most useful answer on the topic, from somebody who has done the work. Our
          work runs off one internal standard, the ASP SEO &amp; AEO Content Guidelines v2.1,
          grounded in Google&rsquo;s published guidance for its AI features.
        </p>

        <ul className="mt-7 space-y-5">
          {LEVERS.map((l) => (
            <li key={l.label} className="flex gap-4">
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-asp-blue"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-black text-asp-black">{l.label}</p>
                <p className="mt-1 text-base leading-relaxed text-black/70">{l.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-7 text-base leading-relaxed text-black/70">
          We don&rsquo;t buy links and we don&rsquo;t report Domain Authority as a KPI. There&rsquo;s
          no separate &ldquo;AI layer&rdquo; to buy either — showing up in AI Overviews comes from
          these same levers done well, which we cover in our{" "}
          <Link
            href="/blog/ai-optimization-aeo-home-service-businesses-2025"
            className="text-asp-blue underline underline-offset-4"
          >
            guide to AI optimization and answer engine optimization
          </Link>
          .
        </p>

        <hr className="my-10 border-black/10" />

        <h3 className="font-black text-2xl text-asp-black">How an SEO engagement runs</h3>
        <p className="mt-4 text-lg text-black/70 leading-relaxed">
          There&rsquo;s no single starting point. A three-year-old site with forty pages needs
          different work than a rebuild that launched in March. What stays consistent is the order of
          operations.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {WORK.map((w) => (
            <div key={w.label} className="rounded-[var(--radius-asp-lg)] border border-gray-200 bg-white p-5 shadow-asp-sm">
              <p className="font-black text-asp-black">{w.label}</p>
              <p className="mt-1 text-base leading-relaxed text-black/70">{w.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-7 text-base leading-relaxed text-black/70">
          What we need from you is time for the interviews, access to your own accounts, and an
          honest answer on which services you want more of. You own every account, asset and report
          from day one, and there&rsquo;s no exit fee. SEO isn&rsquo;t run as an isolated retainer
          here — organic sits inside{" "}
          <Link href="/growth-system" className="text-asp-blue underline underline-offset-4">
            the Growth System
          </Link>{" "}
          alongside the local, content and paid components, reporting into one monthly review.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
          >
            Book a call
          </Link>
        </div>
      </ExpandableDetails>

      {/* Proof */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              SEO results from real client work
            </h2>
            <p className="mt-4 font-black text-asp-blue">
              45.22% search visibility · #1 on two head terms in 90 days · 13K+ Business Profile
              impressions
            </p>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {PROOF.map((p) => (
                <div
                  key={p.industry}
                  className="rounded-[var(--radius-asp-2xl)] border border-gray-200 bg-white p-7 shadow-asp-md"
                >
                  <h3 className="font-black text-xl text-asp-black">{p.industry}</h3>
                  <p className="mt-3 text-base leading-relaxed text-black/70">{p.body}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-black/10 pt-5">
                    {p.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="text-xs uppercase tracking-wide text-black/50">
                          {s.label}
                        </dt>
                        <dd className="mt-1 font-black text-lg text-asp-blue">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm text-black/50">{p.note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-8 max-w-6xl text-base text-black/55 leading-relaxed">
              Across the whole book of business — all services, not SEO alone — 4&ndash;5&times;
              average ROAS, +25% average yearly attributed revenue, and 3&times; average lead volume
              in the first six months. Neither case study above is a clean SEO-only attribution
              claim: the flooring engagement ran alongside ad spend, and the HVAC program was
              paid-led with local SEO as one component. A result somebody else got is not a forecast
              of yours. More detail on the{" "}
              <Link href="/case-studies" className="text-asp-blue underline underline-offset-4">
                full case studies page
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialAnchor
        quote="It's a night-and-day difference from our last company."
        attribution="Sarah"
        variant="dark"
        size="sm"
        widthClassName="max-w-6xl"
      />

      {/* How it works */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black text-center">
              How to start with ASP
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm">
                  <span className="font-black text-3xl text-asp-blue-light">{s.n}</span>
                  <h3 className="mt-3 font-black text-lg text-asp-black">{s.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-black/70">{s.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Run the Growth Diagnostic
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                Book a call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionBreak />

      <FAQAccordion
        faqs={FAQS}
        heading="Frequently Asked Questions"
        columns={2}
        widthClassName="max-w-6xl"
      />

      <RelatedPages items={RELATED} heading="Related across the Growth System" />

      {/* Closing CTA band */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Want to know what&rsquo;s holding your rankings back?
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Start with the 90-second Growth Diagnostic, or book a call and we&rsquo;ll walk your
              site and show you the gaps. Either way you leave with findings, not a pitch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Book a call
              </Link>
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                Run the Growth Diagnostic
              </Link>
            </div>
            <p className="mt-8 text-sm text-black/50">
              Every account, asset, and report built in your name · No exit fees · We report
              rankings, traffic, and booked revenue — not Domain Authority.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
