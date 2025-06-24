import processimg from "../assets/images/desktopimg.png";
import profileicon from "../assets/logos/create-account.png";
import penicon from "../assets/logos/penbox.png"
import lineicon from "../assets/logos/lineicon.png"
import highicon from "../assets/logos/high.png"
import { IoIosStar } from "react-icons/io";
const Process = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto pt-10 pb-25 px-6 relative">
        <div className="flex flex-col sm:gap-3">
          <div className="flex flex-row justify-between items-center ">
            <h1 className="lg:text-[38px] md:text-3xl sm:text-2xl text-lg text-black font-bold open-sans ">
              How the Process{" "}
              <span className="text-red-600">Theme Selection</span>
            </h1>
          </div>
          <p className="open-sans lg:text-basen md:text-sm text-[11px] text-black ">
            This week's best web themes & templates have arrived.
          </p>
        </div>
        <div className="flex sm:mt-22.5 mt-8">
          <div className="z-20 flex flex-row gap-2.5 bg-white sm:px-6 px-4 sm:py-3.5 py-1.5 sm:max-w-[353px] max-w-[300px] w-full rounded-sm 2xl:ml-35 xl:mb-0 mb-6">
            <img src={profileicon} alt="" />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold open-sans">Create account</h3>
              <p className="text-[13px] font-semibold opacity-50">
                Create ThemeForest account
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center sm:mr-8 md:-mt-9 relative pb-25">
          <div className="relative">
            {/* 🔴 Red background circle behind image */}
            <div className="absolute sm:-top-25 sm:-left-10 left-5 md:w-[700px] sm:w-[500px] sm:h-[500px] w-50 h-50 md:h-[600px] bg-[#EA4335]/20 rounded-full blur-[140px] z-0"></div>
            <img src={processimg} alt="" className="relative z-10 sm:w-126 w-90 " />
          </div>
            <img src={penicon} alt="" className="absolute 2xl:-left-25 left-0 top-8" />
            <img src={lineicon} alt="" className="absolute 2xl:-left-25 left-0 -bottom-10" />
            <img src={highicon} alt="" className="absolute 2xl:-right-40 right-0 -bottom-15" />
            <IoIosStar className="text-yellow-500 text-xl absolute sm:-top-8 -top-20 lg:left-200 sm:left-100 left-20"/>
            <IoIosStar className="text-yellow-500 text-xl absolute sm:left-143 left-50 sm:-top-15 -top-25"/>
            <IoIosStar className="text-yellow-500 text-xl absolute -bottom-3 lg:left-153 sm:left-130 right-40"/>
            <IoIosStar className="text-yellow-500 text-xl absolute bottom-3 lg:left-198"/>
            <IoIosStar className="text-yellow-500 text-xl absolute -bottom-20 sm:right-120 right-90"/>
        </div>
      </div>
    </div>
  );
};

export default Process;
