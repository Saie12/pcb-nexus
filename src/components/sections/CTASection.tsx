import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router";
import Shuffle from "@/components/Shuffle";
import MagneticButton from "@/components/animations/MagneticButton";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 sm:p-12 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              <Shuffle text="Let's Build Something Amazing" />
            </h2>
            <motion.p 
              className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Have a project idea or looking for a PCB design engineer? I'd love to
              hear from you and discuss how we can work together.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-shadow">
                  Get In Touch
                  <ArrowRight size={20} />
                </MagneticButton>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:shadow-lg transition-shadow">
                  <Download size={20} />
                  Download Resume
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </motion.section>
  );
}