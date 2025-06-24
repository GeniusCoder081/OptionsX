const Perfecttheme = () => {
  return (
    <div className="bg-gradient-to-r from-[#600D10] via-[#871116] to-[#600D10] mb-15 sm:mb-23">
      <div className="container mx-auto py-7 px-6">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="lg:text-[38px] md:text-3xl sm:text-2xl text-lg text-white font-bold open-sans ">
            Didn't Find Perfect Theme
          </h1>
          <p className="open-sans lg:text-base md:text-sm text-[11px] text-white sm:max-w-3xl max-w-xs">
            Need More Options? Subscribe to get more themes
          </p>
        </div>
        <div className="mx-auto flex justify-between max-w-4xl w-full shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white  md:py-2.5 py-1 lg:mt-9 mt-5 mb-3 md:px-4 pl-4 pr-2 sm:rounded-xl rounded-md">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full text-base focus:outline-none"
          />
          <button className="sm:text-lg text-white bg-red-600 border md:px-4 px-2.5 md:py-2 py-1.5 sm:rounded-[10px] rounded-md font-medium flex flex-row items-center sm:gap-2.5 gap-1 cursor-pointer hover:bg-red-700 transition-all duration-300">
         Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfecttheme;
