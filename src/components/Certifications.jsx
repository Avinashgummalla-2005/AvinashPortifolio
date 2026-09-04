import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, Calendar, CheckCircle, ExternalLink, X, Shield, BookOpen, Layers } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-14 sm:py-24 relative bg-[#070712] text-gray-100 overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Knowledge & Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="mt-2.5 sm:mt-3 text-gray-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            Formal technical certifications, specialized institute training, and government-accredited internship certificates.
          </p>
        </motion.div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#0e0e1c] rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Provider & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-purple-950/70 text-purple-300 border border-purple-500/30 font-mono">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {cert.date}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    Issued by: {cert.provider}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed font-light line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* View Certificate Action */}
              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-mono text-gray-500">{cert.skillCategory}</span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-white font-semibold font-mono"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certification Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          >
            <div 
              className="relative max-w-xl w-full max-h-[90vh] overflow-y-auto bg-[#0d0d1a] border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl text-left space-y-4 sm:space-y-5"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 pr-8">
                <div className="p-3 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-500/30 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 block">{selectedCert.provider}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{selectedCert.title}</h3>
                </div>
              </div>

              {/* Certificate Image Preview */}
              <div className="aspect-[4/3] rounded-xl bg-black/60 border border-white/10 overflow-hidden">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {selectedCert.description}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-400">
                <span className="text-cyan-300">
                  {selectedCert.certNo ? `Cert ID: ${selectedCert.certNo}` : `Issued: ${selectedCert.date}`}
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20"
                >
                  Close Window
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
