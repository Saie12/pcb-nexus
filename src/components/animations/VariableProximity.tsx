import { useRef, useEffect, useState } from "react";

interface VariableProximityProps {
  label: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  className?: string;
}

export default function VariableProximity({
  label,
  fromFontVariationSettings = "'wght' 400",
  toFontVariationSettings = "'wght' 900",
  radius = 100,
  falloff = "linear",
  className = "",
}: VariableProximityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const calculateProximity = (letterX: number, letterY: number) => {
    if (!isHovering) return 0;

    const distance = Math.sqrt(
      Math.pow(mousePosition.x - letterX, 2) + 
      Math.pow(mousePosition.y - letterY, 2)
    );

    if (distance > radius) return 0;

    const normalizedDistance = distance / radius;

    switch (falloff) {
      case "linear":
        return 1 - normalizedDistance;
      case "exponential":
        return Math.pow(1 - normalizedDistance, 2);
      case "gaussian":
        return Math.exp(-Math.pow(normalizedDistance * 2, 2));
      default:
        return 1 - normalizedDistance;
    }
  };

  const interpolateFontSettings = (proximity: number) => {
    const fromMatch = fromFontVariationSettings.match(/'wght'\s*(\d+)/);
    const toMatch = toFontVariationSettings.match(/'wght'\s*(\d+)/);

    const fromWeight = fromMatch ? parseInt(fromMatch[1]) : 400;
    const toWeight = toMatch ? parseInt(toMatch[1]) : 900;

    const weight = fromWeight + (toWeight - fromWeight) * proximity;

    return `'wght' ${Math.round(weight)}`;
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="inline-flex">
        {label.split("").map((char, index) => {
          const letterRef = useRef<HTMLSpanElement>(null);
          const [letterPosition, setLetterPosition] = useState({ x: 0, y: 0 });

          useEffect(() => {
            if (letterRef.current && containerRef.current) {
              const letterRect = letterRef.current.getBoundingClientRect();
              const containerRect = containerRef.current.getBoundingClientRect();
              
              setLetterPosition({
                x: letterRect.left - containerRect.left + letterRect.width / 2,
                y: letterRect.top - containerRect.top + letterRect.height / 2,
              });
            }
          }, []);

          const proximity = calculateProximity(letterPosition.x, letterPosition.y);
          const fontVariationSettings = interpolateFontSettings(proximity);

          return (
            <span
              key={index}
              ref={letterRef}
              style={{
                fontVariationSettings,
                transition: "font-variation-settings 0.1s ease-out",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    </div>
  );
}
