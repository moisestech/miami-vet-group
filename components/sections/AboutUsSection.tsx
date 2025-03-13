"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pointer } from "@/components/magicui/pointer";
import { motion } from "framer-motion";
import { RainbowButton } from "../magicui/rainbow-button";
import { FaRegHeart } from "react-icons/fa";
import { IoPawOutline } from "react-icons/io5";
import { MaskedGradientBackground } from "../MaskedGradientBackground";
import { forwardRef, ForwardedRef } from 'react';

export const AboutUsSection = forwardRef<HTMLElement>((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} className="snap-start min-h-screen flex items-center bg-[#d8a0d2bf] py-16 relative overflow-hidden">
      <MaskedGradientBackground 
        maskPath="heart"
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
            <CardContent className="relative flex h-40 items-center justify-center p-6">
              <span className="pointer-events-none text-center">
                <p className="text-gray-600">
                  <strong className="text-[#5e208e]">Miami Vet Group</strong> is on a mission to strengthen the human-animal bond through better veterinary care.
                </p>
                <div className="mt-4">
                  <RainbowButton className="text-white bg-[#5e208e] hover:bg-[#5e208e]/90">
                    Learn More
                  </RainbowButton>
                </div>
              </span>
            </CardContent>
            <Pointer>
              <motion.div
                animate={{
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <FaRegHeart className="w-8 h-8 text-[#5e208e]" />
              </motion.div>
            </Pointer>
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
              <span className="pointer-events-none text-center text-gray-600">
                Miami Veterinary Group <strong className="text-[#5e208e]">is a family practice</strong> where we strive to treat our patients and their parents as individuals.
              </span>
            </CardContent>
            <Pointer>
              <motion.div
                animate={{
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <IoPawOutline className="w-8 h-8 text-[#5e208e]" />
              </motion.div>
            </Pointer>
          </Card>
        </div>
      </div>
    </section>
  );
});

AboutUsSection.displayName = 'AboutUsSection'; 