"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GooeyNav from "@/components/Navigation/GooeyNav";
import MobileNavigationSidebar from "@/components/Navigation/MobileNavigationSidebar";

const items = [
  {
    label: "HOME",
    href: "#top",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v12h14V9M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    label: "WORK",
    href: "#work",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </svg>
    ),
  },
  {
    label: "ABOUT",
    href: "#about",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    label: "CONTACT",
    href: "#contact",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

const SECTION_IDS = ["top", "work", "about", "contact"];
// Every section uses `scroll-mt-20` (80px). The activation line sits just
// below that so a section still counts as active after an anchor scroll
// settles, even if the browser rounds the final position by a fraction.
const NAV_OFFSET = 84;

// How long the clicked item is protected from the scroll spy while the
// browser smooth-scrolls to its section. `scrollend` clears it sooner.
const NAV_INTENT_TIMEOUT = 2000;

interface NavigationIntent {
  index: number;
  expiresAt: number;
}

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intentRef = useRef<NavigationIntent | null>(null);
  const intentTimeoutRef = useRef<number | null>(null);
  const scheduleRef = useRef<() => void>(() => {});

  const handleNavigate = useCallback((index: number) => {
    // Highlight the clicked link immediately. The intent below keeps the
    // scroll spy from pulling the indicator back to the previous section
    // while the browser is still animating towards the new one.
    intentRef.current = {
      index,
      expiresAt: performance.now() + NAV_INTENT_TIMEOUT,
    };
    setActiveIndex(index);

    if (intentTimeoutRef.current !== null) {
      window.clearTimeout(intentTimeoutRef.current);
    }
    intentTimeoutRef.current = window.setTimeout(() => {
      intentTimeoutRef.current = null;
      if (!intentRef.current) return;
      intentRef.current = null;
      scheduleRef.current();
    }, NAV_INTENT_TIMEOUT);
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const intent = intentRef.current;
      if (intent) {
        if (performance.now() < intent.expiresAt) return;
        intentRef.current = null;
      }

      let next = 0;

      SECTION_IDS.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= NAV_OFFSET) {
          next = index;
        }
      });

      setActiveIndex((current) => (current === next ? current : next));
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    scheduleRef.current = schedule;

    // Manual scrolling or the end of the smooth scroll releases the intent so
    // the scroll spy becomes the authority on the active item again.
    const releaseIntent = () => {
      if (!intentRef.current) return;
      intentRef.current = null;
      if (intentTimeoutRef.current !== null) {
        window.clearTimeout(intentTimeoutRef.current);
        intentTimeoutRef.current = null;
      }
      schedule();
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("scrollend", releaseIntent);
    window.addEventListener("wheel", releaseIntent, { passive: true });
    window.addEventListener("touchmove", releaseIntent, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("scrollend", releaseIntent);
      window.removeEventListener("wheel", releaseIntent);
      window.removeEventListener("touchmove", releaseIntent);
      if (frame) window.cancelAnimationFrame(frame);
      if (intentTimeoutRef.current !== null) {
        window.clearTimeout(intentTimeoutRef.current);
        intentTimeoutRef.current = null;
      }
      scheduleRef.current = () => {};
    };
  }, []);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 isolate bg-transparent backdrop-blur-none"
    >
      <div className="relative mx-auto flex h-[76px] max-w-[1800px] items-center justify-between gap-4 pl-4 pr-[10px] md:px-5 lg:px-7">
        <Link
          href="/"
          aria-label="Home"
          onClick={(event) => {
            if (window.location.pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="pointer-events-auto -m-1.5 flex shrink-0 items-center p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133]"
        >
          <span className="relative block h-8 w-8 shrink-0 md:h-9 md:w-9">
            <Image
              src="/at-logo-dark.png"
              alt="Alireza Torabi Logo"
              fill
              sizes="36px"
              priority
              className="object-contain"
            />
          </span>
        </Link>

        <div className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <GooeyNav
            items={items}
            activeIndex={activeIndex}
            onChange={handleNavigate}
            label="Primary navigation"
            theme="dark"
            size="sm"
            frame
            particleCount={15}
            spread={56}
            animationTime={200}
            timeVariance={300}
            gooeyness={0.5}
            wobble={0.5}
            hoverEffect
            colors={["#ff5a1f", "#ff8a3a", "#ffb020"]}
            className="shrink-0 [&_ul]:flex-nowrap"
          />
        </div>
        <MobileNavigationSidebar
          items={items}
          activeIndex={activeIndex}
          onNavigate={handleNavigate}
        />
      </div>
    </header>
  );
}
