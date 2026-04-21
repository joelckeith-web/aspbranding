import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FEATURES = [
  {
    title: "Built on our highest-converting structure",
    body: "Every site we build starts from the structure that's been proven to convert — refined across our home service book of business.",
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
    <section className="relative py-16 md:py-20 lg:py-24 2xl:py-28 bg-asp-surface-light overflow-hidden">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 2xl:mb-16 max-w-3xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Device mockups: desktop + mobile side by side */}
          <ScrollReveal animation="slide-right">
            <div className="relative">
              {/* Desktop frame */}
              <div className="relative mx-auto max-w-[680px]">
                <div className="relative rounded-[1.25rem] bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] p-3 shadow-[0_30px_80px_-20px_rgba(0,35,102,0.35)]">
                  <div className="rounded-[0.85rem] bg-[#f4f4f4] overflow-hidden">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#ececec] border-b border-black/5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <div className="flex-1 ml-3 mr-3">
                        <div className="bg-white rounded-md px-3 py-1 text-[11px] text-gray-400 truncate max-w-[280px]">
                          titaninspectionservices.com
                        </div>
                      </div>
                    </div>
                    {/* Screenshot */}
                    <div className="relative h-[420px] lg:h-[480px] overflow-hidden bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/titan-site-desktop.png"
                        alt="Titan Inspection Services website on desktop"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Laptop foot */}
                  <div className="mx-auto mt-2 h-1.5 w-28 bg-[#1a1a1a] rounded-b-lg" />
                </div>
              </div>

              {/* Mobile frame */}
              <div className="hidden md:block absolute -bottom-4 -right-2 lg:-right-6 w-[170px] lg:w-[200px]">
                <div className="relative rounded-[2rem] bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] p-1.5 shadow-[0_20px_50px_-10px_rgba(0,35,102,0.45)]">
                  <div className="rounded-[1.65rem] bg-white overflow-hidden">
                    {/* Notch */}
                    <div className="relative bg-[#0a0a0a] h-5 flex items-center justify-center">
                      <div className="w-14 h-3 bg-[#0a0a0a] rounded-full" />
                    </div>
                    {/* Mobile screenshot — reuse desktop, zoomed to top portion */}
                    <div className="relative h-[320px] lg:h-[380px] overflow-hidden bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/titan-site-desktop.png"
                        alt="Titan Inspection Services website on mobile"
                        className="w-[220%] h-auto -translate-x-[25%]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
