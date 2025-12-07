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
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "var(--border-default)",
        input: "var(--border-default)",
        ring: "var(--primary)",
        background: "var(--bg-base)",
        foreground: "var(--text-primary)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "#ffffff",
          50: '#FFF0E6',
          100: '#FFDBC2',
          200: '#FFB88F',
          300: '#FF9457',
          400: '#FF7B40',
          500: '#FF6B35', // Base
          600: '#E54E18',
          700: '#C2360C',
          800: '#9F2604',
          900: '#7D1C00',
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "#ffffff",
          50: '#FFF0F3',
          100: '#FFE0E6',
          200: '#FFC2CD',
          300: '#FFA3B5',
          400: '#FF859C',
          500: '#FF4D6D', // Base
          600: '#E63053',
          700: '#CC1F41',
          800: '#B31433',
          900: '#990D28',
        },
        accent: {
          gold: "var(--accent-gold)",
          cyan: "var(--accent-cyan)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--bg-elevated)",
          foreground: "var(--text-muted)",
        },
        popover: {
          DEFAULT: "var(--bg-card)",
          foreground: "var(--text-primary)",
        },
        card: {
          DEFAULT: "var(--bg-card)",
          foreground: "var(--text-primary)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
        '2xl': "var(--radius-2xl)",
      },
      backgroundImage: {
        'nova-gradient': 'var(--bg-nova-gradient)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate-slow': 'spin 20s linear infinite',
        'gradient': 'gradientMove 8s ease infinite',
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
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 50px rgba(255, 107, 53, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-orange': '0 0 80px rgba(255, 107, 53, 0.3)',
        'glow-coral': '0 0 80px rgba(255, 77, 109, 0.25)',
        'glow-gold': '0 0 60px rgba(255, 184, 0, 0.3)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
