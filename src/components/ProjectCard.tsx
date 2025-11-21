import { Card, CardContent } from "@/components/ui/card";
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
      <Card className="overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-colors">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{summary}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-primary text-sm font-medium">
            View Details
            <ArrowRight size={16} className="ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}