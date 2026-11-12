import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare, MapPin, Shield, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#020F0A] text-cream/80 border-t border-gold-500/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-800">
          
          {/* Col 1: Brand Info (2 cols on large) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo-badge.svg"
                alt="CUP2EAT Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  CUP<span className="text-gold-500">2</span>EAT
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-[0.3em] text-gold-400">
                  Eat Your Drink!
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-cream/70 max-w-sm">
              Manufacturing and wholesale distribution of innovative edible drinking cups in India. Elevate everyday hot tea, coffee, desserts, and gelato with a zero-waste, delicious crunch.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-cream/60 font-mono">
              <p><span className="text-gold-400 font-semibold">Founder:</span> Varun Khera</p>
              <p><span className="text-gold-400 font-semibold">Brand Handle:</span> @cup2eat</p>
              <p><span className="text-gold-400 font-semibold">Distribution:</span> Pan-India Supply</p>
            </div>

            {/* Social Links & WhatsApp */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com/cup2eat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-gold-400 flex items-center justify-center transition-all border border-forest-800"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919818192575?text=Hello%20CUP2EAT,%20I%20am%20interested%20in%20business%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-950 hover:bg-emerald-600 text-emerald-300 hover:text-white flex items-center justify-center transition-all border border-emerald-800"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:9818192575"
                className="w-9 h-9 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-gold-400 flex items-center justify-center transition-all border border-forest-800"
                aria-label="Call Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-cream/70">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors">Home Overview</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gold-400 transition-colors">Our 3 Flavours</Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Wholesale & B2B</span>
                  <span className="px-1.5 py-0.2 bg-gold-500 text-forest-950 text-[9px] font-bold rounded">Offer</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors">About Brand & Story</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-400 transition-colors">Visual Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors">Contact & Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products & Applications */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Products & Venues
            </h3>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-cream/70">
              <li>
                <Link to="/products#chocolate" className="hover:text-gold-400 transition-colors">Chocolate Edible Cup</Link>
              </li>
              <li>
                <Link to="/products#vanilla" className="hover:text-gold-400 transition-colors">Vanilla Edible Cup</Link>
              </li>
              <li>
                <Link to="/products#elaichi" className="hover:text-gold-400 transition-colors">Elaichi Edible Cup</Link>
              </li>
              <li className="pt-2 text-[10px] text-gold-400 font-bold">
                Commercial Venues
              </li>
              <li className="text-cream/50 normal-case font-sans">Cafés & Coffee Houses</li>
              <li className="text-cream/50 normal-case font-sans">Tea Lounges & Chai Bars</li>
              <li className="text-cream/50 normal-case font-sans">Gelato & Ice Cream Parlours</li>
              <li className="text-cream/50 normal-case font-sans">Catering, Events & Weddings</li>
            </ul>
          </div>

          {/* Col 4: Wholesale & Direct Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Wholesale Enquiries
            </h3>
            
            <div className="bg-forest-950 p-4 rounded-2xl border border-gold-500/20 space-y-2 text-xs">
              <div className="flex items-center justify-between text-gold-400 font-mono font-bold">
                <span>Advertised Offer</span>
                <span className="text-white bg-gold-600/30 px-2 py-0.5 rounded border border-gold-500/40">₹3,999</span>
              </div>
              <p className="text-cream/80">Pack of 396 cups with delivery across India.</p>
              <Link
                to="/wholesale"
                className="text-gold-400 font-semibold hover:text-gold-300 flex items-center gap-1 pt-1 font-mono text-[11px]"
              >
                <span>Request B2B Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-2 text-xs pt-1">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-cream/60 font-mono text-[11px]">Direct Helpline:</span>
                  <a href="tel:9818192575" className="font-semibold text-white hover:text-gold-400 transition-colors font-mono">
                    +91 9818192575
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <InstagramIcon className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-cream/60 font-mono text-[11px]">Instagram DM:</span>
                  <a href="https://instagram.com/cup2eat" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-gold-400 transition-colors font-mono">
                    @cup2eat
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Disclaimer Notice Box */}
        <div className="my-8 p-4 rounded-2xl bg-forest-950 border border-gold-500/20 text-xs text-cream/60 space-y-1.5">
          <div className="flex items-center gap-2 text-gold-400 font-semibold font-mono">
            <Shield className="w-4 h-4" />
            <span>Registration & Offer Transparency Notice</span>
          </div>
          <p>
            <strong>FSSAI Registration Claim:</strong> CUP2EAT promotional materials display an advertised FSSAI registration status. Official registration numbers, license validity certificates, and specific manufacturing plant credentials are available upon commercial request for bulk institutional buyers.
          </p>
          <p>
            <strong>Commercial Offer Reconfirmation:</strong> The advertised promotional rate of ₹3,999 for 396 cups is derived from official brand marketing advertisements. Final landed pricing, freight logistics, taxes, and dispatch schedules should be confirmed directly with CUP2EAT management via phone (+91 9818192575) or WhatsApp before ordering.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50 pt-4 font-mono">
          <p>© {new Date().getFullYear()} CUP2EAT. All rights reserved. Brand by Founder Varun Khera.</p>
          <div className="flex items-center gap-6">
            <Link to="/wholesale" className="hover:text-gold-400 transition-colors">Wholesale Terms</Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Verification</Link>
            <span className="text-gold-400 font-medium">Eat Your Drink!</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
