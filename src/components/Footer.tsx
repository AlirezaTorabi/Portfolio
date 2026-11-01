import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/Reveal";
import { formatNumber, translations, type Locale } from "@/lib/translations";

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const copy = translations[locale].footer;
  const navigation = [
    { label: translations[locale].navigation.home, href: "#top" },
    { label: translations[locale].navigation.about, href: "#about" },
    { label: translations[locale].navigation.work, href: "#work" },
    { label: translations[locale].navigation.contact, href: "#contact" },
  ];
  return (
    <footer className="relative isolate overflow-hidden border-t border-foreground/10">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)] md:gap-14 lg:gap-20">
            <div>
              <p className="flex items-center gap-2.5 text-lg font-medium">
                {locale === "fa" ? "علیرضا ترابی" : "Alireza Torabi"}
                <span
                  aria-hidden="true"
                  className="mt-0.5 block size-1.5 shrink-0 bg-accent"
                />
              </p>
              <p className="mt-2 text-[0.6875rem] font-medium text-foreground/50">
                {copy.role}
              </p>
              <p className="mt-6 max-w-xs text-base leading-7 text-foreground/60">
                {copy.tagline}
              </p>
              <Image
                src="/footer-img/footer-transparent.png"
                alt=""
                width={1291}
                height={702}
                sizes="(max-width: 640px) 80vw, 320px"
                className={`mt-5 h-auto w-full max-w-[20rem] object-contain ${locale === "fa" ? "object-right" : "object-left"}`}
              />
            </div>

            <nav aria-label={copy.navigation}>
              <p className="text-[0.6875rem] font-medium text-foreground/50">
                {copy.navigation}
              </p>
              <ul className="mt-4 space-y-1">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`group -mx-2 inline-flex min-h-11 items-center gap-3 px-2 text-base text-foreground/65 transition-colors duration-200 hover:text-foreground ${focusRing}`}
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-4 bg-foreground/20 transition-all duration-200 group-hover:w-6 group-hover:bg-accent"
                      />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </Reveal>

        <p
          aria-hidden="true"
          className="mt-14 max-w-full select-none text-2xl font-medium leading-none text-foreground/[0.055] sm:text-5xl lg:text-8xl"
        >
          {locale === "fa" ? "علیرضا ترابی" : "ALIREZA TORABI"}
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-foreground/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground/50">
            © {formatNumber(year, locale)} {locale === "fa" ? "علیرضا ترابی. " : "Alireza Torabi. "}{copy.copyright}
          </p>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="group min-h-11 self-start px-3.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[#3f3f46] hover:border-[#93c5fd] hover:text-[#09090b] sm:self-auto"
          >
            <a href="#top">
              {copy.backToTop}
              <span
                aria-hidden="true"
                className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5"
              >
                ↑
              </span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
