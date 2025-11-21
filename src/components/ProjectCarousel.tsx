import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  _id: string;
  title: string;
  summary: string;
  heroImage: string;
  slug: string;
  technologies: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const updateWidth = () => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
      };
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, [projects]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing"
        style={{ x }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -containerWidth, right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          className="flex gap-8 md:gap-16 pb-8"
        >
          {projects.map((project) => (
            <div key={project._id} className="min-w-[340px] w-[340px] md:min-w-[480px] md:w-[480px] flex-shrink-0">
              <ProjectCard
                title={project.title}
                summary={project.summary}
                image={project.heroImage}
                slug={project.slug}
                technologies={project.technologies}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Gradient overlays for visual depth */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}
