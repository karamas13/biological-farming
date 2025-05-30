import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiInstagram, SiFacebook } from "react-icons/si";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomeButton from "./HomeButton";
import logonew2 from "/photos/logonew2.avif"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt  } from "react-icons/fa";

 const ContactUs = () => {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-2 text-zinc-50 font-sans">
      <NavBar />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 py-20 my-20"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
        <HomeButton /> 
      </motion.div>
       
      <Footer />
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
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src={logonew2}
      alt="avatar"
      className="size-[10em] object-cover w-auto my-5 mx-auto"
    />
    <h1 className="mb-12 text-3xl font-medium leading-tight font-mono">
      Βιολογικές Καλλιέργειες.{" "}
      <span className="text-zinc-400">
        Βρείτε μας στα μέσα δικτύωσης!
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-green-300 hover:scale-105 transition ease-in-out duration-[0.7s] font-mono"
    >
      Επικοινωνήστε μαζί μας <FiArrowRight />
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
      className="col-span-6 bg-blue-500 md:col-span-3 h-[18em]"
    >
      <a
        href="https://www.facebook.com/profile.php?id=61573650190967"
        className="grid h-full place-content-center text-3xl text-white"
        target="blank"
      >
        <SiFacebook />
      </a>
    </Block>
    
 
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-orange-500 md:col-span-3 h-[18em]"
    >
      <a
        href="https://www.instagram.com/downofthegapbio/"
        className="grid h-full place-content-center text-3xl text-white"
        target="blank"
      >
        <SiInstagram />
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
                <section className="flex items-center gap-6 py-2 lg:flex lg:flex-row" ><FaEnvelope className="text-yellow-500"/> downthegap@gmail.com</section>
                <section className="flex items-center gap-6 py-2 lg:flex lg:flex-row"><FaMapMarkerAlt className="text-yellow-500"/> Based in Korinth, Greece</section>
              </div>
            </div>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-6">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Κόρινθος</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-full ">
    <p className="mb-3 text-lg text-center">Επικοινωνήστε μαζί μας μέσω Email</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2 justify-center"
    >
      <a href="mailto: downthegap@gmail.com" className="bg-zinc-50 text-zinc-950 font-bold flex items-center gap-2 p-[0.5em] rounded-xl hover:text-green-200 hover:bg-zinc-900 transition-all ease-in-out duration-[0.7s]">downthegap@gmail.com <FiMail className="text-2xl"/></a>
    
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};



export default ContactUs;