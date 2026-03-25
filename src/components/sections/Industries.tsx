import { ScrollReveal } from "@/components/ui/ScrollReveal";
import industriesData from "@/data/industries.json";

const ICONS: Record<string, React.ReactNode> = {
  thermometer: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m2.96-2.96L17.57 3a2.121 2.121 0 013 3l-5.1 5.1m-2.96 2.96L9 12m2.42 3.17L15 18.54" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-9.003-9A4.125 4.125 0 0112 7.5c0 .414.168.79.44 1.06L15 11.1" />
    </svg>
  ),
  zap: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  home: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h3.375c.621 0 1.125-.504 1.125-1.125V9.75l-8.25-7.5-8.25 7.5v10.125c0 .621.504 1.125 1.125 1.125H8.25z" />
    </svg>
  ),
  scale: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
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
              Industries
            </span>
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Who We Help
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We specialize in marketing for local service businesses and professional firms that depend on leads to grow.
            </p>
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
