import farm from "/photos/farm.jpg"
import tractors from "/photos/tractors.jpg"
import haybale from "/photos/haybale.jpg"
import { motion } from "framer-motion";
import { FaAppleAlt,  FaTractor } from "react-icons/fa";
import { IoIosNutrition } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const MinInfo = () => {
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

      const navigate = useNavigate();
    
    return ( 
        <div className="min-h-screen bg-crops bg-cover object-cover bg-no-repeat font-serif relative">
           
            <div className=" min-h-screen flex justify-center items-center z-20 lg:px-40 md:px-2 sm:px-2 bg-stone-950 bg-opacity-80 backdrop-saturate-200 backdrop-contrast-100">
                <div className="max-h-[75%] sm:w-[80%] md:w-[75%] lg:w-[80%] p-4 flex flex-col sm:flex-row z-20">
                    <div className="mr-10 sm:w-1/2 mb-4 sm:mb-0">
                        <motion.div 
                          whileInView={{opacity:1, x:0}}
                          initial={{opacity:0, x:-100}}
                          transition={{duration:0.8, delay:0.5}}     
                          className="w-full">
                            <h3 className="italic text-lg font-bold text-yellow-500 mb-1">Περισσότερα για εμάς...</h3>
                            <h2 className="italic font-bold text-3xl sm:text-4xl md:text-5x mb-6 text-[#f1f1f1]">Ποιοί Είμαστε;</h2>
                            <p className="text-base sm:text-lg lg:w-[80%] text-[#f1f1f1]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum laudantium, ad dignissimos, quis nesciunt quae vitae amet maxime modi eveniet animi inventore expedita assumenda non perspiciatis ducimus iusto blanditiis? Magnam laudantium aliquam maxime adipisci non a facere sint sed veritatis soluta. Placeat!
                            </p>
                        </motion.div>
                        <motion.div 
                           whileInView={{opacity:1, x:0}}
                           initial={{opacity:0, x:-100}}
                           transition={{duration:0.9, delay:0.6}}  
                          className="flex flex-col sm:flex-row mt-8 sm:mt-4 py-20">
                            <div className="">
                                <h3 className=" font-bold italic text-lg mb-2 text-[#f1f1f1]">Εξειδικευμένες Καλλιέργειες</h3>
                                <p className="text-base sm:text-lg text-[#f1f1f1]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore totam delectus facilis labore aliquam maiores laudantium sint eum dicta quod!
                                </p>
                            </div>
                            
                           
                        </motion.div>
                         <motion.button
                         whileInView={{opacity:1, x:0}}
                         initial={{opacity:0, x:-100}}
                         transition={{duration:0.9, delay:0.6}} 
                         className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5" onClick={() => navigate("/AboutUs")}>
                          <div className="absolute inset-0 w-3 bg-green-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                          <span className="relative text-black group-hover:text-white">Περισσότερα</span>
                         </motion.button>
                    </div>
                    

                    <div className="flex justify-between gap-6 py-6 sm:w-1/2 flex-wrap sm:flex-nowrap px-10">
                        <motion.img
                         whileInView={{opacity:1, y:0}}
                         initial={{opacity:0, y:100}}
                         transition={{duration:2}}   
                         className="object-cover rounded-tl-full w-full sm:w-[48%] md:w-[60%] h-auto" 
                         src={tractors} 
                         alt="Tractors" />
                        <motion.img 
                         whileInView={{opacity:1, y:0}}
                         initial={{opacity:0, y:-100}}
                         transition={{duration:2}}
                         className="object-cover rounded-br-full w-full sm:w-[48%] md:w-[60%] h-auto" 
                         src={haybale} 
                         alt="Haybale" />
                    </div>
                </div>
            </div>


               {/*PowerCards Section*/}
                <div className="h-auto max-w-screen px-4 py-10 pb-40 relative bg-stone-950 bg-opacity-80 backdrop-saturate-200 backdrop-contrast-100">
                  <div className="z-20 relative">
                  <motion.div 
                   whileInView={{opacity:1, y:0}}
                   initial={{opacity:0, y:100}}
                   transition={{duration:0.8}}
                   className="text-center py-10">
                    <h3 className="italic text-lg font-bold text-yellow-500 mb-2">Οι Υπηρεσίες μας</h3>
                    <h2 className="font-bold text-4xl text-[#f1f1f1]">Τι προσφέρουμε;</h2>
                  </motion.div>
            
                  {/* Flex container for responsive cards */}
                  <motion.div 
                   whileInView={{opacity:1, y:0}}
                   initial={{opacity:0, y:100}}
                   transition={{duration:0.8}}
                   className="md:flex md:flex-col flex flex-col lg:flex lg:flex-row justify-center items-center gap-40 md:gap-12 lg:gap-24">
            
                    <motion.div 
                     variants={iconVariants(5)}
                     initial="initial"
                     animate="animate"
                     className="relative rounded-2xl w-[90%] md:w-[60%] lg:w-[24%] z-10">
                      <div className="flex flex-col justify-center items-center">
                        <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full z-10" />
                        <FaTractor className="inset-0 absolute z-20 text-6xl p-2 bg-lime-500 text-[#f1f1f1] rounded-tl-xl rounded-br-xl"/> 
                        <div className="w-full h-[10em] text-center bg-zinc-900 text-[#f1f1f1] rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
                          <h3 className="text-2xl font-bold py-1">Quality</h3>
                          <p className="text-sm sm:text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div 
                     variants={iconVariants(3)}
                     initial="initial"
                     animate="animate"
                     className="relative rounded-2xl w-[90%] md:w-[60%] lg:w-[24%] z-10">
                      <div className="flex flex-col justify-center items-center">
                        <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full z-10" />
                        <FaTractor className="inset-0 absolute z-20 text-6xl p-2 bg-lime-500 text-[#f1f1f1] rounded-tl-xl rounded-br-xl"/> 
                        <div className="w-full h-[10em] text-center bg-zinc-900 text-[#f1f1f1] rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
                          <h3 className="text-2xl font-bold py-1">Quality</h3>
                          <p className="text-sm sm:text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div 
                     variants={iconVariants(7)}
                     initial="initial"
                     animate="animate"
                     className="relative rounded-2xl w-[90%] md:w-[60%] lg:w-[24%] z-10">
                      <div className="flex flex-col justify-center items-center">
                        <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full z-10" />
                        <FaTractor className="inset-0 absolute z-20 text-6xl p-2 bg-lime-500 text-[#f1f1f1] rounded-tl-xl rounded-br-xl"/> 
                        <div className="w-full h-[10em] text-center bg-zinc-900 text-[#f1f1f1] rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
                          <h3 className="text-2xl font-bold py-1">Quality</h3>
                          <p className="text-sm sm:text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
            
            
                  
                  </motion.div>
                  </div>
                </div>
            
            
            
            
        </div>
    );
}

export default MinInfo;
