"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { FaPhone, FaFacebookMessenger } from "react-icons/fa6";
import { useState, useEffect, RefObject } from "react";

interface NavigationProps {
  containerRef: RefObject<HTMLDivElement>;
}

export function Navigation({ containerRef }: NavigationProps) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      console.log('Container scroll position:', scrollPosition);

      if (scrollPosition < 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    // Check initial position
    handleScroll();

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  const variants = {
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    hidden: { 
      y: "-100%",
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    }
  };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      initial="hidden"
      className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Left side - Logo and Name */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107109/miamivetgroup/logo-miamivet-slogan2_Mesa-de-trabajo-1_oahwel.png"
              alt="Miami Vet Group Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-[#5e208e] font-semibold">
              Miami Vet Group
            </span>
          </motion.div>

          {/* Right side - Contact Info */}
          <div className="flex items-center gap-4">
            <motion.a 
              href="tel:786-713-0863"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-600 font-medium">Contact</span>
              <div className="flex items-center gap-2 text-[#5e208e]">
                <FaPhone className="w-4 h-4" />
                <span className="font-semibold">
                  786-713-0863
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://m.facebook.com/msg/203658246168278/?show_interstitial=0&mdotme_uri=https%3A%2F%2Fm.me%2F203658246168278%3Fsource%3Dqr_link_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#5e208e] hover:text-[#5e208e]/80 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FaFacebookMessenger className="w-5 h-5" />
              <span className="font-medium">Send Message</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 