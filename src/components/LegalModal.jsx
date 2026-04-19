import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const LegalModal = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg-main/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-bg-card border border-border-main rounded-3xl p-8 z-[101] shadow-2xl overflow-hidden transition-colors duration-500"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full -z-10 opacity-50" />
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-text-main">{title}</h3>
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-bg-main hover:bg-brand/20 text-text-muted flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <HiX size={18} />
              </button>
            </div>
            
            <div className="prose prose-sm text-text-muted leading-relaxed font-medium">
              {content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8">
              <button 
                onClick={onClose}
                className="w-full py-3 bg-brand text-[#060b13] rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-brand/20"
              >
                Acknowledge & Close
              </button>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
