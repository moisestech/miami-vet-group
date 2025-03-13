"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { FaPhone, FaFacebookMessenger, FaClock } from "react-icons/fa6";
import { useState, useEffect, RefObject } from "react";

export interface NavigationProps {
  aboutRef: RefObject<HTMLElement | null>;
  servicesRef: RefObject<HTMLElement | null>;
  teamRef: RefObject<HTMLElement | null>;
  contactRef: RefObject<HTMLElement | null>;
}

export function Navigation({ aboutRef, servicesRef, teamRef, contactRef }: NavigationProps) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribeScroll = scrollY.on("change", (latest) => {
      setHidden(latest < 50);
    });

    return () => {
      unsubscribeScroll();
    };
  }, [scrollY]);

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

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Left side - Logo and Name */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107088/miamivetgroup/LOGO-POST-MIAMI-VET-15_wimddm.png"
              alt="Miami Vet Group Logo"
              width={60}
              height={60}
              className="w-14 h-14 object-contain"
            />
            <span className="text-[#5e208e] font-semibold text-xl">
              Miami Vet Group
            </span>
          </motion.div>

          {/* Right side - Hours, Phone, and Message */}
          <div className="flex items-center gap-8">
            {/* Hours */}
            <div className="flex items-center gap-2 text-[#5e208e]">
              <FaClock className="w-4 h-4" />
              <span className="text-sm">
                Mon-Fri: 8:30AM - 6:00PM | Sat: 8:30AM - 2:00PM
              </span>
            </div>

            {/* Phone */}
            <motion.a 
              href="tel:786-713-0863"
              className="flex items-center gap-2 text-[#5e208e] hover:text-[#5e208e]/80"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone className="w-4 h-4" />
              <span className="font-medium">786-713-0863</span>
            </motion.a>

            {/* Facebook Messenger */}
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
        <div className="flex items-center justify-center gap-8 h-12 border-t border-[#5e208e]/10">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="text-[#5e208e] hover:text-[#5e208e]/80 transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection(servicesRef)}
            className="text-[#5e208e] hover:text-[#5e208e]/80 transition-colors font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection(teamRef)}
            className="text-[#5e208e] hover:text-[#5e208e]/80 transition-colors font-medium"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)}
            className="text-[#5e208e] hover:text-[#5e208e]/80 transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
} 