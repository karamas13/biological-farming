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
import { FaAngleLeft } from "react-icons/fa";




 const AboutUsHero = () => {
  
 const [loading, setLoading] = useState(true);


  // Function to handle video load complete and set minimum loading time

  useEffect(() => {
    // Automatically hide the loading screen after the minimum time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Minimum 4.5 seconds delay
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const nav = useNavigate();

  return (
   <div> 
     {/* Page Loading Animation */}
     {loading && 
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-50 bg-stone-950  bg-opacity-100 overscroll-y-contain !scrollbar-none">
          <section className="grid gap-2 text-lime-400 font-serif py-10 text-center">
            <FlipText>Loading...</FlipText>
            <FlipText>Loading...</FlipText>
            <FlipText>Loading...</FlipText>
          </section>
        <div role="status" className="shadow-2xl shadow-lime-500 rounded-full h-fit w-fit">
            <svg aria-hidden="true" className="w-24 h-24 text-white animate-spin fill-lime-500 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animationDuration: '0.4s'}}>
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>           
        </div>

        </div>
   
     }
    <ReactLenis root options={{lerp:0.04}}>
    <div className="bg-zinc-950 font-mono">
      <TextParallaxContent
        imgUrl={farming1}
        subheading="Biofarms"
        heading="Φυσικά προϊόντα για όλους."
      >
        <ShuffleHero />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={farming2}
        subheading="Ποιότητα"
        heading="Απο την καλλιέργια στο τραπέζι σας."
      >
       <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={farming3}
        subheading="Συνεχώς"
        heading="Ο Παναγιώτης κάνει τσιμπούκια"
      >
        <FAQAccordion />
      </TextParallaxContent>
    </div>
    <Footer />
    <button onClick={()=> {nav("/")}} className=" font-mono flex items-center fixed bottom-0 left-0 text-[#333] m-2 md:m-4 lg:m-6 bg-[#f1f1f1] py-2 px-4 rounded-full opacity-65 text-lg md:text-2xl lg:text-3xl hover:opacity-100 transition ease in out duration-[0.6s]"><FaAngleLeft />Back</button>
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
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: haybale,
  },
  {
    id: 12,
    src: farming4,
  },
  {
    id: 13,
    src: farming3,
  },
  {
    id: 14,
    src: farming2,
  },
  {
    id: 15,
    src: farming1,
  },
  {
    id: 16,
    src: tractor,
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
    <div className="w-full max-w-md mx-auto space-y-4 text-white h-[50em]">
      <h3 className="text-center text-4xl py-10">Συχνές Ερωτήσεις</h3>
      

      {/* FAQ Item 2 */}
      <div className="border-b">
        <motion.div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleItem(0)}
        >
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, pariatur?</h2>
          <motion.div
            animate={{ rotate: activeIndex === 0 ? 180 : 0 }}
            transition={{ duration: 0.3, ease:'linear' }}
            className="transform transition-all"
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
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eligendi fugit excepturi vero voluptate, sint eveniet iusto repudiandae, itaque laborum accusamus adipisci natus assumenda, repellat ipsa illo recusandae veniam sit?
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* FAQ Item 2 */}
      <div className="border-b">
        <motion.div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleItem(1)}
        >
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, pariatur?</h2>
          <motion.div
            animate={{ rotate: activeIndex === 1 ? 180 : 0 }}
            transition={{ duration: 0.3, ease:'linear' }}
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
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eligendi fugit excepturi vero voluptate, sint eveniet iusto repudiandae, itaque laborum accusamus adipisci natus assumenda, repellat ipsa illo recusandae veniam sit?
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FAQ Item 3 */}
      <div className="border-b">
        <motion.div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleItem(2)}
        >
          <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ipsa?</h2>
          <motion.div
            animate={{ rotate: activeIndex === 2 ? 180 : 0 }}
            transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <p>
                Yes! Framer Motion is easy to use and integrates seamlessly with
                React. You can animate your components with simple props and
                transition settings.
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
