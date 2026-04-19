import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Solutions';
import WhyChoose from './sections/WhyChoose';
import Projects from './sections/Projects';
import KisaanKrushi from './sections/KisaanKrushi';
import Trust from './sections/Trust';
import Blog from './sections/Blog';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="relative font-sans antialiased min-h-screen transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Projects />
        <KisaanKrushi />
        <Trust />
        <Blog />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
