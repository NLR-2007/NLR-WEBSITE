import React from 'react';
import founderImg from '../assets/founder.jpg';

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-[88px] border-b border-line">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 mb-[52px] flex-wrap">
          <h2 id="about-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1]">
            About NLR Group
          </h2>
          <p className="font-mono text-[0.75rem] text-ink-soft max-w-[34ch] text-right max-md:text-left">
            Next Level Revolution in Agriculture & Technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-ink-soft text-[0.95rem] mb-6 leading-relaxed">
              NLR Group is a purpose-driven organization focused on designing and developing technology
              solutions that address real-world challenges. We operate at the intersection of innovation and
              practicality, ensuring that every solution we build is not only technically sound but also usable
              in real-life environments.
            </p>
            <p className="text-ink-soft text-[0.95rem] mb-10 leading-relaxed">
              Our approach is rooted in understanding problems at the ground level and building systems that directly
              address those challenges. We believe that technology should not remain complex or inaccessible — it
              should be simple, effective, and capable of making a meaningful difference.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
              <div className="bg-card p-6">
                <h3 className="font-display font-bold text-[1rem] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-saffron inline-block" />
                  Our Vision
                </h3>
                <p className="text-[0.88rem] text-ink-soft">
                  To create a future where technology empowers individuals and communities.
                </p>
              </div>
              <div className="bg-card p-6">
                <h3 className="font-display font-bold text-[1rem] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-saffron inline-block" />
                  Our Mission
                </h3>
                <p className="text-[0.88rem] text-ink-soft">
                  To develop reliable, scalable, and innovative digital solutions for real-life problems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-line p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden border-2 border-saffron">
              <img
                src={founderImg}
                alt="Nimma Lokesh Reddy - Founder & CEO"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://ui-avatars.com/api/?name=Nimma+Lokesh+Reddy&background=FF8A00&color=fff';
                }}
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-display text-xl font-bold text-ink mb-2">Founder's Message</h3>
              <p className="text-ink-soft text-[0.88rem] leading-relaxed mb-4 italic">
                "NLR was established with a clear purpose — to build meaningful solutions that address real
                problems faced by people in everyday life."
              </p>
              <span className="font-display font-bold text-saffron-deep text-lg block">
                Nimma Lokesh Reddy
              </span>
              <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-ink-soft mt-1 block">
                Founder & CEO, NLR Group
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
