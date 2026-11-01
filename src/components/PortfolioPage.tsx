import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/Navigation/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Work from "@/components/Work";
import { translations, type Locale } from "@/lib/translations";

export default function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = translations[locale];

  return (
    <div
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={`locale-${locale} relative min-h-screen text-foreground`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:inline-flex focus:min-h-11 focus:items-center focus:bg-accent focus:px-4 focus:text-xs focus:font-medium focus:text-on-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
      >
        {copy.common.skipToContent}
      </a>

      <ScrollProgress locale={locale} />
      <Navbar locale={locale} />

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen w-full scroll-mt-24 focus:outline-none"
      >
        <Hero locale={locale} />
        <Work locale={locale} />
        <About locale={locale} />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} />
    </div>
  );
}