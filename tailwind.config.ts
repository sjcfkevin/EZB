
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Custom EZB token colors
        ezb: {
          primary: '#111111',       // Near black background
          secondary: '#0A0A0A',     // Slightly lighter black for contrast
          accent: '#5865F2',        // Electric blue for highlights
          accent2: '#9546C4',       // Purple accent for secondary highlights
          border: '#FFFFFF33',      // Semi-transparent white border
          text: {
            primary: '#FFFFFF',     // White text
            secondary: '#AAAAAA',   // Light gray for secondary text
            accent: '#5865F2',      // Blue for highlighted text
          }
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        "accordion-up": {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "pulse-glow": {
          '0%, 100%': { opacity: '0.6', filter: 'blur(12px)' },
          '50%': { opacity: '1', filter: 'blur(8px)' },
        },
        "slide-up": {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "float-3d": {
          '0%': { transform: 'translateZ(10px) translateY(0px)' },
          '50%': { transform: 'translateZ(30px) translateY(-15px)' },
          '100%': { transform: 'translateZ(10px) translateY(0px)' },
        },
        "rotate-3d": {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(5deg) rotateY(10deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "float-3d": "float-3d 6s ease-in-out infinite",
        "rotate-3d": "rotate-3d 10s ease-in-out infinite",
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      translate: {
        'z-5': 'translateZ(5px)',
        'z-10': 'translateZ(10px)',
        'z-15': 'translateZ(15px)',
        'z-20': 'translateZ(20px)',
        'z-25': 'translateZ(25px)',
        'z-30': 'translateZ(30px)',
        'z-40': 'translateZ(40px)',
        'z-50': 'translateZ(50px)',
        'z-neg-10': 'translateZ(-10px)',
        'z-neg-20': 'translateZ(-20px)',
      },
      boxShadow: {
        'neo-3d': '0 10px 30px rgba(0, 0, 0, 0.5)',
        'neo-3d-hover': '0 20px 40px rgba(0, 0, 0, 0.6)',
        'accent-glow': '0 5px 15px rgba(88, 101, 242, 0.5)',
        'accent-glow-strong': '0 10px 25px rgba(88, 101, 242, 0.8)',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.transform-style-flat': {
          'transform-style': 'flat',
        },
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.perspective-2000': {
          'perspective': '2000px',
        },
        '.perspective-none': {
          'perspective': 'none',
        },
        '.transform-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.translate-z-5': {
          'transform': 'translateZ(5px)',
        },
        '.translate-z-10': {
          'transform': 'translateZ(10px)',
        },
        '.translate-z-15': {
          'transform': 'translateZ(15px)',
        },
        '.translate-z-20': {
          'transform': 'translateZ(20px)',
        },
        '.translate-z-25': {
          'transform': 'translateZ(25px)',
        },
        '.translate-z-30': {
          'transform': 'translateZ(30px)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
