"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconType } from "react-icons";


interface ShareCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  icon: IconType;
  iconTitle: string;
  imageTopPosition?: number;
}

export function ShareCard({ image, title, description, link, icon: Icon, iconTitle, imageTopPosition = 0 }: ShareCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 
        hover:bg-white/50 transition-all duration-300 shadow-lg cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={{ objectPosition: `center ${imageTopPosition}px` }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="bg-[#5e208e] p-2 rounded-full">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-medium">{iconTitle}</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-xl font-bold text-[#5e208e] mb-2">{title}</h4>
        <p className="text-[#5e208e]/80">{description}</p>
      </div>
    </motion.a>
  );
} 