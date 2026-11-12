import React from 'react';
import { motion } from 'framer-motion';

export default function RotatingSeal({ className = "w-28 h-28", text = "CUP2EAT • EAT YOUR DRINK • ZERO WASTE • " }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer Rotating Text Ring */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        viewBox="0 0 200 200"
        className="w-full h-full text-gold-400 drop-shadow"
      >
        <path
          id="sealPath"
          d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          fill="none"
        />
        <text className="text-[11px] uppercase tracking-[0.22em] font-sans font-bold fill-gold-400">
          <textPath href="#sealPath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>

      {/* Center Icon Crest */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11 h-11 rounded-full bg-forest-900 border border-gold-500/50 flex items-center justify-center shadow-lg">
          <span className="font-serif font-black text-xs text-gold-400 tracking-wider">C2E</span>
        </div>
      </div>
    </div>
  );
}

