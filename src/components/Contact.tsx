"use client";

import Image from "next/image";
import DynamicIsland from "@/components/smoothui/dynamic-island";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-foreground/10"
    >
      <Image
        src="/contact-img/contact-transparent.png"
        alt=""
        width={1234}
        height={621}
        sizes="(max-width: 640px) 100vw, 80vw"
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-auto w-[min(100vw,64rem)] object-contain opacity-[0.1] dark:opacity-[0.16]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-foreground/15 pb-5">
            <p className="text-[0.6875rem] font-medium text-foreground/60">
              Get in Touch
            </p>
            <p className="hidden font-mono text-xs text-foreground/55 sm:block">
              Front-End Developer / UI Designer
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-20 lg:py-20">
          <div>
            <AnimatedHeading
              id="contact-title"
              lines={[
                { text: "Let's build something" },
                { text: "great together.", className: "text-accent" },
              ]}
              className="max-w-2xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-pretty text-sm leading-7 text-foreground/65 sm:text-base sm:leading-8">
                Have a project in mind or an opportunity to discuss? I&apos;d
                love to hear from you. Feel free to reach out through any of the
                channels below.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10">
                <Magnetic>
                  <a
                    href="https://t.me/AlirezaToorabi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center gap-4 bg-accent px-6 text-xs font-semibold text-on-accent transition-colors duration-200 hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span>Start a Conversation</span>
                    <span
                      aria-hidden="true"
                      className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.08}>
              <p className="mb-3 text-[0.65rem] font-medium uppercase text-foreground/50">
                Direct channels
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <DynamicIsland />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
