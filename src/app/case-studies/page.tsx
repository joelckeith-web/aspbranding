import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import caseStudies from "@/data/case-studies.json";

export const metadata: Metadata = {
  title: "Case Studies | ASP",
  description:
    "Industry-anonymized results from operators running the ASP Growth System — HVAC, home inspection, healthcare, commercial flooring, and legal.",
};

const HEADLINE_RESULTS = [
  {
    stat: "4–5×",
    unit: "ROAS",
    label: "Average return on ad spend across home service clients on the Growth System.",
  },
  {
    stat: "+25%",
    unit: "Attributed Revenue",
    label: "Average yearly attributed revenue increase across home service clients.",
  },
  {
    stat: "3×",
    unit: "Lead Volume",
    label: "Average increase in qualified inbound leads within the first 6 months.",
  },
];

const MAP_PACK = [
  { business: "Carpet Cleaning", before: "#8", after: "#1", improvement: "Map Pack Dominance" },
  { business: "Mobile Sand Blasting", before: "12.3", after: "1.7", improvement: "86% improvement" },
  { business: "Stucco Repair", before: "10.7", after: "2.3", improvement: "78% improvement" },
  { business: "Local Painter", before: "16.9", after: "8.4", improvement: "50% improvement" },
];

export default function CaseStudiesPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="Case Studies"
        heading="Industry-anonymized results.<br><span class='hero-text-gradient'>Real operators. Real revenue.</span>"
        subheading="Every case study below is pulled from our active book of business — anonymized by client, reported by trade. Numbers are verified against the platforms they came from."
        ctaText="Book a growth audit"
        ctaUrl="/contact"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/industries/hvac-viking.jpg"
        imagePosition="center center"
      />

      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(159, 76, 255, 0.22), transparent 70%), radial-gradient(ellipse 60% 30% at 20% 45%, rgba(76, 201, 240, 0.12), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Headline numbers
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                What the Growth System delivers.
              </h2>
              <p className="text-white/70 text-lg">
                Averages across our active book. Category-level numbers are below — ask for yours on a growth audit.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {HEADLINE_RESULTS.map((r) => (
                <div
                  key={r.stat}
                  className="rounded-[var(--radius-asp-2xl)] bg-asp-black border-2 border-asp-purple/40 p-6 lg:p-8 flex flex-col items-center text-center"
                >
                  <div className="font-black text-5xl lg:text-6xl 2xl:text-7xl text-asp-purple leading-none mb-3">
                    {r.stat}
                  </div>
                  <div className="font-bold text-xs uppercase tracking-widest text-asp-purple/70 mb-4">
                    {r.unit}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{r.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Individual case studies */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-surface-light">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Client case studies
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                The challenge, the system, the number on the other side.
              </h2>
              <p className="text-asp-blue/70 text-lg">
                Five stories pulled directly from our client work. Industry, timeframe, and metrics verified against source platforms.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-10 lg:space-y-12">
            {caseStudies.map((cs) => (
              <ScrollReveal key={cs.slug}>
                <article className="bg-white rounded-[var(--radius-asp-2xl)] shadow-asp-lg border border-asp-blue/10 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Left: meta + headline */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-asp-blue via-asp-blue to-asp-purple text-white p-8 lg:p-10 flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 mb-5 text-xs font-bold uppercase tracking-widest text-asp-blue-light">
                        <span>{cs.industry}</span>
                        <span className="text-white/30">·</span>
                        <span>{cs.timeframe}</span>
                      </div>
                      <h3 className="font-black text-2xl lg:text-3xl leading-tight mb-6">
                        {cs.headline}
                      </h3>
                      <div className="mt-auto">
                        <p className="text-xs font-bold uppercase tracking-widest text-asp-blue-light mb-3">
                          Services deployed
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cs.services.map((s) => (
                            <span
                              key={s}
                              className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: challenge + solution + results */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-asp-purple mb-2">
                          The challenge
                        </p>
                        <p className="text-asp-blue/80 leading-relaxed">{cs.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-asp-purple mb-2">
                          What we deployed
                        </p>
                        <ul className="space-y-2">
                          {cs.solution.map((line) => (
                            <li key={line} className="flex gap-3 text-asp-blue/80 leading-relaxed">
                              <svg
                                className="flex-shrink-0 w-5 h-5 mt-0.5 text-asp-blue-light"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2.5}
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-asp-purple mb-3">
                          Results
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {cs.results.map((r) => (
                            <div
                              key={r.label}
                              className="rounded-[var(--radius-asp-lg)] bg-asp-surface-light border border-asp-blue/10 p-4"
                            >
                              <div className="font-black text-xl lg:text-2xl text-asp-blue leading-tight mb-1">
                                {r.value}
                              </div>
                              <div className="text-xs font-semibold text-asp-blue/60 leading-snug">
                                {r.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {cs.rankings && (
                          <div className="mt-5 pt-5 border-t border-asp-blue/10">
                            <p className="text-xs font-bold uppercase tracking-widest text-asp-purple mb-3">
                              Keyword rankings
                            </p>
                            <ul className="space-y-2">
                              {cs.rankings.map((k) => (
                                <li
                                  key={k.term}
                                  className="flex items-center justify-between gap-3 text-sm"
                                >
                                  <span className="text-asp-blue/80">{k.term}</span>
                                  <span className="font-bold text-asp-blue">{k.position}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {cs.footnote && (
                          <p className="mt-5 text-xs text-asp-blue/50 leading-relaxed">
                            {cs.footnote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map pack dominance */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
                Local SEO · Map Pack
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-3">
                Map pack dominance.
              </h2>
              <p className="text-asp-blue/70 text-lg">
                Additional client rank movement pulled from the local pack tracking over recent engagements.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-[var(--radius-asp-2xl)] border border-asp-blue/10 shadow-asp-md overflow-hidden bg-white">
              <div className="hidden md:grid grid-cols-4 bg-asp-blue text-white text-xs font-bold uppercase tracking-widest p-4">
                <span>Business</span>
                <span className="text-center">Before</span>
                <span className="text-center">After</span>
                <span className="text-right">Improvement</span>
              </div>
              {MAP_PACK.map((row, i) => (
                <div
                  key={row.business}
                  className={`flex flex-col md:grid md:grid-cols-4 md:items-center gap-2 md:gap-0 p-4 text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-asp-surface-light"
                  }`}
                >
                  <span className="font-bold text-asp-blue">{row.business}</span>
                  <div className="flex md:contents items-center gap-3 text-sm">
                    <span className="md:text-center text-asp-blue/60">
                      <span className="md:hidden text-xs font-bold uppercase tracking-widest text-asp-blue/40 mr-1">
                        Before:
                      </span>
                      {row.before}
                    </span>
                    <span aria-hidden className="md:hidden text-asp-blue/30">→</span>
                    <span className="md:text-center font-bold text-asp-purple">
                      <span className="md:hidden text-xs font-bold uppercase tracking-widest text-asp-purple/50 mr-1">
                        After:
                      </span>
                      {row.after}
                    </span>
                  </div>
                  <span className="md:text-right text-asp-blue/80 text-xs font-semibold">
                    {row.improvement}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-4">
              Want the numbers on your trade?
            </h2>
            <p className="text-asp-blue/70 text-lg mb-8">
              The first thing we cover on a growth audit is the category benchmark for your trade — what operators like you are seeing across our book, what your number could look like, and what it would take to get there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
              >
                Book a growth audit
                <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href="/growth-system"
                className="inline-flex items-center justify-center gap-2 border-2 border-asp-blue text-asp-blue font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
              >
                See the Growth System
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedPages
        items={[
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "What the numbers are built on. Marketing, operations, and follow-up integrated into a single stack.",
          },
          {
            label: "Pillar",
            href: "/ai-integration",
            title: "AI Integration",
            body: "The Housecall Pro AI layer that attributes every booked job back to the marketing dollar that earned it.",
          },
          {
            label: "Decision tool",
            href: "/diagnostic",
            title: "Growth Diagnostic",
            body: "90 seconds, 7 questions. Find out which tier of the Growth System fits your business.",
          },
        ]}
      />

      <TestimonialAnchor quote="Dedication, professionalism, and attention to detail are unmatched." />

      <ConsultationCTA />
    </main>
  );
}
