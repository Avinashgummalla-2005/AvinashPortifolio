import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Brain, Code, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { personal, stats, education } = portfolioData;

  return (
    <section id="about" className="py-24 relative bg-[#070710] text-gray-100 overflow-hidden">
      {/* Background Subtle Mesh Glow */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block mb-2">
            BACKGROUND & EDUCATION
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About Avinash Gummalla
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Narrative Bio & Education Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="bg-[#0e0e1a] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span>AI & ML Passion with Full-Stack Execution</span>
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {personal.fullBio}
              </p>

              <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-500 block">LOCATION</span>
                    <span className="text-xs text-gray-200 font-medium">{personal.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-purple-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-500 block">EXPECTED GRADUATION</span>
                    <span className="text-xs text-gray-200 font-medium">{personal.graduationYear}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Box */}
            {education.map((edu, idx) => (
              <div key={idx} className="bg-[#0e0e1a] rounded-2xl p-6 border border-white/10 shadow-xl space-y-3 relative overflow-hidden group">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                      <p className="text-xs text-cyan-400 font-mono">{edu.degree}</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pl-1">
                  {edu.details}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-gray-500 font-mono pt-1">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Block: Stats & Core Highlights Grid (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0e0e1a] rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg hover:-translate-y-1"
              >
                <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                  {stat.label}
                </span>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 font-mono">
                    {stat.value}{stat.suffix}
                  </span>
                </div>
              </div>
            ))}

            {/* Recruiter Callout Box */}
            <div className="col-span-2 bg-gradient-to-br from-purple-950/40 to-cyan-950/40 rounded-2xl p-6 border border-cyan-500/30 flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ready for Collaboration</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                Actively seeking internship and full-time software engineering roles in AI, Machine Learning, and Full-Stack web development.
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
