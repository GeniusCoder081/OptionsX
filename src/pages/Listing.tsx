import { IoSearchSharp } from "react-icons/io5";
import Footerhome from "../components/Footerhome";
import Headertop from "../components/Headertop";
import { useEffect, useRef, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
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

const Listing: React.FC = () => {
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
    <div>
      <Headertop />
      <div className="container mx-auto px-4 pt-25 pb-35">
        <div className="flex flex-row justify-between items-center ">
          <h1 className="lg:text-[26px] md:text-2xl sm:text-xl text-lg text-black font-bold open-sans ">
            Website Template and <span className="text-red-600">Themes</span>
          </h1>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex justify-between max-w-3xl w-full shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white sm:py-2.5 py-1 lg:my-5 mt-5 mb-3 sm:px-4 pl-4 pr-2 rounded-xl relative z-[99999]">
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
                className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-[9999] max-h-60 overflow-y-auto "
              >
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
          <div className="flex items-center">
            <button
              aria-label="Open Menu"
              className="text-[#065B8A] text-2xl border rounded px-2 py-1 "
            >
              <TfiMenuAlt />
            </button>
          </div>
        </div>
      </div>
      <Footerhome />
    </div>
  );
};

export default Listing;
