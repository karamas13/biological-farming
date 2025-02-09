import { FaTractor } from "react-icons/fa";
import AboutUs from '../pages/AboutUs';

const NavBar = () => {
  return ( 
      <nav className="flex items-center justify-between py-5 bg-transparent font-serif absolute z-30 w-screen">
        <div className="flex flex-shrink-0 items-center px-4 gap-2 text-lime-500 lg:text-4xl">
          <FaTractor className="text-[#FFD700]"/>
          <h1 className="">BioFarms</h1>
        </div>
        <div className="flex items-center justify-center lg:pr-0 md:pr-10 pr-10">
          <div className="text-center tracking-tighter">
           <div className="flex justify-center items-center lg:gap-20 lg:text-[1.5em] text-[0.8em] text-white gap-6 lg:mr-20 mr-1">
            <a href="#" className="hover:text-lime-500 transition ease-in-out duration-[0.7s]">Farms</a>
            <a href="/AboutUs" className="hover:text-lime-500 transition ease-in-out duration-[0.7s]">AboutUs</a>
            <a href="#" className="hover:text-lime-500 transition ease-in-out duration-[0.7s]">Contact</a>        
           </div>
          </div>
        </div>
      </nav> 
  );
}
 
export default NavBar;