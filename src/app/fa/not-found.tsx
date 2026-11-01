import Image from "next/image";
import Link from "next/link";
import { translations } from "@/lib/translations";

export default function PersianNotFound() {
  const copy = translations.fa.notFound;

  return (
    <main
      lang="fa"
      dir="rtl"
      className="locale-fa relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="flex items-center justify-center gap-3 font-mono text-sm text-foreground/55 lg:justify-start">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {copy.eyebrow}
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl text-center text-4xl font-medium text-foreground sm:text-5xl lg:mx-0 lg:text-start lg:text-6xl">
          {copy.heading[0]} <span className="text-accent">{copy.heading[1]}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-center text-pretty text-base leading-7 text-foreground/65 lg:mx-0 lg:text-start">
          {copy.explanation}
        </p>
      </div>

      <Image
        src="/404-img/404-transparent.png"
        alt=""
        width={671}
        height={622}
        sizes="(max-width: 1024px) 62vw, 42vw"
        className="pointer-events-none relative z-0 mx-auto my-5 h-auto w-[min(62vw,18rem)] object-contain lg:absolute lg:bottom-auto lg:left-8 lg:right-auto lg:top-1/2 lg:my-0 lg:w-[min(42vw,32rem)] lg:translate-x-0 lg:-translate-y-1/2"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl justify-center lg:justify-start">
        <Link
          href="/fa"
          className="inline-flex min-h-12 items-center gap-4 bg-accent px-6 text-base font-semibold text-on-accent transition-colors duration-200 hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {copy.backHome}
          <span aria-hidden="true" className="text-base">↖</span>
        </Link>
      </div>
    </main>
  );
}
