import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FrameworksForm } from "@/components/sections/FrameworksForm";

// Gated lead-magnet page. NOT in the sitemap or nav; noindex — traffic
// arrives from paid campaigns only.
//
// This is the top of the paid funnel. The ads (C1–C4) point HERE, not at the
// application on /lead-engine. The job of this page is one thing: get the
// email. It does not sell the $2,997 install, and it does not carry revenue
// figures — a cold visitor who has never heard of ASP reads a big number as
// a pitch, and Meta reads it as an outcome claim.
//
// Copy rules from docs/joel-voice-profile.md:
//   - One statement per section header. Never two sentences stacked.
//   - No "not X — Y" antithesis as a tic. No riddle sentences.
//   - Describe the reader's category, never diagnose the reader.
//
// COMPLIANCE: framework 4 uses budgeting / margin / breakeven / pricing
// vocabulary only. ASP is not licensed for financial planning or advice.

export const metadata: Metadata = {
  title: "The 5 Marketing Frameworks for Trades Businesses — Free Guide",
  description:
    "The five marketing frameworks ASP installs for trades businesses: the lead source map, speed to lead, the Google Business Profile engine, the money math, and the site that books work. Free, sent straight to your inbox.",
  robots: { index: false, follow: false },
};

const FRAMEWORKS = [
  {
    n: "01",
    title: "The Lead Source Map",
    body:
      "How to trace every digital lead back to the channel that produced it — paid search, paid social, organic, Business Profile, referral, direct — and why the Business Profile is the one most businesses get wrong.",
  },
  {
    n: "02",
    title: "The Speed-to-Lead System",
    body:
      "The response-time rules that decide who books the job. What to measure, what to automate, and what has to stay human.",
  },
  {
    n: "03",
    title: "The Google Business Profile Engine",
    body:
      "Reviews, posts and UTM tagging that turn a Profile from a listing into a channel you can actually measure.",
  },
  {
    n: "04",
    title: "The Money Math",
    body:
      "Margin by job type, breakeven, and what you can afford to spend to win a job.",
  },
  {
    n: "05",
    title: "The Site That Books Work",
    body:
      "The page structure that turns a trades visitor into a booked job, and the four things that cost most trades sites their conversions.",
  },
];

export default function FrameworksPage() {
  return (
    <main className="bg-asp-black">
      {/* HERO — the ask sits beside the promise, above the fold. */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
            <ScrollReveal animation="slide-right">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Free guide for trades businesses
              </span>
              <h1 className="font-black text-4xl md:text-5xl 2xl:text-6xl leading-[1.05] mb-6">
                The 5 marketing frameworks we install for trades businesses.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Same frameworks we build for our clients. Yours free, sent straight to your inbox.
              </p>
              <p className="text-white/60 leading-relaxed">
                You can act on all five without us. That is what makes them worth reading.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={100}>
              <div id="get">
                <FrameworksForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              What is inside
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
              Five frameworks, in the order they should be built.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The first one makes the other four measurable. Start there.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {FRAMEWORKS.map((f, i) => (
              <ScrollReveal key={f.n} delay={i * 60}>
                <div className="flex gap-5 rounded-[var(--radius-asp-xl)] border border-gray-200 bg-gray-50/60 p-6 lg:p-7">
                  <span className="font-black text-2xl text-asp-blue/30 shrink-0 leading-none pt-1">
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-black text-lg text-asp-blue mb-2 leading-snug">
                      {f.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR — filter, never diagnose. */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Who this is for
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              Home service businesses with customers, revenue and a crew.
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              Home inspection, landscaping, kitchen and bath remodel, outdoor living, flooring,
              appliance repair — the frameworks are the same. The guide assumes you already have
              work coming in and want to know where it comes from.
            </p>
            <a
              href="#get"
              className="inline-block bg-asp-gradient-cta text-white font-semibold px-8 py-4 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all"
            >
              Send me the 5 frameworks
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
