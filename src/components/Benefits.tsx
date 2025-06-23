import diamond from "../assets/logos/diamond.png";
import benefitsimg1 from "../assets/logos/easy.png";
import benefitsimg2 from "../assets/logos/affordable.png";
import benefitsimg3 from "../assets/logos/global.png";
import benefitsimg4 from "../assets/logos/caling.png";
import benefitsimg5 from "../assets/logos/secure.png";
import benefitsimg6 from "../assets/logos/hq.png";
import benefitsimg7 from "../assets/logos/marketing.png";
export interface benefitscard {
  id: number;
  image: string;
  title: string;
  disc: string;
}
export const Benefitscards: benefitscard[] = [
  {
    id: 1,
    image: benefitsimg1,
    title: "Easy to use",
    disc: "Buy and sell creative assets with just a few clicks.",
  },
  {
    id: 2,
    image: benefitsimg2,
    title: "Affordable Pricing",
    disc: "Access creative resources at competitive prices.",
  },
  {
    id: 3,
    image: benefitsimg3,
    title: "Global Reach",
    disc: "Connect with creators and buyers from around the globe.",
  },
  {
    id: 4,
    image: benefitsimg4,
    title: "24/7 Support",
    disc: "Our support team is here to help, anytime you need assistance.",
  },
  {
    id: 5,
    image: benefitsimg5,
    title: "Secure Transactions",
    disc: "Payments are protected with secure gateways.",
  },
  {
    id: 6,
    image: benefitsimg6,
    title: "Quality Assurance",
    disc: "High-quality content from skilled creators worldwide.",
  },
  {
    id: 7,
    image: benefitsimg7,
    title: "Diverse Marketplace",
    disc: "Explore a wide range of themes, templates, videos, and photos.",
  },
  {
    id: 8,
    image: benefitsimg7,
    title: "Diverse Marketplace",
    disc: "Explore a wide range of themes, templates, videos, and photos.",
  },
];
const Benefits = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto pt-20 pb-20 px-6 flex flex-col gap-14">
        <div className="flex flex-col sm:gap-3">
          <div className="flex flex-row justify-between items-center ">
            <h1 className="lg:text-[38px] md:text-3xl sm:text-2xl text-xl text-black font-bold open-sans ">
              Benefits of Using <span className="text-red-600">OptionsX</span>
            </h1>
            <div>
              <img src={diamond} alt="" />
            </div>
          </div>
          <p className="open-sans lg:text-basen md:text-sm text-xs text-black sm:max-w-3xl max-w-xs">
            OptionsX offers a seamless platform empowering users with diverse
            creative resources and earning opportunities.
          </p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-9 xl:gap-5 gap-6 px-4 sm:px-0">
          {Benefitscards.map((cards) => (
            <div key={cards.id} className="bg-white py-2.5 px-7 flex flex-col gap-3.5 hover:shadow-lg shadow-sm transition-all duration-300">
              <div>
                <img src={cards.image} alt="cardimagebenenits" className="w-12.5 h-12.5" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold open-sans text-black">
                  {cards.title}
                </h3>
                <p className="text-[13px] text-black opacity-50 font-semibold">
                  {cards.disc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
