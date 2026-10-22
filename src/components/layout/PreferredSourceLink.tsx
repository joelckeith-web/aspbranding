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

type Props = { domain: string; label: string; className?: string };

export function PreferredSourceLink({ domain, label, className }: Props) {
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
        className={className}
        onClick={(e) => {
          if (!api) return;
          e.preventDefault();
          api.addPreferredSource();
        }}
      >
        {label}
      </a>
    </>
  );
}
