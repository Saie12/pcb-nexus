import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const lastPosition = useRef({ x: 0, y: 0, time: Date.now() });

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const now = Date.now();
      const dt = (now - lastPosition.current.time) / 1000;
      
      if (dt > 0) {
        const dx = e.clientX - lastPosition.current.x;
        const dy = e.clientY - lastPosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = distance / dt;
        
        setVelocity(Math.min(speed / 10, 10));
      }
      
      lastPosition.current = { x: e.clientX, y: e.clientY, time: now };
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Generate lightning bolts based on velocity
  const generateLightningBolts = () => {
    const boltCount = Math.floor(velocity * 2);
    return Array.from({ length: boltCount }, (_, i) => {
      const angle = (i / boltCount) * Math.PI * 2;
      const length = 20 + velocity * 5;
      return {
        id: i,
        angle,
        length,
        opacity: 0.3 + velocity * 0.07,
      };
    });
  };

  const lightningBolts = generateLightningBolts();

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.8 : isClicking ? 0.8 : 1 + velocity * 0.1,
          rotate: isHovering ? 90 : velocity * 10,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#00ff88] bg-[#00ff88]/20" />
      </motion.div>

      {/* Lightning bolts */}
      {lightningBolts.map((bolt) => (
        <motion.div
          key={bolt.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: 2,
            height: bolt.length,
            background: `linear-gradient(180deg, #00BFFF ${0}%, transparent ${100}%)`,
            transformOrigin: "top center",
            opacity: bolt.opacity,
          }}
          animate={{
            rotate: (bolt.angle * 180) / Math.PI,
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Electric glow effect */}
      {velocity > 2 && (
        <motion.div
          className="fixed pointer-events-none z-[9997] rounded-full"
          style={{
            left: mousePosition.x - 30,
            top: mousePosition.y - 30,
            width: 60,
            height: 60,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0, 191, 255, ${velocity * 0.1}) 0%, transparent 70%)`,
              boxShadow: `0 0 ${velocity * 5}px rgba(0, 191, 255, ${velocity * 0.15})`,
            }}
          />
        </motion.div>
      )}

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.5 : 1 + velocity * 0.05,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.2,
        }}
      >
        <div 
          className="w-full h-full rounded-full bg-[#00BFFF]"
          style={{
            boxShadow: velocity > 1 ? `0 0 ${velocity * 3}px #00BFFF` : 'none',
          }}
        />
      </motion.div>
    </>
  );
}