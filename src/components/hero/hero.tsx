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

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-10 lg:pb-10 lg:pt-36">
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-foreground/10 pb-4">
            <p className="flex min-w-0 items-center gap-3 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-foreground/70 sm:text-[0.66rem] sm:tracking-[0.18em]">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 bg-[#FF7133]"
              />
              <span className="min-w-0">
                Frontend Developer &amp; UI Designer
              </span>
            </p>
            <p className="hidden shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-foreground/50 sm:block">
              Portfolio / 2026
            </p>
          </div>
        </Reveal>

        <div className="grid flex-1 items-center gap-10 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16 lg:py-14 xl:gap-20">
          <div className="min-w-0">
            <AnimatedHeading
              as="h1"
              id="hero-title"
              mode="line"
              start="load"
              delay={0.18}
              className="text-[clamp(3.5rem,12vw,9rem)] font-medium leading-[0.92] tracking-[-0.045em] text-foreground"
              lines={[
                { text: "Alireza" },
                {
                  text: "Torabi",
                  className:
                    "pl-[0.08em] text-[#FF7133] sm:pl-[0.12em] lg:pl-[0.2em]",
                },
              ]}
            />

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-[34rem] text-pretty text-sm leading-7 text-foreground/65 sm:mt-8 sm:text-base sm:leading-8">
                I design and build refined, responsive web experiences, with a
                focus on clear hierarchy, purposeful motion, and maintainable
                frontend code.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-10">
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

          <Reveal delay={0.58} className="min-w-0 lg:self-stretch">
            <aside
              aria-label="Practice index"
              className="border-t border-foreground/10 pt-7 sm:pt-8 lg:flex lg:h-full lg:flex-col lg:justify-center lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60">
                  Practice index
                </p>
                <p
                  aria-hidden="true"
                  className="font-mono text-[0.65rem] text-foreground/40"
                >
                  01—03
                </p>
              </div>

              <ul className="mt-5 grid grid-cols-3 gap-4 lg:mt-6 lg:grid-cols-1 lg:gap-0 lg:border-t lg:border-foreground/10">
                {practiceAreas.map((area, index) => (
                  <li
                    key={area.title}
                    className="group/index min-w-0 border-t border-foreground/10 pt-3 lg:flex lg:gap-4 lg:border-b lg:border-t-0 lg:py-4"
                  >
                    <span className="font-mono text-[0.65rem] text-[#FF7133]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-2 min-w-0 lg:mt-0">
                      <p className="text-[0.8125rem] leading-5 text-foreground/80 transition-colors duration-200 group-hover/index:text-foreground lg:text-sm">
                        <span className="lg:hidden">{area.short}</span>
                        <span className="hidden lg:inline">{area.title}</span>
                      </p>
                      <p className="mt-1 hidden text-[0.7rem] leading-5 text-foreground/55 lg:block">
                        {area.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-foreground/10 pt-4 lg:mt-8 lg:border-t-0 lg:pt-0">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60">
                  Toolkit
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[0.68rem] leading-5 text-foreground/60">
                  {toolkit.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={0.66}>
          <div className="flex items-center justify-between gap-6 border-t border-foreground/10 pt-5">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-[0.625rem] font-medium uppercase tracking-[0.24em] text-foreground/60 transition-colors hover:text-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <span>Scroll</span>
              <span
                aria-hidden="true"
                className="relative block h-7 w-px overflow-hidden bg-foreground/15"
              >
                <span className="scroll-cue-line absolute inset-0 bg-[#FF7133]" />
              </span>
              <span className="sr-only">to selected work</span>
            </a>

            <p
              aria-hidden="true"
              className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-foreground/40"
            >
              AT / 001
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
