import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footerhome = () => {
  const linkClasses =
    "hover:text-red-600 hover:underline transition duration-300 cursor-pointer";
  return (
    <div>
      <div className="bg-black py-12.5 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between sm:flex-nowrap flex-wrap gap-y-7">
            <div className="flex flex-row items-center lg:gap-17 md:gap-8 gap-6">
              <ul className="flex flex-col md:gap-4 gap-2.5 xl:text-[22px] lg:text-lg md:text-base text-sm whitespace-nowrap">
                <li className="opacity-30 lg:mb-3.5 font-bold open-sans">
                  All Category
                </li>
                <li className={linkClasses}>Site Templates</li>
                <li className={linkClasses}>WordPress</li>
                <li className={linkClasses}>CMS Theme</li>
                <li className={linkClasses}>E-Commerce</li>
                <li className={linkClasses}>Blogging</li>
                <li className={linkClasses}>Marketing</li>
              </ul>
              <ul className="flex flex-col md:gap-4 gap-2.5 xl:text-[22px] lg:text-lg md:text-base text-sm whitespace-nowrap">
                <li className="opacity-30 mb-5 md:mb-6 lg:mb-11.5 font-bold open-sans"></li>
                <li className={linkClasses}>Site Templates</li>
                <li className={linkClasses}>WordPress</li>
                <li className={linkClasses}>CMS Theme</li>
                <li className={linkClasses}>E-Commerce</li>
                <li className={linkClasses}>Blogging</li>
                <li className={linkClasses}>Marketing</li>
              </ul>
            </div>
            <div className="flex flex-row gap-17">
              <ul className="flex flex-col md:gap-4 gap-2.5 xl:text-[22px] lg:text-lg md:text-base text-sm whitespace-nowrap">
                <li className="opacity-30 lg:mb-3.5 font-bold open-sans">
                  For Clients
                </li>
                <li className={linkClasses}>How We Works</li>
                <li className={linkClasses}>Customers Success</li>
                <li className={linkClasses}>Trust & Safety</li>
                <li className={linkClasses}>Quality Guide</li>
                <li className={linkClasses}>Learns</li>
              </ul>
            </div>
            <div className="flex flex-row gap-17">
              <ul className="flex flex-col md:gap-4 gap-2.5 xl:text-[22px] lg:text-lg md:text-base text-sm whitespace-nowrap">
                <li className="opacity-30 lg:mb-3.5 font-bold open-sans">
                  For Freelancers
                </li>
                <li className={linkClasses}>How We Works</li>
                <li className={linkClasses}>Customers Success</li>
                <li className={linkClasses}>Trust & Safety</li>
                <li className={linkClasses}>Quality Guide</li>
                <li className={linkClasses}>Learns</li>
              </ul>
            </div>
            <div className="flex flex-row gap-17">
              <ul className="flex flex-col md:gap-4 gap-2.5 xl:text-[22px] lg:text-lg md:text-base text-sm whitespace-nowrap">
                <li className="opacity-30 lg:mb-3.5 font-bold open-sans">
                  About Options X
                </li>
                <li className={linkClasses}>About Us</li>
                <li className={linkClasses}>Help Support</li>
                <li className={linkClasses}>Social Impact</li>
                <li className={linkClasses}>Careers</li>
                <li className={linkClasses}>Terms Of Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
       <div className="shadow-sm py-5 text-white bg-[#1C1A1A] border-gray-300">
        <div className="container mx-auto px-4 sm:px-3 flex justify-between gap-3">
          <div className="leftbox flex flex-row md:gap-5 gap-2 items-center">
            <p className="text-xs md:text-sm">
              © 2024 OptionsX Ltd. Trademarks and brands are the property of
              their respective owners.
            </p>
          </div>
          <div className="right flex-row items-center md:gap-9 sm:gap-4 gap-2 flex">
            <FaLinkedin className="sm:w-6  sm:h-6 hover:text-red-600 duration-300 transition-all cursor-pointer"/>
            <FaInstagram className="sm:w-6  sm:h-6 hover:text-red-600 duration-300 transition-all cursor-pointer"/>
            <FaFacebook className="sm:w-6  sm:h-6 hover:text-red-600 duration-300 transition-all cursor-pointer"/>
            <FaXTwitter className="sm:w-6  sm:h-6 hover:text-red-600 duration-300 transition-all cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerhome;
