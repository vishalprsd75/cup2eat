import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, Coffee, Heart, Target, Eye, ShieldCheck, 
  ArrowRight, Phone, MessageSquare, CheckCircle2 
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';
import RotatingSeal from '../components/RotatingSeal';
import BrandMarquee from '../components/BrandMarquee';

export default function About() {
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
            The CUP2EAT Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Redefining the <br />
            <span className="gold-gradient-text italic font-normal">Way We Drink.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto leading-relaxed"
          >
            Born out of a simple desire to replace throwaway cups with a deliciously memorable, zero-waste snacking ritual.
          </motion.p>
        </div>
      </section>

      {/* Marquee Ticker */}
      <BrandMarquee />

      {/* 2. BRAND INTRODUCTION & CONCEPT */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block mb-1">
                Our Concept
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Eat Your Drink: Turning Containers into Confections
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full mt-3"></div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-base sm:text-lg text-cream/90 leading-relaxed font-light">
                Instead of discarding your cup after 5 minutes, you eat it. Crisp baked biscuit cups infused with Chocolate, Vanilla, and Elaichi that eliminate single-use waste.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
                <div className="bg-forest-950 p-4 rounded-xl border border-gold-500/20">
                  <span className="font-serif text-2xl font-bold text-gold-400">100%</span>
                  <span className="block text-xs text-cream/70 mt-1">Edible & Zero Cup Litter</span>
                </div>
                <div className="bg-forest-950 p-4 rounded-xl border border-gold-500/20">
                  <span className="font-serif text-2xl font-bold text-gold-400">3 Flavours</span>
                  <span className="block text-xs text-cream/70 mt-1">Chocolate, Vanilla & Elaichi</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2}>
              <TiltCard className="relative rounded-3xl overflow-hidden bg-forest-950 border-2 border-gold-500/40 shadow-2xl">
                <img
                  src="/images/cup2eat-ad-poster.jpg"
                  alt="CUP2EAT Brand Concept Visual"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-forest-950 text-center text-xs text-gold-400 font-mono">
                  CUP2EAT: A Delicious & Sustainable Drinking Innovation
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 bg-forest-950 border-y border-forest-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <StaggerItem>
              <div className="bg-forest-900/60 p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-xl space-y-4 h-full hover:border-gold-500/40 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center border border-forest-800">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold block">
                  Our Purpose
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Our Mission
                </h3>
                <p className="text-sm text-cream/70 leading-relaxed">
                  To transform disposable beverage habits across Indian hospitality by supplying delicious, reliable edible cups that elevate beverage presentation while reducing single-use waste.
                </p>
              </div>
            </StaggerItem>

            {/* Vision */}
            <StaggerItem>
              <div className="bg-forest-900/60 p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-xl space-y-4 h-full hover:border-gold-500/40 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center border border-forest-800">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold block">
                  Our Direction
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Our Vision
                </h3>
                <p className="text-sm text-cream/70 leading-relaxed">
                  To make edible drinkware an accessible, beloved standard in coffee bars, chai corners, university campuses, and banquet events nationwide.
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* 4. FOUNDER SECTION: VARUN KHERA */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-forest-950 rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl text-cream relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-5 text-center lg:text-left">
                <div className="relative inline-block mx-auto lg:mx-0">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gold-500/60 shadow-2xl bg-forest-900 mx-auto"
                  >
                    <img
                      src="/images/instagram-profile.jpg"
                      alt="Founder Varun Khera on CUP2EAT Instagram"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                  <div className="mt-4">
                    <h3 className="font-serif text-2xl font-bold text-white">Varun Khera</h3>
                    <p className="text-xs uppercase font-mono tracking-wider text-gold-400 font-bold mt-0.5">
                      Founder, CUP2EAT
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
                  Brand Leadership
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Driving the Vision Behind CUP2EAT
                </h2>
                <p className="text-sm text-cream/80 leading-relaxed font-light">
                  Founded by <strong>Varun Khera</strong> to replace single-use paper cups across India with edible biscuit vessels that delight customers and eliminate cup litter.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                  <MagneticButton>
                    <a
                      href="https://instagram.com/cup2eat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-gold-300 font-semibold flex items-center gap-2 border border-forest-800 transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4 text-pink-400" />
                      <span>Follow @cup2eat</span>
                    </a>
                  </MagneticButton>

                  <MagneticButton>
                    <a
                      href="tel:9818192575"
                      className="px-5 py-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-cream font-semibold flex items-center gap-2 border border-forest-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-gold-400" />
                      <span>Call Direct: +91 9818192575</span>
                    </a>
                  </MagneticButton>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. TRANSPARENCY & FSSAI ADVERTISED STATUS */}
      <section className="py-12 bg-forest-950 border-t border-forest-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gold-400 bg-forest-900 px-4 py-1.5 rounded-full border border-forest-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>FSSAI Advertised Registration Claim</span>
          </div>
          <p className="text-xs text-cream/70 leading-relaxed">
            In our brand promotional media and Instagram official highlights, CUP2EAT displays an advertised FSSAI registration status. Full documentation, facility audit certificates, and formal registration numbers can be provided upon direct business inquiry for commercial contracts.
          </p>
        </div>
      </section>

    </div>
  );
}
