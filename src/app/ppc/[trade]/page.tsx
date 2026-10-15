import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TradePageView, tradePageMetadata } from "@/components/sections/TradePageView";
import { getTradePage, getTradePages } from "@/lib/trade-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return getTradePages("ppc").map((p) => ({ trade: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ trade: string }> }): Promise<Metadata> {
  const { trade } = await params;
  const page = getTradePage("ppc", trade);
  return page ? tradePageMetadata(page) : {};
}

export default async function Page({ params }: { params: Promise<{ trade: string }> }) {
  const { trade } = await params;
  const page = getTradePage("ppc", trade);
  if (!page) notFound();
  return <TradePageView page={page} />;
}
