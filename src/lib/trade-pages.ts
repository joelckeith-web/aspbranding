import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Trade landing pages: one industry hub per trade (/industries/<trade>), trade x
 * service pages (/seo/<trade>, /ppc/<trade>) and the Housecall Pro page.
 * Copy lives in content/trade-pages/<kind>/<slug>.json, drafted from a sourced
 * fact pack and checked before it ships. Pages are landing pages (Joel 10/15):
 * short blocks, cards and a package rate card, not long prose.
 * status "review" = reachable for review but noindexed and kept out of the
 * sitemap and every link grid (same mechanism as blog posts).
 */
export type TradePageKind = "industry" | "seo" | "ppc" | "partner";

export interface TradeCard {
  title: string;
  body: string;
  href?: string;
}

export interface TradePage {
  kind: TradePageKind;
  slug: string;
  trade: string;
  status: "review" | "published";
  metaTitle: string;
  metaDescription: string;
  dateModified: string;
  hero: { eyebrow: string; h1: string; subhead: string };
  why: { heading: string; intro: string; cards: TradeCard[] };
  services: { heading: string; intro?: string; cards: TradeCard[] };
  process: { heading: string; steps: TradeCard[] };
  caseStudySlug?: string;
  pricing: { heading: string; subhead: string };
  faqs: { question: string; answer: string }[];
  cta: { heading: string; body: string };
  related?: { label: string; href: string; title: string; body: string }[];
  /** Slug of the long-form blog guide this page links to (shown only once that post is published). */
  guideSlug?: string;
  /** Optional imagery + Element Bank motion. Pages without it keep the plain layout. */
  media?: {
    hero?: { src: string; position?: string };
    /** 1200x630 social share image */
    og?: string;
    why?: { src: string; alt: string; chips?: string[] };
    services?: { src: string; alt: string; chips?: string[] };
  };
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
    // Only landing-format pages render; any older long-form draft is skipped.
    .filter((p) => Boolean(p.hero))
    .sort((a, b) => a.trade.localeCompare(b.trade));
}

export function getTradePage(kind: TradePageKind, slug: string): TradePage | undefined {
  return getTradePages(kind).find((p) => p.slug === slug);
}

export function getPublishedTradePages(kind: TradePageKind): TradePage[] {
  return getTradePages(kind).filter((p) => p.status === "published");
}

/** The linked guide's title and description, or undefined until the post is published. */
export function getPublishedGuide(slug?: string): { href: string; title: string; description: string } | undefined {
  if (!slug) return undefined;
  const file = path.join(process.cwd(), "content", "posts", `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  const { data } = matter(fs.readFileSync(file, "utf8"));
  if (data.status !== "published") return undefined;
  return { href: `/blog/${slug}`, title: String(data.title), description: String(data.metaDescription ?? "") };
}
