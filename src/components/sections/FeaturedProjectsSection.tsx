import ProjectCarousel from "@/components/ProjectCarousel";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import Shuffle from "@/components/Shuffle";

export default function FeaturedProjectsSection() {
  const featuredProjects = useQuery(api.projects.getFeatured);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            <Shuffle text="Featured Projects" />
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Explore my latest work in PCB design, embedded systems, and hardware
            prototyping
          </p>
        </div>

        {!featuredProjects ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-foreground" />
          </div>
        ) : featuredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No featured projects yet. Check back soon!</p>
          </div>
        ) : (
          <ProjectCarousel projects={featuredProjects} />
        )}
      </div>
    </section>
  );
}