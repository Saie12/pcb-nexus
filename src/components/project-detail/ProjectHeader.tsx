import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

interface ProjectHeaderProps {
  title: string;
  heroImage: string;
  summary: string;
}

export default function ProjectHeader({ title, heroImage, summary }: ProjectHeaderProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/projects">
          <Button
            variant="ghost"
            className="mb-8 text-gray-400 hover:text-[#00ff88] hover:bg-[#00ff88]/10 transition-all"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Button>
        </Link>
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h1>

      <motion.div 
        className="relative h-96 rounded-2xl overflow-hidden mb-8 border border-[#00ff88]/20 group"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
      </motion.div>

      <motion.p 
        className="text-xl text-gray-300 mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {summary}
      </motion.p>
    </>
  );
}
