import { FaInstagram, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import logo from "/photos/logo.avif"

const Footer = ({ color }) => {
  return (
    <div className="min-h-fit text-[#f1f1f1]" style={{backgroundColor: color}}>
      <div className="flex flex-col lg:flex lg:flex-row md:flex md:flex-col sm:flex-row justify-between items-center sm:px-60 md:px-40 py-10">
        
        {/* Logo Section */}
        <div className="flex flex-col lg:w-[30%] sm:w-[20%] min-h-[1em] text-center sm:text-left md:text-center md:w-[50%]">
          <img src={logo} className="h-[18em] w-auto object-cover"/>
       
          <div className="flex justify-center sm:justify-between py-4 md:justify-center">
            <a href="https://www.instagram.com/downthegapbio/" target="_blank" title="Connect with us on Instagram" rel="noopener noreferrer">
              <FaInstagram className="text-3xl sm:text-5xl hover:bg-orange-600 ease-in-out duration-[0.7s] rounded-xl p-1 mx-2"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573650190967" target="_blank" title="Connect with us on Facebook" rel="noopener noreferrer">
              <FaFacebook className="text-3xl sm:text-5xl hover:bg-blue-600 ease-in-out duration-[0.7s] rounded-full p-1 mx-2"/>
            </a>
            <a href="mailto: downthegap@gmail.com" target="_blank" title="Connect with us via Email" rel="noopener noreferrer">
              <FaEnvelope className="text-3xl sm:text-5xl hover:bg-red-700 ease-in-out duration-[0.7s] rounded-xl p-1 mx-2"/>
            </a>
          </div>
        </div>
        
        {/* Explore Section */}
        <div className="sm:w-[20%] lg:w-[33%] min-h-[18em] flex flex-col justify-center items-center text-center sm:text-left">
          <h2 className="text-4xl sm:text-6xl py-1 md:text-5xl">Explore
            <span className="flex items-center justify-center sm:justify-start mt-2 sm:mt-4">
              <section className="w-[2em] border-b-[3px] border-green-900 rounded-2xl my-4"></section>
              <section className="w-1 h-1 border-[3px] border-green-900 rounded-full ml-2"></section>
            </span>
          </h2>
          <div className="text-lg sm:text-xl flex flex-col sm:items-start ">
            <section className="py-1 flex items-center  gap-4 hover:text-green-900 transition-all ease-in-out duration-[0.7s]">
              <FaLeaf />
              <a href="/Farms" className="cursor-pointer">Farms</a>               
            </section>
            <section className="py-1 flex items-center gap-4 hover:text-green-900 transition-all ease-in-out duration-[0.7s]">
              <FaLeaf />
              <a href="/AboutUs" className="cursor-pointer">AboutUs</a>               
            </section>
            <section className="py-1 flex items-center gap-4 hover:text-green-900 transition-all ease-in-out duration-[0.7s]">
              <FaLeaf />
              <a href="/Contact" className="cursor-pointer">Contact</a>               
            </section>
            <section className="py-1 flex items-center gap-4 hover:text-green-900 transition-all ease-in-out duration-[0.7s]">
              <FaLeaf />
              <a href="/" className="cursor-pointer">Home</a>               
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <div className="sm:w-[20%] lg:w-[33%] min-h-[18em] flex flex-col items-center justify-center text-center sm:text-left ">
          <h2 className="text-4xl sm:text-6xl py-1 md:text-5xl">Contact
            <span className="flex items-center justify-center sm:justify-start mt-2 sm:mt-4">
              <section className="w-[2em] border-b-[3px] border-green-900 rounded-2xl my-4"></section>
              <section className="w-1 h-1 border-[3px] border-green-900 rounded-full ml-2"></section>
            </span>
          </h2>
          <div className="text-lg sm:text-xl flex flex-col items-center sm:items-start ">
            <section className="flex items-center gap-6 py-2 lg:flex lg:flex-row"><FaPhoneAlt className="text-yellow-500"/> +30 6943200685</section>
            <section className="flex items-center gap-6 py-2 lg:flex lg:flex-row" ><FaEnvelope className="text-yellow-500"/> downthegap@gmail.com</section>
            <section className="flex items-center gap-6 py-2 lg:flex lg:flex-row"><FaMapMarkerAlt className="text-yellow-500"/> Based in Korinth, Greece</section>
          </div>
        </div>

      </div>

      {/* Footer bottom */}
      <h4 className="text-center py-5 text-sm sm:text-base px-1">© 2025 websitename.com All rights reserved | Designed and Developed by <a href="https://nickkaramaroudisdev.com/" target="_blank" className="underline">Nick Karamaroudis</a></h4>
    </div>
  );
}

export default Footer;
