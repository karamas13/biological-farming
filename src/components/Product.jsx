import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";


const Product = ({ src, additionalImages, description, title, subtitle }) => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="h-fit w-screen flex flex-col justify-center items-center py-10 sm:py-20">
      <div className="flex flex-col lg:flex lg:flex-row items-center justify-center sm:space-x-10 py-5 sm:py-10 md:flex md:flex-col">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-sans pt-5 sm:pt-0 flex gap-2 items-center justify-center sm:justify-start"
        >
          {title}
          <section className="text-3xl">-</section>
        </motion.h2>

        {/* Main Image */}
        <div className="h-fit w-fit bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-zinc-950 p-10 sm:p-20">
          <section className="cursor-pointer" onClick={() => setShowImages(!showImages)}>
           <BsFillPinAngleFill className="absolute z-20 -rotate-90 text-2xl ml-4"/>
           <h2 className="absolute z-10 -rotate-12 bg-yellow-500 h-20 w-20 flex justify-center items-center rounded-tl-2xl rounded-br-2xl font-sans text-lg">Click Me!</h2>
           </section>
          <motion.img
            whileInView={{ opacity: 1, rotate: 10 }}
            initial={{ opacity: 0, rotate: 60 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1, rotate: 20 }}
            src={src}
            className="object-cover h-[15em] sm:h-[20em] md:h-[22em] cursor-pointer"
            onClick={() => setShowImages(!showImages)}
          />
        </div>

        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-sans flex gap-2 items-center justify-center sm:justify-start pt-5 sm:pt-10"
        >
          <section className="text-3xl">-</section>
          {subtitle}
        </motion.h2>
      </div>

      {/* Additional Images Section */}
      <AnimatePresence>
        {showImages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 px-2 relative"
          >
            <button  onClick={() => setShowImages(!showImages)} className="top-0 left-0 absolute"><FaTimes className="text-3xl"/></button>
            {additionalImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                className="h-[10em] sm:h-[12em] object-cover rounded-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="text-center w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] px-4 sm:px-0 py-5"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default Product;
