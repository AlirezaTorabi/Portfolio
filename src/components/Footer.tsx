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
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-row items-center justify-between gap-3 sm:gap-5 md:items-start md:gap-8">
              <div className={`min-w-0 flex-1 ${locale === "fa" ? "text-right" : "text-left"}`}>
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
              </div>

              <div className="flex shrink-0 justify-end md:mt-2 md:min-w-[20rem]">
                <Image
                  src="/footer-img/Developer Skills Tech Illustration.png"
                  alt=""
                  width={1291}
                  height={702}
                  sizes="(max-width: 640px) 26vw, (max-width: 1023px) 28vw, 320px"
                  className={`h-auto w-[5.6rem] max-w-[20rem] object-contain sm:w-[7.5rem] md:w-[11rem] md:translate-y-4 ${locale === "fa" ? "object-right" : "object-left"}`}
                />
              </div>
            </div>

            <nav aria-label={copy.navigation} className={locale === "fa" ? "w-full text-right" : "w-full text-left"}>
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

        <div className="mt-8 border-t border-foreground/10 py-6" />
      </div>
    </footer>
  );
}
