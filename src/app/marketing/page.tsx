import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";
import { TRADES } from "@/data/trades";

export const metadata: Metadata = {
  title: "Marketing Agency for Home Service Trades",
  description:
    "Trade-specific marketing from the agency that built the Growth System. HVAC, plumbing, roofing, electrical, and adjacent trades — run on one integrated stack.",
  alternates: { canonical: "https://www.aspbranding.com/marketing" },
};

const LIVE_TRADES = [
  { slug: "hvac", name: "HVAC", body: "Local SEO, LSA, Google Ads, and HCP integration tuned for seasonal demand and multi-location HVAC operators." },
  { slug: "plumbing", name: "Plumbing", body: "Emergency map-pack dominance plus the recurring-service layer most plumbing agencies miss." },
  { slug: "roofing", name: "Roofing", body: "StormFront weather triggers, aggressive ad presence in the spike, and quote-to-close follow-up for the rest of the year." },
];

const UPCOMING_TRADES = [
  { name: "Home Inspection", body: "Authority-driven channel mix with heavy YouTube and local SEO. Case study live in our book." },
  { name: "Restoration", body: "Water, fire, mold — weather-driven demand at emergency urgency." },
  { name: "Electrical", body: "Residential + commercial service mix. LSA and Google Ads with HCP attribution." },
  { name: "Pest Control", body: "High-repeat channel with strong recurring-revenue content plays." },
  { name: "Landscaping", body: "Seasonality + local SEO with maintenance-plan retention layers." },
  { name: "Garage Door, Flooring, Remodeling, Appliance Repair", body: "Same Growth System, adapted to each trade's conversion window." },
];

export default function MarketingHubPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Marketing", url: "https://www.aspbranding.com/marketing" },
        ]}
      />

      <Hero
        eyebrow="Marketing by trade"
        heading="Trade-specific marketing,<br><span class='hero-text-gradient'>built on one growth system.</span>"
        subheading="Every trade ranks differently, converts differently, and retains differently. The ASP Growth System adapts per trade — same stack, different playbook, always tied to booked revenue."
        ctaText="Book a growth audit"
        ctaUrl="/contact"
        cta2Text="See the Growth System"
        cta2Url="/growth-system"
        bgType="image"
        imageUrl="/images/backgrounds/team-at-work.jpg"
        imagePosition="center center"
      />

      {/* Live trades */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Deep-dive trade pages
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Pick your trade.
              </h2>
              <p className="text-asp-blue/70 text-lg">
                Each trade has its own revenue math, its own conversion window, and its own playbook inside the Growth System. Start with the one that fits your business.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {LIVE_TRADES.map((t) => {
                const trade = TRADES[t.slug];
                return (
                  <Link
                    key={t.slug}
                    href={`/marketing/${t.slug}`}
                    className="group rounded-[var(--radius-asp-2xl)] bg-white border border-asp-blue/10 shadow-asp-md hover:shadow-asp-lg hover:border-asp-blue/30 transition-all p-7 lg:p-8 flex flex-col"
                  >
                    <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
                      {trade.hero.eyebrow}
                    </span>
                    <h3 className="font-black text-2xl lg:text-3xl text-asp-blue mb-3 leading-tight">
                      {t.name} marketing
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                      {t.body}
                    </p>
                    <span className="inline-flex items-center gap-2 text-asp-blue-light font-bold text-sm group-hover:text-asp-purple transition-colors">
                      See the {t.name} playbook
                      <span aria-hidden>&rarr;</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming trades */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(159, 76, 255, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Also running the system
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                Trades we work with every day.
              </h2>
              <p className="text-white/70 text-lg">
                Dedicated deep-dive pages for these are publishing soon. In the meantime, the Growth System already runs for operators in every category below.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {UPCOMING_TRADES.map((t) => (
                <div
                  key={t.name}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.04] border border-white/10 backdrop-blur-sm p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg lg:text-xl text-asp-blue-light mb-2">
                    {t.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-white/50 text-sm mt-10 max-w-2xl mx-auto">
              Don&apos;t see your trade? Odds are we&apos;ve worked with a business like yours. <Link href="/contact" className="text-asp-blue-light font-semibold hover:underline">Tell us about your business</Link> and we&apos;ll tell you how the Growth System adapts to it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialAnchor quote="A game-changer for my business." />

      <ConsultationCTA />
    </main>
  );
}
