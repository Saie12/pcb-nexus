import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PersonalBio from "@/components/about/PersonalBio";
import CoreCompetencies from "@/components/about/CoreCompetencies";
import { motion } from "framer-motion";

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saiesh Sasane",
    "jobTitle": "PCB Design & Embedded Systems Engineer",
    "description": "Passionate electronics engineer specializing in PCB design, embedded systems programming, and hardware prototyping with expertise in KiCad, ARM Cortex-M, and high-speed digital design.",
    "knowsAbout": [
      "KiCad",
      "PCB Design",
      "Schematic Capture",
      "High-Speed Design",
      "Impedance Control",
      "EMI/EMC",
      "DFM",
      "ARM Cortex-M",
      "PIC Microcontrollers",
      "8051",
      "C Programming",
      "C++ Programming",
      "Python",
      "Git",
      "GitHub",
      "SPICE Simulation",
      "Soldering"
    ],
    "alumniOf": "Electronics Engineering",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "PCB Design Engineer",
      "skills": "PCB Layout, Embedded Firmware, Hardware Prototyping, High-Speed Design"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO
        title="About - Saiesh Sasane | PCB Design & Embedded Systems Engineer"
        description="Learn about Saiesh Sasane, a passionate electronics engineer with expertise in PCB design, embedded systems, KiCad, ARM Cortex-M, high-speed design, firmware development, and hardware prototyping. Download resume and view core competencies in EDA tools, microcontrollers, and circuit design."
        keywords={[
          "Saiesh Sasane about",
          "Saiesh Sasane bio",
          "Saiesh Sasane resume",
          "Saiesh Sasane CV",
          "PCB design engineer bio",
          "embedded systems engineer about",
          "hardware engineer profile",
          "electronics engineer background",
          "KiCad expert profile",
          "ARM Cortex-M developer",
          "high-speed design engineer",
          "firmware developer profile",
          "circuit design engineer",
          "PCB layout specialist",
          "hardware prototyping expert",
          "electronics engineering skills",
          "PCB design skills",
          "embedded programming skills",
          "microcontroller expertise",
          "EDA tools experience",
          "schematic capture skills",
          "impedance control expertise",
          "signal integrity knowledge",
          "DFM experience",
          "EMI EMC knowledge",
          "soldering skills",
          "hardware testing experience",
          "Git version control",
          "GitHub hardware projects",
          "SPICE simulation skills",
          "lab equipment experience"
        ]}
        structuredData={structuredData}
      />
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About <span className="bg-gradient-to-r from-[#00ff88] via-[#00BFFF] to-[#ff0080] bg-clip-text text-transparent">Me</span>
            </motion.h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <PersonalBio />
            <CoreCompetencies />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}