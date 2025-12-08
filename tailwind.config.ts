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
        sans: ['Urbanist', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Urbanist', 'Inter', 'system-ui', 'sans-serif'],
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
          500: '#FF6B35',
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
          500: '#FF4D6D',
          600: '#E63053',
          700: '#CC1F41',
          800: '#B31433',
          900: '#990D28',
        },
        neon: {
          DEFAULT: '#88FF2A',
          light: '#A7FF62',
          dark: '#6AF100',
        },
        accent: {
          gold: "var(--accent-gold)",
          cyan: "var(--accent-cyan)",
        },
        success: {
          DEFAULT: "var(--success)",
        },
        muted: {
          DEFAULT: "var(--text-muted)",
          foreground: "var(--text-secondary)",
        },
        card: {
          DEFAULT: "var(--bg-card)",
          hover: "var(--bg-card-hover)",
        },
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
      },
      backgroundImage: {
        'nova-gradient': 'var(--gradient-nova)',
        'neon-gradient': 'var(--gradient-neon)',
        'sunset-gradient': 'var(--gradient-sunset)',
        'dark-gradient': 'var(--gradient-dark)',
      },
      boxShadow: {
        'glow-orange': 'var(--glow-orange)',
        'glow-neon': 'var(--glow-neon)',
        'glow-coral': 'var(--glow-coral)',
        'card': 'var(--shadow-card)',
        'elevated': 'var(--shadow-elevated)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'gradient': 'gradientMove 6s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
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
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(255, 107, 53, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rotateSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
