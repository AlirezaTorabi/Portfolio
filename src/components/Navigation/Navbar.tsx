"use client";
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

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 isolate">
      <div className="relative mx-auto h-0 max-w-[1800px] md:flex md:h-[76px] md:items-center md:justify-between md:gap-4 md:px-5 lg:px-7">
        <a
          href="#top"
          aria-label="Home"
          className="absolute left-4 top-[23px] flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5100] md:static"
        >
          <Image
            src="/at-logo-light.png"
            alt="Alireza Torabi logo"
            width={91}
            height={120}
            className="h-8 w-auto shrink-0 md:h-9"
          />
        </a>

        <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2">
          <GooeyNav
            items={items}
            initialActiveIndex={0}
            theme="dark"
            size="sm"
            frame
            particleCount={15}
            spread={56}
            animationTime={600}
            timeVariance={300}
            gooeyness={0.5}
            wobble={0.5}
            hoverEffect
            onChange={(index, item) => console.log(index, item.label)}
            colors={["#ff5a1f", "#ff8a3a", "#ffb020"]}
            className="shrink-0 [&_ul]:flex-nowrap"
          />
        </div>
        <MobileNavigationSidebar items={items} />
      </div>
    </header>
  );
}
