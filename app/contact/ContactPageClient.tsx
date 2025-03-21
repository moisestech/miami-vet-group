"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaFacebookMessenger, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MapSection } from "@/components/sections/MapSection";
import { FooterSection } from "@/components/sections/FooterSection";

const contactMethods = [
  {
    icon: FaPhone,
    title: "Call Us",
    content: "(786) 713-0863",
    link: "tel:+17867130863",
    bgColor: "#e83f85",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    content: "Direct Message",
    link: "https://wa.me/13054295509",
    bgColor: "#25D366",
  },
  {
    icon: FaFacebookMessenger,
    title: "Facebook Messenger",
    content: "Direct Message",
    link: "https://m.me/miamivetgroup",
    bgColor: "#0084FF",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    content: "info@miamivetgroup.com",
    link: "mailto:info@miamivetgroup.com",
    bgColor: "#ed7160",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    content: "12129 S. Dixie Hwy, Pinecrest, FL 33156",
    link: "https://maps.google.com/?q=12129+S.+Dixie+Hwy,+Pinecrest,+FL+33156",
    bgColor: "#5e208e",
  },
  {
    icon: FaClock,
    title: "Hours",
    content: "Mon-Fri: 8am-6pm, Sat: 9am-3pm",
    link: null,
    bgColor: "#fab51d",
  },
];

export function ContactPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner - Updated with working image */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107113/miamivetgroup/lindo-perro-chihuahua-bebiendo-pajita-scaled_anlv9h.jpg"
            alt="Veterinarian with pet"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5e208e]/50 to-[#e83f85]/50"></div>
        </div>
        
        <div className="container mx-auto relative z-10 h-full flex flex-col items-center justify-center">
          <motion.h1 
            className="text-5xl md:text-7xl text-white font-bold [font-family:'Caveat_Brush'] text-center drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white text-center max-w-2xl drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {`We're here to help your pet receive the best care possible`}
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-to-br from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="p-8 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 
                  hover:bg-white/50 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: method.bgColor }}
                  >
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#5e208e]">{method.title}</h3>
                </div>
                
                {method.link ? (
                  <Link 
                    href={method.link}
                    className="text-lg text-[#e83f85] hover:underline"
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.content}
                  </Link>
                ) : (
                  <p className="text-lg text-[#5e208e]/90">{method.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
} 