export const SmoothScrollLenis = () => {
  return (
    <div className="bg-zinc-950 overflow-x-hidden sm:overflow-x-auto">
      <Nav />
      <Hero />
      <Info />
      <HorizontalScrollCarousel />
      <Details />
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 text-[#f1f1f1]">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl">Logo</h1>
      <h2 className="lg:text-2xl sm:text-base">Χειμερινές Καλλιέργειες</h2>
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
      className="sticky top-0 sm:top-0 w-full h-screen bg-center bg-cover"
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage: `url(${farming1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-[200px] sm:pt-[150px]">
      <ParallaxImg src={farming} alt="Farming Example 1" start={-200} end={200} className="w-full sm:w-1/3" />
      <ParallaxImg src={farming2} alt="Farming Example 2" start={200} end={-250} className="mx-auto w-full sm:w-2/3" />
      <ParallaxImg src={farming3} alt="Farming Example 3" start={-200} end={200} className="w-full sm:w-1/3 ml-auto" />
      <ParallaxImg src={farming4} alt="Farming Example 4" start={0} end={-500} className="ml-24 w-full sm:w-5/12" />
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

const Info = () => {
  return (
    <div className="pt-60 px-4 sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-4xl text-white text-center py-2">Προϊόντα Χειμερινής Παραγωγής</h1>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] sm:h-[150vh] md:h-[250vh]">
      <div className="h-screen sticky top-0 md:top-0 sm:top-0 lg:top-0 flex items-center overflow-x-auto">
        <motion.div
          style={{ x }}
          className="flex gap-4 sm:gap-6 lg:gap-8 w-full min-w-max sm:flex sm:flex-col md:flex md:flex-col flex-col lg:flex lg:flex-row justify-center items-center"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const cards = [
  { url: farming1, title: "Image1", id: 1 },
  { url: farming2, title: "Image2", id: 2 },
  { url: farming3, title: "Image3", id: 3 },
  { url: farming4, title: "Image4", id: 4 },
  { url: farming1, title: "Image1", id: 5 },
  { url: farming2, title: "Image2", id: 6 },
  { url: farming3, title: "Image3", id: 7 },
  { url: farming4, title: "Image4", id: 8 },
];

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group relative h-[170px] sm:h-[300px] lg:h-[450px] lg:min-w-10 md:min-w-24 sm:min-w-full min-w-52 sm:w-[520px]  overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 sm:p-6 lg:p-8 text-2xl sm:text-4xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div className="h-screen py-10 px-4 sm:px-8 lg:px-20">
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </div>
  );
};
