import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: {
          blue: '#0052FF',
        },
        primary: {
          50: '#E8F0FF',
          100: '#C7DCFF',
          400: '#3B7FFF',
          500: '#0052FF',
          600: '#0047E1',
          700: '#003BB8',
          900: '#001A66',
        },
        accent: {
          cyan: '#00D4FF',
          purple: '#A855F7',
          green: '#22C55E',
          emerald: '#10B981',
          orange: '#F59E0B',
          amber: '#FBBF24',
          red: '#EF4444',
        },
        sport: {
          red: '#EF4444',
        },
        neutral: {
          700: '#18181B',
          800: '#0F0F12',
          900: '#09090B',
          950: '#030712',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 20% 30%, rgba(0, 82, 255, 0.08) 0%, transparent 50%), radial-gradient(at 80% 70%, rgba(0, 212, 255, 0.06) 0%, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(0, 82, 255, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(0, 82, 255, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 60px rgba(0, 82, 255, 0.3)',
        'glow-cyan': '0 0 60px rgba(0, 212, 255, 0.2)',
        'glow-green': '0 0 60px rgba(34, 197, 94, 0.2)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
