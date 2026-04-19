import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-main transition-colors duration-500">
      {/* Decorative background elements */}
      <div className="blob-bg top-0 right-0 w-3/4 h-3/4 bg-brand/10 opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      <div className="blob-bg bottom-0 left-0 w-1/2 h-1/2 bg-brand/5 opacity-60 -translate-x-1/4 translate-y-1/4" style={{animationDelay: '2s'}}></div>

      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand text-sm font-bold mb-6 tracking-wide shadow-[0_0_15px_var(--brand-accent)]/20 transition-all"
          >
            AI-powered Agriculture & Tech
          </motion.span>
          
          <h1 className="heading-xl text-text-main leading-[1.1] mb-6">
            Building AI-Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">Solutions for Real-World Problems</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed transition-colors duration-300">
            We specialize in Artificial Intelligence, Web & App Development, and Smart Agriculture Technologies to build practical systems that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="px-8 py-4 bg-brand text-[#060b13] rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_var(--brand-accent)]/20 hover:brightness-110 transition-all"
            >
              Explore Services <HiArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: 'color-mix(in srgb, var(--text-main) 5%, transparent)' }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-4 border-2 border-border-main text-text-main rounded-xl font-bold flex items-center justify-center gap-2 hover:border-brand transition-all"
            >
              Contact Us
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-text-muted font-medium transition-colors duration-300">
            <span className="flex items-center gap-1"><span className="text-brand">✓</span> Multi-domain Innovation</span>
            <span className="flex items-center gap-1"><span className="text-brand">✓</span> Scalable AI Systems</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl skew-x-[-2deg] rotate-2 border border-border-main transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" 
              alt="Innovative Tech & Agriculture" 
              className="w-full h-auto object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-base-main/80 to-transparent mix-blend-overlay"></div>
          </div>
          {/* Floating card effect */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 p-6 rounded-2xl glass-card max-w-[240px]"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand">
                <span className="font-bold">AI</span>
              </div>
              <div className="font-bold text-text-main">Advanced Analytics</div>
            </div>
            <p className="text-xs text-text-muted">Processing real-time agricultural data for better decision making.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
