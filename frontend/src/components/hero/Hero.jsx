import { Link } from 'react-router-dom';
import { IoPawOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  const info = [
    {
      id: 1,
      icon: <IoPawOutline />,
      title: 'Premium Quality',
      subTitle: 'Products'
    },
    {
      id: 2,
      icon: <BsTruck />,
      title: 'Fast & Flexible',
      subTitle: 'Shipping'
    },
    {
      id: 3,
      icon: <FaRegHeart />,
      title: 'Happy Pets',
      subTitle: 'Guarantee'
    },
  ];

  return (
    <section className='relative w-full min-h-[560px] sm:min-h-[620px] lg:h-[88vh] xl:h-[80vh] max-h-[850px] bg-[url("/images/hero/banner-1.webp")] bg-cover bg-[position:75%_center] sm:bg-center overflow-hidden flex items-center'>
      {/* Subtle Gradient Overlay for Text Legibility without hiding the pets */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/85 to-transparent sm:from-white/70 sm:via-white/50 md:from-white/90 md:via-white/0 md:to-transparent pointer-events-none" />

      <div className='container relative z-10 py-10 sm:py-14 lg:py-0'>
        <div className='w-full sm:w-[85%] md:w-[65%] lg:w-[50%] flex flex-col items-start justify-center gap-5 sm:gap-8 lg:gap-10'>
          
          {/* Main Headline */}
          <h1 className='text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#3E592E] leading-[1.18] sm:leading-[1.12] tracking-tight'>
            Because <br />
            They Deserve <br />
            the Best
          </h1>

          {/* Subtitle Description */}
          <p className='text-sm sm:text-base md:text-lg text-gray-700 max-w-md leading-relaxed'>
            Premium pet food, toys, accessories, and more for a healthier, happier life.
          </p>

          {/* Call-to-action Button */}
          <Link
            to="/shop"
            className='inline-flex items-center gap-2.5 bg-[#3E592E] text-white py-2.5 px-6 sm:py-3 sm:px-8 rounded-full font-semibold border-2 border-[#3E592E] hover:bg-white hover:text-[#3E592E] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group text-sm sm:text-base'
          >
            <span>Shop More</span>
            <HiArrowRight className='text-lg transition-transform duration-300 group-hover:translate-x-1' />
          </Link>

          {/* Value Propositions / Badges */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-3 sm:pt-4 border-t border-gray-300/60 w-full max-w-lg'>
            {info.map((item) => (
              <div key={item.id} className='flex items-center gap-3 group'>
                <div className='text-2xl sm:text-3xl md:text-4xl text-[#3E592E] shrink-0 transition-transform duration-300 group-hover:scale-110'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-xs sm:text-sm font-bold text-gray-800 leading-tight'>{item.title}</h3>
                  <h4 className='text-[11px] sm:text-xs text-gray-600'>{item.subTitle}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
