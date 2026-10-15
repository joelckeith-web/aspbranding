"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Element Bank "count-up number" for the web. The final value is rendered on
 * the server (crawlers and no-JS readers see the real figure); in view, the
 * leading number ticks up from zero once. Non-numeric values render as-is.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const m = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!m || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, num, post] = m;
    const target = parseFloat(num.replace(/,/g, ""));
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    const fmt = (n: number) =>
      `${pre}${n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: num.includes(",") })}${post}`;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 1200);
          const eased = 1 - Math.pow(1 - p, 4); // decelerate, never overshoot
          setText(fmt(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setText(fmt(0));
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
