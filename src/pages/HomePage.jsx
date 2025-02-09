import farm from "/photos/farming.jpg"
import NavBar from "../components/NavBar";
import MinInfo from "../components/MinInfo";
import Hero from "../components/Hero";
import PowerCards from "../components/PowerCards";
import FarmsSection from "../components/FarmsSection";
import Footer from "../components/Footer";
import Lenis from "lenis";
import { useEffect } from "react";

const HomePage = () => {
    
    return ( 
        
         <div className="overflow-x-hidden font-serif scrollbar-thin scrollbar-track-green-950 scrollbar-thumb-lime-700 h-32 min-h-screen">
          
            <Hero />
            
            <MinInfo />
 
            <FarmsSection />    
 
            <Footer color={"#020617"}/>      
         
         </div>
        
     );
}
 
export default HomePage;
