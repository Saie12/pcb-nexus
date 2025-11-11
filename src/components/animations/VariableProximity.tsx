import { useEffect, useRef, useState } from "react";

interface VariableProximityProps {
  text: string;
  className?: string;
}

export default function VariableProximity({ text, className = "" }: VariableProximityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateFontWeight = (charIndex: number, totalChars: number) => {
    if (!containerRef.current) return 400;

    const charWidth = containerRef.current.offsetWidth / totalChars;
    const charX = charIndex * charWidth + charWidth / 2;
    const charY = containerRef.current.offsetHeight / 2;

    const distance = Math.sqrt(
      Math.pow(mousePosition.x - charX, 2) + Math.pow(mousePosition.y - charY, 2)
    );

    const maxDistance = 200;
    const minWeight = 300;
    const maxWeight = 700;

    if (distance > maxDistance) return minWeight;

    const weight = maxWeight - ((distance / maxDistance) * (maxWeight - minWeight));
    return Math.round(weight / 100) * 100;
  };

  return (
    <div ref={containerRef} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            fontWeight: calculateFontWeight(index, text.length),
            transition: "font-weight 0.1s ease-out",
            display: char === " " ? "inline" : "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
