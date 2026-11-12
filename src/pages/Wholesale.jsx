import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, CheckCircle2, ShieldCheck, Phone, MessageSquare, 
  Sparkles, Building2, Store, Utensils, HelpCircle, 
  Send, AlertTriangle, ArrowRight, Package, Calculator 
} from 'lucide-react';
import { WHOLESALE_OFFER } from '../data/products';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import BrandMarquee from '../components/BrandMarquee';
import WholesaleCalculator from '../components/WholesaleCalculator';

export default function Wholesale() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'Café / Coffee Shop',
    estimatedQuantity: '1 Master Crate (396 cups - ₹3,999)',
    flavourPreference: 'Mixed Flavours (Chocolate, Vanilla & Elaichi)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const businessTypes = [
    'Café / Coffee Shop',
    'Tea Stall / Chai Bar',
    'Restaurant / Bistro',
    'Ice Cream / Gelato Parlour',
    'Catering & Banquet Service',
    'Hotel & Resort',
    'Institutional / Corporate Cafeteria',
    'Regional Distributor / Wholesaler',
    'Other'
  ];

  const quantityOptions = [
    '1 Master Crate (396 cups - ₹3,999 Advertised Offer)',
    '2 - 5 Crates (792 - 1,980 cups)',
    '6 - 15 Crates (Bulk Café Tier)',
    '16+ Crates (Commercial Regional Distribution)',
    'Custom Quantity for Upcoming Event / Exhibition'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.businessName.trim()) errs.businessName = 'Business or Organization Name is required';
    
    const phoneRegex = /^[0-9+ -]{10,14}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required for order coordination';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.city.trim()) errs.city = 'City / Location is required for logistics';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const generateWhatsAppInquiryUrl = () => {
    const text = `Hello CUP2EAT Wholesale Team,%0A%0AI would like to place a wholesale inquiry:%0A• Name: ${encodeURIComponent(formData.fullName || 'Business Owner')}%0A• Business: ${encodeURIComponent(formData.businessName || 'Business')}%0A• City: ${encodeURIComponent(formData.city || 'India')}%0A• Business Type: ${encodeURIComponent(formData.businessType)}%0A• Est. Quantity: ${encodeURIComponent(formData.estimatedQuantity)}%0A• Phone: ${encodeURIComponent(formData.phone || '')}%0A%0APlease share pricing and dispatch schedule.`;
    return `https://wa.me/919818192575?text=${text}`;
  };

  const steps = [
    {
      step: '01',
      title: 'Submit Inquiry',
      desc: 'Fill out the business form below or message our wholesale helpline directly on WhatsApp with your city and target quantity.'
    },
    {
      step: '02',
      title: 'Order Reconfirmation',
      desc: 'Our team contacts you to verify current stock, confirm flavour allocation (Chocolate/Vanilla/Elaichi), freight costs, and GST details.'
    },
    {
      step: '03',
      title: 'Dispatch & Delivery',
      desc: 'Your master carton crates are securely packed and dispatched via logistics partners across India right to your business doorstep.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#041912] text-cream">
      
      {/* 1. HERO SECTION */}
      <section className="bg-forest-950 text-cream py-16 lg:py-24 border-b border-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-pattern opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 border border-gold-500/40 text-gold-400 text-xs font-mono font-bold uppercase tracking-wider"
            >
              <Truck className="w-3.5 h-3.5" />
              Direct Factory Wholesale & Distribution
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            >
              Your Next Bestselling <br />
              <span className="gold-gradient-text">Product Starts Here.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm sm:text-base text-cream/80 leading-relaxed max-w-2xl mx-auto"
            >
              Equip your café, restaurant, ice cream parlour, or catering brand with edible cups that turn every customer beverage into viral organic marketing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <BrandMarquee />

      {/* 2. ADVERTISED WHOLESALE OFFER SPOTLIGHT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-forest-950 rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-gold-500/40 shadow-2xl text-cream overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-mono font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                  Featured Campaign Offer
                </div>

                <div className="flex flex-wrap items-baseline gap-4 font-mono">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-white">
                    <AnimatedCounter to={3999} prefix="₹" />
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-gold-400">
                    / <AnimatedCounter to={396} suffix=" Cups" />
                  </span>
                  <span className="text-xs bg-forest-900 px-3 py-1 rounded-full border border-forest-800 text-cream/80">
                    Approx. ₹10.10 per cup
                  </span>
                </div>

                <p className="text-sm text-cream/80 max-w-xl font-light">
                  Starter crate with mixed flavours (Chocolate, Vanilla, Elaichi). Dispatched across India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-cream/90 font-mono">
                  <div className="flex items-center gap-2 bg-forest-900/90 p-3 rounded-xl border border-forest-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>Delivery Across India</span>
                  </div>
                  <div className="flex items-center gap-2 bg-forest-900/90 p-3 rounded-xl border border-forest-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>Mixed Flavour Packs</span>
                  </div>
                  <div className="flex items-center gap-2 bg-forest-900/90 p-3 rounded-xl border border-forest-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>FSSAI Registered (Claim)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="lg:col-span-4 bg-forest-900 p-6 rounded-2xl border border-forest-800 text-center space-y-4">
                <div className="text-xs uppercase font-mono font-bold text-gold-400 tracking-wider">
                  Need Immediate Dispatch?
                </div>
                <div className="text-sm text-cream/80">
                  Speak directly with founder sales coordination:
                </div>
                <MagneticButton className="w-full">
                  <a
                    href={WHOLESALE_OFFER.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all block"
                  >
                    <MessageSquare className="w-4 h-4 inline-block" />
                    <span>WhatsApp 9818192575</span>
                  </a>
                </MagneticButton>
                <MagneticButton className="w-full">
                  <a
                    href="tel:9818192575"
                    className="w-full py-3 rounded-xl bg-forest-950 hover:bg-forest-800 text-cream font-semibold text-xs flex items-center justify-center gap-2 border border-forest-800 transition-colors block"
                  >
                    <Phone className="w-4 h-4 text-gold-400 inline-block" />
                    <span>Call +91 9818192575</span>
                  </a>
                </MagneticButton>
              </div>

            </div>

            {/* Crucial Verification Notice */}
            <div className="mt-8 pt-4 border-t border-forest-800 text-xs text-cream/70 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Important Notice:</strong> The displayed offer of ₹3,999 for 396 cups represents the advertised commercial rate from official brand promotional campaigns. All orders, taxes, delivery estimates, and commercial terms should be reconfirmed directly with CUP2EAT before purchase.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2B. WHAT'S INSIDE YOUR 396-CUP MASTER CRATE */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-forest-950/90 rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold block">
                  Crate Flavour Allocation
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Three Flavours. One Turnkey Supply Box.
                </h3>
                <p className="text-sm text-cream/80 leading-relaxed">
                  Every advertised master crate is curated to give your café or dessert outlet complete menu versatility: coffee-pairing chocolate, authentic chai-pairing vanilla, and royal cardamom for gourmet scoops.
                </p>

                <div className="pt-2 space-y-2.5 text-xs font-mono text-cream/90">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-forest-900 border border-forest-800">
                    <span className="w-3 h-3 rounded-full bg-[#5C3826] flex-shrink-0" />
                    <div>
                      <strong className="text-white block font-sans text-sm">Rich Chocolate</strong>
                      <span className="text-cream/70 text-[11px]">Best for Cappuccinos, Flat Whites & Espresso</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-forest-900 border border-forest-800">
                    <span className="w-3 h-3 rounded-full bg-[#D4AF37] flex-shrink-0" />
                    <div>
                      <strong className="text-white block font-sans text-sm">Classic Golden Vanilla</strong>
                      <span className="text-cream/70 text-[11px]">Best for Steaming Indian Masala Chai & Milk Teas</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-forest-900 border border-forest-800">
                    <span className="w-3 h-3 rounded-full bg-[#3F6247] flex-shrink-0" />
                    <div>
                      <strong className="text-white block font-sans text-sm">Cardamom Infused (Elaichi)</strong>
                      <span className="text-cream/70 text-[11px]">Best for Kulfi, Ice Cream Sundaes & Desserts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Studio Product Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="group rounded-2xl overflow-hidden bg-forest-900 border border-gold-500/20 hover:border-gold-500/50 shadow-lg transition-all">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src="/images/cup-chocolate-studio.jpg"
                      alt="Rich Chocolate Cup with Cappuccino"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-forest-950/90 text-gold-400 border border-forest-800">
                      Chocolate
                    </span>
                  </div>
                  <div className="p-3 text-center bg-forest-950/80">
                    <span className="text-xs font-serif font-bold text-white block">Coffee Ready</span>
                    <span className="text-[10px] text-cream/60 font-mono">Heart Latte Art</span>
                  </div>
                </div>

                <div className="group rounded-2xl overflow-hidden bg-forest-900 border border-gold-500/20 hover:border-gold-500/50 shadow-lg transition-all">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src="/images/cup-vanilla-studio.jpg"
                      alt="Classic Golden Vanilla Cup with Chai"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-forest-950/90 text-gold-400 border border-forest-800">
                      Vanilla
                    </span>
                  </div>
                  <div className="p-3 text-center bg-forest-950/80">
                    <span className="text-xs font-serif font-bold text-white block">Chai Ready</span>
                    <span className="text-[10px] text-cream/60 font-mono">Steaming Kadak</span>
                  </div>
                </div>

                <div className="group rounded-2xl overflow-hidden bg-forest-900 border border-gold-500/20 hover:border-gold-500/50 shadow-lg transition-all">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src="/images/cup-elaichi-studio.jpg"
                      alt="Cardamom Infused Cup with Sundae"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-forest-950/90 text-gold-400 border border-forest-800">
                      Elaichi
                    </span>
                  </div>
                  <div className="p-3 text-center bg-forest-950/80">
                    <span className="text-xs font-serif font-bold text-white block">Dessert Ready</span>
                    <span className="text-[10px] text-cream/60 font-mono">Sundae Scoop</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INTERACTIVE B2B ROI & MARGIN CALCULATOR */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <WholesaleCalculator />
        </ScrollReveal>
      </section>

      {/* 4. THREE-STEP BULK ORDER PROCESS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-2 mb-14">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
            Smooth Fulfillment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            How The Wholesale Order Process Works
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, i) => (
            <StaggerItem key={i}>
              <div className="bg-forest-950 p-8 rounded-3xl border border-gold-500/20 shadow-xl space-y-3 relative group hover:border-gold-500/50 hover:-translate-y-1 transition-all h-full">
                <span className="font-mono text-4xl font-black text-gold-500 block">
                  {st.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 5. WHOLESALE INQUIRY FORM */}
      <section className="py-20 bg-forest-950 border-t border-forest-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-forest-900/70 rounded-3xl p-6 sm:p-10 lg:p-12 border border-gold-500/30 shadow-2xl backdrop-blur-md">
              
              <div className="text-center space-y-2 mb-8">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
                  B2B Order Form
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Request a Wholesale Quote
                </h2>
                <p className="text-xs sm:text-sm text-cream/70 max-w-lg mx-auto">
                  Fill in your business details. Our commercial distribution team will reach out to confirm pricing and logistics.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-forest-950 text-cream p-8 sm:p-12 rounded-2xl text-center space-y-4 border border-forest-800"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Inquiry Received!
                    </h3>
                    
                    <p className="text-sm text-cream/80 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. Your commercial inquiry for <strong>{formData.businessName}</strong> has been logged in our frontend demonstration.
                    </p>
                    
                    <div className="p-4 rounded-xl bg-forest-900 border border-forest-800 text-xs text-gold-300 max-w-md mx-auto text-left space-y-1 font-mono">
                      <p><strong>Estimated Order:</strong> {formData.estimatedQuantity}</p>
                      <p><strong>Target City:</strong> {formData.city}</p>
                      <p><strong>Direct Helpline:</strong> +91 9818192575</p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <MagneticButton>
                        <a
                          href={generateWhatsAppInquiryUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Send via WhatsApp Now</span>
                        </a>
                      </MagneticButton>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            businessName: '',
                            phone: '',
                            email: '',
                            city: '',
                            businessType: 'Café / Coffee Shop',
                            estimatedQuantity: '1 Master Crate (396 cups - ₹3,999)',
                            flavourPreference: 'Mixed Flavours (Chocolate, Vanilla & Elaichi)',
                            message: ''
                          });
                        }}
                        className="px-6 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-cream text-xs font-semibold"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>

                    <p className="text-[11px] text-cream/50 pt-2 font-mono">
                      *Note: Submitting this inquiry form does not confirm or charge for an order.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* 2-Col Grid: Name & Business */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-xl bg-forest-950 border ${
                            errors.fullName ? 'border-red-500' : 'border-forest-800'
                          } text-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500`}
                        />
                        {errors.fullName && (
                          <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="e.g. Roastery & Co."
                          className={`w-full px-4 py-3 rounded-xl bg-forest-950 border ${
                            errors.businessName ? 'border-red-500' : 'border-forest-800'
                          } text-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500`}
                        />
                        {errors.businessName && (
                          <p className="text-red-400 text-xs mt-1">{errors.businessName}</p>
                        )}
                      </div>
                    </div>

                    {/* 2-Col Grid: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                          Mobile Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9818192575"
                          className={`w-full px-4 py-3 rounded-xl bg-forest-950 border ${
                            errors.phone ? 'border-red-500' : 'border-forest-800'
                          } text-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500`}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. contact@business.com"
                          className={`w-full px-4 py-3 rounded-xl bg-forest-950 border ${
                            errors.email ? 'border-red-500' : 'border-forest-800'
                          } text-white text-sm focus:outline-none focus:border-gold-500`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* 2-Col Grid: City & Business Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                          City & State *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Mumbai, Maharashtra"
                          className={`w-full px-4 py-3 rounded-xl bg-forest-950 border ${
                            errors.city ? 'border-red-500' : 'border-forest-800'
                          } text-white text-sm focus:outline-none focus:border-gold-500`}
                        />
                        {errors.city && (
                          <p className="text-red-400 text-xs mt-1">{errors.city}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                          Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 text-white text-sm focus:outline-none focus:border-gold-500"
                        >
                          {businessTypes.map((type) => (
                            <option key={type} value={type} className="bg-forest-950 text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Estimated Quantity & Flavours */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                          Estimated Volume
                        </label>
                        <select
                          name="estimatedQuantity"
                          value={formData.estimatedQuantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 text-white text-sm focus:outline-none focus:border-gold-500"
                        >
                          {quantityOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-forest-950 text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                          Flavour Preferences
                        </label>
                        <select
                          name="flavourPreference"
                          value={formData.flavourPreference}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 text-white text-sm focus:outline-none focus:border-gold-500"
                        >
                          <option value="Mixed Flavours (Chocolate, Vanilla & Elaichi)" className="bg-forest-950 text-white">
                            Mixed (Chocolate, Vanilla & Elaichi)
                          </option>
                          <option value="Chocolate Only" className="bg-forest-950 text-white">Chocolate Only (Best for Coffee)</option>
                          <option value="Vanilla Only" className="bg-forest-950 text-white">Vanilla Only (Best for Chai)</option>
                          <option value="Elaichi Only" className="bg-forest-950 text-white">Elaichi Only (Traditional Chai & Kulfi)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Special Requirements */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                        Message or Specific Inquiries (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your launch timeline, weekly cup volume, or any questions regarding logistics..."
                        className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 text-white text-sm focus:outline-none focus:border-gold-500"
                      ></textarea>
                    </div>

                    {/* Clear Disclaimer */}
                    <div className="p-4 rounded-xl bg-forest-950 border border-gold-500/20 text-xs text-cream/70 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-gold-300">
                        <AlertTriangle className="w-4 h-4 text-gold-400" />
                        <span>Important Commercial Confirmation Note</span>
                      </div>
                      <p>
                        Submitting this inquiry does not confirm an order or charge any payment. A CUP2EAT representative will reach out to verify stock availability, exact freight to your pin code, and supply timeline.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                      <MagneticButton className="w-full sm:w-auto">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                          {submitting ? (
                            <span>Validating & Submitting...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Wholesale Inquiry</span>
                            </>
                          )}
                        </button>
                      </MagneticButton>

                      <MagneticButton className="w-full sm:w-auto">
                        <a
                          href={generateWhatsAppInquiryUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-4 rounded-full bg-forest-950 hover:bg-forest-800 text-emerald-400 border border-emerald-500/40 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Inquire Instantly on WhatsApp</span>
                        </a>
                      </MagneticButton>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
