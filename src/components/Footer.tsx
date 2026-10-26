import Reveal from "@/components/ui/Reveal";

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
      className="h-[1.15rem] w-[1.15rem]"
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
      className="h-[1.15rem] w-[1.15rem]"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navigation = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AlirezaTorabi",
    icon: <GitHubIcon />,
  },
  {
    label: "Telegram",
    href: "https://t.me/AlirezaToorabi",
    icon: <TelegramIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/AlirezaToorabi/",
    icon: <InstagramIcon />,
  },
];

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7133] focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)_auto] md:gap-14 lg:gap-20">
            <div>
              <p className="flex items-center gap-2.5 text-lg font-medium">
                Alireza Torabi
                <span
                  aria-hidden="true"
                  className="mt-0.5 block size-1.5 shrink-0 bg-[#FF7133]"
                />
              </p>
              <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-foreground/50">
                Front-End Developer &amp; UI Designer
              </p>
              <p className="mt-6 max-w-xs text-sm leading-6 text-foreground/60">
                Designing and building thoughtful digital experiences.
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-foreground/50">
                Navigation
              </p>
              <ul className="mt-4 space-y-1">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`group -mx-2 inline-flex min-h-11 items-center gap-3 px-2 text-sm text-foreground/65 transition-colors duration-200 hover:text-foreground ${focusRing}`}
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-4 bg-foreground/20 transition-all duration-200 group-hover:w-6 group-hover:bg-[#FF7133]"
                      />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-foreground/50">
                Socials
              </p>
              <ul className="mt-5 flex gap-2.5">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (opens in a new tab)`}
                      className={`grid size-11 place-items-center border border-foreground/10 text-foreground/60 transition-colors duration-200 hover:border-[#FF7133]/50 hover:bg-foreground/[0.03] hover:text-[#FF7133] ${focusRing}`}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <p
          aria-hidden="true"
          className="mt-14 select-none whitespace-nowrap text-[clamp(1.75rem,9.5vw,8rem)] font-medium leading-[0.8] tracking-[-0.05em] text-foreground/[0.055]"
        >
          ALIREZA TORABI
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-foreground/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground/50">
            © {year} Alireza Torabi. All rights reserved.
          </p>
          <a
            href="#top"
            className={`group inline-flex min-h-11 items-center gap-2 self-start border border-foreground/10 px-3.5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-foreground/60 transition-colors duration-200 hover:border-[#FF7133]/50 hover:text-foreground sm:self-auto ${focusRing}`}
          >
            Back to top
            <span
              aria-hidden="true"
              className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
