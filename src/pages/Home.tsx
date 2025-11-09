import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />
      <HeroSection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}