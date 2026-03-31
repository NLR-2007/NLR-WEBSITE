import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/14155238886?text=join%20offical-depth"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-200 whatsapp-pulse border border-green-400 group transition-all"
    >
      <FaWhatsapp size={28} />
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] uppercase font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap tracking-widest">
        Need Help? Chat with us
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
