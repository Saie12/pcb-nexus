import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

export default function FeaturedProjectsSection() {
  const featuredProjects = useQuery(api.projects.getFeatured);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Featured <span className="text-[#00BFFF]">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore my latest work in PCB design, embedded systems, and hardware
          prototyping
        </p>

        {!featuredProjects ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#00ff88]" />
          </div>
        ) : featuredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">No featured projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <ProjectCard
                  title={project.title}
                  summary={project.summary}
                  image={project.heroImage}
                  slug={project.slug}
                  technologies={project.technologies}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
