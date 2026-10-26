import AnimatedHeading from "@/components/ui/AnimatedHeading";
import HeroButton from "@/components/ui/HeroButton";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";

const focusAreas = [
  "Interface design",
  "Frontend engineering",
  "Motion & interaction",
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh w-full items-center overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 size-[38rem] rounded-full bg-[#FF7133]/[0.06] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl content-center gap-14 px-6 pb-28 pt-32 sm:px-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:gap-20 lg:px-10 lg:pb-28 lg:pt-36">
        <div>
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-white/55 sm:tracking-[0.18em]">
              <span
                aria-hidden="true"
                className="hidden h-px w-8 shrink-0 bg-[#FF7133] min-[360px]:block"
              />
              <span className="whitespace-nowrap">Front-End Developer</span>
              <span aria-hidden="true" className="text-[#FF7133]">
                /
              </span>
              <span className="whitespace-nowrap">UI Designer</span>
            </p>
          </Reveal>

          <AnimatedHeading
            as="h1"
            id="hero-title"
            mode="word"
            start="load"
            delay={0.15}
            className="mt-7 text-[clamp(2rem,8.4vw,5.75rem)] font-medium leading-[1.02] text-[#F8F9FA] lg:text-[clamp(2.75rem,5.2vw,4.75rem)]"
            lines={[
              { text: "Better Design,", className: "italic" },
              {
                text: "Better Experience",
                className: "whitespace-nowrap italic text-[#FF7133]",
              },
            ]}
          />

          <Reveal delay={0.45}>
            <p className="mt-8 max-w-[35rem] text-pretty text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              I pair thoughtful design with precise frontend craft to make
              digital experiences feel clear, useful, and alive.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <HeroButton href="#work">Explore selected work</HeroButton>
              </Magnetic>
              <a
                href="#about"
                className="group relative inline-flex min-h-12 items-center px-5 text-xs font-medium text-white/70 transition-colors hover:text-[#F8F9FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111113]"
              >
                More about me
                <span
                  aria-hidden="true"
                  className="absolute inset-x-5 bottom-3 h-px origin-left scale-x-0 bg-[#FF7133] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.6}>
          <aside
            aria-label="Areas of focus"
            className="border-t border-white/12 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
          >
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/45">
              Areas of focus
            </p>
            <ul className="mt-6 space-y-5">
              {focusAreas.map((area, index) => (
                <li
                  key={area}
                  className="flex items-baseline gap-4 text-sm text-white/70"
                >
                  <span className="font-mono text-[0.65rem] text-[#FF7133]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>

      <a
        href="#work"
        className="group absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[0.58rem] font-medium uppercase tracking-[0.28em] text-white/35 transition-colors group-hover:text-white/70">
          Scroll
        </span>
        <span
          aria-hidden="true"
          className="relative block h-10 w-px overflow-hidden bg-white/15"
        >
          <span className="scroll-cue-line absolute inset-0 bg-[#FF7133]" />
        </span>
        <span className="sr-only">Go to selected work</span>
      </a>
    </section>
  );
}
