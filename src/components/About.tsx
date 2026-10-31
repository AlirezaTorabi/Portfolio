"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import ToolkitTabs from "@/components/ToolkitTabs";

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

interface Technology {
  name: string;
  /** Devicon class names verified against devicon@2.18.0. */
  icon: string;
  /** The Next.js mark is black by default; the dark theme uses its white variant. */
  iconColor?: string;
}

const technologies: Technology[] = [
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-original colored" },
  { name: "React", icon: "devicon-react-original colored" },
  {
    name: "Next.js",
    icon: "devicon-nextjs-plain",
    iconColor: "text-foreground",
  },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
];

export { technologies, type Technology };
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [40, -60]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-20 border-t border-foreground/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          data-motion=""
          className="absolute -top-28 right-0 size-[26rem] rounded-full bg-[#FF7133]/[0.05] blur-3xl"
          style={{ y: glowY }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-foreground/15 pb-5">
            <p className="text-[0.65rem] font-medium uppercase text-foreground/60">
              About Me
            </p>
            <p className="hidden font-mono text-xs text-foreground/55 sm:block">
              Front-End Developer / UI Designer
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 lg:py-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <AnimatedHeading
              id="about-title"
              lines={[
                { text: "I build digital experiences" },
                { text: "with purpose.", className: "text-[#FF7133]" },
              ]}
              className="max-w-2xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-pretty text-sm leading-7 text-foreground/65 sm:text-base sm:leading-8">
                I&apos;m Alireza Torabi, a front-end developer and UI designer.
                I build modern, responsive web applications and shape
                interfaces that feel intuitive, refined, and easy to use,
                turning ideas into functional digital experiences with clean,
                maintainable code.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div
                aria-hidden="true"
                className="relative mt-10 grid size-32 place-items-center sm:size-36"
              >
                <span className="absolute inset-0 rounded-full border border-foreground/10" />
                <span className="absolute inset-7 rounded-full border border-foreground/10" />
                <span className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-[#FF7133]/60 [animation-duration:24s] motion-reduce:animate-none" />
                <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[#FF7133]/60" />
                <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-foreground/15" />
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-foreground/15" />
                <span className="absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 bg-foreground/15" />
                <span className="relative font-mono text-[0.6rem] uppercase tracking-[0.35em] text-foreground/40">
                  AT
                </span>
              </div>
            </Reveal>
          </div>

          <ol
            aria-label="Working principles"
            className="m-0 list-none border-t border-foreground/15 p-0"
          >
            {principles.map((principle, index) => (
              <Reveal
                as="li"
                key={principle.title}
                delay={index * 0.08}
                className="group border-b border-foreground/10 py-8 sm:py-9"
              >
                <div className="flex gap-5 sm:gap-8">
                  <span className="pt-1 font-mono text-xs text-[#FF7133]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium leading-snug sm:text-xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-foreground/55">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal>
          <div className="grid gap-6 border-t border-foreground/15 pt-10 md:grid-cols-[10rem_minmax(0,1fr)] md:items-start md:gap-12">
            <p className="text-[0.65rem] font-medium uppercase text-foreground/50">
              Toolkit
            </p>
            <ToolkitTabs />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
