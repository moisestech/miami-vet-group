import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria Rodriguez",
    text: "The care and attention my pet received was exceptional. The staff truly goes above and beyond!",
    petName: "Luna",
    emoji: "🐱" // Cat for Luna
  },
  {
    name: "John Smith",
    text: "I've never felt more confident about my pet's healthcare. The integrative approach makes such a difference.",
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
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5]">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Patients Say
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="p-8 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/50 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{testimonial.emoji}</div>
              <p className="text-[#5e208e]/90 text-lg italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <span className="text-[#5e208e] font-medium">{testimonial.name}</span>
                <span className="text-[#e83f85]">& {testimonial.petName}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 