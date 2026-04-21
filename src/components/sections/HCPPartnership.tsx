import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HCPPartnership() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 2xl:py-28 text-white overflow-hidden bg-asp-black">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(159, 76, 255, 0.18), transparent 70%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(76, 201, 240, 0.15), transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-[var(--radius-asp-2xl)] p-[1.5px] bg-gradient-to-br from-asp-blue-light via-asp-purple to-asp-blue-light">
            <div className="rounded-[calc(var(--radius-asp-2xl)-1px)] bg-asp-surface-navy p-8 md:p-12 lg:p-16 2xl:p-20">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
                <div>
                  <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                    Official Affiliate Partner
                  </span>
                  <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
                    Your bridge between the trades and the AI that runs them.
                  </h2>
                  <p className="text-white/75 text-lg mb-5 leading-relaxed">
                    Housecall Pro is rolling out a serious stack of AI tools — CSR AI, job attribution, automated dispatching, reporting. Most shop owners don&apos;t have time to figure out which ones to turn on, how to configure them, or how to wire them into their existing workflow. That&apos;s where we come in.
                  </p>
                  <p className="text-white/75 text-lg mb-5 leading-relaxed">
                    As an Official Housecall Pro Affiliate Partner, we onboard, configure, and integrate HCP&apos;s AI stack so it works in your shop — not against it.
                  </p>
                  <div className="bg-asp-blue-light/10 border border-asp-blue-light/30 rounded-[var(--radius-asp-lg)] p-5 mb-6">
                    <p className="text-white/90 text-base leading-relaxed">
                      <span className="font-bold text-asp-blue-light">Looking to switch to Housecall Pro, or getting set up for the first time?</span>{" "}
                      Talk to us. We&apos;ll help you get onboarded the right way — and, where it applies, help you secure partner discounts only available to new HCP accounts.
                    </p>
                  </div>
                  <Link
                    href="/contact?topic=hcp"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-asp-blue-light to-asp-purple text-white font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:opacity-90 transition-opacity"
                  >
                    Talk to us about Housecall Pro
                    <span aria-hidden>→</span>
                  </Link>
                  <p className="text-white/40 text-xs mt-5 leading-relaxed">
                    Official Housecall Pro Affiliate Partner · Discounts available for new HCP accounts only · Full terms shared during your growth audit.
                  </p>
                </div>

                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:min-w-[200px]">
                  <div className="bg-white rounded-[var(--radius-asp-xl)] p-6 flex items-center justify-center w-full">
                    <Image
                      src="/partners/hcp-logo.png"
                      alt="Housecall Pro"
                      width={280}
                      height={60}
                      className="h-auto w-full max-w-[240px]"
                    />
                  </div>
                  <div className="text-center lg:text-left w-full">
                    <span className="inline-block font-bold text-[10px] uppercase tracking-widest text-asp-blue-light">
                      Official Affiliate Partner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
