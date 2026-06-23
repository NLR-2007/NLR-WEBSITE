import React from 'react';

const approaches = [
  {
    title: 'Build for the AI era',
    description:
      'Search is moving from blue links to AI answers. Everything we ship is structured so that both Google and generative engines can read, cite, and recommend it.',
  },
  {
    title: 'Working software, early',
    description:
      'You see a running version in the first milestone, not a slide deck. Every project ships in stages you can test yourself.',
  },
  {
    title: 'One team, full stack',
    description:
      'Design, code, ML, and growth under one roof — no hand-offs between agencies, no "that\'s the other vendor\'s problem."',
  },
  {
    title: 'Problem-first approach',
    description:
      'We don\'t just build technology; we solve actual ground-level challenges based on real-world data and direct user feedback.',
  },
  {
    title: 'Scalable systems',
    description:
      'Built to grow with your needs, our architectures are robust enough to handle large-scale deployments without compromise.',
  },
  {
    title: 'Continuous innovation',
    description:
      'NLR is committed to constant improvement, ensuring our solutions remain at the cutting edge of technology.',
  },
];

const WhyChoose = () => {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="py-[88px] border-b border-line">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 mb-[52px] flex-wrap">
          <h2 id="approach-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1]">
            How we work
          </h2>
          <p className="font-mono text-[0.75rem] text-ink-soft max-w-[34ch] text-right max-md:text-left">
            The part most agencies skip.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
          {approaches.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-[1.1rem] font-bold mb-2.5 flex gap-2.5 items-baseline">
                <span className="text-saffron">→</span>
                {item.title}
              </h3>
              <p className="text-ink-soft text-[0.93rem]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
