"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon } from "@/components/animate-ui/icons/moon";
import { Sun03 } from "@/components/animate-ui/icons/hugeicons/sun-03";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { type Locale } from "@/lib/translations";

export function ThemeSwitcher({ locale = "en" }: { locale?: Locale }) {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = document.documentElement;
    const updateThemeState = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateThemeState();
    const observer = new MutationObserver(updateThemeState);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const label = locale === "fa" ? "تغییر پوسته‌ی روشن و تیره" : "Toggle light and dark theme";

  return (
    <HoverCard openDelay={120} closeDelay={60}>
      <HoverCardTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          aria-label={label}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="pointer-events-auto relative isolate size-11 rounded-full text-[#3f3f46] transition-colors duration-200 before:absolute before:inset-1 before:z-0 before:rounded-full before:transition-colors before:content-[''] hover:bg-transparent hover:before:bg-[#e8ecf0] hover:text-[#09090b] dark:text-[#e4e4e7] dark:hover:bg-transparent dark:hover:before:bg-white dark:hover:text-[#09090b] motion-reduce:transition-none [&_span]:pointer-events-auto [&_svg]:pointer-events-auto [&_svg]:relative [&_svg]:z-10"
        >
          {isDark ? (
            <Sun03 animateOnHover className="size-[18px]" />
          ) : (
            <Moon animateOnHover animation="spin" className="size-[18px]" />
          )}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        side={locale === "fa" ? "right" : "left"}
        align="center"
        sideOffset={12}
        className="flex w-fit max-w-[220px] items-center justify-center rounded-full border border-[#e4e4e7]/80 bg-white/90 px-3 py-1.5 text-[11px] font-medium leading-none whitespace-nowrap text-[#18181b] shadow-lg shadow-black/5 backdrop-blur-md dark:border-white/10 dark:bg-[#111113]/90 dark:text-[#f4f4f5]"
      >
        {label}
      </HoverCardContent>
    </HoverCard>
  );
}