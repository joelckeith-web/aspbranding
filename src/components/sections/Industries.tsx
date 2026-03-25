import { ScrollReveal } from "@/components/ui/ScrollReveal";
import industriesData from "@/data/industries.json";

const ICONS: Record<string, React.ReactNode> = {
  thermometer: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9V3m0 18a4 4 0 100-8 4 4 0 000 8zM9.5 3h5" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  zap: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  home: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  scale: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
};

export function Industries({ variant = "dark-transparent" }: { variant?: string }) {
  return (
    <section className="py-16 md:py-24 text-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Who We Serve
            </span>
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-white">
              Industries We Serve
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((industry) => (
              <div
                key={industry.name}
                className="bg-white/[0.05] border border-white/10 rounded-[var(--radius-asp-xl)] p-8 group hover:bg-white/[0.08] transition-all duration-250"
              >
                <div className="w-12 h-12 rounded-[var(--radius-asp-lg)] bg-asp-blue-light/10 flex items-center justify-center mb-5 group-hover:bg-asp-blue-light/20 transition-colors">
                  {ICONS[industry.icon] || ICONS.search}
                </div>
                <h3 className="font-black text-xl text-white mb-2">{industry.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
