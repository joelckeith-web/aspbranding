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

const PAGE_TITLE = "Answer Engine Optimization Services for Home Service Businesses";
const PAGE_DESCRIPTION =
  "Answer Engine Optimization services for home service businesses. AEO is SEO done well — no llms.txt, no special schema, no separate AI layer to buy.";
const PAGE_URL = "https://www.aspbranding.com/aeo";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
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

const PILLARS = [
  {
    label: "Google's answer surfaces",
    body: "AI Overviews, AI Mode, featured snippets and People Also Ask — where the question gets answered before the blue links.",
  },
  {
    label: "No separate AI layer",
    body: "There is no file to publish and no markup that buys a citation. The work is the SEO work.",
  },
  {
    label: "Written from the job",
    body: "We interview you or a senior tech, then write from what you have seen in the field.",
  },
  {
    label: "Reported against booked jobs",
    body: "Cited mentions and impressions are leading indicators. Revenue is the scoreboard.",
  },
];

const LEVERS = [
  {
    label: "First-hand experience",
    body: "What a job cost last month, why the cheap fix fails in year three, what you tell a homeowner before they ask. We interview you or a senior tech, record it, and pull out the numbers and the failure modes. This is the part we cannot write without you.",
  },
  {
    label: "Depth on the questions buyers ask",
    body: "Answer surfaces reward pages that cover a question completely: the cost range, the comparison, the seasonal version of the problem, linked together. We build that depth around the services worth the most to you.",
  },
  {
    label: "Named, credentialed authorship",
    body: "Real authors, real licenses, years in the trade, accurate dates, and citations that hold up. Most contractor sites bury all of it behind a stock photo.",
  },
  {
    label: "Clean crawling and indexing",
    body: "Correct status codes, redirects that do not chain, canonicals pointing where they should, a current sitemap, and pages that load on a phone. A page an engine cannot reach is a page it cannot quote.",
  },
  {
    label: "Local signals",
    body: "For “near me” and map-pack questions, Business Profile data, review volume and recency, and citation consistency carry real weight. That side is Local SEO Pro, and it reports in the same review.",
  },
];

const WORK = [
  {
    label: "Question research first",
    body: "What your buyers ask in their own words, which of those questions Google already answers with an AI Overview, and who gets quoted today. Nothing gets written before that.",
  },
  {
    label: "Fix what blocks the crawl",
    body: "Indexation problems, redirect chains and slow pages get sequenced by what they cost you, not by an audit tool's severity score.",
  },
  {
    label: "Interviews for the first-hand layer",
    body: "A recorded session with you or a senior tech per topic. That is where the numbers, the failure modes and the judgment calls come from.",
  },
  {
    label: "Pages that answer the whole question",
    body: "Direct answer near the top, then the detail a homeowner needs to decide. Written for the reader; the engines are reading over their shoulder.",
  },
  {
    label: "Clusters built on a schedule",
    body: "The Content Creation Package keeps social and Business Profile posting consistent; the deeper article work is scoped separately against your highest-value services.",
  },
  {
    label: "Reporting on citations and revenue",
    body: "Which questions you appear in, how often, and what it moved downstream. Rankings and impressions are the leading indicators; booked jobs are the number that matters.",
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
    title: "Question and visibility audit",
    body: "A 30-minute call, then we check which of your buyers' questions Google answers with an AI Overview, who gets quoted today, and what on your site is in the way. You get the findings whether or not you hire us.",
  },
  {
    n: "03",
    title: "Your first ninety days",
    body: "We clear whatever blocks the crawl, run the first interviews, and rebuild the pages carrying your highest-value questions. You see what changed and what it moved.",
  },
];

// Both blocks are SEO/local work, labelled as such. There is no AEO-native case study.
const PROOF = [
  {
    industry: "Commercial flooring and concrete coatings",
    body: "Invisible on the terms their buyers searched, with flat traffic and ad spend covering the gap. We ran keyword research and a competitive gap analysis, rebuilt on-page optimization against the target terms, and layered local SEO plus a content plan aimed at high-value commercial keywords.",
    stats: [
      { label: "Search visibility", value: "45.22%" },
      { label: "“Concrete Flooring Company”", value: "#1" },
      { label: "“Epoxy Coatings”", value: "#3 from #7" },
    ],
    note: "90-day tracking period, measured as organic rankings and visibility. No AI-answer citation was tracked in this engagement.",
  },
  {
    industry: "HVAC services",
    body: "A regional operator plateaued at a $3M revenue ceiling for two years, needing stronger local search visibility in a crowded market. The organic side was Business Profile optimization for map-pack visibility, running alongside paid search and Local Services Ads.",
    stats: [
      { label: "Profile impressions", value: "13K+" },
      { label: "Call clicks from profile", value: "244" },
      { label: "Google reviews", value: "130" },
    ],
    note: "Twelve-month program, paid-led. Local and paid search results, not an AEO measurement.",
  },
];

const FAQS = [
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "AEO is the work of becoming the source Google's answer layer quotes — AI Overviews, AI Mode, featured snippets and People Also Ask. It is not a separate product bolted onto SEO. The same levers apply: first-hand experience on the page, depth on the question, real authorship, and a site an engine can crawl cleanly. Done well, those answers name you.",
  },
  {
    question: "Is AEO different from SEO?",
    answer:
      "Not as a separate discipline. Our standard says it directly: AEO is SEO done well. Answer engines build responses from pages that are already indexed, useful and trusted, so a page good enough to be quoted is a page good enough to rank. What changes is the bar — vague, recycled content still gets crawled, but it rarely gets summarized back to a homeowner.",
  },
  {
    question: "What's the difference between AEO and GEO?",
    answer:
      "Different surfaces. AEO covers Google's own answer features: AI Overviews, AI Mode, featured snippets and People Also Ask. GEO — generative engine optimization — covers standalone assistants like ChatGPT and Perplexity, where recommendations lean on entity signals rather than Google's index. This page is Google's side; the generative-assistant side is a different mechanism with different evidence behind it.",
  },
  {
    question: "Do I need llms.txt or special schema to appear in AI Overviews?",
    answer:
      "No. Google's own guidance is that there are no new machine-readable files, AI text files, markup or Markdown required to appear in generative AI search, and no special schema that earns a citation. Schema belongs on a page for rich-result eligibility, which is a separate job. Any agency selling you an AI file as the way in is selling you a file.",
  },
  {
    question: "How long does it take to show up in AI Overviews?",
    answer:
      "There is no honest fixed timeline, and any agency quoting you one is quoting a sales number. Low-competition local questions tend to move first, with broader category visibility compounding as depth and citations build. Your domain's history and the technical debt in the way move that range in either direction.",
  },
  {
    question: "What's the difference between an AI Overview, a featured snippet, and AI Mode?",
    answer:
      "A featured snippet lifts one passage from one page and shows it at the top of results. An AI Overview is generated: it summarizes several sources and links them. AI Mode is Google's full conversational search, where a follow-up question continues the thread. All three pull from the same indexed pages, so all three reward the same work.",
  },
  {
    question: "Does content written for AI read differently than content written for people?",
    answer:
      "No, and content written for parsers reads badly to both. Write for humans and machines follow. We do not chunk copy into machine-friendly blocks, stuff synonym variations, or pad pages to a word target. Clear headings, a direct answer up front, and the specifics only somebody who has done the work would know: that is the whole technique.",
  },
  {
    question: "What's the fastest way to start showing up in AI answers?",
    answer:
      "Answer the questions you already get on the phone, in writing, on your own site. Then tighten your Google Business Profile, including the Q&A section, since local answers lean on it heavily. Those two moves cost little and move first. The deeper work — clusters, interviews, technical cleanup — is slower and more durable.",
  },
  {
    question: "How do you measure AEO?",
    answer:
      "By which questions you appear in, how often, and what it moves downstream. We track the question set your buyers use, note where your pages get cited or summarized, and watch impressions on queries that resolve without a click. Then we tie it to leads and booked jobs where your CRM supports it. You will not see Domain Authority in the report.",
  },
  {
    question: "Do you do AEO for a specific trade — roofing, HVAC, electrical, or plumbing?",
    answer:
      "Yes. Roofing, HVAC, electrical and plumbing run on the same method with different question sets — roofing skews to cost and storm damage, HVAC to noise and failure symptoms, electrical to safety and code, plumbing to whether a problem can wait. We also work with flooring, inspection, restoration and remodeling companies. The research tells us how your buyers ask.",
  },
];

const RELATED = [
  {
    label: "Discipline",
    href: "/seo",
    title: "Home Service SEO",
    body: "The broader organic discipline AEO sits inside: keyword strategy, service pages, content depth, technical health.",
  },
  {
    label: "Local",
    href: "/local-seo-pro",
    title: "Local SEO Pro",
    body: "Business Profile management, citation cleanup and a ranking heatmap: the local signals behind local AI answers.",
  },
  {
    label: "Assistants",
    href: "/geo",
    title: "Generative Engine Optimization",
    body: "The assistants outside Google — ChatGPT, Perplexity, Claude — and what can honestly be measured there.",
  },
  {
    label: "Guide",
    href: "/blog/ai-optimization-aeo-home-service-businesses-2025",
    title: "AEO for Home Service Businesses",
    body: "The full version, with the platform-by-platform detail.",
  },
];

export default function AeoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "AEO", url: PAGE_URL },
        ]}
      />
      {/* No price field — method page. */}
      <ServiceSchema
        name="Answer Engine Optimization"
        description="Answer engine optimization for home service businesses: earning citation inside Google's AI Overviews, AI Mode, featured snippets and People Also Ask through first-hand content, depth, E-E-A-T and technical health. Google answer surfaces only; generative assistants are scoped separately."
        url={PAGE_URL}
        serviceType="Answer Engine Optimization"
        audienceType="Home service businesses"
      />

      <Hero
        eyebrow="Services"
        heading="Answer Engine Optimization"
        subheading="Showing up inside Google's AI Overviews, AI Mode and featured snippets comes from the same work that earns a ranking — done well enough that Google's answer layer quotes you."
        ctaText="Book a call"
        ctaUrl="/contact"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/backgrounds/growth-system-bg.png"
        imagePosition="72% 62%"
        size="compact"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal animation="stagger">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm"
                >
                  <h2 className="font-black text-lg text-asp-black">{p.label}</h2>
                  <p className="mt-2 text-base leading-relaxed text-black/70">{p.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Value prop */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue">
                Answer engine optimization
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight text-asp-black">
                What answer engine optimization covers
              </h2>
              <p className="mt-5 text-lg text-black/70 leading-relaxed">
                AEO is the work of being the source Google&rsquo;s answer layer quotes: AI
                Overviews, AI Mode, featured snippets and People Also Ask. It runs on Google&rsquo;s
                own surfaces. The levers are the ones that already move rankings, held to a higher
                standard, because an answer engine has to trust a page enough to summarize it out
                loud.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
                >
                  Book a call
                </Link>
                <Link
                  href="/seo"
                  className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
                >
                  See how SEO fits
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

      {/* Trade grid */}
      <section className="py-14 md:py-16 bg-asp-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue-light">
                Every trade, every home service
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight">
                AEO for roofing, HVAC, plumbing, electrical and every other home service trade
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70 leading-relaxed">
                The questions change by trade. A homeowner asks what a roof replacement runs, what
                noise means the furnace is dying, whether a slab leak can wait, or how often a house
                really needs treating. One method, different question sets.
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

          <ScrollReveal>
            <p className="mx-auto mt-8 max-w-3xl text-center text-base text-white/60 leading-relaxed">
              Not on the list? We work with specialty contractors and home service
              businesses of every kind. The method is the same — the research is what tells
              us how your buyers search.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ExpandableDetails heading="More details about our AEO services">
        <h3 className="font-black text-2xl text-asp-black">What gets a page cited in an AI Overview</h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          Google&rsquo;s AI features assemble answers from pages that are already indexed, already
          useful, and already trusted. That means there is no shortcut: a page that earns a citation
          is a page that would have earned the ranking anyway. Our work runs off one internal
          standard, the ASP SEO &amp; AEO Content Guidelines v2.1, grounded in Google&rsquo;s
          published guidance for its AI features.
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
          We do not publish an llms.txt file as an AEO tactic, and we do not sell schema as a way
          into AI answers. Google&rsquo;s own guidance says there are no new machine-readable files,
          markup or Markdown you need to appear in generative AI search, and no special schema that
          makes an engine cite you. Schema goes on the page for rich-result eligibility, which is a
          different job. The long version is in our{" "}
          <Link
            href="/blog/ai-optimization-aeo-home-service-businesses-2025"
            className="text-asp-blue underline underline-offset-4"
          >
            guide to AI optimization and answer engine optimization
          </Link>
          .
        </p>

        <hr className="my-10 border-black/10" />

        <h3 className="font-black text-2xl text-asp-black">How an AEO engagement runs</h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          There is no single starting point. A site with forty thin service pages needs different
          work than a rebuild that launched in March. What stays consistent is the order of
          operations.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {WORK.map((w) => (
            <div
              key={w.label}
              className="rounded-[var(--radius-asp-lg)] border border-gray-200 bg-white p-5 shadow-asp-sm"
            >
              <p className="font-black text-asp-black">{w.label}</p>
              <p className="mt-1 text-base leading-relaxed text-black/70">
                {w.label === "Clusters built on a schedule" ? (
                  <>
                    The{" "}
                    <Link
                      href="/content-creation"
                      className="text-asp-blue underline underline-offset-4"
                    >
                      Content Creation Package
                    </Link>{" "}
                    keeps social and Business Profile posting consistent; the deeper article work is
                    scoped separately against your highest-value services.
                  </>
                ) : (
                  w.body
                )}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-7 text-base leading-relaxed text-black/70">
          AEO is not sold here as a separate retainer with its own rate card, because there is no
          separate AI layer to sell. Inside{" "}
          <Link href="/growth-system" className="text-asp-blue underline underline-offset-4">
            the Growth System
          </Link>
          , the AEO component covers Google&rsquo;s answer surfaces and reports alongside the
          organic, local and content work in one monthly review. Generative assistants like ChatGPT
          and Perplexity are a different discipline with a different mechanism, covered on our{" "}
          <Link href="/geo" className="text-asp-blue underline underline-offset-4">
            GEO page
          </Link>
          . Current options are on the{" "}
          <Link href="/pricing" className="text-asp-blue underline underline-offset-4">
            pricing page
          </Link>
          .
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

      {/* Proof — honest about the gap */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              AEO results from real client work
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
                        <dt className="text-xs uppercase tracking-wide text-black/50">{s.label}</dt>
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
              AEO runs on the same levers as the organic work above, which is why these results
              are the relevant evidence: the pages that earn rankings are the pages Google&rsquo;s
              answer layer quotes. Google does not report AI Overview citations to site owners, so
              nobody can hand you a citation count — ours or anyone else&rsquo;s. Across
              the whole book of business — all services — 4&ndash;5&times; average ROAS, +25% average
              yearly attributed revenue, and 3&times; average lead volume in the first six months. A
              result somebody else got is not a forecast of yours. More detail on the{" "}
              <Link href="/case-studies" className="text-asp-blue underline underline-offset-4">
                full case studies page
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialAnchor
        quote="The team at ASP knows the business very well and continues to come up with ideas that have my small business thriving."
        attribution="Mike"
        variant="dark"
        size="sm"
        widthClassName="max-w-6xl"
      />

      {/* How to start */}
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
                <div
                  key={s.n}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm"
                >
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

      {/* Closing CTA */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Wondering whether AI answers are quoting you or your competitor?
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Start with the 90-second Growth Diagnostic, or book a call and we will run your
              buyers&rsquo; real questions and show you who Google is citing today. Either way you
              leave with findings, not a pitch.
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
              Every account, asset, and report built in your name · No exit fees · No llms.txt
              tricks, no schema sold as an AI lever, no Domain Authority in the report.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
