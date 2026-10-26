"use client";

import { useTheme } from "next-themes";
import { ThemeSwitcher as KiboThemeSwitcher } from "@/components/kibo-ui/theme-switcher";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <KiboThemeSwitcher
      value={(theme as "light" | "dark" | "system") ?? "system"}
      onChange={(next) => setTheme(next)}
    />
  );
}