import type { Metadata } from "next";
import { StrategyCallForm } from "@/components/sections/StrategyCallForm";
import { YouTubeLite } from "@/components/sections/YouTubeLite";

// Short-page A/B variant of /strategy-call/hvac (Joel, 2026-10-30), built to
// Hormozi's landing page structure: an outcome headline, a one-line subhead,
// Joel's HVAC video in the hero, the form, three objection bullets, then a little
// proof and the legal footer. No guide offer, no exit pop, no review marquee.
// Same form, pixel event, API and booking flow as the control, so the only
// variable is the page. Copy reuses the citation-verified HVAC page wording.
// Noindex, not in the sitemap or nav.

export const metadata: Metadata = {
  title: "Strategy Call for HVAC Owners",
  description:
    "See where every digital lead came from within 30 days of onboarding. Talk with Joel, a partner at ASP, about whether we're a fit for your HVAC company.",
  keywords: ["HVAC marketing", "HVAC lead tracking", "HVAC marketing agency"],
  robots: { index: false, follow: false },
};

// Placeholder order until Joel confirms the top three from his sales calls.
// Price is the one the page already names as the question heard most.
const OBJECTIONS = [
  {
    q: "What does it cost?",
    a: "One monthly fee. We'll go over price on the strategy call, once we see if we're a fit.",
  },
  {
    q: "Do I own my accounts?",
    a: "Yes. Every account is in your name: the website, the ad accounts and the data. Nothing is held hostage.",
  },
  {
    q: "How do you track phone calls?",
    a: "Call tracking records the call and shows where it came from, like the Google ad or keyword. For calls tracking can't see, your office asks how they found you.",
  },
];

const PROOF = [
  { stat: "$3M+", label: "Revenue barrier broken" },
  { stat: "17.4%", label: "Google Ads conversion rate, Q3 2026" },
  { stat: "$29.27", label: "Cost per Local Service Ads lead" },
];

export default function StrategyCallHvacShortPage() {
  return (
    <main id="primary" className="site-main">
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 25% 20%, rgba(76, 201, 240, 0.14), transparent 65%), radial-gradient(ellipse 55% 50% at 80% 80%, rgba(159, 76, 255, 0.12), transparent 65%)",
            }}
          />
        </div>
        {/* Mobile order: headline, subhead, form, then the video.
            Desktop: promise + video left, form right (Joel, 2026-10-30: the
            HVAC video in the hero, like acquisition.com; no dashboard here). */}
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-x-14 gap-y-6 lg:gap-y-0 items-start">
            <div className="lg:col-start-1 lg:row-start-1">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3 lg:mb-4">
                Strategy call for HVAC owners
              </span>
              <h1 className="font-black text-3xl md:text-5xl 2xl:text-6xl leading-[1.08] mb-4">
                HVAC owners:{" "}
                <span className="hero-text-gradient">
                  see where every digital lead came from within 30 days of onboarding.
                </span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed lg:mb-8">
                We run your marketing and build the tracking that proves which marketing booked which jobs.
              </p>
            </div>
            <div id="apply" className="scroll-mt-24 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <StrategyCallForm
                title="Book a strategy call with Joel"
                submitLabel="Pick my call time"
                consentText="Yes, ASP can email me about this strategy call and send marketing updates. I can unsubscribe any time."
                successHref="/strategy-call/booked"
              />
              <p className="text-white/50 text-sm mt-4 text-center">
                For HVAC companies doing about $65K or more a month with a 3-5 person team.
              </p>
            </div>
            <div className="lg:col-start-1 lg:row-start-2">
              <YouTubeLite
                id="3lnb2z6PenM"
                title="HVAC Owners: Do You Know Which Marketing Made the Phone Ring?"
                duration="2:15"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three objections, most common first */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-6 list-none p-0 m-0">
            {OBJECTIONS.map((o) => (
              <li key={o.q} className="flex gap-4">
                <svg className="w-5 h-5 text-asp-purple shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-black text-lg text-asp-blue mb-1">{o.q}</p>
                  <p className="text-gray-600 leading-relaxed">{o.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compact proof, then back to the form */}
      <section className="py-12 md:py-14 bg-asp-surface-navy text-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm mb-6">A regional HVAC company we work with</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
            {PROOF.map((p) => (
              <div key={p.label} className="rounded-[var(--radius-asp-xl)] border border-white/10 p-5">
                <p className="font-black text-3xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-1">
                  {p.stat}
                </p>
                <p className="text-white/70 text-sm">{p.label}</p>
              </div>
            ))}
          </div>
          <a
            href="#apply"
            className="inline-block bg-asp-purple text-white font-black tracking-tight py-4 px-10 rounded-[var(--radius-asp-lg)] no-underline text-lg hover:bg-[#8A34F0] transition-colors"
          >
            Book a strategy call with Joel
          </a>
        </div>
      </section>
    </main>
  );
}
