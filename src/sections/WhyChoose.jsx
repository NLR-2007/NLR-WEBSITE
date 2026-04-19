import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiLightBulb, HiPlusCircle, HiUserGroup, HiTrendingUp, HiSparkles } from 'react-icons/hi';

const reasons = [
  {
    title: 'Problem-First Approach',
    description: 'We don\'t just build technology; we solve actual ground-level challenges based on real-world data.',
    icon: <HiLightBulb />,
  },
  {
    title: 'AI + Practical Usage',
    description: 'Our systems combine advanced artificial intelligence with simple, intuitive interfaces for everyday use.',
    icon: <HiSparkles />,
  },
  {
    title: 'Scalable Systems',
    description: 'Built to grow with your needs, our architectures are robust enough to handle large-scale deployments.',
    icon: <HiTrendingUp />,
  },
  {
    title: 'Real-World Impact',
    description: 'Every solution we deliver is measured by the tangible value and efficiency it creates for the end-user.',
    icon: <HiPlusCircle />,
  },
  {
    title: 'User-Friendly Design',
    description: 'We ensure that complex backend technology is hidden behind a clean and accessible user experience.',
    icon: <HiUserGroup />,
  },
  {
    title: 'Continuous Innovation',
    description: 'NLR is committed to constant improvement, ensuring our solutions remain at the cutting edge of tech.',
    icon: <HiCheckCircle />,
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="bg-bg-main relative overflow-hidden transition-colors duration-500">
      <div className="blob-bg top-0 right-0 w-[500px] h-[500px] bg-brand/5" style={{animationDelay: '1.5s'}}></div>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="heading-lg text-text-main mb-6">Why Choose NLR?</h2>
            <p className="text-text-muted mb-8 leading-relaxed transition-colors duration-300">
              Choosing the right technology partner is critical to achieving meaningful results. 
              At NLR, we focus on delivering solutions that are practical, reliable, and built 
              for real-world use.
            </p>
            <div className="p-8 rounded-3xl bg-brand text-[#060b13] shadow-xl shadow-brand/20 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-[#060b13]/80 text-sm leading-relaxed mb-6">
                    "We don't just build systems; we create solutions that genuinely improve efficiency, 
                    productivity, and decision-making for everyone."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-black/20 bg-black/10 flex items-center justify-center">
                        <span className="font-bold text-xs">NLR</span>
                    </div>
                    <span className="font-bold text-sm">Next Level Revolution</span>
                </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl glass-card border border-border-main transition-all duration-500 hover:border-brand/40"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center text-2xl mb-6">
                    {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-text-main mb-3">{reason.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
