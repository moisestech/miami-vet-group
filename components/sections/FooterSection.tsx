"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { ShareCard } from "../ShareCard";
import { MaskedGradientBackground } from "../MaskedGradientBackground";

export function FooterSection() {
  return (
    <section className="snap-start min-h-screen py-16 bg-[#d8a0d2bf] relative overflow-hidden">
      <MaskedGradientBackground 
        maskPath="dog"
        gradientColors={["#D8A0D2", "#BC85CC", "#5E208E"]}
        icon={<GiSittingDog className="w-12 h-12 text-[#5e208e]" />}
      />

      {/* Content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Visit Us Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl md:text-3xl font-bold uppercase mb-4 text-[#5e208e]">Visit Us</h3>
            <motion.a 
              href="https://maps.google.com/?q=12521 S Dixie Hwy, Pinecrest, FL 33156"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 text-gray-700 group"
              whileHover={{ x: 5 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} className="text-[#5e208e]">
                <FaMapMarkerAlt className="w-6 h-6 md:w-8 md:h-8" />
              </motion.div>
              <span className="text-lg md:text-xl hover:text-[#5e208e] transition-colors">
                12521 S Dixie Hwy, Pinecrest, FL 33156
              </span>
            </motion.a>
          </motion.div>
          
          {/* Contact Us Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-6"
          >
            <h3 className="text-xl md:text-3xl font-bold uppercase mb-4 text-[#5e208e]">Contact Us</h3>
            <motion.a 
              href="tel:786-713-0863"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-700 group"
              whileHover={{ x: 5 }}
            >
              <FaPhone className="w-6 h-6 md:w-8 md:h-8 text-[#5e208e] group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl group-hover:text-[#5e208e] transition-colors">
                786-713-0863
              </span>
            </motion.a>
            <motion.a 
              href="mailto:miamivetgroup@gmail.com"
              className="flex items-center justify-center md:justify-start gap-3 group"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="w-6 h-6 md:w-8 md:h-8 text-[#5e208e] group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl text-[#5e208e] group-hover:opacity-80 transition-opacity">
                miamivetgroup@gmail.com
              </span>
            </motion.a>
          </motion.div>
          
          {/* Follow Us Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <ShareCard 
              image="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107130/miamivetgroup/Lux-Conteudo-quadrado-4_vcq0vx.png"
              title="Miami Vet Group"
              description="Veterinary Clinic in Miami �� 🏥"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 