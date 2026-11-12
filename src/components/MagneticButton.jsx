import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', onClick, href, target, rel, as = 'div', ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.18;
    const y = (clientY - (top + height / 2)) * 0.18;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-block ${className}`}
      onClick={onClick}
      {...(href ? { href, target, rel } : {})}
      {...props}
    >
      {children}
    </Component>
  );
}

