import Image from "next/image";
import Hero from "@/components/HeroSection";
import AboutSection from "@/components/about";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <Hero />
      <AboutSection />
    </div>
  );
}
