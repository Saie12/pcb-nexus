import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Download, Code, Cpu, Zap, GitBranch } from "lucide-react";

export default function About() {
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
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#00ff88]">Me</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-[#111111] border-[#00ff88]/20 h-full">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Personal Bio
                  </h2>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      I'm a passionate electronics engineer with a deep fascination
                      for turning innovative ideas into functional hardware. My
                      journey in PCB design began with a curiosity about how
                      electronic devices work, and it has evolved into a
                      professional expertise in creating high-quality, reliable
                      circuit boards.
                    </p>
                    <p>
                      With hands-on experience in KiCad, embedded systems
                      programming, and hardware prototyping, I specialize in
                      designing PCBs that meet stringent performance requirements
                      while maintaining manufacturability. From high-speed digital
                      interfaces to power management circuits, I approach each
                      project with meticulous attention to detail and a commitment
                      to excellence.
                    </p>
                    <p>
                      My career goal is to join an innovative team as a PCB Design
                      Engineer where I can contribute to challenging hardware
                      projects, collaborate with talented engineers, and continue
                      growing my expertise in cutting-edge electronic design. I'm
                      particularly interested in projects involving IoT devices,
                      embedded systems, and high-speed digital design.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-[#111111] border-[#00ff88]/20 h-full">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Core Competencies
                  </h2>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <skill.icon size={20} className="text-[#00ff88]" />
                          </div>
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

                  <Button
                    className="w-full mt-8 bg-[#00ff88] text-[#0a0a0a] hover:bg-[#00ff88]/90 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] font-semibold"
                    size="lg"
                  >
                    <Download className="mr-2" size={20} />
                    Download My Resume
                  </Button>
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
