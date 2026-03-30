import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Solutions from './sections/Solutions';
import WhyChoose from './sections/WhyChoose';
import KisaanKrushi from './sections/KisaanKrushi';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="relative font-sans antialiased text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <WhyChoose />
        <KisaanKrushi />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
