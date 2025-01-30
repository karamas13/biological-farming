import { motion, useTime, useTransform } from "framer-motion";

const Hero = () => {
    return (
      <div className="overflow-x-hidden font-serif h-screen">
        {/* Overlay */}
        {/*<div className="absolute inset-0 w-full h-full bg-stone-950 opacity-85 z-10"></div>*/}
  
        {/* Hero Section */}
        
        <div className="bg-farming1 h-screen w-full text-6xl bg-no-repeat bg-cover relative">
        <div className="bg-stone-950 bg-opacity-80 backdrop-saturate-200 backdrop-contrast-100 h-screen w-screen flex justify-center items-center">
          <div className="h-full flex items-center justify-center flex-col">
            <motion.h1
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:-300}}
             transition={{duration:2}}   
             className="z-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-green-800 via-lime-700 to-slate-50 bg-clip-text tracking-tight text-transparent text-center">
              <section
               className="mb-[-0.8em]">
                Βιολογικές
              </section> 
              <br />
              <section className="lg:ml-[10ex] h-[2em]">Καλλιέργειες</section>
            </motion.h1>
            <motion.h2 
              whileInView={{opacity:1, y:0}}
              initial={{opacity:0, y:100}}
              transition={{duration:1}}   
             className="z-20 text-4xl sm:text-5xl md:text-6xl text-[#f1f1f1]">
              Φυσικά Προϊόντα
              </motion.h2>
            <motion.p
              whileInView={{opacity:1, y:0}}
              initial={{opacity:0, y:100}}
              transition={{duration:2}}  
             className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-xl z-20 mt-8 text-center text-stone-300 px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quisquam at rem consequuntur exercitationem fugit hic itaque, voluptate quis maiores. Aperiam natus sint aliquid, illum repellendus temporibus? Atque, officia natus.
            </motion.p>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  