import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles, ChevronRight, Send } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 250;

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
      const offset = 30;
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
    <>
      {/* 1. TOP-LEFT FLOATING BRANDING GLASS BADGE */}
      <div className="fixed top-2.5 sm:top-5 left-2.5 sm:left-5 z-40 pointer-events-auto">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-1.5 sm:gap-2.5 px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-[#080812]/85 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)] group hover:border-amber-500/40 transition-all duration-300"
        >
          <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-amber-500 via-purple-600 to-cyan-400 p-[1px] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.4)] shrink-0">
            <div className="w-full h-full bg-[#050509] rounded-full flex items-center justify-center">
              <Code2 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="text-left">
            <span className="text-[9px] sm:text-xs font-bold text-white tracking-wide block leading-none">
              Avinash Gummalla
            </span>
            <span className="text-[7px] sm:text-[9px] font-mono text-cyan-400 tracking-wider block">
              AI & ML DEVELOPER
            </span>
          </div>
        </button>
      </div>

      {/* 2. TOP-RIGHT COMPACT FLOATING CAPSULE HEADER (DESKTOP) */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 sm:top-5 right-4 sm:right-6 z-40 hidden lg:flex items-center gap-1 bg-[#080812]/85 backdrop-blur-xl border border-amber-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.8)] rounded-full p-1.5 pointer-events-auto"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-200 ${
                isActive
                  ? 'text-amber-200 font-bold'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="topRightNavActiveIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-950/50 via-purple-950/60 to-cyan-950/70 border border-amber-500/40 shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}

        {/* Hire Me CTA Button */}
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-black text-[11px] font-bold transition-all shadow-[0_0_15px_rgba(52,211,153,0.5)] ml-1 flex items-center gap-1"
        >
          <span>Hire Me</span>
          <Send className="w-3 h-3 text-black" />
        </a>
      </motion.nav>

      {/* 3. MOBILE & TABLET COMPACT TOP-RIGHT TOGGLE BUTTON */}
      <div className="fixed top-2.5 sm:top-5 right-2.5 sm:right-5 z-40 lg:hidden pointer-events-auto">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1.5 sm:p-2.5 rounded-full bg-[#080812]/85 backdrop-blur-xl text-amber-300 hover:text-white border border-amber-500/30 shadow-lg flex items-center gap-1"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
          ) : (
            <>
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
              <span className="text-[9px] font-mono text-gray-300 font-bold pr-0.5 hidden xs:inline">MENU</span>
            </>
          )}
        </button>
      </div>

      {/* 4. MOBILE / TABLET AUTO-ADJUSTING COMPACT MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="fixed top-12 sm:top-20 right-2.5 sm:right-5 left-2.5 sm:left-auto w-auto max-w-[calc(100vw-1.25rem)] sm:w-64 z-40 bg-[#090915]/95 backdrop-blur-2xl rounded-2xl p-3 border border-amber-500/30 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto pointer-events-auto"
          >
            <div className="flex flex-col gap-1">
              <div className="px-2 py-1 mb-1 border-b border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                  Navigation
                </span>
                <span className="text-[9px] font-mono text-gray-500">Avinash.com</span>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between p-2 rounded-xl text-xs font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-amber-950/50 to-purple-950/60 text-amber-200 border border-amber-500/40 font-bold'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              ))}

              <div className="pt-2 border-t border-white/10 mt-1">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-black text-center text-xs font-bold block shadow-[0_0_15px_rgba(52,211,153,0.4)] uppercase tracking-wider"
                >
                  Hire Avinash
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
