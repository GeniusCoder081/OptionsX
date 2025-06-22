import { Link } from "react-router-dom";
import optionXlogo from "../assets/logos/optionx-logo.png";

const Header = () => {
  return (
    <>
    <div className=" sticky top-0 z-50 bg-white shadow-sm py-2 border-b-1 border-gray-300">
        <div className="container mx-auto px-8 padding-2xl">
          <div className="logobox">
            <Link to={"/"}>
              <img src={optionXlogo} alt="" className="sm:w-44 w-35" />
            </Link>
          </div>
          
        </div>
      </div></>
  )
}

export default Header