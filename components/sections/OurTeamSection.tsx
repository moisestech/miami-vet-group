"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { forwardRef } from "react";
import { doctors, staff } from "@/data/team";

export const OurTeamSection = forwardRef<HTMLElement>(function OurTeamSection(_, ref) {
  return (
    <section ref={ref} className="py-16 bg-white" id="team">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        {/* Veterinarians */}
        <h3 className="text-2xl text-[#e83f85] mb-8 font-medium">Our Veterinarians</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#5e208e]">{doctor.name}</h4>
                <p className="text-[#e83f85] mb-2">{doctor.role}</p>
                {doctor.instagram && (
                  <a 
                    href={`https://instagram.com/${doctor.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#5e208e] hover:text-[#e83f85]"
                  >
                    <FaInstagram className="mr-1" />
                    @{doctor.instagram}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Staff */}
        <h3 className="text-2xl text-[#e83f85] mb-8 font-medium">Our Staff</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {staff.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-[#5e208e]">{member.name}</h4>
                <p className="text-[#e83f85]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}); 