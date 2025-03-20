"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { useState, RefObject } from "react";
import type { NavigationProps } from "./Navigation";

interface NavMobileProps extends NavigationProps {
  variants: Variants;
  hidden: boolean;
}

export function NavMobile({ aboutRef, servicesRef, teamRef, contactRef, variants, hidden }: NavMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-md shadow-lg md:hidden"
      >
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <motion.div className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107088/miamivetgroup/LOGO-POST-MIAMI-VET-15_wimddm.png"
                alt="Miami Vet Group Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-[#5e208e] font-semibold text-lg">
                Miami Vet Group
              </span>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#5e208e] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-sm pt-20 md:hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-[#5e208e] text-2xl font-medium py-3 border-b border-[#5e208e]/10"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="text-[#5e208e] text-2xl font-medium py-3 border-b border-[#5e208e]/10"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection(teamRef)}
                  className="text-[#5e208e] text-2xl font-medium py-3 border-b border-[#5e208e]/10"
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-[#5e208e] text-2xl font-medium py-3 border-b border-[#5e208e]/10"
                >
                  Contact
                </button>

                {/* Quick Actions */}
                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href="tel:786-713-0863"
                    className="flex items-center justify-center gap-3 bg-[#5e208e] text-white py-4 rounded-lg"
                  >
                    <FaPhone />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 