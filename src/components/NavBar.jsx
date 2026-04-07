import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import this to check the current route
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import logonew2 from "/photos/logonew2.avif";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current URL path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Logic: Only show Home if we are NOT at "/"
  const isNotHome = location.pathname !== "/";

  const navLinks = [
    { name: "Farms", href: "/Farms" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full transition-all duration-500 font-serif ${
          scrolled 
            ? "bg-white/10 backdrop-blur-xl py-4 md:py-6 border-b border-white/10" 
            : "bg-transparent py-8 md:py-10"
        } z-[100]`}
      >
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 flex items-center justify-between">
          
          <a href="/" className="flex items-center">
            <img 
              src={logonew2} 
              alt="Κάτω απ' το αυλάκι Logo" 
              className="h-10 md:h-16 lg:h-20 w-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-16">
            {/* Dynamic Home Link */}
            {isNotHome && (
              <a
                href="/"
                className="text-white text-xl lg:text-2xl font-medium hover:text-lime-400 transition-all duration-300 uppercase flex items-center gap-2"
              >
                <FaHome className="text-lg lg:text-xl" />
                Home
              </a>
            )}

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-xl lg:text-2xl font-medium hover:text-lime-400 transition-all duration-300 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {!isOpen && (
            <button 
              className="md:hidden text-white text-3xl p-2" 
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
            >
              <FaBars />
            </button>
          )}
        </div>
      </nav>

      {/* --- MOBILE DRAWER --- */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 z-[105] md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside 
        className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[50%] bg-stone-900/95 backdrop-blur-2xl shadow-2xl transition-transform duration-500 ease-in-out z-[110] md:hidden flex flex-col p-10 pt-32 gap-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button 
          className="absolute top-8 right-8 text-white text-4xl p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
        >
          <FaTimes />
        </button>

        {/* Dynamic Home Link for Mobile */}
        {isNotHome && (
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lime-400 text-2xl font-bold uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-3"
          >
            <FaHome />
            Home
          </a>
        )}

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl font-bold uppercase tracking-widest border-b border-white/5 pb-4 hover:text-lime-400"
          >
            {link.name}
          </a>
        ))}
        
        <div className="mt-auto pb-10">
          <p className="text-stone-200 text-sm italic">Κάτω απ' το αυλάκι</p>
        </div>
      </aside>
    </>
  );
};

export default NavBar;