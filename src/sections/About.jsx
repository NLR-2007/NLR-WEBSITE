import React from 'react';
import { motion } from 'framer-motion';
import { HiUserCircle } from 'react-icons/hi';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="heading-lg text-slate-900 mb-6">About NLR Group of Company</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Next Level Revolution in Agriculture & Technology.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              NLR Group of Company is a purpose-driven organization focused on designing and developing technology 
              solutions that address real-world challenges. We operate at the intersection of innovation and 
              practicality, ensuring that every solution we build is not only technically sound but also usable 
              in real-life environments.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Our approach is rooted in understanding problems at the ground level and building systems that directly 
              address those challenges. We believe that technology should not remain complex or inaccessible—it 
              should be simple, effective, and capable of making a meaningful difference.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100/50">
                <h3 className="font-bold text-primary-900 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-600">
                  To create a future where technology empowers individuals and communities.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100/50">
                <h3 className="font-bold text-primary-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-100 aspect-square group">
                <img 
                    src={aboutImg} 
                    alt="Agricultural Technology Innovation" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start gap-6">
                <div className="w-14 h-14 bg-primary-100 flex-shrink-0 rounded-2xl flex items-center justify-center text-primary-600">
                    <HiUserCircle size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Founder's Message</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                      "NLR was established with a clear purpose—to build meaningful solutions that address real problems faced by people in everyday life."
                    </p>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-900">Dr. NLR Founder</span>
                        <span className="text-slate-500 text-xs font-semibold">Founder & CEO, NLR Group of Company</span>
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
