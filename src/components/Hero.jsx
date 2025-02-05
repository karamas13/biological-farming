import { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import agriculture from "/photos/agriculture.mp4";
import NavBar from "./NavBar";
import { FaTractor } from "react-icons/fa";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading time
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="overflow-x-hidden font-serif h-screen relative">
      {/* Page Loading Animation */}
     {loading && 
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-50 bg-stone-950  bg-opacity-100 overscroll-y-contain">
          <section className="grid gap-2 text-lime-400 font-serif py-10 text-center">
            <FlipText>Welcome</FlipText>
            <FlipText>To Biofarms</FlipText>
            <FlipText>Website</FlipText>
          </section>
        <div role="status" className="shadow-2xl shadow-lime-500 rounded-full h-fit w-fit">
            <svg aria-hidden="true" className="w-24 h-24 text-white animate-spin fill-lime-500 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animationDuration: '0.4s'}}>
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>           
        </div>

        </div>
   
     }
      {/* Hero Section */}
      
        <>
          <NavBar />
          {/* Hero Section */}
          <video
            className="h-full w-full object-cover absolute top-0 left-0 z-0"
            autoPlay
            muted
            loop
            preload="auto"
          >
            <source src={agriculture} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 w-full h-full bg-stone-950 opacity-10 z-10"></div>

          <div className="bg-stone-950 bg-opacity-80 backdrop-saturate-200 backdrop-contrast-100 h-screen w-screen flex justify-center items-center z-20 absolute">
            <div className="h-full flex items-center justify-center flex-col text-center px-4 sm:px-8 lg:px-12">
              {/* BioFarms Heading Section */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center gap-2 text-lime-500 text-4xl sm:text-5xl md:text-6xl my-10 py-2"
              >
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
                className="flex flex-col items-center gap-2 text-3xl sm:text-5xl md:text-6xl my-10 py-2 mt-[-0.5em]"
              >
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
        </>
      
    </div>
  );
};

export default Hero;

const DURATION = 2;
const STAGGER = 0.095;

const FlipText = ({ children, href }) => {
  return (
    <motion.section
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl font-sans"
      href={href}
      initial="initial"
      animate="animate" // Set animation state to "animate"
      variants={{
        initial: {
          opacity: 1,
        },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: STAGGER, // Stagger the animation of each letter
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "loop", // Loop the animation
            duration: 5, // Total duration for one full cycle of animation
          }
        }
      }}
    >
      {/* Top Text Animation */}
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: {
                  y: 0,
                },
                animate: {
                  y: "-100%", // Animate upwards out of view
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
                repeat: Infinity, // Loop the transition
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>

      {/* Bottom Text Animation */}
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: {
                  y: "100%", // Start off-screen at the bottom
                },
                animate: {
                  y: 0, // Move text into position
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
                repeat: Infinity, // Loop the transition
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.section>
  );
};




