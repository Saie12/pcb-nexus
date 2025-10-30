import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ShuffleProps {
  text: string;
  className?: string;
  shuffleDirection?: "left" | "right";
  duration?: number;
  animationMode?: "sync" | "evenodd";
  shuffleTimes?: number;
  ease?: string;
  stagger?: number;
  threshold?: number;
  triggerOnce?: boolean;
  triggerOnHover?: boolean;
  respectReducedMotion?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export default function Shuffle({
  text,
  className = "",
  shuffleDirection = "left",
  duration = 0.5,
  animationMode = "sync",
  shuffleTimes = 3,
  ease = "power2.out",
  stagger = 0.05,
  threshold = 0.5,
  triggerOnce = false,
  triggerOnHover = false,
  respectReducedMotion = true,
  tag = "div",
}: ShuffleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (respectReducedMotion && prefersReducedMotion) {
      containerRef.current.classList.add("is-ready");
      return;
    }

    const chars = text.split("").map((char, index) => {
      const span = document.createElement("span");
      span.className = "shuffle-char";
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      return span;
    });

    containerRef.current.innerHTML = "";
    chars.forEach((char) => containerRef.current?.appendChild(char));

    const animateChars = () => {
      if (hasAnimated.current && triggerOnce) return;
      hasAnimated.current = true;

      const timeline = gsap.timeline();

      chars.forEach((char, index) => {
        const originalText = char.textContent;
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

        timeline.to(
          char,
          {
            duration: duration / shuffleTimes,
            repeat: shuffleTimes - 1,
            onRepeat: () => {
              char.textContent = characters[Math.floor(Math.random() * characters.length)];
            },
            onComplete: () => {
              char.textContent = originalText;
            },
          },
          animationMode === "sync" ? 0 : index * stagger
        );

        timeline.fromTo(
          char,
          { opacity: 0, x: shuffleDirection === "left" ? -20 : 20 },
          { opacity: 1, x: 0, duration: duration, ease: ease },
          animationMode === "sync" ? 0 : index * stagger
        );
      });

      containerRef.current?.classList.add("is-ready");
    };

    if (triggerOnHover) {
      containerRef.current.addEventListener("mouseenter", animateChars);
    } else {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `top ${threshold * 100}%`,
        once: triggerOnce,
        onEnter: animateChars,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text, shuffleDirection, duration, animationMode, shuffleTimes, ease, stagger, threshold, triggerOnce, triggerOnHover, respectReducedMotion]);

  const Component = React.createElement(
    tag,
    {
      ref: containerRef,
      className: `shuffle-parent ${className}`,
    },
    text
  );

  return Component;
}