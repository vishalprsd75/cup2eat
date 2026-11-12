import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Flame, Sparkles, CheckCircle2, ArrowRight, MessageSquare, Star } from 'lucide-react';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

const BEVERAGES = [
  {
    id: 'cappuccino',
    name: 'Cappuccino / Espresso',
    category: 'Specialty Coffee',
    temp: 'Hot (75°C)',
    icon: Coffee,
    recommendedCup: 'Rich Chocolate Edible Cup',
    recommendedCupId: 'chocolate',
    image: '/images/cup-chocolate-studio.jpg',
    flavourNote: 'Roasted criollo cocoa enhances the crema and espresso acidity without melting.',
    rating: '9.9/10',
    crunchReview: 'The inner cocoa lining releases subtle melted chocolate into the final sip.',
    idealVenue: 'Cafés, Roasteries & Coffee Bars'
  },
  {
    id: 'chai',
    name: 'Kadak Masala Chai',
    category: 'Indian Teas',
    temp: 'Piping Hot (85°C+)',
    icon: Flame,
    recommendedCup: 'Classic Golden Vanilla Edible Cup',
    recommendedCupId: 'vanilla',
    image: '/images/cup-vanilla-studio.jpg',
    flavourNote: 'Warm golden biscuit sweetness mirrors the timeless Indian chai-and-biscuit ritual.',
    rating: '10/10',
    crunchReview: 'Zero sogging for 40+ mins. Ends with a satisfying, warm buttery biscuit crunch.',
    idealVenue: 'Chai Cafés, Tea Lounges & Street Stalls'
  },
  {
    id: 'sundae',
    name: 'Ice Cream Sundae',
    category: 'Gourmet Desserts',
    temp: 'Chilled (-4°C)',
    icon: Sparkles,
    recommendedCup: 'Cardamom Infused (Elaichi) Cup',
    recommendedCupId: 'elaichi',
    image: '/images/cup-elaichi-studio.jpg',
    flavourNote: 'Fragrant crushed green cardamom pairs magically with vanilla bean gelato & fudge.',
    rating: '9.8/10',
    crunchReview: 'Stays ultra-crisp even as the ice cream begins to melt, acting as a luxury edible bowl.',
    idealVenue: 'Dessert Parlours, Kulfi Hubs & Banquets'
  },
  {
    id: 'filter-coffee',
    name: 'South Indian Filter Coffee',
    category: 'Traditional Brews',
    temp: 'Hot (80°C)',
    icon: Coffee,
    recommendedCup: 'Classic Golden Vanilla Edible Cup',
    recommendedCupId: 'vanilla',
    image: '/images/cup-vanilla-studio.jpg',
    flavourNote: 'Strong chicory decoction softens slightly into the vanilla wafer base.',
    rating: '9.7/10',
    crunchReview: 'Replaces the traditional steel davara-tumbler with a zero-waste edible experience.',
    idealVenue: 'Heritage Restaurants & Breakfast Buffets'
  },
  {
    id: 'mocha',
    name: 'Hot Chocolate & Mocha',
    category: 'Indulgent Warm Drinks',
    temp: 'Hot (78°C)',
    icon: Coffee,
    recommendedCup: 'Rich Chocolate Edible Cup',
    recommendedCupId: 'chocolate',
    image: '/images/cup-chocolate-studio.jpg',
    flavourNote: 'Double chocolate indulgence — liquid fudge meets baked chocolate biscuit.',
    rating: '9.9/10',
    crunchReview: 'Pure luxury: customers eat the cup like a decadent chocolate brownie.',
    idealVenue: 'Artisan Bakeries & Winter Pop-ups'
  }
];

export default function BeveragePairing() {
  const [selectedBeverage, setSelectedBeverage] = useState(BEVERAGES[0]);

  return (
    <div className="bg-forest-950 rounded-3xl border-2 border-gold-500/35 overflow-hidden shadow-2xl relative">
      {/* Background radial ambiance */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-forest-600/20 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="p-6 sm:p-10 border-b border-forest-800 bg-forest-900/40 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Menu Matcher
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Pair Your Drink With The Perfect Cup
          </h3>
          <p className="text-xs sm:text-sm text-cream/70 font-light">
            Select what your venue serves to preview the recommended CUP2EAT flavour, sensory rating, and customer crunch experience.
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-forest-950 border border-forest-800 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-cream/80">Menu Recommendation Engine</span>
        </div>
      </div>

      {/* Beverage Selection Pills */}
      <div className="px-6 sm:px-10 py-5 bg-forest-900/80 border-b border-forest-800 overflow-x-auto scrollbar-none flex items-center gap-2.5">
        <span className="text-xs font-mono uppercase text-gold-400 font-bold mr-2 whitespace-nowrap">
          Your Drink:
        </span>
        {BEVERAGES.map((bev) => {
          const isSelected = selectedBeverage.id === bev.id;
          const Icon = bev.icon;
          return (
            <button
              key={bev.id}
              onClick={() => setSelectedBeverage(bev)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold font-mono whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-gold-400 text-forest-950 shadow-gold-glow scale-105'
                  : 'bg-forest-950 text-cream/80 hover:text-white hover:bg-forest-800 border border-forest-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{bev.name}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Recommendation Panel */}
      <div className="p-6 sm:p-10 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBeverage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <TiltCard className="relative rounded-2xl overflow-hidden bg-forest-900 border border-gold-500/30 shadow-2xl group">
                <img
                  src={selectedBeverage.image}
                  alt={selectedBeverage.recommendedCup}
                  className="w-full aspect-square object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Recommended Pill */}
                <div className="absolute top-4 left-4 bg-forest-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/40 text-gold-400 text-xs font-mono font-bold shadow-lg flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  <span>Optimal Match: {selectedBeverage.rating}</span>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent p-5 text-cream flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gold-400 block font-bold">Recommended Cup</span>
                    <span className="text-sm font-serif font-bold text-white">{selectedBeverage.recommendedCup}</span>
                  </div>
                  <span className="text-xs text-emerald-400 bg-forest-900/90 px-2.5 py-1 rounded-lg border border-forest-800 font-mono">
                    {selectedBeverage.temp}
                  </span>
                </div>
              </TiltCard>
            </div>

            {/* Recommendation Specs */}
            <div className="lg:col-span-7 space-y-5 text-cream">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold block mb-1">
                  Beverage Match
                </span>
                <h4 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {selectedBeverage.name} + {selectedBeverage.recommendedCup.split(' ')[0]}
                </h4>
                <p className="text-xs text-gold-300 font-mono mt-1">
                  Ideal for: {selectedBeverage.idealVenue}
                </p>
              </div>

              {/* Flavor Profile & Crunch Callout - Minimal */}
              <div className="bg-forest-900/60 p-4 rounded-2xl border border-forest-800 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-gold-400 font-mono font-bold uppercase text-[10px] w-14 flex-shrink-0 pt-0.5">Pairing:</span>
                  <p className="text-cream/90">{selectedBeverage.flavourNote}</p>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-forest-800/80">
                  <span className="text-emerald-400 font-mono font-bold uppercase text-[10px] w-14 flex-shrink-0 pt-0.5">Crunch:</span>
                  <p className="text-cream/80 italic">"{selectedBeverage.crunchReview}"</p>
                </div>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-forest-950 border border-forest-800 text-center">
                  <span className="text-gold-400 font-bold block text-sm">40+ Mins</span>
                  <span className="text-cream/60 text-[10px] uppercase">Hot Hold Time</span>
                </div>
                <div className="p-3 rounded-xl bg-forest-950 border border-forest-800 text-center">
                  <span className="text-emerald-400 font-bold block text-sm">0% Waste</span>
                  <span className="text-cream/60 text-[10px] uppercase">Zero Landfill</span>
                </div>
                <div className="p-3 rounded-xl bg-forest-950 border border-forest-800 text-center col-span-2 sm:col-span-1">
                  <span className="text-white font-bold block text-sm">₹10.10</span>
                  <span className="text-cream/60 text-[10px] uppercase">Est. Unit Wholesale</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <MagneticButton className="w-full sm:w-auto">
                  <a
                    href={`https://wa.me/919818192575?text=Hello%20CUP2EAT,%20we%20serve%20${encodeURIComponent(selectedBeverage.name)}%20and%20want%20to%20test%20the%20${encodeURIComponent(selectedBeverage.recommendedCup)}.%20Please%20share%20wholesale%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire for {selectedBeverage.name}</span>
                  </a>
                </MagneticButton>

                <a
                  href="#calculator"
                  className="text-xs font-mono text-gold-400 hover:text-gold-300 underline underline-offset-4 flex items-center gap-1.5 transition-colors"
                >
                  <span>Calculate Venue Profit Margin</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
