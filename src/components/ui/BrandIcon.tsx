/**
 * ASP brand icon set — "gradient tile" direction (approved 2026-09-29).
 * White 1.5px line glyphs on the navy-to-light-blue gradient tile.
 * Source of truth for the artwork: the "ASP Brand Icon Set" design canvas.
 */

export const BRAND_ICONS = {
  website:
    "M5.5 4.5h13A2.5 2.5 0 0121 7v10a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17V7a2.5 2.5 0 012.5-2.5zM3 9h18M10 12.5l-2 2 2 2M14 12.5l2 2-2 2",
  search: "M4 10.5a6.5 6.5 0 1013 0 6.5 6.5 0 10-13 0zM15.3 15.3l5.2 5.2M7.5 12l2-2 1.5 1.5 2.5-2.5",
  gbp: "M12 21s6.5-5.8 6.5-11a6.5 6.5 0 10-13 0c0 5.2 6.5 11 6.5 11zM9.7 10a2.3 2.3 0 104.6 0 2.3 2.3 0 10-4.6 0z",
  ads: "M4 10v4h3l8 4.5v-13L7 10H4zM7 14l1.2 4.5h2.3L9.6 14.9M18.5 9a4.2 4.2 0 010 6",
  ai: "M5 5h14a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0119 17h-8l-4.5 3.5V17H5a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 015 5zM12 7.8l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z",
  data: "M5 6a7 2.5 0 1014 0 7 2.5 0 10-14 0zM5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5",
  content:
    "M6 5h12a2.5 2.5 0 012.5 2.5v9A2.5 2.5 0 0118 19H6a2.5 2.5 0 01-2.5-2.5v-9A2.5 2.5 0 016 5zM3.5 15.5l4.5-4.5 3.5 3.5 2.5-2.5 6.5 6M7.5 9.5a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0z",
  key: "M3.5 8.5a4.5 4.5 0 109 0 4.5 4.5 0 10-9 0zM11.2 11.7L20 20.5M15.2 15.7l2-2M17.7 18.2l2-2",
  results: "M4 4v15.5h16M6.5 15l4.5-4.5 3 3 6-6.5M15.5 7H20v4.5",
  monthly:
    "M6.5 5.5h11A2.5 2.5 0 0120 8v10a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 18V8a2.5 2.5 0 012.5-2.5zM4 10h16M8.5 3.5v4M15.5 3.5v4M9.5 15l2 2 3.5-3.5",
  respond:
    "M5 14v-2a7 7 0 0114 0v2M5 13.5h1a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 016 19.5H5A1.5 1.5 0 013.5 18v-3A1.5 1.5 0 015 13.5zM18 13.5h1a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5zM19 19.5c0 1.5-2 2.5-4.5 2.5H13",
  home: "M4 11l8-6.5 8 6.5v8.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 19.5zM10 21v-5.5h4V21",
} as const;

export type BrandIconName = keyof typeof BRAND_ICONS;

/** The bare glyph, stroked in currentColor — for inline use (chips, lists). */
export function BrandGlyph({ name, className = "w-6 h-6" }: { name: BrandIconName; className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={BRAND_ICONS[name]} />
    </svg>
  );
}

const TILE_SIZES = {
  sm: { tile: "h-10 w-10 rounded-[10px]", glyph: "h-5 w-5" },
  md: { tile: "h-14 w-14 rounded-[14px]", glyph: "h-7 w-7" },
  lg: { tile: "h-20 w-20 rounded-[18px]", glyph: "h-10 w-10" },
};

/** The glyph on the brand gradient tile. `onDark` swaps the drop shadow for a light-blue hairline ring. */
export function BrandIcon({
  name,
  size = "md",
  onDark = false,
  className = "",
}: {
  name: BrandIconName;
  size?: keyof typeof TILE_SIZES;
  onDark?: boolean;
  className?: string;
}) {
  const s = TILE_SIZES[size];
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-white ${s.tile} ${
        onDark ? "ring-1 ring-asp-blue-light/35" : "shadow-[0_6px_14px_rgba(0,35,102,0.2)]"
      } ${className}`}
      style={{ background: "linear-gradient(135deg, #002366 0%, #0B3F8C 55%, #4CC9F0 130%)" }}
    >
      <BrandGlyph name={name} className={s.glyph} />
    </span>
  );
}
