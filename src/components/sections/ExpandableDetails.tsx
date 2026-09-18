"use client";

import { useState } from "react";

interface ExpandableDetailsProps {
  /** Panel header — the click target. */
  heading: string;
  /** Rendered inside the panel. Stays in the DOM when collapsed so it is crawlable. */
  children: React.ReactNode;
  /** Open on first paint. Defaults to collapsed. */
  defaultOpen?: boolean;
}

/**
 * Collapsible detail panel used on the service pages to carry depth without a
 * mile-long page. The content is always present in the HTML — only its height is
 * animated — so crawlers and answer engines still see it while collapsed.
 */
export function ExpandableDetails({
  heading,
  children,
  defaultOpen = false,
}: ExpandableDetailsProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="py-10 md:py-14 bg-asp-surface-light">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[var(--radius-asp-2xl)] border border-gray-200 shadow-asp-md">
          <h2>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="expandable-details-panel"
              className="flex w-full items-center justify-between gap-4 bg-asp-blue px-6 py-5 text-left font-black text-lg text-white transition hover:bg-asp-blue/90 md:px-8 md:text-xl"
            >
              <span>{heading}</span>
              <svg
                className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>

          <div
            id="expandable-details-panel"
            className={`grid transition-all duration-300 ease-out ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="bg-asp-light-blue/5 px-6 py-8 md:px-10 md:py-10">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
