"use client";

import { useEffect, useRef, useState } from "react";
import GooeyNav, { type GooeyNavItem } from "@/components/Navigation/GooeyNav";

interface MobileNavigationSidebarProps {
  items: GooeyNavItem[];
}

export default function MobileNavigationSidebar({ items }: MobileNavigationSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const iconOnlyItems = items.map((item) => ({
    ...item,
    ariaLabel: item.ariaLabel ?? item.label,
    label: undefined,
  }));

  function closeMenu() {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    menuButtonRef.current?.focus();
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-sidebar"
        onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
        className={`fixed right-[10px] top-[21px] z-[80] flex h-9 w-9 items-center justify-center bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5100] md:hidden ${isOpen ? "text-white" : "text-[#060607]"}`}
      >
        <span className="relative h-5 w-5" aria-hidden="true">
          <span className={`absolute left-0 top-1/2 h-px w-full bg-current transition-[rotate,translate] duration-200 ${isOpen ? "rotate-45" : "-translate-y-[6px]"}`} />
          <span className={`absolute left-0 top-1/2 h-px w-full bg-current transition-opacity duration-150 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute left-0 top-1/2 h-px w-full bg-current transition-[rotate,translate] duration-200 ${isOpen ? "-rotate-45" : "translate-y-[6px]"}`} />
        </span>
      </button>

      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[60] cursor-default bg-[#060607]/35 backdrop-blur-[2px] transition-opacity duration-400 ease-out md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        id="mobile-navigation-sidebar"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed left-[10px] right-[70px] top-[10px] z-[70] flex items-center rounded-full border border-white/10 bg-[#26232e]/95 px-2 py-1.5 shadow-xl backdrop-blur-xl transition-transform duration-500 ease-out motion-reduce:transition-none md:hidden ${isOpen ? "translate-y-0" : "-translate-y-[calc(100%+10px)]"}`}
      >
        <GooeyNav
          items={iconOnlyItems}
          initialActiveIndex={0}
          theme="dark"
          size="sm"
          frame={false}
          particleCount={15}
          spread={56}
          animationTime={600}
          timeVariance={300}
          gooeyness={0.5}
          wobble={0.5}
          hoverEffect={false}
          onChange={(index, item) => console.log(index, item.ariaLabel)}
          colors={["#ff5a1f", "#ff8a3a", "#ffb020"]}
          className="w-full [&>div]:w-full [&_ul]:w-full [&_ul]:flex-row [&_ul]:flex-nowrap [&_ul]:items-center [&_ul]:justify-center [&_ul]:gap-3 max-[400px]:[&_ul]:gap-2 [&_li]:w-auto [&_a]:h-11 [&_a]:w-16 [&_a]:justify-center [&_a]:gap-0 [&_a]:px-0 [&_a]:py-0 [&_li>span]:h-11 [&_li>span]:w-16 [&_li>span]:justify-center [&_li>span]:px-0 [&_li>span]:py-0 max-[400px]:[&_a]:h-10 max-[400px]:[&_a]:w-11 max-[400px]:[&_li>span]:h-10 max-[400px]:[&_li>span]:w-11"
        />
      </aside>
    </>
  );
}