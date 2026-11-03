import Reveal from "@/components/ui/Reveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ProjectGallery from "@/components/work/ProjectGallery";
import { workProjects } from "@/data/workProjects";
import { formatNumber, translations, type Locale } from "@/lib/translations";

export default function Work({ locale = "en" }: { locale?: Locale }) {
  const copy = translations[locale].work;
  const localizedProjects = workProjects.map((project) => {
    const key =
      project.title === "Personal Portfolio" ? "portfolio" : project.title;
    const translated =
      translations[locale].projects[
        key as keyof typeof translations.en.projects
      ];

    return { ...project, ...translated };
  });
  const projectCount = formatNumber(localizedProjects.length, locale, 2);

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative isolate scroll-mt-20 pb-12 pt-4 sm:pb-16"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 pt-14 sm:px-8 sm:pt-18 lg:px-10 lg:pt-20">
        <Reveal>
          <div className="flex items-center justify-between gap-6 pb-5">
            <p className="text-[0.6875rem] font-medium text-foreground/60">
              {copy.eyebrow}
            </p>
            <p className="flex shrink-0 items-center gap-2 font-mono text-xs text-foreground/65">
              <span aria-hidden="true" className="flex items-center gap-2">
                <span>{formatNumber(1, locale, 2)}</span>
                <span>—</span>
                <span>{projectCount}</span>
              </span>
              <span className="sr-only">
                {formatNumber(localizedProjects.length, locale)} {translations[locale].common.selectedProjects}
              </span>
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 py-8 sm:py-10 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] md:items-end md:gap-8 md:py-12">
          <AnimatedHeading
            id="work-title"
            lines={[
              {
                text: copy.heading[0],
                className: locale === "fa" ? "display-persian" : undefined,
              },
              {
                text: copy.heading[1],
                className: locale === "fa" ? "display-persian text-accent" : "text-accent",
              },
            ]}
            className={
              locale === "fa"
                ? "w-full max-w-[62rem] text-[clamp(2.5rem,5vw,9.2rem)] font-medium leading-[1.2] tracking-[-0.04em] sm:text-[clamp(3rem,6vw,8rem)] md:text-[clamp(3.8rem,7vw,8.8rem)]"
                : "max-w-4xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl"
            }
          />
          <Reveal delay={0.12}>
            <p className="max-w-md text-pretty text-base leading-7 text-foreground/65 sm:leading-8">
              {copy.introduction}
            </p>
          </Reveal>
        </div>
      </div>

      <ProjectGallery projects={localizedProjects} locale={locale} />
    </section>
  );
}
