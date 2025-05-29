import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import ReactLenis from "lenis/react";
import tractor from "/photos/tractors.jpg"
import farming1 from "/photos/farming1.jpg"
import farming2 from "/photos/farming2.jpg"
import farming3 from "/photos/farming3.jpg"
import farming4 from "/photos/farming4.jpg"
import haybale from "/photos/haybale.jpg"
import { FiMousePointer } from "react-icons/fi";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import HomeButton from "./HomeButton";
import fill1 from "/photos/fill1.avif"
import fill2 from "/photos/fill2.avif"
import fill3 from "/photos/fill3.avif"
import fill4 from "/photos/fill4.avif"
import fill5 from "/photos/fill5.avif"
import fill6 from "/photos/fill6.avif"
import fill7 from "/photos/fill7.avif"
import fill8 from "/photos/fill8.avif"
import fill9 from "/photos/fill9.avif"
import fill10 from "/photos/fill10.avif"
import fill11 from "/photos/fill11.avif"
import fill12 from "/photos/fill12.avif"
import goggulokramvh5 from "/photos/goggulokramvh5.avif";
import piperiesextra1 from "/photos/piperiesextra1.avif";
import piperiesextra2 from "/photos/piperiesextra2.avif";
import tomatesextra1 from "/photos/tomatesextra1.avif";
import tomatesextra2 from "/photos/tomatesextra2.avif";
import kalampoki2 from "/photos/Kalampoki2.avif";




 const AboutUsHero = () => {
  


  const nav = useNavigate();

  return (
   <div> 
     
    <ReactLenis root options={{lerp:0.04}}>
    <div className="bg-zinc-950 font-mono relative ">
      <TextParallaxContent
        imgUrl={fill11}
        subheading="Γεύση που ξεκινά από το χώμα."
        heading="Απλή, αυθεντική, δική μας."
      >
        <ShuffleHero />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={kalampoki2}
        subheading="Καλλιέργειες με μεράκι."
        heading="Για τραπέζια που αξίζουν το καλύτερο."
      >
       <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={farming3}
        subheading="Ό,τι δίνει η φύση, με τον σωστό τρόπο."
        heading="Χωρίς υπερβολές. Με σεβασμό."
      >
        <FAQAccordion />
      </TextParallaxContent>
    </div>
    <Footer />
    <HomeButton />
    </ReactLenis>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

 
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
       
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
 

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};



const ExampleContent = () => {
  const navigate = useNavigate();
  
  return(
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-slate-300 text-center">
      Οι Καλλιέργειές μας
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-500 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-500 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button onClick={()=>{navigate('/Farms')}} className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Περισσότερα <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
)};

export default AboutUsHero;

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-yellow-600 font-medium">
          Κορυφαία ποιότητα
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-slate-300">
          Κάνουμε την Διαφορά
        </h3>
        <p className="text-base md:text-lg text-slate-500 my-4 md:my-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sed delectus non vero aspernatur ipsam quibusdam laborum obcaecati voluptas, officia sit corporis at iure facere laudantium beatae veniam cum incidunt molestias eligendi rem nulla! Consequatur magnam at voluptatum velit dolorem eos, culpa maiores dolor fugiat, enim, libero odit tenetur vel.
        </p>      
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: fill1,
  },
  {
    id: 2,
    src: fill2,
  },
  {
    id: 3,
    src: fill3,
  },
  {
    id: 4,
    src: fill4,
  },
  {
    id: 5,
    src: fill5,
  },
  {
    id: 6,
    src: fill6,
  },
  {
    id: 7,
    src: fill7,
  },
  {
    id: 8,
    src: fill8,
  },
  {
    id: 9,
    src: fill9,
  },
  {
    id: 10,
    src: fill10,
  },
  {
    id: 11,
    src: fill11,
  },
  {
    id: 12,
    src: fill12,
  },
  {
    id: 13,
    src: goggulokramvh5,
  },
  {
    id: 14,
    src: piperiesextra1,
  },
  {
    id: 15,
    src: piperiesextra2,
  },
  {
    id: 16,
    src: tomatesextra1,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 text-white h-[50em] ">
      <h3 className="text-center text-4xl py-10">Συχνές Ερωτήσεις</h3>
      

      {/* FAQ Item 2 */}
      <div className="border-b">
        <motion.div
          className="flex justify-between items-center  cursor-pointer"
          onClick={() => toggleItem(0)}
        >
          <h2 className="text-xl font-semibold py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, pariatur?</h2>
          <motion.div
            animate={{ rotate: activeIndex === 0 ? 180 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay:0.5 }}
            className=""
          >
            &#9660;
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {activeIndex === 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className=""
            >
              
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eligendi fugit excepturi vero voluptate, sint eveniet iusto repudiandae, itaque laborum accusamus adipisci natus assumenda, repellat ipsa illo recusandae veniam sit?
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
     
      {/* FAQ Item 2 */}
      <div className="border-b">
        <motion.div
          className="flex justify-between items-center  cursor-pointer"
          onClick={() => toggleItem(1)}
        >
          <h2 className="text-xl font-semibold py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, pariatur?</h2>
          <motion.div
            animate={{ rotate: activeIndex === 1 ? 180 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay:0.5 }}
            className="transform transition-all"
          >
            &#9660;
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {activeIndex === 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className=""
            >
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eligendi fugit excepturi vero voluptate, sint eveniet iusto repudiandae, itaque laborum accusamus adipisci natus assumenda, repellat ipsa illo recusandae veniam sit?
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* FAQ Item 2 */}
      <div className="border-b">
        <motion.div
          className="flex justify-between items-center  cursor-pointer"
          onClick={() => toggleItem(2)}
        >
          <h2 className="text-xl font-semibold py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, pariatur?</h2>
          <motion.div
            animate={{ rotate: activeIndex === 2 ? 180 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay:0.5 }}
            className="transform transition-all"
          >
            &#9660;
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {activeIndex === 2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className=""
            >
              <p className="py-4 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eligendi fugit excepturi vero voluptate, sint eveniet iusto repudiandae, itaque laborum accusamus adipisci natus assumenda, repellat ipsa illo recusandae veniam sit?
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

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
