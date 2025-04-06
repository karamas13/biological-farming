import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Product from "./Product";
import broccoli from "/photos/broccoli.webp"
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import ReactLenis, { Lenis } from "lenis/react";
import HomeButton from "./HomeButton";
import laxano from "/photos/laxano.avif";
import goggulokramvh1 from "/photos/goggulokramvh1.avif";
import goggulokramvh2 from "/photos/goggulokramvh2.avif";
import goggulokramvh3 from "/photos/goggulokramvh3.avif";
import goggulokramvh4 from "/photos/goggulokramvh4.avif";
import goggulokramvh5 from "/photos/goggulokramvh5.avif";
import olive from "/photos/olive.webp";
import ellies1 from "/photos/Ellies1.avif";
import ellies2 from "/photos/Ellies2.avif";
import logo from "/photos/logo.avif";
import mprokolo1 from "/photos/mprokolo1.avif";
import mprokolo2 from "/photos/mprokolo2.avif";
import mprokolo3 from "/photos/mprokolo3.avif";
import mprokolo4 from "/photos/mprokolo4.avif";
import lemoni from "/photos/lemoni.avif";
import lemonia1 from "/photos/lemonia1.avif";
import lemonia2 from "/photos/lemonia2.avif";
import lemonia3 from "/photos/lemonia3.avif";
import lemonia4 from "/photos/lemonia4.avif";
import laxanakia from "/photos/laxanakia.avif";
import laxanakia1 from "/photos/laxanakia1.avif";
import kremmudaki from "/photos/kremmudaki.avif";
import kremmudaki1 from "/photos/kremmydaki1.avif";
import kremmudaki2 from "/photos/kremmydaki2.avif";
import laxano0 from "/photos/laxano0.5.avif";
import laxano1 from "/photos/laxano1.avif";
import laxano2 from "/photos/laxano2.avif";
import laxano3 from "/photos/laxano3.avif";
import kounoupidi from "/photos/kounoupidi.avif";
import kounoupidi1 from "/photos/kounoupidi1.avif";
import kounoupidi2 from "/photos/kounoupidi2.avif";
import kounoupidi3 from "/photos/kounoupidi3.avif";
import kounoupidi4 from "/photos/kounoupidi4.avif";




export const SmoothScrollLenis = () => {
  
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
      <img src={logo} className="h-[8.5em] "/>
      <h2 className="flex lg:text-3xl md:text-2xl text-xl bg-gradient-to-r from-blue-700 via-sky-700 to-slate-50 bg-clip-text tracking-tight text-transparent"> Χειμερινές Καλλιέργειες</h2>      
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
        backgroundImage: `url(${laxano1})`,
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
      <ParallaxImg src={kremmudaki1} alt="Farming Example 1" start={-200} end={200} className="w-full h-[20em] object-cover sm:w-1/3" />
      <ParallaxImg src={lemonia4} alt="Farming Example 2" start={200} end={-250} className="mx-auto h-[35em] object-scale-down w-full sm:w-2/3" />
      <ParallaxImg src={mprokolo4} alt="Farming Example 3" start={-200} end={200} className="w-full sm:w-1/3 ml-auto h-[20em] object-cover" />
      <ParallaxImg src={kounoupidi4} alt="Farming Example 4" start={-200} end={-200} className=" w-full sm:w-5/12 h-[20em] object-cover" />
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
      <Product title={"Γογγυλοκράμβη"} src={laxano} additionalImages={[goggulokramvh1, goggulokramvh4, goggulokramvh3, goggulokramvh2 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Ελλιά"} src={olive} additionalImages={[ellies1, ellies2 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Μπρόκολλο"} src={broccoli} additionalImages={[mprokolo1, mprokolo2, mprokolo3, mprokolo4 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Λεμόνι"} src={lemoni} additionalImages={[lemonia1, lemonia2, lemonia3, lemonia4 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Λαχανάκια Βρυξελλών"} src={laxanakia} additionalImages={[laxanakia1 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Κρεμμυδάκι Φρέσκο"} src={kremmudaki} additionalImages={[kremmudaki1, kremmudaki2 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Λάχανο"} src={laxano0} additionalImages={[laxano1, laxano2, laxano3 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
      <Product title={"Κουνουπίδι"} src={kounoupidi} additionalImages={[kounoupidi1, kounoupidi2, kounoupidi3, kounoupidi4 ]} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla cupiditate debitis enim dicta esse repellendus neque perferendis veritatis mollitia ad, sapiente fuga quia laborum asperiores ea atque eum, alias explicabo nihil aliquid quam repellat eveniet."}/>
    </div>
  );
};




