import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useParams } from "react-router";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ProjectHeader from "@/components/project-detail/ProjectHeader";
import TechnologyTags from "@/components/project-detail/TechnologyTags";
import Model3DSection from "@/components/project-detail/Model3DSection";
import ConceptSection from "@/components/project-detail/ConceptSection";
import LayoutSection from "@/components/project-detail/LayoutSection";
import ChallengesSection from "@/components/project-detail/ChallengesSection";
import ProjectActions from "@/components/project-detail/ProjectActions";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProjectHeader 
              title={project.title}
              heroImage={project.heroImage}
              summary={project.summary}
            />

            <TechnologyTags technologies={project.technologies} />

            <Model3DSection slug={project.slug} />

            <div className="space-y-12 mb-8">
              <ConceptSection 
                concept={project.concept}
                schematicImage={project.schematicImage}
              />

              <LayoutSection 
                layoutStrategy={project.layoutStrategy}
                pcbLayoutImages={project.pcbLayoutImages}
                view3dImages={project.view3dImages}
              />

              <ChallengesSection challenges={project.challenges} />
            </div>

            <ProjectActions 
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}