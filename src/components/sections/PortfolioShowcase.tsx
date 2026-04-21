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

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Device mockups */}
          <ScrollReveal animation="slide-right">
            <div className="relative">
              {/* Laptop frame — 16:9 */}
              <div className="relative mx-auto max-w-[760px]">
                {/* Lid */}
                <div className="relative rounded-t-[14px] bg-gradient-to-b from-[#2a2a2a] to-[#111]">
                  <div className="relative bg-[#0a0a0a] rounded-t-[12px] px-4 pt-3 pb-0">
                    {/* Camera notch */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#222] mx-auto mb-2" />
                    {/* Screen bezel */}
                    <div className="rounded-t-[6px] bg-black overflow-hidden">
                      <div className="bg-white" style={{ aspectRatio: "16 / 10" }}>
                        {/* Browser chrome */}
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#ececec] border-b border-black/5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                          <div className="flex-1 ml-2 mr-2">
                            <div className="bg-white rounded px-2.5 py-0.5 text-[10px] text-gray-400 truncate">
                              titaninspectionservices.com
                            </div>
                          </div>
                        </div>
                        {/* Screenshot — cropped to top portion only so it fills the 16:10 frame */}
                        <div className="relative w-full overflow-hidden" style={{ height: "calc(100% - 28px)" }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/images/portfolio/titan-site-desktop.png"
                            alt="Titan Inspection Services website"
                            className="absolute top-0 left-0 w-full h-auto"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Base / hinge */}
                <div className="relative">
                  <div className="h-2 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]" />
                  <div className="h-3 mx-[3%] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-[20px] shadow-[0_30px_60px_-20px_rgba(0,35,102,0.45)]">
                    <div className="mx-auto h-1 w-24 bg-[#0a0a0a] rounded-b-full" />
                  </div>
                </div>
              </div>

              {/* Mobile frame — real mobile crop */}
              <div className="hidden md:block absolute -bottom-6 right-0 lg:right-[-10px] w-[150px] lg:w-[180px]">
                <div className="relative rounded-[2rem] bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] p-[6px] shadow-[0_24px_60px_-10px_rgba(0,35,102,0.45)]">
                  <div className="relative rounded-[1.6rem] bg-white overflow-hidden" style={{ aspectRatio: "9 / 19.5" }}>
                    {/* Notch */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-10" />
                    {/* Mobile-cropped screenshot — show narrow center slice from top */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/titan-site-desktop.png"
                        alt="Titan Inspection Services on mobile"
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[380%] h-auto"
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
