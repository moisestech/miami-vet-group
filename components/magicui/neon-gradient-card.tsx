"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function NeonGradientCard({
  children,
  className,
  ...props
}: NeonGradientCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex overflow-hidden rounded-xl border border-purple-200/50 bg-gradient-to-b from-white to-purple-50/50 p-8 shadow-lg",
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(216,160,210,0.15), transparent 40%)`,
          opacity,
        }}
      />
      {children}
    </motion.div>
  );
} 