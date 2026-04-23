"use client";

import { useState } from "react";
import Link from "next/link";

type Option = { label: string; points: number };
type Question = {
  id: string;
  eyebrow: string;
  prompt: string;
  helper?: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "revenue",
    eyebrow: "Question 1 of 7",
    prompt: "What's your annual revenue today?",
    options: [
      { label: "Under $500K", points: 1 },
      { label: "$500K – $1M", points: 2 },
      { label: "$1M – $3M", points: 3 },
      { label: "$3M – $5M", points: 4 },
      { label: "$5M+", points: 5 },
    ],
  },
  {
    id: "spend",
    eyebrow: "Question 2 of 7",
    prompt: "What are you spending on marketing per month?",
    helper: "Ads + agency fees + tools combined.",
    options: [
      { label: "Under $1,000", points: 1 },
      { label: "$1,000 – $3,000", points: 2 },
      { label: "$3,000 – $7,500", points: 3 },
      { label: "$7,500 – $15,000", points: 4 },
      { label: "$15,000+", points: 5 },
    ],
  },
  {
    id: "crm",
    eyebrow: "Question 3 of 7",
    prompt: "What's your current CRM situation?",
    options: [
      { label: "Already on Housecall Pro", points: 3 },
      { label: "Using a different CRM (ServiceTitan, Jobber, etc.)", points: 2 },
      { label: "Spreadsheets / pen and paper", points: 1 },
      { label: "Considering switching", points: 2 },
    ],
  },
  {
    id: "bottleneck",
    eyebrow: "Question 4 of 7",
    prompt: "Where's the biggest bottleneck right now?",
    options: [
      { label: "Not enough leads", points: 1 },
      { label: "Leads come in but we miss or lose them", points: 2 },
      { label: "We close jobs but margin is thin", points: 3 },
      { label: "Growth is plateauing — need strategic direction", points: 4 },
    ],
  },
  {
    id: "team",
    eyebrow: "Question 5 of 7",
    prompt: "Who's handling marketing inside your business today?",
    options: [
      { label: "Just me / the owner", points: 1 },
      { label: "Part-time office admin / VA", points: 2 },
      { label: "One dedicated in-house person", points: 3 },
      { label: "Small in-house team", points: 4 },
    ],
  },
  {
    id: "ambition",
    eyebrow: "Question 6 of 7",
    prompt: "What's the growth plan for the next 12 months?",
    options: [
      { label: "Hold steady — stabilize what we have", points: 1 },
      { label: "Grow 20-40% organically", points: 2 },
      { label: "Double revenue", points: 3 },
      { label: "Scale hard — possibly through acquisition", points: 4 },
    ],
  },
  {
    id: "timeline",
    eyebrow: "Question 7 of 7",
    prompt: "When are you looking to make a move?",
    options: [
      { label: "Just exploring for now", points: 0 },
      { label: "Next 3–6 months", points: 1 },
      { label: "Next 1–3 months", points: 2 },
      { label: "As soon as possible", points: 3 },
    ],
  },
];

type Tier = {
  name: string;
  price: string;
  headline: string;
  body: string;
  includes: string[];
  calendlyUrl: string;
  accent: "blue" | "purple" | "gradient";
};

const TIERS: Record<string, Tier> = {
  foundation: {
    name: "Foundation",
    price: "$2,500 / month",
    headline: "Start building your growth engine.",
    body: "You're early in building the real marketing foundation. Foundation gets you on top of local SEO, GBP, and the reporting that proves what's working — plus the HCP attribution layer so every lead is traceable to revenue. Most operators at this stage add the website add-on too.",
    includes: [
      "Local SEO Pro + Google Business Profile",
      "StormFront weather-triggered content",
      "Content Creation Package",
      "Housecall Pro attribution setup",
      "Monthly performance report",
    ],
    calendlyUrl: "/contact?topic=foundation",
    accent: "blue",
  },
  growth: {
    name: "Growth",
    price: "$3,850 / month",
    headline: "Scale paid and organic together.",
    body: "You have real revenue to protect and a real growth target to hit. Growth adds the paid media layer (Google Ads, Meta, LSA), a custom website build, full social management, and the HCP AI configuration — CSR AI, dispatch, reporting — that makes every channel attributable.",
    includes: [
      "Everything in Foundation",
      "Custom website build (included)",
      "Paid media (Google Ads, Meta, LSA)",
      "HCP AI onboarding (CSR AI, dispatch, reporting)",
      "Fractional CMO-level direction",
    ],
    calendlyUrl: "/contact?topic=growth",
    accent: "gradient",
  },
  premier: {
    name: "Premier",
    price: "Custom — contact for details",
    headline: "Run marketing, ops, and AI like an in-house team.",
    body: "At your scale, marketing isn't a retainer — it's a department. Premier gives you full-funnel ownership, custom AI integrations beyond HCP, dedicated account leadership, and quarterly business reviews tied to revenue planning.",
    includes: [
      "Everything in Growth",
      "Full-funnel marketing ownership",
      "Custom AI integrations beyond HCP",
      "Quarterly business review + revenue planning",
      "Dedicated account leadership",
    ],
    calendlyUrl: "/contact?topic=premier",
    accent: "purple",
  },
  fractional: {
    name: "Fractional C-Suite",
    price: "Custom",
    headline: "Senior-level marketing leadership at the executive table.",
    body: "You're running a $5M+ business that needs more than a marketing retainer — you need senior leadership on budget, financial planning, and channel-level P&L. Fractional is a deeper engagement for operators who are running marketing like a business unit.",
    includes: [
      "Senior marketing leadership embedded at the exec level",
      "Budget + P&L ownership",
      "Channel-level strategic direction",
      "Acquisition and expansion planning",
      "Board-ready reporting",
    ],
    calendlyUrl: "/contact?topic=fractional",
    accent: "purple",
  },
};

function pickTier(answers: Record<string, number>): keyof typeof TIERS {
  const revenue = answers["revenue"] ?? 0;
  const spend = answers["spend"] ?? 0;
  const team = answers["team"] ?? 0;
  const bottleneck = answers["bottleneck"] ?? 0;
  const ambition = answers["ambition"] ?? 0;

  if (revenue >= 5 && (team >= 3 || bottleneck === 4)) return "fractional";
  if (revenue >= 4 || (spend >= 4 && ambition >= 3)) return "premier";
  if (revenue >= 2 && spend >= 2) return "growth";
  return "foundation";
}

export function DiagnosticQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const total = QUESTIONS.length;
  const progress = step === -1 ? 0 : step >= total ? 100 : Math.round((step / total) * 100);

  const selectOption = (questionId: string, points: number) => {
    const next = { ...answers, [questionId]: points };
    setAnswers(next);
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      setStep(total);
    }
  };

  const restart = () => {
    setAnswers({});
    setStep(-1);
  };

  const tierKey = step >= total ? pickTier(answers) : null;
  const tier = tierKey ? TIERS[tierKey] : null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-asp-black text-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(76, 201, 240, 0.18), transparent 70%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(159, 76, 255, 0.14), transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro screen */}
        {step === -1 || step === 0 ? null : null}

        {/* Progress bar */}
        {step >= 0 && step < total && (
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
              <span>Growth Diagnostic</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-asp-blue-light to-asp-purple transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Questions */}
        {step >= 0 && step < total && (
          <div>
            <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              {QUESTIONS[step].eyebrow}
            </div>
            <h1 className="font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-3">
              {QUESTIONS[step].prompt}
            </h1>
            {QUESTIONS[step].helper && (
              <p className="text-white/60 mb-8">{QUESTIONS[step].helper}</p>
            )}
            {!QUESTIONS[step].helper && <div className="mb-8" />}

            <div className="space-y-3">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => selectOption(QUESTIONS[step].id, opt.points)}
                  className="w-full text-left rounded-[var(--radius-asp-lg)] bg-white/[0.04] border border-white/10 hover:border-asp-blue-light hover:bg-white/[0.08] transition-all px-6 py-5 text-base lg:text-lg font-medium text-white/90 hover:text-white"
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="mt-8 text-sm text-white/50 hover:text-white transition-colors"
              >
                &larr; Back
              </button>
            )}
          </div>
        )}

        {/* Intro (step -1) */}
        {step === -1 && (
          <div className="text-center">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Growth Diagnostic
            </span>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              90 seconds. Seven questions.
            </h1>
            <p className="text-white/75 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Tell us about your business and we&apos;ll show you which tier of the Growth System fits — and what the next move looks like.
            </p>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-8 py-4 rounded-[var(--radius-asp-lg)] hover:bg-white transition-colors text-base lg:text-lg"
            >
              Start the diagnostic
              <span aria-hidden>&rarr;</span>
            </button>
          </div>
        )}

        {/* Result */}
        {step >= total && tier && (
          <div>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Your result
              </span>
              <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                {tier.headline}
              </h1>
              <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
                Recommended tier: {tier.name} &middot; {tier.price}
              </p>
            </div>

            <div className="rounded-[var(--radius-asp-2xl)] bg-white/[0.04] border border-asp-blue-light/30 p-7 lg:p-9 mb-8">
              <p className="text-white/80 text-lg leading-relaxed mb-6">{tier.body}</p>
              <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3">
                What&apos;s included
              </div>
              <ul className="space-y-2">
                {tier.includes.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/85">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-asp-blue-light"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={tier.calendlyUrl}
                className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-8 py-4 rounded-[var(--radius-asp-lg)] hover:bg-white transition-colors text-base"
              >
                Book a growth audit
                <span aria-hidden>&rarr;</span>
              </Link>
              <button
                type="button"
                onClick={restart}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Retake the diagnostic
              </button>
            </div>

            <p className="text-center text-white/40 text-xs mt-8">
              This is a recommendation based on your answers. The final fit gets confirmed on the audit call — no pressure either way.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
