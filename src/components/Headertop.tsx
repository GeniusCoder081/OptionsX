import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import footerlogo from "../assets/logos/footerlogo.png";
import { useState } from "react";
const menuItems: string[] = [
  "All Item",
  "WordPress",
  "E commerce",
  "Shopify",
  "Elementor",
  "HTML",
  "Marketing",
  "CMS",
  "UI Templates",
  "Download Theme",
];

const Headertop: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handlesignin = (): void => {
    navigate("/login");
  };
  return (
    <div className="sticky top-0 z-50">
      <div className=" flex-col  bg-white sm:flex hidden shadow-sm py-2 border-b-1 border-gray-300">
        <div className="container mx-auto px-8 padding-2xl ">
          <div className="flex flex-row justify-between gap-18 py-3 2xl:pl-57 2xl:pr-6">
            <ul className="lg:text-base text-sm font-semibold whitespace-nowrap text-black flex gap-9 items-center">
              <li className="text-red-700 ">Web Themes & Templates</li>
              <li>Hire Freelancer</li>
            </ul>
            <ul className="lg:text-base text-sm whitespace-nowrap text-black flex md:gap-10 gap-4 items-center">
              <li className="text-red-600 cursor-pointer lg:flex hidden">
                Community
              </li>
              <li className="text-red-600 border border-red-500 px-9 py-1.5 rounded-[7px] cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300">
                Sell
              </li>
              <li className="relative">
                <MdOutlineShoppingCart className="w-7.5 h-7.5 md:mr-5 cursor-pointer" /><div className="w-2 h-2 bg-red-600 rounded-full absolute top-0 right-5"></div>
              </li>
              <li onClick={handlesignin} className="text-red-600 border border-red-500 px-4 py-1.5 rounded-[7px] cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300">
                Sign In
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className=" container mx-auto px-8 padding-2xl">
          <div className="lg:flex hidden py-3.5 pl-5">
            <ul className="text-white lg:text-sm text-xs open-sans whitespace-nowrap flex gap-7 items-center">
              {menuItems.map((item: string, index: number) => (
                <li
                  key={index}
                  className="hover:text-red-500 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden flex items-center justify-between py-3">
            {/* Open Menu Button */}
           <div className="order-2 items-center flex gap-3">
             <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
              className="text-white text-2xl border rounded px-2 py-1 order-2"
            >
              <IoMdMenu />
            </button>
            <button onClick={handlesignin} className="text-white border border-white sm:px-4 px-3 py-1 rounded-[7px] cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300">
                Sign In
            </button>
           </div>

            <Link to="/">
              <img src={footerlogo} alt="Logo" className="w-28 order-1" />
            </Link>
            
            {/* Slide-in Mobile Menu Panel */}
            <div
              className={`fixed sm:top-19 top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out z-50 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center px-4 pt-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-2xl ml-auto"
                  aria-label="Close Menu"
                >
                  <IoMdClose />
                </button>
              </div>

              <ul className="px-6 py-4 flex flex-col gap-5">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-red-500 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headertop;
