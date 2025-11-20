import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectActionsProps {
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectActions({ githubUrl, demoUrl }: ProjectActionsProps) {
  if (!githubUrl && !demoUrl) return null;

  return (
    <motion.div 
      className="flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {githubUrl && (
        <motion.a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-[#111111] border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all">
            <Github className="mr-2" size={20} />
            View on GitHub
          </Button>
        </motion.a>
      )}
      {demoUrl && (
        <motion.a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-[#0088ff] text-white hover:bg-[#0088ff]/90 shadow-[0_0_20px_rgba(0,136,255,0.3)] hover:shadow-[0_0_30px_rgba(0,136,255,0.5)] transition-all">
            <ExternalLink className="mr-2" size={20} />
            Live Demo
          </Button>
        </motion.a>
      )}
    </motion.div>
  );
}
