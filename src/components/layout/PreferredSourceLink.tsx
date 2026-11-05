"use client";

import Script from "next/script";
import { useEffect } from "react";

// Google's "add as a preferred source" flow:
// https://developers.google.com/search/docs/appearance/preferred-sources
// Manual mode, because the auto-rendered button only scans the DOM on load and
// client-side navigation adds links after that. The href is Google's deeplink,
// so the link still works if the script is blocked or not loaded yet.
type PreferredSourceApi = {
  init(options: { theme?: "light" | "dark"; lang?: string }): void;
  addPreferredSource(): void;
};

declare global {
  interface Window {
    PREFERRED_SOURCE?: Array<(api: PreferredSourceApi) => void>;
  }
}

let api: PreferredSourceApi | null = null;

type Props = { domain: string; label: string; className?: string; pill?: boolean };

// Google's four-colour "G", for the pill version.
function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true" focusable="false">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

const PILL =
  "inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-[13px] sm:px-5 sm:text-sm font-semibold text-[#1f1f1f] no-underline shadow-[0_6px_24px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition hover:bg-[#f1f3f4] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function PreferredSourceLink({ domain, label, className, pill }: Props) {
  useEffect(() => {
    if (api) return;
    (window.PREFERRED_SOURCE = window.PREFERRED_SOURCE || []).push((ps) => {
      if (api) return;
      ps.init({ lang: "en" });
      api = ps;
    });
  }, []);

  return (
    <>
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="lazyOnload"
        preferred-sources-control="manual"
      />
      <a
        href={`https://www.google.com/preferences/source?q=${domain}`}
        target="_blank"
        rel="noopener"
        className={pill ? `${PILL} ${className ?? ""}` : className}
        onClick={(e) => {
          if (!api) return;
          e.preventDefault();
          api.addPreferredSource();
        }}
      >
        {pill && <GoogleG />}
        {label}
      </a>
    </>
  );
}
