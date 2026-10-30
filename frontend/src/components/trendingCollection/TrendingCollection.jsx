const TrendingCollection = () => {
    const collection = [
        {
            id: 1,
            img: '/images/collection/dog-food.jpg',
            head: 'Food & Treats',
            subHead: 'Healthy bites, happy tales',
        },
        {
            id: 2,
            img: '/images/collection/pet-toys.jpg',
            head: 'Toys & Play',
            subHead: 'More fun, more love',
        },
        {
            id: 3,
            img: '/images/collection/cat-bed.jpg',
            head: 'Beds & Comfort',
            subHead: 'Cozy spaces for better rest',
        },
        {
            id: 4,
            img: '/images/collection/pet-grooming.jpg',
            head: 'Grooming',
            subHead: 'Clean pets, happy pets',
        },
    ];

    return (
        <section className="w-full pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#faf7f2]">
            <div className='container'>
                <div className='mb-8 sm:mb-12'>
                    <h5 className="tracking-[3px] font-semibold text-[#3E592E] uppercase text-xs sm:text-sm">
                        Trending Collection
                    </h5>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight my-2">
                        Shop Our Popular Collections
                    </h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
                    {collection.map((item) => (
                        <div
                            key={item.id}
                            className='bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 border border-stone-200/60 flex flex-col group cursor-pointer'
                        >
                            <div className='w-full h-44 sm:h-48 overflow-hidden relative bg-stone-100'>
                                <img 
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out' 
                                    src={item.img} 
                                    alt={item.head} 
                                    loading="lazy"
                                />
                            </div>
                            <div className='py-4 px-5 flex flex-col flex-1 justify-center'>
                                <h3 className='font-semibold text-base sm:text-lg text-[#3E592E] group-hover:text-[#2d4221] transition-colors'>
                                    {item.head}
                                </h3>
                                <p className='text-gray-500 text-xs sm:text-sm mt-0.5'>
                                    {item.subHead}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingCollection;
