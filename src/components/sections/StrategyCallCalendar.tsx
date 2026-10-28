"use client";

// Calendly inline embed for the /strategy-call funnel. When the booking
// completes, Calendly posts calendly.event_scheduled to this window: that is
// the Meta "Schedule" conversion, and the visitor moves on to the
// confirmation page. No Calendly redirect setting is needed for this path.

import { useEffect, useState } from "react";
import { isTestLead } from "@/lib/test-lead";

export const STRATEGY_CALL_CALENDLY = "https://calendly.com/joel-keith-asp/discovery-call";

// Tall enough for the month grid plus the time list before Calendly reports
// its real height.
const MIN_HEIGHT = 1000;

export function StrategyCallCalendar() {
  const [src, setSrc] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    let name = "";
    let mail = "";
    try {
      const saved = JSON.parse(sessionStorage.getItem("asp_apply") || "{}");
      name = typeof saved.name === "string" ? saved.name : "";
      mail = typeof saved.email === "string" ? saved.email : "";
    } catch {}
    setEmail(mail);
    const params = new URLSearchParams({
      embed_type: "Inline",
      embed_domain: window.location.host,
      hide_gdpr_banner: "1",
      primary_color: "9f4cff",
    });
    if (name) params.set("name", name);
    if (mail) params.set("email", mail);
    setSrc(`${STRATEGY_CALL_CALENDLY}?${params.toString()}`);
  }, []);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;
      const data = e.data as { event?: string; payload?: { height?: string } } | undefined;
      // Calendly reports its content height on every step; size the box to it
      // so the calendar and the time list never scroll inside the frame
      // (Joel, 2026-10-28).
      if (data?.event === "calendly.page_height") {
        const h = parseInt(String(data.payload?.height ?? ""), 10);
        if (h > 0) setHeight(Math.max(MIN_HEIGHT, h + 20));
        return;
      }
      if (data?.event !== "calendly.event_scheduled") return;
      if (!isTestLead(email)) {
        window.fbq?.("track", "Schedule", { content_name: "Strategy Call" });
        window.gtag?.("event", "strategy_call_booked", { event_category: "lead_engine" });
      }
      // Give the pixel a moment to send before leaving the page.
      window.setTimeout(() => window.location.assign("/strategy-call/confirmed"), 600);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [email]);

  return (
    <>
      {src ? (
        <iframe
          src={src}
          title="Pick a time for your strategy call"
          className="w-full block"
          style={{ height, border: 0 }}
        />
      ) : (
        <div style={{ height: MIN_HEIGHT }} aria-hidden />
      )}
      <p className="text-gray-400 text-xs px-5 py-3">
        Calendar not loading?{" "}
        <a href={STRATEGY_CALL_CALENDLY} target="_blank" rel="noopener noreferrer" className="underline">
          Open it in a new tab
        </a>
        .
      </p>
    </>
  );
}
