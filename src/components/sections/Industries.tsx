"use client";

import { useRef } from "react";
import industriesData from "@/data/industries.json";

export function Industries() {
  const trackRef = useRef<HTMLDivElement>(null);

  const cardStep = () => {
    if (typeof window === "undefined") return 340;
    if (window.innerWidth >= 1024) return 380;
    if (window.innerWidth >= 640) return 340;
    return 300;
  };

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const step = cardStep() * 2;
    const maxLeft = el.scrollWidth - el.clientWidth;
    const atEnd = el.scrollLeft >= maxLeft - 10;
    const atStart = el.scrollLeft <= 10;

    if (dir === "right" && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === "left" && atStart) {
      el.scrollTo({ left: maxLeft, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-24 lg:pb-12 2xl:pt-28 2xl:pb-16 text-white overflow-hidden">
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
                We build growth systems for home service businesses &mdash; the trades that keep neighborhoods running. Whether you&apos;re in a category below or something adjacent, if you rely on local leads to grow, we&apos;ve probably worked with a business like yours.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-asp-purple hover:border-asp-purple hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next"
                className="w-12 h-12 rounded-full bg-asp-purple flex items-center justify-center text-white hover:bg-white hover:text-asp-purple transition-all"
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
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide px-4 sm:px-6 lg:px-8"
        >
          {industriesData.map((industry) => (
            <div
              key={industry.name}
              className="group flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] bg-white/[0.03] border border-asp-purple/20 rounded-[var(--radius-asp-xl)] overflow-hidden hover:border-asp-purple/60 transition-all duration-300"
            >
              <div className="relative h-48 lg:h-56 overflow-hidden bg-asp-surface-navy">
                {industry.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,35,102,0.6) 0%, rgba(76,201,240,0.2) 50%, rgba(159,76,255,0.3) 100%)",
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 font-black text-xl lg:text-2xl text-white drop-shadow-lg">
                  {industry.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-white/65 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <p className="text-center text-white/40 text-sm max-w-2xl mx-auto">
            Don&apos;t see your trade listed? Reach out &mdash; there&apos;s a good chance we&apos;ve worked with a business like yours.
          </p>
        </div>
      </div>
    </section>
  );
}
