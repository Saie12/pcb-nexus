import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface ProjectCardProps {
  title: string;
  summary: string;
  image: string;
  slug: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  summary,
  image,
  slug,
  technologies,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-[#111111] border-[#00ff88]/20 hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all overflow-hidden group cursor-pointer">
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-xs rounded border border-[#00ff88]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center text-[#00ff88] text-sm font-medium group-hover:gap-2 transition-all">
              View Details
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
