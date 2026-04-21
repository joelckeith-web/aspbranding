"use client";

import { useRef, useState, useEffect } from "react";
import industriesData from "@/data/industries.json";

const ICONS: Record<string, React.ReactNode> = {
  thermometer: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  wrench: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m2.96-2.96L17.57 3a2.121 2.121 0 013 3l-5.1 5.1m-2.96 2.96L9 12m2.42 3.17L15 18.54" />
    </svg>
  ),
  zap: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  home: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h3.375c.621 0 1.125-.504 1.125-1.125V9.75l-8.25-7.5-8.25 7.5v10.125c0 .621.504 1.125 1.125 1.125H8.25z" />
    </svg>
  ),
  search: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  droplet: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4 5.5-6 8.5-6 11a6 6 0 0012 0c0-2.5-2-5.5-6-11z" />
    </svg>
  ),
  bug: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v12m0 0a5 5 0 005-5v-2a5 5 0 00-10 0v2a5 5 0 005 5zM8 8l-2-2m10 2l2-2M5 13H3m18 0h-2M6 19l-2 2m14-2l2 2" />
    </svg>
  ),
  sparkle: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5l-2 2m-7 7l-2 2m11 0l-2-2m-7-7l-2-2M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  leaf: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 21c0-8 5-14 16-16-1 10-7 15-16 16zm0 0c3-5 7-9 12-11" />
    </svg>
  ),
  grid: (
    <svg className="w-7 h-7 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M8 4v16m8-16v16" />
    </svg>
  ),
};

export function Industries() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateNav = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateNav();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    return () => {
      el.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth > 1024 ? 360 : el.clientWidth > 640 ? 320 : 280;
    el.scrollBy({ left: dir === "left" ? -cardWidth * 2 : cardWidth * 2, behavior: "smooth" });
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 2xl:py-28 text-white overflow-hidden bg-asp-black">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(76, 201, 240, 0.15), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(159, 76, 255, 0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 2xl:mb-14">
            <div className="max-w-2xl">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Industries
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-white mb-4">
                Who we help
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We build growth systems for home service businesses — the trades that keep neighborhoods running. Whether you&apos;re in a category below or something adjacent, if you rely on local leads to grow, we&apos;ve probably worked with a shop like yours.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canLeft}
                aria-label="Previous"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-asp-blue-light hover:border-asp-blue-light hover:text-asp-black transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-white/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canRight}
                aria-label="Next"
                className="w-12 h-12 rounded-full bg-asp-blue-light flex items-center justify-center text-asp-black hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hide px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-var(--spacing-wide))/2))]"
        >
          {industriesData.map((industry) => (
            <div
              key={industry.name}
              className="flex-shrink-0 snap-start w-[280px] sm:w-[320px] lg:w-[340px] bg-white/[0.03] border border-asp-blue-light/20 rounded-[var(--radius-asp-xl)] p-7 hover:border-asp-blue-light/60 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-[var(--radius-asp-lg)] bg-asp-blue-light/10 border border-asp-blue-light/20 flex items-center justify-center mb-5">
                {ICONS[industry.icon] || ICONS.search}
              </div>
              <h3 className="font-black text-xl text-white mb-3">{industry.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <p className="text-center text-white/40 text-sm max-w-2xl mx-auto">
            Don&apos;t see your trade listed? Reach out — there&apos;s a good chance we&apos;ve worked with a shop like yours.
          </p>
        </div>
      </div>
    </section>
  );
}
