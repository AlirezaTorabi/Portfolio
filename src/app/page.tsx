import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/Navigation/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="relative min-h-screen text-[#F8F9FA]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:min-h-11 focus:items-center focus:bg-[#FF7133] focus:px-4 focus:text-xs focus:font-medium focus:text-[#111113] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F9FA]"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen w-full scroll-mt-24 focus:outline-none"
      >
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
