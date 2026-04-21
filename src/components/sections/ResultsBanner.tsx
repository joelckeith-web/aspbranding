import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TILES = [
  {
    stat: "4\u20135\u00D7",
    unit: "ROAS",
    label: "Average return on ad spend for home inspection clients on the Growth System.",
  },
  {
    stat: "+25%",
    unit: "Attributed Revenue",
    label: "Average yearly attributed revenue increase across home inspection clients.",
  },
  {
    stat: "3\u00D7",
    unit: "Lead Volume",
    label: "Average increase in qualified inbound leads within the first 6 months on the Growth System.",
  },
  {
    stat: "100%",
    unit: "Yours",
    label: "You own the data. You own the assets. Every time.",
  },
];

export function ResultsBanner() {
  return (
    <section className="relative pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24 2xl:pt-16 2xl:pb-28 text-white overflow-hidden">
      <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Results
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-white mb-4">
              What the Growth System delivers for our clients.
            </h2>
            <p className="text-white/70 text-lg">
              Industry-level averages pulled from our active book of business. Anonymized by client, reported by trade.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {TILES.map((t, i) => (
              <div
                key={i}
                className="rounded-[var(--radius-asp-2xl)] bg-asp-black border-2 border-asp-blue-light/40 hover:border-asp-blue-light transition-colors p-6 lg:p-8 flex flex-col items-center text-center"
              >
                <div className="font-black text-5xl lg:text-6xl 2xl:text-7xl text-asp-blue-light leading-none mb-3">
                  {t.stat}
                </div>
                <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light/70 mb-4">
                  {t.unit}
                </div>
                <p className="text-white/65 text-sm leading-relaxed">{t.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-bold text-asp-blue-light hover:text-white transition-colors"
            >
              Read the case studies
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
