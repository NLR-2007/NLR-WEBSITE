import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';
import founderImg from '../assets/founder.jpg'; // Assuming user saves photo here

const About = () => {
  return (
    <section id="about" className="bg-bg-main py-24 transition-colors duration-500">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="heading-lg text-text-main mb-6">About NLR Group</h2>
            <p className="text-lg text-brand mb-8 leading-relaxed font-bold">
              Next Level Revolution in Agriculture & Technology.
            </p>
            <p className="text-text-muted mb-6 leading-relaxed">
              NLR Group is a purpose-driven organization focused on designing and developing technology 
              solutions that address real-world challenges. We operate at the intersection of innovation and 
              practicality, ensuring that every solution we build is not only technically sound but also usable 
              in real-life environments.
            </p>
            <p className="text-text-muted mb-10 leading-relaxed">
              Our approach is rooted in understanding problems at the ground level and building systems that directly 
              address those challenges. We believe that technology should not remain complex or inaccessible—it 
              should be simple, effective, and capable of making a meaningful difference.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-bg-card border border-border-main hover:border-brand/50 transition-colors">
                <h3 className="font-bold text-text-main mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand"></span>
                  Our Vision
                </h3>
                <p className="text-sm text-text-muted">
                  To create a future where technology empowers individuals and communities.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-main hover:border-brand/50 transition-colors">
                <h3 className="font-bold text-text-main mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand"></span>
                  Our Mission
                </h3>
                <p className="text-sm text-text-muted">
                  To develop reliable, scalable, and innovative digital solutions for real-life problems.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(34,197,94,0.15)] aspect-[4/3] group">
                <img 
                    src={aboutImg} 
                    alt="Agricultural Technology Innovation" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-main/60 via-transparent to-transparent"></div>
            </div>
            
            <div className="bg-bg-card p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-border-main transition-colors duration-500">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-brand shadow-[0_0_15px_var(--brand-accent)]/30">
                    <img 
                        src={founderImg} 
                        alt="Nimma Lokesh Reddy - Founder & CEO" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://ui-avatars.com/api/?name=Nimma+Lokesh+Reddy&background=22c55e&color=fff";
                        }}
                    />
                </div>
                <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-text-main mb-2">Founder's Message</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 italic font-medium">
                      "NLR was established with a clear purpose—to build meaningful solutions that address real problems faced by people in everyday life."
                    </p>
                    <div className="flex flex-col">
                        <span className="font-bold text-brand text-lg">Nimma Lokesh Reddy</span>
                        <span className="text-text-muted text-xs font-semibold tracking-wider uppercase mt-1">Founder & CEO, NLR Group</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
