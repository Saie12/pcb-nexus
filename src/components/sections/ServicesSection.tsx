import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          What I <span className="text-[#00BFFF]">Offer</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Professional hardware design services from concept to production
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Schematic & PCB Layout",
              description: "Professional multi-layer PCB layouts in KiCad with DFM principles and robust power delivery.",
              icon: "🔌",
              color: "#00ff88",
            },
            {
              title: "High-Speed Design",
              description: "Controlled impedance traces, matched-length differential pairs, and proper routing for signal integrity.",
              icon: "⚡",
              color: "#0088ff",
            },
            {
              title: "Firmware Development",
              description: "Clean, efficient firmware in C/C++ for PIC, 8051, and ARM microcontrollers.",
              icon: "💻",
              color: "#ff0080",
            },
            {
              title: "Prototyping & Bring-up",
              description: "Hands-on assembly, soldering, and functional testing to verify hardware functionality.",
              icon: "🔧",
              color: "#00ff88",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#1a1a1a] border border-[#00ff88]/20 rounded-xl p-6 hover:border-[#00BFFF] hover:shadow-[0_0_20px_rgba(0,191,255,0.2)] transition-all duration-300 group cursor-pointer"
            >
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ filter: `drop-shadow(0 0 10px ${service.color}40)` }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF]/10 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
