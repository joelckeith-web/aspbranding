import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ExpandableDetails } from "@/components/sections/ExpandableDetails";
import { SectionBreak } from "@/components/sections/SectionBreak";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, ServiceSchema } from "@/components/schema/StructuredData";

const PAGE_TITLE = "Generative Engine Optimization (GEO) for Home Service Businesses";
const PAGE_DESCRIPTION =
  "Generative Engine Optimization (GEO) for home service businesses — also called AI search optimization or AI visibility. What ASP can and can't measure yet.";
const PAGE_URL = "https://www.aspbranding.com/geo";

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
};

const PILLARS = [
  {
    label: "Built on work, not a product",
    body: "GEO runs on the Business Profile, review and listing data we already maintain.",
  },
  {
    label: "Nothing new to buy",
    body: "There is no GEO package, tier or line item here, and there won't be one invented to sell this.",
  },
  {
    label: "Google's answers live elsewhere",
    body: "AI Overviews and AI Mode belong to answer engine optimization. This page is about chat assistants.",
  },
  {
    label: "No guarantees, said plainly",
    body: "Nobody can promise you a mention inside ChatGPT, and we don't.",
  },
];

const SIGNALS = [
  {
    label: "A Business Profile that is complete and current",
    body: "Categories, services, hours, service area and photos, kept accurate rather than filled in once. This is the most structured public description of your business that exists.",
  },
  {
    label: "Reviews, in volume and recent",
    body: "An assistant summarising who is good at this is reading the same review record a homeowner would. Old reviews describe a business that may no longer exist.",
  },
  {
    label: "NAP consistency",
    body: "One name, one address, one phone number, matching everywhere. Two versions of your phone number is two versions of your business.",
  },
  {
    label: "Citation breadth",
    body: "Being present and correct across the directories and data aggregators that feed everything downstream. Local SEO Pro checks 60+ of them on a 90-day cadence.",
  },
  {
    label: "A site that answers the actual question",
    body: "Pages that explain what you do, where you do it, what it costs to think about and what goes wrong. Thin pages give an assistant nothing to quote.",
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
    title: "A conversation about what's already true",
    body: "A 30-minute call, then we look at your Business Profile, your review record and your listings and tell you where the public version of your business is wrong or thin. You get the findings whether or not you hire us.",
  },
  {
    n: "03",
    title: "Fix the record, then keep it fixed",
    body: "The corrections happen once; the maintenance is the part that matters. You see what changed and what it moved in search, with no claims attached about what an assistant did with it.",
  },
];

const FAQS = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "GEO is the work of making sure AI assistants describe your business accurately when someone asks them who to call. You may also hear it called AI search optimization or AI visibility — same idea, different label. The assistants read public information: your Business Profile, your reviews, your listings, your website. GEO is keeping that record correct and consistent.",
  },
  {
    question: "GEO vs. SEO — how are they different?",
    answer:
      "SEO is about ranking in a list of results. GEO is about being described correctly inside an answer where there is no list. The underlying work overlaps heavily — accurate listings, real reviews, a site that answers the question — but the measurement is different. SEO gives you positions and impressions; GEO gives you, at best, a spot-check.",
  },
  {
    question: "GEO vs. AEO — how are they different?",
    answer:
      "We draw the line by platform. Answer engine optimization covers Google's own answer surfaces: AI Overviews, AI Mode, featured snippets, People Also Ask. GEO covers the standalone chat assistants — ChatGPT, Perplexity, Claude, Gemini used as an assistant. The market uses both terms loosely and often interchangeably. We keep them separate so the two pages never tell you two different things.",
  },
  {
    question: "How does ChatGPT decide which local business to recommend?",
    answer:
      "Nobody outside those companies can answer that precisely, and anyone who tells you they can is guessing with confidence. What is visible is that assistants draw on public information, and businesses that are well described in public — accurate profile, real reviews, consistent listings, a site that explains the work — are easier to name than businesses that aren't. That's the basis we work from.",
  },
  {
    question: "Does my Google Business Profile affect what ChatGPT or Perplexity says about my business?",
    answer:
      "Your Business Profile is the most structured public description of your business that exists, so we treat it as the foundation. We can't show you a controlled test proving a profile edit changed an assistant's answer, and we won't claim one. What we can say is that a wrong phone number or a dead service area is wrong everywhere it gets read, by people and machines alike.",
  },
  {
    question: "Do you guarantee we'll get cited by ChatGPT or Perplexity?",
    answer:
      "No. We don't guarantee it, we don't sell a refund tied to it, and we'd be sceptical of anyone who does. These systems change without notice, don't publish their criteria, and give different answers to different people. We'll do the work that makes your business easy to describe accurately and tell you honestly what we can and can't see.",
  },
  {
    question: "Is this the same as running ads inside ChatGPT?",
    answer:
      "No. GEO is earned, not paid — there is no placement to buy here and no budget that moves it. Paid placement inside ChatGPT is a separate, advertising-side service with its own page, its own costs and its own rules. If you're weighing the two, say so on the call and we'll lay out the difference before you spend anything.",
  },
  {
    question: "What's the difference between GEO and “LLM SEO”?",
    answer:
      "They describe the same work. LLM SEO, AI SEO, AI search optimization and AI visibility are all names people use for getting described well by AI systems. We use Generative Engine Optimization because it's the clearest of the set and the one most people search. Don't let a vendor charge you twice by calling two of them two services.",
  },
  {
    question: "Do you have case studies for GEO specifically?",
    answer:
      "No — none. We have SEO and paid case studies on the case studies page, and none of them are AI-visibility results, so we don't present them as such. Building a repeatable measurement of what assistants say about home service businesses is work we want to do. If we get there, we'll publish it, including the parts that don't flatter us.",
  },
  {
    question: "What does GEO cost?",
    answer:
      "There's no GEO price here, because there's no GEO product here. The work sits inside what Local SEO Pro and the content side already deliver, so for most clients the honest answer is that it isn't an extra line. If none of that is in place yet, the scope of the cleanup sets the number, and you see it before you commit. Current options are on the pricing page.",
  },
];

const RELATED = [
  {
    label: "Discipline",
    href: "/seo",
    title: "Home Service SEO",
    body: "The broader organic discipline this sits inside: keyword strategy, service pages, content depth, technical health.",
  },
  {
    label: "Local",
    href: "/local-seo-pro",
    title: "Local SEO Pro",
    body: "Business Profile management, citation cleanup and a ranking heatmap — the entity work GEO runs on.",
  },
  {
    label: "Paid",
    href: "/chatgpt-ads-management",
    title: "ChatGPT Ads Management",
    body: "The paid side of AI placement, which is a different thing entirely from earned GEO.",
  },
];

export default function GeoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "GEO", url: PAGE_URL },
        ]}
      />
      {/* No price field — method page, and GEO is explicitly not a product here. */}
      <ServiceSchema
        name="Generative Engine Optimization"
        description="Generative engine optimization for home service businesses: keeping the public record an AI assistant reads — Business Profile, reviews, listings and site content — accurate and consistent. Chat assistants only; Google's answer surfaces are scoped separately."
        url={PAGE_URL}
        serviceType="Generative Engine Optimization"
        audienceType="Home service businesses"
      />

      <Hero
        eyebrow="Services"
        heading="Generative Engine Optimization"
        subheading="Also called AI search optimization or AI visibility — the work of being described accurately when a homeowner asks ChatGPT, Perplexity or Claude who to call."
        ctaText="Talk to us about GEO"
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
                AI search optimization
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight text-asp-black">
                What Generative Engine Optimization means for a home service business
              </h2>
              <p className="mt-5 text-lg text-black/70 leading-relaxed">
                Generative Engine Optimization is the work of being found, described correctly and
                recommended when someone asks an AI assistant who to call. The assistants read much
                of the same public record your customers do: your Business Profile, your reviews,
                your listings, your website. GEO is the discipline of keeping that record accurate
                and consistent.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
                >
                  Talk to us about GEO
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

      {/* Trade grid */}
      <section className="py-14 md:py-16 bg-asp-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue-light">
                Built for the trades
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight">
                How AI assistants answer for roofing, HVAC, plumbing and electrical
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70 leading-relaxed">
                The question changes by trade, and so does the answer an assistant gives. A homeowner
                asking about a burst pipe wants someone tonight; someone planning a roof replacement
                asks a longer, more comparative question. The public record an assistant reads has to
                hold up for both.
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

      <ExpandableDetails heading="More details about our GEO services">
        <h3 className="font-black text-2xl text-asp-black">
          What earns a mention inside an AI assistant
        </h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          Assistants build answers from public information, so the levers are the ones that make a
          business legible in public. None of them are tricks, and none of them are new. They are
          the same signals that make a business easy for a person to verify, which is the point.
        </p>

        <ul className="mt-7 space-y-5">
          {SIGNALS.map((l) => (
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
          That list is deliberately unremarkable. If someone is selling you an AI-specific file, a
          special markup, or a phrase to bury in your page for the machines, they are selling
          something we don&rsquo;t. The same standard is covered in our{" "}
          <Link
            href="/blog/ai-optimization-aeo-home-service-businesses-2025"
            className="text-asp-blue underline underline-offset-4"
          >
            guide to AI optimization and answer engine optimization
          </Link>
          .
        </p>

        <hr className="my-10 border-black/10" />

        <h3 className="font-black text-2xl text-asp-black">
          How this work runs, and what we won&rsquo;t sell you
        </h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          GEO is not a separate engagement here. The work above is what{" "}
          <Link href="/local-seo-pro" className="text-asp-blue underline underline-offset-4">
            Local SEO Pro
          </Link>{" "}
          already does every month and what{" "}
          <Link href="/content-creation" className="text-asp-blue underline underline-offset-4">
            the content side
          </Link>{" "}
          already feeds. Calling it GEO names a reason to do it well, not a new invoice line. If you
          are already a client, the honest answer is that you are already paying for most of this.
        </p>
        <p className="mt-4 text-black/70 leading-relaxed">
          Google&rsquo;s own answer surfaces are a different discipline, covered on our{" "}
          <Link href="/aeo" className="text-asp-blue underline underline-offset-4">
            AEO page
          </Link>
          . What we won&rsquo;t do: promise you a citation in ChatGPT or any other assistant, sell a
          branded &ldquo;AI foundation&rdquo; build, quote you a date by which an assistant will name
          you, or report a number we can&rsquo;t show you the source of. A guarantee tied to a system
          nobody controls is not a guarantee. The broader organic discipline this sits inside is on
          our{" "}
          <Link href="/seo" className="text-asp-blue underline underline-offset-4">
            SEO page
          </Link>
          , and the way the pieces report together is{" "}
          <Link href="/growth-system" className="text-asp-blue underline underline-offset-4">
            the Growth System
          </Link>
          .
        </p>
        <p className="mt-4 text-black/70 leading-relaxed">
          What we need from you is the same as any other engagement: access to your own accounts,
          time to answer questions about the work you do, and an honest answer about which jobs you
          want more of. You own every account, asset and report. There is no exit fee.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
          >
            Talk to us about GEO
          </Link>
        </div>
      </ExpandableDetails>

      {/* The honest state of GEO proof — deliberately prose, not a stats grid. */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              The honest state of GEO proof
            </h2>
            <p className="mt-5 max-w-4xl text-lg text-black/70 leading-relaxed">
              ASP has no GEO case study. Not a thin one, not an anonymized one — none. We have SEO
              and paid results we&rsquo;re proud of and publish on the{" "}
              <Link href="/case-studies" className="text-asp-blue underline underline-offset-4">
                case studies page
              </Link>
              , and it would be easy to relabel one of them as an AI-visibility win. That would be a
              lie, so here is what we know instead.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[var(--radius-asp-2xl)] border border-gray-200 bg-white p-7 shadow-asp-md">
                <h3 className="font-black text-lg text-asp-black">What we can measure today</h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">
                  Your Business Profile data and its insights. Your review count and how recent the
                  reviews are. Your citation accuracy across 60+ directories. Your organic rankings
                  and impressions in Search Console.
                </p>
              </div>
              <div className="rounded-[var(--radius-asp-2xl)] border border-gray-200 bg-white p-7 shadow-asp-md">
                <h3 className="font-black text-lg text-asp-black">What we cannot measure today</h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">
                  How often an assistant names you, how often it names a competitor instead, or what
                  it says about you to a homeowner two towns over. No assistant publishes anything
                  resembling an impressions report for a local business today. Answers also
                  aren&rsquo;t stable the way a ranking is — the same question can return different
                  businesses to different people on different days.
                </p>
              </div>
              <div className="rounded-[var(--radius-asp-2xl)] border border-gray-200 bg-white p-7 shadow-asp-md">
                <h3 className="font-black text-lg text-asp-black">
                  What would count as real evidence
                </h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">
                  A repeatable spot-check: a fixed set of homeowner-style questions, run across
                  ChatGPT, Perplexity, Gemini and Google&rsquo;s AI answers, in a fixed set of
                  metros, on a schedule, with the results written down whether or not they flatter
                  us. That dataset does not exist yet, and until it does we are not going to cite it.
                </p>
              </div>
              <div className="rounded-[var(--radius-asp-2xl)] border border-gray-200 bg-white p-7 shadow-asp-md">
                <h3 className="font-black text-lg text-asp-black">
                  What to expect from us in the meantime
                </h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">
                  The entity work above is worth doing regardless, because it is the same work that
                  wins local search and the same work that makes a business easy to verify. What we
                  won&rsquo;t tell you is that it produces an AI mention on a timeline. If a quarter
                  passes with nothing we can show you, we would rather say that out loud.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
                Talk to us about GEO
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

      {/* Closing CTA — softer than the other service pages, per the brief. */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Want to know what an AI assistant says about your business?
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              We&rsquo;ll look at the public record your business leaves behind — Business Profile,
              reviews, listings, site — and tell you where it&rsquo;s wrong, thin or contradicting
              itself. No pitch attached, and no promises about what a chat assistant will do with any
              of it. Tier options are on the{" "}
              <Link href="/pricing" className="text-asp-blue underline underline-offset-4">
                pricing page
              </Link>{" "}
              if you&rsquo;d rather start there.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Talk to us about GEO
              </Link>
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                Run the Growth Diagnostic
              </Link>
            </div>
            <p className="mt-8 text-sm text-black/50">
              Every account, asset and report built in your name · No exit fees · No guarantees about
              what any AI system will say.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
