import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleLinkHoverStart = () => setIsHovered(true);
    const handleLinkHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovered ? 1.5 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 pointer-events-none z-50"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#a855f7' : 'rgba(6, 182, 212, 0.5)'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
      />
    </>
  );
}
