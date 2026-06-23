import React from 'react';

const projects = [
  {
    kind: 'AI · Agriculture',
    title: 'Plant Disease Detection',
    description:
      'EfficientNet ensemble with a custom learnable fusion architecture, tested for cross-domain generalization on real-world field datasets.',
    stack: 'EfficientNet B0–B2 · PyTorch · PlantDoc',
  },
  {
    kind: 'AI · Agriculture',
    title: 'Kisaan Krushi',
    description:
      'An agricultural AI companion for smallholder farmers in India — research-backed, with a formal proposal submitted to national research funding.',
    stack: 'AI/ML · Research · AgriTech',
  },
  {
    kind: 'Web App · Disaster Tech',
    title: 'Flood Disaster Management System',
    description:
      'End-to-end flood response platform — incident reporting, shelter and resource tracking, and coordination dashboards for authorities and citizens.',
    stack: 'Full-stack · Dashboards · Alerts',
  },
  {
    kind: 'Web App · Campus',
    title: 'Lost2Found',
    description:
      'Campus lost-and-found platform with OTP verification over a Telegram bot, item matching, and an admin workflow built for real student use.',
    stack: 'Flask · MySQL · Telegram Bot API',
  },
  {
    kind: 'SaaS · Billing',
    title: 'Modern Billing SaaS (MPBS)',
    description:
      'A high-performance, API-driven billing terminal and POS system with seamless independent product management and rate-limiting.',
    stack: 'React · Node.js · REST APIs',
  },
  {
    kind: 'AI · EdTech',
    title: 'Auto-Attendance System',
    description:
      'Face recognition–based attendance system for classrooms. Automatically marks students present in real time using AI detection.',
    stack: 'Python · Face Recognition · FastAPI',
  },
  {
    kind: 'EdTech · Platform',
    title: 'College Placement Portal',
    description:
      'A centralized serverless application offering secure Phone OTP login for students tracking recruitment and placements.',
    stack: 'Firebase · React · Auth',
  },
  {
    kind: 'Analytics · EdTech',
    title: 'Student Retention System',
    description:
      'An analytics-driven platform designed to predict and improve student retention rates using machine learning models.',
    stack: 'Python · Analytics · ML',
  },
  {
    kind: 'IoT · Monitoring',
    title: 'Fuel Monitoring System',
    description:
      'A real-time IoT and software solution for tracking and analyzing fuel consumption to prevent theft and optimize usage.',
    stack: 'IoT · Dashboard · Real-time',
    inProgress: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-[88px] border-b border-line">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 mb-[52px] flex-wrap">
          <h2 id="projects-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1]">
            Selected work
          </h2>
          <p className="font-mono text-[0.75rem] text-ink-soft max-w-[34ch] text-right max-md:text-left">
            Real projects, shipped and working.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-px bg-line border border-line">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card p-[30px_28px] flex flex-col gap-3 hover:bg-card-hover transition-colors duration-150 relative"
            >
              {project.inProgress && (
                <span className="absolute top-4 right-4 font-mono text-[0.62rem] tracking-[0.1em] uppercase bg-saffron/10 text-saffron-deep px-2 py-0.5 border border-saffron/30">
                  In Progress
                </span>
              )}
              <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-saffron-deep">
                {project.kind}
              </span>
              <h3 className="font-display font-bold text-[1.25rem]">{project.title}</h3>
              <p className="text-ink-soft text-[0.92rem] flex-1">{project.description}</p>
              <span className="font-mono text-[0.7rem] text-ink-soft border-t border-line pt-3">
                {project.stack}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
