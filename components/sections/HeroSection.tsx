"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="snap-start h-screen relative flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-[#bc85ccd9]"></div>
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
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            Miami Vet Group
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl text-white mb-8">
            Integrative and General Veterinary hospital, Because we all deserve a second chance.
          </h2>
          <button className="bg-white text-[#5e208e] px-6 py-3 rounded-md font-semibold w-fit hover:bg-opacity-90 transition">
            Schedule Appointment
          </button>
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
              src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107109/miamivetgroup/logo-miamivet-slogan2_Mesa-de-trabajo-1_oahwel.png"
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