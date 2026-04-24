import type { Metadata } from "next";
import { TradePageTemplate } from "@/components/sections/TradePageTemplate";
import { TRADES } from "@/data/trades";

const trade = TRADES.plumbing;

export const metadata: Metadata = {
  title: trade.metaTitle,
  description: trade.metaDescription,
  alternates: {
    canonical: `https://www.aspbranding.com/marketing/${trade.slug}`,
  },
};

export default function PlumbingMarketingPage() {
  return <TradePageTemplate trade={trade} />;
}
