import fs from "node:fs";
import path from "node:path";

/**
 * Trade pages: one industry hub per trade (/industries/<trade>), plus trade x
 * service pages (/seo/<trade>, /ppc/<trade>) and the Housecall Pro partner page.
 * Copy lives in content/trade-pages/<kind>/<slug>.json, drafted from a sourced
 * fact pack and checked before it ships. status "review" = reachable for review
 * but noindexed and kept out of the sitemap and every link grid (same mechanism
 * as blog posts).
 */
export type TradePageKind = "industry" | "seo" | "ppc" | "partner";

export interface TradeSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TradePage {
  kind: TradePageKind;
  slug: string;
  trade: string;
  status: "review" | "published";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: TradeSection[];
  caseStudySlug?: string;
  faqs: { question: string; answer: string }[];
  related?: { label: string; href: string; title: string; body: string }[];
  dateModified: string;
}

const ROOT = path.join(process.cwd(), "content", "trade-pages");

export const KIND_BASE: Record<TradePageKind, string> = {
  industry: "/industries",
  seo: "/seo",
  ppc: "/ppc",
  partner: "",
};

export function tradePageUrl(page: Pick<TradePage, "kind" | "slug">): string {
  return page.kind === "partner" ? `/${page.slug}` : `${KIND_BASE[page.kind]}/${page.slug}`;
}

export function getTradePages(kind: TradePageKind): TradePage[] {
  const dir = path.join(ROOT, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as TradePage)
    .sort((a, b) => a.trade.localeCompare(b.trade));
}

export function getTradePage(kind: TradePageKind, slug: string): TradePage | undefined {
  return getTradePages(kind).find((p) => p.slug === slug);
}

export function getPublishedTradePages(kind: TradePageKind): TradePage[] {
  return getTradePages(kind).filter((p) => p.status === "published");
}
