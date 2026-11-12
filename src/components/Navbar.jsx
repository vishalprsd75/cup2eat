import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, Sparkles, ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/products' },
    { name: 'Wholesale & B2B', path: '/wholesale', badge: 'Offer' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Editorial Ticker Bar */}
      <motion.div
        initial={{ height: 'auto', opacity: 1 }}
        animate={{
          height: scrolled ? '0px' : 'auto',
          opacity: scrolled ? 0 : 1,
        }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden bg-forest-950 border-b border-gold-500/15 text-gold-300 text-xs py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left font-mono">
          <div className="flex items-center gap-2 justify-center text-[11px] tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span>WHOLESALE DISTRIBUTION • PAN-INDIA DISPATCH</span>
            <span className="hidden md:inline text-gold-500/30">|</span>
            <span className="hidden md:inline text-cream/90 font-sans">
              Advertised Commercial Offer: <strong className="text-gold-400">₹3,999 for 396 Cups</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans">
            <a
              href="tel:9818192575"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span className="font-mono text-[11px]">+91 9818192575</span>
            </a>
            <span className="text-forest-700">|</span>
            <a
              href="https://wa.me/919818192575?text=Hello%20CUP2EAT%20team,%20I%20am%20inquiring%20about%20edible%20cups%20orders."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Luxury Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-forest-950/95 backdrop-blur-md shadow-2xl border-b border-gold-500/20 py-3'
            : 'bg-forest-950/80 backdrop-blur-sm border-b border-forest-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Editorial Typography */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative w-11 h-11 flex-shrink-0"
              >
                <img
                  src="/logo-badge.svg"
                  alt="CUP2EAT Logo"
                  className="w-full h-full object-contain drop-shadow"
                />
              </motion.div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-gold-300 transition-colors">
                    CUP<span className="text-gold-500">2</span>EAT
                  </span>
                </div>
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold-400/90 font-mono -mt-1">
                  Eat Your Drink!
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with animated active indicator */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-forest-900/60 p-1.5 rounded-full border border-forest-800/80">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all rounded-full flex items-center gap-1.5 ${
                      isActive
                        ? 'text-forest-950 font-bold'
                        : 'text-cream/80 hover:text-white hover:bg-forest-800/40'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Background Pill with layoutId */}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavPill"
                          className="absolute inset-0 bg-gold-400 rounded-full -z-10 shadow-md"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className={`px-1.5 py-0.2 text-[9px] uppercase font-mono font-bold rounded ${isActive ? 'bg-forest-950 text-gold-400' : 'bg-gold-500 text-forest-950'}`}>
                          {link.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <MagneticButton>
                <a
                  href="https://wa.me/919818192575?text=Hello%20CUP2EAT,%20I%20would%20like%20to%20inquire%20about%20ordering%20edible%20cups."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-forest-700 bg-forest-900/90 hover:bg-forest-800 text-cream text-xs font-semibold flex items-center gap-2 transition-all hover:border-gold-500/50"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>WhatsApp</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <Link
                  to="/wholesale"
                  className="px-5 py-2.5 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs tracking-wider uppercase shadow-gold-glow hover:shadow-lg transition-all flex items-center gap-1.5"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/wholesale"
                className="px-3 py-1.5 rounded-full gold-gradient-bg text-forest-950 font-bold text-xs uppercase tracking-wider"
              >
                Order
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-cream hover:text-gold-400 hover:bg-forest-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Animated Mobile Dropdown Menu with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden border-t border-forest-800 bg-forest-950/98 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-2 shadow-2xl overflow-hidden"
            >
              <div className="space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-forest-900 text-gold-300 font-semibold border-l-4 border-gold-500'
                            : 'text-cream hover:bg-forest-900/50 hover:text-gold-300'
                        }`
                      }
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        {link.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] uppercase font-mono font-bold rounded bg-gold-500 text-forest-950">
                            {link.badge}
                          </span>
                        )}
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-forest-800 space-y-2.5">
                <div className="bg-forest-900 p-3.5 rounded-xl border border-forest-800 text-xs text-cream/90">
                  <div className="flex items-center gap-1.5 text-gold-400 font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Wholesale Offer</span>
                  </div>
                  <p>₹3,999 for 396 cups with pan-India distribution.</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:9818192575"
                    className="w-full py-2.5 px-3 rounded-lg bg-forest-800 text-cream text-xs font-semibold flex items-center justify-center gap-1.5 border border-forest-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>Call 9818192575</span>
                  </a>
                  <a
                    href="https://wa.me/919818192575?text=Hello%20CUP2EAT%20team,%20I%20am%20interested%20in%20wholesale%20orders."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-emerald-800/50 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 border border-emerald-700/50"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <Link
                  to="/wholesale"
                  className="w-full py-3 rounded-xl gold-gradient-bg text-forest-950 text-center font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Request Wholesale Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
