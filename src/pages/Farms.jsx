import FarmsSection from "../components/FarmsSection"
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Farms = () => {
    return ( 
    <div className="overflow-hidden max-wscreen">
     <NavBar />  
     <FarmsSection />
     <Footer color={"#020617"}/> 
    </div> 
    );
}
 
export default Farms;