import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SiInstagram } from "react-icons/si";
import logonew2 from "/photos/logonew2.avif"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt  } from "react-icons/fa";
import { FiMail, FiSend, FiLoader, FiUser, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import fill4 from "/photos/fill4.avif";

 const ContactUs = () => {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-2 text-zinc-50 font-sans">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 py-20 my-20"
      >
        <HeaderBlock />
        <SocialsBlock className=""/>
        <AboutBlock />
        <SendEmail />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 ">
    <img
      src={logonew2}
      height="160"
      width="317"      
      alt="avatar"
      className="h-[160px] w-[317px] object-cover  my-5 mx-auto"
    />
    <h1 className="mb-12 text-3xl font-medium leading-tight font-mono">
      Βιολογικές Καλλιέργειες.{" "}
      <span className="text-zinc-300">
        Βρείτε μας στα μέσα δικτύωσης!
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-green-300 hover:scale-105 transition ease-in-out duration-[0.7s] font-mono cursor-default"
    >
      Επικοινωνήστε μαζί μας 
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
       className="relative lg:col-span-6 md:col-span-6 row-span-2 w-full h-full col-span-12 overflow-hidden"    >
      
      <img
      src="/photos/fill4.avif"
      alt="Farming backdrop"
      height="378"
      width="436"
      loading="eager" 
      fetchPriority="high"
      className="absolute h-[436px] w-[436px] my-auto mx-auto inset-0 object-cover z-0"
    />
    
    {/* Dark Overlay (Moved to a separate div for z-index control) */}
    <div className="absolute inset-0 bg-black/70 z-0 content-['']" />
      
      <a
        href="https://www.instagram.com/downofthegapbio/"
        /* Added 'relative z-10' to pull the content above the overlay */
        className="relative z-10 grid h-full place-content-center text-3xl text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col gap-4">
          <span className="text-center bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
            Επισκευτείτε μας στο Instagram
          </span>
          <SiInstagram className="scale-150 mx-auto " />
        </div>
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug ">
    <div className="sm:w-[20%] lg:w-[33%] min-h-[8em] flex flex-col items-center justify-center text-center sm:text-left mx-auto">
              <h2 className="text-4xl sm:text-6xl py-1 md:text-5xl">Επικοινωνία
                <span className="flex items-center justify-center sm:justify-center mt-2 sm:mt-4 ">
                  <section className="w-1 h-1 border-[3px] border-green-900 rounded-full mr-2"></section>
                  <section className="w-[5em] border-b-[3px] border-green-900 rounded-2xl my-4"></section>
                  <section className="w-1 h-1 border-[3px] border-green-900 rounded-full ml-2"></section>                  
                </span>
              </h2>
              <div className="text-lg sm:text-xl flex flex-col items-center sm:items-center  ">
                <section className="flex items-center gap-6 py-2 lg:flex lg:flex-row"><FaPhoneAlt className="text-yellow-500"/> +30 6943200685</section>
                <section className="flex items-center gap-6 py-2 lg:flex lg:flex-row" ><FaEnvelope className="text-yellow-500"/> downthegapk@gmail.com</section>
                <section className="flex items-center gap-6 py-2 lg:flex lg:flex-row"><FaMapMarkerAlt className="text-yellow-500"/> Based in Korinth, Greece</section>
              </div>
            </div>
  </Block>
);



const SendEmail = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 1000;

  const handleSendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // --- CONFIGURATION ---
    // Update these with your actual EmailJS keys
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setStatus('success');
          e.target.reset();
          setCharCount(0);
          setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <Block className="col-span-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-6 text-2xl font-bold text-center text-zinc-100 flex items-center justify-center gap-2">
          Στείλτε μας ένα μήνυμα <FiMail className="text-green-400" />
        </h2>

        <form ref={form} onSubmit={handleSendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-300" />
              <input
                type="text"
                name="from_name"
                required
                placeholder="Ονοματεπώνυμο"
                className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-3 pl-10 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-300" />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Το Email σας"
                className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-3 pl-10 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-zinc-300" />
            <textarea
              name="message"
              required
              maxLength={MAX_CHARS}
              onChange={(e) => setCharCount(e.target.value.length)}
              placeholder="Πώς μπορούμε να βοηθήσουμε;"
              rows="4"
              className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-3 pl-10 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none"
            />
            {/* Character Counter */}
            <div className={`absolute bottom-3 right-3 text-xs ${charCount >= MAX_CHARS ? 'text-red-500' : 'text-zinc-300'}`}>
              {charCount}/{MAX_CHARS}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || status === 'success'}
            className="w-full bg-zinc-50 text-zinc-950 font-bold flex items-center justify-center gap-2 py-4 rounded-xl hover:bg-white hover:scale-[1.01] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <FiLoader className="animate-spin text-2xl" />
            ) : status === 'success' ? (
              <><FiCheckCircle className="text-xl text-green-600" /> Εστάλη!</>
            ) : (
              <>Αποστολή Μηνύματος <FiSend /></>
            )}
          </button>

          {/* Feedback Messages */}
          <div className="h-4 text-center">
            {status === 'error' && (
              <p className="text-sm text-red-400 animate-shake">Κάτι πήγε στραβά. Δοκιμάστε ξανά.</p>
            )}
          </div>
        </form>
      </div>
    </Block>
  );
};




export default ContactUs;