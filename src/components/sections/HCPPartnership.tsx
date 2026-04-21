import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HCPPartnership() {
  return (
    <section className="relative py-14 md:py-16 lg:py-20 text-white overflow-hidden bg-gradient-to-r from-asp-black via-asp-surface-navy to-asp-black">
      {/* Angular diagonal split in the background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, transparent 0%, transparent 45%, rgba(76, 201, 240, 0.06) 45%, rgba(76, 201, 240, 0.06) 55%, transparent 55%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(76, 201, 240, 0.4) 30%, rgba(159, 76, 255, 0.4) 70%, transparent 100%)",
            transform: "rotate(15deg) translateX(-50%)",
            transformOrigin: "center",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 40% 60% at 15% 50%, rgba(76, 201, 240, 0.15), transparent 70%), radial-gradient(ellipse 40% 60% at 85% 50%, rgba(159, 76, 255, 0.12), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <ScrollReveal>
            <div>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
                Official Affiliate Partner
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                Your bridge between the trades and the AI that runs them.
              </h2>
              <p className="text-white/70 text-base lg:text-lg mb-4 leading-relaxed">
                Housecall Pro is rolling out a serious AI stack — CSR AI, job attribution, automated dispatching, reporting. As an Official Affiliate Partner, we onboard, configure, and integrate it so it works in your shop from day one.
              </p>
              <p className="text-asp-blue-light text-base lg:text-lg mb-6 leading-relaxed font-semibold">
                Switching to HCP or setting up for the first time? We&apos;ll get you onboarded the right way — and, where it applies, secure partner discounts available only on new HCP accounts.
              </p>
              <Link
                href="/contact?topic=hcp"
                className="inline-flex items-center gap-2 bg-asp-blue-light text-asp-black font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-white transition-colors"
              >
                Talk to us about Housecall Pro
                <span aria-hidden>&rarr;</span>
              </Link>
              <p className="text-white/30 text-xs mt-4">
                Official Housecall Pro Affiliate Partner &middot; Discounts for new HCP accounts only &middot; Full terms shared during your growth audit.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Logo card */}
          <ScrollReveal>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 opacity-40 blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(76, 201, 240, 0.35), transparent 70%)",
                }}
              />
              <div className="relative rounded-[var(--radius-asp-2xl)] bg-white p-10 lg:p-12 flex flex-col items-center shadow-asp-xl">
                <Image
                  src="/partners/hcp-logo.png"
                  alt="Housecall Pro"
                  width={320}
                  height={68}
                  className="w-full h-auto max-w-[260px] mb-5"
                />
                <span className="inline-block font-bold text-[11px] uppercase tracking-widest text-asp-blue text-center">
                  Official Affiliate Partner
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
