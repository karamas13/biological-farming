import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const HomeButton = () => {
    const nav = useNavigate();

    return ( 
        <button onClick={()=> {nav("/")}} className="font-bold font-mono flex items-center fixed bottom-0 left-0 text-green-200 m-2 md:m-4 lg:m-6 bg-[#333] py-2 px-4 rounded-full opacity-65 text-lg md:text-2xl lg:text-3xl hover:opacity-100 transition ease in out duration-[0.6s]"><FaAngleLeft />Home</button>
     );
}
 
export default HomeButton;