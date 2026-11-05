import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AuditKitForm } from "@/components/sections/AuditKitForm";

// The download promised at the end of the AI for Founders x ASP live audit
// workshop. Attendees arrive from the QR code on the deck's download slide
// (aspbranding.com/audit-kit), usually on a phone. NOT in the sitemap or nav;
// noindex.
//
// Joel 2026-11-05: they fill in their information and download the zip right
// there. The kit's source files live in kits/ai-search-audit-kit/; rebuild the
// zip with `python kits/build-kit.py` after any edit.

export const metadata: Metadata = {
  title: "AI Search Audit Kit — Free Download | ASP",
  description:
    "The folder from the AI for Founders x ASP live audit workshop: the one-file Claude audit, every prompt from the show, the free tools list and a 30-day plan.",
  robots: { index: false, follow: false },
};

const CONTENTS: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "The one-file audit",
    body:
      "Fill in your business details, paste it into Claude with web search on, and it works through all seven steps in order. A full audit can take anywhere from 20 minutes to an hour and a half.",
  },
  {
    n: "02",
    title: "Every prompt from the show",
    body:
      "The Google profile screenshot prompt, the three questions we asked AI, and two prompts to use every week: review replies and customer questions.",
  },
  {
    n: "03",
    title: "The free tools list",
    body: "Every free tool we used, with links, from PageSpeed Insights to Apple Business Connect.",
  },
  {
    n: "04",
    title: "Your next 30 days",
    body: "The four-week plan from the end of the workshop. None of it needs a big budget.",
  },
  {
    n: "05",
    title: "The same audit as a Claude Code command",
    body: "If you use Claude Code, drop it into your commands folder and run the audit with one slash command.",
  },
];

const STEPS: { title: string; body: string }[] = [
  { title: "Open the README", body: "It explains what each file is for and the order to use them in." },
  {
    title: "Run the one-file audit",
    body: "Paste it into a new Claude chat with web search on. Attach screenshots of your Google profile if you have them.",
  },
  {
    title: "Check what comes back",
    body: "Claude makes mistakes. Open the links it gives you before you act on anything it says.",
  },
];

export default function AuditKitPage() {
  return (
    <main className="bg-asp-black">
      {/* HERO: no ScrollReveal here, so the form is visible the moment the page
          loads on a phone. */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4 pt-20 pb-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
            <div>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                From the AI for Founders x ASP workshop
              </span>
              <h1 className="font-black text-4xl md:text-5xl 2xl:text-6xl leading-[1.05] mb-6">
                Run the same AI search audit on your own business.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Everything we used in the workshop is in one folder: the audit file, every prompt, the
                free tools and a 30-day plan.
              </p>
            </div>

            <div id="get">
              <AuditKitForm />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              What&apos;s inside
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
              Five files, and a README that ties them together.
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {CONTENTS.map((f, i) => (
              <ScrollReveal key={f.n} delay={i * 60}>
                <div className="flex gap-5 rounded-[var(--radius-asp-xl)] border border-gray-200 bg-gray-50/60 p-6 lg:p-7 shadow-asp-sm">
                  <span className="font-black text-2xl text-asp-blue/30 shrink-0 leading-none pt-1">{f.n}</span>
                  <div>
                    <h3 className="font-black text-lg text-asp-blue mb-2 leading-snug">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE IT */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              How to use it
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl leading-tight">
              Three steps to your first audit.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {STEPS.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="h-full rounded-[var(--radius-asp-xl)] border border-white/10 bg-white/5 p-6 lg:p-7 shadow-asp-md">
                  <span className="font-black text-3xl text-asp-blue-light">{i + 1}</span>
                  <h3 className="font-bold text-lg mt-3 mb-2">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-white/70 leading-relaxed mb-6">
              Would you rather have ASP run it for you and turn it into a plan?
            </p>
            <a
              href="/strategy-call"
              className="inline-block bg-asp-gradient-cta text-white font-semibold px-8 py-4 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all"
            >
              Book a strategy call
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
