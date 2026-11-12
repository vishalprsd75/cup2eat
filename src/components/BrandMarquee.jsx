import React from 'react';

export default function BrandMarquee() {
  const items = [
    'WHY JUST DRINK IT, WHEN YOU CAN EAT IT?',
    '396 CUPS PER MASTER CRATE',
    'ZERO SINGLE-USE WASTE',
    'CHOCOLATE • VANILLA • ELAICHI',
    'ADVERTISED WHOLESALE ₹3,999',
    'PAN-INDIA COMMERCIAL DISPATCH',
    '100% EDIBLE BAKED BISCUIT',
    'FSSAI REGISTERED (CLAIM)',
  ];

  return (
    <div className="w-full bg-forest-950 border-y border-gold-500/20 py-3.5 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
              {item}
            </span>
            <span className="text-gold-500/40 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

