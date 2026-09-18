import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, ServiceSchema } from "@/components/schema/StructuredData";

const PAGE_TITLE = "Home Service SEO";
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

// Hero card grid — the four things the page covers, one line each.
const PILLARS = [
  {
    label: "Service pages",
    body: "The pages buyers read before they call, built to beat whoever is ranking today.",
  },
  {
    label: "Content depth",
    body: "Clusters around your highest-value services, not one thin page per trade.",
  },
  {
    label: "Technical health",
    body: "Crawling, indexing, redirects, schema, and speed on a phone with two bars.",
  },
  {
    label: "Local signals",
    body: "Business Profile, reviews, and citations, reported alongside the organic work.",
  },
];

// What moves rankings. First card carries the interview detail — the real differentiator.
const LEVERS = [
  {
    label: "First-hand experience — the biggest lever",
    body: "Content that ranks and gets cited says what the rest of the internet can't: what a job cost last month, why the cheap repair fails in year three, what you tell a homeowner before they ask. This is the part we can't do without you. It's an interview — we sit with you or a senior tech, record it, and pull out the numbers and the failure modes. You talk; we do the rest.",
  },
  {
    label: "Depth over breadth",
    body: "One page per service is a starting point; a cluster is that page plus the method comparison, the cost breakdown, and the seasonal problem, all linked together. We build clusters in order of what a booked job is worth to you, not in order of search volume.",
  },
  {
    label: "Named, credentialed authorship",
    body: "E-E-A-T comes down to real authors, real credentials, accurate dates, and citations that hold up — and you have licenses, years in the trade, and thousands of completed jobs behind you. Putting a named human on the content costs nothing and separates you from agency-written pages.",
  },
  {
    label: "Technical health",
    body: "Correct status codes, redirects that don't chain, canonicals pointing where they should, valid schema, a current sitemap, and pages that load fast on a phone. We fix in order of what the problem costs you — an indexation issue blocking forty pages outranks a slow hero image.",
  },
  {
    label: "Local signals, where they count",
    body: "For “near me” and map-pack queries, Business Profile data, review volume and recency, and citation consistency carry real weight. Both sides land in one report so they aren't pulling against each other.",
  },
];

// How the work runs — capability grid.
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
    body: "Titles, headings, structure and body copy written to answer the search rather than hit a keyword target.",
  },
  {
    label: "Pages that don't exist yet",
    body: "Where a service has real demand and no page, we build the page.",
  },
  {
    label: "Content depth on a schedule",
    body: "Clusters around your highest-value services, built out over months rather than dumped at once.",
  },
  {
    label: "Local surfaces stay active",
    body: "The Content Creation Package keeps social and Business Profile content moving while site-side content compounds.",
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

// Proof. Both blocks are trades. Neither is clean SEO-only attribution and the page says so.
const PROOF = [
  {
    industry: "Commercial flooring and concrete coatings",
    body: "This company was invisible on the terms their buyers searched, with flat traffic and ad spend covering the gap. We ran keyword research and a competitive gap analysis, rebuilt on-page optimization against the target terms, and layered local SEO plus a content plan aimed at high-value commercial keywords.",
    stats: [
      { label: "Search visibility", value: "45.22%" },
      { label: "“Concrete Flooring Company”", value: "#1" },
      { label: "“Epoxy Coatings”", value: "#3 from #7" },
    ],
    note: "90-day tracking period. The business is on track to break $5M inside twelve months.",
  },
  {
    industry: "HVAC services",
    body: "A regional HVAC operator had plateaued at a $3M revenue ceiling for two years and needed stronger local search visibility in a crowded market. The organic side of that program was Business Profile optimization for map-pack visibility, running alongside paid search and Local Services Ads.",
    stats: [
      { label: "Business Profile impressions", value: "13K+" },
      { label: "Call clicks from the profile", value: "244" },
      { label: "Google reviews", value: "130" },
    ],
    note: "Twelve-month program. The revenue ceiling broke, with paid media carrying a large share of that result.",
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
        eyebrow="SEO"
        heading="Home Service SEO"
        subheading="Organic rankings, service pages that answer the search, and the technical work that lets Google read all of it — measured against booked jobs."
        ctaText="Book a call"
        ctaUrl="/contact"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="dark"
      />

      {/* Hero card grid — visual break before any prose. */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="stagger">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <h2 className="font-black text-lg text-asp-black">{p.label}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">{p.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight">
              What home service SEO covers
            </h2>
            <div className="mt-6 space-y-5 text-white/80 leading-relaxed">
              <p>
                Home service SEO is the work of showing up for every search that ends in a booked
                job: the map pack, the service page a homeowner reads before calling, the cost
                question searched at 11 p.m., and the comparison between you and the company two
                towns over. A good share of those searches never touch a map.
              </p>
              <p>
                We split the work into two areas on purpose, because blurring them is how the same
                job gets done twice and the harder half gets skipped. The local side is{" "}
                <Link href="/local-seo-pro" className="text-asp-light-blue underline underline-offset-4">
                  Local SEO Pro
                </Link>
                : Business Profile management, citation audits across 60+ directories on a 90-day
                cycle, a ranking heatmap built from 50+ grid points a month, competitor
                intelligence, and local schema. Those signals decide map-pack placement.
              </p>
              <p>
                This page covers the broader side: which services deserve a page at all, what has to
                be on that page to beat the agencies already ranking, and whether Google can crawl,
                render and index the site without tripping over a redirect chain or a six-second
                load. The two areas feed each other, so we run them as one program against one set
                of numbers.
              </p>
              <p>
                If your lead flow is thin and nobody owns marketing inside the business, the
                highest-return move is smaller than a full SEO program — clean lead tracking, a
                Business Profile filled out properly, and one service page better than what's
                ranking. The Growth System is built for operators past that point.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Method */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black max-w-3xl">
              What moves rankings in 2026
            </h2>
            <p className="mt-5 max-w-3xl text-black/70 leading-relaxed">
              AI Overviews now sit above the results on a chunk of queries, and the old playbook of
              thin pages and bought links stopped paying long before that. What a winning page looks
              like has not changed: the most useful answer on the topic, from somebody who has done
              the work. Our work runs off one internal standard, the ASP SEO &amp; AEO Content
              Guidelines v2.1, grounded in Google&rsquo;s published guidance for its AI features.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LEVERS.map((l) => (
                <div
                  key={l.label}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-black text-lg text-asp-black">{l.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">{l.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-10 max-w-3xl text-black/70 leading-relaxed">
              We don&rsquo;t buy links and we don&rsquo;t report Domain Authority as a KPI; both are
              covered in the FAQ below. There&rsquo;s no separate &ldquo;AI layer&rdquo; to buy
              either — showing up in AI Overviews comes from these same levers done well, which we
              cover in our{" "}
              <Link
                href="/blog/ai-optimization-aeo-home-service-businesses-2025"
                className="text-asp-blue underline underline-offset-4"
              >
                guide to AI optimization and answer engine optimization
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How the work runs */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight">How the work gets done</h2>
            <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
              There&rsquo;s no single starting point. A three-year-old site with forty pages needs
              different work than a rebuild that launched in March. What stays consistent is the
              order of operations.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {WORK.map((w) => (
                <div key={w.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-black text-lg">{w.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {w.label === "Local surfaces stay active" ? (
                      <>
                        The{" "}
                        <Link
                          href="/content-creation"
                          className="text-asp-light-blue underline underline-offset-4"
                        >
                          Content Creation Package
                        </Link>{" "}
                        keeps social and Business Profile content moving while site-side content
                        compounds.
                      </>
                    ) : (
                      w.body
                    )}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-10 max-w-3xl text-white/70 leading-relaxed">
              What we need from you is time for the interviews, access to your own accounts, and an
              honest answer on which services you want more of. You own every account, asset and
              report from day one, and there&rsquo;s no exit fee.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Proof: what SEO work looks like at ASP
            </h2>
            <p className="mt-4 font-black text-asp-blue">
              45.22% search visibility · #1 on two head terms in 90 days · 13K+ Business Profile
              impressions
            </p>
            <p className="mt-5 max-w-3xl text-black/70 leading-relaxed">
              Every case study on the site comes from an active client, reported by trade and never
              by name.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {PROOF.map((p) => (
                <div
                  key={p.industry}
                  className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm"
                >
                  <h3 className="font-black text-xl text-asp-black">{p.industry}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">{p.body}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-black/10 pt-5">
                    {p.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="text-[11px] uppercase tracking-wide text-black/50">
                          {s.label}
                        </dt>
                        <dd className="mt-1 font-black text-lg text-asp-blue">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-xs text-black/50">{p.note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-10 max-w-3xl text-black/70 leading-relaxed">
              Across the whole book of business — all services, not SEO alone — 4&ndash;5&times;
              average ROAS, +25% average yearly attributed revenue, and 3&times; average lead volume
              in the first six months.
            </p>
            <p className="mt-4 max-w-3xl text-sm text-black/55 leading-relaxed">
              Two caveats, plainly. Neither case study is a clean SEO-only attribution claim — the
              flooring engagement ran alongside ad spend, and the HVAC program was paid-led with
              local SEO as one component. And a result somebody else got is not a forecast of yours
              — different market, different competition, different starting point. There&rsquo;s
              more detail, including the paid and local results, on the{" "}
              <Link href="/case-studies" className="text-asp-blue underline underline-offset-4">
                full case studies page
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialAnchor attribution="Kevin" variant="dark" />

      {/* SEO vs PPC */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              SEO and PPC, and how they work together
            </h2>
            <div className="mt-6 space-y-5 text-black/70 leading-relaxed">
              <p>Which one to start with depends on how fast you need the phone to ring.</p>
              <p>
                Paid search buys presence today: you&rsquo;re in the auction this afternoon and can
                measure cost per booked job inside a month. It stops the day you stop paying. SEO
                compounds — the work you do in Q1 keeps returning a year later, and cost per lead
                falls as it matures instead of climbing with the auction. It also takes months to
                move, which is a real problem if you need jobs booked in three weeks.
              </p>
              <p>
                Most established operators run both, weighted to where they are. If you&rsquo;re
                cash-constrained and short on volume, start with paid and build organic underneath
                it. If lead flow is steady and cost per lead climbs every year, organic is where the
                margin is. Running both also gives you something neither gives alone: the terms that
                convert in your ad account tell you which pages to build organically.
              </p>
              <p>
                We run paid search as its own discipline alongside this one. There&rsquo;s a longer
                treatment of combining them in our{" "}
                <Link
                  href="/blog/google-seo-strategies-2025"
                  className="text-asp-blue underline underline-offset-4"
                >
                  guide to Google SEO strategies for home service businesses
                </Link>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where it fits */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight">
              Where SEO fits in the ASP Growth System
            </h2>
            <div className="mt-6 space-y-5 text-white/80 leading-relaxed">
              <p>
                We don&rsquo;t run SEO as an isolated retainer, because rankings that don&rsquo;t
                turn into booked jobs are a hobby.{" "}
                <Link href="/growth-system" className="text-asp-light-blue underline underline-offset-4">
                  The Growth System
                </Link>{" "}
                is how the pieces run together — marketing, operations and follow-up on one stack,
                measured against one revenue number. Organic work sits inside it alongside the
                local, content and paid components, and all of it reports into the same monthly
                review.
              </p>
              <p>
                If you want the commercial conversation, it&rsquo;s on the{" "}
                <Link href="/pricing" className="text-asp-light-blue underline underline-offset-4">
                  pricing page
                </Link>
                . If you&rsquo;d rather start with where your marketing stands today, the{" "}
                <Link href="/diagnostic" className="text-asp-light-blue underline underline-offset-4">
                  Growth Diagnostic
                </Link>{" "}
                takes about 90 seconds.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} heading="Frequently Asked Questions" />

      <RelatedPages items={RELATED} />

      {/* Closing CTA band */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Want to know what&rsquo;s holding your rankings back?
            </h2>
            <p className="mt-5 text-black/70 leading-relaxed">
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
            <p className="mt-8 text-xs text-black/50">
              Every account, asset, and report built in your name · No exit fees · We report
              rankings, traffic, and booked revenue — not Domain Authority.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
