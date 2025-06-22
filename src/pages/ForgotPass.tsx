import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ForgotPass = () => {
  return (
    <>
      <Header />
      <div className="pt-[5px] pb-28 bg-[#F9F9F9] max-h-181 h-dvh">
        <div className="container mx-auto px-4 2xl:px-20 pt-30">
          <div className="flex flex-col gap-x-4 gap-y-4  2xl:p-8 p-5 ">
            <div className="rounded-lg lg:max-w-[679px] w-full  border border-gray-500 bg-white shadow-[0_0_30px_rgba(0,0,0,0.05)] text-black text-start sm:p-10 p-5 flex flex-col gap-2 mx-auto">
              <h1 className="font-bold lg:text-[32px] text-2xl pb-1">
                Forgot password?
              </h1>
              <p className="text-black opacity-75 text-sm mb-5">
                Please provide your details below and no worries, we’ll send you
                6 digit reset code.
              </p>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter Your email"
                  className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <button className="sm:mt-4.5 mt-5 bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition-all cursor-pointer">
                Submit
              </button>
            </div>
            
              <Link
                to={"/login"}
                className=" opacity-100 transition-all cursor-pointer text-sm flex font-light flex-row mt-3.5 gap-3 items-center justify-center"
              >
                <span>
                  <FaArrowLeft className="w-4 h-4 font-light" />
                </span>{" "}
                <span className="hover:underline">Back to Sign in</span>
              </Link>
         
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPass;
