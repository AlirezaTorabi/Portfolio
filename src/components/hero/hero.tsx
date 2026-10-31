import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import HeroButton from "@/components/ui/HeroButton";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";

const practiceAreas = [
  {
    title: "Interface design",
    short: "Interface",
    detail: "Layout, hierarchy, and systems that make an interface feel effortless.",
  },
  {
    title: "Frontend engineering",
    short: "Frontend",
    detail: "React, Next.js, and TypeScript shaped into clean, maintainable components.",
  },
  {
    title: "Motion & interaction",
    short: "Motion",
    detail: "Purposeful transitions and feedback that guide attention.",
  },
] as const;

const toolkit = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
] as const;

const cornerMarks = [
  "left-1 top-1 border-l border-t",
  "right-1 top-1 border-r border-t",
  "bottom-1 left-1 border-b border-l",
  "bottom-1 right-1 border-b border-r",
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-32 top-0 size-[28rem] rounded-full bg-[#FF7133]/[0.07] blur-[90px] sm:size-[34rem]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10 lg:pt-28">
<Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-foreground/15 pb-4">
            <p className="flex min-w-0 items-center gap-3 text-[0.6875rem] font-medium text-foreground/70 sm:text-sm">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 bg-[#FF7133]"
              />
              <span className="min-w-0">
                Frontend Developer &amp; UI Designer
              </span>
            </p>
            <p className="hidden shrink-0 font-mono text-[0.6875rem] text-foreground/50 sm:block">
              Est. 2026
            </p>
          </div>
        </Reveal>

        <div className="grid flex-1 content-center gap-y-8 py-8 sm:gap-y-10 sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-12 lg:gap-y-8 lg:py-10 xl:gap-x-16">
          <div className="order-1 min-w-0 lg:col-start-1 lg:row-start-1 lg:self-end">
            <AnimatedHeading
              as="h1"
              id="hero-title"
              mode="line"
              start="load"
              delay={0.18}
              className="text-[clamp(3rem,12vw,7rem)] font-medium leading-[0.9] tracking-[-0.045em] text-foreground"
              lines={[
                { text: "Alireza" },
                {
                  text: "Torabi",
                  className:
                    "pl-[0.08em] sm:pl-[0.12em] lg:pl-[0.16em]",
                },
              ]}
            />
          </div>

          <Reveal
            delay={0.26}
            className="order-2 min-w-0 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
          >
            <figure className="group relative mx-auto w-full max-w-[26rem] sm:max-w-[32rem] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 border border-[#FF7133]/40 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-2.5 motion-reduce:transition-none sm:translate-x-3 sm:translate-y-3"
              />

              <div className="hero-plate relative border border-foreground/15 bg-[#EDF1F5] p-2.5 sm:p-3">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,113,51,0.06),transparent_55%)]"
                />

                <div className="relative overflow-hidden">
                  <Image
                    src="/hero-img/hero-img-cutout.png"
                    alt="Illustration of a frontend developer working on a laptop, surrounded by interface cards and a plant."
                    width={672}
                    height={572}
                    priority
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 76vw, 500px"
                    className="h-auto w-full transition-transform duration-[600ms] ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>

                {cornerMarks.map((mark) => (
                  <span
                    key={mark}
                    aria-hidden="true"
                    className={`pointer-events-none absolute size-2.5 border-[#111113]/30 ${mark}`}
                  />
                ))}
              </div>
            </figure>
          </Reveal>

          <div className="order-3 min-w-0 lg:col-start-1 lg:row-start-2 lg:self-start">
            <Reveal delay={0.42}>
              <p className="max-w-[30rem] text-pretty text-sm leading-7 text-foreground/65 sm:text-base sm:leading-8">
                I design and build refined, responsive web experiences, with a
                focus on clear hierarchy, purposeful motion, and maintainable
                frontend code.
              </p>
            </Reveal>

            <Reveal delay={0.52}>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-8">
                <Magnetic>
                  <HeroButton href="#work">View selected work</HeroButton>
                </Magnetic>
                <a
                  href="#contact"
                  className="group relative inline-flex min-h-12 items-center px-5 text-xs font-medium text-foreground/75 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Contact me
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-5 bottom-3 h-px origin-left scale-x-0 bg-[#FF7133] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.58}>
          <div className="border-t border-foreground/10 pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-mono text-[0.6875rem] text-foreground/55">
                Practice areas
              </p>
              <p
                aria-hidden="true"
                className="font-mono text-[0.6875rem] text-foreground/40"
              >
                01 — 03
              </p>
            </div>

            <ul className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3 sm:gap-x-8">
              {practiceAreas.map((area, index) => (
                <li key={area.title} className="min-w-0">
                  <span className="font-mono text-[0.6875rem] text-[#FF7133]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1.5 text-[0.8125rem] leading-5 text-foreground/80 sm:mt-2 sm:text-sm">
                    <span className="sm:hidden">{area.short}</span>
                    <span className="hidden sm:inline">{area.title}</span>
                  </p>
                  <p className="mt-1 hidden text-[0.7rem] leading-5 text-foreground/55 lg:block">
                    {area.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.64}>
          <div className="mt-6 flex items-center justify-between gap-6 border-t border-foreground/10 pt-5">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-[0.6875rem] font-medium text-foreground/60 transition-colors hover:text-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <span>Scroll to work</span>
              <span
                aria-hidden="true"
                className="relative block h-7 w-px overflow-hidden bg-foreground/15"
              >
                <span className="scroll-cue-line absolute inset-0 bg-[#FF7133]" />
              </span>
              <span className="sr-only">to selected work</span>
            </a>

            <ul className="hidden items-center gap-4 font-mono text-[0.6875rem] text-foreground/40 sm:flex">
              {toolkit.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>

            <p
              aria-hidden="true"
              className="font-mono text-[0.6875rem] text-foreground/40"
            >
              AT / 001
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
