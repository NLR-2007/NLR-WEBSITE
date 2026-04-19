import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCalendar, HiUser } from 'react-icons/hi';

const blogPosts = [
  {
    id: 1,
    title: 'How AI is Transforming Agriculture in 2024',
    category: 'AI & Agriculture',
    date: 'Oct 12, 2023',
    author: 'NLR Team',
    excerpt: 'Discover how computer vision and machine learning models are helping farmers detect crop diseases early and improve yield output.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'The Future of Web Development: What to Expect',
    category: 'Web Technology',
    date: 'Sep 28, 2023',
    author: 'Nimma Lokesh Reddy',
    excerpt: 'From server components to AI-assisted coding, explore the trends that are shaping the future of high-performance web applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Why Startups Need Scalable Architecture from Day One',
    category: 'Engineering',
    date: 'Aug 15, 2023',
    author: 'NLR Team',
    excerpt: 'Learn the importance of building robust backend systems that can handle rapid growth without compromising performance or security.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="bg-bg-card py-24 relative overflow-hidden transition-colors duration-500">
      <div className="section-container">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg text-text-main mb-4"
            >
              Latest Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">News</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-muted"
            >
              Read our latest articles on AI, software development, and technological innovations shaping the modern world.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#blog" 
            className="hidden md:flex items-center gap-2 text-brand hover:brightness-110 font-bold transition-all"
          >
            View All Posts <HiArrowRight />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-main rounded-3xl overflow-hidden border border-border-main hover:border-brand/40 group transition-all duration-500 shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-bg-card/80 backdrop-blur-sm text-brand text-xs font-bold px-3 py-1 rounded-full border border-brand/30">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-text-muted mb-4 font-medium transition-colors duration-300">
                  <div className="flex items-center gap-1">
                    <HiCalendar className="text-brand"/> {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <HiUser className="text-brand"/> {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed mb-6 transition-colors duration-300">
                  {post.excerpt}
                </p>
                
                <a href={`#blog-${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand group-hover:gap-3 transition-all">
                  Read Article <HiArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#blog" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl border border-border-main text-text-main font-bold hover:bg-bg-card transition-colors">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
