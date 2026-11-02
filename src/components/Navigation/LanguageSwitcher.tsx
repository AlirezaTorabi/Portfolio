"use client";

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
  const copy = translations[locale].language;
  const label = locale === "fa" ? copy.switchToEnglish : copy.switchToPersian;

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
          className="pointer-events-auto relative isolate size-11 rounded-full text-[#3f3f46] before:absolute before:inset-1 before:z-0 before:rounded-full before:transition-colors before:content-[''] hover:bg-transparent hover:before:bg-[#e8ecf0] hover:text-[#09090b] dark:text-[#e4e4e7] dark:hover:bg-transparent dark:hover:before:bg-white dark:hover:text-[#09090b] [&_svg]:relative [&_svg]:z-10"
        >
          <Languages aria-hidden="true" className="size-[17px]" />
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
