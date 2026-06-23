import React, { useState, useRef, useEffect } from 'react';

const BOT_NAME = 'Sophie';

const QUICK_REPLIES = {
  main: [
    { label: 'Our services', key: 'services', icon: '⚡' },
    { label: 'View projects', key: 'projects', icon: '🚀' },
    { label: 'What is GEO?', key: 'geo', icon: '🔍' },
    { label: 'Pricing', key: 'pricing', icon: '💰' },
    { label: 'About NLR', key: 'founder', icon: '👤' },
    { label: 'Contact us', key: 'contact', icon: '💬' },
  ],
};

const RESPONSES = {
  services: {
    text: `We offer 5 core services:\n\n→  AI Solutions — custom ML models, computer vision, predictive analytics\n→  Web Development — React, Next.js, full-stack apps, SEO-optimized\n→  App Development — cross-platform mobile apps, PWAs, dashboards\n→  Agriculture Tech — crop disease detection, IoT monitoring, yield prediction\n→  Social Media & SEO — content strategy, technical SEO, and GEO (AI search optimization)`,
    followUp: [
      { label: 'More on AI', key: 'ai_detail', icon: '🧠' },
      { label: 'What is GEO?', key: 'geo', icon: '🔍' },
      { label: 'Pricing', key: 'pricing', icon: '💰' },
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
  },
  ai_detail: {
    text: `Our AI team builds production-grade models — not demos. We've shipped:\n\n•  Tomato Disease Detector (38+ diseases, EfficientNet)\n•  Real-time object detection pipelines\n•  Predictive analytics dashboards\n•  NLP-powered document parsers\n\nWe handle everything: data prep → training → deployment → monitoring. Most models hit 95%+ accuracy.`,
    followUp: [
      { label: 'View projects', key: 'projects', icon: '🚀' },
      { label: 'Contact us', key: 'contact', icon: '💬' },
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
  },
  projects: {
    text: `Our key projects:\n\n🔬  Tomato Disease Detector — AI app detecting 38+ crop diseases in real-time\n\n🌐  NLR Group Website — the site you're on! React + Vite + Tailwind\n\n⛽  Fuel Monitoring System — IoT-based real-time fuel tracking (in progress)\n\n📱  Kisaan Krushi App — agriculture platform for Indian farmers\n\n📊  E-commerce & dashboards — full-stack builds for startups`,
    followUp: [
      { label: 'Tech stack', key: 'tech', icon: '⚙' },
      { label: 'Pricing', key: 'pricing', icon: '💰' },
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
  },
  tech: {
    text: `Our stack:\n\nFrontend — React, Next.js, Tailwind CSS, Vite\nBackend — Node.js, Python, Firebase, PostgreSQL\nAI/ML — TensorFlow, PyTorch, EfficientNet, OpenCV\nMobile — React Native, cross-platform\nDevOps — Vercel, AWS, Docker\nSEO — Ahrefs, Search Console, custom GEO audits\n\nWe pick the right tool for each job.`,
    followUp: [
      { label: 'Contact us', key: 'contact', icon: '💬' },
      { label: 'Pricing', key: 'pricing', icon: '💰' },
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
  },
  geo: {
    text: `GEO = Generative Engine Optimization.\n\nIt's like SEO, but for AI. When someone asks ChatGPT, Gemini, or Perplexity about your industry — GEO makes sure YOUR brand gets cited.\n\nSEO → found on Google\nGEO → found by AI\n\nWe offer both as a combined service. In 2025, you need to be visible to people AND machines.`,
    followUp: [
      { label: 'Our services', key: 'services', icon: '⚡' },
      { label: 'Start a project', key: 'contact', icon: '🚀' },
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
  },
  pricing: {
    text: `Flexible, project-based pricing:\n\n•  Landing pages & small sites — from ₹8,000\n•  Full-stack web apps — from ₹25,000\n•  Mobile apps — from ₹35,000\n•  AI/ML projects — custom quotes\n•  SEO + GEO packages — from ₹5,000/mo\n•  Social media — from ₹4,000/mo\n\nFree consultation included. No hidden fees, no lock-in.`,
    followUp: [
      { label: 'Start a project', key: 'contact', icon: '🚀' },
      { label: 'Our services', key: 'services', icon: '⚡' },
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
  },
  founder: {
    text: `NLR Group was founded by Nimma Lokesh Reddy — developer, AI enthusiast, and agritech advocate based in India.\n\nHe leads every project from concept to deployment, building things that work for real users.\n\n"Today's Decision Tomorrow's Future"\n\nThe team operates across India and the US, working with startups, farmers, and businesses.`,
    followUp: [
      { label: 'View projects', key: 'projects', icon: '🚀' },
      { label: 'Contact us', key: 'contact', icon: '💬' },
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
  },
  contact: {
    text: `Reach us anytime:\n\n📞  +91 79895 05968\n📧  nimmalokeshreddy24@gmail.com\n💬  WhatsApp: +91 63022 45307\n🌐  nlrgroup.in\n📍  India\n\nOr scroll down to the contact form — we reply within a few hours!`,
    followUp: [
      { label: 'Open WhatsApp', key: 'whatsapp', icon: '💬' },
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
  },
  whatsapp: {
    text: `Opening WhatsApp for you!\n\nIf it doesn't open automatically: +91 63022 45307\n\nWe're online during business hours (IST). Talk soon! 👋`,
    followUp: [
      { label: 'Main menu', key: 'restart', icon: '↩' },
    ],
    action: 'whatsapp',
  },
};

const GREETING = {
  text: `Hey! I'm ${BOT_NAME} ✨\n\nHow can I help you today?`,
  followUp: QUICK_REPLIES.main,
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', ...GREETING }]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleQuickReply = (option) => {
    if (option.key === 'restart') {
      setMessages((prev) => [
        ...prev,
        { from: 'user', text: option.label },
        { from: 'bot', ...GREETING },
      ]);
      return;
    }

    const response = RESPONSES[option.key];
    if (!response) return;

    setMessages((prev) => [...prev, { from: 'user', text: option.label }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', ...response }]);

      if (response.action === 'whatsapp') {
        window.open(
          'https://wa.me/916302245307?text=Hi%20NLR%20Group%2C%20I%27d%20like%20to%20discuss%20a%20project',
          '_blank'
        );
      }
    }, 600 + Math.random() * 400);
  };

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-[92px] right-[22px] z-[70] animate-[fadeSlideUp_0.4s_ease] flex items-center gap-3">
          <div
            className="bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)] border border-line/60 px-4 py-2.5 max-w-[180px]"
            style={{ borderRadius: '16px 16px 4px 16px' }}
          >
            <p className="text-[0.75rem] text-ink font-body leading-snug">
              Hi! Need help? 👋
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Chat with Sophie"
            className="w-[56px] h-[56px] bg-gradient-to-br from-saffron to-saffron-deep text-white flex items-center justify-center shadow-[0_4px_20px_rgba(255,138,0,0.4)] hover:shadow-[0_6px_28px_rgba(255,138,0,0.5)] hover:scale-105 transition-all duration-200 cursor-pointer border-none"
            style={{ borderRadius: '50%' }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed bottom-[22px] right-[22px] z-[70] w-[400px] max-sm:w-[calc(100vw-16px)] max-sm:right-2 max-sm:bottom-2 h-[600px] max-sm:h-[85vh] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden animate-[fadeSlideUp_0.25s_ease]"
          style={{ borderRadius: '20px' }}
        >
          <div
            className="relative px-5 pt-5 pb-4 shrink-0"
            style={{ background: 'linear-gradient(135deg, #0F1726 0%, #1a2540 100%)' }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer bg-transparent border-none"
              style={{ borderRadius: '50%' }}
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="flex items-center gap-3.5">
              <div className="relative">
                <div
                  className="w-11 h-11 bg-gradient-to-br from-saffron to-saffron-deep text-white font-display font-bold text-[1rem] flex items-center justify-center"
                  style={{ borderRadius: '14px' }}
                >
                  S
                </div>
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-ink"
                  style={{ borderRadius: '50%' }}
                />
              </div>
              <div>
                <h4 className="text-white font-display font-semibold text-[1rem] leading-tight">
                  {BOT_NAME}
                </h4>
                <span className="text-white/40 text-[0.72rem] font-body">
                  NLR Assistant
                </span>
              </div>
            </div>

            <div className="mt-3.5 flex gap-2">
              <span
                className="text-[0.65rem] font-mono text-white/70 bg-white/10 px-2.5 py-1 tracking-wide"
                style={{ borderRadius: '99px' }}
              >
                ● Online now
              </span>
              <span
                className="text-[0.65rem] font-mono text-white/50 bg-white/5 px-2.5 py-1"
                style={{ borderRadius: '99px' }}
              >
                Replies instantly
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5 bg-[#F4F5F7]">
            <div className="text-center">
              <span
                className="inline-block text-[0.65rem] font-mono text-ink-soft/60 bg-white/80 px-3 py-1 shadow-sm"
                style={{ borderRadius: '99px' }}
              >
                Today, {timeStr}
              </span>
            </div>

            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'bot' ? '' : 'flex justify-end'}>
                {msg.from === 'bot' ? (
                  <div className="flex gap-2.5 items-end">
                    <div
                      className="w-7 h-7 bg-gradient-to-br from-saffron to-saffron-deep text-white font-display font-bold text-[0.6rem] flex items-center justify-center shrink-0"
                      style={{ borderRadius: '10px' }}
                    >
                      S
                    </div>
                    <div className="max-w-[82%]">
                      <div
                        className="bg-white px-4 py-3 text-[0.82rem] text-ink leading-[1.65] whitespace-pre-line shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                        style={{ borderRadius: '4px 16px 16px 16px' }}
                      >
                        {msg.text}
                      </div>
                      {msg.followUp && i === messages.length - 1 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {msg.followUp.map((opt) => (
                            <button
                              key={opt.key}
                              onClick={() => handleQuickReply(opt)}
                              className="bg-white border border-line/70 px-3.5 py-2 text-[0.74rem] font-body text-ink hover:border-saffron hover:text-saffron-deep hover:shadow-[0_2px_8px_rgba(255,138,0,0.12)] transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-sm"
                              style={{ borderRadius: '12px' }}
                            >
                              <span className="text-[0.72rem]">{opt.icon}</span>
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    className="bg-gradient-to-br from-saffron to-saffron-deep text-white px-4 py-2.5 max-w-[78%] text-[0.82rem] leading-[1.55] shadow-[0_2px_8px_rgba(255,138,0,0.25)]"
                    style={{ borderRadius: '16px 16px 4px 16px' }}
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-end">
                <div
                  className="w-7 h-7 bg-gradient-to-br from-saffron to-saffron-deep text-white font-display font-bold text-[0.6rem] flex items-center justify-center shrink-0"
                  style={{ borderRadius: '10px' }}
                >
                  S
                </div>
                <div
                  className="bg-white px-5 py-3.5 flex items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                  style={{ borderRadius: '4px 16px 16px 16px' }}
                >
                  <span className="w-2 h-2 bg-saffron/50 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-saffron/50 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-saffron/50 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="bg-white px-4 py-3.5 border-t border-line/40 shrink-0 flex items-center gap-3">
            <div
              className="flex-1 bg-[#F4F5F7] px-4 py-2.5 text-[0.78rem] text-ink-soft/60 font-body cursor-default select-none"
              style={{ borderRadius: '12px' }}
            >
              Pick an option above to chat...
            </div>
            <a
              href="https://wa.me/916302245307?text=Hi%20NLR%20Group%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform no-underline"
              style={{ borderRadius: '12px' }}
              aria-label="Chat on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.932 1.395 5.608L.05 23.65a.5.5 0 0 0 .612.612l5.994-1.33A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.656-.505-5.2-1.44l-.372-.222-3.86.857.87-3.79-.244-.388A9.71 9.71 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12s-4.365 9.75-9.75 9.75z"/>
              </svg>
            </a>
          </div>

          <div className="bg-white px-4 pb-3 pt-0 shrink-0">
            <p className="text-[0.6rem] text-ink-soft/40 text-center font-mono">
              Powered by NLR Group · <a href="#contact" className="text-saffron-deep/60 hover:text-saffron-deep transition-colors no-underline" onClick={() => setIsOpen(false)}>Contact form</a>
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default ChatBot;
