import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import { FiX, FiZoomIn } from "react-icons/fi";
import ImageWithLoader from "./ImageWithLoader";

const Product = ({ src, additionalImages, description, title }) => {
  const [showImages, setShowImages] = useState(false);
  const [selectedFullscreenImg, setSelectedFullscreenImg] = useState(null);

  // Prevent background scrolling when a photo is fullscreen
  useEffect(() => {
    if (selectedFullscreenImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedFullscreenImg]);

  return (
    <div className="h-fit w-screen flex flex-col justify-center items-center py-10 sm:py-20 overflow-hidden">
      
      {/* 1. FULLSCREEN OVERLAY (The Lightbox) */}
      <AnimatePresence>
        {selectedFullscreenImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFullscreenImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white text-3xl transition-colors z-[110]"
              onClick={() => setSelectedFullscreenImg(null)}
            >
              <FiX />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedFullscreenImg}
              loading="lazy"
              decoding="async"
              // ADDED: Descriptive alt for fullscreen
              alt={`${title} - Προβολή σε πλήρη οθόνη`}
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-col items-center justify-center sm:space-x-10 py-5 sm:py-10">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-sans pt-5 sm:pt-0 flex gap-2 items-center justify-center sm:justify-start"
        >
          {title} 
        </motion.h2>

        {/* Main Image Trigger */}
        <div className="h-fit w-fit bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent p-10 sm:p-20 relative">
          <section className="cursor-pointer group" onClick={() => setShowImages(!showImages)}>
            <BsFillPinAngleFill className="absolute z-20 -rotate-90 text-2xl ml-4 text-zinc-300 group-hover:text-yellow-500 transition-colors"/>
            <h2 className="absolute z-10 -rotate-12 bg-yellow-500 h-20 w-20 flex justify-center items-center rounded-tl-2xl rounded-br-2xl font-sans text-lg font-bold text-zinc-900 shadow-xl group-hover:scale-110 transition-transform">
              Click Me!
            </h2>
          </section>
          
          <motion.img
            whileInView={{ opacity: 1, rotate: 10 }}
            initial={{ opacity: 0, rotate: 60 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            src={src}
            loading="lazy"
            decoding="async"
            // ADDED: Uses the product title as alt
            alt={title}
            className="object-cover h-[15em] sm:h-[20em] md:h-[22em] cursor-pointer"
            onClick={() => setShowImages(!showImages)}
          />
        </div>
      </div>

      {/* Additional Images Section */}
      <AnimatePresence>
        {showImages && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="w-[90%] lg:w-[75%] mt-6 relative bg-zinc-900/50 p-6 rounded-3xl border border-white/5 shadow-inner mb-10"
          >
            <button 
              onClick={() => setShowImages(false)} 
              className="mb-4 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <FaTimes /> <span className="text-sm uppercase tracking-widest">Close Gallery</span>
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {additionalImages.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl bg-zinc-800/50 min-h-[200px]">
                  <ImageWithLoader 
                    src={image} 
                    // ADDED: Passed descriptive alt to the loader component
                    alt={`${title} - Συμπληρωματική εικόνα ${index + 1}`}     
                    onClick={() => setSelectedFullscreenImg(image)} 
                  />
                  
                  {/* Fullscreen Icon Overlay */}
                  <div 
                    onClick={() => setSelectedFullscreenImg(image)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-zoom-in z-10"
                  >
                    <FiZoomIn className="text-white text-3xl" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center w-[85%] sm:w-[70%] md:w-[60%] lg:w-[45%] text-zinc-400 leading-relaxed font-light text-lg"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default Product;