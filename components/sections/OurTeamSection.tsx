"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { MaskedGradientBackground } from "../MaskedGradientBackground";
import { forwardRef } from 'react';
import Image from 'next/image'

const doctors = [
  {
    name: "Dr. Francelis Gonzalez",
    role: "Veterinarian",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107085/miamivetgroup/WhatsApp-Image-2023-02-18-at-12.30.22_ho9ar4.jpg",
    instagram: "dr.rod305"
  },
  {
    name: "Dr. Luzzelena Perez",
    role: "Veterinarian",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107092/miamivetgroup/WhatsApp-Image-2023-02-18-at-12.30.22-1_mmwlkd.jpg",
    instagram: "miamivetgroupdrluzz"
  }
];

const staff = [
  {
    name: "Kat",
    role: "Vet Tech",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107103/miamivetgroup/contact-us-miami-vet-e1712431137711_vv1fha.jpg"
  },
  {
    name: "Marcela",
    role: "Vet Tech",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107095/miamivetgroup/contact-us-miami-vet-1-e1712431328760_kfuwoi.jpg"
  },
  {
    name: "Luis",
    role: "Assistant",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107086/miamivetgroup/miami-vet-group-family-1-e1712431478744_jt0qzp.jpg"
  }
];

export const OurTeamSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="snap-start min-h-screen flex items-center bg-[#d8a0d2bf] py-16 relative overflow-hidden">
      <MaskedGradientBackground 
        maskPath="team"
        gradientColors={["#FFE6F7", "#FFC6F3", "#FFB1F5"]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-[#5e208e] mb-6">Our Team</h2>
          <p className="text-2xl text-[#5e208e]/80">
            Meet our dedicated veterinary professionals
          </p>
        </motion.div>

        {/* Doctors Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: idx * 0.2,
                bounce: 0.4
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={192}
                  height={192}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#5e208e] mb-2">{doctor.name}</h3>
              <p className="text-lg text-[#5e208e]/80 mb-4">{doctor.role}</p>
              <a
                href={`https://www.instagram.com/${doctor.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#5e208e] hover:text-[#5e208e]/80 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
                <span>@{doctor.instagram}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Staff Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {staff.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: idx * 0.2 + 0.4,
                bounce: 0.4
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[#5e208e] mb-2">{member.name}</h3>
              <p className="text-base text-[#5e208e]/80">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

OurTeamSection.displayName = 'OurTeamSection'; 