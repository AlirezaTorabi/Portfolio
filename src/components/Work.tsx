import Reveal from "@/components/ui/Reveal";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ProjectGallery from "@/components/work/ProjectGallery";
import { workProjects } from "@/data/workProjects";

export default function Work() {
  const projectCount = String(workProjects.length).padStart(2, "0");

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative isolate scroll-mt-20 border-t border-white/10 pb-16 sm:pb-20"
    >
      <div className="relative mx-auto max-w-6xl px-6 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32">
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
            <p className="text-[0.65rem] font-medium uppercase text-white/60">
              Selected Work
            </p>
            <p className="flex shrink-0 items-center gap-2 font-mono text-xs text-white/65">
              <span aria-hidden="true" className="flex items-center gap-2">
                <span>01</span>
                <span>—</span>
                <span>{projectCount}</span>
              </span>
              <span className="sr-only">
                {workProjects.length} selected projects
              </span>
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 py-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] md:items-end md:gap-12 md:py-20">
          <AnimatedHeading
            id="work-title"
            lines={[
              { text: "Ideas turned into" },
              {
                text: "digital experiences.",
                className: "text-[#FF7133]",
              },
            ]}
            className="max-w-4xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl"
          />
          <Reveal delay={0.12}>
            <p className="max-w-md text-pretty text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              A selection of projects focused on frontend development, web
              applications, and digital experiences.
            </p>
          </Reveal>
        </div>
      </div>

      <ProjectGallery projects={workProjects} />
    </section>
  );
}
