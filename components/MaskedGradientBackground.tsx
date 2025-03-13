"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MaskedGradientBackgroundProps {
  maskPath: "heart" | "paw" | "team" | "stars" | "cat" | "services" | "dog";
  gradientColors: string[];
  icon?: ReactNode;
}

export function MaskedGradientBackground({
  maskPath,
  gradientColors = ["#FF8FD9", "#CC4FF7", "#7C4FE4"]
}: MaskedGradientBackgroundProps) {

  return (
    <>
      {/* Animated Gradient Background with Mask */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full relative"
          style={{
            maskImage: `url(/${maskPath}-mask.svg)`,
            WebkitMaskImage: `url(/${maskPath}-mask.svg)`,
            maskSize: '48%',
            WebkitMaskSize: '48%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: '50% 45%',
            WebkitMaskPosition: '50% 45%',
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
                `linear-gradient(180deg, ${gradientColors[2]}, ${gradientColors[0]}, ${gradientColors[1]})`,
                `linear-gradient(225deg, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[0]})`,
                `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>
    </>
  );
} 