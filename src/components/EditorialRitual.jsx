import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplets, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function EditorialRitual() {
  const steps = [
    {
      num: '01',
      phase: 'The Pour',
      headline: 'Hot Liquids (85°C+)',
      desc: 'Holds hot chai & espresso for 40+ minutes without softening.',
      tag: 'Leak-Proof'
    },
    {
      num: '02',
      phase: 'The Sip',
      headline: 'Flavour Infused',
      desc: 'Subtle natural cocoa, vanilla, or cardamom aroma.',
      tag: 'Aromatics'
    },
    {
      num: '03',
      phase: 'The Crunch',
      headline: 'Biscuit Finale',
      desc: 'Finish your drink, then crunch the delicious biscuit cup.',
      tag: 'Edible'
    },
    {
      num: '04',
      phase: 'Zero Waste',
      headline: 'Zero Landfill',
      desc: '100% eaten. No plastic lids or paper waste left behind.',
      tag: 'Clean Table'
    }
  ];

  return (
    <section className="py-24 bg-forest-950 text-cream relative overflow-hidden border-t border-forest-800">
      {/* Background grain & ambient glow */}
      <div className="absolute inset-0 bg-subtle-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-gold-400 font-bold block">
            The Beverage Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The Four Moments of CUP2EAT
          </h2>
          <p className="text-sm sm:text-base text-cream/70 leading-relaxed">
            How a simple cup elevates ordinary beverage service into an unforgettable customer ritual.
          </p>
        </div>

        {/* Editorial 4-Phase Grid with Hairline Dividers */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-forest-900/60 p-7 sm:p-8 rounded-3xl border border-gold-500/20 hover:border-gold-500/50 hover:bg-forest-900 transition-all duration-300 h-full flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-forest-800">
                    <span className="font-mono text-3xl font-black text-gold-500 group-hover:scale-110 transition-transform inline-block">
                      {step.num}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400/80 bg-forest-950 px-2.5 py-1 rounded-full border border-forest-800">
                      {step.tag}
                    </span>
                  </div>

                  <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold block mb-1">
                    {step.phase}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {step.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-forest-800/80 flex items-center gap-2 text-xs text-gold-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  <span>Phase {step.num} Experience</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}

