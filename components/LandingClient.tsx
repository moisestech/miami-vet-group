"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navigation } from './Navigation';
import { HeroSection } from './sections/HeroSection';
import { OurWorkSection } from './sections/OurWorkSection';
import { AboutUsSection } from './sections/AboutUsSection';
import { OurServicesSection } from './sections/OurServicesSection';
import { OurTeamSection } from './sections/OurTeamSection';
import { ScheduleAppointmentSection } from './sections/ScheduleAppointmentSection';
import { MapSection } from './sections/MapSection';
import { FooterSection } from './sections/FooterSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { WeAcceptSection } from './sections/WeAcceptSection';
import { SocialsSection } from './sections/SocialsSection';

export function LandingClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-[#d8a0d2bf]"
        style={{ opacity: backgroundOpacity }}
      />
      
      <Navigation
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        teamRef={teamRef}
        contactRef={contactRef}
      />
      
      <main 
        ref={containerRef}
        className="relative w-full min-h-screen overflow-x-hidden"
      >
        <HeroSection />
        {/* <MissionSection /> */}
        <OurWorkSection />
        <AboutUsSection ref={aboutRef} />
        <OurServicesSection ref={servicesRef} />
        <OurTeamSection ref={teamRef} />
        <ScheduleAppointmentSection />
        <MapSection />
        <TestimonialsSection />
        <SocialsSection />
        <WeAcceptSection />
        <FooterSection />
      </main>
    </>
  );
} 