import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import pricingData from "@/data/pricing.json";

export function PricingCards() {
  return (
    <section className="py-10 md:py-12 lg:py-14 2xl:py-24 text-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 2xl:mb-14">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Investment
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-white mb-4">
              Revenue-Stage Packages
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the package that matches your current revenue stage and growth goals.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-center">
            {pricingData.map((tier) => (
              <div
                key={tier.name}
                className={
                  tier.featured
                    ? "bg-white text-black pricing-featured relative rounded-[var(--radius-asp-2xl)] p-6 lg:p-8 2xl:p-10 shadow-asp-xl"
                    : "bg-white/5 border border-white/10 text-white rounded-[var(--radius-asp-2xl)] p-6 lg:p-8 2xl:p-10"
                }
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-asp-gradient-cta text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">
                  Starting at
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`font-black text-4xl ${
                      tier.featured ? "text-asp-blue" : "text-white"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span className={tier.featured ? "text-gray-500" : "text-white/50"}>
                    {tier.period}
                  </span>
                </div>
                <p className={`text-xs mb-6 ${tier.featured ? "text-gray-400" : "text-white/40"}`}>
                  {tier.note}
                </p>

                <h3
                  className={`font-black text-xl mb-2 ${
                    tier.featured ? "text-asp-blue" : "text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.featured ? "text-gray-500" : "text-white/60"}`}>
                  {tier.tagline}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.featured ? "text-success" : "text-asp-blue-light"
                        }`}
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
                      <span
                        className={`text-sm ${
                          tier.featured ? "text-gray-600" : "text-white/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className={`text-xs font-bold mb-6 ${
                    tier.featured ? "text-asp-blue" : "text-asp-blue-light"
                  }`}
                >
                  Best for: {tier.bestFor}
                </p>

                <Link
                  href="/contact"
                  className={`block text-center font-bold py-3 px-6 rounded-[var(--radius-asp-md)] transition-all duration-150 no-underline ${
                    tier.featured
                      ? "bg-asp-blue text-white hover:bg-asp-blue-dark"
                      : "border border-white/25 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
