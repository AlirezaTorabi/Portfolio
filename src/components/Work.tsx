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
      className="relative isolate scroll-mt-20 border-t border-foreground/10 pb-16 sm:pb-20"
    >
      <div className="relative mx-auto max-w-6xl px-6 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32">
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-foreground/15 pb-5">
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

        <div className="grid gap-6 py-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] md:items-end md:gap-12 md:py-20">
          <AnimatedHeading
            id="work-title"
            lines={[
              { text: copy.heading[0] },
              {
                text: copy.heading[1],
                className: "text-accent",
              },
            ]}
            className="max-w-4xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl"
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
