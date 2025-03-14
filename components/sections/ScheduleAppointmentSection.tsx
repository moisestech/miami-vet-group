"use client";

import { motion } from "framer-motion";
import { RainbowButton } from "../magicui/rainbow-button";
import { FaPaw, FaArrowRight } from "react-icons/fa";
import { MaskedGradientBackground } from "../MaskedGradientBackground";

export function ScheduleAppointmentSection() {
  return (
    <section className="snap-start min-h-screen flex items-center bg-[#d8a0d2bf] py-16 relative overflow-hidden">
      <MaskedGradientBackground 
        maskPath="paw"
        gradientColors={["#FFE6F7", "#FFC6F3", "#FFB1F5"]}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-[#5e208e] mb-6">Schedule an Appointment</h2>
          <p className="text-2xl text-[#5e208e]/80 mb-12">
            Book your visit with our experienced team
          </p>
        </motion.div>

        <div className="text-xl md:text-2xl text-[#5e208e]/80 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl flex flex-col items-center mx-auto bg-white/10 backdrop-blur-sm p-12 rounded-2xl"
          >
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaPaw className="w-16 h-16 text-[#5e208e]" />
            </motion.div>

            <div className="space-y-6 mb-12">
              <motion.p 
                className="text-3xl text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ready to experience the difference holistic care can make for your pet?
              </motion.p>
              <motion.p 
                className="text-3xl text-gray-700"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Schedule your appointment today.
              </motion.p>
            </div>
            <motion.a
              href="https://wa.me/13054295509"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#5e208e] text-white px-8 py-4 rounded-lg text-xl font-medium hover:bg-[#5e208e]/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
              <FaArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 