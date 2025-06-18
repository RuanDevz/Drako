import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Method from './components/Method';
import Discord from './components/Discord';
import Consultoria from './components/Consultoria';
import Under from './components/Under';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <About />
      <Method />
      <Discord />
      <Consultoria />
      <Under />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;