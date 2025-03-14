import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

<motion.a
  href="https://www.instagram.com/miamivetgroup/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 cursor-pointer
    hover:bg-white/20 transition-all duration-300"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <div className="flex flex-col items-center gap-4">
    <FaInstagram className="w-12 h-12 text-[#5e208e]" />
    <div className="text-center">
      <h3 className="text-xl font-bold text-[#5e208e] mb-2">Instagram</h3>
      <p className="text-[#5e208e]/80">Follow us @miamivetgroup</p>
    </div>
  </div>
</motion.a> 