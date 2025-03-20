import { motion } from "framer-motion";
import { CreditCard, Shield, FileCheck } from "lucide-react";
import { FaPaw } from "react-icons/fa";

const insuranceOptions = [
  {
    name: "Care Credit",
    icon: CreditCard,
    color: "#e83f85"
  },
  {
    name: "Pet Assure",
    icon: Shield,
    color: "#5e208e"
  },
  {
    name: "Scratchpad",
    icon: FaPaw,
    color: "#e83f85"
  },
  {
    name: "Todo Tipo de Seguro",
    icon: FileCheck,
    color: "#5e208e"
  }
];

export function WeAcceptSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5]">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold [font-family:'Caveat_Brush']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We Accept
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {insuranceOptions.map((option, index) => (
            <motion.div
              key={option.name}
              className="p-6 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 
                flex flex-col items-center gap-4 
                hover:bg-white/50 transition-all duration-300 
                shadow-xl hover:shadow-2xl
                group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <option.icon 
                size={40} 
                className="text-[#5e208e] group-hover:scale-110 transition-transform duration-300" 
              />
              <h3 className="text-xl text-[#5e208e] text-center font-medium">
                {option.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 