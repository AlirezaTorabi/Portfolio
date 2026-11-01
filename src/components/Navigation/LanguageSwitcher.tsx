"use client";

import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      aria-label={label}
      title={label}
      onClick={() => {
        onNavigate?.();
        router.push(locale === "fa" ? "/" : "/fa");
      }}
      className="pointer-events-auto relative isolate size-11 rounded-full text-[#3f3f46] before:absolute before:inset-1 before:z-0 before:rounded-full before:transition-colors before:content-[''] hover:bg-transparent hover:before:bg-[#e8ecf0] hover:text-[#09090b] dark:text-[#e4e4e7] dark:hover:bg-transparent dark:hover:before:bg-white dark:hover:text-[#09090b] [&_svg]:relative [&_svg]:z-10"
    >
      <Languages aria-hidden="true" className="size-[17px]" />
    </Button>
  );
}
