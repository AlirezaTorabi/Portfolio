"use client";

import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/button";
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

        <div className="flex flex-col gap-8 py-12 sm:py-16 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:py-20">
          <div className={`min-w-0 flex-1 ${locale === "fa" ? "text-right" : ""} lg:flex lg:flex-col lg:items-end`}>
            <AnimatedHeading
              id="contact-title"
              lines={copy.heading.map((text, index) => ({
                text,
                className: index === 1 ? "text-accent" : undefined,
              }))}
              className="w-full max-w-[32rem] text-left text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:max-w-[36rem] lg:text-right lg:text-[4rem]"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-foreground/65 sm:leading-8 lg:text-left lg:text-lg">
                {copy.introduction}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className={`mt-10 ${locale === "fa" ? "flex justify-end" : "flex justify-start"}`}>
                <Magnetic>
                  <Button asChild size="lg" className="group min-h-12 gap-4 px-6 text-base font-semibold shadow-[0_16px_32px_rgba(15,23,42,0.09)]">
                    <a
                      href="https://t.me/AlirezaToorabi"
                      target="_blank"
                      rel="noopener noreferrer"
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
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.16}
            className="flex min-w-0 flex-shrink-0 items-center justify-center lg:-mt-4 lg:justify-end"
          >
            <div className="rounded-[2rem] border border-foreground/10 bg-card/30 p-2 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur-[2px]">
              <Image
                src="/contact-img/Developer’s Social Contact Hub.png"
                alt=""
                width={1234}
                height={621}
                sizes="(max-width: 1023px) 85vw, 20rem"
                className="h-auto w-full max-w-[20rem] object-contain opacity-100"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
