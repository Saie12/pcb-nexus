import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Download, Code, Cpu, Zap, GitBranch } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function About() {
  const logDownload = useMutation(api.resumeTracking.logDownload);

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

  const handleResumeDownload = async () => {
    try {
      // Log download to Convex
      await logDownload({
        source: "portfolio",
        userAgent: navigator.userAgent,
        referrer: document.referrer || undefined,
      });

      // Track with Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "resume_download", {
          event_category: "engagement",
          event_label: "Resume Download from About Page",
        });
      }

      // Open resume in new tab - browser will handle download from there
      window.open("/assets/Saiesh_Sasane_Embedded_Hardware_Engineer_Resume.pdf", "_blank");

      toast.success("Resume opened in new tab. You can download it from there!");
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Failed to download resume. Please try again.");
    }
  };

  const skills = [
    {
      category: "EDA Tools",
      items: ["KiCad (Schematic Capture, PCB Layout, 3D Rendering, Gerber Generation)"],
      icon: Cpu,
    },
    {
      category: "Design Concepts",
      items: [
        "High-Speed Design (Impedance Control, Differential Pairs, Length Matching)",
        "EMI/EMC",
        "DFM",
      ],
      icon: Zap,
    },
    {
      category: "Microcontrollers & IDEs",
      items: ["PIC", "8051", "ARM Cortex-M", "MPLAB X IDE", "Keil IDE"],
      icon: Cpu,
    },
    {
      category: "Programming",
      items: ["C", "C++", "Python (for scripting and automation)"],
      icon: Code,
    },
    {
      category: "Version Control & Collaboration",
      items: ["Git", "GitHub", "CadLab"],
      icon: GitBranch,
    },
    {
      category: "Simulation & Prototyping",
      items: ["SPICE", "Soldering (SMD/THT)", "Lab equipment"],
      icon: Zap,
    },
  ];

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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="bg-[#111111] border-[#00ff88]/20 h-full hover:border-[#00BFFF] hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Personal Bio
                  </h2>
                  <div className="space-y-4 text-gray-400 text-sm sm:text-base">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      I'm a passionate electronics engineer with a deep fascination
                      for turning innovative ideas into functional hardware. My
                      journey in PCB design began with a curiosity about how
                      electronic devices work, and it has evolved into a
                      professional expertise in creating high-quality, reliable
                      circuit boards.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      With hands-on experience in KiCad, embedded systems
                      programming, and hardware prototyping, I specialize in
                      designing PCBs that meet stringent performance requirements
                      while maintaining manufacturability. From high-speed digital
                      interfaces to power management circuits, I approach each
                      project with meticulous attention to detail and a commitment
                      to excellence.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      My career goal is to join an innovative team as a PCB Design
                      Engineer where I can contribute to challenging hardware
                      projects, collaborate with talented engineers, and continue
                      growing my expertise in cutting-edge electronic design. I'm
                      particularly interested in projects involving IoT devices,
                      embedded systems, and high-speed digital design.
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="bg-[#111111] border-[#00ff88]/20 h-full hover:border-[#00BFFF] hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Core Competencies
                  </h2>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.category}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="transition-all"
                      >
                        <div className="flex items-start">
                          <motion.div 
                            className="w-10 h-10 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgba(0, 255, 136, 0.2)",
                              boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)"
                            }}
                          >
                            <skill.icon size={20} className="text-[#00ff88]" />
                          </motion.div>
                          <div>
                            <h3 className="text-white font-semibold mb-2">
                              {skill.category}
                            </h3>
                            <ul className="space-y-1">
                              {skill.items.map((item) => (
                                <li key={item} className="text-gray-400 text-sm">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleResumeDownload}
                      className="w-full mt-8 bg-[#00BFFF] text-white hover:bg-[#00BFFF]/90 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] font-semibold transition-all duration-300"
                      size="lg"
                    >
                      <Download className="mr-2" size={20} />
                      Download My Resume
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}