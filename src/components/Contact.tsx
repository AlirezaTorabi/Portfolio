"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import DynamicIsland from "@/components/smoothui/dynamic-island";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [-40, 70]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-20 border-t border-foreground/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          data-motion=""
          className="absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-[#FF7133]/[0.045] blur-3xl"
          style={{ y: glowY }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
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
                { text: "great together.", className: "text-[#FF7133]" },
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
                    className="group inline-flex min-h-12 items-center gap-4 bg-[#FF7133] px-6 text-xs font-medium text-[#111113] transition-colors duration-300 hover:bg-[#FF8A55] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
