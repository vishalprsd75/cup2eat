import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, TrendingUp, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function WholesaleCalculator() {
  const [crates, setCrates] = useState(1);
  const [customerAddonPrice, setCustomerAddonPrice] = useState(35); // Price added to beverage bill for edible cup

  const cupsPerCrate = 396;
  const crateCost = 3999;
  const totalCups = crates * cupsPerCrate;
  const totalInvestment = crates * crateCost;
  const costPerCup = totalInvestment / totalCups;

  // Revenue calculation: if venue sells cup experience for e.g. Rs 35 per serve
  const grossRevenue = totalCups * customerAddonPrice;
  const netProfit = grossRevenue - totalInvestment;
  const profitMarginPercent = Math.round((netProfit / grossRevenue) * 100);

  const getWhatsAppMessage = () => {
    const text = `Hello CUP2EAT Wholesale Team,%0A%0AI used your Wholesale Margin Calculator:%0A• Order Volume: ${crates} Master Crate(s) (${totalCups} cups)%0A• Estimated Investment: Rs. ${totalInvestment.toLocaleString('en-IN')}%0A• Projected Add-on Price: Rs. ${customerAddonPrice} / cup%0A%0APlease confirm batch dispatch timeline for my city.`;
    return `https://wa.me/919818192575?text=${text}`;
  };

  return (
    <div className="bg-forest-950/90 rounded-3xl border border-gold-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-forest-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-mono text-gold-400 font-bold mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>Café & Venue ROI Estimator</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The Math of Serving Edible Cups
            </h3>
            <p className="text-xs sm:text-sm text-cream/70 mt-1 max-w-xl">
              Model your weekly cup investment against customer add-on ticket size to see how CUP2EAT becomes an immediate profit driver.
            </p>
          </div>

          <div className="bg-forest-900 px-4 py-2 rounded-xl border border-gold-500/20 text-xs text-gold-300 flex-shrink-0">
            <span>Advertised Rate: </span>
            <strong className="text-white text-sm">₹3,999 / 396 Cups</strong>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6">
            {/* Slider 1: Number of Crates */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-cream/80 uppercase tracking-wider">Order Crates:</span>
                <span className="text-gold-400 font-bold text-sm">
                  {crates} Crate{crates > 1 ? 's' : ''} ({totalCups.toLocaleString('en-IN')} Cups)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={crates}
                onChange={(e) => setCrates(Number(e.target.value))}
                className="w-full accent-[#D6A64B] cursor-pointer h-2 bg-forest-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-cream/40 font-mono">
                <span>1 Crate (396 cups)</span>
                <span>5 Crates (1,980 cups)</span>
                <span>10 Crates (3,960 cups)</span>
              </div>
            </div>

            {/* Slider 2: Add-on Price per Cup */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-cream/80 uppercase tracking-wider">Your Beverage Menu Add-On:</span>
                <span className="text-gold-400 font-bold text-sm">
                  +₹{customerAddonPrice} / Beverage
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="75"
                step="5"
                value={customerAddonPrice}
                onChange={(e) => setCustomerAddonPrice(Number(e.target.value))}
                className="w-full accent-[#D6A64B] cursor-pointer h-2 bg-forest-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-cream/40 font-mono">
                <span>+₹20 (Modest Premium)</span>
                <span>+₹40 (Artisanal Coffee)</span>
                <span>+₹75 (Gourmet Sundae)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-forest-900/60 border border-forest-800 text-xs text-cream/70 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Unit Cost to your kitchen: approx. <strong>₹{costPerCup.toFixed(2)}</strong> per edible cup.</span>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-forest-900 rounded-2xl p-6 border border-gold-500/30 space-y-5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 block font-bold">
              Projected Returns ({totalCups.toLocaleString('en-IN')} Servings)
            </span>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-forest-950 p-3.5 rounded-xl border border-forest-800">
                <span className="block text-[11px] text-cream/60">Wholesale Outlay</span>
                <span className="text-xl font-bold font-mono text-white">
                  ₹{totalInvestment.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="bg-forest-950 p-3.5 rounded-xl border border-forest-800">
                <span className="block text-[11px] text-cream/60">Est. Patron Sales</span>
                <span className="text-xl font-bold font-mono text-gold-400">
                  ₹{grossRevenue.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-forest-950 to-forest-900 p-4 rounded-xl border border-gold-500/40 flex items-center justify-between">
              <div>
                <span className="block text-xs uppercase tracking-wider text-cream/70 font-semibold">Net Extra Margin</span>
                <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                  +₹{netProfit.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] uppercase tracking-wider text-cream/60">Margin Ratio</span>
                <span className="text-lg font-bold font-mono text-gold-300">
                  {profitMarginPercent}%
                </span>
              </div>
            </div>

            <MagneticButton className="w-full">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire for {crates} Crate{crates > 1 ? 's' : ''} on WhatsApp</span>
              </a>
            </MagneticButton>
          </div>

        </div>

      </div>
    </div>
  );
}

