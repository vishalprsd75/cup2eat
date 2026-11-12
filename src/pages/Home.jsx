import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Coffee, ShieldCheck, CheckCircle2, 
  MessageSquare, Phone, Truck, Store, Utensils, Hotel, 
  IceCream, PartyPopper, Cake, HelpCircle, AlertCircle, 
  Calculator, Flame, Droplets, Check 
} from 'lucide-react';
import { PRODUCTS, WHOLESALE_OFFER } from '../data/products';
import { GALLERY_ITEMS } from '../data/gallery';
import LightboxModal from '../components/LightboxModal';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import RotatingSeal from '../components/RotatingSeal';
import BrandMarquee from '../components/BrandMarquee';
import EditorialRitual from '../components/EditorialRitual';
import FlavourStage from '../components/FlavourStage';
import WholesaleCalculator from '../components/WholesaleCalculator';
import HeroShowcase from '../components/HeroShowcase';
import BeveragePairing from '../components/BeveragePairing';
import FoundersManifesto from '../components/FoundersManifesto';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroParallax = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  const applications = [
    {
      title: 'Cafés & Specialty Roasters',
      desc: 'Serve specialty lattes, cappuccinos, and flat whites in cups patrons can eat, generating viral Instagram buzz.',
      icon: Coffee,
      tag: 'High Footfall'
    },
    {
      title: 'Chai Bars & Tea Lounges',
      desc: 'Reinvent the classic biscuit-with-chai tradition by serving piping hot masala chai directly inside a vanilla or elaichi cup.',
      icon: Utensils,
      tag: 'Customer Favourite'
    },
    {
      title: 'Restaurants & Fine Dining',
      desc: 'Upgrade after-dinner coffee and dessert presentations with an interactive, edible dining feature.',
      icon: Store,
      tag: 'Signature Dining'
    },
    {
      title: 'Gelato & Ice Cream Parlours',
      desc: 'Offer a crunchy waffle-style biscuit base that keeps sundaes neat and crispy until the last bite.',
      icon: IceCream,
      tag: 'Dessert Pairing'
    },
    {
      title: 'Corporate Galas & Weddings',
      desc: 'Zero waste beverage service at corporate conferences, weddings, college fests, and food festivals.',
      icon: PartyPopper,
      tag: 'Zero-Waste Buzz'
    },
    {
      title: 'Luxury Boutique Hotels',
      desc: 'Deliver memorable welcome drinks, high tea services, and eco-conscious hospitality perks.',
      icon: Hotel,
      tag: 'Premium Hospitality'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Edible Experience',
      desc: 'Every cup is a baked, crispy treat. When your hot beverage is finished, enjoy the rich chocolate, vanilla, or elaichi biscuit vessel.',
      icon: Coffee
    },
    {
      title: 'Innovative Concept',
      desc: 'Stand out from saturated conventional drinkware. The novelty of "Eat Your Drink" creates immediate organic word-of-mouth.',
      icon: Sparkles
    },
    {
      title: 'Business Opportunities',
      desc: 'Wholesale packs designed for commercial profit margins, premium beverage pricing tiers, and memorable guest experiences.',
      icon: Store
    },
    {
      title: 'A Fresh Take on Sustainability',
      desc: 'A delicious alternative to single-use disposable cups. You eat the container, leaving zero cup litter behind.',
      icon: CheckCircle2
    }
  ];

  const line1Words = ['WHY', 'JUST', 'DRINK', 'IT,'];
  const line2Words = ['WHEN', 'YOU', 'CAN', 'EAT', 'IT?'];

  return (
    <div className="min-h-screen bg-[#041912] text-cream overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION ("THE HIGH-FASHION CULINARY MASTHEAD") */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-forest-950 text-cream pt-10 pb-20 lg:pt-16 lg:pb-28"
      >
        {/* Subtle background glow & parallax mesh */}
        <motion.div
          style={{ y: heroParallax, opacity: heroOpacity }}
          className="absolute inset-0 bg-subtle-pattern opacity-15 pointer-events-none"
        ></motion.div>
        
        {/* Floating Atmospheric Ambient Light Halos */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.28, 0.15],
            x: [0, 30, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-gold-500/15 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-48 -left-48 w-[36rem] h-[36rem] rounded-full bg-forest-700/30 blur-3xl pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Grand Editorial Headline & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Animated Eyebrow Badge with Rotating Seal Cue */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/90 border border-gold-500/30 text-gold-300 text-xs font-mono font-semibold tracking-wider shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                  </span>
                  <span>EST. INDIA • ZERO SINGLE-USE WASTE</span>
                </motion.div>

                <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-cream/60 font-mono">
                  <span>✦</span>
                  <span>FSSAI REGISTERED (CLAIM)</span>
                </div>
              </div>

              {/* Large Headline with Staggered Word Reveal */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                <span className="block overflow-hidden">
                  {line1Words.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.15 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block mr-3"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>

                <span className="block overflow-hidden mt-1">
                  {line2Words.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.5 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block mr-3 gold-gradient-text italic font-normal"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h1>

              {/* Gold Underline Accent */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
                className="w-36 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-transparent rounded-full mx-auto lg:mx-0"
              />

              {/* Minimal Editorial Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="text-base sm:text-lg text-cream/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
              >
                Crispy biscuit cups that hold hot chai & coffee for 40+ minutes. Drink it, then eat the cup.
              </motion.p>

              {/* Flavour Badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.05 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-cream/90 pt-1"
              >
                <span className="flex items-center gap-1.5 bg-forest-900/80 px-3.5 py-1.5 rounded-lg border border-forest-800">
                  <span className="w-2 h-2 rounded-full bg-[#5C3826]"></span>
                  Chocolate
                </span>
                <span className="flex items-center gap-1.5 bg-forest-900/80 px-3.5 py-1.5 rounded-lg border border-forest-800">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                  Vanilla
                </span>
                <span className="flex items-center gap-1.5 bg-forest-900/80 px-3.5 py-1.5 rounded-lg border border-forest-800">
                  <span className="w-2 h-2 rounded-full bg-[#3F6247]"></span>
                  Elaichi
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
              >
                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    to="/products"
                    className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow transition-all text-center flex items-center justify-center gap-2 group"
                  >
                    <span>Explore Our Cups</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    to="/wholesale"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-900 hover:bg-forest-800 text-cream border border-gold-500/40 hover:border-gold-400 font-semibold text-xs tracking-wide transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>Wholesale Enquiry</span>
                    <span className="text-gold-400 font-bold">₹3,999 Offer</span>
                  </Link>
                </MagneticButton>
              </motion.div>

            </div>

            {/* Right Column: Interactive Studio Hero Showcase */}
            <div className="lg:col-span-5 relative">
              <HeroShowcase />
            </div>

          </div>

          {/* Editorial Split Statistics Bar Across Bottom of Hero */}
          <div className="mt-16 pt-8 border-t border-gold-500/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
            <div className="p-4 rounded-2xl bg-forest-900/40 border border-forest-800">
              <span className="text-2xl sm:text-3xl font-black text-gold-400 block mb-0.5">396</span>
              <span className="text-[10px] uppercase tracking-widest text-cream/60">Cups / Master Crate</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest-900/40 border border-forest-800">
              <span className="text-2xl sm:text-3xl font-black text-gold-400 block mb-0.5">₹10.10</span>
              <span className="text-[10px] uppercase tracking-widest text-cream/60">Est. Unit Cost</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest-900/40 border border-forest-800">
              <span className="text-2xl sm:text-3xl font-black text-gold-400 block mb-0.5">40+ Min</span>
              <span className="text-[10px] uppercase tracking-widest text-cream/60">Hot Sip Hold Time</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest-900/40 border border-forest-800">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 block mb-0.5">0%</span>
              <span className="text-[10px] uppercase tracking-widest text-cream/60">Cup Waste Left Behind</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LUXURY EDITORIAL MARQUEE TICKER */}
      <BrandMarquee />

      {/* 3. THE SENSORY TASTING STAGE ("THE TASTING ROOM") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <FlavourStage />
        </ScrollReveal>

        {/* 3B. FEATURED TRIO FLAVOUR CARDS SHOWCASE */}
        <div className="mt-20 pt-16 border-t border-forest-800">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-gold-400 font-bold block">
              Menu Portfolio
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Three Signature Flavours
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative rounded-3xl overflow-hidden bg-forest-950/90 border border-gold-500/25 hover:border-gold-500/60 shadow-xl hover:shadow-2xl transition-all flex flex-col"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-900">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Flavour Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-forest-950/90 text-gold-300 border border-gold-500/40 backdrop-blur-md shadow-md">
                      {prod.flavour}
                    </span>
                  </div>

                  {/* Advertised Pairing Pill */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-cream/90 bg-forest-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-forest-800">
                    <span className="text-gold-400 font-semibold">{prod.advertisedPairing}</span>
                    <span className="text-emerald-400 font-bold">40+ Min Hold</span>
                  </div>
                </div>

                {/* Card Body - Minimal & Punchy */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-gold-300/90 font-mono">
                      {prod.idealFor}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-forest-800/80 flex items-center gap-3">
                    <Link
                      to={`/products#${prod.id}`}
                      className="flex-1 py-2.5 px-4 rounded-xl text-center text-xs font-bold font-mono uppercase tracking-wider bg-forest-900 hover:bg-forest-800 text-cream border border-forest-800 hover:border-gold-500/40 transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      to="/wholesale"
                      className="py-2.5 px-5 rounded-xl text-center text-xs font-bold font-mono uppercase tracking-wider gold-gradient-bg text-forest-950 hover:opacity-95 shadow-md transition-opacity"
                    >
                      Order
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3C. INTERACTIVE BEVERAGE PAIRING SIMULATOR */}
        <div className="mt-20">
          <BeveragePairing />
        </div>
      </section>

      {/* 4. THE FOUR MOMENTS OF CUP2EAT ("EDITORIAL RITUAL") */}
      <EditorialRitual />

      {/* 5. INTERACTIVE WHOLESALE MARGIN & ROI CALCULATOR */}
      <section id="calculator" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <WholesaleCalculator />
        </ScrollReveal>
      </section>

      {/* 6. WHOLESALE CAMPAIGN SPOTLIGHT & VERIFIED AD POSTER */}
      <section className="py-24 bg-forest-950 border-t border-forest-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-900/80 rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-gold-500/40 shadow-2xl text-cream">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-950 border border-gold-500/40 text-gold-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Wholesale & Institutional
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Factory Wholesale <br className="hidden sm:inline" />
                  <span className="gold-gradient-text">Starter Crate</span>
                </h2>

                <p className="text-sm text-cream/75 max-w-lg font-light leading-relaxed">
                  Turnkey crate of 396 edible cups in 3 flavours. Delivered directly to your venue across India.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1 font-mono">
                  <div className="bg-forest-950 p-4 rounded-xl border border-forest-800">
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 block font-semibold mb-0.5">Price</span>
                    <span className="text-2xl font-black text-white">
                      <AnimatedCounter to={3999} prefix="₹" />
                    </span>
                  </div>
                  <div className="bg-forest-950 p-4 rounded-xl border border-forest-800">
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 block font-semibold mb-0.5">Volume</span>
                    <span className="text-2xl font-black text-white">
                      <AnimatedCounter to={396} suffix=" Cups" />
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 bg-forest-950 p-4 rounded-xl border border-forest-800">
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 block font-semibold mb-0.5">Coverage</span>
                    <span className="text-base font-bold text-white flex items-center gap-1.5 mt-1">
                      <Truck className="w-4 h-4 text-gold-400" />
                      All India
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-forest-950/80 border border-gold-500/20 text-xs text-cream/70">
                  <span className="text-gold-300 font-semibold font-mono">Note: </span>
                  <span>Displayed offer should be reconfirmed with the business before purchase.</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <MagneticButton className="w-full sm:w-auto">
                    <Link
                      to="/wholesale"
                      className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-lg transition-all text-center block"
                    >
                      Explore Wholesale Opportunities
                    </Link>
                  </MagneticButton>

                  <MagneticButton className="w-full sm:w-auto">
                    <a
                      href={WHOLESALE_OFFER.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-4 rounded-full bg-forest-950 hover:bg-forest-800 text-emerald-400 border border-emerald-500/40 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Enquiry (+91 9818192575)</span>
                    </a>
                  </MagneticButton>
                </div>
              </div>

              {/* Clean Cropped Poster Column */}
              <div className="lg:col-span-5">
                <TiltCard className="relative rounded-3xl overflow-hidden border-2 border-gold-500/50 shadow-2xl bg-forest-950">
                  <img
                    src="/images/cup2eat-ad-poster.jpg"
                    alt="CUP2EAT Wholesale Offer ₹3,999 for 396 cups"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-forest-950 text-center text-xs text-gold-400 font-mono">
                    Official Brand Wholesale Campaign Poster
                  </div>
                </TiltCard>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS & VENUES */}
      <section className="py-24 bg-[#041912] border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-gold-400 font-bold block">
              Hospitality Deployments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Designed For Every Food & Beverage Venue
            </h2>
            <p className="text-sm sm:text-base text-cream/70">
              From fast-paced street chai corners to high-end banquet catering.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="bg-forest-900/60 p-7 rounded-2xl border border-forest-800 hover:border-gold-500/40 hover:bg-forest-900 transition-all duration-300 flex flex-col justify-between h-full group shadow-lg">
                    <div>
                      <div className="flex items-center justify-between mb-5 pb-3 border-b border-forest-800">
                        <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-forest-950 text-gold-400 px-3 py-1 rounded-full border border-forest-800">
                          {app.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-white mb-2">
                        {app.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                        {app.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-forest-800/80">
                      <Link
                        to="/wholesale"
                        className="text-xs font-mono font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Inquire for {app.title.split('&')[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 7B. FOUNDER'S MANIFESTO & INSTAGRAM PROFILE */}
      <FoundersManifesto />

      {/* 8. GALLERY PREVIEW */}
      <section className="py-24 bg-forest-950 border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-gold-400 font-bold block">
                Visual Archives
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                Moments & Presentations
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-xs uppercase tracking-wider font-mono font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1.5 self-start md:self-auto group"
            >
              <span>View Full Brand Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <StaggerItem key={item.id}>
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-forest-900 border border-forest-800 shadow-md hover:shadow-2xl transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] uppercase font-mono font-bold text-gold-400">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-sm font-bold leading-tight mt-0.5 group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-24 bg-[#03140E] text-cream relative overflow-hidden border-t border-gold-500/20">
        <div className="absolute inset-0 bg-subtle-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <ScrollReveal>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight mt-4">
              Ready to Serve Something Different?
            </h2>

            <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed pt-2">
              Give your patrons a talk-of-the-town drinking experience that eliminates disposable waste. Reach out directly for pricing, tasting samples, and commercial distribution across India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider hover:shadow-gold-glow transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <a
                  href="https://wa.me/919818192575?text=Hello%20CUP2EAT,%20I%20would%20like%20to%20order%20edible%20cups%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-950 hover:bg-emerald-900 text-emerald-300 hover:text-white border border-emerald-500/50 font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us Direct (+91 9818192575)</span>
                </a>
              </MagneticButton>
            </div>

            <div className="pt-6 text-xs text-cream/50 font-mono">
              Founder: Varun Khera • Instagram: @cup2eat • Pan-India Logistics
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal
          item={selectedImage}
          onClose={() => setSelectedImage(null)}
          hasPrev={false}
          hasNext={false}
        />
      )}

    </div>
  );
}
