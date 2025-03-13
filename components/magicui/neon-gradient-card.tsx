"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps, type MotionProps } from "framer-motion";
import { useRef, useState } from "react";

interface NeonGradientCardProps {
  children: React.ReactNode;
  className?: string;
}

type NeonGradientCardMotionProps = Omit<HTMLMotionProps<"div">, keyof NeonGradientCardProps> & 
  Omit<MotionProps, keyof HTMLMotionProps<"div">>;

export function NeonGradientCard({
  children,
  className,
  ...props
}: NeonGradientCardProps & NeonGradientCardMotionProps) {
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
        "relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-800 to-slate-900",
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