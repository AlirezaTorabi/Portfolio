"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { translations, type Locale } from "@/lib/translations";

export default function LanguageSwitcher({
  locale,
  onNavigate,
}: {
  locale: Locale;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const copy = translations[locale].language;
  const label = locale === "fa" ? copy.switchToEnglish : copy.switchToPersian;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateDevice = () => setIsMobile(mediaQuery.matches);

    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);

    return () => mediaQuery.removeEventListener("change", updateDevice);
  }, []);

  return (
    <HoverCard openDelay={120} closeDelay={60}>
      <HoverCardTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          aria-label={label}
          onClick={() => {
            onNavigate?.();
            router.push(locale === "fa" ? "/" : "/fa");
          }}
          className="pointer-events-auto relative isolate size-11 rounded-full text-foreground/80 before:absolute before:inset-1 before:z-0 before:rounded-full before:transition-colors before:content-[''] hover:bg-transparent hover:before:bg-muted hover:text-foreground [&_svg]:relative [&_svg]:z-10"
        >
          <Languages aria-hidden="true" className="size-[17px]" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        side={isMobile ? (locale === "fa" ? "right" : "left") : "bottom"}
        align="center"
        sideOffset={12}
        className="flex w-fit max-w-[220px] items-center justify-center rounded-full border border-border/80 bg-card/90 px-3 py-1.5 text-[11px] font-medium leading-none whitespace-nowrap text-card-foreground shadow-[var(--shadow-soft)] backdrop-blur-md"
      >
        {label}
      </HoverCardContent>
    </HoverCard>
  );
}
