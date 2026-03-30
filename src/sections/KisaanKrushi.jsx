import React from 'react';
import { motion } from 'framer-motion';
import { HiCamera, HiFilter, HiSearch, HiClipboardList, HiShieldCheck, HiOutlineSupport, HiTrendingUp } from 'react-icons/hi';

const steps = [
  {
    id: 1,
    title: 'Capture Image',
    description: 'The farmer captures an image of the affected crop using their phone.',
    icon: <HiCamera />,
  },
  {
    id: 2,
    title: 'Analyze with AI',
    description: 'The system analyzes the image using advanced AI models.',
    icon: <HiFilter />,
  },
  {
    id: 3,
    title: 'Identify Disease',
    description: 'The disease is identified instantly along with its cause.',
    icon: <HiSearch />,
  },
  {
    id: 4,
    title: 'Get Treatment',
    description: 'Clear treatment recommendations are provided directly.',
    icon: <HiClipboardList />,
  },
];

const features = [
  'AI-based disease detection',
  'Simple image upload',
  'WhatsApp integration',
  'Instant results',
  'Easy-to-use interface',
];

const benefits = [
  { title: 'Early Detection', icon: <HiShieldCheck />, text: 'Identify diseases before they spread.' },
  { title: 'Improved Yield', icon: <HiTrendingUp />, text: 'Better crop productivity and health.' },
  { title: 'Expert Guidance', icon: <HiOutlineSupport />, text: 'Access expert-level insights anywhere.' },
];

const KisaanKrushi = () => {
  return (
    <section id="kisaan-krushi" className="bg-primary-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold mb-6 tracking-widest uppercase">
              Flagship Product
            </span>
            <h2 className="heading-lg text-slate-900 mb-6">Kisaan Krushi</h2>
            <p className="text-xl font-medium text-primary-700 mb-6 font-sans">
              Smart Farming Support Powered by Artificial Intelligence
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Kisaan Krushi is an intelligent agriculture platform designed to help farmers 
              identify crop diseases quickly and take the right action without delay. 
              It brings advanced technology directly into the hands of farmers in a simple way.
            </p>

            <div className="space-y-4 mb-10">
              <h4 className="font-bold text-slate-800">Key Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                    <HiShieldCheck className="text-primary-600 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
                Get Kisaan Krushi
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl skew-y-[-2deg]"
          >
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800" 
              alt="Farmer using Kisaan Krushi" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
          </motion.div>
        </div>

        {/* How it works */}
        <div className="mb-24 px-4 sm:px-0">
          <div className="text-center mb-16">
            <h3 className="heading-md text-slate-900 mb-4">How It Works</h3>
            <p className="text-slate-500 max-w-xl mx-auto italic">Simple 4-step process to save your crops.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-primary-200 -z-10"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity:0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-primary-50 text-primary-600 flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform relative">
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">
                        {step.id}
                    </div>
                    {step.icon}
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
                <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-white border border-primary-100 shadow-sm text-center"
                >
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 text-2xl mx-auto flex items-center justify-center mb-6">
                        {benefit.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3">{benefit.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{benefit.text}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default KisaanKrushi;
