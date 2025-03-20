"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const socialPlatforms = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/miamivetgroup",
    bgColor: "#e83f85",
    hoverBgColor: "#d62872",
    description: "Follow our daily stories and updates"
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://facebook.com/miamivetgroup",
    bgColor: "#ec5d8f",
    hoverBgColor: "#d94a7c",
    description: "Join our pet parent community"
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://tiktok.com/@miamivetgroup",
    bgColor: "#ed7160",
    hoverBgColor: "#da5e4d",
    description: "Watch our fun pet videos"
  }
];

export function SocialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Connect With Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="p-8 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 
                hover:bg-white/50 transition-all duration-300 shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#5e208e] mb-4">{platform.name}</h3>
              <p className="text-[#5e208e]/80 text-center mb-6">{platform.description}</p>
              <motion.a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 flex items-center justify-center rounded-xl 
                  shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  backgroundColor: platform.bgColor,
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: platform.hoverBgColor 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <platform.icon className="w-10 h-10 text-white" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 