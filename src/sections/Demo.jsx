import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiUpload, HiCheckCircle, HiRefresh } from 'react-icons/hi';

const Demo = () => {
  const [status, setStatus] = useState('idle'); // idle, uploading, analyzing, complete

  const handleUpload = () => {
    setStatus('uploading');
    setTimeout(() => {
      setStatus('analyzing');
      setTimeout(() => {
        setStatus('complete');
      }, 2000);
    }, 1500);
  };

  return (
    <section id="demo" className="bg-bg-card py-24 relative overflow-hidden transition-colors duration-500">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-text-main mb-4"
          >
            Experience Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">AI Technology</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-text-muted"
          >
            Upload a plant image to detect disease instantly using our AI-powered model.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl border border-border-main text-center transition-all duration-500"
          >
            {status === 'idle' && (
              <div 
                className="border-2 border-dashed border-border-main hover:border-brand/50 rounded-2xl p-12 transition-all cursor-pointer group"
                onClick={handleUpload}
              >
                <div className="w-20 h-20 bg-bg-main rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand/10 text-text-muted group-hover:text-brand transition-all">
                  <HiUpload className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">Upload Plant Image</h3>
                <p className="text-text-muted text-sm">Drag and drop or click to browse files (JPG, PNG)</p>
              </div>
            )}

            {(status === 'uploading' || status === 'analyzing') && (
              <div className="py-16">
                <div className="w-24 h-24 border-4 border-border-main border-t-brand rounded-full animate-spin mx-auto mb-8"></div>
                <h3 className="text-2xl font-bold text-text-main mb-2">
                  {status === 'uploading' ? 'Uploading Image...' : 'AI Analyzing Model...'}
                </h3>
                <p className="text-text-muted">
                  {status === 'uploading' ? 'Connecting to secure server.' : 'Running YOLOv8 + EfficientNet inference.'}
                </p>
              </div>
            )}

            {status === 'complete' && (
              <div className="py-8">
                <div className="w-24 h-24 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiCheckCircle className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-2">Analysis Complete!</h3>
                <div className="bg-bg-main border border-border-main rounded-2xl p-6 text-left max-w-md mx-auto mb-8 shadow-[0_0_15px_var(--brand-accent)]/10">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-border-main">
                    <span className="text-text-muted font-bold">Detected Plant:</span>
                    <span className="text-text-main font-bold">Tomato</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-border-main">
                    <span className="text-text-muted font-bold">Status/Disease:</span>
                    <span className="text-red-400 font-bold">Early Blight</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted font-bold">Confidence:</span>
                    <span className="text-brand font-bold">98.4%</span>
                  </div>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 bg-bg-card hover:bg-brand/20 text-text-main border border-border-main rounded-xl font-bold flex items-center justify-center gap-2 mx-auto transition-all"
                >
                  <HiRefresh /> Try Another Image
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
