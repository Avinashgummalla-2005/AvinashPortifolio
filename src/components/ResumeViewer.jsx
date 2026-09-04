import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeViewer() {
  const [showFullViewer, setShowFullViewer] = useState(true);

  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Official Curriculum Vitae</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            My <span className="text-gradient">Resume</span>
          </motion.h2>

          <p className="text-gray-400 text-base sm:text-lg mb-8">
            View or download the official single-page resume document for Avinash Gummalla.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={portfolioData.personal.resumePdf}
              download="AvinashGummalla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-95 transition-opacity shadow-lg shadow-purple-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>

            <a
              href={portfolioData.personal.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-[#0B0F19] hover:bg-white/10 border border-white/15 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Open PDF in New Tab</span>
            </a>
          </div>
        </div>

        {/* Polished PDF Document Viewer Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-4 sm:p-6 rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden relative"
        >
          {/* Top Bar Control Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#050509]/80 rounded-2xl border border-white/10 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-gray-300 ml-2 hidden sm:inline">
                AvinashGummalla_Resume.pdf
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified PDF</span>
              </span>
            </div>
          </div>

          {/* Embedded Viewer Element */}
          <div className="w-full h-[420px] sm:h-[650px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
            <object
              data={portfolioData.personal.resumePdf}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#0B0F19]">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mb-3 sm:mb-4 animate-bounce" />
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Resume Preview Ready</h4>
                <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-5 sm:mb-6">
                  Click below to view or download Avinash Gummalla's resume directly.
                </p>
                <a
                  href={portfolioData.personal.resumePdf}
                  download="AvinashGummalla_Resume.pdf"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg"
                >
                  Download AvinashGummalla_Resume.pdf
                </a>
              </div>
            </object>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
