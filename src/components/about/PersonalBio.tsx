import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function PersonalBio() {
  return (
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
  );
}
