"use client";

import { Button } from "@/components/ui/button";

import { useEffect, useMemo, useRef, useState } from "react";
import GooeyNav, { type GooeyNavItem } from "@/components/Navigation/GooeyNav";
import LanguageSwitcher from "@/components/Navigation/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { translations, type Locale } from "@/lib/translations";

interface MobileNavigationSidebarProps {
  items: GooeyNavItem[];
  activeIndex: number;
  theme: "light" | "dark";
  locale: Locale;
  onNavigate: (index: number) => void;
}

export default function MobileNavigationSidebar({
  items,
  activeIndex,
  theme,
  locale,
  onNavigate,
}: MobileNavigationSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isRtl = locale === "fa";
  const copy = translations[locale];
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const iconOnlyItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        ariaLabel: item.ariaLabel ?? item.label,
        label: undefined,
      })),
    [items],
  );

  function closeMenu() {
    setIsOpen(false);
    // Release the scroll lock before the link's default anchor navigation runs.
    document.body.style.overflow = "";
    menuButtonRef.current?.focus();
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !sidebarRef.current) return;

      const focusable = [
        menuButtonRef.current,
        ...Array.from(
          sidebarRef.current.querySelectorAll<HTMLElement>("a[href], button"),
        ),
        ...Array.from(
          controlsRef.current?.querySelectorAll<HTMLElement>("button") ?? [],
        ),
      ].filter((element): element is HTMLElement => Boolean(element));

      if (focusable.length < 2) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    menuButtonRef.current?.focus();
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const syncScrollLock = () => {
      if (desktop.matches) {
        setIsOpen(false);
        return;
      }
      document.body.style.overflow = "hidden";
    };

    syncScrollLock();
    desktop.addEventListener("change", syncScrollLock);
    return () => {
      desktop.removeEventListener("change", syncScrollLock);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative md:hidden">
        <Button
          ref={menuButtonRef}
          type="button"
          variant="ghost"
          size="icon-lg"
          aria-label={isOpen ? copy.navigation.close : copy.navigation.open}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-sidebar"
          onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
          className="pointer-events-auto z-[80] size-11 shrink-0 text-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:ring-accent"
        >
          <span className="relative h-5 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-1/2 h-px w-full bg-current transition-[rotate,translate] duration-200 ${isOpen ? "rotate-45" : "-translate-y-[6px]"}`} />
            <span className={`absolute left-0 top-1/2 h-px w-full bg-current transition-opacity duration-150 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-1/2 h-px w-full bg-current transition-[rotate,translate] duration-200 ${isOpen ? "-rotate-45" : "translate-y-[6px]"}`} />
          </span>
        </Button>

        <div
          ref={controlsRef}
          dir={isRtl ? "rtl" : "ltr"}
          data-mobile-controls
          aria-hidden={!isOpen}
          inert={!isOpen}
          className={`pointer-events-auto absolute end-0 top-full z-[80] mt-1 flex w-11 flex-col items-center gap-0 rounded-full border border-border bg-card/90 p-0 shadow-[var(--shadow-soft)] transition-[opacity,translate] duration-200 ease-out will-change-[translate,opacity] motion-reduce:transition-none ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
        >
          <ThemeSwitcher locale={locale} />
          <LanguageSwitcher locale={locale} onNavigate={closeMenu} />
        </div>
      </div>

      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] cursor-default bg-transparent transition-opacity duration-200 ease-out md:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        ref={sidebarRef}
        id="mobile-navigation-sidebar"
        dir={isRtl ? "rtl" : "ltr"}
        aria-label={copy.navigation.mobile}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`pointer-events-auto fixed left-1/2 top-[10px] z-[70] flex w-fit max-w-[calc(100%-70px)] -translate-x-1/2 items-center rounded-full border border-border/80 bg-background/75 px-2 py-1 shadow-[var(--shadow-soft)] backdrop-blur-2xl transition-[translate,opacity] duration-200 ease-out will-change-translate motion-reduce:transition-none md:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-[calc(100%+10px)] opacity-0"}`}
      >
        <GooeyNav
          items={iconOnlyItems}
          activeIndex={activeIndex}
          label={copy.navigation.mobile}
          theme={theme}
          color="#2f5df6"
          activeTextColor="#f5f8ff"
          size="sm"
          frame={false}
          particleCount={12}
          spread={56}
          animationTime={600}
          timeVariance={300}
          gooeyness={0.5}
          wobble={0.5}
          hoverEffect
          onChange={(index) => {
            onNavigate(index);
            document.body.style.overflow = "";
          }}
          colors={["#2f5df6", "#5d7ef7", "#8fb5ff"]}
          className={`w-full [&>div]:w-full [&_ul]:w-full [&_ul]:flex-nowrap [&_ul]:items-center [&_ul]:justify-center [&_ul]:gap-3 max-[440px]:[&_ul]:gap-0 [&_li]:w-auto [&_a]:h-11 [&_a]:w-16 [&_a]:justify-center [&_a]:gap-0 [&_a]:px-0 [&_a]:py-0 [&_li>span]:h-11 [&_li>span]:w-16 [&_li>span]:justify-center [&_li>span]:px-0 [&_li>span]:py-0 max-[440px]:[&_a]:h-11 max-[440px]:[&_a]:w-11 max-[440px]:[&_li>span]:h-11 max-[440px]:[&_li>span]:w-11 ${isRtl ? "[&_ul]:flex-row-reverse" : "[&_ul]:flex-row"}`}
        />
      </aside>
    </>
  );
}