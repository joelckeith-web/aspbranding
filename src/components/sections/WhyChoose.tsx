import { ScrollReveal } from "@/components/ui/ScrollReveal";

const POINTS = [
  "ASP Growth System™ — Proven systematic approach to breaking revenue barriers",
  "Complete client ownership of all assets, ad accounts, and data",
  "Revenue-stage expertise — specialized in $1M, $3M, and $5M barriers",
  "Home service and legal industry focus with deep vertical knowledge",
  "Full transparency in every campaign, metric, and dollar spent",
  "Phased approach that scales with your business growth",
  "Proven revenue breakthroughs for 200+ client businesses",
  "Systematic delivery using proven methods — no guesswork",
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-asp-blue text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              The ASP Difference
            </span>
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-white">
              Why Choose ASP
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-asp-blue-light flex-shrink-0 mt-0.5"
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
                <span className="text-white/90 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
