import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Product from "./Product";
import ReactLenis from "lenis/react";
import broccoli from "/photos/broccoli.avif"
import laxano from "/photos/laxano.avif";
import goggulokramvh1 from "/photos/goggulokramvh1.avif";
import goggulokramvh2 from "/photos/goggulokramvh2.avif";
import goggulokramvh3 from "/photos/goggulokramvh3.avif";
import goggulokramvh4 from "/photos/goggulokramvh4.avif";
import olive from "/photos/olive.avif";
import ellies1 from "/photos/Ellies1.avif";
import ellies2 from "/photos/Ellies2.avif";
import ellia3 from "/photos/ellia3.avif";
import ellia4 from "/photos/ellia4.avif";
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
import laxanakia2 from "/photos/laxanakia2.avif";
import laxanakia3 from "/photos/laxanakia3.avif";
import kremmudaki from "/photos/kremmudaki.avif";
import kremmudaki1 from "/photos/kremmydaki1.avif";
import kremmudaki2 from "/photos/kremmydaki2.avif";
import kremmudakiplus from "/photos/kremmudakiplus.avif";
import laxano0 from "/photos/laxano0.5.avif";
import laxano1 from "/photos/laxano1.avif";
import laxano2 from "/photos/laxano2.avif";
import laxano3 from "/photos/laxano3.avif";
import kounoupidi from "/photos/kounoupidi.avif";
import kounoupidi1 from "/photos/kounoupidi1.avif";
import kounoupidi2 from "/photos/kounoupidi2.avif";
import kounoupidi3 from "/photos/kounoupidi3.avif";
import kounoupidi4 from "/photos/kounoupidi4.avif";
import marouli from "/photos/marouli.avif"
import marouli1 from "/photos/marouli1.avif";
import marouli2 from "/photos/marouli2.avif";
import marouli3 from "/photos/marouli3.avif";
import marouli4 from "/photos/marouli4.avif";

const SECTION_HEIGHT = 1500;

export const SmoothScrollLenis = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Hero />
        <Details />
      </ReactLenis>
    </div>
  );
};

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
  const scale = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [1.7, 1]);

  return (
    <motion.div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-zinc-950" style={{ opacity, clipPath }}>
      <motion.img
        src={laxano1}
        alt="Κεντρική εικόνα χειμερινής σοδειάς - Φρέσκα λάχανα"
        fetchpriority="high" 
        className="w-full h-full object-cover"
        style={{ scale, objectPosition: "center" }}
      />
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-[200px] sm:pt-[150px]">
      <ParallaxImg src={kremmudaki1} alt="Φρέσκα κρεμμυδάκια παραγωγής" start={-200} end={200} className="w-full h-[20em] object-cover sm:w-1/3" />
      <ParallaxImg src={lemonia4} alt="Λεμονιές στον κήπο μας" start={200} end={-250} className="mx-auto h-[35em] object-scale-down w-full sm:w-2/3" />
      <ParallaxImg src={mprokolo4} alt="Συγκομιδή μπρόκολου" start={-200} end={200} className="w-full sm:w-1/3 ml-auto h-[20em] object-cover" />
      <ParallaxImg src={kounoupidi4} alt="Φρέσκο κουνουπίδι" start={-200} end={-200} className=" w-full sm:w-5/12 h-[20em] object-cover" />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: [`${start}px end`, `end ${end * -1}px`] });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  return <motion.img src={src} alt={alt} className={className} ref={ref} style={{ transform, opacity }} />;
};

const Details = () => {
  return (
    <div className="min-h-screen h-fit py-80 text-white overflow-hidden">
      <h1 className="text-4xl text-center w-full mx-auto mb-20 font-serif">Χειμερινά Προϊόντα</h1>
      
      <Product 
        title={"Γογγυλοκράμβη"} 
        src={laxano} 
        alt={"Γογγυλοκράμβη φρέσκια"}
        additionalImages={[goggulokramvh1, goggulokramvh4, goggulokramvh3, goggulokramvh2]} 
        description={"H γογγυλοκράμβη είναι ένα παραδοσιακό, αλλά σχετικά άγνωστο λαχανικό στην Ελλάδα, παρόλο που είναι ιδιαίτερα θρεπτικό. Το βρώσιμο μέρος είναι ο διογκωμένος υπόγειος βλαστός (σαν 'στρογγυλό λάχανο') και τα τρυφερά φύλλα της. Τρώγεται ωμή, ψητή, βραστή, ακόμα και τουρσί. Είναι ελαφρύ και χαμηλό σε θερμίδες αλλά πλούσιο σε βιταμίνες C, B6, B9, Φυτικές ίνες, Κάλιο & Μαγνήσιο οι οποίες είναι σημαντικές για την υγεία καθώς ενισχύουν το ανοσοποιητικό και έχουν αντιφλεγμονώδη δράση, υποστηρίζουν την πέψη και την αποτοξίνωση, επίσης μπορεί να βοηθήσει στη ρύθμιση της γλυκόζης και της πίεσης."}
      />
      
      <Product 
        title={"Ελιά"} 
        src={olive} 
        alt={"Καρπός ελιάς και ελαιόλαδο"}
        additionalImages={[ellies1, ellies2, ellia3, ellia4]} 
        description={"Η ελιά είναι καρπός του ελαιόδεντρου, καταναλώνεται είτε ως βρώσιμη ελιά είτε μετατρέπεται σε ελαιόλαδο. Ελαιόλαδο, 'υγρός χρυσός' από την αρχαιότητα και είναι η καρδιά της μεσογειακής διατροφής. Προέρχεται από την ψυχρή έκθλιψη του καρπού της ελιάς. Ανάλογα με την ποιότητα και την οξύτητα, υπάρχουν διαφορετικές κατηγορίες, εμείς ας δούμε το δικό μας βιολογικό έξτρα παρθένο, το κορυφαίο από άποψη θρεπτικής αξίας και καθαρότητας. Πολλά θρεπτικά στοιχεία, Μονοακόρεστα λιπαρά (ελαιοϊκό οξύ) τα οποία λειτουργούν ως καρδιοπροστατευτικά, μειώνουν τη 'κακή' χοληστερίνη (LDL) και ενισχύουν την 'καλή' (HDL), Πολυφαινόλες (υδροξυτυροσόλη, ελαιοκανθάλη), Βιταμίνη Ε και Βιταμίνη Κ."}
      />
      
      <Product 
        title={"Μπρόκολο"} 
        src={broccoli} 
        alt={"Φρέσκο μπρόκολο"}
        additionalImages={[mprokolo1, mprokolo2, mprokolo3, mprokolo4]} 
        description={"Μπρόκολο, ένα από τα πιο θρεπτικά και θεραπευτικά λαχανικά που υπάρχουν — πραγματικός 'διατροφικός θησαυρός'! Καθώς περιέχει υψηλές ποσότητες Βιταμίνης C, Βιταμίνη Κ, Βιταμίνη Α (β-καροτένιο), Ασβέστιο, Κάλιο & Σουλφοραφάνη (αντιοξειδωτικό φυτοχημικό). Επίσης βοηθά στη φυσική αποτοξίνωση του οργανισμού, υποστηρίζει την καλή πέψη και την καρδιαγγειακή υγεία, και είναι ιδανικό για διατροφή, χαμηλό σε θερμίδες και πλούσιο σε φυτικές ίνες."}
      />
      
      <Product 
        title={"Λεμόνι"} 
        src={lemoni} 
        alt={"Λεμόνια από την παραγωγή μας"}
        additionalImages={[lemonia1, lemonia2, lemonia3, lemonia4]} 
        description={"Το λεμόνι, θησαυρός βιταμινών και αντιοξειδωτικών. Το λεμόνι είναι εσπεριδοειδές φρούτο, χρησιμοποιείται ο χυμός, η φλούδα και το ξύσμα του – σε σαλάτες, μαγειρική, γλυκά, ροφήματα και θεραπείες υγείας. Πλούσιο με υψηλές περιεκτικότητες Βιταμίνης C (ασκορβικό οξύ), Βιταμίνη B6, Κάλιο, Κιτρικό οξύ το οποίο βοηθά στη διάσπαση των λίπους και προστατεύει από πέτρες στα νεφρά και Φλαβονοειδή & λιμονένιο (αντιοξειδωτικά) καταπολεμούν τις ελεύθερες ρίζες και φλεγμονές. Καθώς και πολύ σημαντικά τα οφέλη, διότι ενισχύει την άμυνα του οργανισμού (ιδανικό για πρόληψη κρυολογημάτων), βοηθά στην πέψη – ιδίως με χλιαρό νερό το πρωί, συμβάλλει στην αποτοξίνωση του ήπατος, ρυθμίζει το pH του οργανισμού (αν και είναι όξινο, έχει αλκαλική επίδραση) και προστατεύει από οξειδωτικό στρες και πρόωρη γήρανση."}
      />
      
      <Product 
        title={"Λαχανάκια Βρυξελλών"} 
        src={laxanakia} 
        alt={"Φρέσκα λαχανάκια Βρυξελλών"}
        additionalImages={[laxanakia2, laxanakia1, laxanakia3]} 
        description={"Τα λαχανάκια Βρυξελλών είναι μικροί θησαυροί υγείας. Είναι πλούσια σε φυτικές ίνες, βιταμίνες C και K, και περιέχουν αντιοξειδωτικά που προστατεύουν τα κύτταρα. Ιδανικά για το ψήσιμο στο φούρνο ή στον ατμό, προσφέρουν μια ιδιαίτερη γεύση που συνοδεύει άριστα τα χειμερινά σας γεύματα."}
      />
      
      <Product 
        title={"Κρεμμυδάκι Φρέσκο"} 
        src={kremmudaki} 
        alt={"Φρέσκο κρεμμυδάκι"}
        additionalImages={[kremmudakiplus, kremmudaki1, kremmudaki2]} 
        description={"Το φρέσκο κρεμμυδάκι, καταναλώνεται ολόκληρο – και το λευκό βολβό και τα πράσινα φύλλα του. Σημαντικό για την υγεία μας καθώς περιέχει πλούσια θρεπτικά στοιχεία με αποτέλεσμα να έχουμε και σημαντικά οφέλη από τις βιταμίνες C, A και Κ. Όπως επίσης και αιθέρια έλαια (θειώδεις ενώσεις) όπου βοηθούν στην αποτοξίνωση, στη χώνεψη και έχουν αντιβακτηριακές ιδιότητες. Επίσης υποστηρίζει το ανοσοποιητικό σύστημα, έχει ήπια αποτοξινωτική και αντιφλεγμονώδη δράση και βοηθά στη χώνεψη και την καλή λειτουργία του ήπατος."}
      />
      
      <Product 
        title={"Λάχανο"} 
        src={laxano0} 
        alt={"Λάχανο"}
        additionalImages={[laxano1, laxano2, laxano3]} 
        description={"Το λάχανο υπάρχει σε διάφορες ποικιλίες, εμείς ας δούμε τα δικά μας λάχανα, Λευκό λάχανο (το πιο κοινό), Μωβ (κόκκινο) λάχανο – πλούσιο σε αντιοξειδωτικά και πολλά άλλα θρεπτικά στοιχεία. Βιταμίνη C, Βιταμίνη Κ, Βιταμίνη A (β-καροτένιο), Ασβέστιο, Κάλιο, Μαγνήσιο για γερά οστά, καρδιά και μυϊκή ισορροπία. Επίσης ενισχύει το ανοσοποιητικό και βοηθά στην αποτοξίνωση. Υποστηρίζει την καλή πέψη και μειώνει τη φλεγμονή στο έντερο. Ιδανικό για πλούσια διατροφή."}
      />
      
      <Product 
        title={"Κουνουπίδι"} 
        src={kounoupidi} 
        alt={"Φρέσκο κουνουπίδι"}
        additionalImages={[kounoupidi1, kounoupidi2, kounoupidi3, kounoupidi4]} 
        description={"Εξαιρετικό χειμωνιάτικο λαχανικό με πλούσια θρεπτική αξία και πολλές ευεργετικές ιδιότητες για την υγεία! Πλούσιο σε Βιταμίνη C, Βιταμίνη Κ, Βιταμίνες του συμπλέγματος Β οι οποίες συμμετέχουν στον μεταβολισμό της ενέργειας και την υγεία του νευρικού συστήματος, Χολίνη σημαντική για την εγκεφαλική λειτουργία και το συκώτι. Ιδανικό για διατροφή."}
      />
      
      <Product 
        title={"Μαρούλι"} 
        src={marouli} 
        alt={"Φρέσκο μαρούλι"}
        additionalImages={[marouli1, marouli2, marouli3, marouli4]} 
        description={"Το μαρούλι είναι φυλλώδες λαχανικό, που ανήκει στην οικογένεια Asteraceae. Υπάρχουν διάφορες ποικιλίες όπως αυτά που παράγουμε εμείς σγουρό (πιο απαλό), ρομάνα (με πιο τραγανά φύλλα), λόλα (κόκκινη ή πράσινη). Πλούσιο σε βιταμίνες, θρεπτικά συστατικά και οφέλη για την υγεία. Μερικά από αυτά είναι Βιταμίνη Κ, Βιταμίνη A (από β-καροτένιο), Φυλλικό οξύ (Β9), Βιταμίνη C, Κάλιο όπου ρυθμίζει την πίεση και βοηθά στη λειτουργία των μυών και Φυτικές ίνες που βοηθούν στη χώνεψη και προσφέρουν κορεσμό. Είναι χαμηλό σε θερμίδες, ιδανικό για διατροφή."}
      />
    </div>
  );
};