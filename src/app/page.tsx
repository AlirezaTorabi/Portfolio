import Hero from "@/components/hero/hero";
import Navbar from "@/components/Navigation/Navbar";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F8F9FA] text-[#060607]">
      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto min-h-screen w-full max-w-[1800px] pb-8 pt-5 sm:pt-8">
          <Hero />
          <Work />
        </main>
      </div>
    </div>
  );
}
