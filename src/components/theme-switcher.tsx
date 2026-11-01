"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/translations";

export function ThemeSwitcher({ locale = "en" }: { locale?: Locale }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const label = locale === "fa" ? "تغییر پوسته‌ی روشن و تیره" : "Toggle light and dark theme";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="pointer-events-auto relative isolate size-11 rounded-full text-[#3f3f46] transition-colors duration-200 before:absolute before:inset-1 before:z-0 before:rounded-full before:transition-colors before:content-[''] hover:bg-transparent hover:before:bg-[#e8ecf0] hover:text-[#09090b] dark:text-[#e4e4e7] dark:hover:bg-transparent dark:hover:before:bg-white dark:hover:text-[#09090b] motion-reduce:transition-none [&_svg]:relative [&_svg]:z-10"
    >
      <Sun aria-hidden="true" className="hidden size-[18px] dark:block" />
      <Moon aria-hidden="true" className="size-[18px] dark:hidden" />
    </Button>
  );
}