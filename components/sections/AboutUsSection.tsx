"use client";

import { motion } from "framer-motion";
import { RainbowButton } from "../magicui/rainbow-button";
import { Pointer } from "../magicui/pointer";
import { FaRegHeart } from "react-icons/fa";
import { IoPawOutline } from "react-icons/io5";

export function AboutUsSection() {
  return (
    <section className="snap-start h-screen flex items-center bg-gradient-to-br from-[#d8a0d2] via-[#bc85cc] to-[#5e208e]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Us Card */}
        <div className="relative p-8 md:p-12 bg-white rounded-2xl overflow-hidden cursor-none shadow-lg">
          <div className="relative pb-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#5e208e] to-[#bc85cc] bg-clip-text text-transparent">About Us</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-[#5e208e]">Our Mission</h3>
            <p className="text-gray-600">
              <strong className="text-[#5e208e]">Miami Vet Group</strong> is on a mission to strengthen the human-animal bond through better veterinary care.
            </p>
            <RainbowButton className="text-white bg-[#5e208e] hover:bg-[#5e208e]/90">
              Learn More
            </RainbowButton>
          </div>
          <Pointer>
              <FaRegHeart className="w-6 h-6 text-[#5e208e]" />
          </Pointer>
        </div>

        {/* Our Values Card */}
        <div className="relative p-8 md:p-12 bg-white rounded-2xl overflow-hidden cursor-none shadow-lg">
          <div className="relative pb-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#5e208e] to-[#bc85cc] bg-clip-text text-transparent">Our Values</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Miami Veterinary Group <strong className="text-[#5e208e]">is a family practice</strong> where we strive to treat our patients and their parents as individuals.
            </p>
          </div>
          <Pointer>
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md rounded-full">
              <IoPawOutline className="w-6 h-6 text-[#5e208e]" />
            </div>
          </Pointer>
        </div>
      </div>
    </section>
  );
} 