import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { ArrowDown, FileText, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative w-full min-h-screen sm:h-screen sm:min-h-[680px] overflow-hidden flex items-end md:items-center justify-center bg-[#050509]">
      
      {/* 1. FULL-SCREEN BACKGROUND IMAGE (Responsive focal positioning) */}
      <img
        src={personal.heroImage}
        alt="Avinash Gummalla"
        className="absolute inset-0 w-full h-full object-cover object-[center_40%] sm:object-[center_43%] select-none"
      />

      {/* 2. CINEMATIC GRADIENT & VIGNETTE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-black/40 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/70 pointer-events-none" />
      
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/4 right-5 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* 3. ABSOLUTE/OVERLAY CONTENT CONTAINER */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-0 pt-24 sm:pt-28 md:pt-20 flex flex-col justify-end md:justify-center">
        
        {/* Overlay Composition (Left spacer expanded on desktop, details card responsive offset) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Expanded left spacer keeping face clear on desktop */}
          <div className="hidden md:block md:col-span-5 lg:col-span-6 pointer-events-none" />

          {/* Text & Interactive Details Card Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-6 md:translate-x-4 lg:translate-x-8 space-y-4 sm:space-y-5 text-left bg-black/50 md:bg-black/35 backdrop-blur-md p-5 sm:p-8 md:p-9 rounded-3xl border border-white/10 shadow-2xl w-full"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-[11px] sm:text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="tracking-widest font-semibold uppercase">{personal.status}</span>
            </div>

            {/* Headline */}
            <div>
              <span className="text-base sm:text-lg md:text-xl font-light text-amber-200/90 font-serif italic block mb-0.5">
                {personal.greeting}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {personal.name.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-indigo-300">{personal.name.split(' ')[1]}</span>
              </h1>
              <p className="text-[11px] sm:text-xs md:text-sm font-mono text-cyan-400 tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2">
                <span>SOFTWARE DEVELOPER</span>
                <span className="text-gray-600 hidden sm:inline">|</span>
                <span className="text-purple-400">{personal.tagline}</span>
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-xl leading-relaxed font-light">
              Artificial Intelligence and Machine Learning undergraduate at <span className="text-white font-medium">{personal.college}</span>. Building intelligent applications by combining AI, machine learning models, and modern full-stack web architectures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                <span>View Projects</span>
                <Terminal className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-gray-100 font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3 sm:gap-4">
              <span className="text-[11px] sm:text-xs uppercase font-mono text-gray-400 tracking-wider">Socials:</span>
              
              {/* GitHub Link */}
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 sm:p-3 rounded-xl bg-black/60 border border-white/15 text-gray-200 hover:text-cyan-400 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-110 group"
              >
                <GithubIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:rotate-6 transition-transform" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 sm:p-3 rounded-xl bg-black/60 border border-white/15 text-gray-200 hover:text-cyan-400 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-110 group"
              >
                <LinkedinIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:-rotate-6 transition-transform" />
              </a>

              {/* Email Mailto Link */}
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="p-2.5 sm:p-3 rounded-xl bg-black/60 border border-white/15 text-gray-200 hover:text-cyan-400 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-110 group"
              >
                <MailIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center pointer-events-auto"
      >
        <a href="#about" aria-label="Scroll to About Section" className="p-2 rounded-full bg-black/40 text-gray-300 hover:text-cyan-400 border border-white/10 transition-colors">
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
