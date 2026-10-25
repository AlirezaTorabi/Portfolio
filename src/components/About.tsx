"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";

const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const principles = [
  {
    title: "Thoughtful Design",
    detail:
      "Clarity, hierarchy, and restraint guide every interface decision, so each detail has a reason to exist.",
  },
  {
    title: "Clean Development",
    detail:
      "Semantic, maintainable frontend code built for responsiveness, performance, and the long run.",
  },
  {
    title: "Continuous Learning",
    detail:
      "A steady practice of refining the craft and staying curious about better ways to build.",
  },
] as const;

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        aria-labelledby="about-title"
        className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#111113] text-[#F8F9FA]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-28 right-0 size-[26rem] rounded-full bg-[#FF7133]/[0.05] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
              <p className="text-[0.65rem] font-medium uppercase text-white/60">
                About Me
              </p>
              <p className="hidden font-mono text-xs text-white/55 sm:block">
                Front-End Developer / UI Designer
              </p>
            </div>
          </Reveal>

          <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16 md:py-20">
            <Reveal>
              <h2
                id="about-title"
                className="max-w-4xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-7xl"
              >
                I build digital experiences{" "}
                <span className="text-[#FF7133]">with purpose.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                I&apos;m Alireza Toorabi, a front-end developer and UI designer.
                I build modern, responsive web applications and shape interfaces
                that feel intuitive, refined, and easy to use, turning ideas
                into functional digital experiences with clean, maintainable
                code.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="md:justify-self-end">
              <div
                aria-hidden="true"
                className="relative mx-auto grid size-32 place-items-center sm:size-36 md:size-40 lg:size-48"
              >
                <span className="absolute inset-0 rounded-full border border-white/10" />
                <span className="absolute inset-7 rounded-full border border-white/10" />
                <span className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-[#FF7133]/60 [animation-duration:24s] motion-reduce:animate-none" />
                <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[#FF7133]/60" />
                <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-white/15" />
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white/15" />
                <span className="absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white/15" />
                <span className="relative font-mono text-[0.6rem] uppercase tracking-[0.35em] text-white/40">
                  AT
                </span>
              </div>
            </Reveal>
          </div>

          <div className="grid divide-y divide-white/10 border-y border-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 0.08}
                className="group px-1 py-8 transition-colors duration-300 hover:bg-white/[0.025] md:px-8 md:py-10"
              >
                <span className="font-mono text-xs text-[#FF7133]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-medium leading-snug sm:text-xl">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
                  {principle.detail}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 sm:mt-12">
            <div className="grid gap-6 md:grid-cols-[10rem_minmax(0,1fr)] md:items-start md:gap-12">
              <p className="text-[0.65rem] font-medium uppercase text-white/50">
                Toolkit
              </p>
              <ul
                aria-label="Technologies"
                className="flex min-w-0 flex-wrap gap-2.5"
              >
                {technologies.map((technology) => (
                  <li key={technology}>
                    <span className="inline-flex border border-white/10 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-white/55 transition-colors duration-200 hover:border-[#FF7133]/50 hover:bg-white/[0.03] hover:text-[#F8F9FA]">
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </MotionConfig>
  );
}
