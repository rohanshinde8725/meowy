import { HiArrowRight } from "react-icons/hi";

const Category = () => {
    const categories = [
        {
            id: 1,
            img: '/images/category/cat.jpg',
            title: 'Cats',
        },
        {
            id: 2,
            img: '/images/category/dog.jpg',
            title: 'Dogs',
        },
        {
            id: 3,
            img: '/images/category/bird.jpg',
            title: 'Birds',
        },
        {
            id: 4,
            img: '/images/category/fish.jpg',
            title: 'Fish',
        },
        {
            id: 5,
            img: '/images/category/rabbit.jpg',
            title: 'Small Pets',
        },
        {
            id: 6,
            img: '/images/category/turtle.jpg',
            title: 'Reptiles',
        },
        {
            id: 7,
            img: '/images/category/accessories.jpg',
            title: 'Grooming',
        },
        {
            id: 8,
            img: '/images/category/toys.jpg',
            title: 'Toys',
        },
    ];

    return (
        <section className='w-full py-10 sm:py-14 md:py-16 lg:py-20 bg-[#faf7f2]'>
            <div className='container'>
                {/* Section Header */}
                <div className='text-center max-w-xl mx-auto mb-8 sm:mb-12'>
                    <h5 className='tracking-[3px] font-semibold text-[#3E592E] uppercase text-xs sm:text-sm mb-2'>
                        Shop By Category
                    </h5>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight'>
                        Find Everything Your Pet Needs
                    </h2>
                </div>

                {/* Categories Grid (2 cols on small mobile, 4 cols on tablet, 8 cols on desktop) */}
                <div className='grid grid-cols-2 min-[440px]:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-3 xl:gap-5'>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className='flex flex-col items-center justify-center group cursor-pointer'
                        >
                            <div className='rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-20 lg:h-20 xl:w-28 xl:h-28 2xl:w-35 2xl:h-35 aspect-square relative overflow-hidden bg-gray-50 border border-gray-100 shadow-xs group-hover:shadow-md group-hover:border-[#3E592E]/30 transition-all duration-300'>
                                <img
                                    className='h-full w-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500 ease-out'
                                    src={category.img}
                                    alt={category.title}
                                    loading="lazy"
                                />
                            </div>
                            <h3 className='mt-2.5 sm:mt-3 text-center text-xs sm:text-sm md:text-base font-medium text-gray-800 group-hover:text-[#3E592E] transition-colors duration-300'>
                                {category.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Promotional Dual Banners */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16'>
                    {/* Dog Food Banner */}
                    <div className="relative overflow-hidden rounded-2xl bg-[url('/images/category/dog-banner.jpg')] bg-cover bg-[position:80%_center] sm:bg-center min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[340px] xl:min-h-[380px] flex items-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        {/* Gradient overlay on mobile to guarantee text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#21371e]/90 via-[#21371e]/80 to-transparent sm:via-[#21371e]/50 sm:to-transparent lg:via-[#21371e]/20 pointer-events-none" />

                        <div className='relative z-10 w-full sm:w-[75%] md:w-[65%] lg:w-[75%] xl:w-[65%] p-6 sm:p-8 md:p-10 lg:p-8 xl:p-12 flex flex-col items-start justify-center gap-3 sm:gap-4 md:gap-5 text-white'>
                            <h5 className='tracking-[2px] sm:tracking-[3px] uppercase text-[10px] sm:text-xs'>
                                <span className='border py-1 px-3 sm:py-1.5 sm:px-4 rounded-full bg-[#ffe0202b] border-yellow-300 font-semibold'>
                                    Best Seller
                                </span>
                            </h5>
                            <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-tight'>
                                Premium <br /> Dog Food
                            </h3>
                            <p className='text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-xs'>
                                Complete nutrition for <br className='hidden sm:inline' /> a healthier, stronger dog.
                            </p>
                            <div className='pt-1 sm:pt-2'>
                                <button className='inline-flex items-center gap-2 text-xs sm:text-sm uppercase text-[#3E592E] py-2 px-5 sm:py-2.5 sm:px-6 bg-white rounded-md font-semibold hover:text-white hover:bg-[#3E592E] border-2 border-white hover:border-[#3E592E] transition-all duration-300 cursor-pointer shadow-sm group'>
                                    <span>Shop Dog Food</span>
                                    <HiArrowRight className='text-base transition-transform duration-300 group-hover:translate-x-1' />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Cat Accessories Banner */}
                    <div className="relative overflow-hidden rounded-2xl bg-[url('/images/category/cat-banner.jpg')] bg-cover bg-[position:80%_center] sm:bg-center min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[340px] xl:min-h-[380px] flex items-center shadow-sm hover:shadow-md transition-shadow duration-300">
                        {/* Gradient overlay on mobile to guarantee text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf4ee]/60 via-[#fbf4ee]/55 to-transparent sm:via-[#fbf4ee]/30 sm:to-transparent lg:via-[#fbf4ee]/10 pointer-events-none" />

                        <div className='relative z-10 w-full sm:w-[75%] md:w-[65%] lg:w-[75%] xl:w-[65%] p-6 sm:p-8 md:p-10 lg:p-8 xl:p-12 flex flex-col items-start justify-center gap-3 sm:gap-4 md:gap-5 text-gray-900'>
                            <h5 className='tracking-[2px] sm:tracking-[3px] uppercase text-[10px] sm:text-xs'>
                                <span className='border py-1 px-3 sm:py-1.5 sm:px-4 rounded-full bg-[#ff690033] border-[#ff6900] text-[#c95100] font-semibold'>
                                    Up To 30% Off
                                </span>
                            </h5>
                            <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-tight'>
                                Stylish Accessories <br /> For Happy Pets
                            </h3>
                            <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-xs'>
                                From cozy beds to fun toys, <br className='hidden sm:inline' /> make every moment special.
                            </p>
                            <div className='pt-1 sm:pt-2'>
                                <button className='inline-flex items-center gap-2 text-xs sm:text-sm uppercase text-white py-2 px-5 sm:py-2.5 sm:px-6 bg-[#3E592E] rounded-md font-semibold hover:bg-white hover:text-[#3E592E] border-2 border-[#3E592E] transition-all duration-300 cursor-pointer shadow-sm group'>
                                    <span>Shop Accessories</span>
                                    <HiArrowRight className='text-base transition-transform duration-300 group-hover:translate-x-1' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
