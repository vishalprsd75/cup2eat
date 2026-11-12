import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BrandedLoader from './components/BrandedLoader';
import AmbientGlow from './components/AmbientGlow';
import Home from './pages/Home';
import Products from './pages/Products';
import Wholesale from './pages/Wholesale';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-cream text-dark-800 font-sans selection:bg-gold-500 selection:text-forest-950 relative">
      <ScrollToTop />
      <BrandedLoader />
      <AmbientGlow />
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/wholesale" element={<Wholesale />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
