import { SiSpacex } from "react-icons/si";
import { useRef, useState, useEffect } from "react";
import farming from "/photos/farming.jpg";
import farming1 from "/photos/farming1.jpg";
import farming2 from "/photos/farming2.jpg";
import farming3 from "/photos/farming3.jpg";
import farming4 from "/photos/farming4.jpg";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Product from "./Product";
import broccoli from "/photos/broccoli.webp"
import marouli from "/photos/marouli.png"
import kounoupidi from "/photos/koynoupidi.png"
import Footer from "../components/Footer";
import { IoMdSnow } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ReactLenis, { Lenis } from "lenis/react";
import HomeButton from "./HomeButton"; 



export const SmoothScrollLenis2 = () => {
  
  const nav = useNavigate();
  
  return (
    <div className="bg-zinc-950">
      <ReactLenis root options={{lerp: 0.05}}>
      <Nav />
      <Hero />
      <Details />
      <Footer color={"#09090b"}/>
      </ReactLenis>
      <HomeButton />
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 text-[#f1f1f1] ">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl">Logo</h1>
      <h2 className="flex lg:text-3xl md:text-2xl text-xl bg-gradient-to-r from-orange-700 via-yellow-700 to-yellow-50 bg-clip-text tracking-tight text-transparent"> Θερινές Καλλιέργειες</h2>      
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div className="relative w-full bg-zinc-950" style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}>
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);

  return (
    <motion.div
      className="sticky top-0 sm:top-0 left-0 w-full h-screen bg-center bg-cover "
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage: `url(${farming1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",        
      }}
      preload="auto"
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-[200px] sm:pt-[150px]">
      <ParallaxImg src={farming} alt="Farming Example 1" start={-200} end={200} className="w-full sm:w-1/3" />
      <ParallaxImg src={farming2} alt="Farming Example 2" start={200} end={-250} className="mx-auto w-full sm:w-2/3" />
      <ParallaxImg src={farming3} alt="Farming Example 3" start={-200} end={200} className="w-full sm:w-1/3 ml-auto" />
      <ParallaxImg src={farming4} alt="Farming Example 4" start={-200} end={-200} className=" w-full sm:w-5/12" />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return <motion.img src={src} alt={alt} className={className} ref={ref} style={{ transform, opacity }} />;
};



const Details = () => {
  return (
    <div className="min-h-screen h-fit py-80 text-white overflow-hidden">
      <h1 className="text-4xl text-center w-full mx-auto ">Χειμερινά Προϊόντα</h1>
      <Product title={"Μπρόκολλο"} subtitle={"Λαχανικό"} src={broccoli} additionalImages={[marouli, kounoupidi, broccoli, farming1 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Μαρούλι"} subtitle={"Λαχανικό"} src={marouli} additionalImages={[marouli, kounoupidi, broccoli, farming1 ]}description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Κουνουπίδι"} subtitle={"Λαχανικό"} src={kounoupidi} additionalImages={[marouli, kounoupidi, broccoli, farming1 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Μπρόκολλο"} subtitle={"Λαχανικό"} src={broccoli}  additionalImages={[marouli, kounoupidi, broccoli, farming1 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
    </div>
  );
};




