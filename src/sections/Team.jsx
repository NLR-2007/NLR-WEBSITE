import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaTwitter } from 'react-icons/fa';
import founderImg from '../assets/founder.jpg';

const Team = () => {
  return (
    <section id="team" aria-labelledby="team-heading" className="py-[88px] border-b border-line">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 mb-[52px] flex-wrap">
          <h2 id="team-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1]">
            Meet the team
          </h2>
          <p className="font-mono text-[0.75rem] text-ink-soft max-w-[34ch] text-right max-md:text-left">
            The people behind the work.
          </p>
        </div>

        <div className="grid md:grid-cols-[340px_1fr] border border-line bg-card">
          <div className="aspect-[3/4] md:aspect-auto overflow-hidden">
            <img
              src={founderImg}
              alt="Nimma Lokesh Reddy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://ui-avatars.com/api/?name=Nimma+Lokesh+Reddy&background=FF8A00&color=fff&size=512';
              }}
            />
          </div>

          <div className="p-10 max-sm:p-6 flex flex-col justify-center">
            <span className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-saffron-deep mb-2">
              Founder & CEO
            </span>
            <h3 className="font-display font-bold text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] mb-4">
              Nimma Lokesh Reddy
            </h3>
            <p className="text-ink-soft text-[0.95rem] leading-[1.7] mb-6 max-w-[52ch]">
              Visionary leader driving NLR Group's mission to create impactful digital solutions for real-world problems. With a strong foundation in agritech and system architecture, he leads every project from concept to deployment.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 max-w-[360px]">
              <div className="border border-line p-4">
                <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ink-soft block mb-1">Focus</span>
                <span className="font-display font-semibold text-[0.9rem]">AI & Agritech</span>
              </div>
              <div className="border border-line p-4">
                <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ink-soft block mb-1">Based in</span>
                <span className="font-display font-semibold text-[0.9rem]">India</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.linkedin.com/in/nimmalokeshreddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ink text-paper flex items-center justify-center hover:bg-saffron-deep transition-colors text-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:nimmalokeshreddy24@gmail.com"
                className="w-10 h-10 bg-ink text-paper flex items-center justify-center hover:bg-saffron-deep transition-colors text-sm"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://x.com/NLR_2007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ink text-paper flex items-center justify-center hover:bg-saffron-deep transition-colors text-sm"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>

            <div className="border-t border-line pt-4">
              <p className="font-mono text-[0.75rem] text-saffron-deep italic">
                "Today's Decision Tomorrow's Future"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
