"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { MaskedGradientBackground } from "../MaskedGradientBackground";
import { TeamMemberCard } from "../TeamMemberCard";
import { teamMembers } from "@/data/team";
import { cn, sectionClass } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const OurTeamSection = forwardRef<HTMLElement>((props, ref) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Sort team members based on screen size
  const sortedTeamMembers = [...teamMembers].sort((a, b) => {
    const orderA = isDesktop ? a.order.desktop : a.order.mobile;
    const orderB = isDesktop ? b.order.desktop : b.order.mobile;
    return orderA - orderB;
  });

  return (
    <section ref={ref} className={cn(sectionClass, "bg-[#d8a0d2bf]")}>
      <MaskedGradientBackground 
        maskPath="team"
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#5e208e] mb-4">Our Team</h2>
          <p className="text-lg md:text-2xl text-[#5e208e]/80">
            Meet our dedicated veterinary professionals
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto"
        >
          {sortedTeamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: idx * 0.2 + 0.4,
                bounce: 0.4
              }}
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

OurTeamSection.displayName = 'OurTeamSection'; 