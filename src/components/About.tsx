"use client";

import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Reveal from "@/components/ui/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      className="relative scroll-mt-20 overflow-x-hidden border-t border-foreground/10"
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

        <div className="grid min-w-0 gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 lg:py-20">
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
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
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(47,93,246,0.18),_rgba(47,93,246,0.08)_32%,_rgba(23,26,31,0)_72%)]" />
                <span className="absolute inset-[10%] rounded-full border border-accent/25 bg-card/20 shadow-[inset_0_0_24px_rgba(47,93,246,0.08)] backdrop-blur-[2px]" />
                <span className="absolute inset-[3%] rounded-full border border-foreground/10" />
                <span className="absolute inset-[18%] rounded-full border border-dashed border-foreground/15" />
                <span className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-accent border-r-accent/50 [animation-duration:22s] motion-reduce:animate-none" />
                <span className="absolute inset-2 animate-[spin_28s_linear_infinite_reverse] rounded-full border border-transparent border-l-foreground/20 border-b-foreground/5 motion-reduce:animate-none" />
                <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-accent/70 shadow-[0_0_12px_rgba(47,93,246,0.8)]" />
                <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-foreground/20" />
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-foreground/20" />
                <span className="absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 bg-foreground/20" />
                <span className="absolute right-[18%] top-[18%] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_14px_rgba(47,93,246,0.9)]" />
                <span className="absolute bottom-[20%] left-[18%] h-2 w-2 rounded-full bg-foreground/30" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent/35 bg-background/90 text-[0.68rem] font-medium tracking-[0.35em] text-foreground/75 shadow-[0_0_24px_rgba(47,93,246,0.12)] backdrop-blur-sm">
                  AT
                </span>
              </div>
            </Reveal>
          </div>

          <Accordion
            type="multiple"
            defaultValue={copy.principles.map((_, index) => `principle-${index}`)}
            aria-label={copy.principlesLabel}
            className="m-0 flex min-h-[25rem] min-w-0 list-none flex-col gap-3 p-0 [overflow-anchor:none]"
          >
            {copy.principles.map((principle, index) => (
              <Reveal
                as="div"
                key={principle.title}
                delay={index * 0.08}
                className="group"
              >
                <AccordionItem
                  value={`principle-${index}`}
                  className="overflow-hidden rounded-2xl border border-foreground/10 bg-card/70 shadow-[0_0_0_1px_rgba(15,23,42,0.02)] transition-colors duration-200 hover:border-foreground/15 hover:bg-card/90"
                >
                  <AccordionTrigger value={`principle-${index}`} className="w-full justify-between gap-5 rounded-2xl px-4 py-4 text-left hover:no-underline sm:px-5 sm:py-4.5 [&[data-state=open]>svg]:rotate-180">
                    <div className="flex w-full items-center gap-4 sm:gap-5">
                      <span className="inline-flex size-8 items-center justify-center rounded-full border border-accent/20 bg-accent/5 font-mono text-[0.62rem] text-accent shadow-[0_0_0_2px_rgba(47,93,246,0.04)]">
                        {formatNumber(index + 1, locale, 2)}
                      </span>
                      <div className="min-w-0 text-left">
                        <h3 className="text-base font-medium leading-snug sm:text-lg">
                          {principle.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value={`principle-${index}`} className="px-4 sm:px-5">
                    <div className="pl-12 sm:pl-14">
                      <p className="max-w-xl text-sm leading-6 text-foreground/60 sm:text-[0.96rem] sm:leading-7">
                        {principle.detail}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>

        <Reveal>
          <div className="grid min-w-0 gap-8 border-t border-foreground/15 pt-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center md:gap-12 lg:gap-16">
            <div className="min-w-0 overflow-hidden">
              <Image
                src="/about-img/Developer Tech Skills Collage.png"
                alt={copy.illustrationAlt}
                width={1160}
                height={693}
                sizes="(max-width: 767px) 75vw, 32vw"
                className="mx-auto h-auto w-full max-w-[20rem] object-contain md:mx-0"
              />
            </div>
            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <ToolkitTabs locale={locale} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
