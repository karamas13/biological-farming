import { FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import logonew2 from "/photos/logonew2.avif";

const Footer = ({ color }) => {
  return (
    <footer 
      className="text-[#f1f1f1] transition-colors duration-500" 
      style={{ backgroundColor: color }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 py-12 lg:py-16 lg:gap-60 gap-14">
        
        {/* Logo & Socials */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left">
          <img 
            src={logonew2} 
            alt="Κάτω απ' το αυλάκι Logo" 
            width="250"
            height="250"
            loading="lazy"
            className="h-[10em] md:h-[12em] w-auto object-contain mb-4"
          />
          <div className="flex flex-row w-full justify-center gap-4">
            <a 
              href="https://www.instagram.com/downofthegapbio/" 
              target="_blank" 
              aria-label="Follow us on Instagram" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-orange-600 rounded-xl transition-all duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>        
            <a 
              href="mailto:downthegapk@gmail.com" 
              aria-label="Send us an email"
              className="p-3 bg-white/5 hover:bg-red-700 rounded-xl transition-all duration-300"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
            
        {/* Explore Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/4">
          <h2 className="text-3xl font-bold mb-6 flex flex-col items-center lg:items-start">
            Explore
            <span className="flex items-center gap-2 mt-2">
              <span className="w-8 h-[3px] bg-green-700 rounded-full" />
              <span className="w-1 h-1 bg-green-700 rounded-full" />
            </span>
          </h2>
          <nav className="flex flex-col gap-3 text-lg">
            {[
              { name: "Home", path: "/" },
              { name: "Farms", path: "/Farms" },
              { name: "About Us", path: "/AboutUs" },
              { name: "Contact", path: "/Contact" }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.path} 
                className="flex items-center gap-3 hover:text-green-500 transition-colors duration-300"
              >
                <FaLeaf className="text-sm text-green-700" />
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3">
          <h2 className="text-3xl font-bold mb-6 flex flex-col items-center lg:items-start">
            Contact
            <span className="flex items-center gap-2 mt-2">
              <span className="w-8 h-[3px] bg-green-700 rounded-full" />
              <span className="w-1 h-1 bg-green-700 rounded-full" />
            </span>
          </h2>
          <div className="flex flex-col gap-4 text-lg items-center lg:items-start">
            <a href="tel:+306943200685" className="flex items-center gap-4 hover:text-yellow-500 transition-colors">
              <FaPhoneAlt className="text-yellow-600"/> +30 6943200685
            </a>
            <p className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-600"/> downthegapk@gmail.com
            </p>
            <p className="flex items-center gap-4 text-center lg:text-left">
              <FaMapMarkerAlt className="text-yellow-600"/> Korinth, Greece
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-stone-400 px-4">
        <p>
          © 2026 downthegap.gr | Designed & Developed by{" "}
          <a 
            href="https://nickkaramaroudisdev.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Nick Karamaroudis
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;