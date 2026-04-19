import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
  return (
    <section id="trust" className="bg-bg-main pt-12 pb-24 relative overflow-hidden transition-colors duration-500">
      <div className="section-container">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-bg-card text-text-main text-xs font-bold mb-6 tracking-widest uppercase border border-border-main">
              Trusted Worldwide
            </span>
            <h2 className="heading-lg text-text-main mb-6">Built with Modern AI Technologies</h2>
            <p className="text-text-muted mb-10 leading-relaxed text-lg transition-colors duration-300">
              We leverage cutting-edge frameworks like React, Node.js, FastAPI, YOLOv8, and EfficientNet to deliver systems that are secure, scalable, and highly performant. 
            </p>
            <div className="p-8 rounded-3xl bg-bg-card text-text-main shadow-2xl relative overflow-hidden border border-border-main text-left transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-bold mb-4 text-center">Our Guarantee</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 text-center italic">
                    "We don't just build systems; we create robust solutions that genuinely improve efficiency, productivity, and decision-making."
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
