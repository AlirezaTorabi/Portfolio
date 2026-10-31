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

function TechnologyChip({ technology }: { technology: Technology }) {
  const iconClassName = [technology.icon, technology.iconColor]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="group flex items-center gap-3 rounded-xl border border-foreground/10 bg-transparent px-4 py-3 transition-colors duration-300 hover:border-[#FF7133]/40 hover:bg-foreground/[0.02] dark:border-input/40 dark:hover:border-[#FF7133]/30"
      aria-label={technology.name}
    >
      <i
        aria-hidden="true"
        className={`${iconClassName} inline-flex size-5 items-center justify-center text-base leading-none transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-foreground/55 transition-colors duration-300 group-hover:text-foreground">
        {technology.name}
      </span>
    </div>
  );
}

export default function ToolkitTabs() {
  return (
    <Tabs defaultValue="frontend" className="w-full min-w-0 max-w-[560px]">
      <TabsHighlight className="relative z-0 mx-auto flex w-full max-w-[560px] shrink-0 rounded-lg border border-transparent bg-transparent p-[3px] shadow-none dark:border-input/40">
        <TabsList className="flex items-center gap-[3px] rounded-lg bg-transparent p-1">
          {TABS.map((tab) => (
            <TabsHighlightItem key={tab.value} value={tab.value}>
              <TabsTrigger
                value={tab.value}
                className="inline-flex h-8 w-full items-center justify-center rounded-md px-2 text-xs font-medium whitespace-nowrap text-foreground/50 transition-colors duration-500 ease-in-out hover:text-foreground/80 data-[state=active]:text-foreground sm:px-3"
                aria-label={`Show ${tab.label} technologies`}
              >
                {tab.label}
              </TabsTrigger>
            </TabsHighlightItem>
          ))}
        </TabsList>
      </TabsHighlight>

      <TabsContents className="mt-4 min-h-[120px] w-full rounded-xl bg-transparent ring-0">
        {TABS.map(({ value, label }) => (
          <TabsContent key={value} value={value} className="w-full">
            <div className="grid gap-2.5" role="list" aria-label={`${label} technologies`}>
              {TAB_SKILLS[value].map((technology) => (
                <li key={technology.name}>
                  <TechnologyChip technology={technology} />
                </li>
              ))}
            </div>
          </TabsContent>
        ))}
      </TabsContents>
    </Tabs>
  );
}
