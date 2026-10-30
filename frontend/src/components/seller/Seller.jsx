import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import defaultProducts from '../../data/Products';

import 'swiper/css';
import 'swiper/css/navigation';

const Seller = ({ products = [] }) => {
  const swiperRef = useRef(null);

  // Fallback to default products if not provided, and take only the first 10 products
  const productList = products && products.length > 0 ? products : defaultProducts;
  const displayProducts = productList.slice(0, 10);

  return (
    <section className="w-full pb-12 sm:pb-16 md:pb-20 bg-[#faf7f2]">
      <div className="container">
        {/* Section Header with Title & Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h5 className="tracking-[3px] font-semibold text-[#3E592E] uppercase text-xs sm:text-sm">
              Top Selection
            </h5>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight my-2">
              Best Sellers
            </h2>
            <p className='text-gray-600 text-sm'>
              Loved by pets, Approved by parents
            </p>
          </div>

          {/* Navigation Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 hover:border-[#3E592E] bg-white hover:bg-[#3E592E] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group"
              aria-label="Previous Products"
            >
              <HiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 hover:border-[#3E592E] bg-white hover:bg-[#3E592E] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group"
              aria-label="Next Products"
            >
              <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* 5-Column Responsive Product Slider (10 Products Total) */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            slidesPerView={1.3}
            grabCursor={true}
            loop={true}
            breakpoints={{
              440: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5, // 5 columns on desktop (grid-cols-5 equivalent)
                spaceBetween: 24,
              },
            }}
            className="pb-4"
          >
            {displayProducts.map((product, index) => (
              <SwiperSlide key={product.id || index} className="h-auto">
                <div className="h-full flex flex-col justify-between bg-white rounded-2xl p-4 border border-stone-200/60 transition-all duration-300 group cursor-pointer">
                  {/* Product Image with Overlaid Top Badge & Wishlist */}
                  <div className="relative w-full aspect-square flex items-center justify-center mb-2 overflow-hidden rounded-lg">
                    {/* Top Badge & Wishlist on the image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-auto">
                      <span className="text-[11px] sm:text-xs font-medium text-gray-700 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs border border-gray-200/60">
                        {product.category}
                      </span>
                      <button
                        type="button"
                        className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs hover:bg-white text-gray-400 hover:text-red-500 shadow-xs border border-gray-200/50 flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Add to wishlist"
                      >
                        <FaRegHeart className="text-sm" />
                      </button>
                    </div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-108 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="mt-2 flex flex-col gap-1.5">
                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-1.5 text-xs text-amber-500">
                        <FaStar className="text-xs" />
                        <span className="font-semibold text-gray-800">{product.rating}</span>
                        {product.reviews && (
                          <span className="text-gray-400">({product.reviews})</span>
                        )}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1 group-hover:text-[#3E592E] transition-colors">
                      {product.name}
                    </h3>

                    {/* Price & Add to Cart Action */}
                    <div className="flex flex-col items-start justify-between mt-2 pt-2 border-t border-stone-200/60">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ${product.oldPrice}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        className="py-2 mt-3 w-full rounded-full bg-[#3E592E] uppercase text-sm text-white flex items-center justify-center hover:bg-[#2e4222] transition-colors shadow-xs cursor-pointer"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        Add To Cart <IoCartOutline className='ml-2 text-lg' />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Seller;
