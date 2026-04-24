"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaqPageSchema } from "@/components/schema/StructuredData";

export type FAQItem = { q: string; a: string };

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "What trades do you actually work with?",
    a: "We specialize in home service businesses — HVAC, plumbing, electrical, roofing, home inspection, pressure washing, pest control, landscaping, appliance repair, restoration, flooring, remodeling, and most adjacent trades. If you rely on local leads to grow, there's a good chance we've worked with a business like yours.",
  },
  {
    q: "What makes ASP different from other home service marketing agencies?",
    a: "Three things. First, you own every asset we build — website, data, content, automations — no handover fees. Second, we're an Official Housecall Pro Affiliate Partner and we integrate the HCP AI stack, not just run ads on top of it. Third, every system we ship has been tested on our own book of business or our existing clients before it touches yours.",
  },
  {
    q: "How quickly will I see results?",
    a: "Local SEO and GBP work typically shows movement in 60–90 days. Paid media produces leads in week one. Operational and attribution systems (CSR AI, follow-up automation) show efficiency gains within the first quarter. We report monthly so you see the trajectory, not just the finish line.",
  },
  {
    q: "Do I have to be on Housecall Pro?",
    a: "No — but it helps. We're HCP-native and most of our deepest integrations run there. If you're already on HCP, we plug right in. If you're considering switching or setting up for the first time, we'll walk you through it and, where you qualify, help you secure partner discounts on new HCP accounts. If you're on a different CRM, we still run the Growth System — we just adapt the attribution and automation layer to your stack.",
  },
  {
    q: "Can I start smaller than Foundation?",
    a: "Yes. Local SEO Pro ($1,200/mo), StormFront ($549/mo), and the Content Creation Package ($499/mo) are standalone, fully managed offers. Every one includes a quarterly review where we show you what stepping up to Foundation unlocks — but there's zero pressure to upgrade before you're ready.",
  },
  {
    q: "What does Premier actually include?",
    a: "Everything in Growth, plus full-funnel marketing ownership across every channel you run, custom AI integrations beyond the HCP stack, quarterly business reviews with revenue planning, and dedicated account leadership. Premier is priced per engagement because the scope varies widely — operators at different revenue bands need different levels of depth. Book a conversation and we'll scope it.",
  },
];

export function FAQSection({
  items = DEFAULT_FAQS,
  eyebrow = "Questions, answered",
  heading = "Common questions from home service operators.",
}: {
  items?: FAQItem[];
  eyebrow?: string;
  heading?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <FaqPageSchema items={items} />
    <section className="py-16 md:py-20 lg:py-24 2xl:py-28 bg-asp-surface-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 2xl:mb-14">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              {eyebrow}
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue leading-tight">
              {heading}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-3">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-[var(--radius-asp-xl)] border transition-all ${
                    isOpen
                      ? "border-asp-blue/30 bg-white shadow-asp-lg"
                      : "border-asp-blue/10 bg-white shadow-asp-md hover:border-asp-blue/20 hover:shadow-asp-lg"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base md:text-lg text-asp-blue">
                      {item.q}
                    </span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 text-asp-purple transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                      <p className="text-asp-blue/75 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold text-asp-blue hover:text-asp-purple transition-colors"
            >
              Have a different question? Ask us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
    </>
  );
}
