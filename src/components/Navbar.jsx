import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Approach', href: '#approach' },
  { name: 'Team', href: '#team' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-paper/90 backdrop-blur-[12px] border-b border-line">
      <div className="wrap grid grid-cols-[auto_1fr_auto] items-center h-16 gap-6">
        <a
          href="#home"
          className="font-display font-extrabold text-[1.15rem] tracking-[0.02em] no-underline flex items-center gap-2.5"
        >
          <span className="w-2.5 h-2.5 bg-saffron inline-block" />
          NLR&nbsp;GROUP
        </a>

        <ul className="hidden md:flex justify-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="no-underline text-[0.85rem] font-medium text-ink-soft hover:text-ink transition-colors duration-150"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex justify-end">
          <a
            href="#contact"
            className="font-mono text-[0.78rem] no-underline bg-ink text-paper px-[18px] py-[9px] hover:bg-saffron-deep transition-colors duration-150"
          >
            Start a project →
          </a>
        </div>

        <button
          className="md:hidden text-ink p-2 justify-self-end cursor-pointer bg-transparent border-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-line">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setTimeout(() => setIsMobileMenuOpen(false), 150)}
                className="text-base font-medium text-ink px-3 py-2.5 hover:bg-paper transition-colors no-underline"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setTimeout(() => setIsMobileMenuOpen(false), 150)}
              className="font-mono text-[0.82rem] bg-ink text-paper text-center py-3 mt-2 hover:bg-saffron-deep transition-colors no-underline"
            >
              Start a project →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
