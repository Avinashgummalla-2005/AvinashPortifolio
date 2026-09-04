import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Briefcase, Brain, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';

export default function About() {
  const { personal, stats, education, experience } = portfolioData;

  return (
    <section id="about" className="py-14 sm:py-24 relative bg-[#070710] text-gray-100 overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-400 font-bold block mb-2">
            BACKGROUND & EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About Avinash Gummalla
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        {/* Top Overview & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10 sm:mb-16">
          
          {/* Narrative Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0e0e1a] rounded-2xl p-4 sm:p-8 border border-white/10 shadow-xl space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Software Engineering & AI/ML Focus</span>
            </h3>
            
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed font-light">
              {personal.fullBio}
            </p>

            <div className="pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 block">LOCATION</span>
                  <span className="text-xs text-gray-200 font-medium">{personal.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-purple-400 shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 block">EXPECTED GRADUATION</span>
                  <span className="text-xs text-gray-200 font-medium">{personal.graduationYear}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0e0e1a] rounded-2xl p-3.5 sm:p-5 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg hover:-translate-y-1"
              >
                <span className="text-[9px] sm:text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                  {stat.label}
                </span>
                <div className="mt-2 sm:mt-3">
                  <span className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 font-mono">
                    {stat.value}{stat.suffix}
                  </span>
                </div>
              </div>
            ))}

            <div className="col-span-2 bg-gradient-to-br from-purple-950/40 to-cyan-950/40 rounded-2xl p-3.5 sm:p-5 border border-cyan-500/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Available for Opportunities</span>
              </div>
              <a
                href={personal.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all text-center"
              >
                View Resume
              </a>
            </div>
          </motion.div>

        </div>

        {/* Internships & Work Experience Section */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>Internship & Work Experience</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0e0e1a] rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-purple-950/70 text-purple-300 border border-purple-500/30 font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">{exp.role}</h4>
                    <p className="text-xs text-cyan-400 font-mono">{exp.company}</p>
                    <span className="text-[10px] sm:text-[11px] text-gray-500 font-mono block mt-0.5">{exp.location}</span>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-white/5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-xs text-gray-300 leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-400 text-xs font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
            <span>Education</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0e0e1a] rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 font-mono">
                      {edu.cgpa}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gray-400 font-mono">{edu.period}</span>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">{edu.institution}</h4>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">{edu.degree}</p>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 text-[10px] sm:text-[11px] text-gray-500 font-mono">
                  {edu.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
