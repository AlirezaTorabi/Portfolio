import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Alireza Torabi",
  description: "The requested page could not be found."
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col justify-center px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <p className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/55">
          <span aria-hidden="true" className="h-px w-8 bg-[#FF7133]" />
          Error 404
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.04] text-[#F8F9FA] sm:text-5xl lg:text-6xl">
          This page doesn&apos;t{" "}
          <span className="text-[#FF7133]">exist.</span>
        </h1>

        <p className="mt-6 max-w-md text-pretty text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
          The link may be outdated, or the page may have moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center gap-4 bg-[#FF7133] px-6 text-xs font-medium text-[#111113] transition-colors duration-300 hover:bg-[#FF8A55] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111113]"
        >
          Back to portfolio
          <span aria-hidden="true" className="text-base">
            ↗
          </span>
        </Link>
      </div>
    </main>
  );
}
