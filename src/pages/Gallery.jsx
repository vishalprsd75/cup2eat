import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Filter, Eye, Maximize2, 
  ArrowRight, ShieldCheck, Heart, Coffee 
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import LightboxModal from '../components/LightboxModal';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import BrandMarquee from '../components/BrandMarquee';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpen = (item) => {
    const idx = filteredItems.findIndex((it) => it.id === item.id);
    setCurrentIndex(idx !== -1 ? idx : 0);
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const selectedItem = currentIndex !== null ? filteredItems[currentIndex] : null;

  return (
    <div className="min-h-screen bg-[#041912] text-cream">
      
      {/* 1. HERO SECTION */}
      <section className="bg-forest-950 text-cream py-16 lg:py-24 border-b border-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-pattern opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block"
          >
            Visual Portfolio
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            CUP2EAT In Action
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto leading-relaxed"
          >
            From our signature Chocolate, Vanilla, and Elaichi cups to real campus tasting activations, master packaging crates, and café presentations.
          </motion.p>
        </div>
      </section>

      {/* Marquee Ticker */}
      <BrandMarquee />

      {/* 2. CATEGORY FILTER BAR WITH ANIMATED PILL */}
      <section className="sticky top-20 z-30 bg-forest-950/95 backdrop-blur-md border-b border-gold-500/20 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none sm:justify-center">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'text-forest-950 font-bold'
                    : 'text-cream/70 hover:text-white bg-forest-900 border border-forest-800'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-gold-400 rounded-full shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESPONSIVE IMAGE GRID WITH SMOOTH LAYOUT RE-ORDER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpen(item)}
                className="group relative bg-forest-950 rounded-3xl overflow-hidden cursor-pointer border border-gold-500/20 shadow-2xl hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-end min-h-[320px]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-forest-950/90 text-gold-400 px-3 py-1 rounded-full border border-gold-500/30 shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon indicator */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-forest-950/90 p-2 rounded-full text-gold-400 border border-gold-500/40">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Card Footer Text */}
                <div className="relative z-10 p-5 text-cream space-y-1">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cream/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 text-[10px] font-mono text-gold-400/90 font-medium flex items-center justify-between">
                    <span>{item.source}</span>
                    <span className="underline group-hover:text-gold-300">View Full Photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Brand Socials Banner */}
        <ScrollReveal className="mt-16">
          <div className="bg-forest-950 text-cream rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold block">
                Official Instagram Feed
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Stay Connected With @cup2eat
              </h3>
              <p className="text-xs sm:text-sm text-cream/80 max-w-xl">
                Watch real student tasting reactions, see warehouse master crate packing, and discover upcoming food festival appearances.
              </p>
            </div>

            <MagneticButton>
              <a
                href="https://instagram.com/cup2eat"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-gold-glow transition-all whitespace-nowrap block"
              >
                <InstagramIcon className="w-4 h-4 inline-block" />
                <span>Follow @cup2eat</span>
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          item={selectedItem}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < filteredItems.length - 1}
        />
      )}

    </div>
  );
}
