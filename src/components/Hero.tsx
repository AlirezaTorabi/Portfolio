import HeroButton from "@/components/ui/HeroButton";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="hero-glass flex flex-col items-stretch px-6 py-7 sm:px-10 sm:py-9 lg:px-16 lg:py-11"
    >
      <div className="hero-topline relative z-10 flex w-full items-center justify-between gap-4 border-b border-white/10 pb-5">
        <p className="flex items-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.1em] text-white/60 sm:text-xs">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#BCE7D4] shadow-[0_0_14px_rgba(188,231,212,0.6)]" />
          Alireza Torabi <span className="text-white/25">/</span> Design + development
        </p>
        <p className="hidden font-mono text-[0.65rem] text-white/40 sm:block">PORTFOLIO / 2026</p>
      </div>

      <div className="hero-glass-content grid w-full flex-1 gap-14 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center lg:gap-20 lg:py-14">
        <div className="hero-copy max-w-[900px]">
          <h1
            id="hero-title"
            className="max-w-[900px] text-[2.8rem] font-medium leading-[1.02] text-[#F5F5F2] sm:text-6xl lg:text-[6rem]"
          >
            Interfaces with
            <br />
            <span className="font-serif text-[#D0B5F4] italic">a point of view.</span>
          </h1>

          <p className="mt-7 max-w-[570px] text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            I pair thoughtful design with precise frontend craft to make digital experiences feel clear, useful, and alive.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <HeroButton href="#work">Explore selected work</HeroButton>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center rounded-full px-5 text-xs font-medium text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              More about me
            </a>
          </div>
        </div>

        <aside aria-label="Areas of focus" className="hero-aside border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/45">
            Areas of focus
          </p>
          <ul className="mt-6 space-y-5">
            <li className="flex items-baseline gap-4 text-sm text-white/80">
              <span className="font-mono text-[0.65rem] text-[#BCE7D4]">01</span>
              Interface design
            </li>
            <li className="flex items-baseline gap-4 text-sm text-white/80">
              <span className="font-mono text-[0.65rem] text-[#BCE7D4]">02</span>
              Frontend engineering
            </li>
            <li className="flex items-baseline gap-4 text-sm text-white/80">
              <span className="font-mono text-[0.65rem] text-[#BCE7D4]">03</span>
              Motion & interaction
            </li>
          </ul>
        </aside>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-white/40">
        <p>Designed with intent</p>
        <p>Built for the browser <span aria-hidden="true" className="ml-2 text-white/65">↘</span></p>
      </div>
    </section>
  );
}