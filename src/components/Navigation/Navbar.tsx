"use client";
import { useEffect, useState } from "react";
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
const NAV_OFFSET = 84;

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
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

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const overDark = activeIndex > 0;

  return (
    <header className="fixed inset-x-0 top-0 z-50 isolate pointer-events-none">
      <div className="relative mx-auto flex h-[76px] max-w-[1800px] items-center justify-between gap-4 pl-4 pr-[10px] md:px-5 lg:px-7">
        <a
          href="#top"
          aria-label="Home"
          className="pointer-events-auto -m-1.5 flex shrink-0 items-center p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5100]"
        >
          <span className="relative block h-8 w-8 shrink-0 md:h-9 md:w-9">
            <Image
              src="/at-logo-light.png"
              alt=""
              fill
              sizes="36px"
              className={`object-contain transition-opacity duration-200 motion-reduce:transition-none ${overDark ? "opacity-0" : "opacity-100"}`}
            />
            <Image
              src="/at-logo-dark.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="36px"
              className={`object-contain transition-opacity duration-200 motion-reduce:transition-none ${overDark ? "opacity-100" : "opacity-0"}`}
            />
          </span>
        </a>

        <div className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <GooeyNav
            items={items}
            activeIndex={activeIndex}
            onChange={(index) => setActiveIndex(index)}
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
          onNavigate={setActiveIndex}
          overDark={overDark}
        />
      </div>
    </header>
  );
}
