import type { Metadata } from "next";
import { StrategyCallLanding, DEFAULT_COPY, type StrategyCallCopy } from "../StrategyCallLanding";

// AEO version of the paid strategy-call page (Joel, 2026-11-19): all home
// services, for the AEO + Website program. Same layout and form as
// /strategy-call; only the copy below changes. No price on this page. Copy is
// from the bounded writer's draft (ASP-Codex/aeo-ads-2026-11-19); client proof
// is the 2026-11-18 proof pull, clients unnamed. Noindex, not in the sitemap
// or nav.

export const metadata: Metadata = {
  title: "Strategy Call: Show Up When Customers Ask AI",
  description:
    "Done-for-you answer engine optimization for home service businesses. Talk with Joel, a partner at ASP, about whether we're a fit.",
  keywords: ["answer engine optimization", "AEO for home service businesses", "AI Overviews"],
  robots: { index: false, follow: false },
};

const AEO_COPY: StrategyCallCopy = {
  ...DEFAULT_COPY,
  heroEyebrow: "Strategy call: answer engine optimization",
  heroLead: "When customers ask AI who to call,",
  heroGradient: "does your business come up?",
  heroSub:
    "Done-for-you answer engine optimization (AEO) for home service businesses. We track where you show up in Google's AI Overviews and AI Mode, build your new website and add two posts a month.",
  steps: [
    {
      step: "1",
      title: "Answer a few questions",
      body: "Fill out the form on this page and answer a few questions about your business.",
    },
    {
      step: "2",
      title: "Strategy call with Joel",
      body: "Joel runs every strategy call himself, so you talk with him directly.",
    },
    {
      step: "3",
      title: "ASP builds and tracks",
      body: "If we work together, ASP builds your new website, writes two posts a month and tracks where you show up in Google's AI Overviews and AI Mode.",
    },
  ],
  proof: [
    { stat: "2", label: "Leads stamped ChatGPT in the job software", source: "Outdoor living company, Austin" },
    { stat: "1", label: "Of those became a paid design job", source: "Outdoor living company, Austin" },
    { stat: "2", label: "Leads stamped ChatGPT in the job software", source: "Heating company, Washington" },
    { stat: "Monthly", label: "Tracking in Google's AI Overviews and AI Mode", source: "Every AEO client" },
  ],
  faqs: [
    {
      q: "What do I get every month?",
      a: "AEO rankings tracked monthly in Google's AI Overviews and AI Mode, showing which customer questions you appear in and how often. A brand-new custom website, 10 pages at launch, built so answer engines can read it and quote it. Two new blog posts a month, each answering a question your customers ask. A monthly performance report. You own the website and every asset ASP builds.",
    },
    {
      q: "Has this worked for anyone?",
      a: "An outdoor living company in Austin started getting visits from ChatGPT in April 2026. Two leads came into its job software stamped with ChatGPT as the source, and one became a paid design job. A heating company in Washington has two leads in its job software stamped with ChatGPT, and the owner has had customers tell him on the phone that they asked AI and his company came up. These are results for two companies, not a promise of what yours will see.",
    },
    // The lead-tracing FAQ describes the Growth System, not this program.
    ...DEFAULT_COPY.faqs.filter((f) => f.q !== "What can you track and what can't you?"),
  ],
  fitYes: [
    "You own a home service business and want to show up when customers ask AI who to call.",
    "You want the website, the content and the tracking done for you.",
    "You want to own the website and everything built for you.",
  ],
  fitNo: [
    "You're not looking for an agency to run this for you.",
    "You want a guaranteed ranking. Nobody can promise one.",
    "You're just starting out and don't have steady customers yet.",
  ],
  reviewsNote: "Reviews from ASP clients across industries.",
};

export default function StrategyCallAeoPage() {
  return <StrategyCallLanding copy={AEO_COPY} />;
}
