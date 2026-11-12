import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function LightboxModal({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Modal Container */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-forest-950 border border-forest-800 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-forest-800/80 bg-forest-900/90 text-white">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400 bg-forest-800 px-2.5 py-0.5 rounded border border-forest-700/60">
                {item.category || 'CUP2EAT Gallery'}
              </span>
              <h3 className="text-lg font-serif font-bold text-white mt-1">
                {item.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-forest-800 text-cream/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Display */}
          <div className="relative flex-1 bg-black/90 flex items-center justify-center min-h-[350px] max-h-[65vh] overflow-hidden">
            <motion.img
              key={item.image}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              src={item.image}
              alt={item.title}
              className="max-h-full max-w-full object-contain select-none"
            />

            {/* Nav arrows */}
            {hasPrev && (
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-forest-900/80 hover:bg-gold-500 hover:text-forest-900 text-white border border-forest-700/60 transition-all shadow-lg active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {hasNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-forest-900/80 hover:bg-gold-500 hover:text-forest-900 text-white border border-forest-700/60 transition-all shadow-lg active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Footer info */}
          <div className="px-6 py-4 bg-forest-900 border-t border-forest-800/80 text-cream/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-cream/70 max-w-2xl leading-relaxed">
              {item.description}
            </p>
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <span className="text-[11px] text-cream/50 bg-forest-800 px-2.5 py-1 rounded border border-forest-700">
                Source: {item.source || 'CUP2EAT Archives'}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
