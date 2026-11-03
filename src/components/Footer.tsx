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
  const isRtl = locale === "fa";

  return (
    <footer className="relative isolate overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:justify-items-center md:gap-6 lg:gap-8">
              <div className="order-1 flex w-full justify-center md:order-1">
                <div className="relative w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-[24rem]">
                  <div className="absolute inset-0 -z-10 rounded-[2rem] bg-accent/8 blur-2xl" />
                  <div className="aspect-[1234/621] overflow-hidden rounded-[2rem] border border-foreground/10 bg-card/50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-[3px] sm:p-4 lg:p-5">
                    <Image
                      src="/footer-img/Developer Skills Tech Illustration.png"
                      alt=""
                      width={1234}
                      height={621}
                      sizes="(max-width: 640px) 42vw, (max-width: 1023px) 30vw, 20rem"
                      className="h-full w-full object-contain opacity-100"
                    />
                  </div>
                </div>
              </div>

              <div className={`order-2 flex w-full min-w-0 justify-center ${isRtl ? "text-right" : "text-left"} md:order-2`}>
                <div className={`w-full max-w-xs text-center md:max-w-md ${isRtl ? "md:text-right" : "md:text-left"}`}>
                  <p className={`flex items-center gap-2.5 text-lg font-medium ${isRtl ? "justify-end" : "justify-start"}`}>
                    {locale === "fa" ? "علیرضا ترابی" : "Alireza Torabi"}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 block size-1.5 shrink-0 rounded-full bg-accent"
                    />
                  </p>
                  <p className="mt-2 text-[0.6875rem] font-medium text-foreground/50">
                    {copy.role}
                  </p>
                  <p className="mt-4 text-base leading-7 text-foreground/60">
                    {copy.tagline}
                  </p>
                </div>
              </div>
            </div>

            <nav aria-label={copy.navigation} className={isRtl ? "w-full text-right" : "w-full text-left"}>
              <ul className="mt-3 flex flex-col items-center justify-center gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 md:gap-5">
                {navigation.map((item) => (
                  <li key={item.label} className="sm:inline-flex">
                    <a
                      href={item.href}
                      className={`group -mx-2 inline-flex min-h-11 items-center justify-center gap-3 px-2 text-base text-foreground/65 transition-colors duration-200 hover:text-foreground ${focusRing}`}
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

        <div className="mt-6 py-4" />
      </div>
    </footer>
  );
}
