import soil from "/photos/soil.avif";
import farm from "/photos/farm.avif";
import { IoMdSnow, IoMdSunny } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FarmsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden relative">
      {/* --- LCP OPTIMIZATION: Main Background Image --- */}
      <img
        src={soil}
        alt=""
        role="presentation"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Main Container */}
      <div className="min-h-screen relative pb-32 sm:pb-60 bg-stone-900/40">
        {/* Overlay Gradient - z-1 to sit above the base image */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-slate-950 opacity-100 z-1" />

        {/* Header Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white py-20 sm:py-28 px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Οι Καλλιέργειες μας
          </h1>
          <p className="text-lg sm:text-xl text-stone- stone-300">
            Εξερευνήστε τις Χειμερινές και Θερινές μας Καλλιέργειες
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative z-20 max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-stretch gap-8 md:gap-12 lg:gap-16 px-6">
          
          {/* Card 1: Summer */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 lg:w-[45%] rounded-3xl relative shadow-2xl overflow-hidden flex flex-col min-h-[450px]"
          >
            {/* Optimized Card Background */}
            <img
              src={farm}
              alt="Summer Farm"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            
            <div className="relative z-10 bg-orange-500/60 backdrop-blur-md p-8 h-full flex flex-col transition-colors duration-500 hover:bg-orange-500/70">
              <div className="flex justify-start mb-4">
                <div className="animate-[spin_10s_linear_infinite] will-change-transform">
                  <IoMdSunny className="text-7xl text-[#f1f1f1] drop-shadow-lg" />
                </div>
              </div>

              <div className="flex flex-col flex-grow justify-between items-center text-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f1f1] mb-6 italic tracking-tight">
                    Θερινές Καλλιέργειες
                  </h2>
                  <p className="text-[#f1f1f1] text-lg leading-relaxed px-2 sm:px-4">
                    Ο ήλιος μάς χαρίζει τα πιο νόστιμα και ζωηρά προϊόντα! Το
                    καλοκαίρι η γη μας γεμίζει πολύχρωμους καρπούς που
                    καλλιεργούμε με αγάπη, προσοχή και καθημερινή φροντίδα.
                  </p>
                </div>

                <button
                  className="group relative h-14 w-52 overflow-hidden rounded-xl bg-white text-lg font-bold shadow-xl mt-10 transition-transform active:scale-95"
                  onClick={() => navigate("/SummerFarms")}
                >
                  <div className="absolute inset-0 w-0 bg-orange-600 transition-all duration-350 ease-out group-hover:w-full" />
                  <span className="relative text-black group-hover:text-white transition-colors">
                    Περισσότερα...
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Winter */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 lg:w-[45%] rounded-3xl relative shadow-2xl overflow-hidden flex flex-col mt-10 sm:mt-0 min-h-[450px]"
          >
            {/* Optimized Card Background */}
            <img
              src={farm}
              alt="Winter Farm"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 bg-blue-950/60 backdrop-blur-md p-8 flex flex-col h-full transition-colors duration-500 hover:bg-blue-900/70">
              <div className="flex justify-start mb-4">
                <div className="animate-[spin_15s_linear_infinite] will-change-transform">
                  <IoMdSnow className="text-7xl text-[#f1f1f1] drop-shadow-lg" />
                </div>
              </div>

              <div className="flex flex-col flex-grow justify-between items-center text-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f1f1] mb-6 italic tracking-tight">
                    Χειμερινές Καλλιέργειες
                  </h2>
                  <p className="text-[#f1f1f1] text-lg leading-relaxed px-2 sm:px-4">
                    Όταν ο καιρός κρυώνει, η καρδιά της γης συνεχίζει να χτυπά.
                    Επιλέγουμε ποικιλίες που αγαπούν το κρύο και μας προσφέρουν
                    γεύσεις γεμάτες θρεπτικά στοιχεία.
                  </p>
                </div>

                <button
                  className="group relative h-14 w-52 overflow-hidden rounded-xl bg-white text-lg font-bold shadow-xl mt-10 transition-transform active:scale-95"
                  onClick={() => navigate("/WinterFarms")}
                >
                  <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-350 ease-out group-hover:w-full" />
                  <span className="relative text-black group-hover:text-white transition-colors">
                    Περισσότερα
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FarmsSection;