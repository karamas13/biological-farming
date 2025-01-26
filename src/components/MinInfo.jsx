import farm from "/photos/farm.jpg"
import tractors from "/photos/tractors.jpg"
import haybale from "/photos/haybale.jpg"

const MinInfo = () => {
    return ( 
        
            <div className="h-screen bg-map3 bg-cover object-cover bg-no-repeat font-serif ">
                <div className="bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 h-screen w-screen flex justify-center items-center">
                    <div className="h-[75%]  sm:w-[80%] md:w-[75%] lg:w-[80%] p-4 flex flex-col sm:flex-row">
                        <div className="mr-10 sm:w-1/2 mb-4 sm:mb-0">
                            <div className="w-full">
                                <h3 className="italic text-lg font-bold text-yellow-500 mb-1">Περισσότερα για εμάς...</h3>
                                <h2 className="italic font-bold text-3xl sm:text-4xl md:text-5xl text-green-900 mb-6">Ποιοί Είμαστε;</h2>
                                <p className="text-base sm:text-lg">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum laudantium, ad dignissimos, quis nesciunt quae vitae amet maxime modi eveniet animi inventore expedita assumenda non perspiciatis ducimus iusto blanditiis? Magnam laudantium aliquam maxime adipisci non a facere sint sed veritatis soluta. Placeat!
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row mt-8 sm:mt-4">
                                <div className="sm:w-1/2">
                                    <h3 className="text-green-900 font-bold italic text-lg mb-2">Εξειδικευμένες Καλλιέργειες</h3>
                                    <p className="text-base sm:text-lg">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore totam delectus facilis labore aliquam maiores laudantium sint eum dicta quod!
                                    </p>
                                </div>
                                <img src={farm} className="lg:w-[25em] sm:w-[40%] sm:h-[12em] md:h-[15em] md:w-[8em] md:ml-6 rounded-xl object-cover mt-4 sm:mt-0" alt="Farm" />
                            </div>
                        </div>

                        <div className="flex justify-between gap-6 py-6 sm:w-1/2 flex-wrap sm:flex-nowrap">
                            <img className="object-cover rounded-tl-full w-full sm:w-[48%] md:w-[60%] h-auto" src={tractors} alt="Tractors" />
                            <img className="object-cover rounded-br-full w-full sm:w-[48%] md:w-[60%] h-auto" src={haybale} alt="Haybale" />
                        </div>
                    </div>
                </div>
            </div>
      
    );
}

export default MinInfo;
