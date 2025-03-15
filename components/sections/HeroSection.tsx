"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaFacebookMessenger, FaPhone, FaInstagram } from "react-icons/fa";
import { AuroraText } from "../magicui/aurora-text";
import { sectionClass } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const contactOptions = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/13054295509",
    color: "#e83f85",
    hoverColor: "#d62872"
  },
  {
    name: "Messenger",
    icon: FaFacebookMessenger,
    href: "https://m.me/miamivetgroup",
    color: "#ec5d8f",
    hoverColor: "#d94a7c"
  },
  {
    name: "Call Us",
    icon: FaPhone,
    href: "tel:+17867130863",
    color: "#ed7160",
    hoverColor: "#da5e4d"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/miamivetgroup",
    color: "#fab51d",
    hoverColor: "#e7a20a"
  }
];

export function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const MobileTitle = () => (
    <h1 className="flex flex-col items-center md:items-start">
      <div className="relative">
        {/* Background layer for shadow effect */}
        <span 
          className="absolute inset-0 [font-family:'Caveat_Brush'] text-6xl md:text-7xl lg:text-8xl leading-none"
          style={{
            color: 'rgba(94, 32, 142, 0.3)',
            transform: 'translate(2px, 2px)',
          }}
        >
          Miami Vet
        </span>
        
        {/* Main text layer with gradient image background */}
        <span 
          className="relative [font-family:'Caveat_Brush'] text-6xl md:text-7xl lg:text-8xl leading-none"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dck5rzi4h/image/upload/v1742054482/miamivetgroup/warm-gradient-miamivetgroup_ibsnax.jpg)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          Miami Vet
        </span>
      </div>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#5e208e] mt-2">
        GROUP
      </span>
    </h1>
  );

  const DesktopTitle = () => (
    <h1 className="flex flex-col items-center md:items-start">
      <AuroraText
        colors={[
          "#ff2e7e",  // Bright pink
          "#ff5fa0",  // Hot pink
          "#f39000",  // Orange
          "#fcbc00",  // Golden yellow
          "#ffff00"   // Bright yellow
        ]}
        className="[font-family:'Caveat_Brush'] text-6xl md:text-7xl lg:text-8xl leading-none"
        speed={0.7}
      >
        Miami Vet
      </AuroraText>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#5e208e] mt-0 -translate-y-4">
        GROUP
      </span>
    </h1>
  );

  return (
    <section className={sectionClass}>
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image 
          src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107113/miamivetgroup/lindo-perro-chihuahua-bebiendo-pajita-scaled_anlv9h.jpg"
          alt="Chihuahua dog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#bc85cc99]"></div>
      </motion.div>
      
      <motion.div 
        className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center md:items-start justify-center gap-4 md:gap-8">
          {isMobile ? <MobileTitle /> : <DesktopTitle />}

          <div className="w-full max-w-xl">
            <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide text-center md:text-left mb-18 md:mb-4">
              Schedule Appointment
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {contactOptions.map((option) => (
                <motion.a
                  key={option.name}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square group flex flex-col items-center justify-center gap-1 md:gap-2 p-2 md:p-4 rounded-xl 
                    bg-white/20 backdrop-blur-md 
                    hover:bg-white/30 transition-all duration-300 
                    border border-white/30
                    shadow-lg hover:shadow-xl
                    w-[calc(60%-0.5rem)] md:w-[calc(85%-2rem)] mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <option.icon 
                    className="w-12 h-12 md:w-14 md:h-14 transition-colors duration-300"
                    style={{ color: option.color }}
                  />
                  <span className="text-xs md:text-base font-medium text-white text-center">
                    {option.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="flex items-center justify-center md:justify-end mt-0 md:mt-4"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          initial="hidden"
          animate="visible"
        >
          <div className="w-32 h-32 md:w-56 md:h-56 p-2 md:p-4">
            <Image 
              src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107088/miamivetgroup/LOGO-POST-MIAMI-VET-15_wimddm.png"
              alt="Miami Vet Group Logo"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 