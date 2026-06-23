import React, { useEffect, useRef } from 'react';

const LegalModal = ({ isOpen, onClose, title, sections }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isOpen, title]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[100]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[85vh] bg-card border border-line z-[101] shadow-2xl flex flex-col"
      >
        <div className="flex justify-between items-center px-8 py-5 border-b border-line shrink-0">
          <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-paper hover:bg-line text-ink-soft flex items-center justify-center border border-line cursor-pointer font-mono text-sm transition-colors"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div ref={contentRef} className="flex-1 overflow-y-auto px-8 py-6">
          <p className="font-mono text-[0.65rem] text-ink-soft/60 tracking-[0.08em] uppercase mb-6">
            Last updated: June 2026
          </p>

          {sections && sections.map((section, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              {section.heading && (
                <h4 className="font-display font-semibold text-[0.95rem] text-ink mb-2">
                  {section.heading}
                </h4>
              )}
              {section.body.split('\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="text-ink-soft text-[0.85rem] leading-[1.7] mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-line px-8 py-4 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 bg-ink text-paper font-mono text-[0.82rem] border-none cursor-pointer hover:bg-saffron-deep transition-colors duration-150"
          >
            I understand
          </button>
        </div>
      </div>
    </>
  );
};

export default LegalModal;
