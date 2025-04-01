"use client";

import { motion } from "framer-motion";
import { Marquee } from "../magicui/marquee";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  text: string;
  petName: string;
  emoji: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Rodriguez",
    text: "The care and attention my pet received was exceptional. The staff truly goes above and beyond!",
    petName: "Luna",
    emoji: "🐱" // Cat for Luna
  },
  {
    name: "John Smith",
    text: `I've never felt more confident about my pet's healthcare. The integrative approach makes such a difference.`,
    petName: "Max",
    emoji: "🐕" // Dog for Max
  },
  {
    name: "Ana González",
    text: "El mejor servicio veterinario que he encontrado en Miami. Professional y compasivo.",
    petName: "Coco",
    emoji: "🦜" // Parrot for Coco
  },
  {
    name: "David Miller",
    text: "Their holistic approach to pet care is exactly what we were looking for. Highly recommended!",
    petName: "Bailey",
    emoji: "🐶" // Dog for Bailey
  },
  {
    name: "Sarah Thompson",
    text: "As a holistic vet near me, they provide amazing natural treatments. My cat has never been healthier!",
    petName: "Whiskers",
    emoji: "🐱"
  },
  {
    name: "Michael Chen",
    text: "The best integrative vet care in Pinecrest. They combine traditional and alternative medicine perfectly.",
    petName: "Rocky",
    emoji: "🐕"
  },
  {
    name: "Isabella Martinez",
    text: "Their homeopathic treatments worked wonders for my anxious dog. So grateful to find them!",
    petName: "Bella",
    emoji: "🐶"
  },
  {
    name: "Robert Wilson",
    text: "Finally found a natural vet near me who understands holistic pet care. Outstanding service!",
    petName: "Leo",
    emoji: "🐱"
  },
  {
    name: "Emily Parker",
    text: "The homeopathic approach helped my senior cat with arthritis. Miami Vet Group is truly the best holistic vet in the area.",
    petName: "Shadow",
    emoji: "🐱"
  },
  {
    name: "Carlos Mendez",
    text: "Increíble atención y servicio. Los tratamientos naturales han ayudado muchísimo a mi perro.",
    petName: "Zeus",
    emoji: "🐕"
  },
  {
    name: "Sophie Williams",
    text: "As someone who believes in natural medicine, finding a holistic vet near Pinecrest was a blessing. My rabbit loves them!",
    petName: "Hoppy",
    emoji: "🐰"
  },
  {
    name: "James Anderson",
    text: `The integrative medicine approach at Miami Vet Group has transformed my dog's health. Worth every penny!`,
    petName: "Charlie",
    emoji: "🐕"
  },
  {
    name: "Laura Chen",
    text: "Best veterinary hospital in Pinecrest! Their combination of traditional and holistic care is exactly what we needed.",
    petName: "Mochi",
    emoji: "🐱"
  },
  {
    name: "Miguel Santos",
    text: "Mi loro está mucho más saludable gracias a los tratamientos naturales. ¡El mejor veterinario de Miami!",
    petName: "Rio",
    emoji: "🦜"
  },
  {
    name: "Rachel Green",
    text: "The natural approach to pet healthcare here is amazing. My guinea pigs have never been healthier!",
    petName: "Pip & Pop",
    emoji: "🐹"
  },
  {
    name: "Daniel Kim",
    text: `Found this integrative vet through a friend and couldn't be happier. They truly understand holistic pet care.`,
    petName: "Sushi",
    emoji: "🐕"
  }
];

export function TestimonialsSection() {
  // Let's use fewer testimonials per row for better control
  const firstRow = testimonials.slice(0, 4);  // Just use first 4
  const secondRow = testimonials.slice(4, 8);  // Use next 4

  return (
    <section className="py-16 bg-gradient-to-br from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5] overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Patients Say
        </motion.h2>

        {/* Mobile View - Simple Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-4 px-4">
            {testimonials.slice(0, 6).map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ReviewCard {...review} />
              </motion.div>
            ))}
            <div className="flex justify-center mt-6">
              <motion.button
                className="px-6 py-3 text-[#5e208e] bg-white/30 rounded-xl backdrop-blur-md
                  hover:bg-white/40 transition-all duration-300
                  [border:1px_solid_rgba(255,255,255,.2)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </motion.button>
            </div>
          </div>
        </div>

        {/* Desktop View - Marquee */}
        <div className="hidden md:block">
          <div className="relative flex w-full flex-col items-center justify-center gap-8">
            <div className="w-full overflow-hidden">
              <Marquee 
                className="[--duration:40s]" 
                pauseOnHover
              >
                {firstRow.map((review) => (
                  <div key={review.name} className="px-2">
                    <ReviewCard {...review} />
                  </div>
                ))}
              </Marquee>
            </div>
            
            <div className="w-full overflow-hidden">
              <Marquee 
                className="[--duration:40s]" 
                pauseOnHover 
                reverse
              >
                {secondRow.map((review) => (
                  <div key={review.name} className="px-2">
                    <ReviewCard {...review} />
                  </div>
                ))}
              </Marquee>
            </div>
            
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#FFE6F7]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#FFE6F7]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({ name, text, petName, emoji }: Testimonial) => {
  return (
    <figure
      className={cn(
        "relative w-full md:w-[320px] shrink-0", // Full width on mobile, fixed width on desktop
        "cursor-pointer overflow-hidden rounded-xl p-6",
        "bg-white/20 backdrop-blur-md hover:bg-white/30",
        "transform-gpu [border:1px_solid_rgba(255,255,255,.2)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "transition-all duration-300"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5e208e]/10">
            <span className="text-2xl">{emoji}</span>
          </div>
          <div className="flex flex-col">
            <figcaption className="text-lg font-medium text-[#5e208e]">
              {name}
            </figcaption>
            <p className="text-sm font-medium text-[#5e208e]/60">
              {`${petName}'s Parent`}
            </p>
          </div>
        </div>
        <blockquote className="text-[#5e208e]/80">
          {`"${text}"`}
        </blockquote>
      </div>
    </figure>
  );
}; 