import type { ReactNode } from "react";

interface HeroButtonProps {
  href: string;
  children: ReactNode;
}

export default function HeroButton({ href, children }: HeroButtonProps) {
  return (
    <a
      href={href}
      className="group relative isolate inline-flex min-h-12 cursor-pointer items-center overflow-hidden border border-foreground bg-accent px-6 text-xs font-semibold text-on-accent transition-colors duration-200 hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:hidden"
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