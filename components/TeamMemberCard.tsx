"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { TeamMember } from "@/data/team";

export function TeamMemberCard({ name, role, image, instagram }: TeamMember) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.8,
        bounce: 0.4
      }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 text-center"
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 md:mb-4">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="rounded-full object-cover w-full h-full"
          style={{ objectPosition: '50% calc(50% + 5px)' }}
        />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#5e208e] mb-1">{name}</h3>
      <p className="text-sm md:text-base text-[#5e208e]/80 mb-2">{role}</p>
      {instagram && (
        <motion.a
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full 
            backdrop-blur-md hover:bg-white/40 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram className="w-4 h-4 text-[#5e208e]" />
          <span className="text-sm text-[#5e208e] font-medium">@{instagram}</span>
        </motion.a>
      )}
    </motion.div>
  );
} 