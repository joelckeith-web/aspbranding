import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HCPPartnership() {
  return (
    <section className="relative py-14 md:py-16 lg:py-20 text-white overflow-hidden bg-asp-black">
      {/* Twin angled stripes (Viking-style) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-1/2 -bottom-1/2 left-[35%] w-[18vw] max-w-[260px] bg-white/[0.05]"
          style={{ transform: "rotate(12deg)" }}
        />
        <div
          className="absolute -top-1/2 -bottom-1/2 left-[58%] w-[12vw] max-w-[180px] bg-white/[0.03]"
          style={{ transform: "rotate(12deg)" }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 15% 50%, rgba(76, 201, 240, 0.2), transparent 70%), radial-gradient(ellipse 50% 60% at 90% 50%, rgba(76, 201, 240, 0.12), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <ScrollReveal>
            <div>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3">
                Official Affiliate Partner
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                Your bridge between the trades and the AI that runs them.
              </h2>
              <p className="text-white/70 text-base lg:text-lg mb-4 leading-relaxed">
                Housecall Pro is rolling out a serious AI stack &mdash; CSR AI, job attribution, automated dispatching, reporting. As an Official Affiliate Partner, we onboard, configure, and integrate it so it works in your business from day one.
              </p>
              <p className="text-asp-blue-light text-base lg:text-lg mb-6 leading-relaxed font-semibold">
                Switching to HCP or setting up for the first time? We&apos;ll get you onboarded the right way &mdash; and, where it applies, secure partner discounts available only on new HCP accounts.
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

          {/* Right: White HCP logo, large, no card */}
          <ScrollReveal>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div
                aria-hidden
                className="absolute inset-0 opacity-30 blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(76, 201, 240, 0.35), transparent 70%)",
                }}
              />
              <Image
                src="/partners/hcp-logo-white.png"
                alt="Housecall Pro"
                width={600}
                height={128}
                className="relative w-full h-auto max-w-[420px] lg:max-w-[500px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
