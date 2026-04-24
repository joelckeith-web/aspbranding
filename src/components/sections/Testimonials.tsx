"use client";

import { useRef } from "react";
import testimonialData from "@/data/testimonials.json";

type Testimonial = { quote: string; verified: boolean };

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export function Testimonials({ testimonials = testimonialData }: TestimonialsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const verified = testimonials.filter((t) => t.verified);
  if (verified.length === 0) return null;

  const cardStep = () => {
    if (typeof window === "undefined") return 360;
    if (window.innerWidth >= 1024) return 400;
    if (window.innerWidth >= 640) return 360;
    return 320;
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
    <section className="py-12 md:py-14 lg:py-16 2xl:py-20 bg-white overflow-hidden">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 2xl:mb-12">
          <div className="max-w-2xl">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
              From the operators we work with
            </span>
            <h2 className="font-black text-2xl md:text-3xl 2xl:text-4xl text-asp-blue">
              Real operators. Real results.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-asp-blue/20 flex items-center justify-center text-asp-blue hover:bg-asp-purple hover:border-asp-purple hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-asp-purple flex items-center justify-center text-white hover:bg-asp-blue transition-all"
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
        {verified.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] bg-white rounded-[var(--radius-asp-2xl)] border border-gray-100 shadow-asp-sm p-6 lg:p-7 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  className="w-5 h-5 text-warning"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-gray-700 text-sm lg:text-base leading-relaxed font-medium">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
