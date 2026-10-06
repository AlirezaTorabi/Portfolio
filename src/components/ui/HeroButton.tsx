import type { ReactNode } from "react";
import Dither from "@/components/Backgrung";

interface HeroButtonProps {
  href: string;
  children: ReactNode;
}

export default function HeroButton({ href, children }: HeroButtonProps) {
  return (
    <a
      href={href}
      className="group relative isolate inline-flex min-h-12 items-center overflow-hidden border border-white/25 bg-[#111111] px-5 text-xs font-medium text-white transition-colors hover:border-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={18.2}
          waveAmplitude={0.34}
          waveFrequency={4.3}
          waveSpeed={0.03}
          backgroundColor={[0, 0, 0]}
        />
      </span>
      <span className="relative z-10 inline-flex items-center gap-4">
        {children}
        <span aria-hidden="true" className="text-base transition-transform duration-200 group-hover:translate-x-0.5">
          ↗
        </span>
      </span>
    </a>
  );
}