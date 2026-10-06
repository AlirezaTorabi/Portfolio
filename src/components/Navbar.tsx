"use client";

import { useState } from "react";

const navItems = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-[1800px]">
        <nav
          aria-label="Main navigation"
          className="relative flex min-h-16 flex-wrap items-center justify-between gap-x-3 gap-y-1 px-1 pb-2 sm:flex-nowrap sm:px-5 sm:pb-0"
        >
          <div className="flex min-w-0 items-center">
            <a
              href="#top"
              className="truncate text-[0.58rem] font-medium uppercase tracking-[0.16em] text-[#F5F5F2] transition-colors duration-200 hover:text-white sm:text-[0.62rem] sm:tracking-[0.2em]"
            >
              ALIREZA TORABI
            </a>
          </div>

          <div className="order-3 flex w-full items-center justify-center gap-5 sm:order-none sm:w-auto sm:gap-7 md:absolute md:left-1/2 md:-translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={activeHref === item.href ? "location" : undefined}
                className={`nav-minimal-link ${activeHref === item.href ? "is-active" : ""}`}
                onClick={() => setActiveHref(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            aria-label="Get in touch"
            className="group flex h-9 w-9 shrink-0 items-center justify-center text-white/75 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28B2C]/70 sm:h-10 sm:w-auto sm:gap-2 sm:px-1"
          >
            <span className="hidden text-[0.55rem] font-semibold uppercase tracking-[0.14em] sm:inline">
              Let&apos;s talk
            </span>
            <span aria-hidden="true" className="text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
