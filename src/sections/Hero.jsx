import React, { useEffect, useRef, useState } from 'react';

const words = ['found.', 'shipped.', 'cited.', 'ranked.', 'used.'];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion.current) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 180);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="pt-[90px] pb-[70px] border-b border-line relative overflow-hidden">
      <div className="wrap">
        <p className="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-ink-soft flex items-center gap-2.5 mb-[26px]">
          <span className="w-[34px] h-px bg-saffron inline-block" />
          NLR Group of Companies · India
        </p>

        <h1 className="font-display font-extrabold text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.02] tracking-[-0.01em] max-w-[13ch]">
          We build software that gets{' '}
          <span
            className="text-saffron-deep inline-block min-w-[7ch] transition-opacity duration-[180ms]"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {words[wordIndex]}
          </span>
        </h1>

        <p className="mt-7 max-w-[54ch] text-ink-soft text-[1.05rem]">
          Freelance development studio for apps, websites, and machine-learning products — plus
          the social media, SEO, and GEO optimization to make sure people <em>and</em> AI engines
          find them. 30+ projects delivered across India and the US in one year.
        </p>

        <div className="mt-[38px] flex gap-3.5 flex-wrap">
          <a
            href="#contact"
            className="font-mono text-[0.82rem] no-underline px-[26px] py-[13px] border border-ink bg-ink text-paper hover:bg-saffron-deep hover:border-saffron-deep transition-all duration-150"
          >
            Start a project
          </a>
          <a
            href="#projects"
            className="font-mono text-[0.82rem] no-underline px-[26px] py-[13px] border border-ink text-ink hover:bg-ink hover:text-paper transition-all duration-150"
          >
            See our work
          </a>
        </div>

        <div className="mt-16 flex gap-0 border border-line bg-card flex-wrap" role="list">
          {[
            { value: '30+', label: 'Projects in 1 year' },
            { value: 'India + US', label: 'Clients served' },
            { value: 'AI-first', label: 'Build philosophy' },
            { value: 'GEO', label: 'Visible to AI search' },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              role="listitem"
              className={`flex-1 min-w-[180px] px-[22px] py-[18px] ${i < arr.length - 1 ? 'border-r border-line' : ''}`}
            >
              <b className="font-display text-2xl font-bold block">{item.value}</b>
              <span className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-ink-soft">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
