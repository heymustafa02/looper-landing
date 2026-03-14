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
        geist: ['var(--font-geist)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'animationIn': 'animationIn 0.8s ease-out both',
        'beam-flow': 'beam-flow 4s linear infinite',
        'orbit': 'orbit 40s linear infinite',
        'orbit-reverse': 'orbit-reverse 40s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'aura-scroll-down': 'aura-scroll-down 15s linear infinite',
        'aura-scroll-up': 'aura-scroll-down 15s linear infinite reverse',
      },
      keyframes: {
        animationIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
        'beam-flow': {
          '0%': { strokeDashoffset: '600', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '0' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            transform: 'scale(1)', 
            boxShadow: '0 0 40px rgba(59,130,246,0.3)' 
          },
          '50%': { 
            transform: 'scale(1.05)', 
            boxShadow: '0 0 60px rgba(59,130,246,0.5)' 
          },
        },
        'aura-scroll-down': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;