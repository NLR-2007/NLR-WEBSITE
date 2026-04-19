import React from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiCode, HiDeviceMobile, HiSparkles, HiArrowRight } from 'react-icons/hi';

const services = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Advanced Machine Learning and Computer Vision models tailored to automate processes and unlock deep insights from your data.',
    icon: <HiChip className="w-8 h-8" />,
    features: ['Machine Learning', 'Computer Vision', 'Predictive Analytics']
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'High-performance, modern, and responsive web applications built with the latest technologies to scale your business online.',
    icon: <HiCode className="w-8 h-8" />,
    features: ['React & Full-stack', 'Responsive UI/UX', 'SEO Optimized']
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Sleek, intuitive, and fast mobile applications designed to provide a premium experience for iOS and Android users.',
    icon: <HiDeviceMobile className="w-8 h-8" />,
    features: ['iOS & Android', 'Cross-platform', 'Cloud Integrated']
  },
  {
    id: 'agriculture-tech',
    title: 'Agriculture Technology',
    description: 'AI-power smart farming systems including real-time crop disease detection to maximize yield and minimize losses.',
    icon: <HiSparkles className="w-8 h-8" />,
    features: ['Disease Detection', 'IoT Monitoring', 'Yield Prediction']
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-bg-main relative overflow-hidden py-24 transition-colors duration-500">
      <div className="blob-bg top-40 -left-40 w-96 h-96 bg-brand/10"></div>
      <div className="blob-bg bottom-10 -right-20 w-80 h-80 bg-brand/5" style={{animationDelay: '1s'}}></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-text-main mb-4 text-center"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-text-muted"
          >
            We develop practical, scalable systems designed to solve critical real-world 
            challenges across multiple industries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden group h-full rounded-3xl p-8 glass-card border border-border-main hover:border-brand/40 hover:bg-bg-card transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-brand/10 text-brand group-hover:bg-brand group-hover:text-text-main transition-all duration-300 shadow-[0_0_15px_var(--brand-accent)]/20">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-text-main">
                {item.title}
              </h3>

              <p className="text-text-muted mb-8 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-3 mb-8">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-text-muted">
                    <span className="text-brand mr-3">✓</span> {feature}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand group-hover:brightness-110 transition-all font-mono tracking-wider animate-pulse hover:animate-none"
                >
                  Learn more <HiArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
