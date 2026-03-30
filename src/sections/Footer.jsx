import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import LegalModal from '../components/LegalModal';


const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    content: 'At NLR Group of Company, we take your privacy seriously.\n\nThis Privacy Policy outlines how we collect, use, and protect your personal data when you interact with our services and platforms. We only collect information necessary to provide and improve our products, such as Kisaan Krushi and our IoT systems.\n\nYour data is encrypted and securely stored, and we do not sell your personal information to third parties.'
  },
  terms: {
    title: 'Terms of Service',
    content: 'These Terms of Service govern your use of the NLR Group of Company website and our digital solutions.\n\nBy accessing our services, you agree to abide by these terms. Our solutions, including Kisaan Krushi, are provided "as is" without warranties. Users must ensure that images and data uploaded comply with applicable laws.\n\nWe reserve the right to suspend accounts that abuse our platform or violate safety protocols.'
  },
  cookies: {
    title: 'Cookie Settings',
    content: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.\n\nEssential cookies are required for basic site functionality, while analytics cookies help us understand how you interact with our website to improve our services.\n\nBy continuing to use our website, you consent to our use of essential cookies. You can manage your preferences through your browser settings.'
  }
};

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (e, type) => {
    e.preventDefault();
    setActiveModal(type);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <h3 className="text-xl font-black text-white tracking-tighter">NLR GROUP OF COMPANY</h3>
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary-500">ESTB 2023</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-400">
              Next Level Revolution in Agriculture & Technology. 
              Solving real-world problems through intelligent digital solutions.
            </p>
            <div className="flex items-center gap-4 text-white/60">
              <a href="#" className="hover:text-primary-400 transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><FaFacebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#kisaan-krushi" className="hover:text-white transition-colors">Kisaan Krushi</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#kisaan-krushi" className="hover:text-white transition-colors">AI Crop Disease</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Fuel Monitoring</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Flood Alert</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Student Retention</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Subscribe</h4>
            <p className="text-xs mb-6 leading-relaxed text-slate-500 font-medium">
              Join our newsletter to stay updated with our latest innovations.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-xs w-full focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary-700 transition-all">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">
            © 2026 NLR Group of Company. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-medium">
            <a href="#" onClick={(e) => openModal(e, 'privacy')} className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" onClick={(e) => openModal(e, 'terms')} className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" onClick={(e) => openModal(e, 'cookies')} className="hover:text-white transition-colors duration-300">Cookie Settings</a>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal ? legalContent[activeModal].title : ''}
        content={activeModal ? legalContent[activeModal].content : ''}
      />
    </footer>
  );
};

export default Footer;
