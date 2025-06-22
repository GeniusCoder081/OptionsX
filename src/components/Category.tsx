const Category: React.FC = () => {
  return (
    <div>
        <div className="container mx-auto pt-10 pb-15 px-6">
             <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between items-center ">
                    <h1 className="lg:text-[38px] md:text-3xl text-2xl text-black font-bold open-sans ">Most purchased <span className="text-red-600">Category</span></h1>
                    <div>
                    <button className="rounded-[10px] md:px-4 px-3 md:py-2.5 py-2 bg-red-600 hover:bg-red-700 cursor-pointer transition-all duration-300 text-white lg:text-base text-sm font-medium">View All Categories</button>
                </div>
                    
                </div>
                <p className="open-sans lg:text-basen md:text-sm text-xs text-black max-w-3xl">Where you can explore the themes that have captured the hearts of countless customers! This curated selection showcases the top-selling designs</p> 
             </div>
        </div>
    </div>
  )
}

export default Category