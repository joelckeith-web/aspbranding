import type { Metadata } from "next";
import { StrategyCallLanding, DEFAULT_COPY, type StrategyCallCopy } from "../StrategyCallLanding";

// AEO version of the paid strategy-call page (Joel, 2026-11-19): all trades,
// for the AEO + Website program. Same layout and form as /strategy-call; the
// copy below is Joel's direction from 2026-11-19. Lower-ticket offer, so no
// revenue floor and no "apply" wording: visitors book a call. No price on this
// page. Noindex, not in the sitemap or nav.

export const metadata: Metadata = {
  title: "Strategy Call: Show Up in Google's AI Overviews",
  description:
    "Done-for-you answer engine optimization for trades businesses: a brand-new website built for Google's AI Overviews, new content every month, and leads sent straight into your job software.",
  keywords: ["answer engine optimization", "AEO for trades businesses", "AI Overviews"],
  robots: { index: false, follow: false },
};

const AEO_COPY: StrategyCallCopy = {
  ...DEFAULT_COPY,
  ctaLabel: "Book a strategy call",
  faqEyebrow: "Before you book",
  successHref: "/strategy-call/aeo/booked",
  revenueOptions: [
    { value: "under-300k", label: "Under $300K" },
    { value: "300k-500k", label: "$300K – $500K" },
    { value: "500k-1m", label: "$500K – $1M" },
    { value: "1m-3m", label: "$1M – $3M" },
    { value: "3m-plus", label: "$3M+" },
  ],
  consentText:
    "Yes, ASP can email me about my strategy call and send marketing updates. I can unsubscribe any time.",
  heroEyebrow: "For trades business owners",
  heroLead: "When customers ask AI who to call,",
  heroGradient: "does your business come up?",
  heroSub:
    "Done-for-you answer engine optimization (AEO) for trades businesses. We build you a brand-new website made for Google's AI Overviews, add new content every month, and send every lead straight into your job software.",
  proof: [
    {
      stat: "$500K",
      label: "In pipeline of new work in the first 90 days, from ChatGPT and Google's AI Overviews",
      source: "Outdoor living company, Austin",
    },
    {
      stat: "First",
      label: "Company Perplexity said to start with for a backyard remodel in Austin",
      source: "Outdoor living company, Austin. Asked November 2026",
    },
    {
      stat: "Asked AI",
      label: "What customers say when the owner asks how they found him",
      source: "HVAC company, Washington",
    },
    { stat: "$3M+", label: "Revenue barrier broken", source: "Regional HVAC company, 12 months" },
  ],
  problem: {
    eyebrow: "What changed",
    heading: "Your customers are asking AI who to call.",
    paras: [
      "When someone searches for a service, Google can answer with an AI Overview at the top of the page, before anyone reaches a website. If your business isn't in that answer, the customer may never see you.",
      "We build your website and your content so Google's AI can read it and quote it. Then we set up the automation that sends every new lead straight into your job software, so nothing sits in an inbox.",
    ],
    hideDashboard: true,
  },
  stepsHeading: "Three steps to get started.",
  steps: [
    {
      step: "1",
      title: "Share a little information",
      body: "Tell us your revenue range and where to reach you. It takes about a minute.",
    },
    {
      step: "2",
      title: "Book a call with Joel",
      body: "Pick a time on Joel's calendar. He runs every strategy call himself.",
    },
    {
      step: "3",
      title: "ASP builds it for you",
      body: "We build your new website, publish two posts a month, set up the automation that sends leads into your job software, and report on where you show up in Google's AI Overviews and AI Mode.",
    },
  ],
  casesEyebrow: "Real results",
  casesHeading: "Real clients, real results.",
  ownership: {
    eyebrow: "Website design",
    heading: "A brand-new website, built for you.",
    paras: [
      "Your website is part of this program. We design and build a brand-new site for your business, optimized for answer engine optimization, so Google's AI can read it and quote it.",
      "Ten pages at launch and two new posts every month. You own the website and everything we build.",
    ],
    image: {
      src: "/images/portfolio/titan-mockup.png",
      alt: "Titan Inspection Services website on desktop and mobile",
      caption: "Titan Inspection Services, designed and built by ASP.",
    },
  },
  fitYes: [
    "You own a trades business and want to show up when customers ask AI who to call.",
    "You want the website, the content and the automation done for you.",
    "You want to own the website and everything built for you.",
  ],
  fitNo: [
    "You're not looking for an agency to run this for you.",
    "You want a guaranteed ranking. Nobody can promise one.",
    "You're just starting out and don't have steady customers yet.",
  ],
  talk: {
    heading: "You'll talk to Joel.",
    paras: [
      "Joel Keith is CEO and a partner at ASP. He has spent the past few years putting AI to work for trades businesses, and ASP has helped clients bring in significant revenue through Google's AI Overviews and AI search.",
      "A strategy call is a conversation with Joel to see if we're a fit. Share a little information, then pick a time on his calendar.",
    ],
  },
  faqs: [
    {
      q: "What do I get every month?",
      a: "A brand-new custom website, 10 pages at launch, built so Google's AI can read it and quote it. Two new blog posts a month, each answering a question your customers ask. Automation that sends every website lead straight into your job software. Rankings tracked monthly in Google's AI Overviews and AI Mode, and a monthly performance report. You own the website and everything ASP builds.",
    },
    {
      q: "Has this worked for anyone?",
      a: "An outdoor living company in Austin had about $500,000 in pipeline of new work within its first 90 days, from ChatGPT and Google's AI Overviews. An HVAC company in Washington has customers who say they asked AI and his company came up. These are results for two companies, not a promise of what yours will see.",
    },
    // The lead-tracing FAQ describes the Growth System, not this program.
    ...DEFAULT_COPY.faqs.filter((f) => f.q !== "What can you track and what can't you?"),
  ],
  reviewsNote: "Reviews from ASP clients across industries.",
};

export default function StrategyCallAeoPage() {
  return <StrategyCallLanding copy={AEO_COPY} />;
}
