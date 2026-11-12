# CUP2EAT – Premium Motion & Animation Upgrade

> **"Eat Your Drink!"**  
> An award-quality, immersive brand experience for CUP2EAT edible drinking cups with motion design, interactive 3D product cards, scroll storytelling, and buttery 60fps transitions.

---

## 🌟 Key Motion & Animation Highlights

### 1. 🎬 Cinematic Hero Section
- **Staggered Word Reveal**: Headline `"WHY JUST DRINK IT, WHEN YOU CAN EAT IT?"` enters smoothly word by word with gold italic luxury styling.
- **Parallax Background**: Subtle scroll-linked depth shift on hero textures and glowing ambient particles using GPU-accelerated transforms.
- **Product Entrance Scale & Opacity**: Scale `0.9 -> 1.0` entrance with a floating badge indicator.
- **Magnetic CTA Buttons**: Desktop magnetic cursor pull on hover with subtle gold shimmer and active feedback.
- **Animated Gold Accent**: Gold line expanding into place beneath the headline.

### 2. ☕ 3D Interactive Product Showcase
- **3D Tilt Cards (`TiltCard`)**: Perspective tilt responding in real time to mouse coordinates on desktop with spring-damped resets.
- **Flavour Tab Selector**: Smooth sliding active pill indicator using `layoutId="flavourTabPill"`.
- **Gentle Hover Elevation**: Soft luxury shadows with image zoom hover (`scale: 1.08`).
- **Touch-Friendly Mobile Experience**: Seamless tap gestures (`whileTap={{ scale: 0.98 }}`) replacing desktop tilt.

### 3. 📜 Scroll-Based Storytelling (`ScrollReveal` & `StaggerContainer`)
- **Intersection-Observer Linked**: High performance `useInView` triggers that animate sections into place as you scroll.
- **Staggered Child Reveal**: Benefits, process steps, and application cards stagger smoothly without overwhelming the viewport.
- **Reduced Motion Respect**: Automatically detects `prefers-reduced-motion` and skips heavy animations for accessibility.

### 4. 💰 Animated Wholesale Offer Section
- **Advertised Offer Highlight**: Displays the verified campaign rate: **₹3,999 for 396 CUPS**.
- **Smooth Number Counters (`AnimatedCounter`)**: Numbers smoothly count up into place upon scrolling into view.
- **Radiant Gold Ambient Halo**: Subtle backdrop lighting highlighting the commercial offer.
- **Transparent Notice**: Prominent disclaimer that the offer should be reconfirmed with the business before purchase.

### 5. 🖼️ Interactive Gallery & Lightbox
- **Dynamic Category Filter**: Animated active category pill using Framer Motion layout animations.
- **Fullscreen Lightbox**: Smooth modal entry/exit, backdrop blur, image crossfade transitions, and full keyboard navigation (`Esc` to close, `←`/`→` arrows for prev/next).

### 6. 🔄 Route Transitions
- **AnimatePresence Mode "wait"**: Smooth fade and subtle vertical travel (`y: 12 -> 0`) across all 6 pages.
- **Scroll Restoration**: Automatically scrolls smoothly to top on route change.

### 7. 🧭 Responsive Navbar with Scroll Behavior
- **Dynamic Background**: Transparent backdrop over hero transitioning smoothly into high-density forest green with blur on scroll.
- **Active Navigation Pill**: Fluid indicator tracking current route with `layoutId="activeNavPill"`.
- **Animated Mobile Drawer**: Smooth slide-down and staggered link reveals.
- **Pulsing WhatsApp Status**: Live green status beacon for instant chat.

### 8. ⚡ Microinteractions & Loader
- **Short Branded Loader (`BrandedLoader`)**: Runs on initial session visit with the CUP2EAT emblem and animated gold line, then saves to `sessionStorage` to avoid repeat delays.
- **Ambient Desktop Cursor Follower (`AmbientGlow`)**: Ultra-subtle, non-intrusive warm gold lighting following the cursor without interfering with native browser controls.

---

## 🛠️ Tech Stack

- **React 19**
- **Vite 6**
- **Framer Motion 14 (Motion for React)**
- **Tailwind CSS 3**
- **React Router DOM 7**
- **Lucide React** + Custom SVG vector icons

---

## 🚀 Running the Project

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```
