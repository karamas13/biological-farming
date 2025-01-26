import farm from "/photos/farming.jpg"
import NavBar from "../components/NavBar";
import MinInfo from "../components/MinInfo";
import Hero from "../components/Hero";

const HomePage = () => {
    return ( 
        
         <div className="overflow-x-hidden font-serif ">
           <NavBar />
           
           <Hero />
           
           <MinInfo />
            
         </div>
        
     );
}
 
export default HomePage;
