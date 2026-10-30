import type { Metadata } from "next";
import { YouTubeFacade } from "@/components/sections/YouTubeFacade";

// Confirmation page after a strategy call is booked (StrategyCallCalendar
// sends people here on calendly.event_scheduled). Copy is the reviewed 7FA #26
// draft (Google Doc 1So706aII4aDzZNxDQCjQBs7NjWXfg_nwl6Nc6cmh1hg). No price,
// guarantee or urgency language.

export const metadata: Metadata = {
  title: "Your Strategy Call Is Booked",
  robots: { index: false, follow: false },
};

// Joel's confirmation video (47 seconds, YouTube unlisted, uploaded 2026-10-30).
// Not trade-specific, so it serves every landing page's bookings. Only the
// 16:9 cut is on YouTube so far; the 9:16 cut for phones is still to upload.
const CONFIRMATION_VIDEO_ID = "FXcWufAgrW0";

const HANDY = [
  "Your yearly revenue",
  "Your average job value",
  "What you spend on marketing now",
  "Which CRM you use",
];

const HVAC_RESULTS = [
  { value: "$3M+", label: "Revenue barrier broken" },
  { value: "161+", label: "Google Ads conversions" },
  { value: "244", label: "Call clicks from its Google Business Profile" },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-asp-purple shrink-0 mt-1.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function StrategyCallConfirmedPage() {
  return (
    <main id="primary" className="site-main">
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 20% 20%, rgba(76, 201, 240, 0.18), transparent 65%), radial-gradient(ellipse 55% 50% at 85% 80%, rgba(159, 76, 255, 0.16), transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-32 text-center">
          <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
            You&apos;re booked
          </span>
          <h1 className="font-black text-4xl md:text-5xl leading-[1.08] mb-5">
            Your strategy call with Joel <span className="hero-text-gradient">is booked</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
            Thanks for booking a strategy call with ASP. It&apos;s a sales conversation with Joel, who
            runs every sales call himself, to see if we&apos;re a fit.
          </p>
        </div>
      </section>

      {CONFIRMATION_VIDEO_ID && (
        <section className="pt-12 md:pt-16 bg-asp-surface-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[var(--radius-asp-xl)] bg-asp-surface-navy overflow-hidden shadow-asp-xl">
              <YouTubeFacade
                id={CONFIRMATION_VIDEO_ID}
                title="Before Our Strategy Call: What to Expect"
                poster="/images/video/confirmation-poster.webp"
                duration="0:47"
              />
              <div className="p-5">
                <p className="font-black text-white text-lg leading-snug mb-1">Watch this before our call</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Joel walks through what the call covers, what to have handy and who to bring along.
                  It&apos;s under a minute long.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-asp-surface-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-6">
            <div className="rounded-[var(--radius-asp-xl)] bg-white border border-gray-200 p-7 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.15)]">
              <p className="text-asp-purple text-xs font-bold uppercase tracking-widest mb-3">
                Add it to your calendar
              </p>
              <p className="text-gray-700 leading-relaxed">
                Add the call to your calendar so it doesn&apos;t get buried. The details are in your
                confirmation email. We&apos;ll meet on video so Joel can share his screen. Plan on about
                30 minutes.
              </p>
            </div>

            <div className="rounded-[var(--radius-asp-xl)] bg-white border border-gray-200 p-7 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.15)]">
              <p className="text-asp-purple text-xs font-bold uppercase tracking-widest mb-1">
                What to have handy
              </p>
              <p className="text-gray-500 text-sm mb-4">Rough numbers are fine.</p>
              <ul className="space-y-3 list-none p-0 m-0">
                {HANDY.map((t) => (
                  <li key={t} className="flex gap-3 text-gray-700 leading-relaxed">
                    <Check />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mt-5 pt-5 border-t border-gray-100">
                <span className="font-bold text-asp-blue">Bring your partner.</span> If a partner or
                finance lead makes marketing decisions with you, bring them on the call too.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[var(--radius-asp-xl)] bg-asp-surface-navy text-white p-7">
              <p className="text-asp-blue-light text-xs font-bold uppercase tracking-widest mb-3">
                Regional HVAC company, 12 months
              </p>
              <p className="font-black text-2xl leading-tight mb-5">Broke through the $3M revenue barrier.</p>
              <dl className="grid grid-cols-3 gap-3 mb-5">
                {HVAC_RESULTS.map((r) => (
                  <div key={r.label}>
                    <dt className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple">
                      {r.value}
                    </dt>
                    <dd className="text-white/70 text-xs leading-snug m-0 mt-1">{r.label}</dd>
                  </div>
                ))}
              </dl>
              <a href="/case-studies" className="font-bold text-white underline underline-offset-4 decoration-asp-blue-light">
                Read the full case study
              </a>
            </div>

            <figure className="rounded-[var(--radius-asp-xl)] bg-white border border-gray-200 p-7 m-0">
              <blockquote className="text-asp-blue font-bold text-xl leading-snug m-0">
                &ldquo;I can&apos;t imagine using anyone else for marketing.&rdquo;
              </blockquote>
              <figcaption className="text-gray-500 text-sm mt-3">Emily</figcaption>
            </figure>

            <p className="text-gray-600 text-sm leading-relaxed px-1">
              Need a different time? Use the reschedule link in your confirmation email.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
