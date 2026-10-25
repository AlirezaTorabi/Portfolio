import type { ReactNode } from "react";

interface HeroButtonProps {
  href: string;
  children: ReactNode;
}

export default function HeroButton({ href, children }: HeroButtonProps) {
  return (
    <a
      href={href}
      className="group relative isolate inline-flex min-h-12 items-center overflow-hidden border border-[#060607]/20 bg-[#F8F9FA] px-5 text-xs font-medium text-[#060607] transition-colors hover:border-[#060607]/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#060607]/50"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.04),_transparent_58%)]" />
      <span className="relative z-10 inline-flex items-center gap-4">
        {children}
        <span aria-hidden="true" className="text-base transition-transform duration-200 group-hover:translate-x-0.5">
          ↗
        </span>
      </span>
    </a>
  );
}