import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/2349035085013"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-sage-green text-white px-4 py-3 rounded-md border border-sage-green hover:bg-[#5a7a6c] transition-colors duration-200"
      aria-label="Contact Chairman on WhatsApp"
    >
      <MessageCircle size={24} strokeWidth={2} />
      <span className="font-sans font-medium hidden md:inline-block">Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;