import React from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiChip, HiShieldCheck, HiScale, HiSearch } from 'react-icons/hi';

const solutions = [
  {
    id: 'kisaan-krushi',
    title: 'Kisaan Krushi (AI Crop Disease Detection)',
    problem: 'Farmers struggle to identify crop diseases early, leading to yield loss.',
    solution: 'AI-based image analysis to detect diseases and provide treatments.',
    impact: 'Improved crop health, reduced financial loss, and expert insights.',
    icon: <HiLightningBolt className="w-6 h-6" />,
    isFlagship: true,
  },
  {
    id: 'fuel-monitoring',
    title: 'Fleet Fuel Monitoring System',
    problem: 'Fuel theft and inefficient usage in logistics.',
    solution: 'Real-time monitoring and theft prevention alerts.',
    impact: 'Reduced operational costs and better fuel control.',
    icon: <HiShieldCheck className="w-6 h-6" />,
  },
  {
    id: 'flood-monitoring',
    title: 'Real-Time Flood Alert System',
    problem: 'Lack of early warning for environmental disasters.',
    solution: 'Environmental monitoring with predictive risk alerts.',
    impact: 'Better disaster preparedness and risk reduction.',
    icon: <HiScale className="w-6 h-6" />,
  },
  {
    id: 'student-retention',
    title: 'Student Retention System',
    problem: 'Difficulty in identifying dropout risks early.',
    solution: 'Tracking engagement and performance to predict risks.',
    impact: 'Improved academic outcomes and retention rates.',
    icon: <HiChip className="w-6 h-6" />,
  },
  {
    id: 'lost-and-found',
    title: 'Smart Lost & Found System',
    problem: 'Inefficient management of lost items in public spaces.',
    solution: 'Centralized platform for reporting and tracking items.',
    impact: 'Increased recovery rates and organized management.',
    icon: <HiSearch className="w-6 h-6" />,
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-slate-50 relative overflow-hidden">
      <div className="blob-bg top-40 -left-40 w-96 h-96 bg-primary-200/30"></div>
      <div className="blob-bg bottom-10 -right-20 w-80 h-80 bg-blue-100/40" style={{animationDelay: '1s'}}></div>
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-slate-900 mb-4"
          >
            Our Intelligent Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-600"
          >
            We develop practical, scalable systems designed to solve critical real-world 
            challenges across multiple industries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden group h-full rounded-3xl p-8 transition-all duration-300 ${
                item.isFlagship 
                  ? 'md:col-span-2 lg:col-span-1 glass-card border-2 border-primary-200 shadow-xl shadow-primary-100 ring-4 ring-primary-50' 
                  : 'glass-card border border-white/50 hover:border-primary-200'
              }`}
            >
              {item.isFlagship && (
                <div className="absolute top-4 right-4 bg-primary-100 text-primary-700 text-[10px] uppercase font-bold px-3 py-1 rounded-full z-10 tracking-widest border border-primary-200">
                  Flagship Product
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                item.isFlagship ? 'bg-primary-600 text-white shadow-lg' : 'bg-primary-50 text-primary-600'
              }`}>
                {item.icon}
              </div>

              <h3 className={`text-xl font-bold mb-4 ${item.isFlagship ? 'text-slate-900' : 'text-slate-800'}`}>
                {item.title}
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400 mb-1">The Problem</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400 mb-1">Our Solution</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400 mb-1">The Impact</h4>
                  <p className="text-sm text-primary-700 font-medium leading-relaxed">{item.impact}</p>
                </div>
              </div>

              <div className="mt-auto">
                <a 
                  href={item.isFlagship ? '#kisaan-krushi' : '#contact'}
                  className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                    item.isFlagship ? 'text-primary-600' : 'text-slate-500 hover:text-primary-600'
                  }`}
                >
                  Learn more <HiLightningBolt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
