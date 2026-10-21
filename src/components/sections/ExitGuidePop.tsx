"use client";

// Exit-intent offer for paid landing pages. Offers the freest thing (the 5
// Frameworks guide), never "schedule" — someone leaving wasn't ready to talk.
// Desktop only (mouse leaving through the top of the window), once per session.
import { useEffect, useState } from "react";

const SEEN_KEY = "asp-exit-guide-seen";

export function ExitGuidePop() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onLeave(e: MouseEvent) {
      if (e.clientY > 0 || e.relatedTarget) return;
      try {
        if (sessionStorage.getItem(SEEN_KEY)) return;
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // Storage blocked: show once for this page view.
      }
      setOpen(true);
      document.removeEventListener("mouseout", onLeave);
    }
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-asp-black/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-guide-heading"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="relative w-full max-w-md rounded-[var(--radius-asp-xl)] p-[2px] bg-asp-gradient-cta shadow-asp-xl">
        <div className="relative bg-white rounded-[calc(var(--radius-asp-xl)-2px)] p-8">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-3 right-4 text-2xl leading-none text-gray-400 hover:text-gray-700"
            aria-label="Close"
          >
            ×
          </button>
          <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
            Free guide
          </span>
          <h2 id="exit-guide-heading" className="font-black text-2xl text-asp-blue mb-3 leading-tight">
            Before you go, get the free guide
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Get the 5 marketing frameworks we install, starting with how to trace every lead back to
            the channel that produced it.
          </p>
          <a
            href="/frameworks"
            className="block text-center bg-asp-purple text-white font-black py-3.5 px-8 rounded-[var(--radius-asp-lg)] no-underline hover:bg-[#8A34F0] transition-colors"
          >
            Send me the guide
          </a>
        </div>
      </div>
    </div>
  );
}
