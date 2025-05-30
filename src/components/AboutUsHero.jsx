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
    Μια οικογένεια, μια γη, ένας σκοπός.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-500 md:text-2xl">
       Είμαστε μια μικρή οικογενειακή επιχείρηση που καλλιεργεί με σεβασμό και υπευθυνότητα τη γη του τόπου μας, λίγο «κάτω από το αυλάκι», στη νότια Ελλάδα. Εδώ, ανάμεσα σε παλιούς ελαιώνες, αμπέλια και εύφορα λαχανόκηπους, μεγαλώνουμε τις δικές μας εποχιακές καλλιέργειες, όπως ντομάτες, κολοκύθια, μαρούλια, όπως και πολλά άλλα.
 
       Η φιλοσοφία μας είναι απλή: καθαρή τροφή, καθαρές σχέσεις. Δεν χρησιμοποιούμε χημικά φυτοφάρμακα ή συντηρητικά, φροντίζουμε για την υγεία του εδάφους, και μαζεύουμε τους καρπούς μας τη σωστή στιγμή, όταν είναι πραγματικά έτοιμοι να σας θρέψουν.

      </p>
      <p className="mb-8 text-xl text-neutral-500 md:text-2xl">
      Τα προϊόντα μας τα διαθέτουμε κατευθείαν στον καταναλωτή, χωρίς μεσάζοντες, μέσω τοπικών αγορών εντός της Κορινθίας καθώς και εκτός.
      </p>
      <p className="mb-8 text-xl text-neutral-500 md:text-2xl">
      Πιστεύουμε πως η διατροφή είναι πράξη αγάπης. Κι αυτό προσπαθούμε να δείξουμε σε κάθε καλάθι που φεύγει από το χωράφι μας.
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
         Από τη γη μας, για ανθρώπους σαν κι εμάς.
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-slate-300">
         Με μεράκι, πίστη στην παράδοση και αληθινή αγάπη για το καλό φαγητό.
        </h3>
        <p className="text-base md:text-lg text-slate-500 my-4 md:my-6">
         Στο «Κάτω Από Το Αυλάκι» δεν φροντίζουμε απλώς καλλιέργειες, φροντίζουμε ιδέες, αξίες και σχέσεις. Ξεκινήσαμε σαν μια μικρή οικογενειακή προσπάθεια, με σεβασμό στη γη και στους ανθρώπους που την τιμούν με τον ιδρώτα τους.

         Κάθε μας προϊόν είναι καρπός αγνής φροντίδας, φυσικής καλλιέργειας και αυθεντικής ελληνικής γεύσης. Δεν κυνηγάμε την ποσότητα· κυνηγάμε την ποιότητα.

         Θέλουμε να ξέρεις τι τρως, από πού έρχεται, και να νιώθεις σιγουριά όταν το βάζεις στο πιάτο σου. Γιατί για εμάς, το φαγητό είναι τρόπος ζωής, κι αυτή τη ζωή, τη ζούμε τίμια.
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
          <h2 className="text-xl font-semibold py-2">Πού μπορώ να βρω τα προϊόντα σας;</h2>
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
              Τα προϊόντα μας διατίθενται αποκλειστικά μέσω Λαϊκών Αγορών εντός και εκτός Κορίνθου. Κάθε εβδομάδα συμμετέχουμε σε επιλεγμένες αγορές της περιοχής, όπου μπορείτε να βρείτε τα φρέσκα εποχιακά μας προϊόντα και να μας γνωρίσετε από κοντά. Εάν θέλετε να ενημερωθείτε για το πρόγραμμα και τις ημέρες που βρισκόμαστε σε κάθε αγορά, μη διστάσετε να επικοινωνήσετε μαζί μας.
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
          <h2 className="text-xl font-semibold py-2">Χρησιμοποιείτε φυτοφάρμακα ή άλλα χημικά στις καλλιέργειές σας;</h2>
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
              Όχι. Φροντίζουμε τις καλλιέργειές μας με φυσικές μεθόδους και ήπιες παρεμβάσεις, αποφεύγοντας συνθετικά φυτοφάρμακα και λιπάσματα. Στόχος μας είναι να προσφέρουμε προϊόντα καθαρά και ασφαλή, ακριβώς όπως θα τα δίναμε στα δικά μας παιδιά.
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
          <h2 className="text-xl font-semibold py-2">Ποια εποχιακά προϊόντα προσφέρετε και πότε;</h2>
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
              Οι καλλιέργειές μας ακολουθούν τον κύκλο της φύσης. Τους καλοκαιρινούς μήνες διαθέτουμε προϊόντα όπως τομάτες, πιπεριές, κολοκύθια, μελιτζάνες και καλαμπόκι, ενώ τον χειμώνα καλλιεργούμε μαρούλια, ελλιές, μπρόκολα, λάχανα, λεμόνια, κουνουπίδι και λαχανάκια Βρυξελλών. Επίσης η γογγυλοκράμβη, το κρεμμυδάκι φρέσκο καθώς και τα μαρούλια καλλιεργούνται καθόλη την διάρκεια του χρόνου. Μπορείτε πάντα να δείτε την τρέχουσα διαθεσιμότητα επικοινωνώντας μαζί μας.
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
