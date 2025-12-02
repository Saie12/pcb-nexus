import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Shuffle from "@/components/Shuffle";
import MagneticButton from "@/components/animations/MagneticButton";
import StaggerText from "@/components/animations/StaggerText";
import FloatingElement from "@/components/animations/FloatingElement";
import VariableProximity from "@/components/animations/VariableProximity";

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingElement delay={0} duration={4} className="absolute top-20 right-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-xl" />
      <FloatingElement delay={1} duration={5} className="absolute bottom-40 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-xl" />
      <FloatingElement delay={2} duration={3.5} className="absolute top-1/2 right-1/4 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full blur-xl" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h1 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-balance text-gray-200 leading-tight"
                style={{ 
                  fontFamily: '"Audiowide", sans-serif', 
                  fontWeight: 400, 
                  fontStyle: 'normal',
                  letterSpacing: '0.05em'
                }}
              >
                <motion.div
                  drag
                  dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                  whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                  className="cursor-grab"
                >
                  <Shuffle text="PCB Design &" className="block" />
                </motion.div>
                <motion.div
                  drag
                  dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                  whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                  className="cursor-grab"
                >
                  <Shuffle text="Hardware Prototyping" className="block" delay={200} />
                </motion.div>
              </h1>
            </motion.div>
            <VariableProximity 
              text="Electronics engineer specializing in high-speed board design, embedded firmware, and rapid prototyping using KiCad, C++, and Python."
              className="text-base sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
            />
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/projects" className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-shadow">
                View Work
                <ArrowRight size={16} />
              </MagneticButton>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:shadow-lg transition-shadow">
                Get in Touch
              </MagneticButton>
            </Link>
          </motion.div>

          <motion.div 
            className="pt-6 sm:pt-8 flex flex-wrap gap-2 sm:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {["KiCad", "C++", "Python", "ARM Cortex-M", "High-Speed Design"].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-2.5 py-1 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-full hover:scale-105 transition-transform cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}