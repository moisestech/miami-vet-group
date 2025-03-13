"use client";

import { motion } from "framer-motion";
import { MaskedGradientBackground } from "../MaskedGradientBackground";
import { AnimatedList } from "../magicui/animated-list";
import { cn, sectionClass } from "@/lib/utils";
import { forwardRef, ForwardedRef } from 'react';

interface Service {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const services: Service[] = [
  {
    name: "Anesthesia",
    description: "Safe and monitored sedation",
    icon: "💉",
    color: "#FFB1F5",
    time: "45-60 min"
  },
  {
    name: "Behavioral Medicine",
    description: "Understanding your pet's needs",
    icon: "🐾",
    color: "#FFC6F3",
    time: "60 min"
  },
  {
    name: "Chinese Medicine",
    description: "Traditional Chinese medicine for holistic health",
    icon: "🌿",
    color: "#FFE6F7",
    time: "60 min"
  },
  {
    name: "Dental Cleaning",
    description: "Professional dental cleaning for your pet",
    icon: "🦷",
    color: "#FFB1F5",
    time: "45-60 min"
  },
  {
    name: "Health Certificates for Travel",
    description: "Certificates for safe travel",
    icon: "✈️",
    color: "#FFC6F3",
    time: "60 min"
  },
  {
    name: "Holistic Care",
    description: "Comprehensive care for your pet's overall health",
    icon: "🌱",
    color: "#FFE6F7",
    time: "60 min"
  },
  {
    name: "Hospice and Euthanasia",
    description: "Comfort and care at the end of life",
    icon: "🕊️",
    color: "#FFB1F5",
    time: "60 min"
  },
  {
    name: "Hospitalization",
    description: "Care in a veterinary hospital",
    icon: "🏥",
    color: "#FFC6F3",
    time: "60 min"
  },
  {
    name: "House Calls",
    description: "Convenient care at your home",
    icon: "🏠",
    color: "#FFE6F7",
    time: "60 min"
  },
  {
    name: "Integrative Medicine",
    description: "Combining conventional and alternative treatments",
    icon: "⚕️",
    color: "#FFB1F5",
    time: "60 min"
  },
  {
    name: "Laboratory",
    description: "Testing and analysis for your pet's health",
    icon: "🔬",
    color: "#FFC6F3",
    time: "60 min"
  },
  {
    name: "Laser Surgery",
    description: "Surgical procedures using laser technology",
    icon: "🔲",
    color: "#FFE6F7",
    time: "60 min"
  },
  {
    name: "Laser Therapy",
    description: "Pain management and healing using laser technology",
    icon: "✨",
    color: "#FFB1F5",
    time: "45-60 min"
  },
  {
    name: "Microchipping",
    description: "Permanent identification for your pet",
    icon: "💻",
    color: "#FFC6F3",
    time: "15 min"
  },
  {
    name: "Non Anesthetic Dental",
    description: "Dental care without anesthesia",
    icon: "🦷",
    color: "#FFE6F7",
    time: "45-60 min"
  },
  {
    name: "Nutritional Counseling",
    description: "Diet and nutrition advice for your pet",
    icon: "🥗",
    color: "#FFB1F5",
    time: "60 min"
  },
  {
    name: "Orthopedic Surgery",
    description: "Surgical procedures for orthopedic issues",
    icon: "🦴",
    color: "#FFC6F3",
    time: "60 min"
  },
  {
    name: "Pain Management",
    description: "Managing pain for your pet's comfort",
    icon: "💊",
    color: "#FFE6F7",
    time: "60 min"
  },
  {
    name: "Parasite Prevention",
    description: "Preventing parasites for your pet's health",
    icon: "🛡️",
    color: "#FFB1F5",
    time: "60 min"
  },
  {
    name: "Puppy and Kitten Care",
    description: "Care for new pets",
    icon: "🐱",
    color: "#FFC6F3",
    time: "60 min"
  },
  {
    name: "Radiology (X-RAYS)",
    description: "X-rays for diagnostic purposes",
    icon: "📷",
    color: "#FFE6F7",
    time: "60 min"
  },
  {
    name: "Senior Care",
    description: "Care for older pets",
    icon: "👵",
    color: "#FFB1F5",
    time: "60 min"
  },
  {
    name: "Surgery",
    description: "Surgical procedures",
    icon: "🔪",
    color: "#FFC6F3",
    time: "60 min"
  },
  {
    name: "Ultrasound",
    description: "Using ultrasound for diagnostic purposes",
    icon: "🔊",
    color: "#FFE6F7",
    time: "60 min"
  },
  {
    name: "Vaccinations",
    description: "Vaccinations for your pet's health",
    icon: "💉",
    color: "#FFB1F5",
    time: "15 min"
  },
  {
    name: "Wellness Exams",
    description: "Regular check-ups for your pet's health",
    icon: "📋",
    color: "#FFC6F3",
    time: "60 min"
  }
];

const ServiceCard = ({ name, description, icon, color, time }: Service) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl p-4 md:p-8",
        "transition-all duration-300 ease-in-out hover:scale-[102%]",
        "bg-white/20 backdrop-blur-md",
        "transform-gpu [border:1px_solid_rgba(255,255,255,.2)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3 md:gap-8">
        <div
          className="flex size-16 md:size-24 items-center justify-center rounded-xl md:rounded-2xl shrink-0"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-2xl md:text-3xl">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden min-w-0">
          <figcaption className="flex flex-row items-center text-xl md:text-2xl font-medium text-[#5e208e] gap-2 md:gap-3">
            <span className="truncate">{name}</span>
            <span className="shrink-0">·</span>
            <span className="text-sm md:text-base text-[#5e208e]/70 shrink-0">{time}</span>
          </figcaption>
          <p className="text-base md:text-lg font-normal text-[#5e208e]/80 line-clamp-2 md:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

// Before the component definition, change from interface to type
type OurServicesSectionProps = object;

export const OurServicesSection = forwardRef<HTMLElement, OurServicesSectionProps>(
  (props, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section ref={ref} className={cn(sectionClass, "bg-[#d8a0d2bf]")}>
        <MaskedGradientBackground 
          maskPath="services"
          gradientColors={["#FFE6F7", "#FFC6F3", "#FFB1F5"]}
        />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#5e208e] mb-4 md:mb-6">Our Services</h2>
            <p className="text-lg md:text-2xl text-[#5e208e]/80">
              Comprehensive care for your beloved pets
            </p>
          </motion.div>

          {/* List wrapper with fixed height */}
          <div className="relative max-w-4xl mx-auto h-[65vh] md:h-[70vh]">
            <div className="absolute inset-0">
              <AnimatedList 
                delay={150} 
                className="h-full overflow-y-auto px-2 md:px-6 space-y-3 md:space-y-4 
                  scrollbar-thin scrollbar-thumb-[#5e208e]/20 scrollbar-track-transparent"
              >
                {services.map((service, idx) => (
                  <ServiceCard key={idx} {...service} />
                ))}
              </AnimatedList>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

OurServicesSection.displayName = 'OurServicesSection'; 