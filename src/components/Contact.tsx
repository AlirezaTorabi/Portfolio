"use client";

import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import { translations, type Locale } from "@/lib/translations";

export default function Contact({ locale = "en" }: { locale?: Locale }) {
  const copy = translations[locale].contact;
  const isRtl = locale === "fa";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate scroll-mt-20 pt-4"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden="true" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <Reveal>
          <div className="flex items-center justify-between gap-6 pb-5">
            <p className="text-[0.6875rem] font-medium text-foreground/60">
              {copy.eyebrow}
            </p>
            <p className="hidden font-mono text-xs text-foreground/55 sm:block">
              {copy.role}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,420px)] lg:gap-8 lg:py-6">
          <div
            className={`order-2 min-w-0 ${isRtl ? "text-right" : "text-left"} flex flex-col ${
              isRtl ? "lg:items-end" : "lg:items-start"
            }`}
          >
            <AnimatedHeading
              id="contact-title"
              lines={copy.heading.map((text, index) => ({
                text,
                className:
                  index === 1
                    ? `text-accent ${isRtl ? "display-persian" : ""}`
                    : isRtl
                      ? "display-persian"
                      : undefined,
              }))}
              className={`w-full max-w-[32rem] text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:max-w-[36rem] lg:text-[4rem] ${
                isRtl ? "text-right" : "text-left"
              }`}
            />

            <Reveal delay={0.1}>
              <p
                className={`mt-6 max-w-xl text-pretty text-base leading-7 text-foreground/65 sm:leading-8 lg:text-lg ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                {copy.introduction}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className={`mt-8 flex justify-center sm:justify-center ${isRtl ? "sm:justify-end" : "sm:justify-start"}`}>
                <Magnetic>
                  <Button
                    asChild
                    size="lg"
                    className="group min-h-12 gap-4 px-6 text-base font-semibold shadow-[0_16px_32px_rgba(15,23,42,0.09)]"
                  >
                    <a
                      href="https://t.me/AlirezaToorabi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{copy.startConversation}</span>
                      <span
                        aria-hidden="true"
                        className={`text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isRtl ? "-scale-x-100" : ""
                        }`}
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
            className="order-1 flex items-center justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[22rem]">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-accent/8 blur-2xl" />
              <div className="rounded-[2rem] border border-foreground/10 bg-card/50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-[3px] sm:p-4 lg:p-5">
                <Image
                  src="/contact-img/Developer’s Social Contact Hub.png"
                  alt=""
                  width={1234}
                  height={621}
                  sizes="(max-width: 640px) 42vw, (max-width: 1023px) 30vw, 22rem"
                  className="h-auto w-full object-contain opacity-100"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
