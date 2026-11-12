/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#031C14',
          800: '#05291F', // Dark Green
          700: '#073D2B', // Deep Forest Green (Primary)
          600: '#0B523B',
          500: '#116B4E',
          100: '#E6F0EB',
          50: '#F2F7F4',
        },
        gold: {
          700: '#A47728',
          600: '#B88730',
          500: '#D6A64B', // Warm Gold (Accent)
          400: '#E5B869',
          300: '#F1CD8B',
          200: '#F8DFB2',
          100: '#FCF3E0',
          50: '#FDFBF5',
        },
        cream: '#FFF8E9',
        ivory: '#F5F0E4',
        dark: {
          900: '#141813',
          800: '#20251F', // Dark Text
          700: '#2F362E',
          600: '#4D554C',
          500: '#717A70',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(7, 61, 43, 0.12)',
        'luxury-hover': '0 25px 50px -12px rgba(7, 61, 43, 0.22)',
        'gold-glow': '0 0 25px rgba(214, 166, 75, 0.28)',
      }
    },
  },
  plugins: [],
}

