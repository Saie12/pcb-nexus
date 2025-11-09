import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function RevealOnScroll({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: RevealOnScrollProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: 0.95,
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
