import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FEATURES = [
  {
    title: "Built on our highest-converting structure",
    body: "Every site we build starts from the structure that's been proven to convert \u2014 refined across our home service book of business.",
  },
  {
    title: "Mobile-first, instantly.",
    body: "70%+ of home service searches happen on mobile. We build mobile-first so the phone experience isn't an afterthought.",
  },
  {
    title: "You own the code and the domain.",
    body: "Hosted where you want it. Exportable. No proprietary page builder, no platform lock-in, no handover fee.",
  },
  {
    title: "Integrated with the Growth System.",
    body: "Attribution, forms, tracking, and CRM hooks wired in from day one. The website is part of the growth system, not a standalone.",
  },
];

export function PortfolioShowcase() {
  return (
    <section className="relative py-10 md:py-12 lg:py-14 2xl:py-16 bg-asp-surface-light overflow-hidden">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-8 2xl:mb-10 max-w-3xl mx-auto">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Our work
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4 leading-tight">
              Websites built to perform.
            </h2>
            <p className="text-asp-blue/70 text-lg">
              Featured: Titan Inspection Services &mdash; built on our highest-converting home inspection structure, wired into Housecall Pro attribution, and delivering a 4&ndash;5&times; ROAS in paid media.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-6 lg:gap-8 items-center">
          {/* Device mockup — pre-rendered desktop + phone */}
          <ScrollReveal animation="slide-right">
            <div className="relative lg:-ml-16 xl:-ml-24 lg:-my-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portfolio/titan-mockup.png"
                alt="Titan Inspection Services on desktop and mobile"
                className="w-full lg:w-[118%] max-w-none h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal>
            <div className="space-y-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-asp-md)] bg-asp-blue/10 border border-asp-blue/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-asp-blue mb-1">{f.title}</h3>
                    <p className="text-asp-blue/70 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 font-bold text-asp-blue hover:text-asp-purple transition-colors"
                >
                  See more work
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
