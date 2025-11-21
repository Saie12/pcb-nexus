import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  // Create an infinite loop by tripling the projects array
  const infiniteProjects = [...projects, ...projects, ...projects];
  const cardWidth = typeof window !== 'undefined' && window.innerWidth >= 768 ? 480 + 64 : 340 + 32; // card width + gap

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

  // Set initial position to middle set of projects
  useEffect(() => {
    const initialOffset = -projects.length * cardWidth;
    x.set(initialOffset);
  }, [projects.length, cardWidth]);

  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    const offset = -(projects.length + newIndex) * cardWidth;
    x.set(offset);

    // Reset to end of middle set when reaching start
    if (newIndex < 0) {
      setTimeout(() => {
        setCurrentIndex(projects.length - 1);
        x.set(-(projects.length + projects.length - 1) * cardWidth);
      }, 300);
    }
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    const offset = -(projects.length + newIndex) * cardWidth;
    x.set(offset);

    // Reset to start of middle set when reaching end
    if (newIndex >= projects.length) {
      setTimeout(() => {
        setCurrentIndex(0);
        x.set(-projects.length * cardWidth);
      }, 300);
    }
  };

  return (
    <div className="relative overflow-hidden max-w-full md:max-w-[1040px] mx-auto">
      {/* Navigation Buttons */}
      <motion.button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 hover:bg-[#00ff88]/20 hover:border-[#00ff88]/50 transition-all flex items-center justify-center backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6 text-[#00ff88]" />
      </motion.button>

      <motion.button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 hover:bg-[#00ff88]/20 hover:border-[#00ff88]/50 transition-all flex items-center justify-center backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6 text-[#00ff88]" />
      </motion.button>

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
          animate={{ x: -(projects.length + currentIndex) * cardWidth }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {infiniteProjects.map((project, index) => (
            <div key={`${project._id}-${index}`} className="min-w-[340px] w-[340px] md:min-w-[480px] md:w-[480px] flex-shrink-0">
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