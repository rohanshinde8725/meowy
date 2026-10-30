import { Link } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";

const blogPosts = [
    {
        id: 1,
        image: "/images/blog/blog-1.jpg",
        category: "Nutrition",
        title: "Best Foods for a Healthy and Happy Dog",
        date: "May 12, 2025",
        slug: "best-foods-for-healthy-happy-dog",
    },
    {
        id: 2,
        image: "/images/blog/blog-2.jpg",
        category: "Training",
        title: "Simple Training Tips for Your Puppy",
        date: "May 8, 2025",
        slug: "simple-training-tips-for-puppy",
    },
    {
        id: 3,
        image: "/images/blog/blog-3.jpg",
        category: "Health",
        title: "Signs Your Cat Might Be Sick",
        date: "May 5, 2025",
        slug: "signs-your-cat-might-be-sick",
    },
    {
        id: 4,
        image: "/images/blog/blog-4.jpg",
        category: "Lifestyle",
        title: "Fun Outdoor Activities for Your Pet",
        date: "Apr 28, 2025",
        slug: "fun-outdoor-activities-for-your-pet",
    },
];

const Blog = () => {
    return (
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#faf7f2]">
            <div className="container">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
                    <div>
                        <h5 className="tracking-[3px] font-semibold text-[#3E592E] uppercase text-xs sm:text-sm mb-1.5">
                            From Our Blog
                        </h5>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                            Pet Care Tips & Guides
                        </h2>
                    </div>

                    <Link 
                        to="/blog" 
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#3E592E] transition-colors border-b border-gray-400 hover:border-[#3E592E] pb-0.5 w-fit group"
                    >
                        <span>View All Articles</span>
                        <HiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-xs transition-all duration-300 border border-stone-200/60 flex flex-col justify-between group cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="w-full h-44 sm:h-48 overflow-hidden relative bg-stone-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    loading="lazy"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                                <div>
                                    {/* Category Pill */}
                                    <span className="inline-block text-[11px] sm:text-xs font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full mb-3">
                                        {post.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#3E592E] transition-colors leading-snug line-clamp-2">
                                        {post.title}
                                    </h3>
                                </div>

                                {/* Footer (Date & Arrow) */}
                                <div className="flex items-center justify-between border-t border-stone-100 text-xs text-gray-500">
                                    <span>{post.date}</span>
                                    <span className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-[#3E592E] text-stone-600 group-hover:text-white flex items-center justify-center transition-colors">
                                        <HiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blog;

