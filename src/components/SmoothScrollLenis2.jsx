import { useRef, useState, useEffect } from "react";
import farming1 from "/photos/farming1.jpg";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Product from "./Product";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import logo from "/photos/logonew2.avif"
import ReactLenis, { Lenis } from "lenis/react";
import HomeButton from "./HomeButton"; 
import kolokythi1 from "/photos/Kolokythi1.avif";
import kolokythi2 from "/photos/Kolokythi2.avif";
import kolokythi3 from "/photos/Kolokythi3.avif";
import kolokythi4 from "/photos/Kolokythi4.avif";
import kolokythi5 from "/photos/Kolokythi5.avif";
import kolokythi6 from "/photos/Kolokythi6.avif";
import kolokythi7 from "/photos/Kolokythi7.avif";
import kolokythi8 from "/photos/Kolokythi8.avif";
import zucchini from "/photos/zucchini.avif";
import kalampoki1 from "/photos/Kalampoki1.avif";
import kalampoki2 from "/photos/Kalampoki2.avif";
import kalampoki3 from "/photos/Kalampoki3.avif";
import kalampoki4 from "/photos/Kalampoki4.avif";
import kalampoki5 from "/photos/Kalampoki5.avif";
import corn from "/photos/corn.webp";
import laxano from "/photos/laxano.avif";
import goggulokramvh1 from "/photos/goggulokramvh1.avif";
import goggulokramvh2 from "/photos/goggulokramvh2.avif";
import goggulokramvh3 from "/photos/goggulokramvh3.avif";
import goggulokramvh4 from "/photos/goggulokramvh4.avif";
import goggulokramvh5 from "/photos/goggulokramvh5.avif";
import piperia from "/photos/piperia.avif"
import piperies1 from "/photos/piperies1.avif";
import piperies2 from "/photos/piperies2.avif";
import piperies3 from "/photos/piperies3.avif";
import piperies4 from "/photos/piperies4.avif";
import piperiesextra1 from "/photos/piperiesextra1.avif";
import piperiesextra2 from "/photos/piperiesextra2.avif";
import tomata from "/photos/tomata.avif"
import tomates1 from "/photos/tomates1.avif";
import tomates2 from "/photos/tomates2.avif";
import tomates3 from "/photos/tomates3.avif";
import tomates4 from "/photos/tomates4.avif";
import tomatesextra1 from "/photos/tomatesextra1.avif";
import tomatesextra2 from "/photos/tomatesextra2.avif";
import tomatesextra3 from "/photos/tomatesextra3.avif";
import melitzana from "/photos/melitzana.avif"
import melitzanes1 from "/photos/melitzanes1.avif";
import melitzanes2 from "/photos/melitzanes2.avif";
import melitzanes3 from "/photos/melitzanes3.avif";
import melitzanes4 from "/photos/melitzanes4.avif";
import kremmudaki from "/photos/kremmudaki.avif";
import kremmudaki1 from "/photos/kremmydaki1.avif";
import kremmudaki2 from "/photos/kremmydaki2.avif";
import kremmudakiplus from "/photos/kremmudakiplus.avif";
import marouli from "/photos/marouli.avif"
import marouli1 from "/photos/marouli1.avif";
import marouli2 from "/photos/marouli2.avif";
import marouli3 from "/photos/marouli3.avif";
import marouli4 from "/photos/marouli4.avif";


export const SmoothScrollLenis2 = () => {
  

  
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
  
  const nav = useNavigate();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 text-[#f1f1f1] ">
      <img src={logo} className="h-[8.5em] cursor-pointer" onClick={()=> {nav("/")}}/>
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
        backgroundImage: `url(${kolokythi6})`,
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
      <ParallaxImg src={kalampoki5} alt="Farming Example 1" start={-200} end={200} className="w-full sm:w-1/3 h-[20em] object-cover" />
      <ParallaxImg src={kolokythi2} alt="Farming Example 2" start={200} end={-250} className="mx-auto w-full sm:w-2/3 h-[35em] object-cover" />
      <ParallaxImg src={goggulokramvh5} alt="Farming Example 3" start={-200} end={200} className="w-full sm:w-1/3 ml-auto h-[20em] object-cover" />
      <ParallaxImg src={kolokythi5} alt="Farming Example 4" start={-200} end={-200} className=" w-full sm:w-5/12 h-[20em] object-cover" />
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
      <h1 className="text-4xl text-center w-full mx-auto ">Θερινά Προϊόντα</h1>
      <Product title={"Κολοκύθι"} src={zucchini} additionalImages={[kolokythi7, kolokythi8, kolokythi1, kolokythi4 ]} description={" Kολοκύθι, ένα ελαφρύ, θρεπτικό και πολύ ευέλικτο λαχανικό το οποίο μπορεί να καταναλωθεί ωμό, βραστό, ψητό, γεμιστό ή τηγανητό. Πλούσιο σε βιταμίνες & θρεπτικά στοιχεία όπως Βιταμίνη C, Βιταμίνη Α (από καροτενοειδή) , Βιταμίνες του συμπλέγματος Β (B6, φολικό οξύ), Βιταμίνη Κ, Μαγνήσιο & Κάλιο. Πολλά σημαντικά οφέλη για την υγεία διότι είναι ελαφρύ & εύπεπτο, ιδανικό για διατροφή σε παιδιά ή ηλικιωμένους , έχει αντιοξειδωτική και αντιφλεγμονώδη δράση, βοηθά στην καλή πέψη και την υγεία του εντέρου, συμβάλλει στη ρύθμιση της πίεσης και του σακχάρου, ιδανικό για διατροφή αδυνατίσματος, λόγω χαμηλών θερμίδων."}/>
      <Product title={"Καλαμπόκι"}src={corn} additionalImages={[kalampoki3, kalampoki1, kalampoki4, kalampoki5 ]}description={" Το καλαμπόκι το οποίο λειτουργεί και σαν δημητριακό, Θεωρείται πλούσια φυτική τροφή και καταναλώνεται με πολλούς τρόπους: βραστό, ψητό, στον ατμό, σαν αλεύρι (πολέντα, καλαμποκάλευρο), ακόμα και ποπ κορν! Πλούσιο σε βιταμίνες και θρεπτικά στοιχεία τα οποία περιέχουν πολλά οφέλη για την υγεία μας όπως βιταμίνες του συμπλέγματος Β (ιδίως Β1, Β5, φολικό οξύ) όπου βοηθούν στην παραγωγή ενέργειας και την υγεία του νευρικού συστήματος, Βιταμίνη C, Βιταμίνη Α, Μαγνήσιο, Κάλιο, Φώσφορος για την καρδιά, τους μύες και την ενέργεια των κυττάρων, Λουτεΐνη & Ζεαξανθίνη αντιοξειδωτικά που προστατεύουν την όραση (ειδικά στην ωχρά κηλίδα)."}/>
      <Product title={"Γογγυλοκράμβη"} src={laxano} additionalImages={[goggulokramvh1, goggulokramvh4, goggulokramvh3, goggulokramvh2 ]} description={" Η γογγυλοκράμβη είναι ένα παραδοσιακό, αλλά σχετικά άγνωστο λαχανικό στην Ελλάδα, παρόλο που είναι ιδιαίτερα θρεπτικό. Το βρώσιμο μέρος είναι ο διογκωμένος υπόγειος βλαστός (σαν 'στρογγυλό λάχανο') και τα τρυφερά φύλλα της. Τρώγεται ωμή, ψητή, βραστή, ακόμα και τουρσί. Είναι ελαφρύ και χαμηλό σε θερμίδες αλλά πλούσιο σε βιταμίνες C , B6 ,B9, Φυτικές ίνες, Κάλιο &amp; Μαγνήσιο οι οποίες είναι σημαντικές για την υγεία καθώς ενισχύουν το ανοσοποιητικό και έχουν αντιφλεγμονώδη δράση, υποστηρίζουν την πέψη και την αποτοξίνωση, επίσης μπορεί να βοηθήσει στη ρύθμιση της γλυκόζης και της πίεσης."}/>
      <Product title={"Πιπεριές"} src={piperia}  additionalImages={[piperies1, piperies2, piperies3, piperies4 ]} description={" Οι πιπεριές ανήκουν στην οικογένεια Solanaceae. Υπάρχουν σε πολλές ποικιλίες: γλυκές (κόκκινες, πράσινες, κίτρινες, πορτοκαλί) και καυτερές (όπως οι τσίλι ή φλωρίνης με έντονη γεύση). Είναι τραγανές, αρωματικές και πολύτιμες για τη διατροφή. Διότι περιέχουν πολύ υψηλή περιεκτικότητα βιταμίνης C, ειδικά στις κόκκινες πιπεριές, η οποία ενισχύει το ανοσοποιητικό και βοηθά στην απορρόφηση του σιδήρου. Βιταμίνη Α (β-καροτένιο), Βιταμίνη B6 &amp; φολικό οξύ, Βιταμίνη Κ1, Κάψαϊκίνη (στις καυτερές ποικιλίες) η οποία έχει αντιφλεγμονώδη και θερμογενετική δράση (αυξάνει τον μεταβολισμό)."}/>
      <Product title={"Τομάτες"} src={tomata}  additionalImages={[tomates1, tomates2, tomates3, tomates4 ]} description={" Ανήκει στην κατηγορία των λαχανικών, αν και συχνά θεωρείται φρούτο λόγω της γλυκιάς της γεύσης. Περιέχει Βιταμίνη C, η οποία ενισχύει το ανοσοποιητικό και βοηθά στην απορρόφηση του σιδήρου, Βιταμίνη K επίσης σημαντική για την πήξη του αίματος και την υγεία των οστών, Βιταμίνη A, Βιταμίνη B9 (φολικό οξύ), Κάλιο και άλλες ευεργετικές ουσίες όπως φυτικές ίνες και αντιοξειδωτικά."}/>
      <Product title={"Μελιτζάνες"} src={melitzana}  additionalImages={[melitzanes1, melitzanes2, melitzanes3, melitzanes4 ]} description={" Η μελιτζάνα είναι λαχανικό της οικογένειας Solanaceae (όπως και η ντομάτα και η πατάτα). Έχει πλούσια υφή και ελαφρώς γλυκιά γεύση. Πλούσια σε Φυτικές ίνες όπου βοηθούν στη χώνεψη, ρυθμίζουν το σάκχαρο και δίνουν κορεσμό. Περιέχει επίσης Κάλιο, Μαγνήσιο & Βιταμίνη Κ. Επίσης πολλά σημαντικά οφέλη για την υγεία όπως μείωση της χοληστερίνης , υποστήριξη της πέψης και τη ρύθμιση του σακχάρου και επίσης μπορεί να βοηθήσει σε απώλεια βάρους, καθώς είναι χαμηλή σε θερμίδες."}/>
      <Product title={"Κρεμμυδάκι Φρέσκο"} src={kremmudaki} additionalImages={[ kremmudakiplus,kremmudaki1, kremmudaki2 ]} description={" Το φρέσκο κρεμμυδάκι, καταναλώνεται ολόκληρο – και το λευκό βολβό και τα πράσινα φύλλα του. Σημαντικό για την υγεία μας καθώς περιέχει πλούσια θρεπτικά στοιχεία με αποτέλεσμα να έχουμε και σημαντικά οφέλη από τις βιταμίνες C,A και Κ. Όπως επίσης και αιθέρια έλαια (θειώδεις ενώσεις) όπου βοηθούν στην αποτοξίνωση, στη χώνεψη και έχουν αντιβακτηριακές ιδιότητες. Επίσης υποστηρίζει το ανοσοποιητικό σύστημα, έχει ήπια αποτοξινωτική και αντιφλεγμονώδη δράση και βοηθά στη χώνεψη και την καλή λειτουργία του ήπατος."}/>
      <Product title={"Μαρούλι"} src={marouli} additionalImages={[ marouli1, marouli2, marouli3, marouli4 ]} description={"Το μαρούλι είναι φυλλώδες λαχανικό, που ανήκει στην οικογένεια Asteraceae. Υπάρχουν διάφορεςποικιλίες όπως αυτά που παράγουμε εμείς σγουρό (πιο απαλό), ρομάνα (με πιο τραγανά φύλλα ),λόλα (κόκκινη ή πράσινη). Πλούσιο σε βιταμίνες, θρεπτικά συστατικά και οφέλη για την υγεία. Μερικά από αυτά είναι Βιταμίνη Κ, Βιταμίνη A (από β-καροτένιο), Φυλλικό οξύ (Β9), Βιταμίνη C ,Κάλιο όπου ρυθμίζει την πίεση και βοηθά στη λειτουργία των μυώνκαι Φυτικές ίνες που βοηθούν στη χώνεψη και προσφέρουν κορεσμό. Είναι χαμηλό σε θερμίδες, ιδανικό για διατροφή."}/>
    </div>
  );
};
 



