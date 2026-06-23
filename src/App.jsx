import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Solutions';
import Projects from './sections/Projects';
import WhyChoose from './sections/WhyChoose';
import Blog from './sections/Blog';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[999] focus:bg-saffron focus:text-white focus:px-4 focus:py-2 focus:font-mono focus:text-sm">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChoose />
        <Blog />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
