import VideoPlayer from "../components/VideoPlayer";

const HomePage = () => {
    return ( 
        <div className="overflow-hidden">
         <div className="relative overflow-hidden h-screen w-screen">
             {/* Centered Heading */}
             <h1 className="text-green-800 text-8xl font-bold absolute z-10 flex justify-center items-center top-0 left-0 right-0 bottom-0">
                 Biological Agriculture
             </h1>
 
             {/* Video Player */}
             <VideoPlayer className="absolute object-cover" />
 
             {/* Green Tint Overlay */}
             <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-[#f1f1f1] opacity-100 z-10"></div>
          </div>
           <div className="h-screen w-screen flex">
             <div className="w-[50%] bg-orange-500 flex justify-center align-center">
                <h1 className="text-6xl text-[#f1f1f1] mt-10">Summer</h1>
             </div>
             <div className="w-[50%] bg-blue-800">
                <h1>Winter</h1>
             </div>
           </div>
         </div>
     );
}
 
export default HomePage;
