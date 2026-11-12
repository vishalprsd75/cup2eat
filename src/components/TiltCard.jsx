import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function TiltCard({ children, className = '', maxTilt = 8 }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(0, { damping: 20, stiffness: 200 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 200 });
  const scale = useSpring(1, { damping: 20, stiffness: 200 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    rotateX.set(tiltX);
    rotateY.set(tiltY);
    scale.set(1.02);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        scale,
      }}
      className={`transition-shadow duration-300 ${
        isHovered ? 'shadow-2xl' : 'shadow-luxury'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

