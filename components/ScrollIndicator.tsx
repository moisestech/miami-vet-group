"use client";

import { motion } from "framer-motion";
import { useEffect,  useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface ScrollIndicatorProps {
  containerRef: React.RefObject<HTMLElement | HTMLDivElement>;
}

export function ScrollIndicator({ containerRef }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return (
    <motion.div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-sm font-medium text-[#5e208e]">Scroll for more services</span>
      <motion.div
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaChevronDown className="w-6 h-6 text-[#5e208e]" />
      </motion.div>
    </motion.div>
  );
} 