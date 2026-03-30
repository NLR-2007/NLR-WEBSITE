import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden premium-gradient">
      {/* Decorative background elements */}
      <div className="blob-bg top-0 right-0 w-3/4 h-3/4 bg-primary-200/40 opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      <div className="blob-bg bottom-0 left-0 w-1/2 h-1/2 bg-primary-100/60 opacity-60 -translate-x-1/4 translate-y-1/4" style={{animationDelay: '2s'}}></div>

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
            className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6"
          >
            AI-powered Agriculture & Tech
          </motion.span>
          
          <h1 className="heading-xl text-slate-900 leading-[1.1] mb-6">
            NLR Group of Company: <br />
            <span className="text-primary-600 block sm:inline">Next Level Revolution</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            We solve real-world problems using AI and intelligent technology. 
            From sustainable farming to smart transportation, we build practical systems that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#kisaan-krushi"
              className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all"
            >
              Explore Kisaan Krushi <HiArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
              whileTap={{ scale: 0.98 }}
              href="#solutions"
              className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-primary-200 transition-all"
            >
              View Our Solutions
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1">✓ Multi-domain Innovation</span>
            <span className="flex items-center gap-1">✓ Scalable AI Systems</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl skew-x-[-2deg] rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" 
              alt="Innovative Tech & Agriculture" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
          </div>
          {/* Floating card effect */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 p-6 rounded-2xl glass-card max-w-[240px]"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                <span className="font-bold">AI</span>
              </div>
              <div className="font-bold text-slate-800">Advanced Analytics</div>
            </div>
            <p className="text-xs text-slate-500">Processing real-time agricultural data for better decision making.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
