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
    bgColor: "#e83f85",
    hoverBgColor: "#d62872"
  },
  {
    name: "Messenger",
    icon: FaFacebookMessenger,
    href: "https://m.me/miamivetgroup",
    bgColor: "#ec5d8f",
    hoverBgColor: "#d94a7c"
  },
  {
    name: "Call Us",
    icon: FaPhone,
    href: "tel:+17867130863",
    bgColor: "#ed7160",
    hoverBgColor: "#da5e4d"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/miamivetgroup",
    bgColor: "#fab51d",
    hoverBgColor: "#e7a20a"
  }
];

export function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 1028px)");

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
          Miami Vet Group
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
          Miami Vet Group
        </span>
      </div>
      <span className="text-3xl lg:text-4xl text-[#5e208e] text-center font-bold mt-4 translate-y-4">
        General & Integrative Animal Hospital
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
        className="[font-family:'Caveat_Brush'] text-9xl md:text-9xl lg:text-9xl leading-none"
        speed={0.7}
      >
        Miami Vet Group
      </AuroraText>
      <span className="text-3xl lg:text-4xl text-[#5e208e] font-bold mt-4 -translate-y-10">
        General & Integrative Animal Hospital
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
        className="container mx-auto relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 py-8 lg:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo - Shows first on mobile */}
        <motion.div 
          className="order-1 lg:order-2 flex items-center justify-center lg:justify-end mb-6 lg:mb-0"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-48 h-48 lg:w-[500px] lg:h-[500px] p-2 lg:p-4"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107088/miamivetgroup/LOGO-POST-MIAMI-VET-15_wimddm.png"
              alt="Miami Vet Group Logo"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Title and CTA section */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center gap-6 lg:gap-10">
          {isMobile ? <MobileTitle /> : <DesktopTitle />}

          <div className="w-full">
            <motion.div
              className="p-6 lg:p-8 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-white text-xl lg:text-3xl font-bold tracking-wide text-left mb-6">
                Schedule Appointment
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                {contactOptions.map((option) => (
                  <div key={option.name} className="flex flex-col items-center gap-2">
                    <span className="text-sm lg:text-lg font-medium text-white text-center">
                      {option.name}
                    </span>
                    <motion.a
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full aspect-square flex items-center justify-center rounded-xl 
                        shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{
                        backgroundColor: option.bgColor,
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: option.hoverBgColor 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <option.icon 
                        className="w-12 h-12 lg:w-16 lg:h-16 text-white"
                      />
                    </motion.a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 