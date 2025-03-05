"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="p-6 rounded-lg text-center group cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
    >
      <div className="w-40 h-40 mx-auto mb-4 relative overflow-hidden rounded-full">
        <Image 
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div 
          className="absolute inset-0 bg-[#5e208e]/0 group-hover:bg-[#5e208e]/20 transition-colors duration-300"
          whileHover={{ backgroundColor: "rgba(94, 32, 142, 0.3)" }}
        />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#5e208e] transform transition-transform group-hover:scale-105">{name}</h3>
      <p className="text-gray-700 md:text-lg">{role}</p>
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        whileHover={{ opacity: 1, height: "auto" }}
        className="mt-4 overflow-hidden text-sm md:text-base text-gray-600"
      >
        Click to learn more about {name}
      </motion.div>
    </motion.div>
  );
}

export function MeetTheTeamSection() {
  const team = [
    {
      name: "Dr. Francelis Gonzalez",
      role: "Veterinarian",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107085/miamivetgroup/WhatsApp-Image-2023-02-18-at-12.30.22_ho9ar4.jpg"
    },
    {
      name: "Dr. Luzzelena Perez",
      role: "Veterinarian",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107092/miamivetgroup/WhatsApp-Image-2023-02-18-at-12.30.22-1_mmwlkd.jpg"
    },
    {
      name: "Kat",
      role: "Vet Tech",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107103/miamivetgroup/contact-us-miami-vet-e1712431137711_vv1fha.jpg"
    },
    {
      name: "Marcela",
      role: "Vet Tech",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107095/miamivetgroup/contact-us-miami-vet-1-e1712431328760_kfuwoi.jpg"
    }
  ];

  return (
    <section className="snap-start min-h-screen py-24 bg-[#d8a0d2bf] relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black mb-16"
        >
          Meet the Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamMember 
              key={member.name}
              {...member}
              delay={index * 0.1}
            />
          ))}
          
          {/* Assistant - Centered in the last row */}
          <TeamMember
            name="Luis Bertoncini"
            role="Assistant"
            image="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107086/miamivetgroup/miami-vet-group-family-1-e1712431478744_jt0qzp.jpg"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
} 