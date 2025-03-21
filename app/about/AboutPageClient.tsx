"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FooterSection } from "@/components/sections/FooterSection";
import { allTeamMembers, companyValues } from "@/data/team";

export function AboutPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107113/miamivetgroup/lindo-perro-chihuahua-bebiendo-pajita-scaled_anlv9h.jpg"
            alt="Dog at veterinary checkup"
            fill
            className="object-cover"
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
            About Us
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white text-center max-w-2xl drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Integrative veterinary care with compassion and expertise
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107088/miamivetgroup/LOGO-POST-MIAMI-VET-15_wimddm.png"
                  alt="Miami Vet Group Logo"
                  fill
                  className="object-contain bg-white/70"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg text-[#5e208e]/90">
                Miami Vet Group was founded in 2008 with a vision to provide a different kind of veterinary care—one that bridges conventional Western medicine with complementary and alternative therapies.
              </p>
              <p className="text-lg text-[#5e208e]/90">
                Our founding veterinarians recognized that pets, like humans, benefit from a whole-body approach to health. They envisioned a practice where acupuncture could be offered alongside antibiotics, and where nutrition and lifestyle were considered as important as medication.
              </p>
              <p className="text-lg text-[#5e208e]/90">
                Today, we continue that mission, providing integrative care that treats not just symptoms but the whole animal, helping them live longer, healthier, and happier lives.
              </p>
              <Link 
                href="/mission" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#e83f85] hover:bg-[#d62872] text-white font-medium rounded-lg transition-colors duration-300 shadow-md max-w-fit"
              >
                Read Our Mission
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-8 rounded-xl bg-gradient-to-br from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5] shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#5e208e] flex items-center justify-center mr-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#5e208e]">{value.title}</h3>
                </div>
                <p className="text-lg text-[#5e208e]/90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Updated with portrait-oriented cards */}
      <section className="py-16 bg-gradient-to-br from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTeamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white/40 backdrop-blur-md border border-white/60 rounded-xl overflow-hidden shadow-lg flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#5e208e] mb-1">{member.name}</h3>
                  <p className="text-lg font-medium text-[#e83f85] mb-4">{member.role}</p>
                  <p className="text-[#5e208e]/90 mb-4 flex-grow">{member.bio}</p>
                  
                  {member.instagram && (
                    <a 
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#e83f85] hover:underline mt-auto"
                    >
                      <FaInstagram className="mr-2" />
                      @{member.instagram}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
} 