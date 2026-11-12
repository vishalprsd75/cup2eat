import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

export default function AnimatedCounter({ from = 0, to, duration = 1.8, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(to);
      return;
    }

    let start = from;
    const end = to;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // EaseOutQuart function for luxury deceleration
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOut);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

