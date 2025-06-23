import bestsellimg1 from "../assets/images/bestsellerimg1.png"
import bestsellimg2 from "../assets/images/bestsellerimg2.png"
import bestsellimg3 from "../assets/images/bestsellerimg3.png"
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

export interface CardItem2 {
  id: number;
  image: string;
  title: string;
  disc: string;
  price: number;
}
export const cardsData2: CardItem2[] = [
  {
    id: 1,
    image: bestsellimg1,
    title: "Just Blogger | Multi purpose blogging themes ",
    disc: "by ThemeFusion in Business",
    price: 69,
  },
  {
    id: 2,
    image: bestsellimg2,
    title: "Fitness | Keep moving forward every moment",
    disc: "by ThemeFusion in Business",
    price: 99,
  },
  {
    id: 3,
    image: bestsellimg3,
    title: "Dream Destination | Get Travlog Theme With Full UI Design.",
    disc: "by ThemeFusion in Business",
    price: 99,
  },
];
const BestSellers: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto pt-10 pb-25 px-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center ">
            <h1 className="lg:text-[38px] md:text-3xl sm:text-2xl text-lg text-black font-bold open-sans ">
              Pick your Best <span className="text-red-600">Themes of the week</span>
            </h1>
            <div>
              <button className="rounded-[10px] md:px-4 px-3 md:py-2.5 py-2 bg-red-600 hover:bg-red-700 cursor-pointer transition-all duration-300 text-white lg:text-base sm:text-sm text-xs whitespace-nowrap font-medium">
                View More Bestsellers
              </button>
            </div>
          </div>
          <p className="open-sans lg:text-basen md:text-sm text-[11px] text-black sm:max-w-3xl max-w-xs">
           Every week, our staff personally hand-pick some of the best new website themes from our collection.
          </p>
        </div>

        {/* Card Box */}
        <div className="cardsmainbox grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8.5 md:mt-12 mt-6">
          {cardsData2.map((cards) => (
            <div
              key={cards.id}
              className="bg-white p-1 rounded-lg border border-gray-200"
            >
             <div> <img src={cards.image} alt="cardsimg" className=" rounded-sm object-cover w-full" /></div>
              <div className="pt-5 px-2.5 pb-2.5">
                <h2 className="xl:text-[22px] lg:text-lg text-xl font-bold open-sans mb-2.5">
                  {cards.title}
                </h2>
                <p className="text-sm opacity-80 text-black">{cards.disc}</p>
                <span className="text-[22px] open-sans font-bold opacity-80 mt-5 mb-2.5">
                  ${cards.price}
                </span>
                <div className="flex justify-between xl:items-center gap-3 xl:flex-row lg:flex-col">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-row items-center">
                      <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                      <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                      <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                      <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                      <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                      <span className="text-sm text-black opacity-55">
                        (26.2k)
                      </span>
                    </div>
                    <div className=" text-sm text-black opacity-55">
                      983.4k Sales
                    </div>
                  </div>
                  <div className="items-center flex flex-row gap-5">
                  <MdOutlineShoppingCart className="w-8 h-8" />
                    <button className="px-7.5 py-2.5 rounded-[7px] text-red-600 hover:text-white border border-red-600 hover:bg-red-600 transition-all duration-300 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
