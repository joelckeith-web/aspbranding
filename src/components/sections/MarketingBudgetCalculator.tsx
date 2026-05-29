"use client";

import { useState, useMemo } from "react";
import {
  industries,
  tiers,
  calculateBudget,
  FAQ_ITEMS,
  type Industry,
} from "@/lib/marketing-budget";

const CALENDLY =
  "https://calendly.com/joel-keith-asp/onboarding-strategy-session";

function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value.toLocaleString()}`;
}

function formatFullCurrency(value: number): string {
  return `$${value.toLocaleString()}`;
}

function parseRevenue(input: string): number {
  const cleaned = input.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}

export function MarketingBudgetCalculator() {
  const [revenueInput, setRevenueInput] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0]);
  const [isMetro, setIsMetro] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const revenue = parseRevenue(revenueInput);

  const results = useMemo(() => {
    if (revenue <= 0) return null;
    return calculateBudget(revenue, selectedIndustry, isMetro);
  }, [revenue, selectedIndustry, isMetro]);

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (raw === "") {
      setRevenueInput("");
      setShowResults(false);
      return;
    }
    const num = parseInt(raw, 10);
    setRevenueInput(num.toLocaleString());
    if (num > 0) setShowResults(true);
  };

  return (
    <>
      {/* Hero (dark band — sits under the fixed site header) */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 0%, rgba(76,201,240,0.14), transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-32 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold uppercase tracking-widest text-asp-blue-light mb-5">
            Built for Home Service Businesses
          </div>
          <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 lg:whitespace-nowrap">
            Marketing Budget <span className="hero-text-gradient">Calculator</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Know exactly how much to invest in marketing based on your revenue,
            industry, and market. No guesswork. Just data-driven recommendations.
          </p>
        </div>
      </section>

      {/* Calculator — pulled up so the card overlaps the hero */}
      <div className="relative z-10 -mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-8">
        {/* Input card */}
        <div className="rounded-asp-2xl border border-gray-200 bg-white shadow-asp-lg p-6 md:p-8">
          <h2 className="text-xl font-bold text-asp-black mb-6">
            Tell us about your business
          </h2>

          {/* Revenue */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Annual Revenue
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-asp-blue-light text-xl font-bold">
                $
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={revenueInput}
                onChange={handleRevenueChange}
                placeholder="1,000,000"
                className="w-full bg-asp-surface-light border border-gray-200 rounded-xl py-4 pl-10 pr-4 text-2xl font-bold text-asp-black placeholder-gray-400 focus:outline-none focus:border-asp-blue-light focus:ring-2 focus:ring-asp-blue-light/30 focus:bg-white transition-all"
              />
            </div>
            {revenue > 0 && (
              <p className="mt-2 text-sm text-gray-500">
                {formatFullCurrency(revenue)} annual revenue
              </p>
            )}
          </div>

          {/* Industry */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Industry
            </label>
            <select
              value={selectedIndustry.id}
              onChange={(e) => {
                const ind = industries.find((i) => i.id === e.target.value);
                if (ind) setSelectedIndustry(ind);
              }}
              className="w-full bg-asp-surface-light border border-gray-200 rounded-xl py-3 px-4 text-asp-black focus:outline-none focus:border-asp-blue-light focus:ring-2 focus:ring-asp-blue-light/30 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              {industries.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.name}
                </option>
              ))}
            </select>
            <p className="mt-2 text-sm text-gray-500">
              {selectedIndustry.description}
            </p>
          </div>

          {/* Metro toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-asp-surface-light border border-gray-200">
            <div>
              <p className="font-semibold text-asp-black">Major Metro Area</p>
              <p className="text-sm text-gray-500 mt-0.5">
                Are you in or near a major metropolitan city? This increases
                recommended spend due to higher competition.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsMetro(!isMetro)}
              className={`toggle-switch flex-shrink-0 ml-4 ${isMetro ? "active" : ""}`}
              aria-label="Toggle metro area"
            />
          </div>

          {isMetro && (
            <div className="mt-3 flex items-center gap-2 text-sm text-asp-blue font-medium">
              <svg className="w-4 h-4 text-asp-blue-light" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                +{selectedIndustry.metroBoost}% added to each tier for metro
                competition
              </span>
            </div>
          )}
        </div>

        {/* Results */}
        {showResults && results && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-black text-asp-black">
                Your Recommended Marketing Budget
              </h2>
              <p className="text-gray-500 mt-2">
                Based on {formatFullCurrency(revenue)} annual revenue in{" "}
                <span className="text-asp-blue font-semibold">
                  {selectedIndustry.name}
                </span>
                {isMetro && (
                  <span className="text-asp-blue-light font-semibold"> (Metro Area)</span>
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {results.map((result, idx) => {
                const tier = tiers[idx];
                return (
                  <div
                    key={tier.key}
                    className="card-hover rounded-asp-2xl border bg-white shadow-asp-sm p-6 relative overflow-hidden"
                    style={{ borderColor: tier.borderColor }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: tier.color }}
                    />
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider"
                      style={{ backgroundColor: tier.bgColor, color: tier.color }}
                    >
                      {tier.label}
                    </div>
                    <p className="text-sm font-semibold mb-3" style={{ color: tier.color }}>
                      {tier.tagline}
                    </p>
                    <div className="mb-2">
                      <span className="text-4xl font-black text-asp-blue">
                        {result.lowPct}–{result.highPct}%
                      </span>
                      <span className="text-gray-500 text-sm ml-2">of revenue</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">
                        Annual Marketing Budget
                      </p>
                      <p className="text-xl font-bold text-asp-black">
                        {formatCurrency(result.low)} – {formatCurrency(result.high)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatFullCurrency(Math.round(result.low / 12))}/mo –{" "}
                        {formatFullCurrency(Math.round(result.high / 12))}/mo
                      </p>
                    </div>
                    <div className="mt-4 h-1.5 rounded-full overflow-hidden bg-gray-100">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min((result.highPct / 20) * 100, 100)}%`,
                          background: `linear-gradient(90deg, ${tier.color}80, ${tier.color})`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tier meaning */}
            <div className="rounded-asp-2xl border border-gray-200 bg-white shadow-asp-md p-6 md:p-8">
              <h3 className="text-lg font-bold text-asp-black mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What Do These Tiers Mean?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-bold text-asp-blue-light mb-1">Foundation (4–7%)</p>
                  <p className="text-sm text-gray-500">
                    You&apos;re establishing your digital presence. Focus on core SEO,
                    Google Business Profile, and targeted local ads. Ideal for
                    businesses with strong referral networks supplementing with digital.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-asp-purple mb-1">Growth (8–11%)</p>
                  <p className="text-sm text-gray-500">
                    You&apos;re ready to scale. This supports multi-channel campaigns —
                    PPC, social ads, content, and reputation management. Best for
                    businesses aiming to break through revenue plateaus.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-asp-blue mb-1">Domination (12–15%+)</p>
                  <p className="text-sm text-gray-500">
                    You&apos;re going all-in on market share. This level supports
                    aggressive paid media, brand campaigns, video, advanced
                    attribution, and competitive conquest strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="rounded-asp-2xl border border-gray-200 bg-white shadow-asp-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-black text-asp-black mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question}>
                <h3 className="font-bold text-asp-black mb-1">{item.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width black CTA — flows straight into the site footer */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(76,201,240,0.12), transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 text-center">
          <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
            Take the Next Step
          </span>
          <h2 className="text-2xl md:text-3xl font-black mb-3">
            Want a custom plan for your {selectedIndustry.name.toLowerCase()} business?
          </h2>
          <p className="text-white/70 mb-7 max-w-xl mx-auto">
            Book a free strategy session and we&apos;ll map your budget to a plan
            built to break your revenue ceiling — no obligation.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-asp-gradient-cta px-8 py-3.5 rounded-full text-white font-bold shadow-asp-md hover:opacity-90 transition-opacity"
          >
            Book Your Free Strategy Session
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
