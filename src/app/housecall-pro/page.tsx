import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TradePageView, tradePageMetadata } from "@/components/sections/TradePageView";
import { getTradePage } from "@/lib/trade-pages";

export function generateMetadata(): Metadata {
  const page = getTradePage("partner", "housecall-pro");
  return page ? tradePageMetadata(page) : {};
}

export default function HousecallProPage() {
  const page = getTradePage("partner", "housecall-pro");
  if (!page) notFound();
  return <TradePageView page={page} />;
}
