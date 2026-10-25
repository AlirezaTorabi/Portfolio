import Image from "next/image";
import { workProjects } from "@/data/workProjects";

function getValidProjectUrl(value?: string): string | undefined {
  const candidate = value?.trim();
  if (!candidate || /\s/.test(candidate)) return undefined;

  try {
    const url = new URL(candidate);
    return url.protocol === "https:" || url.protocol === "http:"
      ? candidate
      : undefined;
  } catch {
    return candidate.startsWith("/") && !candidate.startsWith("//")
      ? candidate
      : undefined;
  }
}

function ProjectEntry({
  project,
  index,
}: {
  project: (typeof workProjects)[number];
  index: number;
}) {
  const projectUrl = getValidProjectUrl(project.url);
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <li
      className="work-project-enter grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-5 border-t border-white/15 px-1 py-8 transition-colors duration-300 hover:bg-white/[0.025] sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-7 sm:py-10 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(13rem,0.65fr)] lg:gap-x-10"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <span className="pt-1 font-mono text-xs text-[#FF7133]">{projectNumber}</span>

      <article className="min-w-0">
        <p className="text-[0.65rem] font-medium uppercase text-white/50">
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-medium leading-tight text-[#F8F9FA] sm:text-3xl">
          {projectUrl ? (
            <a
              href={projectUrl}
              target={/^https?:\/\//i.test(projectUrl) ? "_blank" : undefined}
              rel={/^https?:\/\//i.test(projectUrl) ? "noreferrer" : undefined}
              className="group inline-flex items-baseline gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133]"
            >
              {project.title}
              <span
                aria-hidden="true"
                className="text-sm text-[#FF7133] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
          {project.description}
        </p>
        {project.previewImagePath && (
          <div className="relative mt-6 aspect-[16/8] max-w-3xl overflow-hidden bg-white/5">
            <Image
              src={project.previewImagePath}
              alt={project.previewImageAlt ?? `${project.title} project preview`}
              fill
              sizes="(min-width: 1024px) 768px, (min-width: 640px) 75vw, 90vw"
              className="object-cover"
            />
          </div>
        )}
      </article>

      <ul
        aria-label={`${project.title} technologies`}
        className="col-start-2 flex min-w-0 flex-wrap gap-x-3 gap-y-2 text-xs text-white/55 sm:gap-x-4 lg:col-start-3 lg:row-start-1 lg:pt-1"
      >
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Work() {
  const projectCount = String(workProjects.length).padStart(2, "0");

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-20 bg-[#111113] text-[#F8F9FA]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
          <p className="text-[0.65rem] font-medium uppercase text-white/60">
            Selected Work
          </p>
          <p
            aria-label={`${workProjects.length} projects`}
            className="flex shrink-0 items-center gap-2 font-mono text-xs text-white/65"
          >
            <span>01</span>
            <span aria-hidden="true">—</span>
            <span>{projectCount}</span>
          </p>
        </div>

        <div className="grid gap-6 py-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] md:items-end md:gap-12 md:py-20">
          <h2
            id="work-title"
            className="max-w-4xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-7xl"
          >
            Ideas turned into{" "}
            <span className="text-[#FF7133]">digital experiences.</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            A selection of projects focused on frontend development, web
            applications, and digital experiences.
          </p>
        </div>

        <ol aria-label="Selected projects" className="m-0 list-none p-0">
          {workProjects.map((project, index) => (
            <ProjectEntry key={project.title} project={project} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}