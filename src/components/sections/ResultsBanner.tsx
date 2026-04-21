import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TILES = [
  {
    stat: "4–5\u00D7",
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
    <section className="relative py-16 md:py-20 lg:py-24 2xl:py-28 bg-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Results
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
              What the Growth System delivers for our clients.
            </h2>
            <p className="text-asp-blue/70 text-lg">
              Industry-level averages pulled from our active book of business. Anonymized by client, reported by trade.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {TILES.map((t, i) => (
              <div
                key={i}
                className="relative rounded-[var(--radius-asp-2xl)] p-[1.5px] bg-gradient-to-br from-asp-blue via-asp-blue-light to-asp-purple"
              >
                <div className="h-full rounded-[calc(var(--radius-asp-2xl)-1px)] bg-white p-6 lg:p-8 flex flex-col items-start">
                  <div className="font-black text-4xl lg:text-5xl 2xl:text-6xl text-asp-blue leading-none mb-2 bg-clip-text text-transparent bg-gradient-to-r from-asp-blue to-asp-purple">
                    {t.stat}
                  </div>
                  <div className="font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                    {t.unit}
                  </div>
                  <p className="text-asp-blue/70 text-sm leading-relaxed">{t.label}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-bold text-asp-blue hover:text-asp-purple transition-colors"
            >
              Read the case studies
              <span aria-hidden>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
