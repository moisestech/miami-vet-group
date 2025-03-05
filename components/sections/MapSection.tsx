"use client";

import { motion } from "framer-motion";
import MapComponent from '../GoogleMap';

export function MapSection() {
  return (
    <section className="snap-start min-h-screen py-16 bg-[#d8a0d2bf]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#5e208e]">
              Because we all deserve a second chance.
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Visit us at our location in Pinecrest.</p>
              <p className="font-semibold">12521 S Dixie Hwy, Pinecrest, FL 33156</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <MapComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 