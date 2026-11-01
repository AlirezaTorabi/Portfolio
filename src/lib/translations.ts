export type Locale = "en" | "fa";

const english = {
  language: {
    switchToEnglish: "Switch language to English",
    switchToPersian: "Switch language to Persian",
    shortEnglish: "EN",
    shortPersian: "FA",
  },
  navigation: {
    home: "HOME",
    work: "WORK",
    about: "ABOUT",
    contact: "CONTACT",
    primary: "Primary navigation",
    mobile: "Mobile navigation links",
    open: "Open navigation menu",
    close: "Close navigation menu",
  },
  common: {
    skipToContent: "Skip to content",
    selectedProjects: "selected projects",
    opensInNewTab: "opens in a new tab",
    technologiesLabel: "technologies",
  },
  hero: {
    role: "Frontend Developer & UI Designer",
    established: "Est. 2026",
    name: ["Alireza", "Torabi"],
    introduction:
      "I design and build refined, responsive web experiences, with a focus on clear hierarchy, purposeful motion, and maintainable frontend code.",
    viewWork: "View selected work",
    contactMe: "Contact me",
    practice: "Practice areas",
    areas: ["Interface design", "Frontend engineering", "Motion & interaction"],
    shortAreas: ["Interface", "Frontend", "Motion"],
    details: [
      "Layout, hierarchy, and systems that make an interface feel effortless.",
      "React, Next.js, and TypeScript shaped into clean, maintainable components.",
      "Purposeful transitions and feedback that guide attention.",
    ],
    scrollToWork: "Scroll to work",
    toSelectedWork: "to selected work",
  },
  work: {
    eyebrow: "Selected Work",
    heading: ["Ideas turned into", "digital experiences."],
    introduction:
      "A selection of projects focused on frontend development, web applications, and digital experiences.",
    galleryLabel: "Selected project gallery",
    scrollToExplore: "Scroll to explore",
  },
  about: {
    eyebrow: "About Me",
    role: "Front-End Developer / UI Designer",
    heading: ["I build digital experiences", "with purpose."],
    introduction:
      "I'm Alireza Torabi, a front-end developer and UI designer. I build modern, responsive web applications and shape interfaces that feel intuitive, refined, and easy to use, turning ideas into functional digital experiences with clean, maintainable code.",
    principlesLabel: "Working principles",
    principles: [
      {
        title: "Thoughtful Design",
        detail:
          "Clarity, hierarchy, and restraint guide every interface decision, so each detail has a reason to exist.",
      },
      {
        title: "Clean Development",
        detail:
          "Semantic, maintainable frontend code built for responsiveness, performance, and the long run.",
      },
      {
        title: "Continuous Learning",
        detail:
          "A steady practice of refining the craft and staying curious about better ways to build.",
      },
    ],
    illustrationAlt: "Illustration of a developer working with frontend technologies.",
    toolkit: "Toolkit",
  },
  toolkit: {
    tabs: ["Frontend", "Frameworks", "Styling", "Tools"],
    descriptions: [
      "The core languages used to shape responsive interfaces.",
      "Libraries and frameworks for building modern web apps.",
      "Tools for creating consistent, maintainable UI systems.",
      "Workflow tools for collaboration and version control.",
    ],
    showTechnologies: "Show {name} technologies",
    itemCount: "ITEMS",
  },
  contact: {
    eyebrow: "Get in Touch",
    role: "Front-End Developer / UI Designer",
    heading: ["Let's build something", "great together."],
    introduction:
      "Have a project in mind or an opportunity to discuss? I'd love to hear from you. Feel free to reach out through any of the channels below.",
    startConversation: "Start a Conversation",
    directChannels: "Direct channels",
    selectMethod: "Select a contact method",
    showDetails: "Show {name} contact details",
    channels: ["Phone", "Telegram", "Instagram", "GitHub"],
    idle: "Contact methods",
  },
  footer: {
    role: "Front-End Developer & UI Designer",
    tagline: "Designing and building thoughtful digital experiences.",
    navigation: "Navigation",
    socials: "Socials",
    copyright: "All rights reserved.",
    backToTop: "Back to top",
  },
  projects: {
    RoadMaps: {
      title: "RoadMaps",
      category: "Trading Platform / Web Application",
      description:
        "A trading platform focused on strategy development, real-time execution, and trading workflows.",
    },
    Hedok: {
      title: "Hedok",
      category: "Web Application",
      description:
        "A digital product focused on usability, responsive interfaces, and user experience.",
    },
    portfolio: {
      title: "Personal Portfolio",
      category: "Portfolio / Creative Development",
      description:
        "A personal website showcasing frontend development and selected projects.",
    },
    "RM Studio": {
      title: "RM Studio",
      category: "Digital Design / Web Development",
      description:
        "A digital studio concept focused on website development and user interface implementation.",
    },
  },
  notFound: {
    eyebrow: "Error 404",
    heading: ["This page doesn't", "exist."],
    explanation: "The link may be outdated, or the page may have moved.",
    backHome: "Back to portfolio",
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { [Key in keyof T]: Widen<T[Key]> }
    : T extends object
      ? { [Key in keyof T]: Widen<T[Key]> }
      : T;

const persian = {
  language: {
    switchToEnglish: "تغییر زبان به انگلیسی",
    switchToPersian: "تغییر زبان به فارسی",
    shortEnglish: "EN",
    shortPersian: "FA",
  },
  navigation: {
    home: "خانه",
    work: "نمونه‌کارها",
    about: "درباره‌من",
    contact: "تماس",
    primary: "ناوبری اصلی",
    mobile: "پیوندهای ناوبری",
    open: "بازکردن منو",
    close: "بستن منو",
  },
  common: {
    skipToContent: "رفتن به محتوای اصلی",
    selectedProjects: "نمونه‌کار منتخب",
    opensInNewTab: "در زبانه‌ای تازه باز می‌شود",
    technologiesLabel: "فناوری‌ها",
  },
  hero: {
    role: "توسعه‌دهنده فرانت‌اند و طراح رابط کاربری",
    established: "شروع فعالیت، ۲۰۲۶",
    name: ["علیرضا", "ترابی"],
    introduction:
      "تجربه‌های وبِ دقیق و واکنش‌گرا طراحی و پیاده‌سازی می‌کنم؛ با تمرکز بر سلسله‌مراتب بصری روشن، حرکت هدفمند و کدی که نگه‌داری‌اش ساده باشد.",
    viewWork: "دیدن نمونه‌کارها",
    contactMe: "ارتباط با من",
    practice: "حوزه‌های کاری",
    areas: ["طراحی رابط کاربری", "توسعه فرانت‌اند", "حرکت و تعامل"],
    shortAreas: ["رابط کاربری", "فرانت‌اند", "حرکت"],
    details: [
      "چیدمان و سلسله‌مراتبی که استفاده از رابط را ساده و روان می‌کند.",
      "ساخت کامپوننت‌های تمیز و نگه‌داری‌پذیر با React، Next.js و TypeScript.",
      "حرکت‌های معنادار و بازخوردهایی که مسیر توجه را روشن می‌کنند.",
    ],
    scrollToWork: "رفتن به نمونه‌کارها",
    toSelectedWork: "نمونه‌کارهای منتخب",
  },
  work: {
    eyebrow: "نمونه‌کارهای منتخب",
    heading: ["ایده‌ها را به", "تجربه‌های دیجیتال تبدیل می‌کنم."],
    introduction:
      "گزیده‌ای از پروژه‌های من در توسعه‌ی فرانت‌اند، اپلیکیشن‌های وب و تجربه‌های دیجیتال.",
    galleryLabel: "گالری نمونه‌کارهای منتخب",
    scrollToExplore: "برای دیدن ورق بزنید",
  },
  about: {
    eyebrow: "درباره‌ی من",
    role: "توسعه‌دهنده فرانت‌اند / طراح رابط کاربری",
    heading: ["تجربه‌های دیجیتال", "را هدفمند می‌سازم."],
    introduction:
      "من علیرضا ترابی هستم؛ توسعه‌دهنده‌ی فرانت‌اند و طراح رابط کاربری. اپلیکیشن‌های وبِ مدرن و واکنش‌گرا می‌سازم و رابط‌هایی طراحی می‌کنم که کار با آن‌ها روشن، روان و خوشایند باشد؛ از ایده‌ی اولیه تا تجربه‌ای کاربردی با کدی تمیز و قابل‌نگه‌داری.",
    principlesLabel: "اصول کاری من",
    principles: [
      {
        title: "طراحی سنجیده",
        detail:
          "وضوح، سلسله‌مراتب و پرهیز از شلوغی راهنمای تصمیم‌های طراحی‌اند؛ هر جزئی باید دلیل روشنی برای حضور داشته باشد.",
      },
      {
        title: "توسعه‌ی تمیز",
        detail:
          "کدی معنایی و نگه‌داری‌پذیر که برای واکنش‌گرایی، عملکرد خوب و استفاده‌ی بلندمدت ساخته می‌شود.",
      },
      {
        title: "یادگیری پیوسته",
        detail:
          "با تمرین مداوم، مهارت‌هایم را صیقل می‌دهم و برای پیدا کردن راه‌های بهترِ ساختن کنجکاو می‌مانم.",
      },
    ],
    illustrationAlt: "تصویری از یک توسعه‌دهنده در حال کار با فناوری‌های فرانت‌اند.",
    toolkit: "ابزارها و فناوری‌ها",
  },
  toolkit: {
    tabs: ["فرانت‌اند", "فریم‌ورک‌ها", "استایل‌دهی", "ابزارها"],
    descriptions: [
      "زبان‌های اصلی برای ساخت رابط‌های واکنش‌گرا.",
      "کتابخانه‌ها و فریم‌ورک‌های ساخت اپلیکیشن‌های وبِ مدرن.",
      "ابزارهای ساخت سیستم‌های رابط کاربری یکدست و نگه‌داری‌پذیر.",
      "ابزارهای همکاری و مدیریت نسخه در جریان توسعه.",
    ],
    showTechnologies: "نمایش فناوری‌های {name}",
    itemCount: "مورد",
  },
  contact: {
    eyebrow: "در تماس باشیم",
    role: "توسعه‌دهنده فرانت‌اند / طراح رابط کاربری",
    heading: ["بیایید با هم", "چیزی عالی بسازیم."],
    introduction:
      "پروژه‌ای در ذهن دارید یا پیشنهادی برای همکاری؟ خوشحال می‌شوم درباره‌اش بشنوم. از راه‌های زیر با من در تماس باشید.",
    startConversation: "شروع گفت‌وگو",
    directChannels: "راه‌های ارتباطی",
    selectMethod: "انتخاب روش ارتباط",
    showDetails: "نمایش اطلاعات تماس {name}",
    channels: ["تلفن", "تلگرام", "اینستاگرام", "گیت‌هاب"],
    idle: "روش‌های ارتباطی",
  },
  footer: {
    role: "توسعه‌دهنده فرانت‌اند و طراح رابط کاربری",
    tagline: "طراحی و ساخت تجربه‌های دیجیتالِ سنجیده.",
    navigation: "دسترسی سریع",
    socials: "شبکه‌های اجتماعی",
    copyright: "تمامی حقوق محفوظ است.",
    backToTop: "بازگشت به بالا",
  },
  projects: {
    RoadMaps: {
      title: "RoadMaps",
      category: "پلتفرم معاملات / اپلیکیشن وب",
      description:
        "پلتفرمی برای توسعه‌ی استراتژی، اجرای لحظه‌ای معاملات و مدیریت جریان‌های کاری معامله‌گری.",
    },
    Hedok: {
      title: "Hedok",
      category: "اپلیکیشن وب",
      description:
        "محصولی دیجیتال با تمرکز بر سهولت استفاده، رابط واکنش‌گرا و تجربه‌ی کاربری.",
    },
    portfolio: {
      title: "وب‌سایت شخصی",
      category: "نمونه‌کار / توسعه‌ی خلاقانه",
      description:
        "وب‌سایتی شخصی برای نمایش مهارت‌های توسعه‌ی فرانت‌اند و پروژه‌های منتخب.",
    },
    "RM Studio": {
      title: "RM Studio",
      category: "طراحی دیجیتال / توسعه‌ی وب",
      description:
        "طرحی مفهومی برای استودیوی دیجیتال، با تمرکز بر طراحی وب‌سایت و پیاده‌سازی رابط کاربری.",
    },
  },
  notFound: {
    eyebrow: "خطای ۴۰۴",
    heading: ["این صفحه", "پیدا نشد."],
    explanation: "ممکن است نشانی قدیمی باشد یا صفحه جابه‌جا شده باشد.",
    backHome: "بازگشت به صفحه‌ی اصلی",
  },
} satisfies Widen<typeof english>;

export const translations = { en: english, fa: persian };

export function formatNumber(value: number, locale: Locale, digits = 0): string {
  const options: Intl.NumberFormatOptions = { useGrouping: false };
  if (digits > 0) options.minimumIntegerDigits = digits;
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US", options).format(value);
}
