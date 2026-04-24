import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "StormFront | ASP",
  description:
    "A proprietary content system built for storm-chasing and weather-driven home service operators. Watches your service area and fires targeted content when qualifying weather events hit.",
};

const INCLUDES = [
  {
    title: "Weather-trigger watchlist",
    body: "Storm events, extreme temperatures, seasonal indicators, and drought/flood cycles monitored continuously across your service area. When a trigger fires, the system activates.",
  },
  {
    title: "Pre-built content library",
    body: "A library of service-relevant, location-aware posts written in your brand voice. When a trigger fires, the system pulls the right post, localizes it, and queues it for publish.",
  },
  {
    title: "Automated publishing",
    body: "Direct publish to your blog, GBP posts, and social profiles. Zero human intervention required on a per-storm basis — the system ships without waiting on you.",
  },
  {
    title: "Priority indexing submission",
    body: "Fresh posts submitted to Google for priority indexing the moment they publish. Every new piece is pushed into the search index as quickly as the platform allows.",
  },
  {
    title: "Lead capture integration",
    body: "Every StormFront post includes a context-appropriate CTA — roof inspection after hail, AC check during a heat wave — routing form submissions straight into Housecall Pro with source attribution.",
  },
  {
    title: "Monthly trigger report",
    body: "What fired, what published, what ranked, what converted. Tied to attributed revenue in HCP — not pageviews.",
  },
];

const AI_LAYER = [
  {
    title: "Trigger classification",
    body: "AI parses National Weather Service feeds and other data sources to classify storm severity and recommend the right content playbook in real time &mdash; so the right piece fires at the right moment.",
  },
  {
    title: "Competitor + market signal analysis",
    body: "AI watches how your local competitors respond to the same weather events and what category-wide search behavior is shifting &mdash; surfacing the market dynamics that inform every future recommendation.",
  },
  {
    title: "Past-performance intelligence",
    body: "AI analyzes which past StormFront posts actually drove engagement, calls, and booked revenue &mdash; feeding those insights back into the template library so the next fire is sharper than the last.",
  },
  {
    title: "Content freshness audits",
    body: "AI watches for language that is aging poorly &mdash; stale statistics, outdated product references, old year mentions &mdash; and flags posts for human refresh before they turn into liabilities.",
  },
];

const FITS = [
  "Roofing — storm-driven demand for inspections, repairs, replacement",
  "HVAC — extreme heat, cold snaps, humidity swings driving service calls",
  "Plumbing — freeze events, flooding, heavy rain, drought restrictions",
  "Restoration — any water or storm damage event",
  "Pressure washing — seasonal ramps after pollen, storm debris",
  "Landscaping — frost warnings, drought ordinances, storm cleanup",
];

export default function StormfrontPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="StormFront · $549/mo"
        heading="A proprietary content system<br><span class='hero-text-gradient'>for weather-driven operators.</span>"
        subheading="Built for roofing, HVAC, plumbing, and restoration businesses that chase storm-driven demand. StormFront watches your service area, fires when qualifying weather events hit, and publishes targeted content timed to the spike in search."
        ctaText="Start with StormFront"
        ctaUrl="/contact?topic=stormfront"
        cta2Text="See how it fits the Growth System"
        cta2Url="/growth-system"
        bgType="image"
        imageUrl="/images/industries/roofing.png"
        imagePosition="center center"
      />

      {/* What it is */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What it is
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
                A proprietary content system that fires when the weather fires.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Home service demand is weather-driven. Storms, freezes, heat waves, and droughts create search spikes for the exact services you sell — and most operators miss the window because writing timely content is too slow.
              </p>
              <p className="text-gray-600 leading-relaxed">
                StormFront closes the gap. When a qualifying event fires in your service area, the system automatically publishes location-aware, service-relevant content to your blog, GBP, and social — timed to the moment homeowners are searching.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(159, 76, 255, 0.18), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Built for
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Storm chasers and weather-driven operators.
              </h2>
            </div>
            <ul className="space-y-3">
              {FITS.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-4 rounded-[var(--radius-asp-lg)] bg-white/[0.04] border border-asp-purple/25 p-5 lg:p-6"
                >
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-asp-purple"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/85 text-base lg:text-lg">{f}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What&apos;s included
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Six components. One autonomous system.
              </h2>
              <p className="text-gray-600 text-lg">
                Fully managed. Zero human intervention per storm. Your team doesn&apos;t get a ticket in their queue when it fires — it just ships.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {INCLUDES.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 p-6 lg:p-7 bg-white shadow-asp-sm"
                >
                  <h3 className="font-black text-lg text-asp-blue mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How AI is wired in */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Where AI plays in
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                AI as your research layer.
              </h2>
              <p className="text-white/70 text-lg">
                The content itself is written by our specialists in your brand voice. AI runs the research and analysis underneath &mdash; classification, competitor signals, historical performance &mdash; so every fire is informed by the best available data.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {AI_LAYER.map((a) => (
                <div
                  key={a.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 hover:border-asp-blue-light/60 transition-colors p-7"
                >
                  <h3 className="font-black text-lg text-white mb-2">{a.title}</h3>
                  <p className="text-white/70 leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why our team wins */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Who&apos;s running it
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
              Built by people who&apos;ve sat in the dispatch seat.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Our leadership team owns trades-based businesses. We know what the phones sound like the day after a hailstorm, what a tech&apos;s schedule looks like when a heat wave hits day three, and what a homeowner actually searches for at 11pm when the basement is flooding.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That operational knowledge goes into every StormFront template. AI localizes and distributes. Industry ownership is why it sounds right when it does.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing + Growth upsell */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(76, 201, 240, 0.14), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Pricing
              </span>
              <h2 className="font-black text-3xl md:text-4xl mb-4">
                Two ways to buy StormFront.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-[var(--radius-asp-2xl)] border border-white/15 p-8 bg-white/[0.04] flex flex-col">
                <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-2">
                  Standalone
                </div>
                <h3 className="font-black text-2xl mb-2">StormFront</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-black text-4xl">$549</span>
                  <span className="text-white/60 text-sm">/ month</span>
                </div>
                <p className="text-white/75 leading-relaxed mb-6">
                  Full weather-trigger system, managed end-to-end. Everything on this page. Quarterly review to map the path into the full Growth System.
                </p>
                <Link
                  href="/contact?topic=stormfront"
                  className="mt-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-3 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue-light hover:text-asp-black hover:border-asp-blue-light transition-colors"
                >
                  Start with StormFront
                </Link>
              </div>

              <div className="relative rounded-[var(--radius-asp-2xl)] p-[2px] bg-gradient-to-br from-asp-blue-light via-asp-purple to-asp-blue-light shadow-[0_20px_60px_-10px_rgba(76,201,240,0.3)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-asp-blue-light to-asp-purple text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    Best value
                  </span>
                </div>
                <div className="h-full rounded-[calc(var(--radius-asp-2xl)-2px)] bg-asp-surface-navy text-white p-8 flex flex-col">
                  <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-2">
                    Inside the system
                  </div>
                  <h3 className="font-black text-2xl mb-2">Foundation Package</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-black text-4xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple">
                      $2,500
                    </span>
                    <span className="text-white/60 text-sm">/ month</span>
                  </div>
                  <p className="text-white/75 leading-relaxed mb-6">
                    StormFront <strong>plus</strong> Local SEO Pro, the Content Creation Package, HCP attribution setup, and monthly performance reporting. The weather-triggered system lands harder when Local SEO and GBP are firing alongside it.
                  </p>
                  <Link
                    href="/contact?topic=foundation"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-asp-blue-light to-asp-purple text-white font-bold px-6 py-3 rounded-[var(--radius-asp-lg)] hover:opacity-90 transition-opacity"
                  >
                    Start with Foundation
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-white/50 text-sm mt-8">
              Not sure which way to go?{" "}
              <Link href="/diagnostic" className="text-asp-blue-light hover:text-white font-semibold">
                Run the Growth Diagnostic
              </Link>{" "}
              &mdash; 90 seconds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <RelatedPages
        items={[
          {
            label: "Sibling product",
            href: "/local-seo-pro",
            title: "Local SEO Pro",
            body: "Own the local map. Google Business Profile, citations, heatmap, and competitive intelligence for home service operators.",
          },
          {
            label: "Sibling product",
            href: "/content-creation",
            title: "Content Creation Package",
            body: "Monthly drops of branded social and GBP content. Written by humans, powered by your brand kit.",
          },
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "StormFront is one lever in the full Growth System. See how weather-triggered content amplifies every other channel.",
          },
        ]}
      />

      <TestimonialAnchor
        quote="A great partner — looking forward to years to come."
        variant="light"
      />

      <ConsultationCTA />
    </main>
  );
}
