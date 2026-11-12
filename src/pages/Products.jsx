import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Coffee, Sparkles, Check, ArrowRight, ShieldCheck, 
  MessageSquare, Phone, Truck, Flame, Droplets, Info 
} from 'lucide-react';
import { PRODUCTS, WHOLESALE_OFFER } from '../data/products';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';
import AnimatedCounter from '../components/AnimatedCounter';
import BrandMarquee from '../components/BrandMarquee';
import FlavourStage from '../components/FlavourStage';

export default function Products() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#041912] text-cream">
      
      {/* Header Banner */}
      <section className="bg-forest-950 text-cream py-16 lg:py-24 border-b border-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-pattern opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block"
          >
            CUP2EAT Collection
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Our Signature Edible Cups
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-cream/80 max-w-xl mx-auto font-light leading-relaxed"
          >
            Crisp biscuit cups for hot coffee, Indian chai & gourmet sundaes. Drink it, then eat the cup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-800 text-gold-300">
              3 Signature Flavours
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-800 text-gold-300">
              Wholesale ₹3,999 for 396 Cups
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-800 text-gold-300">
              Delivery All Over India
            </span>
          </motion.div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <BrandMarquee />

      {/* Interactive Tasting Stage */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <FlavourStage />
        </ScrollReveal>
      </section>

      {/* Product Detailed Catalogue */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {PRODUCTS.map((product, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <ScrollReveal
              key={product.id}
              y={30}
              className="scroll-mt-28"
            >
              <div
                id={product.id}
                className="bg-forest-950/80 rounded-3xl p-6 sm:p-10 lg:p-12 border border-gold-500/20 shadow-2xl hover:border-gold-500/40 transition-colors backdrop-blur-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Image with 3D Tilt */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                    <TiltCard className="relative rounded-2xl overflow-hidden bg-forest-900 border border-forest-800 shadow-xl group">
                      <img
                        src={product.image}
                        alt={`${product.name} with beverage`}
                        className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-forest-950/90 backdrop-blur-md text-gold-400 text-xs font-mono font-bold px-3 py-1.5 rounded-full border border-forest-800 shadow-md">
                        {product.flavour}
                      </div>
                      <div className="absolute bottom-4 inset-x-4 bg-forest-950/95 backdrop-blur-md p-3.5 rounded-xl border border-forest-800 text-cream text-xs flex items-center justify-between font-mono">
                        <span className="text-gold-400 font-semibold">{product.colorTheme.badge}</span>
                        <span className="text-cream/70">Hot & Cold Ready</span>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold block mb-1">
                        {product.flavour}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                        {product.name}
                      </h2>
                      <p className="text-sm font-medium text-gold-300 italic mt-1">
                        "{product.tagline}"
                      </p>
                    </div>

                    {/* Serving Suggestions */}
                    <div className="bg-forest-900/60 p-5 rounded-2xl border border-forest-800 space-y-3">
                      <h4 className="font-serif text-sm font-bold text-gold-300 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold-400" />
                        <span>Recommended Serving Suggestions:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream/80">
                        {product.servingSuggestions.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="flex items-center gap-2 text-xs text-cream/70 font-mono">
                      <span className="font-bold text-gold-400">Ideal Venues:</span>
                      <span>{product.idealFor}</span>
                    </div>

                    {/* CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <MagneticButton className="w-full sm:w-auto">
                        <Link
                          to="/wholesale"
                          className="w-full sm:w-auto px-6 py-3 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider hover:shadow-gold-glow transition-all text-center flex items-center justify-center gap-2 group"
                        >
                          <span>Wholesale Inquiry</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </MagneticButton>

                      <MagneticButton className="w-full sm:w-auto">
                        <a
                          href={`https://wa.me/919818192575?text=Hello%20CUP2EAT,%20I%20am%20inquiring%20about%20ordering%20the%20${encodeURIComponent(product.name)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-cream text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-forest-800"
                        >
                          <MessageSquare className="w-4 h-4 text-emerald-400" />
                          <span>WhatsApp Inquiry</span>
                        </a>
                      </MagneticButton>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* Flavour Comparison Matrix */}
      <section className="py-20 bg-forest-950 border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
              Quick Flavour Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Compare Flavours & Pairings
            </h2>
            <p className="text-sm text-cream/70">
              Choose the perfect flavour match for your menu beverage concepts.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto bg-forest-900/60 rounded-2xl border border-gold-500/20 shadow-2xl backdrop-blur-md">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-forest-950 text-gold-400 border-b border-forest-800 font-mono">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold">Flavour</th>
                    <th className="p-4 sm:p-5 font-bold">Aroma & Taste Profile</th>
                    <th className="p-4 sm:p-5 font-bold">Best Beverage Pairing</th>
                    <th className="p-4 sm:p-5 font-bold">Best Dessert Pairing</th>
                    <th className="p-4 sm:p-5 font-bold">Primary Venue Match</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-800/60 text-cream/80">
                  <tr className="hover:bg-forest-900/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2 font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5C3826]"></span>
                      Chocolate
                    </td>
                    <td className="p-4 sm:p-5">Deep roasted cocoa, rich crunch, smooth biscuit sweetness</td>
                    <td className="p-4 sm:p-5 font-semibold text-gold-300">Espresso, Cappuccino, Mocha, Hot Cocoa</td>
                    <td className="p-4 sm:p-5">Vanilla & Hazelnut Gelato, Mousse</td>
                    <td className="p-4 sm:p-5">Specialty Coffee Roasters & Lounges</td>
                  </tr>
                  <tr className="hover:bg-forest-900/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2 font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
                      Vanilla
                    </td>
                    <td className="p-4 sm:p-5">Sweet golden biscuit aroma, buttery undertones, comforting finish</td>
                    <td className="p-4 sm:p-5 font-semibold text-gold-300">Masala Chai, Ginger Tea, Filter Coffee, Warm Milk</td>
                    <td className="p-4 sm:p-5">Fruit Sundaes, Puddings, Custards</td>
                    <td className="p-4 sm:p-5">Chai Cafés, Tea Outlets, Indian Bistros</td>
                  </tr>
                  <tr className="hover:bg-forest-900/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2 font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3F6247]"></span>
                      Elaichi
                    </td>
                    <td className="p-4 sm:p-5">Fragrant natural cardamom spice, subtle herbal sweetness</td>
                    <td className="p-4 sm:p-5 font-semibold text-gold-300">Kashmiri Kahwa, Saffron Milk, Elaichi Chai</td>
                    <td className="p-4 sm:p-5">Kulfi, Rabri, Pistachio Ice Cream</td>
                    <td className="p-4 sm:p-5">Boutique Tea Rooms, Weddings & Banquets</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Specification Clarification Note */}
            <div className="mt-8 p-4 rounded-xl bg-forest-900/40 border border-forest-800 text-xs text-cream/70 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Product Specifications & Technical Inquiries:</strong> Cup capacities, specific packaging carton dimensions, piece weights, shelf life recommendations, and ingredient batches are provided directly upon commercial enquiry for registered business buyers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Prominent Bulk Wholesale Banner */}
      <section className="py-20 bg-[#03140E] text-cream border-t border-gold-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal>
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block mb-2">
              Bulk Supply Tier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Order for Your Menu?
            </h2>
            <p className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto leading-relaxed pt-2">
              Take advantage of our advertised wholesale starter pack: <strong className="text-gold-400"><AnimatedCounter to={396} suffix=" Cups" /> for <AnimatedCounter to={3999} prefix="₹" /></strong> with delivery across India. Mixed flavour crates and custom event orders welcome.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  to="/wholesale"
                  className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider hover:shadow-gold-glow transition-all block"
                >
                  Request Commercial Quote
                </Link>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <a
                  href="tel:9818192575"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-forest-900 hover:bg-forest-800 text-cream border border-forest-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call +91 9818192575</span>
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
