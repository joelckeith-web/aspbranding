import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BUSINESS } from "@/lib/constants";

const DELIVERABLES = [
  "Complete ASP Growth System™ assessment",
  "Revenue barrier analysis and breakthrough strategy",
  "Custom package recommendation based on revenue stage",
  "90-day systematic implementation roadmap",
  "No-obligation consultation with growth specialists",
];

export function ConsultationCTA() {
  return (
    <section className="py-20 md:py-28 bg-asp-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(76,201,240,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Take the Next Step
            </span>
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Ready to Take Control of Your Marketing?
            </h2>
            <p className="text-lg text-asp-blue-light font-bold mb-4">
              Ready to Break Your Revenue Barrier?
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Stop guessing and start growing with a proven system designed for your
              revenue stage. The ASP Growth System&trade; has helped 200+ businesses
              break through to the next level.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-asp-blue font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all duration-150 no-underline text-base"
            >
              Get Started Now
            </Link>
          </ScrollReveal>

          {/* Right — Dark Card */}
          <ScrollReveal animation="slide-left">
            <div className="bg-white/[0.05] border border-white/10 rounded-[var(--radius-asp-xl)] p-8 lg:p-10">
              <h3 className="font-bold text-xl text-white mb-6">
                What You&apos;ll Get:
              </h3>
              <ul className="space-y-4 mb-8">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-asp-blue-light flex-shrink-0 mt-0.5"
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
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${BUSINESS.phoneLink}`}
                className="block text-center bg-asp-blue-light text-white font-bold py-3 px-6 rounded-[var(--radius-asp-md)] hover:bg-asp-blue-light/90 transition-all duration-150 no-underline"
              >
                Give Us A Call — {BUSINESS.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
