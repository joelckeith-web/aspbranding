"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

function isLightBackground(el: Element | null): boolean {
  if (!el) return false;
  const style = window.getComputedStyle(el);
  const bg = style.backgroundColor;
  // Parse rgb(a) values
  const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return false;
  const [, r, g, b] = match.map(Number);
  // Perceived brightness formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 180;
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overLight, setOverLight] = useState(false);

  const checkBackground = useCallback(() => {
    // Sample a point just below the header (about 70px down, center of screen)
    const x = window.innerWidth / 2;
    const y = 70;
    // Temporarily hide the header to sample what's behind it
    const header = document.querySelector("header");
    if (header) {
      const prevPointerEvents = header.style.pointerEvents;
      const prevVisibility = header.style.visibility;
      header.style.pointerEvents = "none";
      header.style.visibility = "hidden";
      const el = document.elementFromPoint(x, y);
      header.style.pointerEvents = prevPointerEvents;
      header.style.visibility = prevVisibility;

      if (el) {
        // Walk up to find the nearest element with a background
        let current: Element | null = el;
        let foundLight = false;
        while (current && current !== document.documentElement) {
          if (isLightBackground(current)) {
            foundLight = true;
            break;
          }
          const bg = window.getComputedStyle(current).backgroundColor;
          const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]*)/);
          if (match) {
            const alpha = match[4] !== "" ? parseFloat(match[4]) : 1;
            if (alpha > 0.5) break; // Has a non-transparent dark background
          }
          current = current.parentElement;
        }
        setOverLight(foundLight);
      }
    }
  }, []);

  useEffect(() => {
    checkBackground();
    window.addEventListener("scroll", checkBackground, { passive: true });
    return () => window.removeEventListener("scroll", checkBackground);
  }, [checkBackground]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="ASP — Home">
              <Image
                src={overLight ? "/images/logos/asp-black.png" : "/images/logos/asp-white.png"}
                alt="ASP"
                width={120}
                height={32}
                className="h-8 w-auto transition-opacity duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation — contained pill */}
          <nav
            className={`hidden lg:flex items-center gap-7 backdrop-blur-md border rounded-full px-8 py-2.5 transition-all duration-300 ${
              overLight
                ? "bg-asp-blue/95 border-asp-blue/80 shadow-asp-md"
                : "bg-white/10 border-white/15"
            }`}
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link no-underline">
                {link.label}
              </Link>
            ))}
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
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`hamburger-line block w-5 h-0.5 transition-all duration-150 ${overLight ? "bg-asp-blue" : "bg-white"}`} />
            <span className={`hamburger-line block w-5 h-0.5 transition-all duration-150 ${overLight ? "bg-asp-blue" : "bg-white"}`} />
            <span className={`hamburger-line block w-5 h-0.5 transition-all duration-150 ${overLight ? "bg-asp-blue" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-asp-blue/98 backdrop-blur-lg border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-6 space-y-1" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/85 hover:text-asp-blue-light font-semibold py-3 text-lg no-underline transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 bg-asp-blue-light text-white font-bold py-3 px-6 rounded-[var(--radius-asp-md)] text-center no-underline hover:bg-white hover:text-asp-blue transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
