import { IoSearchSharp } from "react-icons/io5";
import heroimg1 from "../assets/images/heroimgone.png";
import heroimg2 from "../assets/images/heroimgtwo.png";
import heroimg3 from "../assets/images/heroimgthree.png";
import xiconlogo from "../assets/logos/xicon.png";
import build from "../assets/logos/buildicon.png";
import unique from "../assets/logos/uniqueicon.png";
import { useEffect, useRef, useState } from "react";
export interface keywordsdata {
  id: number;
  keyword: string;
}
export const Keyworditem: keywordsdata[] = [
  { id: 1, keyword: "Wordpress" },
  { id: 2, keyword: "ecommerce" },
  { id: 3, keyword: "shopify" },
  { id: 4, keyword: "web design" },
  { id: 5, keyword: "ui ux design" },
  { id: 6, keyword: "website" },
  { id: 7, keyword: "elementor" },
  { id: 8, keyword: "html" },
  { id: 9, keyword: "marketing" },
  { id: 10, keyword: "themeforest design" },
  { id: 11, keyword: "themeforest" },
  { id: 12, keyword: "ui template" },
  { id: 13, keyword: "landing page" },
  { id: 14, keyword: "download" },
  { id: 15, keyword: "cms" },
  { id: 16, keyword: "wordpress theme" },
];

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const filteredKeywords = Keyworditem.filter((item) =>
    item.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto justify-center flex py-17.5 flex-col items-center relative">
        <div className="absolute sm:-top-25 sm:-left-10 left-5 top-0 xl:w-[1200px] md:w-[800px] xl:h-[1030px] md:h-[700px] sm:w-[500px] sm:h-[500px] w-90 h-130  bg-[#AE0105] sm:opacity-15 opacity-50 rounded-full blur-[514px] -z-0"></div>
        <div className="lg:max-w-[848px] md:max-w-[700px] sm:max-w-[600px] px-10 w-full 2xl:ml-39 relative z-1">
          <h1 className="lg:text-[38px] md:text-3xl sm:text-2xl text-xl font-bold text-center">
            Professional <span className="text-red-500">WordPress Themes</span>,
            Website Templates for any Project
          </h1>
          <div className="flex justify-between max-w-4xl w-full shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white sm:py-2.5 py-1 lg:my-5 mt-5 mb-3 sm:px-4 pl-4 pr-2 rounded-xl relative z-[99999]">
            <input
              ref={inputRef}
              type="text"
              placeholder="e.g responsive CMS Theme"
              value={searchTerm}
              onFocus={() => setShowSuggestions(true)}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-base focus:outline-none"
            />
            <button className="sm:text-lg text-white bg-red-600 border sm:px-4 px-2.5 sm:py-2 py-1.5 rounded-lg font-medium flex flex-row items-center sm:gap-2.5 gap-1 cursor-pointer hover:bg-red-700 transition-all duration-300">
              <IoSearchSharp className="sm:w-6 w-5 h-5 sm:h-6" /> Search
            </button>

            {/* 🔽 Suggestion Dropdown */}
            {showSuggestions && searchTerm && (
              <ul
                ref={suggestionsRef}
               className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-[9999] max-h-60 overflow-y-auto ">
                {filteredKeywords.length > 0 ? (
                  filteredKeywords.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => {
                        setSearchTerm(item.keyword);
                        setShowSuggestions(false);
                      }}
                      className="px-4 py-2 text-base text-gray-700 cursor-pointer hover:bg-gray-100"
                    >
                      {item.keyword}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-sm text-gray-400">
                    No results found
                  </li>
                )}
              </ul>
            )}
          </div>

          <p className="lg:text-base sm:text-sm text-xs font-semibold tracking-wide text-center">
            Discover thousands of easy to customize themes, templates & CMS
            products, made by world-class developers.
          </p>
        </div>
        <div className="relative xl:h-[450px] lg:h-95 sm:h-115 h-100 w-full mx-auto z-0 flex sm:items-end flex-col sm:flex-row">
          {/* Animated images */}
          <div className="threeimg pointer-events-none flex flex-col items-center mt-10 z-0">
            <img
              src={heroimg1}
              alt="heroimgone"
              className="sm:absolute 2xl:w-127 xl:w-115 sm:w-100 w-90 2xl:left-65 xl:left-28 xl:top-17 lg:left-5 left-30 top-10 opacity-10 fade-img-seq "
            />
            <div className="sm:flex hidden">
              {" "}
              <img
                src={heroimg2}
                alt="heroimgtwo"
                className="sm:absolute 2xl:w-102 xl:w-90 sm:w-75 w-55 2xl:left-33 xl:-left-0 left-10 lg:left-0 xl:top-55 lg:top-48 top-41 opacity-10 fade-img-seq"
              />
              <img
                src={heroimg3}
                alt="heroimgthree"
                className="sm:absolute 2xl:w-102 xl:w-90 sm:w-75 w-55 2xl:left-138 xl:left-93 lg:left-78 left-87 2xl:top-71 xl:top-67 lg:top-53 top-54 opacity-10 fade-img-seq"
              />
            </div>
          </div>

          {/* Build box */}
          <div className="mt-7 grid sm:grid-cols-2 gap-x-5 gap-y-3 mx-auto ">
            <div className="bg-white xl:max-w-[480px] sm:max-w-75 sm:w-full xl:px-6 px-4 py-4 flex gap-2.5 rounded-sm items-center lg:absolute 2xl:right-63.5 xl:right-50 lg:right-50 right-20 xl:top-30 lg:top-20 md:top-10 opacity-0 fade-build-seq mx-3">
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
            <div className="bg-white xl:max-w-[480px] sm:max-w-75  sm:w-full xl:px-6 px-4 py-4 flex gap-2.5 rounded-sm items-center z-30 lg:absolute  xl:right-5 lg:right-15 md:right-0 xl:top-66 lg:top-50 md:top-45 top-35 opacity-0 fade-unique-seq mx-3">
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

        <div className="flex items-center justify-between sm:max-w-[950px] w-90 sm:w-full shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white md:py-2.5 py-1.5 sm:my-12 md:px-4 px-2 sm:rounded-3xl rounded-xl border-2 border-red-600 ">
          <button className="hidden text-lg text-red-500  lg:px-4 md:px-3 py-1 rounded-lg font-medium sm:flex flex-row items-center gap-2.5">
            <img src={xiconlogo} alt="" className="lg:w-16.5 md:w-12 w-8" />
          </button>
          <div className="overflow-x-auto scrollbar-hide mx-3">
            <div className="flex gap-2.5 w-max min-w-full">
              <div>
                <button className="cursor-pointer lg:text-base md:text-sm text-xs whitespace-nowrap text-red-500 border-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                  Newest
                </button>
              </div>
              <div>
                <button className="cursor-pointer lg:text-base md:text-sm text-xs whitespace-nowrap text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 border-gray-600 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                  Week Best Theme
                </button>
              </div>
              <div>
                <button className="cursor-pointer lg:text-base md:text-sm text-xs whitespace-nowrap text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 border-gray-600 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                  E-Commerce
                </button>
              </div>
              <div>
                <button className="cursor-pointer lg:text-base md:text-sm text-xs whitespace-nowrap text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 border-gray-600 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                  Marketing
                </button>
              </div>
              <div>
                <button className="cursor-pointer lg:text-base md:text-sm text-xs whitespace-nowrap text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 border-gray-600 border lg:px-4 px-2 lg:py-3 py-1.5 rounded-lg font-medium flex flex-row items-center gap-2.5">
                  WordPress
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <button className="cursor-pointer lg:text-base md:text-sm text-xs  whitespace-nowrap text-white bg-red-600 hover:bg-red-700 transition-all border lg:px-10 px-6 lg:py-4.5 py-3 rounded-lg font-medium flex flex-row items-center gap-2.5">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
