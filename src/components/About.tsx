"use client";

import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import ToolkitTabs from "@/components/ToolkitTabs";
import { formatNumber, translations, type Locale } from "@/lib/translations";

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
export default function About({ locale = "en" }: { locale?: Locale }) {
  const copy = translations[locale].about;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-20 border-t border-foreground/10"
    >
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
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

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 lg:py-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <AnimatedHeading
              id="about-title"
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
              <div
                aria-hidden="true"
                className="relative mt-10 grid size-32 place-items-center sm:size-36"
              >
                <span className="absolute inset-0 rounded-full border border-foreground/10" />
                <span className="absolute inset-7 rounded-full border border-foreground/10" />
                <span className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-accent/60 [animation-duration:24s] motion-reduce:animate-none" />
                <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-accent/60" />
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
            aria-label={copy.principlesLabel}
            className="m-0 list-none border-t border-foreground/15 p-0"
          >
            {copy.principles.map((principle, index) => (
              <Reveal
                as="li"
                key={principle.title}
                delay={index * 0.08}
                className="group border-b border-foreground/10 py-8 sm:py-9"
              >
                <div className="flex gap-5 sm:gap-8">
                  <span className="pt-1 font-mono text-xs text-accent">
                    {formatNumber(index + 1, locale, 2)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium leading-snug sm:text-xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-6 text-foreground/55">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal>
          <div className="grid gap-8 border-t border-foreground/15 pt-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center md:gap-12 lg:gap-16">
            <Image
              src="/hero-img/hero-transparent.png"
              alt={copy.illustrationAlt}
              width={1160}
              height={693}
              sizes="(max-width: 767px) 75vw, 32vw"
              className="mx-auto h-auto w-full max-w-[20rem] object-contain md:mx-0"
            />
            <div className="grid gap-4 lg:grid-cols-[8rem_minmax(0,1fr)] lg:items-start lg:gap-8">
              <p className="text-[0.65rem] font-medium uppercase text-foreground/50">
                {copy.toolkit}
              </p>
              <ToolkitTabs locale={locale} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
