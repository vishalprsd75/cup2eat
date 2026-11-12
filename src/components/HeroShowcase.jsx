import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Flame, Sparkles, Star, Tag, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';
import RotatingSeal from './RotatingSeal';
import AnimatedCounter from './AnimatedCounter';

const HERO_SLIDES = [
  {
    id: 'chocolate',
    label: 'Chocolate',
    title: 'Rich Chocolate Edible Cup',
    pairing: 'With Hot Cappuccino & Latte Art',
    image: '/images/cup-chocolate-studio.jpg',
    color: '#5C3826',
    pill: 'Bestseller for Coffee Houses',
    specs: 'Holds 85°C Coffee for 40+ Mins',
    crunchNote: 'Crispy Cocoa Biscuit Crunch'
  },
  {
    id: 'vanilla',
    label: 'Vanilla',
    title: 'Classic Golden Vanilla Cup',
    pairing: 'With Steaming Indian Masala Chai',
    image: '/images/cup-vanilla-studio.jpg',
    color: '#B8860B',
    pill: 'Engineered for Indian Chai',
    specs: 'Zero Leakage with Boiling Chai',
    crunchNote: 'Golden Sweet Biscuit Finish'
  },
  {
    id: 'elaichi',
    label: 'Elaichi',
    title: 'Cardamom Infused Edible Cup',
    pairing: 'With Gourmet Vanilla Sundae',
    image: '/images/cup-elaichi-studio.jpg',
    color: '#3F6247',
    pill: 'Royal Indian Twist',
    specs: 'Hot Teas & Chilled Gelato Ready',
    crunchNote: 'Fragrant Cardamom Spiced Crisp'
  },
  {
    id: 'poster',
    label: 'Official Offer',
    title: 'Factory Wholesale Campaign',
    pairing: '₹3,999 for 396 Cups • All India Delivery',
    image: '/images/cup2eat-ad-poster.jpg',
    color: '#D6A64B',
    pill: 'Advertised Commercial Offer',
    specs: 'Delivery Across India • 3 Flavours',
    crunchNote: 'Direct Factory Distribution'
  }
];

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState('chocolate');
  const current = HERO_SLIDES.find((s) => s.id === activeTab) || HERO_SLIDES[0];

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Dynamic Ambient Background Glow that morphs with active flavor */}
      <div
        className="absolute -inset-4 rounded-3xl blur-3xl opacity-40 transition-colors duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${current.color} 0%, rgba(7,61,43,0.5) 50%, transparent 70%)`
        }}
      />

      {/* Rotating Wax Seal in Top-Right Corner */}
      <div className="absolute -top-10 -right-8 z-30 hidden sm:block pointer-events-none">
        <RotatingSeal className="w-32 h-32" />
      </div>

      {/* Flavour Navigation Mini-Bar */}
      <div className="mb-4 flex items-center justify-center lg:justify-start gap-1.5 bg-forest-950/90 backdrop-blur-md p-1.5 rounded-full border border-gold-500/30 shadow-lg relative z-20">
        {HERO_SLIDES.map((slide) => {
          const isActive = activeTab === slide.id;
          return (
            <button
              key={slide.id}
              onClick={() => setActiveTab(slide.id)}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                isActive ? 'text-forest-950' : 'text-cream/75 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="heroTabPill"
                  className="absolute inset-0 bg-gold-400 rounded-full shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span>{slide.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card with Tilt */}
      <TiltCard className="relative rounded-3xl overflow-hidden bg-forest-950 border-2 border-gold-500/50 shadow-2xl group z-10">
        <div className="aspect-[4/3] sm:aspect-square w-full overflow-hidden relative bg-forest-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full relative"
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Steam particle shimmer effect */}
              {current.id !== 'poster' && (
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gold-500/5 to-transparent pointer-events-none animate-pulse" />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-forest-950/90 text-gold-400 border border-gold-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>{current.pill}</span>
            </span>
          </div>

          {/* Bottom Floating Info Bar */}
          <div className="absolute bottom-4 inset-x-4 bg-forest-950/95 backdrop-blur-md p-3.5 rounded-2xl border border-gold-500/40 text-cream text-xs flex items-center justify-between shadow-xl z-20">
            <div>
              <span className="text-[10px] uppercase font-mono text-gold-400 block font-bold">
                {current.pairing}
              </span>
              <span className="text-xs font-serif font-bold text-white">
                {current.specs}
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800 font-bold whitespace-nowrap">
              {current.crunchNote}
            </span>
          </div>
        </div>
      </TiltCard>

      {/* Floating Offer Counter Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
        className="absolute -bottom-6 -left-3 sm:-left-6 bg-gold-400 text-forest-950 p-4 rounded-2xl shadow-2xl border-2 border-forest-950 font-sans z-30"
      >
        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-forest-950 flex items-center gap-1">
          <Tag className="w-3 h-3" />
          <span>Wholesale Starter Offer</span>
        </div>
        <div className="text-2xl font-black font-mono leading-tight">
          <AnimatedCounter to={3999} prefix="₹" />
        </div>
        <div className="text-[11px] font-semibold text-forest-900">
          for 396 Cups • Delivery All Over India
        </div>
      </motion.div>
    </div>
  );
}
