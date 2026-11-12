import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AmbientGlow() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Soft spring for silky lagging glow
  const springX = useSpring(mouseX, { damping: 28, stiffness: 180, mass: 0.6 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 180, mass: 0.6 });

  useEffect(() => {
    // Only enable on desktop pointer devices with fine pointer and no reduced motion
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="fixed top-0 left-0 w-80 h-80 rounded-full bg-gold-500/[0.04] blur-3xl pointer-events-none z-40 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}

