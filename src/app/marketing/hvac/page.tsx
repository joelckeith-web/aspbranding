import type { Metadata } from "next";
import { TradePageTemplate } from "@/components/sections/TradePageTemplate";
import { TRADES } from "@/data/trades";

const trade = TRADES.hvac;

export const metadata: Metadata = {
  title: trade.metaTitle,
  description: trade.metaDescription,
  alternates: {
    canonical: `https://www.aspbranding.com/marketing/${trade.slug}`,
  },
};

export default function HvacMarketingPage() {
  return <TradePageTemplate trade={trade} />;
}
