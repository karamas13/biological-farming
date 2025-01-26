import { Container } from "postcss";
import farm from "/photos/farm.jpg";

const PowerCards = () => {
  return (
    <div className="h-auto max-w-screen bg-gradient-to-b from-green-50 via-green-100 to-lime-200 px-4 py-10">
      <div className="text-center py-10">
        <h3 className="italic text-lg font-bold text-yellow-500 mb-2">Οι Υπηρεσίες μας</h3>
        <h2 className="font-bold text-4xl text-green-950">Τι προσφέρουμε;</h2>
      </div>

      {/* Flex container for responsive cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-14 md:gap-12 lg:gap-24">

        {/* Card 1 */}
        <div className="rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[24%] bg-white">
          <div className="flex flex-col justify-center items-center">
            <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full" />
            <div className="w-full h-[10em] text-center bg-green-50 rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
              <h3 className="text-2xl font-bold py-1">Quality</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[24%] bg-white">
          <div className="flex flex-col justify-center items-center">
            <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full" />
            <div className="w-full h-[10em] text-center bg-green-50 rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
              <h3 className="text-2xl font-bold py-1">Quality</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[24%] bg-white">
          <div className="flex flex-col justify-center items-center">
            <img src={farm} className="object-cover rounded-t-xl h-[20em] w-full" />
            <div className="w-full h-[10em] text-center bg-green-50 rounded-b-xl flex-col items-center px-4 py-2 min-h-fit">
              <h3 className="text-2xl font-bold py-1">Quality</h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias esse sapiente vitae nostrum quis voluptates recusandae accusantium harum laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerCards;
