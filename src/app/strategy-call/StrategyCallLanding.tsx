import { FAQSection } from "@/components/sections/FAQSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StrategyCallForm } from "@/components/sections/StrategyCallForm";
import { TracedLeadsMock } from "@/components/sections/LeadEngineVisuals";
import { VikingInterview } from "@/components/sections/VikingInterview";
import { YouTubeFacade } from "@/components/sections/YouTubeFacade";
import { ExitGuidePop } from "@/components/sections/ExitGuidePop";
import testimonials from "@/data/testimonials.json";
import caseStudies from "@/data/case-studies.json";
import { PressStrip } from "@/components/sections/PressStrip";

// Paid-traffic landing page built on the 7 Figure Agency niche landing page
// method (2026-10-21): the application form in the hero (Joel, 2026-10-26), proof
// early, one green offer (apply, then pick a time) repeated down the page, one red offer (the 5
// Frameworks guide) for visitors who aren't ready, and an exit pop that offers
// the guide. NOT in the sitemap or nav; noindex. Traffic: Meta, cold email,
// newsletter.
//
// Copy is the citation-verified draft (7fa-course-2026-10/lp). No price, no
// guarantee or refund language, no trade callouts aimed at the reader, no
// family imagery. The strategy call is named plainly as a sales conversation.


export type StrategyCallCopy = {
  heroEyebrow: string;
  heroLead: string;
  heroGradient: string;
  heroSub: string;
  proof: { stat: string; label: string; source: string }[];
  casesEyebrow: string;
  casesHeading: string;
  fitYes: string[];
  fitNo: string[];
  faqs: { q: string; a: string }[];
  reviewsNote?: string;
  dashboardSrc?: { src: string; width: number; height: number };
  dashboardAlt?: string;
  dashboardCaption?: string;
  steps?: { step: string; title: string; body: string }[];
  // Joel's talking-head video, shown right below the proof numbers.
  video?: {
    id: string;
    title: string;
    poster: string;
    eyebrow: string;
    heading: string;
    points: string[];
  };
};

// Tray G. is a law firm; Kevin's quote waits on Joel's sign-off for paid use.
const REVIEWS = testimonials.filter((t) => t.firstName !== "Tray G." && t.firstName !== "Kevin");

const PROOF: StrategyCallCopy["proof"] = [
  { stat: "$3M+", label: "Revenue barrier broken", source: "Regional HVAC company, 12 months" },
  { stat: "$29.27", label: "Cost per Local Service Ads lead", source: "Regional HVAC company, 12 months" },
  { stat: "7% → 18%", label: "Conversion rate", source: "Multi-location home inspection company, 12 months" },
  { stat: "$10K", label: "Monthly ad spend savings", source: "Multi-location home inspection company, 12 months" },
];

const CASES = [
  {
    slug: "hvac-services",
    label: "Regional HVAC company · 12 months",
    challenge:
      "This regional HVAC company had plateaued at $3M in revenue for two years and needed steady lead flow and stronger local search visibility.",
    results: [
      { value: "$3M+", label: "revenue barrier broken" },
      { value: "161+", label: "Google Ads conversions" },
      { value: "$29.27", label: "cost per Local Service Ads lead" },
    ],
  },
  {
    slug: "home-inspection",
    label: "Multi-location home inspection company · 12 months",
    challenge:
      "Ad spend had flattened and the conversion rate was stuck in the single digits while the company worked to grow leads across its service areas.",
    results: [
      { value: "7% → 18%", label: "conversion rate" },
      { value: "$10K", label: "a month saved in ad spend" },
      { value: "+20%", label: "lead growth" },
    ],
    // Joel, 2026-10-21: after the 12-month case study the company broke $4M,
    // then $5M the year after.
    since: "Since then, they broke $4M, then $5M the year after.",
  },
].map((c: { slug: string; label: string; challenge: string; results: { value: string; label: string }[]; since?: string }) => ({ ...c, headline: caseStudies.find((cs) => cs.slug === c.slug)?.headline ?? "" }));

export const STEPS = [
  {
    step: "1",
    title: "We wire the measuring first",
    body: "We set up your CRM, source fields and UTM tags across every digital channel. Then the marketing goes on top of it.",
  },
  {
    step: "2",
    title: "We run the marketing",
    body: "We run your marketing and build the tracking that proves which marketing booked which jobs. Follow the onboarding process and within 30 days you'll see where every digital lead came from.",
  },
  {
    step: "3",
    title: "We review the numbers monthly",
    body: "Every month, we meet with you to go over the numbers. Word of mouth and walk-ins can't be traced by any system, so we say that out loud rather than burying it in the fine print.",
  },
];

const FIT_YES: string[] = [
  "You own a home service business doing over $500K a year.",
  "You have customers, revenue and a crew, and you want more booked jobs.",
  "You want to know which marketing produced your jobs, with every account in your name.",
];

const FIT_NO: string[] = [
  "Your business is doing well under $500K a year in revenue.",
  "You're just starting out and don't have steady customers or a crew yet.",
  "You're not looking for an agency to run your marketing.",
];

const FAQS: StrategyCallCopy["faqs"] = [
  {
    q: "How much does it cost?",
    a: "We'll go over price on the strategy call, once we see if we're a fit. It's one monthly fee.",
  },
  {
    q: "Do I own my accounts?",
    a: "Yes. Every account is in your name, including the website, the ad accounts and the data. Nothing is held hostage.",
  },
  {
    q: "What can you track and what can't you?",
    a: "Follow our onboarding process and within 30 days you'll see where every digital lead came from: which channel, which campaign, which page, and what it became. Word of mouth and walk-ins can't be traced by any system, so we say that out loud.",
  },
  {
    q: "Who will I talk to?",
    a: "You'll talk to Joel Keith, a partner at ASP. He runs every sales call himself, along with every client relationship.",
  },
  {
    q: "Do you only work in certain cities?",
    a: "No. ASP works with home service business owners across the country, so we don't limit our work to one city.",
  },
];

const FRAMEWORKS = [
  "Tracing every lead back to the channel that produced it",
  "Speed to lead: the response times that decide who books the job",
  "Turning a Google Business Profile into a measurable channel",
  "Margin by job type, and what you can afford to spend to win one",
  "The site structure that books work instead of collecting visits",
];

// Same faded-photo and blue-glow treatments as /lead-engine, so the two paid
// pages read as one brand.
function ImageWash({ src, position = "center center" }: { src: string; position?: string }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 bg-cover opacity-[0.22]"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-asp-black via-asp-black/75 to-asp-black" />
    </div>
  );
}

function BlueWash() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none bg-asp-grain">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 18% 12%, rgba(76, 201, 240, 0.30), transparent 62%), radial-gradient(ellipse 60% 55% at 84% 88%, rgba(159, 76, 255, 0.28), transparent 62%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.38) 100%)",
        }}
      />
    </div>
  );
}

function ApplyCTA({ label = "Apply for a strategy call", align = "center" }: { label?: string; align?: "center" | "left" }) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} mt-10`}>
      <a
        href="#apply"
        className="inline-block bg-asp-purple text-white font-black tracking-tight py-4 px-12 rounded-[var(--radius-asp-lg)] no-underline text-lg [text-shadow:0_2px_4px_rgba(0,0,0,0.45)] shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] hover:bg-[#8A34F0] transition-colors"
      >
        {label}
      </a>
    </div>
  );
}

function StepArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 rotate-90 lg:rotate-0" aria-hidden>
      <svg className="w-8 h-8 text-asp-purple" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
      </svg>
    </div>
  );
}

function Check({ muted = false }: { muted?: boolean }) {
  return muted ? (
    <svg className="w-4 h-4 text-white/30 shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg className="w-4 h-4 text-asp-blue-light shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function StrategyCallLanding({ copy }: { copy: StrategyCallCopy }) {
  return (
    <main id="primary" className="site-main">
      {/* Hero — promise left / application form right (Joel, 2026-10-26: form in
          the hero instead of a video; his photo moves down to "Who you'll talk to") */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-[position:70%_center] lg:bg-center opacity-60"
            style={{ backgroundImage: "url(/images/backgrounds/viking-rooftop-crew.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-asp-black/25 via-asp-black/80 to-asp-black lg:bg-gradient-to-r lg:from-asp-black lg:via-asp-black/80 lg:to-asp-black/30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 25% 20%, rgba(76, 201, 240, 0.14), transparent 65%), radial-gradient(ellipse 55% 50% at 80% 80%, rgba(159, 76, 255, 0.12), transparent 65%)",
            }}
          />
        </div>
        {/* Mobile order: headline, form, then the rest (Brady Sticker via Joel,
            2026-10-28: 80–90% of paid traffic is on a phone, so the form starts
            above the fold). Desktop keeps promise left / form right. */}
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-x-14 gap-y-5 lg:gap-y-0 items-start">
            <div className="lg:pt-6 lg:col-start-1 lg:row-start-1">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3 lg:mb-4">
                {copy.heroEyebrow}
              </span>
              <h1 className="font-black text-3xl md:text-5xl 2xl:text-6xl leading-[1.08] lg:mb-5">
                {copy.heroLead}{" "}
                <span className="hero-text-gradient">{copy.heroGradient}</span>
              </h1>
            </div>
            <div id="apply" className="scroll-mt-24 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <StrategyCallForm title="Apply for a strategy call" successHref="/strategy-call/booked" />
            </div>
            <div className="mt-5 lg:mt-0 lg:col-start-1 lg:row-start-2">
              <p className="text-white/75 text-lg leading-relaxed">
                {copy.heroSub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof numbers (Joel, 2026-10-30: white background, not the blue wash) */}
      <section className="relative py-12 md:py-14 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {copy.proof.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 text-center shadow-[0_12px_32px_-8px_rgba(15,23,42,0.15)]"
                >
                  <p className="font-black text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-2">
                    {p.stat}
                  </p>
                  <p className="text-asp-blue font-bold text-sm mb-2">{p.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.source}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Joel's video (Joel, 2026-10-30: one of the top sections, not the hero).
          Text left, player right on desktop; stacked on phones. */}
      {copy.video && (
        <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
          <BlueWash />
          <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                {copy.video.eyebrow}
              </span>
              <h2 className="font-black text-3xl md:text-4xl leading-[1.1] mb-6">{copy.video.heading}</h2>
              <ul className="space-y-4 list-none p-0 m-0">
                {copy.video.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <Check />
                    <span className="text-white/80 leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
              <ApplyCTA align="left" />
            </div>
            <div className="lg:col-span-7">
              <YouTubeFacade
                id={copy.video.id}
                title={copy.video.title}
                poster={copy.video.poster}
              />
            </div>
          </div>
        </section>
      )}

      {/* Recognition + press: own section; no outbound links on this paid-traffic page */}
      <PressStrip links={false} />

      {/* Reviews — right-to-left marquee, same as /lead-engine */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                In their words
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
                What our clients say
              </h2>
              {copy.reviewsNote && <p className="text-gray-500 text-sm mt-3">{copy.reviewsNote}</p>}
            </div>
          </ScrollReveal>
        </div>
        <div className="review-marquee-wrap overflow-hidden">
          <div className="review-marquee flex w-max items-start">
            {[...REVIEWS, ...REVIEWS].map((t, i) => (
              <div key={i} className="pr-5" aria-hidden={i >= REVIEWS.length ? true : undefined}>
                <blockquote className="w-[300px] md:w-[360px] rounded-[var(--radius-asp-xl)] bg-white border border-gray-200 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.15)] p-6">
                  <div className="flex gap-0.5 mb-3" aria-label="5 star rating">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{t.quote}</p>
                  <footer className="text-asp-blue font-bold text-sm">— {t.firstName}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The problem — copy left, real dashboard right */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <ImageWash src="/images/backgrounds/team-at-work.jpg" position="center 40%" />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                The problem
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
                Most owners can&apos;t tell where their last ten jobs came from.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-5">
                Most home service owners can&apos;t tell you where their last ten jobs came from. It
                might not be your fault. Most of the time, nobody ever wired it up.
              </p>
              <p className="text-white/60 leading-relaxed">
                The website doesn&apos;t talk to the CRM, and the Business Profile has no tracking on
                it. When the phone rings, nothing records why. That makes it hard to know which
                marketing is worth paying for.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <TracedLeadsMock {...copy.dashboardSrc} alt={copy.dashboardAlt} caption={copy.dashboardCaption} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-surface-navy text-white overflow-hidden">
        <ImageWash src="/images/backgrounds/hero-trades-2.jpg" position="center 35%" />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                How it works
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl">
                Tracking first, then the marketing on top.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
              {(copy.steps ?? STEPS).map((s, i) => (
                <div key={s.step} className="contents">
                  {i > 0 && <StepArrow />}
                  <div className="flex-1 self-stretch rounded-[var(--radius-asp-xl)] border border-white/10 bg-asp-surface-navy/80 p-7 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
                    <div className="font-black text-3xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-3">
                      {s.step}
                    </div>
                    <h3 className="font-black text-lg text-white mb-2">{s.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <ApplyCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* Client interview (Joel, 2026-10-26: don't imply ASP has only one HVAC client) */}
      <section className="py-14 md:py-16 lg:py-20 bg-asp-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Client interview
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
                Hear it from one of our clients.
              </h2>
            </div>
            <VikingInterview />
          </ScrollReveal>
          <ApplyCTA />
        </div>
      </section>

      {/* Case studies */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                {copy.casesEyebrow}
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
                {copy.casesHeading}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {CASES.map((c) => (
                <article
                  key={c.slug}
                  className="flex flex-col rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-8 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.18)]"
                >
                  <p className="text-asp-purple text-xs font-bold uppercase tracking-widest mb-3">{c.label}</p>
                  <h3 className="font-black text-2xl md:text-3xl text-asp-blue leading-tight mb-3">{c.headline}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{c.challenge}</p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {c.results.map((r) => (
                      <div key={r.label} className="rounded-[var(--radius-asp-lg)] bg-asp-surface-light p-4 text-center">
                        <p className="font-black text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue to-asp-purple mb-1">
                          {r.value}
                        </p>
                        <p className="text-gray-600 text-xs leading-snug">{r.label}</p>
                      </div>
                    ))}
                  </div>
                  {c.since && (
                    <p className="flex items-center gap-3 rounded-[var(--radius-asp-lg)] bg-asp-surface-navy text-white font-bold px-4 py-3 mb-6">
                      <svg className="w-5 h-5 text-asp-blue-light shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                      {c.since}
                    </p>
                  )}
                  <a href={`/case-studies#${c.slug}`} className="mt-auto font-bold text-asp-blue underline underline-offset-4 hover:text-asp-purple transition-colors">
                    Read the full case study
                  </a>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ownership + fit */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-blue text-white overflow-hidden">
        <BlueWash />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What you own
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
                Every account is in your name.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-5">
                Price is the question we hear most, and we&apos;ll cover it on the strategy call. With
                ASP, every account is in your name: the website, the ad accounts and the data. Nothing
                is held hostage.
              </p>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                We run the marketing and build the tracking that proves which marketing booked which
                jobs. Every month, we meet with you to go over the numbers, so you can see the results
                for yourself.
              </p>
              <p className="inline-flex items-center gap-3 rounded-[var(--radius-asp-lg)] border border-white/20 bg-white/[0.06] px-5 py-3 font-bold text-sm">
                <Check />
                ASP is an official Housecall Pro Affiliate Partner.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-[var(--radius-asp-xl)] border border-white/10 bg-white/[0.04] overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
                <div className="p-6 border-l-2 border-l-asp-blue-light bg-asp-blue-light/[0.07]">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-asp-blue-light mb-4">Who this is for</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {copy.fitYes.map((f) => (
                      <li key={f} className="flex gap-3 text-white font-medium leading-relaxed">
                        <Check />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border-t border-white/10">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Who this is not for</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {copy.fitNo.map((f) => (
                      <li key={f} className="flex gap-3 text-white/55 leading-relaxed">
                        <Check muted />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FAQSection items={copy.faqs} eyebrow="Before you apply" heading="Common questions." compact />

      {/* Who you'll talk to — Joel's photo, then back up to the hero form */}
      <section className="relative py-14 md:py-16 lg:py-24 bg-asp-surface-navy text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 15% 20%, rgba(76, 201, 240, 0.22), transparent 62%), radial-gradient(ellipse 55% 55% at 88% 85%, rgba(159, 76, 255, 0.24), transparent 62%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-2">
              <div className="relative mx-auto max-w-sm rounded-[var(--radius-asp-xl)] overflow-hidden bg-gradient-to-br from-asp-blue-light/40 via-asp-blue/50 to-asp-purple/60 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/team/joel-cutout.webp"
                  alt="Joel Keith, partner at ASP"
                  width={900}
                  height={1344}
                  loading="lazy"
                  className="relative block w-full h-auto"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-3">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Who you&apos;ll talk to
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
                You&apos;ll talk to Joel.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-5">
                Joel Keith is a partner at ASP. He runs every sales call himself, along with every
                client relationship.
              </p>
              <p className="text-white/75 text-lg leading-relaxed">
                A strategy call is a sales conversation with Joel to see if we&apos;re a fit. Fill out
                the short application, then pick a time on his calendar.
              </p>
              <ApplyCTA align="left" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Secondary path — the free guide. Deliberately not a co-equal CTA. */}
      <section id="guide" className="py-14 md:py-16 lg:py-20 bg-white border-t border-gray-200 scroll-mt-24 overflow-hidden">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Print mockup of the real guide: the cover standing, pages 4-5 open beside it (Joel, 2026-10-30) */}
          <div className="lg:col-span-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/guide/frameworks-print-mockup.webp"
              alt="Printed copies of The 5 Marketing Frameworks for Trades Businesses: one standing with the cover showing, one open to The Lead Source Map"
              width={1200}
              height={701}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Free guide
              </span>
              <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-3">
                The 5 marketing frameworks we install for trades businesses
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you&apos;re not ready to talk yet, get the five frameworks we install, sent straight
                to your email.
              </p>
              <ol className="space-y-3 list-none p-0 m-0 mb-8">
                {FRAMEWORKS.map((f, i) => (
                  <li key={f} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-asp-blue-light to-asp-purple font-black text-xs text-white">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ol>
              <a
                href="/frameworks"
                className="inline-block border-2 border-asp-blue text-asp-blue font-bold py-3 px-8 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors no-underline"
              >
                Send me the guide
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ExitGuidePop />
    </main>
  );
}

export const DEFAULT_COPY: StrategyCallCopy = {
  heroEyebrow: "For home service business owners",
  heroLead: "Within 30 days of onboarding,",
  heroGradient: "see where every digital lead came from.",
  heroSub:
    "Follow our onboarding process and within 30 days you'll see which channel, campaign and page produced each digital lead. We run your marketing and build the tracking that proves which marketing booked which jobs.",
  proof: PROOF,
  casesEyebrow: "Real results",
  casesHeading: "Two published case studies.",
  fitYes: FIT_YES,
  fitNo: FIT_NO,
  faqs: FAQS,
};
