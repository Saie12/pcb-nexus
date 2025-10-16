import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle, Cpu, Code, Zap, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: "Schematic & PCB Layout",
      description:
        "From your initial concept, block diagram, or existing schematics, I create professional, manufacturable multi-layer PCB layouts in KiCad. I focus on clean design, DFM principles, and robust power delivery.",
      deliverables: [
        "Gerber & Drill Files",
        "Bill of Materials (BOM)",
        "Pick and Place (PnP) File",
        "3D Model",
        "KiCad Source Files",
      ],
      color: "#00ff88",
    },
    {
      icon: Zap,
      title: "High-Speed Design",
      description:
        "Specializing in layouts for high-speed digital interfaces. I design boards with controlled impedance traces, matched-length differential pairs (USB, Ethernet), and proper routing strategies to ensure signal integrity.",
      deliverables: [
        "Layout with High-Speed Constraints",
        "Stack-up Report",
        "Impedance Calculations",
      ],
      color: "#0088ff",
    },
    {
      icon: Code,
      title: "Firmware Development",
      description:
        "Writing clean, efficient, and well-documented firmware in C and C++ for microcontrollers like PIC, 8051, and ARM. I develop firmware for sensor integration, communication protocols, and peripheral control.",
      deliverables: [
        "Well-Commented Source Code (via Git)",
        "Compiled HEX/BIN File",
      ],
      color: "#ff0080",
    },
    {
      icon: Wrench,
      title: "Prototyping & Board Bring-up",
      description:
        "Providing hands-on services including SMD and THT component soldering, board assembly, and initial functional testing (bring-up) to verify hardware functionality.",
      deliverables: ["Assembled & Tested Prototype PCB"],
      color: "#00ff88",
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
              My <span className="text-[#00ff88]">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I offer a range of hardware design and development services to help
              you build and test your electronic products efficiently. Below are
              the core services I provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#111111] border-[#00ff88]/20 hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all h-full">
                  <CardHeader>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${service.color}20`,
                        border: `1px solid ${service.color}40`,
                        boxShadow: `0 0 20px ${service.color}30`,
                      }}
                    >
                      <service.icon
                        size={28}
                        style={{ color: service.color }}
                      />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-gray-400"
                          >
                            <CheckCircle
                              size={18}
                              className="mr-2 mt-0.5 flex-shrink-0"
                              style={{ color: service.color }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
