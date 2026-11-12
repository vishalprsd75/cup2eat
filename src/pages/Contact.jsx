import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MessageSquare, Mail, MapPin, 
  Clock, Send, CheckCircle2, ShieldCheck, AlertCircle 
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { WHOLESALE_OFFER } from '../data/products';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import BrandMarquee from '../components/BrandMarquee';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    subject: 'General Business Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for follow-up';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message or inquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

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
            Get In Touch
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Connect with CUP2EAT
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about edible cup flavours, shipping timelines, or our advertised wholesale pricing? We are ready to help.
          </motion.p>
        </div>
      </section>

      {/* Marquee Ticker */}
      <BrandMarquee />

      {/* 2. CONTACT CHANNELS & FORM GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
                Direct Channels
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Reach Out Directly
              </h2>
              <p className="text-sm text-cream/70 leading-relaxed">
                Connect with founder Varun Khera and our sales coordination team for wholesale orders, event sampling, or media inquiries.
              </p>
            </ScrollReveal>

            {/* Direct Cards */}
            <StaggerContainer className="space-y-4">
              {/* Phone */}
              <StaggerItem>
                <div className="bg-forest-950 p-6 rounded-2xl border border-gold-500/20 shadow-xl flex items-start gap-4 hover:border-gold-500/40 hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0 border border-forest-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono font-bold tracking-wider text-gold-400">
                      Phone & Call Support
                    </span>
                    <a
                      href="tel:9818192575"
                      className="text-lg font-serif font-bold text-white hover:text-gold-300 transition-colors"
                    >
                      +91 9818192575
                    </a>
                    <p className="text-xs text-cream/60 mt-0.5 font-mono">
                      Monday to Saturday • 9:30 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* WhatsApp */}
              <StaggerItem>
                <div className="bg-forest-950 p-6 rounded-2xl border border-emerald-500/20 shadow-xl flex items-start gap-4 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 text-emerald-300 flex items-center justify-center flex-shrink-0 border border-emerald-800">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono font-bold tracking-wider text-emerald-400">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href={WHOLESALE_OFFER.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-serif font-bold text-white hover:text-emerald-300 transition-colors block"
                    >
                      +91 9818192575
                    </a>
                    <p className="text-xs text-cream/60 mt-0.5 font-mono">
                      Fast response for wholesale inquiries & catalog PDFs
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Instagram */}
              <StaggerItem>
                <div className="bg-forest-950 p-6 rounded-2xl border border-gold-500/20 shadow-xl flex items-start gap-4 hover:border-gold-500/40 hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono font-bold tracking-wider text-gold-400">
                      Official Instagram Handle
                    </span>
                    <a
                      href="https://instagram.com/cup2eat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-serif font-bold text-white hover:text-gold-300 transition-colors block font-mono"
                    >
                      @cup2eat
                    </a>
                    <p className="text-xs text-cream/60 mt-0.5">
                      Direct message us or tag us in your edible cup reels
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Location Note */}
              <StaggerItem>
                <div className="bg-forest-950 p-6 rounded-2xl border border-gold-500/20 shadow-xl flex items-start gap-4 hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0 border border-forest-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono font-bold tracking-wider text-gold-400">
                      Fulfillment & Distribution
                    </span>
                    <span className="text-sm font-bold text-white block">
                      Pan-India Distribution Network
                    </span>
                    <p className="text-xs text-cream/60 mt-0.5">
                      Orders dispatched across all major cities and states in India. Factory & office visitation details provided upon business appointment.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Note on Transparency */}
            <div className="p-4 rounded-xl bg-forest-950 border border-forest-800 text-xs text-cream/70 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-gold-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Advertised FSSAI Registration</span>
              </div>
              <p>
                CUP2EAT promotional campaigns display FSSAI registered status. Commercial buyers may request registration certificates and manufacturing compliance sheets directly from our team.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bg-forest-950 p-8 sm:p-10 lg:p-12 rounded-3xl border border-gold-500/30 shadow-2xl backdrop-blur-md">
                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
                    Send a Message
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Business Inquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-cream/70">
                    Submit your question or order requirement and we will respond promptly.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-forest-900 text-cream p-8 rounded-2xl text-center space-y-4 border border-forest-800"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-white">
                        Thank You!
                      </h4>
                      <p className="text-xs sm:text-sm text-cream/80 max-w-md mx-auto leading-relaxed">
                        Your message from <strong>{formData.name}</strong> has been logged in this demonstration interface.
                      </p>
                      <p className="text-xs text-gold-300 font-mono">
                        For instant confirmation, feel free to drop a quick WhatsApp message to <strong>+91 9818192575</strong>.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            city: '',
                            subject: 'General Business Inquiry',
                            message: ''
                          });
                        }}
                        className="px-6 py-2.5 rounded-full bg-forest-950 hover:bg-forest-800 text-cream text-xs font-semibold"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Varun Khera"
                            className={`w-full px-4 py-3 rounded-xl bg-forest-900 border ${
                              errors.name ? 'border-red-500' : 'border-forest-800'
                            } text-white text-sm focus:outline-none focus:border-gold-500`}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 9818192575"
                            className={`w-full px-4 py-3 rounded-xl bg-forest-900 border ${
                              errors.phone ? 'border-red-500' : 'border-forest-800'
                            } text-white text-sm focus:outline-none focus:border-gold-500`}
                          />
                          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. user@business.com"
                            className={`w-full px-4 py-3 rounded-xl bg-forest-900 border ${
                              errors.email ? 'border-red-500' : 'border-forest-800'
                            } text-white text-sm focus:outline-none focus:border-gold-500`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1">
                            City / State
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="e.g. Delhi NCR, India"
                            className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-800 text-white text-sm focus:outline-none focus:border-gold-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1">
                          Inquiry Topic
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-800 text-white text-sm focus:outline-none focus:border-gold-500"
                        >
                          <option value="General Business Inquiry" className="bg-forest-950 text-white">General Business Inquiry</option>
                          <option value="Wholesale Offer (₹3,999 / 396 Cups)" className="bg-forest-950 text-white">Wholesale Offer (₹3,999 / 396 Cups)</option>
                          <option value="Café / Restaurant Supply" className="bg-forest-950 text-white">Café / Restaurant Supply</option>
                          <option value="Catering & Events" className="bg-forest-950 text-white">Catering & Events</option>
                          <option value="Sample Pack Request" className="bg-forest-950 text-white">Sample Pack Request</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-1">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please let us know how we can assist you..."
                          className={`w-full px-4 py-3 rounded-xl bg-forest-900 border ${
                            errors.message ? 'border-red-500' : 'border-forest-800'
                          } text-white text-sm focus:outline-none focus:border-gold-500`}
                        ></textarea>
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <div className="pt-2">
                        <MagneticButton className="w-full sm:w-auto">
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                          >
                            {loading ? (
                              <span>Sending Message...</span>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                <span>Submit Message</span>
                              </>
                            )}
                          </button>
                        </MagneticButton>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
}
