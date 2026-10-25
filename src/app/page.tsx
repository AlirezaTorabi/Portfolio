import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/Navigation/Navbar";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F8F9FA] text-[#060607]">
      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto min-h-screen w-full pt-5 sm:pt-8">
          <Hero />
          <Work />
          <About />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
