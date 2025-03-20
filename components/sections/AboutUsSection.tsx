"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MaskedGradientBackground } from "../MaskedGradientBackground";
import { forwardRef, ForwardedRef } from 'react';
import Link from "next/link";

export const AboutUsSection = forwardRef<HTMLElement>((_, ref: ForwardedRef<HTMLElement>) => {

  return (
    <section ref={ref} className="snap-start min-h-screen flex items-center bg-[#d8a0d2bf] py-16 relative overflow-hidden">
      <MaskedGradientBackground 
        maskPath="heart"
        gradientColors={["#FFE6F7", "#FFC6F3", "#FFB1F5"]}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-[#5e208e] mb-6">About Us</h2>
          <p className="text-2xl text-[#5e208e]/80 mb-12">
            Dedicated to providing exceptional veterinary care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="overflow-hidden border-none bg-white shadow-lg transition-all hover:shadow-xl">
            <CardHeader className="relative pb-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#5e208e] to-[#bc85cc] bg-clip-text text-transparent sr-only">
                About Us
              </CardTitle>
              <CardDescription className="font-bold text-xl text-[#5e208e]">
                Our Mission
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex h-60 md:h-40 items-center justify-center p-6">
              <span className="text-center">
                <p className="text-gray-600">
                  <strong className="text-[#5e208e]">Miami Vet Group</strong> is on a mission to strengthen the human-animal bond through better veterinary care.
                </p>
                <div className="my-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href="/mission"
                        className="inline-block px-8 py-4 rounded-xl 
                          bg-gradient-to-r from-[#e83f85] to-[#fab51d] 
                          text-white text-lg font-medium
                          shadow-lg hover:shadow-xl
                          border border-white/30
                          backdrop-blur-sm
                          transition-all duration-300
                          hover:brightness-110
                          z-20"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </span>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none bg-white shadow-lg transition-all hover:shadow-xl">
            <CardHeader className="relative pb-2">
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-[#5e208e] to-[#bc85cc] bg-clip-text text-transparent">
                Our Values
              </CardTitle>
              <CardDescription className="text-[#5e208e]">
                Family Practice
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex h-40 items-center justify-center p-6">
              <span className="text-center text-gray-600">
                Miami Veterinary Group <strong className="text-[#5e208e]">is a family practice</strong> where we strive to treat our patients and their parents as individuals.
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

AboutUsSection.displayName = 'AboutUsSection'; 