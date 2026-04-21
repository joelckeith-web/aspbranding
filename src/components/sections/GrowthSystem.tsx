import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const OUTCOMES = [
  {
    label: "More Leads",
    headline: "Leads your pipeline actually needs.",
    body: "Local SEO, Google Business Profile, paid media, StormFront weather-triggered content, AEO visibility. Engineered for owner-operators who need predictable lead flow — not vanity traffic.",
    accent: "from-asp-blue-light to-asp-purple",
  },
  {
    label: "Better Operations",
    headline: "AI that works the job, not the dashboard.",
    body: "We're an Official Housecall Pro Affiliate Partner. We set up the HCP AI tools — CSR AI, dispatch, attribution, reporting — so every lead is answered, tracked, and attributed to the channel that delivered it.",
    accent: "from-asp-purple to-asp-blue-light",
  },
  {
    label: "Stronger Margin",
    headline: "Follow-up systems that protect profit.",
    body: "Quote-to-close sequences, win-back automations, review capture, and the reporting that proves what's actually moving revenue. Marketing earns its seat at the table.",
    accent: "from-asp-blue-light via-asp-purple to-asp-blue-light",
  },
];

export function GrowthSystem() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 2xl:py-32 text-white overflow-hidden bg-asp-surface-navy">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76, 201, 240, 0.25), transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 2xl:mb-16 max-w-3xl mx-auto">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              The product
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5">
              One system. Three outcomes.
            </h2>
            <p className="text-white/70 text-lg">
              Most agencies sell you ads. We build the growth system around your business — the marketing that gets the lead, the operations that convert it, and the follow-up that keeps the margin.{" "}
              <span className="text-asp-blue-light font-semibold">
                You own the data. You own the assets. We deliver the results.
              </span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {OUTCOMES.map((o) => (
              <div
                key={o.label}
                className="relative group rounded-[var(--radius-asp-2xl)] p-[1.5px] bg-gradient-to-br from-asp-blue-light/40 via-asp-purple/30 to-asp-blue-light/40 hover:from-asp-blue-light/70 hover:via-asp-purple/50 hover:to-asp-blue-light/70 transition-all duration-300"
              >
                <div className="relative h-full rounded-[calc(var(--radius-asp-2xl)-1px)] bg-asp-surface-navy p-8 2xl:p-10 flex flex-col">
                  <div
                    className={`inline-block self-start font-bold text-[11px] uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-gradient-to-r ${o.accent} text-white`}
                  >
                    {o.label}
                  </div>
                  <h3 className="font-black text-2xl 2xl:text-3xl mb-4 leading-tight">
                    {o.headline}
                  </h3>
                  <p className="text-white/70 leading-relaxed flex-1">{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-asp-blue-light font-bold hover:text-white transition-colors"
            >
              How the system works
              <span aria-hidden>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
