"use client";

import { useState } from "react";
import Link from "next/link";

// Sibling of DiagnosticQuiz. That one picks an ASP tier; this one reads whether the
// business's systems are ready for AI and names the first move. Keep them separate —
// don't bolt AI branches onto the Growth Diagnostic.

type Option = { label: string; points: number; flag?: string };
type Question = {
  id: string;
  eyebrow: string;
  prompt: string;
  helper?: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "crm",
    eyebrow: "Question 1 of 7",
    prompt: "What CRM runs your business today?",
    options: [
      { label: "Housecall Pro", points: 3, flag: "hcp" },
      { label: "Jobber, HubSpot, or GoHighLevel", points: 3, flag: "other-crm" },
      { label: "ServiceTitan or another platform", points: 2, flag: "other-crm" },
      { label: "Spreadsheets, paper, or a calendar app", points: 0, flag: "no-crm" },
    ],
  },
  {
    id: "calls",
    eyebrow: "Question 2 of 7",
    prompt: "What happens when nobody picks up the phone?",
    options: [
      { label: "Voicemail — we call back when we can", points: 0 },
      { label: "An answering service takes a message", points: 1 },
      { label: "An automatic text goes out right away", points: 2 },
      { label: "AI answers, qualifies, and books", points: 3 },
    ],
  },
  {
    id: "quotes",
    eyebrow: "Question 3 of 7",
    prompt: "How do quotes get followed up?",
    options: [
      { label: "When someone remembers", points: 0 },
      { label: "The office calls once or twice", points: 1 },
      { label: "We rarely send quotes — jobs book on the call", points: 2 },
      { label: "An automated sequence runs, then a human steps in", points: 3 },
    ],
  },
  {
    id: "tracking",
    eyebrow: "Question 4 of 7",
    prompt: "Can you see which marketing channel booked which job?",
    options: [
      { label: "No — we ask customers how they heard about us", points: 0 },
      { label: "We see leads by source, not booked jobs", points: 1 },
      { label: "Call tracking plus CRM source on most jobs", points: 2 },
      { label: "Yes — down to revenue by channel", points: 3 },
    ],
  },
  {
    id: "reviews",
    eyebrow: "Question 5 of 7",
    prompt: "How do review requests go out?",
    options: [
      { label: "They don't, or only when we remember", points: 0 },
      { label: "The office asks by hand after some jobs", points: 1 },
      { label: "Automatically after every completed job", points: 3 },
    ],
  },
  {
    id: "owner",
    eyebrow: "Question 6 of 7",
    prompt: "Who would own AI inside the business?",
    helper: "Someone has to check the results and adjust. Tools nobody owns get turned off.",
    options: [
      { label: "Nobody yet — that's the problem", points: 0 },
      { label: "Me, the owner, on top of everything else", points: 1 },
      { label: "An office lead who already runs the CRM", points: 2 },
      { label: "A dedicated ops or marketing person", points: 3 },
    ],
  },
  {
    id: "goal",
    eyebrow: "Question 7 of 7",
    prompt: "What should AI do for you first?",
    options: [
      { label: "Answer every call", points: 0, flag: "calls" },
      { label: "Stop losing quotes", points: 0, flag: "quotes" },
      { label: "Show which marketing works", points: 0, flag: "attribution" },
      { label: "Build something custom for how we run", points: 0, flag: "custom" },
    ],
  },
];

const MAX_SCORE = 18; // six scored questions × 3

type Stage = "crawl" | "walk" | "run";

const STAGES: Record<Stage, { name: string; headline: string; body: string }> = {
  crawl: {
    name: "Crawl",
    headline: "Fix the basics before you add AI.",
    body: "Your biggest return right now isn't an AI tool. It's a CRM that holds every lead and a way to see where jobs come from. Get that in place, then add one AI layer where calls or quotes are leaking.",
  },
  walk: {
    name: "Walk",
    headline: "You're ready for configured AI.",
    body: "Your data is good enough to measure a result. The next layer is automation on the CRM you already run — follow-up, review requests, after-hours answering — each one tied to booked jobs before the next one starts.",
  },
  run: {
    name: "Run",
    headline: "You're ready for custom builds.",
    body: "The basics are running and measured. The gap now is the tool that doesn't exist yet — an intake agent, reporting built for how you run, a workflow across systems. That's a scoped build, priced in writing before work starts.",
  },
};

const FIRST_MOVE: Record<string, string> = {
  calls: "Missed-call text back first, then AI answering once the CRM is catching every lead.",
  quotes: "A quote follow-up sequence that stops the moment the customer replies.",
  attribution: "Call tracking plus a CRM source on every job, so booked revenue reports by channel.",
  custom: "A systems audit to scope the build, so the first thing built is the right thing.",
};

function pickStage(score: number): Stage {
  if (score <= 6) return "crawl";
  if (score <= 12) return "walk";
  return "run";
}

function startHere(stage: Stage, crm: string): string[] {
  if (stage === "crawl") {
    return [
      crm === "no-crm"
        ? "Pick a CRM. Housecall Pro is where we go deepest, and partner discounts apply on new accounts."
        : "Get every lead — calls, forms, texts — landing in the CRM with a source attached.",
      "Turn on missed-call text back. It's the cheapest AI layer and the fastest to prove.",
      "Set one number to watch: booked jobs per week, by source.",
    ];
  }
  if (stage === "walk") {
    return [
      crm === "hcp"
        ? "Configure the Housecall Pro AI stack — CSR AI, dispatch, attribution, follow-up."
        : "Set up follow-up sequences and lead-source attribution on the CRM you already run.",
      "Automate quote follow-up and review requests, one at a time, each measured.",
      "Name the person who owns the results and checks them weekly.",
    ];
  }
  return [
    "Scope the build after a systems audit — the tool that doesn't exist yet, defined in one page.",
    "Keep every workflow, agent, and report in your accounts, documented, with no exit fee.",
    "Measure it the same way as everything else: booked jobs, by channel, in the CRM.",
  ];
}

export function AIReadinessQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flags, setFlags] = useState<Record<string, string>>({});

  const total = QUESTIONS.length;
  const progress = step === -1 ? 0 : step >= total ? 100 : Math.round((step / total) * 100);

  const selectOption = (questionId: string, opt: Option) => {
    setAnswers({ ...answers, [questionId]: opt.points });
    if (opt.flag) setFlags({ ...flags, [questionId]: opt.flag });
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      setStep(total);
    }
  };

  const restart = () => {
    setAnswers({});
    setFlags({});
    setStep(-1);
  };

  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const stage = step >= total ? pickStage(score) : null;
  const result = stage ? STAGES[stage] : null;
  const crm = flags["crm"] ?? "";
  const goal = flags["goal"] ?? "";
  const nextHref = stage === "walk" && crm === "hcp" ? "/ai-integration" : "/ai-consulting";
  const nextLabel = stage === "walk" && crm === "hcp" ? "See AI Integration" : "See AI Consulting";

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
        {/* Progress bar */}
        {step >= 0 && step < total && (
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
              <span>AI Readiness Check</span>
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
            {QUESTIONS[step].helper ? (
              <p className="text-white/60 mb-8">{QUESTIONS[step].helper}</p>
            ) : (
              <div className="mb-8" />
            )}

            <div className="space-y-3">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => selectOption(QUESTIONS[step].id, opt)}
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

        {/* Intro */}
        {step === -1 && (
          <div className="text-center">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              AI Readiness Check
            </span>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Is your business ready for AI?
            </h1>
            <p className="text-white/75 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Seven questions. About two minutes. You get a crawl, walk, or run result and the first move to make. No email required.
            </p>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-8 py-4 rounded-[var(--radius-asp-lg)] hover:bg-white transition-colors text-base lg:text-lg"
            >
              Start the check
              <span aria-hidden>&rarr;</span>
            </button>
            <p className="text-white/40 text-sm mt-8 max-w-xl mx-auto">
              Looking for which ASP tier fits your business? That&apos;s the{" "}
              <Link href="/diagnostic" className="text-asp-blue-light hover:text-white">
                Growth Diagnostic
              </Link>
              . This check is about whether your systems are ready for AI, and where to start.
            </p>
          </div>
        )}

        {/* Result */}
        {step >= total && stage && result && (
          <div>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Your result
              </span>
              <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                {result.headline}
              </h1>
              <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
                Stage: {result.name} &middot; {score} of {MAX_SCORE}
              </p>
            </div>

            <div className="rounded-[var(--radius-asp-2xl)] bg-white/[0.04] border border-asp-blue-light/30 p-7 lg:p-9 mb-8">
              <p className="text-white/80 text-lg leading-relaxed mb-6">{result.body}</p>

              {goal && FIRST_MOVE[goal] && (
                <div className="rounded-[var(--radius-asp-lg)] bg-white/5 border border-white/10 px-4 py-3 mb-6">
                  <p className="text-xs text-asp-blue-light font-bold uppercase tracking-wider mb-1">
                    First move
                  </p>
                  <p className="text-white/85">{FIRST_MOVE[goal]}</p>
                </div>
              )}

              <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3">
                Start here
              </div>
              <ul className="space-y-2">
                {startHere(stage, crm).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-asp-blue-light"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?topic=ai-consulting"
                className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-8 py-4 rounded-[var(--radius-asp-lg)] hover:bg-white transition-colors text-base"
              >
                Book a call
                <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href={nextHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-asp-blue-light text-asp-blue-light font-bold px-8 py-4 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue-light hover:text-asp-black transition-colors text-base"
              >
                {nextLabel}
              </Link>
            </div>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={restart}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Retake the check
              </button>
            </div>

            <p className="text-center text-white/40 text-xs mt-8">
              This is a read on your answers, not a quote. The fit gets confirmed on a call &mdash; no pressure either way. Reading the long version first?{" "}
              <Link href="/blog/ai-for-home-service-businesses" className="text-asp-blue-light hover:text-white">
                Our guide to adopting AI in a home service business
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
