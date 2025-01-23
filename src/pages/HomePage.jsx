import farm from "../assets/photos/farming.jpg"
import NavBar from "../components/NavBar";

const HomePage = () => {
    return ( 
        <div className="overflow-hidden">
          <NavBar />
           {/* Overlay */}
         <div className="absolute inset-0 bg-stone-950 opacity-80 z-10"></div>
      
           <div className="bg-farming1 h-screen w-screen text-6xl text-red-600 bg-no-repeat  bg-cover">
           
             <div className="h-screen flex items-center justify-center flex-col">
               <h1 className="z-20 text-8xl bg-gradient-to-r from-orange-300 via-yellow-500 to-green-500 bg-clip-text tracking-tight text-transparent text-center">Biological <br></br><section className="ml-[10ex] mt-2">Farming</section> </h1>
               <h2 className="z-20 text-6xl text-[#f1f1f1] mt-10">Natural Products</h2>
               <p className="w-[40%] text-xl z-20 mt-8 text-center text-stone-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quisquam at rem consequuntur exercitationem fugit hic itaque, voluptate quis maiores. Aperiam natus sint aliquid, illum repellendus temporibus? Atque, officia natus.</p>
             </div> 
           </div> 
           <div>
            <h2>Test</h2>
           </div>
        </div>
     );
}
 
export default HomePage;
