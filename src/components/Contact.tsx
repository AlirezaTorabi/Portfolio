"use client";

import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import { translations, type Locale } from "@/lib/translations";

export default function Contact({ locale = "en" }: { locale?: Locale }) {
  const copy = translations[locale].contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate scroll-mt-20 border-t border-foreground/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-foreground/15 pb-5">
            <p className="text-[0.6875rem] font-medium text-foreground/60">
              {copy.eyebrow}
            </p>
            <p className="hidden font-mono text-xs text-foreground/55 sm:block">
              {copy.role}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <AnimatedHeading
              id="contact-title"
              lines={copy.heading.map((text, index) => ({
                text,
                className: index === 1 ? "text-accent" : undefined,
              }))}
              className="max-w-2xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-foreground/65 sm:leading-8">
                {copy.introduction}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10">
                <Magnetic>
                  <a
                    href="https://t.me/AlirezaToorabi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center gap-4 bg-accent px-6 text-base font-semibold text-on-accent transition-colors duration-200 hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span>{copy.startConversation}</span>
                    <span
                      aria-hidden="true"
                      className={`text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${locale === "fa" ? "-scale-x-100" : ""}`}
                    >
                      ↗
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Magnetic>
              </div>
            </Reveal>

          </div>

          <Reveal
            delay={0.16}
            className="flex min-w-0 items-center justify-center lg:justify-end"
          >
            <Image
              src="/contact-img/contact-transparent.png"
              alt=""
              width={1234}
              height={621}
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="h-auto w-full max-w-[42rem] object-contain opacity-100"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
