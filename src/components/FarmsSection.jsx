import soil from "/photos/soil.jpg";
import farm from "/photos/farm.jpg";

const FarmsSection = () => {
  return (
    <div className="">
      {/* Image Section with gradient transition */}
      <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${soil})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 opacity-100 "></div>
        <div className="relative z-10 text-center text-white py-28">
          <h1 className="text-4xl sm:text-5xl font-bold">Οι Καλλιέργειες μας</h1>
          <p className="text-lg sm:text-xl">Εξερευνήστε τις Χειμερινές και Θερινές μας Καλλιέργειες</p>
        </div>

        <div className="h-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-14 md:gap-12 lg:gap-24 px-4 pb-20">

  {/* Card 1 */}
  <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[40%] h-[450px] sm:h-[400px] lg:h-[450px] rounded-2xl bg-cover bg-center relative shadow-2xl shadow-orange-500" style={{ backgroundImage: `url(${farm})` }}>
    <div className="bg-orange-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-saturate-100 backdrop-contrast-100 h-full rounded-2xl">
      <div className="flex flex-col justify-between items-center px-4 py-2 h-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f1f1] py-8 italic">Θερινές Καλλιέργειες</h2>
        <p className="px-4 sm:px-10 py-4 text-white text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, voluptatibus, animi eaque nam distinctio illum tempora, omnis repellat nobis adipisci aliquam?
        </p>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
          <div className="absolute inset-0 w-3 bg-orange-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">Περισσότερα</span>
        </button>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[40%] h-[450px] sm:h-[400px] lg:h-[450px] rounded-2xl bg-cover bg-center relative shadow-2xl shadow-blue-500 " style={{ backgroundImage: `url(${farm})` }}>
    <div className="bg-blue-950 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-saturate-100 backdrop-contrast-100 rounded-2xl h-full">
      <div className="flex flex-col justify-between items-center px-4 py-2 h-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f1f1] py-8 italic">Χειμερινές Καλλιέργειες</h2>
        <p className="px-4 sm:px-10 py-4 text-white text-center">
          Lorem ipsum dolor sit amet consectetur Ex cupiditate amet deleniti veritatis quisquam quibusdam eius doloremque sapiente? Blanditiis esse beatae quod consequatur? 
        </p>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
          <div className="absolute inset-0 w-3 bg-blue-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">Περισσότερα</span>
        </button>
      </div>
    </div>
  </div>

</div>

      </div>
    </div>
  );
};

export default FarmsSection;
