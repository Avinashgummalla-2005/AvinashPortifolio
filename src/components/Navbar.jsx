import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'currently-exploring', label: 'Exploring' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionElements = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`pointer-events-auto rounded-full px-5 py-2.5 transition-all duration-300 backdrop-blur-xl border flex items-center justify-between gap-4 max-w-6xl w-full ${
          scrolled
            ? 'bg-[#090914]/90 border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-[#0b0b18]/60 border-white/10 shadow-lg'
        }`}
      >
        {/* Brand Identity */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 group text-left"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.4)]">
            <div className="w-full h-full bg-[#050509] rounded-full flex items-center justify-center">
              <Code2 className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-bold text-white tracking-wide block leading-none">
              Avinash Gummalla
            </span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
              AI & ML DEVELOPER
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 font-bold'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900/60 to-cyan-950/80 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="hidden sm:inline-flex px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 text-gray-300 hover:text-white border border-white/10"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto fixed top-20 left-4 right-4 z-40 bg-[#090915]/95 backdrop-blur-2xl rounded-2xl p-6 border border-cyan-500/30 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-900/40 to-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="w-full py-3 rounded-xl bg-cyan-500 text-black text-center text-xs font-bold block"
                >
                  Contact Avinash
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
