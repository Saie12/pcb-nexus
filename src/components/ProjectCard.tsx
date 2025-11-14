import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      {/* SVG Filter for Liquid Glass Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-glass-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.015"
              numOctaves="3"
              seed="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacement"
            />
            <feGaussianBlur in="displacement" stdDeviation="1.2" result="blur" />
            <feSpecularLighting
              in="blur"
              surfaceScale="3"
              specularConstant="0.8"
              specularExponent="20"
              lightingColor="#ffffff"
              result="specular"
            >
              <fePointLight x="100" y="100" z="200" />
            </feSpecularLighting>
            <feComposite
              in="specular"
              in2="SourceAlpha"
              operator="in"
              result="specularComposite"
            />
            <feComposite
              in="SourceGraphic"
              in2="specularComposite"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
            />
          </filter>
        </defs>
      </svg>

      <Link to={`/projects/${slug}`}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          whileHover={{ 
            z: 50,
            transition: { duration: 0.3 }
          }}
        >
          <Card 
            className="relative overflow-hidden group cursor-pointer border-0"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Liquid Glass Distortion Layer */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                filter: 'url(#liquid-glass-filter)',
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                transform: 'translateZ(30px)',
              }}
            />
            
            {/* Specular Highlight Layer */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.25) 0%, transparent 50%)',
                transform: 'translateZ(40px)',
                mixBlendMode: 'overlay',
              }}
            />

            {/* Frosted Edge Glow */}
            <div 
              className="absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: 'inherit',
              }}
            />
            
            {/* Animated Liquid Shine */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.3) 50%, transparent 75%)',
                transform: 'translateZ(50px) translateX(-100%)',
              }}
              animate={{
                translateX: ['100%', '-100%'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            />
            
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                style={{
                  transform: "translateZ(30px)",
                }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
                  backdropFilter: 'blur(2px)',
                }}
              />
              
              {/* Floating particles effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                      filter: 'blur(1px)',
                    }}
                    animate={{
                      y: [-20, -60],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
            
            <CardContent 
              className="p-6 relative"
              style={{ 
                transform: "translateZ(40px)",
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <motion.h3 
                className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                style={{ transform: "translateZ(50px)" }}
              >
                {title}
              </motion.h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{summary}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.slice(0, 3).map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs rounded"
                    style={{ 
                      transform: `translateZ(${60 + index * 5}px)`,
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      background: 'rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <motion.div 
                className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all"
                style={{ transform: "translateZ(70px)" }}
              >
                View Details
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop" 
                  }}
                >
                  <ArrowRight size={16} className="ml-1" />
                </motion.div>
              </motion.div>
            </CardContent>

            {/* Pulsating Glow Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-xl"
              style={{
                background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Card>
        </motion.div>
      </Link>
    </>
  );
}