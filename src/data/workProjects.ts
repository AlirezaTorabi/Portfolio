export interface WorkProject {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  url?: string;
  previewImagePath?: string;
  previewImageAlt?: string;
}

export const workProjects: WorkProject[] = [
  {
    title: "RoadMaps",
    category: "Trading Platform / Web Application",
    description:
      "A trading platform focused on strategy development, real-time execution, and trading workflows.",
    technologies: ["Next.js", "React", "TypeScript", "UI Design"],
  },
  {
    title: "Hedok",
    category: "Web Application",
    description:
      "A digital product focused on usability, responsive interfaces, and user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Django"],
  },
  {
    title: "Personal Portfolio",
    category: "Portfolio / Creative Development",
    description:
      "A personal website showcasing frontend development and selected projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "RM Studio",
    category: "Digital Design / Web Development",
    description:
      "A digital studio concept focused on website development and user interface implementation.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
];