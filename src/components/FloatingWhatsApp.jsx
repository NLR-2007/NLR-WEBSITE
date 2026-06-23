import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/916302245307?text=Hi%20NLR%20Group%2C%20I%27d%20like%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[22px] right-[22px] z-[60] w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:scale-105 transition-all duration-200"
      style={{ borderRadius: '50%' }}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="w-[30px] h-[30px] fill-white">
        <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm0 27.7c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.3-2-2-4.4-2-6.8C3.1 8.9 8.9 3.1 16 3.1S28.9 8.9 28.9 16 23.1 28.5 16 28.5zm7.1-9.5c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.5.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.4 7 6.2 1 .4 1.7.7 2.3.9 1 .3 1.9.3 2.6.2.8-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
