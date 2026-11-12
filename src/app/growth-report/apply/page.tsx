import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ApplyForm } from "./ApplyForm";
import { SHOW } from "../data";

// PREVIEW BUILD (feat/growth-report). Form is not wired to anything yet.

export const metadata: Metadata = {
  title: "Be a Guest on The Atomic Growth Report",
  description:
    "Apply to be a guest on The Atomic Growth Report, the interview show for home service owners hosted by Joel Keith, CEO of ASP.",
  alternates: { canonical: SHOW.applyPath },
};

const STEPS = [
  { t: "Apply", d: "Tell us about your company and your story. It takes a few minutes." },
  { t: "Short call", d: "If it looks like a fit, we set up a quick call to plan the conversation." },
  { t: "Record", d: "About 45 to 55 minutes on video, following the show's seven sections." },
  { t: "Your episode", d: "Your own episode page with your bio and a link to your website, plus short clips to share." },
];

export default function GrowthReportApply() {
  return (
    <>
      <section className="gr-sec gr-dark" style={{ paddingTop: "clamp(112px, 10vw, 144px)" }}>
        <div className="gr-tex" aria-hidden="true" />
        <div className="gr-wrap">
          <div className="gr-apply">
            <div className="gr-apply-intro" style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
              <Link href={SHOW.path} aria-label="The Atomic Growth Report home" style={{ textDecoration: "none", display: "inline-flex", flexDirection: "column", gap: 2, width: "fit-content" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 12, letterSpacing: "0.3em", color: "#fff" }}>
                  THE ATOMIC GROWTH <i style={{ display: "block", width: 40, height: 3, background: "linear-gradient(90deg,#2E7DFF,#8B5CF6)" }} />
                </span>
                <span className="gr-anton" style={{ fontSize: 56, lineHeight: 0.92, color: "#fff", textShadow: "1px 1px 0 #2E7DFF, 2px 2px 0 #5569F7, 3px 3px 0 #8B5CF6" }}>REPORT</span>
              </Link>
              <h1 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(2rem, 4.4vw, 3.25rem)", lineHeight: 1.05 }}>
                Be a guest on the show
              </h1>
              <p className="gr-lead" style={{ color: "rgba(255,255,255,0.86)" }}>
                Guests are home service owner-operators, typically past their first million in revenue. You talk through
                how your business runs, what is working and where it is stuck. Joel brings two or three moves he would
                make in your seat.
              </p>
            </div>
            <div className="gr-apply-steps" style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {STEPS.map((s, i) => (
                  <li key={s.t} className="gr-reveal" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ flex: "none", width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, background: "linear-gradient(135deg,#002366,#0B3F8C 55%,#4CC9F0 130%)" }}>
                      {i + 1}
                    </span>
                    <span>
                      <strong style={{ display: "block" }}>{s.t}</strong>
                      <span style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>{s.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="gr-note" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span className="gr-ph">[Confirm: no cost to be a guest]</span>
              </p>
            </div>
            <div className="gr-apply-form" style={{ minWidth: 0 }}>
              <Suspense fallback={null}>
                <ApplyForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
