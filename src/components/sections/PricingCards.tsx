import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TIERS = [
  {
    name: "Foundation",
    price: "$2,500",
    period: "/ month",
    tagline: "For businesses building their first real growth engine.",
    features: [
      "Monthly performance report",
      "Local SEO Pro (GBP, citations, heatmap, rankings)",
      "StormFront weather-triggered content",
      "Content Creation Package (social + GBP content)",
      "Housecall Pro attribution setup",
    ],
    footnote:
      "Website add-on: Custom build on our highest-converting structure, one-time setup fee at signup then included monthly. WordPress refresh pricing quoted separately.",
    ctaLabel: "Start with Foundation",
    featured: false,
  },
  {
    name: "Growth",
    price: "$3,850",
    period: "/ month",
    tagline: "For operators ready to scale paid and organic together.",
    features: [
      "Everything in Foundation",
      "Custom website build (included)",
      "Paid media management (Google Ads, Meta, LSA)",
      "Full social + GBP posting management",
      "HCP AI onboarding (CSR AI, dispatch, reporting)",
      "Monthly strategy review",
      "Fractional CMO-level marketing direction",
    ],
    ctaLabel: "Scale with Growth",
    featured: true,
  },
  {
    name: "Premier",
    price: "Custom",
    period: "contact for details",
    tagline: "For operators who want marketing, ops, and AI integration run like an in-house team.",
    features: [
      "Everything in Growth",
      "Custom website rebuilt annually as strategy evolves",
      "Full-funnel marketing ownership across every channel",
      "Custom AI integrations beyond HCP",
      "Quarterly business review and revenue planning",
      "Dedicated account leadership",
    ],
    ctaLabel: "Book a Premier conversation",
    featured: false,
  },
];

const ENTRY_PRODUCTS = [
  {
    name: "Local SEO Pro",
    price: "$1,200",
    period: "/ month",
    oneLiner: "Own your local map. Rank where your customers search.",
    body: "Full-service GBP management, citation acquisition, local ranking heatmap, review capture automation, monthly ranking report.",
    ctaLabel: "Start with Local SEO Pro",
  },
  {
    name: "StormFront",
    price: "$549",
    period: "/ month",
    oneLiner: "Weather-triggered content that shows up when your customers are searching.",
    body: "Fully managed weather-event-triggered blog system. Drafts, publishes, and indexes automatically when storms, heat waves, or seasonal triggers fire in your service area.",
    ctaLabel: "Start with StormFront",
  },
  {
    name: "Content Creation Package",
    price: "$499",
    period: "/ month",
    oneLiner: "Social and GBP content, done for you — ready to post.",
    body: "12–16 branded social graphics and captions, plus weekly Google Business Profile post content, delivered monthly. Built on your brand kit.",
    ctaLabel: "Start with Content",
  },
];

export function PricingCards() {
  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24 2xl:py-32 text-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 2xl:mb-16 max-w-3xl mx-auto">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Pricing
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
              The full Growth System.
            </h2>
            <p className="text-white/70 text-lg">
              Marketing, operations, and AI integration run as one system. Pick the tier that matches where your business is today — every tier scales into the next as you grow.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={
                  tier.featured
                    ? "relative rounded-[var(--radius-asp-2xl)] p-[2px] bg-gradient-to-br from-asp-blue-light via-asp-purple to-asp-blue-light shadow-[0_20px_60px_-10px_rgba(76,201,240,0.4)] lg:scale-[1.05] lg:-translate-y-2"
                    : "relative rounded-[var(--radius-asp-2xl)] p-[1.5px] bg-white/10 hover:bg-gradient-to-br hover:from-asp-blue-light/40 hover:via-asp-purple/30 hover:to-asp-blue-light/40 transition-all"
                }
              >
                <div
                  className="h-full rounded-[calc(var(--radius-asp-2xl)-2px)] bg-asp-surface-navy text-white p-8 2xl:p-10 flex flex-col relative overflow-hidden"
                >
                  {tier.featured && (
                    <>
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-30 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(76, 201, 240, 0.45), transparent 70%)",
                        }}
                      />
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-asp-blue-light to-asp-purple text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                          Most Popular
                        </span>
                      </div>
                    </>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="font-black text-2xl 2xl:text-3xl mb-2 text-white">
                      {tier.name}
                    </h3>
                    <p className="text-sm mb-6 text-white/60">{tier.tagline}</p>

                    <div className="flex items-baseline gap-2 mb-8">
                      <span
                        className={`font-black text-4xl 2xl:text-5xl ${
                          tier.featured
                            ? "bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple"
                            : "text-white"
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span className="text-sm text-white/50">{tier.period}</span>
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 flex-shrink-0 mt-0.5 text-asp-blue-light"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-white/80">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.footnote && (
                      <p className="text-xs leading-relaxed mb-6 pt-4 border-t text-white/50 border-white/10">
                        {tier.footnote}
                      </p>
                    )}

                    <Link
                      href="/contact"
                      className={`block text-center font-bold py-3.5 px-6 rounded-[var(--radius-asp-lg)] transition-all ${
                        tier.featured
                          ? "bg-gradient-to-r from-asp-blue-light to-asp-purple text-white hover:opacity-90"
                          : "border border-white/25 text-white hover:bg-asp-blue-light hover:text-white hover:border-asp-blue-light"
                      }`}
                    >
                      {tier.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Fractional C-Suite sidecar */}
        <ScrollReveal>
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="rounded-[var(--radius-asp-xl)] bg-white/[0.09] border border-asp-purple/30 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 backdrop-blur-sm">
              <div className="flex-1">
                <span className="inline-block font-bold text-[10px] uppercase tracking-widest text-asp-purple mb-2">
                  Fractional Leadership
                </span>
                <h3 className="font-black text-xl mb-1">Fractional C-Suite</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  For $5M+ operators ready for senior-level marketing leadership — budget ownership, financial planning, channel-level P&amp;L. A deeper engagement than what&apos;s built into Growth or Premier.
                </p>
              </div>
              <Link
                href="/contact?topic=fractional"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold px-6 py-3 rounded-[var(--radius-asp-lg)] border border-asp-purple/40 text-asp-purple hover:bg-asp-purple hover:text-white transition-all"
              >
                Tell me more
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Entry products row */}
        <div className="mt-20 2xl:mt-28">
          <ScrollReveal>
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Start with one system
              </span>
              <h3 className="font-black text-2xl md:text-3xl 2xl:text-4xl text-white mb-4">
                Not ready for the full Growth System yet?
              </h3>
              <p className="text-white/70">
                Standalone, fully managed, run by the same team — just focused on a single lever. Every one includes a quarterly review to map the growth path when you&apos;re ready to layer on more.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENTRY_PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.04] border border-white/10 p-7 flex flex-col hover:border-asp-blue-light/40 transition-colors"
                >
                  <h4 className="font-black text-xl text-white mb-1">{p.name}</h4>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="font-black text-2xl text-asp-blue-light">{p.price}</span>
                    <span className="text-white/50 text-sm">{p.period}</span>
                  </div>
                  <p className="text-white/80 font-semibold text-sm mb-3 leading-snug">{p.oneLiner}</p>
                  <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5">{p.body}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-asp-blue-light font-bold text-sm hover:text-white transition-colors"
                  >
                    {p.ctaLabel}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
