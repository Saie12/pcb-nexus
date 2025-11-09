import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 sm:px-8 min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-balance">
              PCB Design &<br />Hardware Prototyping
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Electronics engineer specializing in high-speed board design, 
              embedded firmware, and rapid prototyping using KiCad, C++, and Python.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <Button size="lg" className="gap-2">
                View Work
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap gap-3">
            {["KiCad", "C++", "Python", "ARM Cortex-M", "High-Speed Design"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}