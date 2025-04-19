import { motion } from 'framer-motion';

export const sectionStyles = {
  base: "relative py-24 overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90",
  background: {
    grid: "absolute inset-0 overflow-hidden",
    gridPattern: "absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10",
    gradient: "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent",
    bottomFade: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"
  },
  container: "container mx-auto px-4 relative z-10",
  heading: {
    base: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6",
    gradient: "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent"
  },
  subheading: "text-[26px] text-white/80 mb-6 max-w-2xl mx-auto",
  card: {
    base: "bg-black/40 p-8 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300",
    inner: "bg-black/30 p-6 rounded-xl border border-blue-500/20"
  },
  button: {
    primary: "px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold",
    secondary: "px-8 py-4 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500/10 transition-all duration-300 font-semibold"
  },
  list: {
    item: "flex items-center gap-3 text-white/80",
    bullet: "w-2 h-2 rounded-full bg-blue-500"
  }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true }
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true }
};

export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p; 