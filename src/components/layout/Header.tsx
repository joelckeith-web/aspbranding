"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            <span className="hamburger-line block w-5 h-0.5 bg-white transition-transform duration-150" />
            <span className="hamburger-line block w-5 h-0.5 bg-white transition-opacity duration-150" />
            <span className="hamburger-line block w-5 h-0.5 bg-white transition-transform duration-150" />
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
