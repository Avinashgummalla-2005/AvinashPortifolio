import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import CurrentlyExploring from './components/CurrentlyExploring';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTechFilter, setActiveTechFilter] = useState(null);

  const handleTechSelect = (techId) => {
    setActiveTechFilter(techId);
    if (techId) {
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050509] text-gray-100 relative overflow-x-hidden selection:bg-purple-500/30 selection:text-cyan-300">
      
      {/* 0% to 100% Cinematic Loading Sequence */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Flow */}
      {!isLoading && (
        <>
          {/* Top Thin Scroll Progress Bar */}
          <ScrollProgress />

          {/* Interactive Glowing Cursor for Desktop */}
          <CustomCursor />

          {/* Dynamic Subtle Particle Background */}
          <CanvasBackground />

          {/* Floating Responsive Navbar */}
          <Navbar />

          {/* Main Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <TechStack 
              activeTechFilter={activeTechFilter} 
              onSelectTech={handleTechSelect} 
            />
            <Projects 
              activeTechFilter={activeTechFilter} 
              onClearTechFilter={() => setActiveTechFilter(null)} 
            />
            <Hackathons />
            <Certifications />
            <CurrentlyExploring />
            <Contact />
          </main>

          {/* Minimal Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
