import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

export default function FoundersManifesto() {
  return (
    <section className="py-24 bg-forest-950 border-t border-forest-800 relative overflow-hidden text-cream">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-forest-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Instagram Profile Spotlight */}
          <div className="lg:col-span-5 space-y-4">
            <TiltCard className="rounded-3xl overflow-hidden bg-forest-900 border-2 border-gold-500/35 shadow-2xl group">
              <div className="relative">
                <img
                  src="/images/instagram-profile.jpg"
                  alt="Founder Varun Khera and CUP2EAT Instagram Community"
                  className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent pointer-events-none" />
              </div>
              
              <div className="p-6 bg-forest-950/90 border-t border-forest-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gold-400 font-bold block">Brand Founder</span>
                    <h4 className="font-serif text-xl font-bold text-white">Varun Khera</h4>
                  </div>
                  <span className="text-xs font-mono text-cream/70 bg-forest-900 px-3 py-1.5 rounded-full border border-forest-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pink-500" />
                    @cup2eat
                  </span>
                </div>
                
                <p className="text-xs text-cream/75 leading-relaxed font-sans">
                  "Cup2Eat – Eat Your drink 🍸😋 | Eco-friendly | Edible Cups | Zero Waste | Revolutionizing the way you drink!"
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-gold-300 border-t border-forest-800/80">
                  <span>116 Posts • 1,073+ Followers</span>
                  <a
                    href="https://www.instagram.com/cup2eat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Editorial Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/40 text-gold-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5 text-gold-400" />
              Founder's Manifesto
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              "Why Discard What You Can <span className="gold-gradient-text">Eat?</span>"
            </h2>

            <div className="space-y-3 pt-2">
              <p className="text-lg sm:text-xl text-cream/90 font-serif italic leading-relaxed">
                "What if your cup was as delicious as the drink inside it? We turned single-use waste into a crunchy biscuit dessert."
              </p>
              <p className="text-xs text-gold-400 font-mono uppercase tracking-wider">
                — Varun Khera, Founder
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-forest-800 text-xs font-mono">
              <div className="p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800">
                <span className="text-gold-400 font-bold block mb-1">01. 40+ Min Hold</span>
                <span className="text-cream/70 text-[11px] leading-tight block">Zero leakage with 85°C hot tea & coffee</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800">
                <span className="text-gold-400 font-bold block mb-1">02. Zero Waste</span>
                <span className="text-cream/70 text-[11px] leading-tight block">100% edible biscuit. No bin required.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-forest-900/60 border border-forest-800">
                <span className="text-gold-400 font-bold block mb-1">03. All-India</span>
                <span className="text-cream/70 text-[11px] leading-tight block">Factory crates of 396 cups delivered</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href="https://wa.me/919818192575?text=Hello%20Varun,%20I%20am%20interested%20in%20introducing%20CUP2EAT%20edible%20cups%20to%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow hover:shadow-lg transition-all"
                >
                  <span>Connect With Founder Sales</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              <span className="text-xs text-cream/60 font-mono">
                WhatsApp Helpline: +91 9818192575
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}