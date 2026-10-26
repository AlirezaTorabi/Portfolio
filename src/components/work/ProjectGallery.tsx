"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import type { WorkProject } from "@/data/workProjects";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

interface ProjectGalleryProps {
  projects: WorkProject[];
}

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

function ProjectCard({
  project,
  index,
  total,
  active,
}: {
  project: WorkProject;
  index: number;
  total: number;
  active: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");
  const projectUrl = getValidProjectUrl(project.url);
  const opensInNewTab = projectUrl
    ? /^https?:\/\//i.test(projectUrl)
    : false;

  return (
    <li className="gallery-card w-[86vw] shrink-0 snap-center sm:w-[78vw] md:w-[min(74vw,640px)] lg:w-[min(68vw,780px)]">
      <article
        aria-labelledby={`project-${index}-title`}
        className={`group relative flex h-full min-h-[25rem] flex-col justify-between overflow-hidden border bg-[#151517] p-6 transition-colors duration-500 sm:p-8 lg:min-h-[58svh] lg:p-10 ${
          active
            ? "border-[#FF7133]/40"
            : "border-white/12 hover:border-white/25"
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 h-px origin-left bg-[#FF7133] transition-transform duration-700 ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 select-none text-[11rem] font-medium leading-none tracking-[-0.06em] text-white/[0.05] lg:block lg:text-[13rem]"
        >
          {number}
        </span>

        <div className="relative">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.6rem] uppercase tracking-[0.14em]">
            <span className="text-[#FF7133]">{number}</span>
            <span className="h-px w-6 bg-white/20" aria-hidden="true" />
            <span className="text-white/55">{project.category}</span>
          </div>

          <h3
            id={`project-${index}-title`}
            className="mt-8 max-w-[24ch] text-3xl font-medium leading-[1.06] text-[#F8F9FA] sm:text-4xl lg:text-[clamp(2.4rem,3.4vw,3.4rem)]"
          >
            {projectUrl ? (
              <a
                href={projectUrl}
                target={opensInNewTab ? "_blank" : undefined}
                rel={opensInNewTab ? "noopener noreferrer" : undefined}
                className="group/title inline-flex items-baseline gap-2 transition-colors duration-300 hover:text-[#FF7133] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-4 focus-visible:ring-offset-[#151517]"
              >
                {project.title}
                <span
                  aria-hidden="true"
                  className="text-sm text-[#FF7133] transition-transform duration-300 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5"
                >
                  ↗
                </span>
                {opensInNewTab ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            ) : (
              project.title
            )}
          </h3>

          <p className="mt-5 max-w-md text-pretty text-sm leading-7 text-white/60 sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="relative mt-10">
          <div className="h-px w-full bg-white/10" aria-hidden="true" />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <ul
              aria-label={`${project.title} technologies`}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6rem] uppercase tracking-[0.08em] text-white/55"
            >
              {project.technologies.map((technology, technologyIndex) => (
                <li key={technology} className="flex items-center gap-3">
                  {technologyIndex > 0 ? (
                    <span
                      aria-hidden="true"
                      className="h-3 w-px bg-white/15"
                    />
                  ) : null}
                  {technology}
                </li>
              ))}
            </ul>
            <span
              aria-hidden="true"
              className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/30"
            >
              {number} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </article>
    </li>
  );
}

/**
 * Desktop: the gallery pins and translates horizontally with page scroll.
 * Tablet/mobile: a native horizontal swipe rail (no pinning, no scroll hijack).
 * Reduced motion: a plain vertical stack of the same cards.
 */
export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLUListElement>(null);
  const [pinned, setPinned] = useState(false);
  const [travel, setTravel] = useState(0);
  const [active, setActive] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const row = rowRef.current;
    if (!row) return;

    const measure = () => {
      const cards = Array.from(row.children) as HTMLElement[];
      if (!cards.length) return;
      const styles = window.getComputedStyle(row);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      const padding =
        (Number.parseFloat(styles.paddingLeft) || 0) +
        (Number.parseFloat(styles.paddingRight) || 0);
      const contentWidth =
        cards.reduce((width, card) => width + card.offsetWidth, 0) +
        gap * (cards.length - 1) +
        padding;

      setPinned(desktop.matches);
      setTravel(
        desktop.matches ? Math.max(0, Math.round(contentWidth - window.innerWidth)) : 0,
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => undefined);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, travel > 0 ? -travel : 0]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!pinned || projects.length < 2) return;
    const next = Math.min(
      projects.length - 1,
      Math.max(0, Math.round(value * (projects.length - 1))),
    );
    setActive((current) => (current === next ? current : next));
  });

  const trackHeight =
    pinned && travel > 0 ? `calc(100svh + ${travel}px)` : undefined;

  return (
    <div
      ref={trackRef}
      className="gallery-track relative"
      style={{ height: trackHeight }}
    >
      <div
        className={`gallery-pin ${
          pinned
            ? "lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:overflow-hidden"
            : ""
        }`}
      >
        <div
          role="region"
          aria-label="Selected project gallery"
          tabIndex={pinned ? -1 : 0}
          className={`w-full snap-x snap-mandatory overflow-x-auto scroll-px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF7133] sm:scroll-px-8 ${
            pinned ? "lg:overflow-visible" : ""
          }`}
        >
          <motion.ul
            ref={rowRef}
            style={{ x: pinned ? x : 0 }}
            className="gallery-row m-0 flex list-none gap-4 px-6 pb-4 sm:gap-6 sm:px-8 lg:gap-8 lg:px-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] lg:pb-0"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                total={projects.length}
                active={pinned && active === index}
              />
            ))}
          </motion.ul>
        </div>

        {pinned ? (
          <div
            aria-hidden="true"
            className="gallery-rail mx-auto mt-8 flex w-full max-w-6xl items-center gap-6 px-10"
          >
            <span className="font-mono text-[0.65rem] text-[#FF7133]">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="relative h-px flex-1 overflow-hidden bg-white/12">
              <motion.span
                className="absolute inset-y-0 left-0 w-full origin-left bg-[#FF7133]"
                style={{ scaleX: scrollYProgress }}
              />
            </span>
            <span className="font-mono text-[0.65rem] text-white/40">
              {String(projects.length).padStart(2, "0")}
            </span>
            <span className="ml-4 hidden font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/30 xl:block">
              Scroll to explore
            </span>
          </div>
        ) : null}
      </div>

      {!pinned ? (
        <div className="gallery-hint mt-6 flex items-center justify-between gap-6 px-6 sm:px-8 lg:hidden">
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-white/50">
            Swipe to explore
          </span>
          <span className="font-mono text-[0.6rem] text-white/40">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
      ) : null}
    </div>
  );
}
