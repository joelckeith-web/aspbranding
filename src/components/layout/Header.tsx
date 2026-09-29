"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, type NavItem, type NavGroup } from "@/lib/constants";

/** Line icons for the dropdown tiles. Stroke-only, inherit currentColor. */
const NAV_ICONS: Record<string, string> = {
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4",
  cursor: "M5 3l6 16 2.2-6.8L20 10 5 3z",
  megaphone: "M3 10v4h3l7 4V6l-7 4H3zM17 9a4 4 0 010 6",
  chat: "M4 5h16v10H9l-5 4V5zM8 9h8M8 12h5",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z",
  pin: "M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  storm: "M7 15a4 4 0 010-8 5.5 5.5 0 0110.6 1.5A3.5 3.5 0 0117 15M13 13l-3 4h4l-3 4",
  doc: "M6 3h8l4 4v14H6V3zM14 3v4h4M9 12h6M9 16h4",
  bubble: "M4 5h16v11H12l-5 4v-4H4V5z",
  chip: "M7 7h10v10H7V7zM10 2v3m4-3v3m-4 14v3m4-3v3M2 10h3m-3 4h3m14-4h3m-3 4h3",
  briefcase: "M3 8h18v12H3V8zM9 8V5h6v3M3 13h18",
  plug: "M9 3v5m6-5v5M6 8h12v3a6 6 0 01-12 0V8zM12 17v4",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9V16h7v-2.1A6 6 0 0012 3z",
};

function isGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`w-3 h-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lastPointer = useRef<string>("");
  const menuId = `nav-menu-${group.label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="nav-link inline-flex items-center gap-1.5 bg-transparent border-0 p-0 cursor-pointer"
        aria-expanded={open}
        aria-controls={menuId}
        onPointerDown={(e) => {
          lastPointer.current = e.pointerType;
        }}
        onClick={(e) => {
          // A mouse has already opened the menu on hover — a click must not close it again.
          // Touch, pen and keyboard (detail 0) toggle.
          const mouseClick = e.detail > 0 && lastPointer.current === "mouse";
          setOpen((v) => (mouseClick ? true : !v));
        }}
      >
        {group.label}
        <Chevron open={open} />
      </button>
      {/* pt-3 bridges the gap so the menu stays open while the pointer moves down */}
      <div
        id={menuId}
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-opacity duration-150 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul
          className={`list-none m-0 p-4 bg-white border border-gray-200 rounded-[var(--radius-asp-2xl)] shadow-asp-xl ${
            group.children.length > 5
              ? "grid grid-cols-2 gap-x-8 w-[50rem]"
              : "min-w-[17rem]"
          }`}
        >
          {group.children.map((child, i) => {
            const multi = group.children.length > 5;
            // On a two-column grid the final row should not carry a divider.
            const lastRow = multi ? i >= group.children.length - (group.children.length % 2 || 2) : i === group.children.length - 1;
            return (
              <li key={child.href} className={lastRow ? "" : "border-b border-gray-100"}>
                <Link
                  href={child.href}
                  className="group/item flex items-center gap-3 px-2 py-3 rounded-[var(--radius-asp-md)] text-sm font-bold text-asp-black hover:text-asp-blue hover:bg-asp-surface-light no-underline transition-colors whitespace-nowrap"
                  onClick={() => setOpen(false)}
                >
                  {child.icon && NAV_ICONS[child.icon] && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-asp-md)] bg-asp-blue/[0.07] text-asp-blue transition-colors group-hover/item:bg-asp-blue/15">
                      <svg
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.7}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={NAV_ICONS[child.icon]} />
                      </svg>
                    </span>
                  )}
                  {child.label}
                </Link>
              </li>
            );
          })}
          {group.viewAll && (
            <li className="col-span-full mt-3">
              <Link
                href={group.viewAll.href}
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-asp-md)] border border-gray-300 px-6 py-3 text-sm font-bold text-asp-blue hover:border-asp-blue hover:bg-asp-surface-light no-underline transition-colors"
                onClick={() => setOpen(false)}
              >
                {group.viewAll.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileGroup(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="ASP — Home">
              <Image
                src="/images/logos/asp-white.png"
                alt="ASP"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation — contained pill */}
          <nav
            className="hidden lg:flex items-center gap-7 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-8 py-2.5"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((item) =>
              isGroup(item) ? (
                <DesktopDropdown key={item.label} group={item} />
              ) : (
                <Link key={item.href} href={item.href} className="nav-link no-underline">
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="inline-block bg-asp-blue-light text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-asp-blue transition-all duration-150 no-underline text-sm"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-[var(--radius-asp-md)] hover:bg-white/10 transition-colors ${
              mobileOpen ? "hamburger-open" : ""
            }`}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
          >
            <span className="hamburger-line block w-5 h-0.5 bg-white transition-transform duration-150" />
            <span className="hamburger-line block w-5 h-0.5 bg-white transition-opacity duration-150" />
            <span className="hamburger-line block w-5 h-0.5 bg-white transition-transform duration-150" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-asp-blue/98 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ${
          mobileOpen ? "max-h-[85vh] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="px-6 py-6 space-y-1" aria-label="Mobile Navigation">
          {NAV_LINKS.map((item) => {
            if (!isGroup(item)) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white/85 hover:text-asp-blue-light font-semibold py-3 text-lg no-underline transition-colors"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              );
            }
            const expanded = mobileGroup === item.label;
            const panelId = `mobile-group-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <div key={item.label}>
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-white/85 hover:text-asp-blue-light font-semibold py-3 text-lg bg-transparent border-0 p-0 cursor-pointer transition-colors"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setMobileGroup(expanded ? null : item.label)}
                >
                  {item.label}
                  <Chevron open={expanded} />
                </button>
                <ul id={panelId} hidden={!expanded} className="list-none m-0 pl-4 pb-2 border-l border-white/15">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block text-white/75 hover:text-asp-blue-light font-semibold py-2 text-base no-underline transition-colors"
                        onClick={closeMobile}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <Link
            href="/contact"
            className="block mt-4 bg-asp-blue-light text-white font-bold py-3 px-6 rounded-[var(--radius-asp-md)] text-center no-underline hover:bg-white hover:text-asp-blue transition-all"
            onClick={closeMobile}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
