import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies | ASP",
  description:
    "Industry-anonymized results from home service operators running the ASP Growth System. 4–5× ROAS on paid media, +25% attributed revenue, and more.",
};

const HEADLINE_RESULTS = [
  {
    stat: "4–5×",
    unit: "ROAS",
    label: "Average return on ad spend for home inspection clients on the Growth System.",
  },
  {
    stat: "+25%",
    unit: "Attributed Revenue",
    label: "Average yearly attributed revenue increase across home inspection clients.",
  },
  {
    stat: "3×",
    unit: "Lead Volume",
    label: "Average increase in qualified inbound leads within the first 6 months on the Growth System.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="Case Studies"
        heading="Industry-anonymized results.<br><span class='hero-text-gradient'>Real operators. Real revenue.</span>"
        subheading="Individual case studies are under construction. In the meantime, here are the industry-level averages pulled from our active book of business — anonymized by client, reported by trade."
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
                Averages across our home inspection book. HVAC, roofing, and plumbing numbers are similar in direction — we&apos;ll share them during your growth audit.
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

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Full case studies — coming soon
            </span>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5">
              Operator-by-operator deep dives.
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Individual client case studies are under development. Each one will include the business, the challenge, the system we deployed, and the revenue number on the other side. If you want the numbers on a specific trade before then, it&apos;s the first thing we&apos;ll cover on a growth audit.
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

      <TestimonialAnchor quote="It's a night-and-day difference from our last company." />

      <ConsultationCTA />
    </main>
  );
}
