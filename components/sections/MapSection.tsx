"use client";

// THIRD PARTY
import { motion } from "framer-motion";

// COMPONENTS
import MapComponent from '../GoogleMap';
import { MaskedGradientBackground } from '../MaskedGradientBackground';
import { CopyText } from '../CopyText';

const MapSection = () => {
  return (
    <section className="snap-start min-h-screen flex items-center bg-[#d8a0d2bf] py-16 relative overflow-hidden" id="contact">
      <MaskedGradientBackground 
        maskPath="cat"
        gradientColors={["#FFE6F7", "#FFC6F3", "#FFB1F5"]}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-6xl font-bold mb-6 text-[#5e208e]">
              Because we all deserve a second chance.
            </h2>
            <div className="space-y-6 text-[#5e208e]/80 text-xl md:text-2xl">
              <p>Visit us at our location in Pinecrest.</p>
              <CopyText 
                text="12521 S Dixie Hwy, Pinecrest, FL 33156"
                className="font-semibold hover:text-[#5e208e] transition-colors"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-80 md:h-96 rounded-lg overflow-hidden shadow-lg relative z-10"
          >
            <MapComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
