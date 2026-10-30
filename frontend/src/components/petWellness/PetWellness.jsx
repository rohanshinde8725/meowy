import { HiArrowRight } from "react-icons/hi";
import { 
  FaGift, 
  FaPercent, 
  FaUsers, 
  FaShoppingBag 
} from "react-icons/fa";

const PetWellness = () => {
    const info = [
        {
            id: 1,
            icon: <FaGift />,
            head: 'Better Nutrition',
            subHead: 'Premium food for a stronger body',
        },
        {
            id: 2,
            icon: <FaPercent />,
            head: 'Regular Grooming',
            subHead: 'Keep them clean & comfortable',
        },
        {
            id: 3,
            icon: <FaUsers />,
            head: 'Vet Approved',
            subHead: 'Products you can trust',
        },
        {
            id: 4,
            icon: <FaShoppingBag />,
            head: 'Expert Support',
            subHead: "We're here for you, always",
        },
    ];

    return (
        <section className="w-full pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#faf7f2]">
            <div className="">
                {/* 
                  Grid Layout:
                  - Mobile (< md): 1 column (all stacked full width)
                  - Tablet (md to < lg): 2 columns
                    * Div 1 (Image): md:col-span-2 (100% width on top)
                    * Div 2 (Text): md:col-span-1 (50% width on bottom-left)
                    * Div 3 (Features): md:col-span-1 (50% width on bottom-right)
                  - Desktop (>= lg): 3 columns (33.3% width each in 1 row)
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 items-center bg-[#F0EFE3]">
                    
                    {/* 1. Image Div - 100% width in tablet (md:col-span-2), 1 col in desktop */}
                    <div className="w-full md:col-span-2 lg:col-span-1 h-64 sm:h-80 md:h-96 lg:h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[440px] overflow-hidden shadow-xs">
                        <img 
                            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 ease-out" 
                            src="/images/other/pets.jpg" 
                            alt="Healthy and happy pets" 
                            loading="lazy"
                        />
                    </div>

                    {/* 2. Headline & Description Div - 50% width in tablet (md:col-span-1), 1 col in desktop */}
                    <div className="w-[90%] xl:w-[80%] mx-auto md:col-span-1 lg:col-span-1 flex flex-col justify-center items-start gap-4 sm:gap-5 pb-0 md:pb-10 lg:pb-0">
                        <h5 className="tracking-[3px] font-semibold text-[#3E592E] uppercase text-xs sm:text-sm">
                            Pet Wellness
                        </h5>
                        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-900 leading-tight">
                            Healthy Pets, <br /> Happier Lives
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed w-full max-w-md lg:max-w-none">
                            From nutritious food to essential care, we help your pets live longer, healthier, and more joyful lives.
                        </p>
                        <div className="pt-1 sm:pt-2">
                            <button className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase text-white py-2.5 px-6 sm:py-3 sm:px-7 bg-[#3E592E] rounded-md font-semibold hover:bg-white hover:text-[#3E592E] border-2 border-[#3E592E] transition-all duration-300 cursor-pointer shadow-sm group">
                                <span>Explore Wellness</span>
                                <HiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* 3. Info List Div - 50% width in tablet (md:col-span-1), 1 col in desktop */}
                    <div className="relative w-full md:col-span-1 lg:col-span-1 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 lg:px-0 pb-10 md:pb-10 lg:pb-0">
                        {/* Custom Vertical Divider Line (Visible between Div 2 & Div 3 in both Tablet and Desktop) */}
                        <div 
                            aria-hidden="true" 
                            className="hidden md:block absolute -left-4 sm:-left-5 lg:-left-4 xl:-left-6 top-1/2 -translate-y-1/2 w-[1.5px] h-[75%] bg-[#DED7CD] rounded-full pointer-events-none" 
                        />

                        {/* Custom Horizontal Divider Line for Mobile only (< md), centered vertically in the gap and horizontally */}
                        <div 
                            aria-hidden="true" 
                            className="block md:hidden absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 w-[90%] h-[1.5px] bg-[#DED7CD] rounded-full pointer-events-none" 
                        />

                        {/* 4 Feature Items */}
                        <div className="flex flex-col justify-center gap-4 sm:gap-4.5 xl:gap-5 w-full">
                            {info.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 items-center justify-start group cursor-pointer w-full lg:w-[90%] xl:w-[60%] mx-auto"
                                >
                                    <div className="w-12 h-12 sm:w-13 sm:h-13 shrink-0 rounded-full bg-white flex items-center justify-center text-xl text-[#3E592E] shadow-2xs border border-stone-200/50 group-hover:bg-[#3E592E] group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#3E592E] transition-colors duration-300">
                                            {item.head}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                                            {item.subHead}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PetWellness;
