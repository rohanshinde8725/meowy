import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Dog Mom",
        avatar: "/images/testimonials/customer-1.jpg",
        review: "Amazing quality products and super fast delivery! My dog absolutely loves the new bed. Highly recommend Meowy!",
        rating: 5,
    },
    {
        id: 2,
        name: "James T.",
        role: "Cat Dad",
        avatar: "/images/testimonials/customer-2.jpg",
        review: "Great selection, fair prices and excellent customer service. My cat is happier, healthier, and more playful than ever!",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily R.",
        role: "Pet Parent",
        avatar: "/images/testimonials/customer-3.jpg",
        review: "The best pet store online! Everything arrived on time, securely packaged, and my pets love their new toys.",
        rating: 5,
    },
    {
        id: 4,
        name: "Michael B.",
        role: "Dog Dad",
        avatar: "/images/testimonials/customer-4.jpg",
        review: "The organic grooming supplies worked wonders for my dog's sensitive coat. Excellent customer support and speedy shipping!",
        rating: 5,
    },
];

const Testimonial = () => {
    const swiperRef = useRef(null);

    return (
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F0EFE3]">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 lg:gap-12">
                    
                    {/* Left Column: Title, Subtitle, Description & Navigation */}
                    <div className="w-full lg:w-[35%] xl:w-[32%] shrink-0 flex flex-col items-start gap-4 sm:gap-5">
                        <h5 className="tracking-[3px] font-semibold text-[#3E592E] uppercase text-xs sm:text-sm">
                            Real Pet Parents
                        </h5>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight">
                            What Our <br className="hidden sm:inline" /> Customers Say
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                            We love hearing from our amazing customers. Here's what they have to say about their experience with Meowy.
                        </p>
                        
                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-stone-300/80 hover:border-[#3E592E] bg-white hover:bg-[#3E592E] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer group"
                                aria-label="Previous Testimonial"
                            >
                                <HiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-stone-300/80 hover:border-[#3E592E] bg-white hover:bg-[#3E592E] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer group"
                                aria-label="Next Testimonial"
                            >
                                <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Testimonial Cards Slider */}
                    <div className="w-full lg:w-[65%] xl:w-[68%] min-w-0">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={18}
                            slidesPerView={1}
                            grabCursor={true}
                            loop={true}
                            breakpoints={{
                                520: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 18,
                                },
                                640: {
                                    slidesPerView: 1.6,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1280: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 24,
                                },
                            }}
                            className="pb-2"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id} className="!h-[270px] sm:!h-[280px]">
                                    <div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/60 shadow-xs hover:shadow-md transition-all duration-300">
                                        
                                        <div>
                                            {/* User Avatar, Name & Role */}
                                            <div className="flex items-center gap-3.5 mb-3.5">
                                                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-stone-200 shadow-2xs">
                                                    <img 
                                                        src={item.avatar} 
                                                        alt={item.name} 
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 text-base leading-tight">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                                                        {item.role}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Review Quote */}
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic line-clamp-3 sm:line-clamp-4">
                                                "{item.review}"
                                            </p>
                                        </div>

                                        {/* 5 Gold Stars Rating */}
                                        <div className="flex items-center gap-1 text-amber-400 pt-3 border-t border-stone-100">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-sm" />
                                            ))}
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;
