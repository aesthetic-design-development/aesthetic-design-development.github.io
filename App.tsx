
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber-500/30">
      <Header activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="projects" className="py-24 bg-slate-900/50">
          <ProjectSection />
        </section>

        <section id="services" className="py-24">
          <Services />
        </section>

        <section id="contact" className="py-24 bg-slate-900/50">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
