"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { type Locale } from "@/lib/translations";

export function ThemeSwitcher({ locale = "en" }: { locale?: Locale }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const label = locale === "fa" ? "تغییر پوسته‌ی روشن و تیره" : "Toggle light and dark theme";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="pointer-events-auto inline-flex size-11 items-center justify-center bg-transparent text-foreground/70 transition-colors duration-200 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
    >
      <Sun aria-hidden="true" className="hidden size-[18px] dark:block" />
      <Moon aria-hidden="true" className="size-[18px] dark:hidden" />
    </button>
  );
}