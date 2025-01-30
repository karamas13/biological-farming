import { Container } from "postcss";
import farm from "/photos/farm.jpg";
import { FaAppleAlt,  FaTractor } from "react-icons/fa";
import { IoIosNutrition } from "react-icons/io";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: { 
      y: [10, -10],
      transition: { 
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
      }
  }
});



const PowerCards = () => {
  return (
    <div className="h-auto max-w-screen bg-gradient-to-b from-green-50 via-green-100 to-lime-200 px-4 py-10">
      <motion.div 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:100}}
       transition={{duration:0.8}}
       className="text-center py-10">
        <h3 className="italic text-lg font-bold text-yellow-500 mb-2">Οι Υπηρεσίες μας</h3>
        <h2 className="font-bold text-4xl text-green-950">Τι προσφέρουμε;</h2>
      </motion.div>

      {/* Flex container for responsive cards */}
      <motion.div 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:100}}
       transition={{duration:0.8}}
       className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-14 md:gap-12 lg:gap-24">

        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
         className="relative rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[24%] bg-white z-10">
          <div className="flex flex-col justify-center items-center">
            <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full z-10" />
            <FaTractor className="inset-0 absolute z-20 text-6xl p-2 bg-lime-500 text-[#f1f1f1] rounded-tl-xl rounded-br-xl"/> 
            <div className="w-full h-[10em] text-center bg-green-50 rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
              <h3 className="text-2xl font-bold py-1">Quality</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate" 
         className="relative rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[24%] bg-white z-10">
          <div className="flex flex-col justify-center items-center">
            <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full z-10" />
            <FaAppleAlt className="inset-0 absolute z-20 text-6xl p-2 bg-lime-500 text-[#f1f1f1] rounded-tl-xl rounded-br-xl"/> 
            <div className="w-full h-[10em] text-center bg-green-50 rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
              <h3 className="text-2xl font-bold py-1">Quality</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
         className="relative rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[24%] bg-white z-10">
          <div className="flex flex-col justify-center items-center">
            <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full z-10" />
            <IoIosNutrition className="inset-0 absolute z-20 text-6xl p-2 bg-lime-500 text-[#f1f1f1] rounded-tl-xl rounded-br-xl"/> 
            <div className="w-full h-[10em] text-center bg-green-50 rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
              <h3 className="text-2xl font-bold py-1">Quality</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
              </p>
            </div>
          </div>
        </motion.div>

      
      </motion.div>
    </div>
  );
}

export default PowerCards;
