import { motion } from "framer-motion";

const Product = ({ src, description, title, subtitle }) => {
  return (
    <div className="h-fit w-screen flex flex-col justify-center items-center py-10 sm:py-20">
      

      <div className="flex flex-col lg:flex lg:flex-row items-center justify-center sm:space-x-10 py-5 sm:py-10 md:flex md:flex-col">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-sans pt-5 sm:pt-0 flex gap-2 items-center justify-center sm:justify-start "
        >
          {title}
          <section className="text-3xl">-</section>
        </motion.h2>

        <div className="h-fit w-fit bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-zinc-950 p-10 sm:p-20">
          <motion.img
            whileInView={{ opacity: 1, rotate: 10 }}
            initial={{ opacity: 0, rotate: 60 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.2, rotate: 20 }}
            src={src}
            className="object-cover h-[15em] sm:h-[20em] md:h-[22em] "
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
