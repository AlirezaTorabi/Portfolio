"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";

const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[1.15rem] w-[1.15rem]"
    >
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.75-.24.75-.53v-2.06c-3.08.67-3.73-1.3-3.73-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.11.08 1.7 1.14 1.7 1.14.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.47-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.4.11-2.92 0 0 .93-.3 3.05 1.14a10.5 10.5 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.52.22 2.64.11 2.92.71.77 1.14 1.76 1.14 2.97 0 4.25-2.6 5.19-5.07 5.46.4.35.76 1.03.76 2.08v3.08c0 .29.2.64.76.53a11.1 11.1 0 0 0 7.56-10.52C23.1 5.33 18.27.5 12 .5Z" />
    </svg>
  );
}

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  external: boolean;
  icon: ReactNode;
};

const channels: ContactChannel[] = [
  {
    label: "Phone",
    value: "+98 917 663 1858",
    href: "tel:+989176631858",
    external: false,
    icon: <PhoneIcon />,
  },
  {
    label: "Telegram",
    value: "@AlirezaToorabi",
    href: "https://t.me/AlirezaToorabi",
    external: true,
    icon: <TelegramIcon />,
  },
  {
    label: "Instagram",
    value: "@AlirezaToorabi",
    href: "https://www.instagram.com/AlirezaToorabi/",
    external: true,
    icon: <InstagramIcon />,
  },
  {
    label: "GitHub",
    value: "AlirezaTorabi",
    href: "https://github.com/AlirezaTorabi",
    external: true,
    icon: <GitHubIcon />,
  },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#111113] text-[#F8F9FA]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-[#FF7133]/[0.045] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
              <p className="text-[0.65rem] font-medium uppercase text-white/60">
                Get in Touch
              </p>
              <p className="hidden font-mono text-xs text-white/55 sm:block">
                Front-End Developer / UI Designer
              </p>
            </div>
          </Reveal>

          <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-20 lg:py-20">
            <Reveal>
              <h2
                id="contact-title"
                className="max-w-2xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl"
              >
                Let&apos;s build something{" "}
                <span className="text-[#FF7133]">great together.</span>
              </h2>
              <p className="mt-8 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Have a project in mind or an opportunity to discuss? I&apos;d
                love to hear from you. Feel free to reach out through any of the
                channels below.
              </p>
              <div className="mt-10">
                <a
                  href="https://t.me/AlirezaToorabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center gap-4 border border-[#FF7133] bg-[#FF7133] px-6 text-xs font-medium text-[#111113] transition-colors duration-200 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111113]"
                >
                  <span>Start a Conversation</span>
                  <span
                    aria-hidden="true"
                    className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mb-3 text-[0.65rem] font-medium uppercase text-white/50">
                Direct channels
              </p>
              <ul
                aria-label="Contact methods"
                className="m-0 list-none border-t border-white/10 p-0"
              >
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center justify-between gap-4 border-b border-white/10 px-1 py-4 transition-colors duration-200 hover:border-[#FF7133]/40 hover:bg-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111113] sm:py-5"
                    >
                      <span className="flex min-w-0 items-center gap-4">
                        <span className="grid size-10 shrink-0 place-items-center border border-white/10 text-white/60 transition-colors duration-200 group-hover:border-[#FF7133]/50 group-hover:text-[#FF7133]">
                          {channel.icon}
                        </span>
                        <span className="flex min-w-0 flex-col">
                          <span className="text-[0.6rem] font-medium uppercase tracking-[0.12em] text-white/50">
                            {channel.label}
                          </span>
                          <span className="mt-1 truncate text-sm text-[#F8F9FA] sm:text-base">
                            {channel.value}
                          </span>
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-base text-white/25 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF7133]"
                      >
                        {channel.external ? "↗" : "→"}
                      </span>
                      {channel.external && (
                        <span className="sr-only"> (opens in a new tab)</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
