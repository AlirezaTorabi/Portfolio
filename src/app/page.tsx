import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F5F5F2]">
      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto min-h-screen w-full max-w-[1800px] px-3 pb-8 pt-5 sm:px-5 sm:pt-8 lg:px-8">
          <Hero />
        </main>
      </div>
    </div>
  );
}
