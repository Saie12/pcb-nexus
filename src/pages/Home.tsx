import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Zap } from "lucide-react";
import { Link } from "react-router";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

export default function Home() {
  const featuredProjects = useQuery(api.projects.getFeatured);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#00ff88] via-[#0088ff] to-[#ff0080] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(0,255,136,0.4)] mx-auto">
                <Cpu size={40} className="text-[#0a0a0a]" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Expert PCB Design and
              <br />
              <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0080] bg-clip-text text-transparent">
                Hardware Prototyping
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              A detail-oriented electronics engineer specializing in high-speed
              board design, embedded firmware, and rapid prototyping using KiCad,
              C++, and Python.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#00ff88] text-[#0a0a0a] hover:bg-[#00ff88]/90 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] font-semibold"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0088ff] text-[#0088ff] hover:bg-[#0088ff]/10 hover:shadow-[0_0_20px_rgba(0,136,255,0.3)]"
                >
                  View My Work
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Skills Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto"
          >
            {[
              { name: "KiCad", icon: Zap },
              { name: "C++", icon: Code },
              { name: "Python", icon: Code },
              { name: "Git", icon: Code },
              { name: "PIC", icon: Cpu },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-[#111111] border border-[#00ff88]/20 rounded-xl p-6 text-center hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all group"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-[#00ff88] group-hover:scale-110 transition-transform" />
                <p className="text-white font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Featured <span className="text-[#00ff88]">Projects</span>
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
