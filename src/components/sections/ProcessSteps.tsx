import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "Assess Your Current Position",
    subtitle: "Revenue Barrier Analysis",
    description:
      "We analyze your business stage, competition, and growth obstacles to determine which systematic approach will break through your specific revenue barriers.",
    deliverable: "Custom ASP assessment and growth package recommendation",
  },
  {
    num: "02",
    title: "Strategize Your Breakthrough",
    subtitle: "Systematic Growth Planning",
    description:
      "We implement our proven ASP Growth System™ using systematic methods that scale with your business as you grow through each revenue barrier.",
    deliverable: "Complete systematic growth foundation optimized for your revenue stage",
  },
  {
    num: "03",
    title: "Perform & Execute",
    subtitle: "Systematic Implementation",
    description:
      "Your growth system launches with full transparency and systematic optimization. You own all assets and see exactly how each component drives revenue growth as your business scales.",
    deliverable: "Active growth system with transparent performance tracking and scaling capability",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-[#001233] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url(/images/backgrounds/growth-system-bg.png)", backgroundSize: "cover" }}
      />
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              The ASP Process
            </span>
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-white">
              The ASP Growth System&trade;
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — YouTube in phone mockup */}
          <ScrollReveal className="flex justify-center lg:sticky lg:top-32">
            <div className="relative w-[295px] md:w-[320px]">
              <div className="bg-black rounded-[2.5rem] border-4 border-gray-700 overflow-hidden shadow-2xl">
                <div className="h-6 bg-black flex justify-center items-end pb-1">
                  <div className="w-20 h-4 bg-gray-800 rounded-full" />
                </div>
                <div className="aspect-[9/16] bg-gray-900">
                  <iframe
                    src="https://www.youtube.com/embed/EzSbYswcjUM?autoplay=0&mute=1&loop=1&playlist=EzSbYswcjUM&controls=1&modestbranding=1&playsinline=1"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    title="ASP Growth System Video"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Steps (aligned to phone frame height) */}
          <div className="flex flex-col justify-between h-full space-y-6 lg:space-y-0" style={{ minHeight: "calc(320px * 16 / 9 + 2rem)" }}>
            {STEPS.map((step) => (
              <ScrollReveal key={step.num}>
                <div className="bg-white/[0.07] border border-white/10 rounded-[var(--radius-asp-xl)] p-8 lg:p-10">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-asp-gradient-accent flex items-center justify-center shadow-asp-md">
                      <span className="font-black text-lg text-white">{step.num}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-asp-blue-light font-bold text-xs uppercase tracking-widest mb-1">
                        {step.subtitle}
                      </p>
                      <h3 className="font-black text-xl text-white mb-3">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed text-sm mb-4">
                        {step.description}
                      </p>
                      <div className="bg-white/5 rounded-[var(--radius-asp-md)] px-4 py-3 border border-white/10">
                        <p className="text-xs text-asp-blue-light font-bold uppercase tracking-wider mb-1">
                          Deliverable
                        </p>
                        <p className="text-white/80 text-sm">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
