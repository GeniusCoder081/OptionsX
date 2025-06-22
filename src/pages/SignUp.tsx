import Header from "../components/Header";
import icon1 from "../assets/logos/media.png";
import icon2 from "../assets/logos/sellingwork.png";
import icon3 from "../assets/logos/community.png";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import google from "../assets/logos/google.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
  // Form state
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form reload
    console.log({
      name,
      email,
      password,
      confirmPassword,
    });
  };
  return (
    <>
      <Header />
      <div className="pt-[5px] pb-28 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 2xl:px-20">
          <div className="flex xl:flex-row flex-col justify-between gap-x-4 gap-y-4 lg:gap-y-8 2xl:p-8 p-5 ">
            <div className="left text-black text-start py-5">
              <div className="flex flex-col lg:mt-17 ">
                <h1 className="font-bold lg:text-[32px] text-2xl pb-1">
                  Create an OptionsX Account
                </h1>
                <p className="text-sm">
                  <span className="text-sm opacity-75">
                    Already have an OptionsX Account?{" "}
                  </span>
                  <Link
                    to={"/login"}
                    className="font-semibold text-red-600 opacity-100 underline hover:no-underline transition-all cursor-pointer"
                  >
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="xl:px-5 py-6 xl:relative 2xl:mt-27.5 sm:flex gap-6 justify-start hidden ">
                <div className="card1 shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white max-w-55 md:px-9 md:py-5 px-4 py-3 flex flex-col gap-2.5 rounded-[10px] xl:absolute 2xl:left-17 2xl:-top-4 left-15 top-19">
                  <span>
                    <img src={icon1} alt="" />
                  </span>
                  <h4 className="font-semibold md:text-base text-sm">
                    Theme & Media
                  </h4>
                  <p className="md:text-sm text-xs">
                    Access diverse themes, videos and photos
                  </p>
                </div>
                <div className="card2 shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white max-w-55 md:px-9 md:py-5 px-4 py-3 flex flex-col gap-2.5 rounded-[10px] xl:absolute 2xl:-right-15 2xl:top-17 -right-12 top-40 z-2">
                  <span>
                    <img src={icon2} alt="" />
                  </span>
                  <h4 className="font-semibold md:text-base text-sm">
                    Selling work
                  </h4>
                  <p className="md:text-sm text-xs">
                    Sell your creative work and earn money.
                  </p>
                </div>
                <div className="card3 shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white max-w-73 md:px-9 md:py-5 px-4 py-3 flex flex-col gap-2.5 rounded-[10px] xl:absolute 2xl:left-0 2xl:top-43 left-0 top-67 z-0">
                  <span>
                    <img src={icon3} alt="" />
                  </span>
                  <h4 className="font-semibold md:text-base text-sm">
                    Community Connection
                  </h4>
                  <p className="md:text-sm text-xs">
                    Connect with a global community.
                  </p>
                </div>
                <div className="absolute 2xl:top-96 top-116 xl:left-0 lg:flex hidden">
                  <h2 className="font-bold lg:text-2xl text-xl pb-1">
                    Start your journey today!
                  </h2>
                </div>
              </div>
            </div>
            <div className="right lg:max-w-[661px] w-full  border border-gray-500 bg-white shadow-[0_0_30px_rgba(0,0,0,0.05)] text-black text-start p-5 sm:p-10 flex flex-col gap-4 2xl:ml-auto mx-auto xl:mx-0">
              <h1 className="font-bold lg:text-[32px] text-2xl pb-1">
                 Sign Up
                </h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Your name"
                    className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter Your email"
                    className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    placeholder="Enter Your Password"
                    className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="confirm_password"
                    className="text-sm font-medium"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    id="confirm_password"
                    placeholder="Confirm Your Password"
                    className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className=" bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition-all cursor-pointer"
                >
                  Create Account
                </button>
              </form>
              <p className="text-sm text-center">
                <span className="text-sm opacity-75">
                  Already have an OptionsX account?{" "}
                </span>
                <Link
                  to={"/login"}
                  className="font-semibold text-red-600 opacity-100 underline hover:no-underline transition-all cursor-pointer"
                >
                  Sign in
                </Link>
              </p>
              <div className="flex items-center gap-2 sm:py-4 py-2">
                <div className="flex-grow h-px bg-gray-200"></div>
                <span className="text-black text-sm font-medium">or</span>
                <div className="flex-grow h-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col sm:gap-4 gap-2 w-full ">
                {/* Google */}
                <div className="flex items-center gap-x-3 px-4 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-50 transition justify-center">
                  <img src={google} alt="Google" className="w-8 h-8" />
                  <span className="text-sm font-medium text-black">
                    Continue with Google
                  </span>
                </div>

                {/* Apple */}
                <div className="flex items-center gap-x-3 px-4 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-50 transition justify-center">
                  <FaApple className="w-8 h-8 text-black" />
                  <span className="text-sm font-medium text-black">
                    Continue with Apple
                  </span>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-x-3 px-4 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-50 transition justify-center">
                  <FaFacebook className="w-8 h-8 text-blue-600" />
                  <span className="text-sm font-medium text-black">
                    Continue with Facebook
                  </span>
                </div>
              </div>
              <div className="flex-grow h-px bg-gray-200"></div>
             <p className="text-black opacity-75 text-sm">
                By continuing, you confirm you are 18 or over and agree to our {""} 
               <Link to={"privacy"} className="underline hover:no-underline transition-all duration-700">Privacy Policy</Link> and <Link to={"/termsofuse"} className="underline hover:no-underline transition-all duration-700">Terms of Use.</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
