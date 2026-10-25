import HeroButton from "@/components/ui/HeroButton";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden bg-[#F8F9FA]"
    >
      <div className="relative mx-auto grid min-h-svh w-full max-w-6xl gap-10 px-6 py-24 text-left sm:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center lg:gap-20 lg:px-10 lg:py-16">
        <div>
          <h1
            id="hero-title"
            className="mt-6 max-w-[900px] font-sans text-[clamp(1.7rem,8.5vw,6rem)] font-medium leading-[1.02] text-[#060607] lg:text-[clamp(3.25rem,6.5vw,5.25rem)]"
          >
            <span className="italic">Better Design,</span>
            <br />
            <span className="whitespace-nowrap italic text-[#FF5100]">Better Experience</span>
          </h1>
          <p className="mt-7 max-w-[570px] text-sm leading-7 text-[#303030] sm:text-base sm:leading-8">
            I pair thoughtful design with precise frontend craft to make digital experiences feel clear, useful, and alive.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <HeroButton href="#work">Explore selected work</HeroButton>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center px-5 text-xs font-medium text-[#303030] transition-colors hover:text-[#060607] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5100]/70"
            >
              More about me
            </a>
          </div>
        </div>

        <aside aria-label="Areas of focus" className="border-t border-[#060607]/10 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[#303030]/70">
            Areas of focus
          </p>
          <ul className="mt-6 space-y-5">
            <li className="flex items-baseline gap-4 text-sm text-[#303030]">
              <span className="font-mono text-[0.65rem] text-[#FF5100]">01</span>
              Interface design
            </li>
            <li className="flex items-baseline gap-4 text-sm text-[#303030]">
              <span className="font-mono text-[0.65rem] text-[#FF5100]">02</span>
              Frontend engineering
            </li>
            <li className="flex items-baseline gap-4 text-sm text-[#303030]">
              <span className="font-mono text-[0.65rem] text-[#FF5100]">03</span>
              Motion &amp; interaction
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}