import { motion } from "framer-motion";

import logonew2 from "/photos/logonew2.avif";
import fill3 from "/photos/fill3.avif";

const Hero = () => {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden font-serif bg-stone-950" 
      aria-label="Βιολογικές Καλλιέργειες | Κάτω απ' το αυλάκι"
    >
      {/* 1. Optimized Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={fill3}
          alt="" // Decorative images should have empty alt
          className="h-full w-full object-cover opacity-50"
          loading="eager"  
          fetchPriority="high" 
          decoding="async"
          width="1920" // Add explicit dimensions to prevent CLS
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950/80" />
      </div>

      {/* 2. Main Content Layer */}
      <div className="relative z-20 flex h-full flex-col">
        
        <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
          {/* Logo Animation - Reduced transform complexity */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src={logonew2} 
              // Set explicit dimensions based on your usual display size
              width="300" 
              height="300"
              className="h-[8em] md:h-[14em] lg:h-[18em] w-auto object-contain mb-[2rem]" 
              alt="Κάτω απ' το αυλάκι Logo" 
            />
          </motion.div>

          {/* Decorative Divider - Simplified animation */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-4 my-8"
          >
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-32 md:w-96 h-[5px] bg-white/75 rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
          </motion.div>

          {/* Hero Title - Removed blur filter (expensive for main thread) */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-500 via-lime-400 to-stone-100 bg-clip-text text-transparent tracking-tight leading-tight"
          >
            Βιολογικές Καλλιέργειες
          </motion.h1>
        </main>
      </div>
    </section>
  );
};

export default Hero;