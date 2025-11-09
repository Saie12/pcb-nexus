import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#00ff88]/10 via-[#0088ff]/10 to-[#ff0080]/10 border border-[#00BFFF]/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-[#00ff88] via-[#00BFFF] to-[#ff0080] bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project idea or looking for a PCB design engineer? I'd love to
            hear from you and discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#00BFFF] text-white hover:bg-[#00BFFF]/90 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] hover:-translate-y-1 font-semibold transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF]/10 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:-translate-y-1 transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
