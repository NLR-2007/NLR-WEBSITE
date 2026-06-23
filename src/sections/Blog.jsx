import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'We Built a Tomato Disease Detector That Identifies 38+ Diseases',
    category: 'Case Study',
    date: 'Mar 2025',
    author: 'Nimma Lokesh Reddy',
    excerpt:
      'Using EfficientNet and a dataset of thousands of real field images, we shipped a mobile app that gives Indian farmers instant crop diagnosis — no internet required for inference.',
    link: 'https://www.linkedin.com/in/nimmalokeshreddy/',
    linkLabel: 'View on LinkedIn →',
  },
  {
    id: 2,
    title: 'What Is GEO and Why Your Business Needs It in 2025',
    category: 'SEO & GEO',
    date: 'Jan 2025',
    author: 'NLR Team',
    excerpt:
      'Generative Engine Optimization makes your brand visible in AI answers — ChatGPT, Gemini, Perplexity. We break down how it works and why traditional SEO alone is no longer enough.',
    link: '#contact',
    linkLabel: 'Talk to us about GEO →',
  },
  {
    id: 3,
    title: 'How We Build Websites That Load in Under One Second',
    category: 'Engineering',
    date: 'Dec 2024',
    author: 'NLR Team',
    excerpt:
      'React, Vite, edge deployment, and aggressive code-splitting — our stack choices and the real Lighthouse scores they produce for client sites.',
    link: '#contact',
    linkLabel: 'Start a project →',
  },
];

const Blog = () => {
  return (
    <section id="blog" aria-labelledby="blog-heading" className="py-[88px] border-b border-line">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 mb-[52px] flex-wrap">
          <h2 id="blog-heading" className="font-display font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1]">
            Latest insights
          </h2>
          <p className="font-mono text-[0.75rem] text-ink-soft max-w-[34ch] text-right max-md:text-left">
            Real work, real lessons — from our projects.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-px bg-line border border-line">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card p-[30px_28px] flex flex-col gap-3 hover:bg-card-hover transition-colors duration-150"
            >
              <div className="flex items-center gap-4 font-mono text-[0.68rem] text-ink-soft tracking-[0.04em]">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.author}</span>
              </div>
              <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-saffron-deep">
                {post.category}
              </span>
              <h3 className="font-display font-bold text-[1.15rem] leading-tight">{post.title}</h3>
              <p className="text-ink-soft text-[0.88rem] flex-1">{post.excerpt}</p>
              <a
                href={post.link}
                target={post.link.startsWith('http') ? '_blank' : undefined}
                rel={post.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-mono text-[0.72rem] text-saffron-deep border-t border-line pt-3 hover:text-ink transition-colors no-underline"
              >
                {post.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
