import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight, HiShieldCheck, HiUserGroup, HiTrendingUp } from 'react-icons/hi';

const Projects = () => {
  return (
    <section id="projects" className="bg-bg-main py-24 relative overflow-hidden transition-colors duration-500">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-base-border to-transparent"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-text-main mb-4"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-text-muted"
          >
            Showcasing our flagship technologies that bring real value to communities.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/40 text-brand text-xs font-bold mb-6 tracking-widest uppercase">
              Smart Agriculture
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-text-main mb-4">Plant Disease Detection System</h3>
            <p className="text-lg font-medium text-brand mb-6 font-sans">
              Kisaan Krushi (Powered by YOLOv8 + EfficientNet)
            </p>
            <p className="text-text-muted mb-8 leading-relaxed">
              Kisaan Krushi brings advanced technology directly into the hands of farmers. 
              Our <strong>Tomato Disease Detector App</strong> uses deep learning to identify tomato crop diseases simply from a photo, 
              providing immediate suggestions for fertilizers, precautions, and actionable treatment steps.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-bg-card text-text-muted text-sm rounded-lg font-mono border border-border-main">React Native</span>
              <span className="px-3 py-1 bg-bg-card text-text-muted text-sm rounded-lg font-mono border border-border-main">Python FastAPI</span>
              <span className="px-3 py-1 bg-bg-card text-text-muted text-sm rounded-lg font-mono border border-border-main">YOLOv8</span>
              <span className="px-3 py-1 bg-bg-card text-text-muted text-sm rounded-lg font-mono border border-border-main">EfficientNet</span>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <HiShieldCheck className="text-brand flex-shrink-0" size={20}/>
                <span>Over 95% accuracy in crop disease detection</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <HiShieldCheck className="text-brand flex-shrink-0" size={20}/>
                <span>Works offline in low internet connectivity areas</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <HiShieldCheck className="text-brand flex-shrink-0" size={20}/>
                <span>Multilingual support for regional farmers</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.mediafire.com/file/7ts3k2vooh1nkue/Tomato_AI_Detector.apk/file" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand text-[#060b13] rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_var(--brand-accent)]/20">
                <HiDownload className="text-xl" /> Download App
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent border border-border-main text-text-main rounded-xl font-bold flex items-center justify-center gap-2 hover:border-brand transition-all">
                Learn More <HiArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden glass-card border border-border-main shadow-2xl p-2 z-10">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800" 
                alt="Farmer using AI Plant Detection" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-main/80 via-transparent to-transparent flex items-end p-8">
                <div className="bg-bg-card/90 backdrop-blur-md border border-border-main p-4 rounded-2xl w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-main font-bold">Analysis Status</span>
                    <span className="text-brand font-bold">100%</span>
                  </div>
                  <div className="w-full bg-bg-main rounded-full h-2">
                    <div className="bg-brand h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-text-main mb-4">Other Innovative Solutions</h3>
            <p className="text-text-muted">A collection of our other powerful applications and platforms.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 — Auto-Attendance System */}
            <motion.div 
              className="bg-bg-card rounded-2xl p-6 border border-border-main hover:border-brand/40 transition-all flex flex-col h-full duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center text-xl mb-6">
                <HiUserGroup />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3">Auto-Attendance System</h4>
              <p className="text-text-muted text-sm mb-4 leading-relaxed flex-grow">
                Face recognition–based attendance system for classrooms. Automatically marks students present in real time using AI detection, with an admin dashboard for management.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Python</span>
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Face Recognition</span>
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">FastAPI</span>
              </div>
            </motion.div>

            {/* Project 2 — MPBS */}
            <motion.div 
              className="bg-bg-card rounded-2xl p-6 border border-border-main hover:border-brand/40 transition-all flex flex-col h-full duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center text-xl mb-6">
                <HiArrowRight />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3">Modern Billing SaaS (MPBS)</h4>
              <p className="text-text-muted text-sm mb-4 leading-relaxed flex-grow">
                A high-performance, API-driven billing terminal and POS system with seamless independent product management and rate-limiting.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">React</span>
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Node.js</span>
              </div>
            </motion.div>

            {/* Project 3 — Flood Disaster */}
            <motion.div 
              className="bg-bg-card rounded-2xl p-6 border border-border-main hover:border-brand/40 transition-all flex flex-col h-full duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center text-xl mb-6">
                <HiShieldCheck />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3">Flood Disaster Management System</h4>
              <p className="text-text-muted text-sm mb-4 leading-relaxed flex-grow">
                An advanced disaster management and early warning system built in collaboration with INCOIS.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Machine Learning</span>
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">React</span>
              </div>
            </motion.div>

            {/* Project 4 — Lost 2 Found */}
            <motion.div 
              className="bg-bg-card rounded-2xl p-6 border border-border-main hover:border-brand/40 transition-all flex flex-col h-full duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center text-xl mb-6">
                <HiArrowRight />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3">Lost 2 Found</h4>
              <p className="text-text-muted text-sm mb-4 leading-relaxed flex-grow">
                A community-driven application connecting lost items with their rightful owners using intelligent search matching.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">React Native</span>
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Node.js</span>
              </div>
            </motion.div>

            {/* Project 5 — Placement Portal */}
            <motion.div 
              className="bg-bg-card rounded-2xl p-6 border border-border-main hover:border-brand/40 transition-all flex flex-col h-full duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center text-xl mb-6">
                <HiShieldCheck />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3">College Placement Portal</h4>
              <p className="text-text-muted text-sm mb-4 leading-relaxed flex-grow">
                A centralized serverless application offering secure Phone OTP login for students tracking recruitment and placements.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Firebase</span>
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">React</span>
              </div>
            </motion.div>

            {/* Project 6 — Student Retention */}
            <motion.div 
              className="bg-bg-card rounded-2xl p-6 border border-border-main hover:border-brand/40 transition-all flex flex-col h-full duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center text-xl mb-6">
                <HiUserGroup />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3">Student Retention System</h4>
              <p className="text-text-muted text-sm mb-4 leading-relaxed flex-grow">
                An analytics-driven platform designed to predict and improve student retention rates using machine learning models.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Python</span>
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Analytics</span>
              </div>
            </motion.div>

            {/* Project 7 — Fuel Monitoring */}
            <motion.div 
              className="bg-bg-card rounded-2xl p-6 border border-border-main hover:border-brand/40 transition-all flex flex-col h-full duration-500 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded border border-yellow-500/30">
                In Progress
              </div>
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center text-xl mb-6">
                <HiTrendingUp />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3">Fuel Monitoring System</h4>
              <p className="text-text-muted text-sm mb-4 leading-relaxed flex-grow">
                A real-time IoT and software solution for tracking and analyzing fuel consumption to prevent theft and optimize usage.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">IoT</span>
                <span className="text-xs font-mono bg-bg-main text-text-muted px-2 py-1 rounded border border-border-main">Dashboard</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
