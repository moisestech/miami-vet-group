"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface PointerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Pointer({ children, className }: PointerProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.target as HTMLElement)?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`pointer-events-none fixed z-50 ${className || ""}`}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
} 