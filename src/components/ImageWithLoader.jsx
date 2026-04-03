import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ImageWithLoader = ({ src, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* 1. The Skeleton Shimmer */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 bg-zinc-800 overflow-hidden"
          >
            {/* The Shimmer Animation */}
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. The Actual Image */}
      <motion.img
        src={src}
        onLoad={() =>  setTimeout(() => setIsLoaded(true))}
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="h-48 sm:h-64 object-cover cursor-pointer w-full rounded-xl"

      />
    </div>
  );
};

export default ImageWithLoader;