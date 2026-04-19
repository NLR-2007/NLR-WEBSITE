import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiChatAlt2, HiExternalLink } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return alert("Please fill at least your Name and Message.");
    
    const text = `*New Website Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email || 'N/A'}\n*Subject:* ${formData.subject || 'N/A'}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/916302245307?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="bg-bg-card py-24 relative overflow-hidden transition-colors duration-500">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-text-main mb-6">Get in Touch</h2>
            <p className="text-text-muted mb-10 leading-relaxed max-w-lg">
              We are always open to discussions, collaborations, and opportunities to build 
              impactful solutions. If you have any inquiries or would like to work with us, 
              feel free to reach out.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-bg-main border border-border-main text-brand flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_var(--brand-accent)]/10">
                  <HiMail />
                </div>
                <div>
                  <h4 className="font-bold text-text-main mb-1">Email Us</h4>
                  <a href="mailto:nlrgroupofcompany@gmail.com" className="text-text-muted hover:text-brand transition-colors">
                    nlrgroupofcompany@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-bg-main border border-border-main text-brand flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_var(--brand-accent)]/10">
                  <HiPhone />
                </div>
                <div>
                  <h4 className="font-bold text-text-main mb-1">Call Us</h4>
                  <a href="tel:+916302245307" className="text-text-muted hover:text-brand transition-colors">
                    +91 630 224 5307
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-bg-main border border-border-main text-brand flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_var(--brand-accent)]/10">
                  <HiLocationMarker />
                </div>
                <div>
                  <h4 className="font-bold text-text-main mb-1">Location</h4>
                  <p className="text-text-muted">Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand/10 border border-brand/30 mb-10 lg:mb-0 relative overflow-hidden backdrop-blur-sm">
              <h4 className="font-bold text-text-main mb-4 flex items-center gap-2">
                Quick Support <HiChatAlt2 className="text-brand" />
              </h4>
              <p className="text-sm text-text-muted mb-6 leading-relaxed">
                Connect with us on WhatsApp for fast response and technical assistance.
              </p>
              <a 
                href="https://wa.me/916302245307" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-[#060b13] rounded-xl font-bold hover:brightness-110 transition-all shadow-[0_0_20px_var(--brand-accent)]/20"
              >
                <FaWhatsapp size={20} /> Chat with us
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-main p-8 sm:p-10 rounded-3xl border border-border-main shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-bl-[100px] -z-10 blur-xl"></div>
            
            <h3 className="text-2xl font-bold text-text-main mb-8">Send us a message</h3>
            
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-muted ml-1">Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full px-5 py-3.5 bg-bg-card border border-border-main rounded-xl focus:outline-none focus:border-brand/50 text-text-main transition-all text-sm placeholder-base-muted/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-muted ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full px-5 py-3.5 bg-bg-card border border-border-main rounded-xl focus:outline-none focus:border-brand/50 text-text-main transition-all text-sm placeholder-base-muted/40"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-muted ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?" 
                  className="w-full px-5 py-3.5 bg-bg-card border border-border-main rounded-xl focus:outline-none focus:border-brand/50 text-text-main transition-all text-sm placeholder-base-muted/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-text-muted ml-1">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  placeholder="Write your message here..." 
                  className="w-full px-5 py-3.5 bg-bg-card border border-border-main rounded-xl focus:outline-none focus:border-brand/50 text-text-main transition-all text-sm resize-none placeholder-base-muted/40"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand text-[#060b13] rounded-xl font-bold hover:brightness-110 transition-all shadow-[0_0_20px_var(--brand-accent)]/20 flex items-center justify-center gap-2">
                <FaWhatsapp size={20} /> Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
