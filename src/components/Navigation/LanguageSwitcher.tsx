"use client";

import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
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
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        onNavigate?.();
        router.push(locale === "fa" ? "/" : "/fa");
      }}
      className="pointer-events-auto inline-flex size-11 items-center justify-center bg-transparent p-0 text-foreground/70 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Languages aria-hidden="true" className="size-[17px]" />
    </button>
  );
}
