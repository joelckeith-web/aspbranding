import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// AEO leads; the website is included because it is what the answer engines read.
export const AEO_PACKAGE = {
  eyebrow: "Answer Engine Optimization",
  name: "AEO + Website",
  price: "$1,250",
  period: "/ month",
  headline: "Your customers are asking AI who to call. This is how you get into the answer.",
  body: "Answer engine optimization run for you every month. A brand-new website comes with it, because an answer engine can only quote a site it can read.",
  features: [
    "AEO rankings tracked every month in Google's AI Overviews and AI Mode: which customer questions you appear in, and how often",
    "A brand-new custom website, 10 pages at launch, built so answer engines can read it and quote it. Included.",
    "Two new blog posts a month, each one answering a question your customers ask",
    "Monthly performance report on what changed and what it moved",
    "You own the website and every asset we build",
  ],
  ctaLabel: "Ask about AEO + Website",
  href: "/contact?topic=website-aeo",
};

const FOUNDATION = {
  name: "Foundation",
  price: "$2,500",
  period: "/ month",
  tagline: "For businesses building their first real growth engine.",
  features: [
    "Monthly performance report",
    "Organic SEO (service pages, content, technical fixes)",
    "Local SEO Pro (GBP, citations, heatmap, rankings)",
    "Content Creation Package (social + GBP content)",
    "Housecall Pro attribution setup",
  ],
  ctaLabel: "Start with Foundation",
  href: "/contact?topic=foundation",
};

function Check() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/** The featured AEO + Website card. Sits on a dark background. */
export function AeoPackageCard() {
  return (
    <div className="max-w-4xl mx-auto rounded-[var(--radius-asp-2xl)] p-[2px] bg-gradient-to-br from-asp-blue-light via-asp-purple to-asp-blue-light shadow-[0_20px_60px_-10px_rgba(76,201,240,0.35)]">
      <div className="rounded-[calc(var(--radius-asp-2xl)-2px)] bg-asp-surface-navy p-7 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="flex flex-col">
          <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3">
            {AEO_PACKAGE.eyebrow}
          </span>
          <h3 className="font-black text-2xl md:text-3xl text-white mb-3">{AEO_PACKAGE.name}</h3>
          <p className="text-white font-semibold text-lg leading-snug mb-3">{AEO_PACKAGE.headline}</p>
          <p className="text-white/70 text-sm leading-relaxed mb-6">{AEO_PACKAGE.body}</p>
          <div className="flex items-baseline gap-2 mb-6 mt-auto">
            <span className="font-black text-4xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple">
              {AEO_PACKAGE.price}
            </span>
            <span className="text-sm text-white/50">{AEO_PACKAGE.period}</span>
          </div>
          <Link
            href={AEO_PACKAGE.href}
            className="block text-center font-bold py-3.5 px-6 rounded-[var(--radius-asp-lg)] bg-gradient-to-r from-asp-blue-light to-asp-purple text-white hover:opacity-90 transition-all"
          >
            {AEO_PACKAGE.ctaLabel}
          </Link>
        </div>
        <ul className="space-y-4 md:pt-2">
          {AEO_PACKAGE.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <Check />
              <span className="text-sm text-white/85 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FoundationCard() {
  return (
    <div className="max-w-4xl mx-auto mt-6 rounded-[var(--radius-asp-xl)] bg-white/[0.04] border border-white/10 p-7 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div className="flex flex-col">
        <h3 className="font-black text-2xl text-white mb-2">{FOUNDATION.name}</h3>
        <p className="text-white/60 text-sm mb-5">{FOUNDATION.tagline}</p>
        <div className="flex items-baseline gap-2 mb-6 mt-auto">
          <span className="font-black text-3xl text-white">{FOUNDATION.price}</span>
          <span className="text-sm text-white/50">{FOUNDATION.period}</span>
        </div>
        <Link
          href={FOUNDATION.href}
          className="block text-center font-bold py-3 px-6 rounded-[var(--radius-asp-lg)] border border-white/25 text-white hover:bg-asp-blue-light hover:border-asp-blue-light transition-all"
        >
          {FOUNDATION.ctaLabel}
        </Link>
      </div>
      <ul className="space-y-3">
        {FOUNDATION.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check />
            <span className="text-sm text-white/80">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A dark band that features the AEO + Website package on a service page. */
export function AeoPackageSection({
  eyebrow = "The package",
  heading = "AEO, done for you every month.",
  subheading = "One monthly package: the AEO work, the tracking, and the website it runs on.",
  withFoundation = false,
}: {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  withFoundation?: boolean;
}) {
  return (
    <section id="aeo-package" className="relative py-16 md:py-20 bg-asp-black text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(76, 201, 240, 0.16), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(159, 76, 255, 0.12), transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              {eyebrow}
            </span>
            <h2 className="font-black text-3xl md:text-4xl mb-4">{heading}</h2>
            <p className="text-white/70 text-lg">{subheading}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <AeoPackageCard />
          {withFoundation && <FoundationCard />}
        </ScrollReveal>
      </div>
    </section>
  );
}
