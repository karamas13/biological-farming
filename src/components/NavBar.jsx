import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setScrollingDown(true); // Scrolling down
    } else {
      setScrollingDown(false); // Scrolling up
    }
    lastScrollY.current = window.scrollY <= 0 ? 0 : window.scrollY; // Prevent negative scrollY
  };

  useEffect(() => {
    // Add the scroll event listener for all screens
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full bg-transparent z-30 transition-all duration-300 ${scrollingDown ? '-top-20' : 'top-0'}`}
      style={{
        transition: 'top 0.3s ease',
      }}
    >
      {/* Navbar container */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-6xl text-white font-bold">
          Logo
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#about" className="text-white text-lg">About</a>
          <a href="#services" className="text-white text-lg">Services</a>
          <a href="#portfolio" className="text-white text-lg">Portfolio</a>
          <a href="#contact" className="text-white text-lg">Contact</a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-white">
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-transparent text-center text-white py-4 transition-all duration-500 ease-in-out`}
        style={{
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',  // Smooth slide for the dropdown
          transition: 'transform 0.3s ease',
        }}
      >
        <a href="#about" className="block py-2 text-lg">About</a>
        <a href="#services" className="block py-2 text-lg">Services</a>
        <a href="#portfolio" className="block py-2 text-lg">Portfolio</a>
        <a href="#contact" className="block py-2 text-lg">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
