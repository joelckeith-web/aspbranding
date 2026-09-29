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

const PAGE_TITLE = "PPC Management Services for Home Service Businesses";
const PAGE_DESCRIPTION =
  "PPC management services for home service businesses: Google Ads, Local Services Ads, and Meta, run against booked jobs. The conversion action stays put.";
const PAGE_URL = "https://www.aspbranding.com/ppc";

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
    label: "Google Search Ads",
    body: "High-intent searches, tight match types, and a negative keyword list that keeps growing.",
  },
  {
    label: "Local Services Ads",
    body: "Pay per lead instead of per click, plus the review and response signals LSA rank depends on.",
  },
  {
    label: "Meta retargeting",
    body: "Stays in front of the homeowner who read your service page and didn't call.",
  },
  {
    label: "Booked-job reporting",
    body: "Lead source wired through to the job, where your CRM supports it.",
  },
];

const AUDIT = [
  {
    label: "Account settings",
    body: "Search partners, display on search campaigns, location targeting, match type and bid strategy. Our defaults: search partners off, display off on search, location set to Presence, phrase match, and Max Conversions bidding until the account has the volume to support a target CPA. Branded search always sits in its own campaign.",
  },
  {
    label: "Performance against benchmarks",
    body: "We hold accounts to a floor and a target instead of a vague improving story: search impression share 30% minimum and 60% target, conversion rate 10% minimum and 20% target, click-through rate 4% minimum and 8% target. Anything under the floor is what we work on first.",
  },
  {
    label: "Search terms",
    body: "The report of what people typed to trigger your ads. It's the cheapest win in most accounts and the one most often skipped — an account should build a hundred-plus negatives inside its first ninety days.",
  },
  {
    label: "Geography",
    body: "Where the spend went, against where the jobs came from. Service-area businesses routinely pay city rates for leads two counties outside the drive time they'd accept.",
  },
  {
    label: "Conversion tracking",
    body: "Whether the account counts the thing you sell. Duplicate conversions, page views counted as leads, and fifteen-second calls counted as jobs all make a bad month look fine.",
  },
];

const WORK = [
  {
    label: "Audit before spend changes",
    body: "We read the account first: settings, performance, search terms, geography, tracking. You get the findings and the priority order before any budget moves.",
  },
  {
    label: "Tracking before bidding",
    body: "If the account optimizes toward the wrong event, every bid decision after that is built on it. Tracking gets fixed first, including lead source back to the job where your CRM supports it.",
  },
  {
    label: "Local Services Ads as its own channel",
    body: "LSA is pay-per-lead, not pay-per-click, and its rank depends on review volume, response time and dispute rate. It gets managed against those signals, not against a keyword list.",
  },
  {
    label: "Search structure you can read",
    body: "One ad group per service or service area, phrase match, and a negative list that grows every week. Tight structure is what makes it possible to tell which service is paying.",
  },
  {
    label: "Meta kept in its lane",
    body: "Retargeting the people who read a service page and didn't call, plus service-area recall. Cold Meta traffic asking for a service call rarely works for the trades.",
  },
  {
    label: "A monthly review where you learn the account",
    body: "What was spent, what it booked, what changed and why. We build it, then show you how to run it.",
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
    title: "Account audit",
    body: "A 30-minute call, then we go through the account: settings, performance against the benchmarks, search terms, geography, and what the conversion action is counting. You get the findings whether or not you hire us.",
  },
  {
    n: "03",
    title: "Your first ninety days",
    body: "Tracking gets fixed, the obvious waste gets cut, and the structure gets rebuilt where it's blocking optimization. You see what changed and what it moved.",
  },
];

const PROOF = [
  {
    industry: "HVAC services",
    body: "A regional operator had been flat against a $3M revenue ceiling for two years and needed steadier lead flow in a crowded market. On the paid side we ran Google Ads with tight geography and intent targeting, and launched and managed Local Services Ads for direct lead capture, alongside Business Profile work and social.",
    stats: [
      { label: "Google Ads conversions", value: "161+" },
      { label: "Cost per LSA lead", value: "$29.27" },
      { label: "Key events tracked", value: "1,580" },
    ],
    note: "Twelve-month program. Paid and organic ran together, so the revenue result isn't a paid-only attribution claim.",
  },
  {
    industry: "Home inspection",
    body: "A multi-location inspection company needed to scale lead generation across service areas. Ad spend had flattened and the conversion rate was stuck in single digits. Facebook campaigns were rebuilt from the creative up, Local Services Ads were scaled across every service area, and YouTube, email and local SEO ran alongside.",
    stats: [
      { label: "Conversion rate", value: "7% → 18%" },
      { label: "Monthly ad spend saved", value: "$10K" },
      { label: "LSA leads generated", value: "418" },
    ],
    note: "Twelve-month program. Lead growth +20%. Paid sat alongside video, email and organic work.",
  },
];

const FAQS = [
  {
    question: "What is PPC for a home service business?",
    answer:
      "Paid advertising where you're charged per click, or per lead on Local Services Ads. Three channels carry most home service spend: Google Search Ads for people typing a problem right now, Local Services Ads for the pay-per-lead slot above the map, and Meta for retargeting and service-area recall. Measured properly, all three are judged on cost per booked job.",
  },
  {
    question: "How much should I budget for PPC?",
    answer:
      "Work back from what a booked job is worth to you, not from a flat monthly figure. If your average ticket is a few hundred dollars, your allowable cost per job is small; at several thousand, you can spend far more and still come out ahead. Your ad spend is always yours, paid directly to Google or Meta, and separate from what you pay us.",
  },
  {
    question: "Local Services Ads vs. Google Search Ads — which comes first?",
    answer:
      "Local Services Ads first, if you qualify and your reviews support it. You pay per lead, the placement sits above the map pack, and cost per booked job is usually the lowest of any paid channel. Search Ads still matter, because LSA only covers certain categories and inventory is capped per metro. Most operators running paid seriously run both.",
  },
  {
    question: "Does Performance Max work for home service businesses?",
    answer:
      "Sometimes, and it needs watching. Performance Max spends across Search, Display, YouTube and Gmail with limited visibility into where the money went, which is a poor fit for an account still learning which services pay. We'd rather prove Search and Local Services Ads first, then test Performance Max with clean conversion data behind it and branded search excluded.",
  },
  {
    question: "Will you ever change my conversion action to get out of the learning phase faster?",
    answer:
      "No. The conversion action is set to the lead you sell, and it stays there even if the account sits in learning longer. Swapping to a softer event — a page view, a click on a phone number — makes the dashboard look better and changes nothing on your schedule. The levers we use instead are geography, budget weighting, ad count and creative.",
  },
  {
    question: "How is ASP's PPC audit different from a typical agency's?",
    answer:
      "It's the same checklist every time, and you see it. We work through account settings, performance against fixed benchmarks, search terms, geography and conversion tracking, then hand you the findings in priority order — whether or not you hire us. Most audits we're asked to review are a screenshot of the last thirty days with a pitch attached.",
  },
  {
    question: "Do you manage ChatGPT Ads too?",
    answer:
      "Yes, as a separate service. ChatGPT Ads are a newer paid placement with their own format limits, eligibility rules and early auction pricing, so they're managed on their own terms rather than folded into a Google Ads retainer. Local services and trades are eligible. The details are on our ChatGPT Ads Management page.",
  },
  {
    question: "SEO vs. PPC — which should I start with?",
    answer:
      "It depends on runway. Paid puts you in front of buyers this week and stops when the budget stops. Organic takes months to move and keeps returning after it does. If you need jobs booked this month, start paid and build organic underneath it. Most established operators run both, and the terms that convert in the ad account tell you which organic pages to build next.",
  },
  {
    question: "Do you run PPC for a specific trade — roofing, HVAC, or plumbing?",
    answer:
      "Yes. Roofing, HVAC and plumbing run on the same method with different demand curves: roofing spikes with storms, HVAC follows heat and cold, and plumbing splits between emergencies and planned work like repipes. We also run paid for restoration, home inspection, flooring and remodeling. If your trade isn't listed, the audit tells us how your buyers search.",
  },
  {
    question: "How is PPC management priced?",
    answer:
      "There's no rate card here. What management costs depends on how many channels you're running, how much of the account structure needs rebuilding, and how deep the reporting goes — and you see that number before you commit to anything. Your ad spend is separate, paid directly to the platforms, and not part of what you pay us. Current options are on the pricing page.",
  },
];

const RELATED = [
  {
    label: "Organic",
    href: "/seo",
    title: "Home Service SEO",
    body: "The organic side: keyword strategy, service pages, content depth and technical health.",
  },
  {
    label: "Local",
    href: "/local-seo-pro",
    title: "Local SEO Pro",
    body: "Business Profile, reviews and citations: the signals Local Services Ads rank on.",
  },
  {
    label: "Guide",
    href: "/blog/ppc-advertising-for-home-service-businesses",
    title: "Paid Media for Home Service Businesses",
    body: "The long version: channel mix, budgets, and attribution back to booked revenue.",
  },
];

export default function PpcPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "PPC", url: PAGE_URL },
        ]}
      />
      {/* No price field — method page. */}
      <ServiceSchema
        name="PPC Management Services"
        description="Google Ads, Local Services Ads, and Meta management for home service businesses: account audit, conversion tracking, channel mix, and reporting against booked jobs."
        url={PAGE_URL}
        serviceType="Pay Per Click Advertising"
        audienceType="Home service businesses"
      />

      <Hero
        eyebrow="Services"
        heading="PPC Management Services"
        subheading="Google Ads, Local Services Ads, and Meta retargeting, built around the searches that end in booked work — and measured against the jobs, not the clicks."
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
                Google Ads &amp; Local Services Ads
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight text-asp-black">
                What PPC management covers for home service businesses
              </h2>
              <p className="mt-5 text-lg text-black/70 leading-relaxed">
                PPC management is the work of putting your ads in front of people ready to book, then
                proving which of those clicks turned into jobs. For most home service operators that
                means Google Search Ads, Local Services Ads, and a small Meta retargeting budget
                running together, with tracking wired back to the CRM. We manage all three against
                booked work.
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
                  See the SEO side
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[var(--radius-asp-2xl)] shadow-asp-lg">
                <Image
                  src="/images/portfolio/portfolio-mockup.avif"
                  alt="A home service paid search account reviewed by ASP"
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
                PPC for roofing, HVAC, plumbing, electrical and every other home service trade
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70 leading-relaxed">
                One method, different demand curves. Roofing spikes with storms, HVAC and
                electrical follow heat, cold and emergencies, plumbing splits between
                instant-decision emergencies and planned work like repipes, and recurring services
                like cleaning and lawn care buy on a steadier curve. The budget and the ad schedule
                follow whichever curve is yours.
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

      <ExpandableDetails heading="More details about our PPC services">
        <h3 className="font-black text-2xl text-asp-black">What a Google Ads audit looks at</h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          Most accounts we take over aren&rsquo;t broken in an interesting way. The same handful of
          settings are wrong, the search terms have never been read, and the conversion tracking
          counts something nobody sells. We work from one standing audit method so nothing gets
          skipped, and you see the findings before we change a setting.
        </p>

        <ul className="mt-7 space-y-5">
          {AUDIT.map((l) => (
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
          One thing stays fixed. We don&rsquo;t change what counts as a conversion to get an account
          out of the learning phase faster, because the number that gets easier to hit is rarely the
          number that pays you. The levers we&rsquo;ll use are geography, budget weighting, the
          number of ads and ad sets, and creative. If that means an account learns slowly, it learns
          slowly on real leads. The long version is in our{" "}
          <Link
            href="/blog/ppc-advertising-for-home-service-businesses"
            className="text-asp-blue underline underline-offset-4"
          >
            guide to paid media for home service businesses
          </Link>
          .
        </p>

        <hr className="my-10 border-black/10" />

        <h3 className="font-black text-2xl text-asp-black">How a PPC engagement runs</h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          There&rsquo;s no single starting point. An account with six years of history and a tangle
          of paused campaigns needs different work than a clean build for a company that has never
          run ads. The order of operations stays the same.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {WORK.map((w) => (
            <div
              key={w.label}
              className="rounded-[var(--radius-asp-lg)] border border-gray-200 bg-white p-5 shadow-asp-sm"
            >
              <p className="font-black text-asp-black">{w.label}</p>
              <p className="mt-1 text-base leading-relaxed text-black/70">{w.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-7 text-base leading-relaxed text-black/70">
          What we need from you is access to your own accounts, a straight answer on which services
          you want more of, and the review and response discipline Local Services Ads rank on — the
          same work{" "}
          <Link href="/local-seo-pro" className="text-asp-blue underline underline-offset-4">
            Local SEO Pro
          </Link>{" "}
          does on the organic side. You own the ad accounts, the data and the reports from day one,
          and there&rsquo;s no exit fee. Paid media isn&rsquo;t run in isolation here: it sits inside{" "}
          <Link href="/growth-system" className="text-asp-blue underline underline-offset-4">
            the Growth System
          </Link>{" "}
          alongside the organic, local and{" "}
          <Link href="/content-creation" className="text-asp-blue underline underline-offset-4">
            content
          </Link>{" "}
          work, reporting into one monthly review.
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
              PPC results from real client work
            </h2>
            <p className="mt-4 font-black text-asp-blue">
              161+ Google Ads conversions · $29.27 per Local Services Ads lead · conversion rate 7%
              → 18%
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
              Across the whole book of business — all services, not paid alone — 4&ndash;5&times;
              average ROAS, +25% average yearly attributed revenue, and 3&times; average lead volume
              in the first six months. Neither case study above is a clean paid-only attribution
              claim: both programs ran organic and local work at the same time. A result somebody
              else got is not a forecast of yours. More detail on the{" "}
              <Link href="/case-studies" className="text-asp-blue underline underline-offset-4">
                full case studies page
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialAnchor
        quote="Not only do we rank better than ever before, our efficiency in budget, ad spend, and processes has been dramatically changed."
        attribution="David"
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
              Not sure where your ad budget is going?
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Start with the 90-second Growth Diagnostic, or book a call and we&rsquo;ll read your
              account with you — settings, search terms, geography, and what the conversion action is
              counting. Either way you leave with findings, not a pitch.
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
              Every ad account, asset, and report built in your name · No exit fees · We report
              booked jobs and cost per job — not impressions.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
