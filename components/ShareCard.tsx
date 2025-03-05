"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaShare } from "react-icons/fa";

interface ShareCardProps {
  image: string;
  title: string;
  description: string;
}

export function ShareCard({ image, title, description }: ShareCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 w-full">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <motion.div 
          className="absolute top-2 right-2 z-10 text-white bg-black/50 p-2 rounded-full cursor-pointer"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaShare className="h-5 w-5" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <motion.div 
            className="flex items-center text-white cursor-pointer"
            whileHover={{ x: 5 }}
          >
            <FaInstagram className="h-5 w-5 mr-2" />
            <span>Instagram</span>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="p-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h4 className="font-bold text-black text-lg">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
} 