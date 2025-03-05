"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { IoPawOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import MapComponent from './GoogleMap';
import { Pointer } from './magicui/pointer';
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { RainbowButton } from "./magicui/rainbow-button";
import { Navigation } from './Navigation';
import { HeroSection } from './sections/HeroSection';
import { AboutUsSection } from './sections/AboutUsSection';
import { MeetTheTeamSection } from './sections/MeetTheTeamSection';
import { ScheduleAppointmentSection } from './sections/ScheduleAppointmentSection';
import { MapSection } from './sections/MapSection';
import { FooterSection } from './sections/FooterSection';

export function LandingClient() {
  const containerRef = useRef<HTMLDivElement>(null!);
  
  const { scrollYProgress } = useScroll({
    container: containerRef
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative h-screen">
      <motion.div 
        style={{ scaleX }} 
        className="fixed left-0 right-0 top-0 h-1 bg-[#5e208e] z-50"
      />
      
      <Navigation containerRef={containerRef} />
      
      <main 
        ref={containerRef}
        className="h-screen overflow-y-scroll overflow-x-hidden"
      >
        <HeroSection />
        <AboutUsSection />
        <MeetTheTeamSection />
        <ScheduleAppointmentSection />
        <MapSection />
        <FooterSection />
      </main>
    </div>
  );
} 