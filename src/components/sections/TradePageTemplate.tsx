import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  BreadcrumbSchema,
  ServiceSchema,
} from "@/components/schema/StructuredData";
import type { TradeData } from "@/data/trades";

export function TradePageTemplate({ trade }: { trade: TradeData }) {
  const url = `https://www.aspbranding.com/marketing/${trade.slug}`;

  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Marketing", url: "https://www.aspbranding.com/marketing" },
          { name: trade.trade, url },
        ]}
      />
      <ServiceSchema
        name={`${trade.trade} Marketing — ASP Growth System`}
        description={trade.metaDescription}
        url={url}
        serviceType={`${trade.trade} Marketing Agency`}
      />

      <Hero
        eyebrow={trade.hero.eyebrow}
        heading={trade.hero.heading}
        subheading={trade.hero.subheading}
        ctaText="Book a growth audit"
        ctaUrl={`/contact?topic=${trade.slug}-marketing`}
        cta2Text="See the Growth System"
        cta2Url="/growth-system"
        bgType="image"
        imageUrl={trade.hero.imageUrl}
        imagePosition={trade.hero.imagePosition}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                {trade.intro.eyebrow}
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
                {trade.intro.heading}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              {trade.intro.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Revenue math */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(76, 201, 240, 0.18), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(159, 76, 255, 0.14), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                {trade.revenueMath.eyebrow}
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                {trade.revenueMath.heading}
              </h2>
              <p className="text-white/70 text-lg">
                {trade.revenueMath.subheading}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {trade.revenueMath.points.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.04] border border-white/10 backdrop-blur-sm p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg lg:text-xl text-asp-blue-light mb-2">
                    {p.label}
                  </h3>
                  <p className="text-white/75 text-sm lg:text-base leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Playbook */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-surface-light">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                {trade.playbook.eyebrow}
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                {trade.playbook.heading}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {trade.playbook.items.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white border border-asp-blue/10 shadow-asp-md hover:shadow-asp-lg transition-shadow p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg text-asp-blue mb-2">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case study (optional) */}
      {trade.caseStudy && (
        <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(159, 76, 255, 0.2), transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                  Proof
                </span>
                <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-3 leading-tight">
                  {trade.caseStudy.headline}
                </h2>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
                  {trade.caseStudy.name} · {trade.caseStudy.timeframe}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-[var(--radius-asp-2xl)] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 lg:p-8 mb-6">
                <p className="text-white/80 leading-relaxed text-base lg:text-lg">
                  {trade.caseStudy.body}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="stagger">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {trade.caseStudy.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[var(--radius-asp-xl)] bg-white/[0.04] border border-white/10 p-6 text-center"
                  >
                    <div className="font-black text-3xl lg:text-4xl text-asp-blue-light leading-tight mb-2">
                      {s.value}
                    </div>
                    <div className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-center mt-10">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-asp-blue-light font-bold hover:text-white transition-colors"
                >
                  See all case studies
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <FAQAccordion
        faqs={trade.faqs}
        heading={`${trade.trade} marketing — common questions.`}
      />

      <RelatedPages
        items={[
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "The full system every engagement plugs into — marketing, operations, and follow-up integrated across your stack.",
          },
          {
            label: "Pillar",
            href: "/ai-integration",
            title: "AI Integration",
            body: "The Housecall Pro AI layer we configure — CSR AI, attribution, follow-up automation. Native to every trade we run.",
          },
          {
            label: "Decision tool",
            href: "/diagnostic",
            title: "Growth Diagnostic",
            body: "Seven questions, ninety seconds. Find out which tier of the Growth System fits your business.",
          },
        ]}
      />

      <TestimonialAnchor quote="A game-changer for my business." />

      <ConsultationCTA />
    </main>
  );
}
