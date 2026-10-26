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
      <ScrollProgress />
      <Navbar />

      <main className="min-h-screen w-full">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
