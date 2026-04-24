import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Local SEO Pro",
  description:
    "Own the local map. Rank where your customers search. Full-service Google Business Profile, citation cleanup, local ranking heatmap, and local content strategy for home service operators.",
};

const INCLUDES = [
  {
    title: "Google Business Profile management",
    body: "Categories, services, service areas, hours, products, Q&A, photo freshness, weekly GBP posts. The field most operators set up once and forget — we run it like an active channel.",
  },
  {
    title: "Citation audit + cleanup",
    body: "Consistent NAP across 60+ primary directories and data aggregators. Duplicate listings suppressed, misinformation corrected, new citations built on a 90-day cadence.",
  },
  {
    title: "Local ranking heatmap",
    body: "Monthly heatmap reporting from 50+ grid points across your service area. See exactly where you rank in every neighborhood, not just the city average.",
  },
  {
    title: "Competitor + market intelligence",
    body: "Ongoing analysis of your top local competitors, their ranking movements, and the market signals shaping your category. Informs every tactical decision month over month.",
  },
  {
    title: "Local schema + on-site optimization",
    body: "LocalBusiness schema, service area pages, embedded maps, local content signals. The on-site layer that Google reads alongside your GBP.",
  },
  {
    title: "Monthly performance report",
    body: "Rankings, GBP engagement, call tracking, direction requests, competitive movement — reported against booked revenue in HCP, not vanity metrics.",
  },
];

const AI_LAYER = [
  {
    title: "Ranking anomaly detection",
    body: "AI watches the daily ranking data and flags sudden drops, Google algorithm shifts, or competitor moves before they turn into lost revenue. Humans decide what to do about it.",
  },
  {
    title: "Citation auditing at scale",
    body: "AI cross-checks 60+ directories in minutes instead of hours. Our team focuses on the corrections that matter, not the grunt work of finding them.",
  },
  {
    title: "Competitor + market trend analysis",
    body: "AI digests local competitor movement, category-wide search trends, and seasonal patterns across your service area — surfacing the signals that change what we recommend next.",
  },
  {
    title: "Past-performance intelligence",
    body: "AI analyzes what&apos;s worked and what hasn&apos;t across your own local search history — ranking shifts, GBP engagement, converting queries — so every strategic recommendation is grounded in your data, not agency guesswork.",
  },
];

export default function LocalSeoProPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="Local SEO Pro · $1,200/mo"
        heading="Own your local map.<br><span class='hero-text-gradient'>Rank where your customers search.</span>"
        subheading="Full-service Google Business Profile, citation cleanup, heatmap reporting, and competitive intelligence — run by specialists, sharpened by AI analytics, grounded in home service reality."
        ctaText="Start with Local SEO Pro"
        ctaUrl="/contact?topic=local-seo-pro"
        cta2Text="See how it fits the Growth System"
        cta2Url="/growth-system"
        bgType="image"
        imageUrl="/images/industries/hvac-viking.jpg"
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
                The local search layer of the Growth System, delivered as a standalone product.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Local SEO Pro is the same GBP management, citation hygiene, heatmap reporting, and competitive intelligence that runs inside Foundation, Growth, and Premier — available on its own for operators who want the local channel handled before layering on the rest.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It&apos;s not a scaled-down starter version. It&apos;s the same engine — just focused on one channel.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What's inside */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What&apos;s included
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Six components. One managed channel.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {INCLUDES.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 hover:border-asp-blue-light/60 transition-colors p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg 2xl:text-xl text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How AI is wired in */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Where AI plays in
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                AI as your research layer.
              </h2>
              <p className="text-gray-600 text-lg">
                We use AI for research, analytics, and signal detection &mdash; the work humans can&apos;t do at scale. Strategy, voice, and anything that touches a customer stays with our specialists.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {AI_LAYER.map((a) => (
                <div
                  key={a.title}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 bg-white shadow-asp-sm"
                >
                  <h3 className="font-black text-lg text-asp-blue mb-2">{a.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why our team wins */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(159, 76, 255, 0.2), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Who&apos;s running it
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
              Marketing specialists backed by leaders who own trades-based businesses.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              Our leadership team owns trades-based businesses. That&apos;s not a marketing claim — it&apos;s the reason every recommendation in Local SEO Pro actually fits the operational reality of a home service business. We know what a service call looks like, how HCP is really used, what a tech&apos;s week actually includes, and what a customer calling at 6pm on a Friday actually wants to see when they search.
            </p>
            <p className="text-white/60 leading-relaxed">
              AI gives our team leverage. Industry ownership gives them judgment. Together, that&apos;s the version of local SEO you&apos;re buying.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing + Growth upsell */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Pricing
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-4">
                Two ways to buy Local SEO Pro.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-[var(--radius-asp-2xl)] border border-gray-200 p-8 bg-white shadow-asp-sm flex flex-col">
                <div className="font-bold text-xs uppercase tracking-widest text-asp-purple mb-2">
                  Standalone
                </div>
                <h3 className="font-black text-2xl text-asp-blue mb-2">Local SEO Pro</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-black text-4xl text-asp-blue">$1,200</span>
                  <span className="text-gray-500 text-sm">/ month</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Everything described on this page. Run on its own. Quarterly review to map the path into the full Growth System when you&apos;re ready.
                </p>
                <Link
                  href="/contact?topic=local-seo-pro"
                  className="mt-auto inline-flex items-center justify-center gap-2 border-2 border-asp-blue text-asp-blue font-bold px-6 py-3 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
                >
                  Start with Local SEO Pro
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
                    Local SEO Pro <strong>plus</strong> StormFront, the Content Creation Package, HCP attribution setup, and monthly performance reporting. Three productized services plus the reporting layer for $252 more than Local SEO Pro alone.
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
            <p className="text-center text-gray-500 text-sm mt-8">
              Not sure which way to go?{" "}
              <Link href="/diagnostic" className="text-asp-blue hover:text-asp-blue-light font-semibold">
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
            href: "/stormfront",
            title: "StormFront",
            body: "A proprietary weather-triggered content system for storm-chasing and weather-driven home service operators.",
          },
          {
            label: "Sibling product",
            href: "/content-creation",
            title: "Content Creation Package",
            body: "Social and GBP content, done for you and ready to post. Written by humans, informed by AI analytics.",
          },
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "Local SEO is one component of a fully integrated Growth System. See how every channel feeds the same revenue number.",
          },
        ]}
      />

      <TestimonialAnchor quote="It's a night-and-day difference from our last company." />

      <ConsultationCTA />
    </main>
  );
}
