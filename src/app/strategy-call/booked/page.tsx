import type { Metadata } from "next";

// Thank-you page after a verified /strategy-call application. Its own URL so
// Meta can count it as the conversion (no pop-up scheduler). The next step is
// picking a time; one case study warms the visitor up before the call.
//
// The Calendly event below is the only live one on the account and was built
// for signed clients; it wants a cold-prospect version before paid traffic.

export const metadata: Metadata = {
  title: "Pick a Time for Your Strategy Call",
  robots: { index: false, follow: false },
};

const CALENDLY_EMBED =
  "https://calendly.com/joel-keith-asp/onboarding-strategy-session?hide_gdpr_banner=1&primary_color=9f4cff";

export default function StrategyCallBookedPage() {
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
            Application received
          </span>
          <h1 className="font-black text-4xl md:text-5xl leading-[1.08] mb-5">
            Your application is in. <span className="hero-text-gradient">Now pick a time.</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
            Thanks for applying to work with ASP. The next step is your strategy call with Joel, a
            sales conversation to see if we&apos;re a fit. Pick a time on the calendar below.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-asp-surface-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <div className="rounded-[var(--radius-asp-xl)] p-[2px] bg-asp-gradient-cta shadow-asp-xl">
            <div className="bg-white rounded-[calc(var(--radius-asp-xl)-2px)] overflow-hidden">
              <iframe
                src={CALENDLY_EMBED}
                title="Pick a time for your strategy call"
                className="w-full h-[700px] border-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[var(--radius-asp-xl)] bg-asp-surface-navy text-white p-7">
              <p className="text-asp-blue-light text-xs font-bold uppercase tracking-widest mb-3">
                Before our call
              </p>
              <p className="font-black text-4xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-3">
                7% → 18%
              </p>
              <p className="text-white/75 leading-relaxed mb-4">
                Before we talk, take a look at how a multi-location home inspection company went from
                a 7% to an 18% conversion rate in 12 months.
              </p>
              <a href="/case-studies" className="font-bold text-white underline underline-offset-4 decoration-asp-blue-light">
                Read the full case study
              </a>
            </div>

            <div className="rounded-[var(--radius-asp-xl)] bg-white border border-gray-200 p-7 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.15)]">
              <p className="text-asp-purple text-xs font-bold uppercase tracking-widest mb-4">
                What to expect on the call
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {[
                  "You'll talk with Joel, who runs every sales call himself.",
                  "We'll learn about your business and see if we're a fit.",
                  "If we are, we'll cover price and how we'd wire up your tracking.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-gray-700 leading-relaxed">
                    <svg className="w-4 h-4 text-asp-purple shrink-0 mt-1.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
