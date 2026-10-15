import Link from "next/link";
import type { ReactNode } from "react";

const CARD =
  "flex flex-col items-center gap-3 rounded-[var(--radius-asp-xl)] border border-asp-blue-light/25 bg-white/[0.03] px-4 py-6 text-center transition-colors hover:border-asp-blue-light/60";

/** Links only when the trade page is published, so the grid never points at a 404 or a noindexed draft. */
export function TradeGridCard({ href, children }: { href?: string; children: ReactNode }) {
  return href ? (
    <Link href={href} className={CARD}>
      {children}
    </Link>
  ) : (
    <div className={CARD}>{children}</div>
  );
}
