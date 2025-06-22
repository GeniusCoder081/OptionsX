import { IoSearchSharp } from "react-icons/io5";
import heroimg1 from "../assets/images/heroimgone.png";
import heroimg2 from "../assets/images/heroimgtwo.png";
import heroimg3 from "../assets/images/heroimgthree.png";
import xiconlogo from "../assets/logos/xicon.png";
import build from "../assets/logos/buildicon.png";
import unique from "../assets/logos/uniqueicon.png";
import Category from "./Category";
const Hero: React.FC = () => {
  return (
    <div className="bg-[#f4e8e8]">
      <div className="container mx-auto justify-center flex py-17.5 flex-col items-center">
        <div className="lg:max-w-[848px] max-w-[700px] w-full 2xl:ml-39">
          <h1 className="lg:text-[38px] text-3xl font-bold text-center">
            Professional <span className="text-red-500">WordPress Themes</span>,
            Website Templates for any Project
          </h1>
          <div className="flex justify-between max-w-4xl  w-full shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white  py-2.5 lg:my-5 mt-5 mb-3 px-4 rounded-xl ">
            <input
              type="text"
              placeholder="e.g responsive CMS Theme"
              className="w-full text-base focus:outline-none"
            />
            <button className="text-lg text-white bg-red-600 border px-4 py-2 rounded-lg font-medium flex flex-row items-center gap-2.5 cursor-pointer hover:bg-red-700 transition-all duration-300">
              <IoSearchSharp className="w-6 h-6" /> Search
            </button>
          </div>
          <p className="lg:text-base text-sm font-semibold tracking-wide">
            Discover thousands of easy to customize themes, templates & CMS
            products, made by world-class developers.
          </p>
        </div>
        <div className="relative xl:h-[450px] lg:h-95 h-115 w-full mx-auto z-10 flex items-end ">
          {/* Animated images */}
          <div className="threeimg pointer-events-none">
            <img
              src={heroimg1}
              alt="heroimgone"
              className="absolute 2xl:w-127 xl:w-115 w-100 2xl:left-65 xl:left-28 xl:top-17 lg:left-5 left-30 top-10 opacity-10 fade-img-seq"
            />
            <img
              src={heroimg2}
              alt="heroimgtwo"
              className="absolute 2xl:w-102 xl:w-90 w-75 2xl:left-33 xl:-left-0 left-10 lg:left-0 xl:top-55 lg:top-48 top-41 opacity-10 fade-img-seq"
            />
            <img
              src={heroimg3}
              alt="heroimgthree"
              className="absolute 2xl:w-102 xl:w-90 w-75 2xl:left-138 xl:left-93 lg:left-78 left-87 2xl:top-71 xl:top-67 lg:top-53 top-54 opacity-10 fade-img-seq"
            />
          </div>

          {/* Build box */}
          <div className="grid grid-cols-2 gap-5 mx-auto">
            <div className="bg-white xl:max-w-[480px] max-w-75 w-full xl:px-6 px-4 py-4 flex gap-2.5 rounded-sm items-center z-30 lg:absolute 2xl:right-63.5 xl:right-50 lg:right-50 right-20 xl:top-30 lg:top-20 md:top-10 opacity-0 fade-build-seq">
              <div>
                <img src={build} alt="" className="xl:w-12.5 xl:h-12 w-8 h-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="xl:text-lg text-sm font-bold text-black">
                  Build Anything
                </h3>
                <p className="xl:text-[13px] text-xs  opacity-50 text-black">
                  No coding required, Customize any theme, in any technology
                </p>
              </div>
            </div>

            {/* Unique box */}
            <div className="bg-white xl:max-w-[480px] max-w-75 w-full xl:px-6 px-4 py-4 flex gap-2.5 rounded-sm items-center z-30 lg:absolute  xl:right-5 lg:right-15 md:right-0 xl:top-66 lg:top-50 md:top-45 top-35 opacity-0 fade-unique-seq">
              <span>
                <img
                  src={unique}
                  alt=""
                  className="xl:w-12.5 xl:h-12 w-8 h-6"
                />
              </span>
              <div className="flex flex-col">
                <h3 className="xl:text-lg text-sm font-bold text-black">
                  Unique Themes Templates
                </h3>
                <p className="xl:text-[13px] text-xs opacity-50 text-black">
                  Unique themes and templates for every budget and every
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between max-w-[950px]  w-full shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white md:py-2.5 py-1.5 my-12 md:px-4 px-2 rounded-3xl border-2 border-red-600 ">
          <button className="text-lg text-red-500  lg:px-4 md:px-3 py-1 rounded-lg font-medium flex flex-row items-center gap-2.5">
            <img src={xiconlogo} alt="" className="lg:w-16.5 md:w-12 w-8" />
          </button>
          <div className="flex gap-2.5">
            <div>
              {" "}
              <button className="cursor-pointer lg:text-base md:text-sm text-xs  whitespace-nowrap text-red-500 border-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                Newest
              </button>
            </div>
            <div>
              <button className="cursor-pointer lg:text-base md:text-sm text-xs  whitespace-nowrap text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 border-gray-600 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5 ">
                Week Best Theme
              </button>
            </div>
            <div>
              <button className="cursor-pointer lg:text-base md:text-sm text-xs  whitespace-nowrap text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 border-gray-600 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                E-Commerce
              </button>
            </div>
            <div>
              <button className="cursor-pointer lg:text-base md:text-sm text-xs  whitespace-nowrap text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 border-gray-600 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                Marketing
              </button>
            </div>
            <div>
              <button className="cursor-pointer lg:text-base md:text-sm text-xs  whitespace-nowrap text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 border-gray-600 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                WordPress
              </button>
            </div>
          </div>
          <div className="">
            <button className="cursor-pointer lg:text-base md:text-sm text-xs  whitespace-nowrap text-white bg-red-600 hover:bg-red-700 transition-all border lg:px-10 px-6 lg:py-4.5 py-3 rounded-lg font-medium flex flex-row items-center gap-2.5">
              Search
            </button>
          </div>
        </div>
      </div>
      <Category/>
    </div>
  );
};

export default Hero;
