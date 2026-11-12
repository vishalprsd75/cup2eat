import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ArrowRight, Flame, Droplets, Coffee, Utensils, MessageSquare } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';

export default function FlavourStage() {
  const [activeFlavourId, setActiveFlavourId] = useState('chocolate');

  const current = PRODUCTS.find((p) => p.id === activeFlavourId) || PRODUCTS[0];

  // Specific sensory profiles for each flavour
  const sensoryProfiles = {
    chocolate: {
      aroma: 'Roasted Criollo Cocoa & Sweet Biscuit',
      crispRating: '98% Ultra-Crisp Waffle',
      heatRetention: '40+ Minutes (Leak-Proof)',
      bestBeverages: ['Espresso Double Shot', 'Steamy Cappuccino', 'Gourmet Mocha', 'Artisanal Gelato'],
      accentColor: '#5C3826',
      badgeColor: 'bg-amber-950 text-amber-200 border-amber-800'
    },
    vanilla: {
      aroma: 'Golden Baked Biscuit & Warm Madagascar Vanilla',
      crispRating: '96% Golden Biscuit Crunch',
      heatRetention: '45+ Minutes (Leak-Proof)',
      bestBeverages: ['Kadak Masala Chai', 'Indian Ginger Tea', 'South Indian Filter Coffee', 'Fruit Custard'],
      accentColor: '#B8860B',
      badgeColor: 'bg-yellow-950 text-yellow-200 border-yellow-800'
    },
    elaichi: {
      aroma: 'Crushed Green Cardamom Spice & Sweet Dough',
      crispRating: '97% Fragrant Spiced Crunch',
      heatRetention: '40+ Minutes (Leak-Proof)',
      bestBeverages: ['Royal Elaichi Chai', 'Kashmiri Kahwa', 'Kesar Badam Milk', 'Malai Kulfi'],
      accentColor: '#2D4A34',
      badgeColor: 'bg-emerald-950 text-emerald-200 border-emerald-800'
    }
  };

  const activeSensory = sensoryProfiles[activeFlavourId] || sensoryProfiles.chocolate;

  return (
    <div className="bg-forest-950 rounded-3xl border border-gold-500/30 overflow-hidden shadow-2xl relative">
      {/* Background radial atmosphere */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 75% 30%, ${activeSensory.accentColor} 0%, transparent 60%)`
        }}
      />

      {/* Top Flavour Selector Bar */}
      <div className="border-b border-forest-800/80 bg-forest-900/60 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 relative z-10">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-bold block mb-1">
            Sensory Experience
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            The CUP2EAT Tasting Stage
          </h3>
        </div>

        {/* Flavour Buttons with sliding pill */}
        <div className="flex items-center gap-1.5 bg-forest-950 p-1.5 rounded-full border border-forest-800">
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setActiveFlavourId(prod.id)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFlavourId === prod.id ? 'text-forest-950' : 'text-cream/70 hover:text-white'
              }`}
            >
              {activeFlavourId === prod.id && (
                <motion.span
                  layoutId="tastingTabPill"
                  className="absolute inset-0 bg-gold-400 rounded-full shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span>{prod.flavour}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Sensory Stage Content */}
      <div className="p-6 sm:p-10 lg:p-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <TiltCard className="relative rounded-2xl overflow-hidden bg-forest-900 border border-forest-800 shadow-2xl group">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Flavour Badge */}
                <div className="absolute top-4 left-4 bg-forest-950/90 backdrop-blur-md text-gold-300 text-xs font-mono font-bold px-3.5 py-1.5 rounded-full border border-gold-500/40 shadow-lg">
                  {current.flavour}
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent p-5 text-cream flex items-center justify-between">
                  <span className="text-xs font-semibold text-gold-400">{current.colorTheme.badge}</span>
                  <span className="text-xs text-cream/70 font-mono">Heat-Proof Biscuit</span>
                </div>
              </TiltCard>
            </div>

            {/* Details & Specs Column */}
            <div className="lg:col-span-6 space-y-6 text-cream">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold block mb-1">
                  Signature Recipe
                </span>
                <h4 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {current.name}
                </h4>
                <p className="text-sm font-medium text-gold-300 italic mt-1">
                  "{current.tagline}"
                </p>
              </div>

              {/* Sensory Meters */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-forest-900/80 p-3.5 rounded-xl border border-forest-800">
                  <span className="text-[10px] uppercase font-mono text-gold-400 block font-semibold mb-1">Aroma Profile</span>
                  <span className="text-xs font-bold text-white">{activeSensory.aroma}</span>
                </div>
                <div className="bg-forest-900/80 p-3.5 rounded-xl border border-forest-800">
                  <span className="text-[10px] uppercase font-mono text-gold-400 block font-semibold mb-1">Heat Resistance</span>
                  <span className="text-xs font-bold text-emerald-400">{activeSensory.heatRetention}</span>
                </div>
              </div>

              {/* Best Beverage Pairings */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-cream/70 font-semibold block">
                  Best Beverage Pairings:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSensory.bestBeverages.map((bev, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-forest-900 px-3 py-1.5 rounded-lg border border-forest-800 text-cream/90 flex items-center gap-1.5"
                    >
                      <Coffee className="w-3.5 h-3.5 text-gold-400" />
                      <span>{bev}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <MagneticButton className="w-full sm:w-auto">
                  <a
                    href={`https://wa.me/919818192575?text=Hello%20CUP2EAT,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(current.name)}%20crate.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire for {current.flavour}</span>
                  </a>
                </MagneticButton>

                <MagneticButton className="w-full sm:w-auto">
                  <a
                    href="#calculator"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-cream border border-forest-800 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Calculate Batch ROI</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </MagneticButton>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

