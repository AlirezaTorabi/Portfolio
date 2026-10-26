import type { ReactNode } from "react";

interface HeroButtonProps {
  href: string;
  children: ReactNode;
}

export default function HeroButton({ href, children }: HeroButtonProps) {
  return (
    <a
      href={href}
      className="group relative isolate inline-flex min-h-12 items-center overflow-hidden bg-[#FF7133] px-6 text-xs font-medium text-[#111113] transition-colors duration-300 hover:bg-[#FF8A55] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111113]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:hidden"
      />
      <span className="relative z-10 inline-flex items-center gap-4">
        {children}
        <span
          aria-hidden="true"
          className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      </span>
    </a>
  );
}