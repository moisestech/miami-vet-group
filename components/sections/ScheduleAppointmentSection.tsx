"use client";

import { motion } from "framer-motion";
import { RainbowButton } from "../magicui/rainbow-button";
import { BsCupHot } from "react-icons/bs";

export function ScheduleAppointmentSection() {
  return (
    <section className="snap-start min-h-screen flex items-center bg-[#d8a0d2bf] py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 cursor-pointer"
          >
            <BsCupHot className="w-16 h-16 mx-auto text-[#5e208e]" />
          </motion.div>

          <h2 className="text-3xl font-bold mb-4 text-[#5e208e]">Schedule Appointment</h2>
          <div className="space-y-4 mb-8">
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to experience the difference holistic care can make for your pet?
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Schedule your appointment today.
            </motion.p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RainbowButton className="text-white bg-[#5e208e] hover:bg-[#5e208e]/90 text-lg px-8 py-4">
              Book Now
            </RainbowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 