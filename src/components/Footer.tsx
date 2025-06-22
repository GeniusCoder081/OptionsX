import footerlogo from "../assets/logos/footerlogo.png"
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="shadow-sm py-5 text-white bg-[#1C1A1A] border-gray-300">
        <div className="container mx-auto px-8 sm:px-3 flex justify-between">
          <div className="leftbox flex flex-row md:gap-5 gap-2 items-center">
            <Link to={"/"}  className="md:w-46.5 w-30">
              <img src={footerlogo} alt="" />
            </Link>
            <p className="text-xs md:text-sm">
              © 2024 OptionsX Ltd. Trademarks and brands are the property of
              their respective owners.
            </p>
          </div>
          <div className="right flex-row items-center gap-9 lg:flex hidden ">
            <FaLinkedin className="w-6 h-6"/>
            <FaInstagram className="w-6 h-6"/>
            <FaFacebook className="w-6 h-6"/>
            <FaXTwitter className="w-6 h-6"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
