"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaFacebookMessenger, FaPhone, FaInstagram } from "react-icons/fa";
import { AuroraText } from "../magicui/aurora-text";

const contactOptions = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/13055987387",
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
    href: "tel:+13055987387",
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
  return (
    <section className="snap-start min-h-screen flex items-center justify-center relative">
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
        className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex flex-col justify-center"
        >
          <h1 className="flex flex-col items-start mb-4">
            <AuroraText
              colors={[
                "#ff2e7e",  // Bright pink
                "#ff5fa0",  // Hot pink
                "#f39000",  // Orange
                "#fcbc00",  // Golden yellow
                "#ffff00"   // Bright yellow
              ]}
              className="[font-family:'Caveat_Brush'] text-7xl md:text-8xl lg:text-9xl leading-none"
              speed={0.7}
            >
              Miami Vet
            </AuroraText>
            <span className="text-xl md:text-2xl lg:text-4xl font-bold text-[#5e208e] mt-0 -translate-y-8">
              GROUP
            </span>
          </h1>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-2xl py-3 font-bold tracking-wide">
              Schedule Appointment
            </h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl 
                    bg-white/20 backdrop-blur-md 
                    hover:bg-white/30 transition-all duration-300 
                    border border-white/30
                    shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <option.icon 
                    className="w-12 h-12 md:w-16 md:h-16 transition-colors duration-300"
                    style={{ 
                      color: option.color,
                    }}
                  />
                  <span 
                    className="text-lg md:text-xl font-medium transition-colors duration-300 text-white"
                  >
                    {option.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          className="flex justify-center items-center"
        >
          <div className="p-4 rounded-lg w-64 h-64 md:w-80 md:h-80">
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