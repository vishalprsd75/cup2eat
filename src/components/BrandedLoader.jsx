import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandedLoader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if already shown in this session
    const hasSeen = sessionStorage.getItem('cup2eat_loader_seen');
    if (hasSeen) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Short, polished animation timing (approx 1.2s total)
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('cup2eat_loader_seen', 'true');
      onComplete?.();
    }, 1250);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="branded-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-950 text-cream select-none pointer-events-none"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative flex flex-col items-center">
            {/* Logo Emblem Reveal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 mb-4 relative"
            >
              <img
                src="/logo-badge.svg"
                alt="CUP2EAT Emblem"
                className="w-full h-full object-contain drop-shadow"
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-serif text-3xl font-bold tracking-wider text-white"
            >
              CUP<span className="text-gold-500">2</span>EAT
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-sans mt-1"
            >
              Eat Your Drink!
            </motion.p>

            {/* Animated Gold Line Reveal */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-4"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

