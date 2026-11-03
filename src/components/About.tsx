"use client";

import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
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
      className="relative scroll-mt-20 overflow-x-hidden pt-4"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
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

        <div className="grid min-w-0 gap-8 py-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 lg:py-12">
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <AnimatedHeading
              id="about-title"
              lines={copy.heading.map((text, index) => ({
                text,
                className: index === 1 ? "text-accent" : undefined,
              }))}
              className="max-w-2xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-rakkas), serif" }}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-foreground/65 sm:leading-8">
                {copy.introduction}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex justify-center lg:justify-start">
                <ProfileCard
                  avatarUrl="/about-img/alireza.png"
                  iconUrl="/about-img/alireza.png"
                  name="Alireza Torabi"
                  title=""
                  handle="alirezatorabi"
                  status="Available for work"
                  statusColor="#4ade80"
                  contactText=""
                  showUserInfo
                  theme="dark"
                  backdropColor="#131a2a"
                  radius={18}
                  holo={0.9}
                  glare={0.5}
                  enableTilt
                  tiltStrength={12}
                  parallax={8}
                  className="!w-[14.5rem] max-w-full"
                />
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
                      <span
                        dir="ltr"
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/5 font-mono text-[0.62rem] leading-none tracking-[-0.08em] text-accent shadow-[0_0_0_2px_rgba(47,93,246,0.04)]"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
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
          <div className="grid min-w-0 gap-6 pt-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center md:gap-8 lg:gap-12">
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
