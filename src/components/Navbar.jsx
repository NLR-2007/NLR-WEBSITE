import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSun, FaMoon, FaBolt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, setAppTheme } = useTheme();
  
  const themes = ['light', 'dark', 'nlr'];
  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setAppTheme(themes[nextIndex]);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Projects', href: '#projects' },
    { name: 'Kisaan Krushi', href: '#kisaan-krushi' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-main/80 backdrop-blur-md shadow-sm py-3 border-b border-border-main/30' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <a href="#home" className="flex flex-col justify-center">
          <span className={`font-black text-xl lg:text-2xl tracking-tighter transition-colors ${
            isScrolled ? 'text-text-main' : 'text-text-main/90'
          }`}>
            NLR GROUP
          </span>
          <span className={`text-[10px] font-bold tracking-[0.2em] transition-colors ${
            isScrolled ? 'text-brand' : 'text-brand/90'
          }`}>
            ESTB 2023
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={cycleTheme}
            className="w-10 h-10 rounded-full bg-bg-card border border-border-main/50 text-text-muted hover:text-brand hover:border-brand/40 transition-all flex items-center justify-center shrink-0 shadow-sm"
            title={`Toggle Theme (Current: ${theme})`}
          >
            {theme === 'light' && <FaSun size={18} />}
            {theme === 'dark' && <FaMoon size={18} />}
            {theme === 'nlr' && <FaBolt size={18} className="text-brand filter drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />}
          </button>

          <a
            href="#contact"
            className="bg-brand text-[var(--bg-main)] px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-[0_0_15px_var(--brand-accent)] opacity-90 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={cycleTheme}
            className="text-text-muted hover:text-brand transition-all p-2"
          >
            {theme === 'light' && <FaSun size={22} />}
            {theme === 'dark' && <FaMoon size={22} />}
            {theme === 'nlr' && <FaBolt size={22} className="text-brand drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" />}
          </button>
          <button
            className="text-text-main p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-card border-b border-border-main overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    // Close menu after a very short delay to ensure scroll starts
                    setTimeout(() => setIsMobileMenuOpen(false), 150);
                  }}
                  className="text-lg font-medium text-text-main hover:text-brand px-2 py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  setTimeout(() => setIsMobileMenuOpen(false), 150);
                }}
                className="bg-brand text-[var(--bg-main)] text-center py-3 rounded-xl font-bold mt-2 hover:brightness-110"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
