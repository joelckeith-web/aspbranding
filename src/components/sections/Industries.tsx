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
  search: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  droplet: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4 5.5-6 8.5-6 11a6 6 0 0012 0c0-2.5-2-5.5-6-11z" />
    </svg>
  ),
  bug: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v12m0 0a5 5 0 005-5v-2a5 5 0 00-10 0v2a5 5 0 005 5zM8 8l-2-2m10 2l2-2M5 13H3m18 0h-2M6 19l-2 2m14-2l2 2" />
    </svg>
  ),
  sparkle: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5l-2 2m-7 7l-2 2m11 0l-2-2m-7-7l-2-2M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  leaf: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 21c0-8 5-14 16-16-1 10-7 15-16 16zm0 0c3-5 7-9 12-11" />
    </svg>
  ),
  grid: (
    <svg className="w-6 h-6 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M8 4v16m8-16v16" />
    </svg>
  ),
};

export function Industries({ variant = "dark-transparent" }: { variant?: string }) {
  return (
    <section className="py-10 md:py-12 lg:py-14 2xl:py-24 text-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 2xl:mb-14">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Industries
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-white mb-4">
              Who we help
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We build growth systems for home service businesses — the trades that keep neighborhoods running. Whether you&apos;re in a category below or something adjacent, if you rely on local leads to grow, we&apos;ve probably worked with a shop like yours.
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

        <ScrollReveal>
          <p className="text-center text-white/50 text-sm mt-8 max-w-2xl mx-auto">
            Don&apos;t see your trade listed? We probably still work with shops like yours — reach out and we&apos;ll tell you straight up.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
