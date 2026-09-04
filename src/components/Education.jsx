import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Education <span className="text-gradient">Timeline</span>
          </motion.h2>

          <p className="text-gray-400 text-base">
            Formal engineering degree in Artificial Intelligence & Machine Learning.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-purple-500/30 space-y-12">
          
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group"
            >
              {/* Glowing Node Dot on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050509] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
              </div>

              {/* Education Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-300 mt-1">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1 text-purple-300 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-gray-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed font-light mb-4">
                  {edu.details}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-cyan-200">
                    Deep Learning & ML Algorithms
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-purple-200">
                    Full-Stack Web Development
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-indigo-200">
                    Database Systems
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
