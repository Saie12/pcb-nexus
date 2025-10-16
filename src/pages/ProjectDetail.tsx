import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Loader2 } from "lucide-react";
import { Link, useParams } from "react-router";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const projects = useQuery(api.projects.list);
  
  const project = projects?.find((p) => p.slug === slug);

  if (!projects) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#00ff88]" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button className="bg-[#00ff88] text-[#0a0a0a] hover:bg-[#00ff88]/90">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/projects">
            <Button
              variant="ghost"
              className="mb-8 text-gray-400 hover:text-[#00ff88]"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <div className="relative h-96 rounded-2xl overflow-hidden mb-8 border border-[#00ff88]/20">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl text-gray-300 mb-8">{project.summary}</p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">
                Key Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-[#00ff88]/10 text-[#00ff88] text-sm rounded-lg border border-[#00ff88]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-[#00ff88]">1.</span> Concept & Schematics
                </h2>
                <p className="text-gray-400 mb-4">{project.concept}</p>
                {project.schematicImage && (
                  <div className="rounded-xl overflow-hidden border border-[#00ff88]/20">
                    <img
                      src={project.schematicImage}
                      alt="Schematic"
                      className="w-full"
                    />
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-[#0088ff]">2.</span> PCB Layout Strategy
                </h2>
                <p className="text-gray-400 mb-4">{project.layoutStrategy}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.layoutImages.map((img, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden border border-[#0088ff]/20"
                    >
                      <img src={img} alt={`Layout ${index + 1}`} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-[#ff0080]">3.</span> Challenges & Solutions
                </h2>
                <p className="text-gray-400">{project.challenges}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#111111] border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                    <Github className="mr-2" size={20} />
                    View on GitHub
                  </Button>
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#0088ff] text-white hover:bg-[#0088ff]/90 shadow-[0_0_20px_rgba(0,136,255,0.3)]">
                    <ExternalLink className="mr-2" size={20} />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
