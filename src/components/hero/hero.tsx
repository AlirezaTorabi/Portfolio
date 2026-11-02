import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import { formatNumber, translations, type Locale } from "@/lib/translations";

const toolkit = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
] as const;

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const copy = translations[locale].hero;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10 lg:pt-28">
<Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-foreground/15 pb-4">
            <p className="flex min-w-0 items-center gap-3 text-[0.6875rem] font-medium text-foreground/70 sm:text-sm">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 bg-accent"
              />
              <span className="min-w-0">{copy.role}</span>
            </p>
            <p className="hidden shrink-0 font-mono text-[0.6875rem] text-foreground/50 sm:block">
              {copy.established}
            </p>
          </div>
        </Reveal>

        <div className="grid flex-1 grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] content-center items-center gap-x-3 gap-y-6 py-8 sm:gap-x-6 sm:gap-y-8 sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-8 lg:py-10 xl:gap-x-16">
          <div className="order-1 min-w-0 lg:col-start-1 lg:row-start-1 lg:self-end">
            <AnimatedHeading
              as="h1"
              id="hero-title"
              mode="line"
              start="load"
              delay={0.18}
              className="text-[clamp(2.4rem,12vw,7rem)] font-medium leading-[0.9] tracking-[-0.045em] text-foreground"
              lines={[
                { text: copy.name[0] },
                {
                  text: copy.name[1],
                  className:
                    "ps-[0.08em] sm:ps-[0.12em] lg:ps-[0.16em]",
                },
              ]}
            />
          </div>

          <div className="order-2 min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <Image
              src="/hero-img/Professional%20UI_UX%20Creative%20Vector.png"
              alt="Professional UI/UX creative vector illustration"
              width={1034}
              height={1002}
              preload
              sizes="(max-width: 640px) 42vw, (max-width: 1023px) 40vw, 48vw"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="order-3 col-span-2 min-w-0 lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:self-start">
            <p className="max-w-[30rem] text-pretty text-base leading-7 text-foreground/65 sm:leading-8">
              {locale === "en" ? (
                <>
                  <Highlighter
                    action="underline"
                    color="#FF9800"
                    strokeWidth={2}
                    animationDuration={700}
                    padding={2}
                    isView
                    delay={1000}
                  >
                    I design and build
                  </Highlighter>
                  <span className="mx-1.5"> </span>
                  refined, responsive web experiences,
                  <span className="mx-1.5"> </span>
                  with a focus on clear hierarchy,
                  <span className="mx-1.5"> </span>
                  <Highlighter
                    action="highlight"
                    color="#87CEFA"
                    strokeWidth={1.6}
                    animationDuration={700}
                    padding={1.2}
                    isView
                    delay={1000}
                  >
                    purposeful motion
                  </Highlighter>
                  <span className="mx-1.5">,</span>
                  <span className="mx-1.5"> </span>
                  and maintainable frontend code.
                </>
              ) : (
                copy.introduction
              )}
            </p>

            <Reveal delay={0.52}>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-8">
                <Magnetic>
                  <Button asChild size="lg" className="group relative isolate min-h-12 overflow-hidden border border-border bg-foreground px-6 text-xs font-semibold text-background">
                    <a href="#work">
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 ${locale === "fa" ? "translate-x-full bg-gradient-to-l group-hover:-translate-x-full" : "-translate-x-full bg-gradient-to-r group-hover:translate-x-full"} from-transparent via-foreground/20 to-transparent transition-transform duration-700 motion-reduce:hidden`}
                      />
                      <span className="relative z-10 inline-flex items-center gap-4">
                        {copy.viewWork}
                        <span
                          aria-hidden="true"
                          className={`text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${locale === "fa" ? "-scale-x-100" : ""}`}
                        >
                          ↗
                        </span>
                      </span>
                    </a>
                  </Button>
                </Magnetic>
                <Button asChild variant="ghost" size="lg" className="group relative h-12 px-5 text-xs font-medium text-foreground/80 hover:bg-transparent hover:text-foreground">
                  <a href="#contact">
                    {copy.contactMe}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-5 bottom-3 h-px ${locale === "fa" ? "origin-right" : "origin-left"} scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none`}
                    />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.58}>
          <div className="border-t border-foreground/10 pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-mono text-[0.6875rem] text-foreground/55">
                {copy.practice}
              </p>
              <p
                aria-hidden="true"
                dir="ltr"
                className="font-mono text-[0.6875rem] text-foreground/40"
              >
                {formatNumber(1, locale, 2)} — {formatNumber(3, locale, 2)}
              </p>
            </div>

            <ul className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3 sm:gap-x-8">
              {copy.areas.map((area, index) => (
                <li key={area} className="min-w-0">
                  <span className="font-mono text-[0.6875rem] text-accent">
                    {formatNumber(index + 1, locale, 2)}
                  </span>
                  <p className="mt-1.5 text-base leading-6 text-foreground/80 sm:mt-2">
                    <span className="sm:hidden">{copy.shortAreas[index]}</span>
                    <span className="hidden sm:inline">{area}</span>
                  </p>
                  <p className="mt-1 hidden text-[0.7rem] leading-5 text-foreground/55 lg:block">
                    {copy.details[index]}
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
              className="group inline-flex min-h-11 items-center gap-3 text-[0.6875rem] font-medium text-foreground/60 transition-colors hover:text-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <span>{copy.scrollToWork}</span>
              <span
                aria-hidden="true"
                className="relative block h-7 w-px overflow-hidden bg-foreground/15"
              >
                <span className="scroll-cue-line absolute inset-0 bg-accent" />
              </span>
              <span className="sr-only">{copy.toSelectedWork}</span>
            </a>

            <ul className="hidden items-center gap-4 font-mono text-[0.6875rem] text-foreground/40 sm:flex">
              {toolkit.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
