import { motion } from "framer-motion";

interface TechnologyTagsProps {
  technologies: string[];
}

export default function TechnologyTags({ technologies }: TechnologyTagsProps) {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-white mb-3">
        Key Technologies Used
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            className="px-3 py-1.5 bg-[#00ff88]/10 text-[#00ff88] text-sm rounded-lg border border-[#00ff88]/20 hover:bg-[#00ff88]/20 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
