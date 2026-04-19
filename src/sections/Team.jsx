import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaTwitter } from 'react-icons/fa';
import founderImg from '../assets/founder.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nimma Lokesh Reddy",
      role: "Founder & CEO",
      image: founderImg,
      bio: "Visionary leader driving NLR Group's mission to create impactful digital solutions for real-world problems. With a strong foundation in agritech and system architecture, he is dedicated to transforming complex challenges into accessible technologies.",
      tagline: "Today's Decision Tomorrow's Future",
      socials: {
        linkedin: "https://www.linkedin.com/in/nimmalokeshreddy/",
        email: "mailto:nimmalokeshreddy24@gmail.com",
        twitter: "https://x.com/NLR_2007"
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-bg-card relative transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-base-border to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg text-text-main mb-4">
              Meet Our Team
            </h2>
            <p className="text-text-muted">
              The passionate individuals driving innovation and excellence at NLR Group.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-main border border-border-main rounded-3xl overflow-hidden hover:border-brand/40 transition-all duration-500 group shadow-lg flex flex-col"
            >
              <div className="aspect-[4/4] overflow-hidden relative shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(/ /g, '+')}&background=22c55e&color=fff&size=512`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-main via-base-main/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Social Links floating on image */}
                <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand text-text-main flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                      <FaLinkedinIn size={18} />
                    </a>
                  )}
                  {member.socials.email && (
                    <a href={member.socials.email} className="w-10 h-10 rounded-full bg-brand text-text-main flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                      <FaEnvelope size={18} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand text-text-main flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                      <FaTwitter size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-8 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-main mb-1 group-hover:text-brand transition-colors">{member.name}</h3>
                <p className="text-brand text-sm font-semibold mb-4 uppercase tracking-wider">{member.role}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {member.bio}
                </p>
                {member.socials.linkedin && (
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-2.5 mb-6 bg-transparent border border-brand text-brand rounded-xl font-medium hover:bg-brand hover:text-text-main transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_15px_var(--brand-accent)]/20 shrink-0"
                  >
                    <FaLinkedinIn /> Connect Profile
                  </a>
                )}
                {member.tagline && (
                  <div className="mt-auto pt-4 border-t border-border-main">
                    <p className="text-brand text-sm font-medium italic">
                      "{member.tagline}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
