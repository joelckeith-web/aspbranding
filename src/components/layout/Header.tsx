"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, type NavItem, type NavGroup } from "@/lib/constants";

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
          className={`list-none m-0 p-2 bg-white border border-gray-200 rounded-[var(--radius-asp-lg)] shadow-asp-xl ${
            group.children.length > 5
              ? "grid grid-cols-2 gap-x-1 min-w-[34rem]"
              : "min-w-[15rem]"
          }`}
        >
          {group.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block px-4 py-2.5 rounded-[var(--radius-asp-sm)] text-sm font-semibold text-asp-black/80 hover:text-asp-blue hover:bg-asp-surface-light no-underline transition-colors whitespace-nowrap"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            </li>
          ))}
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
