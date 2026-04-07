import { motion } from "framer-motion";
import { FaAppleAlt, FaTractor } from "react-icons/fa";
import { IoIosNutrition } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Photos
import fill4 from "/photos/fill4.avif";
import fill8 from "/photos/fill8.avif";
import fill11 from "/photos/fill11.avif";
import mininfoLeft from "/photos/mininfoLeft.avif";
import cards2 from "/photos/cards2.avif";

const MinInfo = () => {
  const navigate = useNavigate();

  // FIX: Separate the entrance animation from the floating loop to prevent "jumping"
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingTransition = (dur) => ({
    y: [8, -8],
    transition: {
      duration: dur,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  });

  const cardData = [
    { img: cards2, icon: <FaTractor />, title: "Καλλιέργειες", text: "Οι καλλιέργειές μας ακολουθούν τη ζήτηση και τις ανάγκες των πελατών μας, ανεξάρτητα από την εποχή. Καλοκαιρινά προϊόντα τον χειμώνα; Χειμερινά το κατακαλόκαιρο; Το κάνουμε πράξη! Με ευέλικτες υπαίθριες καλλιέργειες αλλά και θερμοκηπίου, δημιουργούμε το ιδανικό μικροκλίμα για κάθε φυτό. Έτσι, προσφέρουμε πάντα φρέσκα, λειτουργικά και εποχικά 'αταίριαστα' προϊόντα.", dur: 3 },
    { img: fill11, icon: <FaAppleAlt />, title: "Βιολογικές Αγορές", text: "Στους πάγκους μας δεν θα βρεις απλώς προϊόντα. Θα βρεις την αγάπη μας για το καλό, καθαρό φαγητό. Όλα μας τα προϊόντα προέρχονται από πιστοποιημένες βιολογικές καλλιέργειες, χωρίς χημικά και περιττές παρεμβάσεις. Απευθυνόμαστε σε ανθρώπους που αγαπούν τη γη και την τιμούν καθημερινά, όπως κι εμείς. Από τη ρίζα ως το καλάθι σου, αυτό που προσφέρουμε είναι φροντίδα.", dur: 4.5 },
    { img: fill4, icon: <IoIosNutrition />, title: "Πλατείες με Γεύση", text: "Κάθε εβδομάδα, με χαμόγελο και φροντίδα, ερχόμαστε κοντά σου μέσα από τις λαϊκές αγορές. Εκεί όπου οι γεύσεις, τα χρώματα και οι μυρωδιές θυμίζουν κάτι από παιδική ηλικία. Τα προϊόντα μας μαζεύονται με μεράκι και με μεράκι μεταφέρονται, για να φτάσουν φρέσκα και λαχταριστά στα χέρια σου. Γιατί αυτό που καλλιεργούμε, πάνω απ’ όλα, είναι η σχέση μας μαζί σου.", dur: 6 }
  ];

  return (
    /* FIX: One single background wrapper for the whole component */
    <div className="relative w-full bg-crops bg-cover bg-no-repeat bg-fixed font-serif">
      
      {/* 1. Upper Content Section */}
      <section className="relative min-h-screen flex justify-center items-center py-20 lg:px-40 md:px-10 px-4 bg-stone-950/80 backdrop-saturate-150">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 z-20">
          
          <div className="lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="italic text-lg font-bold text-yellow-500 mb-1">Περισσότερα για εμάς...</h2>
              <h3 className="italic font-bold text-3xl sm:text-4xl md:text-5xl mb-6 text-[#f1f1f1]">Ποιοί Είμαστε;</h3>
              <p className="text-base sm:text-md text-[#f1f1f1] leading-relaxed">
                Η οικογένεια Γκότζη, γεννημένη και μεγαλωμένη στην πανέμορφη Κόρινθο και στην ορεινή Κορινθία, (Κάτω από το Αυλάκι) έχει βαθιές ρίζες στην αγροτική παραγωγή. Από γενιά σε γενιά, για πάνω από 70 χρόνια, ασχολούμαστε με την ολοκληρωμένη καλλιέργεια και πλέον, εδώ και 8 χρόνια, έχουμε επενδύσει με πάθος και αφοσίωση στη βιολογική παραγωγή.
                <br /><br />
                Η παραγωγή μας βασίζεται στην υπαίθρια καλλιέργεια και καλύπτει μια ευρεία γκάμα προϊόντων τόσο για τη θερινή όσο και για τη χειμερινή περίοδο. Στις θερινές καλλιέργειες μας θα βρείτε ντόπιες ντομάτες, αγγούρια, κολοκύθια, πιπεριές, μελιτζάνες, καλαμπόκι, μαρούλια, κρεμμύδια και πολλά ακόμη. Για τον χειμώνα, έχουμε μπρόκολα, κουνουπίδια, γογγυλοκράμβη (γουλί-ρεβά), λάχανα και άλλα φρέσκα προϊόντα από τις καλλιέργειές μας.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-12 space-y-4"
            >
              <h4 className="text-lime-50 text-3xl mb-4">
                <strong className="text-yellow-500">Πού</strong> θα μας βρείτε;
              </h4>
              <div className="grid gap-2 text-lg">
                {["ΔΕΥΤΕΡΑ | Κηφισιάς", "ΤΕΤΑΡΤΗ | Φιλοθέης", "ΠΕΜΠΤΗ | Κορυδαλλού", "ΠΑΡΑΣΚΕΥΗ | Αργυρούπολης", "ΣΑΒΒΑΤΟ | Ίλιον"].map((item, idx) => (
                   <span key={idx} className="text-lime-50">
                    <strong className="text-lime-500">{item.split('|')[0]}</strong> 
                    <span className="italic">| Βιολογική αγορά {item.split('|')[1]}</span>
                  </span>
                ))}
              </div>
              <p className="mt-6 text-lg text-yellow-500 font-bold uppercase tracking-wide">Καθημερινές 14:00 με 18:00 & Σάββατο 8:00 με 14:00</p>
            </motion.div>

            <button
              className="group relative h-14 w-56 overflow-hidden rounded-xl bg-white text-lg font-bold shadow-2xl mt-10"
              onClick={() => navigate("/AboutUs")}
            >
              <div className="absolute inset-0 w-0 bg-green-600 transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white transition-colors duration-300">Περισσότερα</span>
            </button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-full">
            <img src={mininfoLeft} width="400" height="600" loading="lazy" className="object-cover rounded-tl-[100px] rounded-br-[50px] w-full h-[400px] lg:h-[600px] shadow-2xl border-2 border-white/10" alt="Lettuce" />
            <img src={fill8} width="400" height="600" loading="lazy" className="object-cover rounded-br-[100px] rounded-tl-[50px] w-full h-[400px] lg:h-[600px] mt-12 shadow-2xl border-2 border-white/10" alt="Zucchini" />
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="py-24 relative bg-stone-950/80 ">
        <div className="max-w-7xl mx-auto px-4 z-20 relative">
          <div className="text-center mb-20">
            <h3 className="italic text-xl font-bold text-yellow-500 mb-2">Οι Υπηρεσίες μας</h3>
            <h2 className="font-bold text-4xl sm:text-5xl text-[#f1f1f1]">Τι προσφέρουμε;</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {cardData.map((c, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col items-center group"
              >
                {/* Floating Effect wrapper (prevents glitching during scroll) */}
                <motion.div animate={floatingTransition(c.dur)} className="w-full flex flex-col items-center">
                  <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={c.img} width="400" height="320" loading="lazy" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" alt={c.title} />
                    <div className="absolute top-4 left-4 z-30 text-5xl p-4 bg-lime-500 text-white rounded-2xl shadow-xl border border-white/20">
                      {c.icon}
                    </div>
                  </div>
                  
                  <div className="w-[90%] -mt-10 z-20 bg-zinc-900/90 backdrop-blur-md p-8 rounded-3xl text-center shadow-xl border border-white/5 transition-all duration-300 group-hover:border-lime-500/50">
                    <h3 className="text-2xl font-bold mb-4 text-[#f1f1f1] uppercase tracking-wider">{c.title}</h3>
                    <p className="text-sm text-stone-300 leading-relaxed">{c.text}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinInfo;