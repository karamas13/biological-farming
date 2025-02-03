import { motion } from "framer-motion";
import agriculture from "/photos/agriculture.mp4";
import NavBar from "./NavBar";
import { FaTractor } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="overflow-x-hidden font-serif h-screen relative">
      <NavBar />
      {/* Hero Section */}
      <video
        className="h-full w-full object-cover absolute top-0 left-0 z-0"
        autoPlay
        muted
        loop
      >
        <source src={agriculture} type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="bg-stone-950 bg-opacity-80 backdrop-saturate-200 backdrop-contrast-100 h-screen w-screen flex justify-center items-center z-20 absolute">
        <div className="h-full flex items-center justify-center flex-col text-center px-4 sm:px-8 lg:px-12">
         
          {/* BioFarms Heading Section */}
          <motion.div 
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0, y: -100 }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center gap-2 text-lime-500 text-4xl sm:text-5xl md:text-6xl my-10 py-2">
            <FaTractor className="text-[#FFD700] text-5xl" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl">BioFarms</h1>
            <span className="flex items-center justify-center sm:justify-start">
              <section className="w-1 h-1 border-[3px] border- rounded-full mr-2"></section>
              <section className="w-[6em] border-b-[3px] border-white rounded-2xl my-4"></section>
              <section className="w-1 h-1 border-[3px] border-white rounded-full ml-2"></section>
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -300 }}
            transition={{ duration: 2 }}
            className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-green-800 via-lime-700 to-slate-50 bg-clip-text tracking-tight text-transparent"
          >
            <section>Βιολογικές</section>
            <section className="h-[2em] w-[6em]">Καλλιέργειες</section>
          </motion.h1>

          {/* Secondary Hero Text */}
          <motion.div 
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0, y: 100 }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center gap-2 text-3xl sm:text-5xl md:text-6xl my-10 py-2 mt-[-0.5em]">
            <span className="flex items-center justify-center sm:justify-start">
              <section className="w-1 h-1 border-[3px] border- rounded-full mr-2"></section>
              <section className="w-[10em] border-b-[3px] border-white rounded-2xl my-4"></section>
              <section className="w-1 h-1 border-[3px] border-white rounded-full ml-2"></section>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#f1f1f1] py-4">
              Φυσικά Προϊόντα
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
