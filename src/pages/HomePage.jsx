import farm from "/photos/farming.jpg"
import NavBar from "../components/NavBar";
import MinInfo from "../components/MinInfo";
import Hero from "../components/Hero";
import PowerCards from "../components/PowerCards";
import FarmsSection from "../components/FarmsSection";

const HomePage = () => {
    return ( 
        
         <div className="overflow-x-hidden font-serif scrollbar-thin scrollbar-track-green-950 scrollbar-thumb-lime-700 h-32 min-h-screen">
           <NavBar />
           
           <Hero />
           
           <MinInfo />

           <PowerCards />

           <FarmsSection />          
            
         </div>
        
     );
}
 
export default HomePage;
