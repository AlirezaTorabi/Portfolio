"use client";

import { Tabs, TabsContent, TabsContents, TabsHighlight, TabsHighlightItem, TabsList, TabsTrigger } from "@animate-ui/react/primitives/tabs";
import type { Technology } from "@/components/About";

const TABS = [
  { value: "frontend", label: "Frontend" },
  { value: "frameworks", label: "Frameworks" },
  { value: "styling", label: "Styling" },
  { value: "tools", label: "Tools" },
] as const;

const TAB_SKILLS: Record<TabsTabValue, readonly Technology[]> = {
  frontend: [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-original colored" },
  ],
  frameworks: [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain", iconColor: "text-foreground" },
  ],
  styling: [
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  ],
  tools: [
    { name: "Git", icon: "devicon-git-plain colored" },
  ],
};

type TabsTabValue = (typeof TABS)[number]["value"];

const TAB_DESCRIPTIONS: Record<TabsTabValue, string> = {
  frontend: "The core languages used to shape responsive interfaces.",
  frameworks: "Libraries and frameworks for building modern web apps.",
  styling: "Tools for creating consistent, maintainable UI systems.",
  tools: "Workflow tools for collaboration and version control.",
};

function TechnologyCard({ technology }: { technology: Technology }) {
  const iconClassName = [technology.icon, technology.iconColor]
    .filter(Boolean)
    .join(" ");

  return (
    <li className="min-w-0">
      <div className="group flex min-h-14 items-center gap-3 border border-foreground/10 bg-background px-3 py-3 transition-colors duration-200 hover:border-accent/45 hover:bg-accent/[0.035] sm:px-4">
        <i
          aria-hidden="true"
          className={`${iconClassName} inline-flex size-5 shrink-0 items-center justify-center text-base leading-none transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        />
        <span className="min-w-0 text-base font-medium leading-5 text-foreground/75 transition-colors duration-200 group-hover:text-foreground">
          {technology.name}
        </span>
      </div>
    </li>
  );
}

export default function ToolkitTabs() {
  return (
    <Tabs defaultValue="frontend" className="w-full min-w-0">
      <TabsHighlight className="relative z-0 w-full border border-foreground/15 bg-secondary/60 p-1">
        <TabsList className="grid w-full grid-cols-2 gap-1 sm:grid-cols-4">
          {TABS.map((tab) => (
            <TabsHighlightItem
              key={tab.value}
              value={tab.value}
              className="min-w-0"
            >
              <TabsTrigger
                value={tab.value}
                className="inline-flex min-h-11 w-full items-center justify-center px-2 text-sm font-medium text-foreground/55 transition-colors duration-200 hover:text-foreground data-[state=active]:text-foreground sm:px-3"
                aria-label={`Show ${tab.label} technologies`}
              >
                {tab.label}
              </TabsTrigger>
            </TabsHighlightItem>
          ))}
        </TabsList>
      </TabsHighlight>

      <TabsContents className="mt-3 w-full border border-foreground/15 bg-card text-card-foreground">
        {TABS.map(({ value, label }) => (
          <TabsContent key={value} value={value} className="w-full p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-foreground/10 pb-4">
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground">{label}</p>
                <p className="mt-1 max-w-md text-sm leading-6 text-foreground/55">
                  {TAB_DESCRIPTIONS[value]}
                </p>
              </div>
              <span className="shrink-0 font-mono text-[0.65rem] text-foreground/45">
                {String(TAB_SKILLS[value].length).padStart(2, "0")} ITEMS
              </span>
            </div>
            <ul
              className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2"
              aria-label={`${label} technologies`}
            >
              {TAB_SKILLS[value].map((technology) => (
                <TechnologyCard key={technology.name} technology={technology} />
              ))}
            </ul>
          </TabsContent>
        ))}
      </TabsContents>
    </Tabs>
  );
}
