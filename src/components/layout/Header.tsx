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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-asp-md" : ""
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="ASP — Home">
              <Image
                src={scrolled ? "/images/logos/asp-black.png" : "/images/logos/asp-white.png"}
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
            className={`hidden lg:flex items-center gap-7 backdrop-blur-md border rounded-full px-8 py-2.5 transition-all duration-300 ${
              scrolled
                ? "bg-gray-100/80 border-gray-200"
                : "bg-white/10 border-white/15"
            }`}
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${scrolled ? "nav-link-scrolled" : "nav-link"} no-underline`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`inline-block font-bold py-2 px-6 rounded-full transition-all duration-150 no-underline text-sm ${
                scrolled
                  ? "bg-asp-blue text-white hover:bg-asp-blue-dark"
                  : "bg-asp-blue-light text-white hover:bg-white hover:text-asp-blue"
              }`}
              style={scrolled ? undefined : { textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
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
            <span className={`hamburger-line block w-5 h-0.5 transition-transform duration-150 ${scrolled ? "bg-asp-blue" : "bg-white"}`} />
            <span className={`hamburger-line block w-5 h-0.5 transition-opacity duration-150 ${scrolled ? "bg-asp-blue" : "bg-white"}`} />
            <span className={`hamburger-line block w-5 h-0.5 transition-transform duration-150 ${scrolled ? "bg-asp-blue" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden backdrop-blur-lg border-t overflow-hidden transition-all duration-300 ${
          scrolled ? "bg-white/98 border-gray-200" : "bg-asp-blue/98 border-white/10"
        } ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-6 space-y-1" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-semibold py-3 text-lg no-underline transition-colors ${
                scrolled ? "text-gray-700 hover:text-asp-blue" : "text-white/85 hover:text-asp-blue-light"
              }`}
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
