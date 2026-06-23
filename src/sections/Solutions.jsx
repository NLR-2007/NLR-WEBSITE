import React, { useState } from 'react';

const services = [
  {
    id: '01',
    title: 'AI Solutions',
    subtitle: 'Intelligence, automated',
    description:
      'We build custom AI systems that solve real business problems — not demos, not proofs of concept, but production-grade models deployed where they matter. From computer vision pipelines that inspect products on a factory line to NLP engines that parse thousands of documents in seconds, we handle the full lifecycle: data collection, model training, optimization, deployment, and monitoring.',
    deliverables: ['Custom ML model development', 'Data pipeline architecture', 'Model deployment & monitoring', 'AI strategy consulting'],
    process: 'Audit → Data prep → Train → Validate → Deploy → Monitor',
    tags: ['Machine Learning', 'Computer Vision', 'NLP', 'Predictive Analytics', 'Python', 'TensorFlow'],
    highlight: '95%+ model accuracy',
  },
  {
    id: '02',
    title: 'Web Development',
    subtitle: 'Fast, modern, found',
    description:
      'Every site we build is engineered for speed, accessibility, and search visibility from the first commit. We use React, Next.js, and modern tooling to create sites that load in under a second, score 90+ on Lighthouse, and convert visitors into customers. Whether it\'s a marketing site, a SaaS dashboard, or a full e-commerce platform — we handle frontend, backend, database, and deployment.',
    deliverables: ['Responsive websites & landing pages', 'Full-stack web applications', 'E-commerce platforms', 'CMS integration & custom dashboards'],
    process: 'Wireframe → Design → Develop → Test → Launch → Optimize',
    tags: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'SEO Optimized'],
    highlight: 'Sub-second load times',
  },
  {
    id: '03',
    title: 'App Development',
    subtitle: 'Ship to every screen',
    description:
      'We build cross-platform mobile apps and progressive web apps that work seamlessly on iOS, Android, and the browser — from a single codebase. Real features for real users: authentication flows, admin panels, payment integrations, push notifications, and offline support. We also build internal tools and dashboards that save your team hours every week.',
    deliverables: ['Cross-platform mobile apps', 'Progressive web apps (PWA)', 'Admin panels & internal tools', 'API design & backend services'],
    process: 'Prototype → Build → Test on devices → Beta → Ship → Iterate',
    tags: ['React Native', 'Cross-platform', 'REST APIs', 'Firebase', 'Cloud Integrated', 'Payments'],
    highlight: 'iOS + Android + Web',
  },
  {
    id: '04',
    title: 'Agriculture Technology',
    subtitle: 'AI meets the field',
    description:
      'Our flagship agritech work combines deep learning with real-world farming. The Tomato Disease Detector — trained on thousands of field images — identifies 38+ diseases in real time, giving farmers instant diagnosis and treatment recommendations via a simple mobile app. We also build IoT-based monitoring systems for soil health, weather tracking, and yield prediction to help farmers make data-driven decisions.',
    deliverables: ['Crop disease detection apps', 'IoT sensor integration', 'Yield prediction models', 'Farmer-facing mobile tools'],
    process: 'Field research → Data collection → Model training → App build → Farmer testing → Deploy',
    tags: ['Disease Detection', 'IoT Monitoring', 'Yield Prediction', 'EfficientNet', 'Mobile-first', 'Real-time'],
    highlight: '38+ crop diseases detected',
  },
  {
    id: '05',
    title: 'Social Media & SEO',
    subtitle: 'Visible to people and AI',
    description:
      'We don\'t just build products — we make sure people find them. Our SEO work covers technical audits, on-page optimization, content strategy, and link building. But we go further: Generative Engine Optimization (GEO) ensures your brand shows up when people ask ChatGPT, Gemini, or Perplexity. On the social side, we handle content calendars, post design, copywriting, scheduling, and analytics across all major platforms.',
    deliverables: ['Technical SEO audits & fixes', 'GEO (AI search optimization)', 'Social media management', 'Content strategy & copywriting'],
    process: 'Audit → Strategy → Create → Publish → Analyze → Refine',
    tags: ['Content Strategy', 'Technical SEO', 'GEO Audits', 'AI Visibility', 'Social Media', 'Analytics'],
    highlight: 'SEO + GEO combined',
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" aria-labelledby="services-heading" className="py-[88px] border-b border-line">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 mb-[52px] flex-wrap">
          <div>
            <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-saffron-deep block mb-3">
              Services
            </span>
            <h2 id="services-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1]">
              What we do
            </h2>
          </div>
          <p className="font-mono text-[0.75rem] text-ink-soft max-w-[34ch] text-right max-md:text-left">
            Five service lines. One team.
            <br />
            Tap a row to explore.
          </p>
        </div>

        <div className="border-t-2 border-ink">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.id}
                className={`border-b border-line transition-colors duration-150 ${isOpen ? 'bg-card' : ''}`}
              >
                <button
                  className="w-full grid grid-cols-[48px_1fr_auto] max-sm:grid-cols-[36px_1fr_auto] items-center gap-5 max-sm:gap-3 px-2 py-7 text-left cursor-pointer bg-transparent border-none hover:bg-card transition-colors duration-150"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span className="font-mono text-[0.72rem] text-ink-soft">{service.id}</span>
                  <div className="flex items-baseline gap-4 max-sm:flex-col max-sm:gap-0.5">
                    <span
                      className={`font-display font-bold text-[clamp(1.15rem,2.6vw,1.65rem)] transition-colors duration-150 ${
                        isOpen ? 'text-saffron-deep' : ''
                      }`}
                    >
                      {service.title}
                    </span>
                    <span className="font-mono text-[0.72rem] text-ink-soft hidden sm:inline">
                      — {service.subtitle}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-[1.4rem] leading-none w-8 h-8 flex items-center justify-center border border-line transition-all duration-200 ${
                      isOpen
                        ? 'rotate-45 text-paper bg-saffron-deep border-saffron-deep'
                        : 'text-ink-soft bg-transparent'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '600px' : '0px' }}
                >
                  <div className="px-2 pb-10 pl-[68px] max-sm:pl-2">
                    <p className="text-ink-soft text-[0.92rem] leading-[1.75] max-w-[68ch] mb-6">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-[1fr_1fr_auto] gap-6 items-start">
                      <div>
                        <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-ink-soft block mb-3">
                          What you get
                        </span>
                        <ul className="space-y-2">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-[0.88rem] text-ink">
                              <span className="text-saffron-deep mt-0.5 shrink-0">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-ink-soft block mb-3">
                          Our process
                        </span>
                        <p className="font-mono text-[0.78rem] text-ink-soft leading-[1.8] border-l-2 border-saffron/30 pl-4">
                          {service.process}
                        </p>
                      </div>

                      <div className="border border-saffron/20 bg-card-hover px-5 py-4 max-md:w-fit">
                        <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ink-soft block mb-1">
                          Highlight
                        </span>
                        <span className="font-display font-bold text-[0.95rem] text-saffron-deep">
                          {service.highlight}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap mt-6 pt-5 border-t border-line">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[0.66rem] border border-line bg-paper px-3 py-1.5 tracking-[0.04em] text-ink-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
