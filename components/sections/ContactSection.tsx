import { forwardRef } from "react";

// THIRD PARTY
import { motion } from "framer-motion";

// ICONS
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export const ContactSection = forwardRef<HTMLElement>(function ContactSection(_, ref) {
  const contactMethods = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/miamivetgroup/",
      description: "Follow us @miamivetgroup",
      bgColor: "#e83f85"
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/miamivetgroup",
      description: "Like our page",
      bgColor: "#4267B2"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      link: "mailto:info@miamivetgroup.com",
      description: "info@miamivetgroup.com",
      bgColor: "#ed7160"
    },
    {
      name: "Phone",
      icon: FaPhone,
      link: "tel:+17867130863",
      description: "(786) 713-0863",
      bgColor: "#5e208e"
    }
  ];

  return (
    <section ref={ref} id="contact" className="py-16 bg-gradient-to-br from-[#FFE6F7] via-[#FFC6F3] to-[#FFB1F5]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl text-center text-[#5e208e] mb-12 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <motion.a
              key={method.name}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/40 backdrop-blur-md rounded-2xl p-6 cursor-pointer
                hover:bg-white/50 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: method.bgColor }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#5e208e] mb-2">{method.name}</h3>
                  <p className="text-[#5e208e]/80">{method.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
});
