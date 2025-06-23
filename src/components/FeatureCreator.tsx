import bestcreator from "../assets/images/bestcreator.png";
import bestsellimg1 from "../assets/images/bestsellerimg1.png";
import bestsellimg2 from "../assets/images/bestsellerimg2.png";
import bestsellimg3 from "../assets/images/bestsellerimg3.png";
import bestsellimg4 from "../assets/images/categorycardimg1.png";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { SlSocialFacebook } from "react-icons/sl";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
export interface Creatoritem {
  id: number;
  image: string;
  name: string;
  start: string;
  review: string;
}
export const Creatordata: Creatoritem[] = [
  {
    id: 1,
    image: bestcreator,
    name: "Ancora Themes",
    start: "Member since April 2015",
    review: "Our themes and templates are produced by world-class creators",
  },
];

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
  {
    id: 4,
    image: bestsellimg4,
    title: "Dream Destination | Get Travlog Theme With Full UI Design.",
    disc: "by ThemeFusion in Business",
    price: 99,
  },
];
const FeatureCreator: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto pt-20 pb-37 px-6">
        <div className="flex flex-col sm:gap-3">
          <div className="flex flex-row justify-between items-center ">
            <h1 className="lg:text-[38px] md:text-3xl sm:text-2xl text-lg text-black font-bold open-sans ">
              Feature <span className="text-red-600">Creator</span>
            </h1>
          </div>
          <p className="open-sans lg:text-basen md:text-sm text-[11px] text-black ">
            Our themes and templates are produced by world-class creators
          </p>
        </div>

        {/* Card Box */}
        <div className="cardsmainbox grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:auto-rows-fr gap-8.5 md:mt-12 mt-6">
          <div className="lg:row-span-2 gap-5 profilebox h-full">
            {Creatordata.map((card) => (
              <div
                key={card.id}
                className="text-white bg-white border border-gray-200 rounded-[10px] xl:p-10 md:p-8 p-7 flex flex-col lg:gap-14 gap-8 shadow-gray-400 shadow-md transition duration-300 lg:h-215"
              >
                <div className="flex flex-col h-full text-black justify-between">
                  <div className="flex flex-col">
                    <div className="mx-auto mb-5">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="object-contain my-auto lg:w-56 w-30"
                      />
                    </div>
                    <div className="flex flex-col lg:gap-1 text-center">
                      <h3 className="lg:text-2xl sm:text-xl text-lg font-bold text-gray-700">
                        {card.name}
                      </h3>
                      <p className="text-base text-gray-800">{card.start}</p>
                    </div>
                    <div className="flex flex-col lg:gap-10 gap-4 mb-1 lg:mt-8 mt-3 items-center">
                      <span>
                        <button className="rounded-[10px] md:px-6 px-3 md:py-2.5 py-2 bg-red-600 hover:bg-red-700 cursor-pointer transition-all duration-300 text-white lg:text-base sm:text-sm text-xs whitespace-nowrap font-medium open-sans">
                          View Portfolio
                        </button>
                      </span>
                      <div className="flex gap-4">
                        <span className="text-gray-700 lg:text-base text-sm  font-semibold">
                          Review:
                        </span>
                        <div className="flex flex-row items-center gap-1">
                          <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                          <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                          <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                          <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                          <IoIosStar className="w-3.5 h-3.5 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="lg:text-base text-sm text-black text-center px-5 open-sans">
                    {card.review}
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center text-black mx-auto">
                  <PiYoutubeLogoThin className="w-7 h-7 cursor-pointer" />
                  <LiaLinkedinIn className="w-6 h-6 rounded-full p-.5 border-2 border-black cursor-pointer" />
                  <SlSocialFacebook className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
          {cardsData2.map((cards) => (
            <div
              key={cards.id}
              className="bg-white p-1 rounded-lg border border-gray-200"
            >
              <div>
                {" "}
                <img
                  src={cards.image}
                  alt="cardsimg"
                  className=" rounded-sm object-cover w-full"
                />
              </div>
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

export default FeatureCreator;
