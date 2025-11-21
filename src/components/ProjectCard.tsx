import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
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
      <CardContainer className="inter-var">
        <CardBody className="bg-[#111111] relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#00ff88]/[0.1] border-[#00ff88]/20 hover:border-[#00ff88]/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-colors">
          <CardItem translateZ="50" className="text-xl font-bold text-white mb-2">
            {title}
          </CardItem>
          
          <CardItem
            as="p"
            translateZ="60"
            className="text-gray-300 text-sm mb-4 line-clamp-2"
          >
            {summary}
          </CardItem>
          
          <CardItem translateZ="100" className="w-full mb-4">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </CardItem>
          
          <CardItem translateZ="50" className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30"
              >
                {tech}
              </span>
            ))}
          </CardItem>
          
          <CardItem
            translateZ={20}
            as="div"
            className="flex items-center text-[#00ff88] text-sm font-medium"
          >
            View Details
            <ArrowRight size={16} className="ml-1" />
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
}