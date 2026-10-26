"use client";

import { useState } from "react";

// Nikki Bridge's interview (Viking Heating and Air Conditioning, the client in
// the HVAC case study). Approved for the landing pages and the ASP site, and
// Viking may be named (Joel, 2026-10-26). Shows a local poster first and only
// loads the YouTube player on click, so the page stays fast.
const YOUTUBE_ID = "lxEd909lojg";

export function VikingInterview({ dark = false }: { dark?: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="m-0">
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-asp-xl)] bg-asp-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&playsinline=1`}
            title="Nikki Bridge of Viking Heating and Air Conditioning on working with ASP"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer border-0 p-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/proof/viking-interview-poster.webp)" }}
            aria-label="Play the interview with Nikki Bridge of Viking Heating and Air Conditioning (4 minutes 38 seconds)"
          >
            <span className="absolute inset-0 bg-gradient-to-t from-asp-black/70 via-asp-black/10 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-asp-purple shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] transition-transform group-hover:scale-105">
                <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-4 right-4 rounded-md bg-asp-black/75 px-2 py-1 text-xs font-bold text-white">4:38</span>
          </button>
        )}
      </div>
      <figcaption className={`mt-4 text-sm leading-relaxed ${dark ? "text-white/70" : "text-gray-600"}`}>
        <span className={`font-bold ${dark ? "text-white" : "text-asp-blue"}`}>Nikki Bridge</span>, co-owner of Viking
        Heating and Air Conditioning in Phoenix, on working with ASP.
      </figcaption>
    </figure>
  );
}
