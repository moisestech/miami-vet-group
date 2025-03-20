'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaHandHoldingHeart, FaGraduationCap, FaUsers } from 'react-icons/fa';

export function MissionPageClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5]">
      {/* Background Image Section */}
      <div className="relative h-[40vh]">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image 
            src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107113/miamivetgroup/lindo-perro-chihuahua-bebiendo-pajita-scaled_anlv9h.jpg"
            alt="Chihuahua dog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#bc85cc99]"></div>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image 
            src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1741107088/miamivetgroup/LOGO-POST-MIAMI-VET-15_wimddm.png"
            alt="Miami Vet Group Logo"
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl text-[#5e208e] font-bold mb-8 text-center [font-family:'Caveat_Brush']">
            Our Mission
          </h1>
          
          <div className="prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 mb-8 shadow-xl"
            >
              <p className="text-[#5e208e] leading-relaxed">
                At Miami Vet Group, we believe in providing comprehensive, integrative veterinary care 
                that combines the best of conventional medicine with holistic approaches. Our mission 
                is to create a healing environment where pets receive individualized attention and 
                their families are educated and empowered to make the best healthcare decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl text-[#5e208e] mb-6 text-center [font-family:'Caveat_Brush']">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Compassionate Care", desc: "Every pet deserves to be treated with gentleness and respect", icon: FaHeart },
                  { title: "Integrative Medicine", desc: "Combining traditional and alternative therapies for optimal results", icon: FaHandHoldingHeart },
                  { title: "Education", desc: "Empowering pet owners with knowledge and understanding", icon: FaGraduationCap },
                  { title: "Community", desc: "Building lasting relationships with our Miami pet family", icon: FaUsers }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="p-6 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-xl
                      hover:bg-white/50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <value.icon className="w-16 h-16 text-[#e83f85] mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl text-[#5e208e] font-bold mb-2">{value.title}</h3>
                      <p className="text-[#5e208e]/80">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl"
            >
              <h2 className="text-3xl text-[#5e208e] mb-6 text-center [font-family:'Caveat_Brush']">Our Approach</h2>
              <p className="text-[#5e208e]/80 leading-relaxed">
                We understand that each pet is unique, which is why we take the time to develop 
                personalized treatment plans that consider all aspects of their health and well-being. 
                Our team of experienced veterinarians and staff are committed to staying at the forefront 
                of veterinary medicine while maintaining the warm, personal touch that makes our practice special.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 