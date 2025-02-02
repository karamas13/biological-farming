import soil from "/photos/soil.jpg";
import farm from "/photos/farm.jpg";
import { IoMdSnow, IoMdSunny } from "react-icons/io";
import { motion, useTime, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";


const FarmsSection = () => {

  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });

  return (
    <div className="">
      {/* Image Section with gradient transition */}
      <div className="min-h-screen bg-cover bg-center relative h-fit pb-60" style={{ backgroundImage: `url(${soil})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 opacity-100"></div>
        <motion.div 
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:100}}
         transition={{duration:0.8}}
         className="relative z-10 text-center text-white py-28">
          <h1 className="text-4xl sm:text-5xl font-bold">Οι Καλλιέργειες μας</h1>
          <p className="text-lg sm:text-xl">Εξερευνήστε τις Χειμερινές και Θερινές μας Καλλιέργειες</p>
        </motion.div>

        <div className="h-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-14 md:gap-12 lg:gap-24 px-4 pb-20">

  {/* Card 1 */}
  <motion.div
   whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:-200}}
   transition={{duration:1}}
   className="w-full sm:w-[45%] md:w-[45%] lg:w-[40%] h-full sm:h-[400px] lg:h-[450px] rounded-2xl bg-cover bg-center relative min-h-fit" style={{ backgroundImage: `url(${farm})` }}>
    <div className="bg-orange-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-saturate-100 backdrop-contrast-100 h-full rounded-2xl min-h-fit">
    <div className="flex">
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:100}}
       transition={{duration:0.8}}
       style={{rotate}} >
        <IoMdSunny className="p-2 text-7xl text-[#f1f1f1]"/>
      </motion.div>
      </div>
      <div className="flex flex-col justify-between items-center px-4 py-2 h-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f1f1] py-8 italic">Θερινές Καλλιέργειες</h2>
        <p className="px-4 sm:px-10 py-4 text-white text-center text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, voluptatibus, animi eaque nam distinctio illum tempora, omnis repellat nobis adipisci aliquam?
        </p>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
          <div className="absolute inset-0 w-3 bg-orange-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">Περισσότερα</span>
        </button>
      </div>
    </div>
  </motion.div>

  {/* Card 2 */}
  <motion.div 
   whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:200}}
   transition={{duration:1}}
   className="w-full sm:w-[45%] md:w-[45%] lg:w-[40%] h-full sm:h-[400px] lg:h-[450px] rounded-2xl bg-cover bg-center relative mt-20 sm:mt-0 min-h-fit" style={{ backgroundImage: `url(${farm})` }}>
    <div className="bg-blue-950 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-saturate-100 backdrop-contrast-100 rounded-2xl h-full min-h-fit">
    <div className="flex">
   <motion.div
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:100}}
    transition={{duration:0.8}}
    style={{rotate}} >
     <IoMdSnow className="p-2 text-7xl text-[#f1f1f1]"/>
   </motion.div>
   </div>
      <div className="flex flex-col justify-between items-center px-4 py-2 h-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f1f1] py-8 italic">Χειμερινές Καλλιέργειες</h2>
        <p className="px-4 sm:px-10 py-4 text-white text-center text-lg">
          Lorem ipsum dolor sit amet consectetur Ex cupiditate amet deleniti veritatis quisquam quibusdam eius doloremque sapiente? Blanditiis esse beatae quod consequatur? 
        </p>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5" onClick={{}}>
          <div className="absolute inset-0 w-3 bg-blue-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">Περισσότερα</span>
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
