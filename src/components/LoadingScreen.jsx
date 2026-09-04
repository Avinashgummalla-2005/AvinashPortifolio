import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [step, setStep] = useState(1); // 1 = Golden Loading, 2 = Welcome Screen
  const [progress, setProgress] = useState(0);
  const [showShine, setShowShine] = useState(false);

  // Step 1: Progress counter & golden ring animation
  useEffect(() => {
    if (step !== 1) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowShine(true);
          setTimeout(() => {
            setStep(2); // Move to Step 2 Welcome Screen
          }, 800);
          return 100;
        }
        const diff = Math.floor(Math.random() * 10) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [step]);

  // Step 2: Welcome screen display before revealing existing portfolio
  useEffect(() => {
    if (step === 2) {
      const welcomeTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 2800);

      return () => clearTimeout(welcomeTimer);
    }
  }, [step, onComplete]);

  // SVG dash offset calculation for metallic golden arc
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020203] text-white selection:bg-amber-500/30 overflow-hidden font-sans"
    >
      {/* Deep Atmospheric Golden Radial Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08) 0%, rgba(5, 5, 5, 0.95) 75%)'
        }}
      />

      {/* Floating Golden Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.4 + 0.1,
              scale: Math.random() * 0.8 + 0.3
            }}
            animate={{
              y: [null, '-=60px', '+=30px'],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-300/40 blur-[0.5px]"
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ================= STEP 1: GOLDEN LOADING SCREEN ================= */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
            className="relative z-10 flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Metallic Golden Segmented Loader Element */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center mb-4 sm:mb-6">
              
              {/* Outer Subtle Golden Ring Track */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 220 220">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF5C0" />
                    <stop offset="30%" stopColor="#F3E5AB" />
                    <stop offset="60%" stopColor="#D4AF37" />
                    <stop offset="85%" stopColor="#AA7C11" />
                    <stop offset="100%" stopColor="#FFF5C0" />
                  </linearGradient>

                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Outer Track */}
                <circle
                  cx="110"
                  cy="110"
                  r={radius}
                  stroke="rgba(212, 175, 55, 0.12)"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Animated Metallic Golden Arc */}
                <circle
                  cx="110"
                  cy="110"
                  r={radius}
                  stroke="url(#goldGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  filter="url(#goldGlow)"
                  className="transition-all duration-150 ease-out"
                />
              </svg>

              {/* Centered Percentage Counter */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C0] via-[#D4AF37] to-[#AA7C11] font-mono drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
                >
                  {progress}%
                </motion.span>
                
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.2em] sm:tracking-[0.3em] text-amber-200/60 mt-1">
                  Loading Experience
                </span>
              </div>

              {/* Light Sweep Effect on 100% */}
              {showShine && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.8, 0], scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 rounded-full border-2 border-amber-200 shadow-[0_0_30px_rgba(255,245,192,0.8)]"
                />
              )}
            </div>
          </motion.div>
        )}

        {/* ================= STEP 2: GOLDEN WELCOME SCREEN ================= */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.6 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center space-y-3 sm:space-y-4"
          >
            {/* Handwritten "hello" */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ fontFamily: "'Great Vibes', 'Alex Brush', cursive" }}
              className="text-6xl sm:text-9xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8D6] via-[#E6CA65] to-[#B8860B] drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)] tracking-wide"
            >
              hello
            </motion.h1>

            {/* "Welcome to Avi's world" */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-sm sm:text-2xl font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6AD] via-[#D4AF37] to-[#F5E6AD] drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]"
            >
              Welcome to Avi's world
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
