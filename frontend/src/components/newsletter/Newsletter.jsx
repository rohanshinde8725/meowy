import { useState } from 'react';
import { HiArrowRight } from "react-icons/hi";

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubmitted(true);
            setEmail('');
            setTimeout(() => setIsSubmitted(false), 4000);
        }
    };

    return (
        <section className="w-full pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#faf7f2]">
            <div className="container">
                
                {/* Banner Container */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[url('/images/newsletter/newsletter-banner.jpg')] bg-cover bg-[position:left_center] shadow-sm">
                    
                    {/* Gradient Overlay for Mobile Legibility */}
                    <div className="absolute inset-0 bg-[#1e3421]/90 sm:bg-gradient-to-r sm:from-[#1e3421]/40 sm:via-[#1e3421]/80 sm:to-[#1e3421] lg:bg-transparent pointer-events-none" />

                    {/* Content Inner Container */}
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:py-12 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
                        
                        {/* Empty spacer for the dog portrait on desktop */}
                        <div className="hidden lg:block lg:w-[22%] xl:w-[25%] shrink-0" aria-hidden="true" />

                        {/* Middle Text Column */}
                        <div className="flex-1 flex flex-col items-start gap-1.5 sm:gap-2 text-white max-w-xl">
                            <h5 className="tracking-[3px] font-semibold text-[#D2E2CE] uppercase text-xs sm:text-sm">
                                Join Our Newsletter
                            </h5>
                            <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-semibold text-white leading-tight">
                                Get Pet Care Tips & Exclusive Offers
                            </h2>
                            <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed mt-1">
                                Be the first to know about new products, special deals and pet care tips.
                            </p>
                        </div>

                        {/* Right Subscription Form Column */}
                        <div className="w-full lg:w-auto lg:min-w-[360px] xl:min-w-[420px] shrink-0">
                            {isSubmitted ? (
                                <div className="bg-white/95 backdrop-blur-xs text-[#2E4924] font-medium text-xs sm:text-sm py-3 px-6 rounded-full text-center shadow-md animate-fadeIn">
                                    ✓ Thank you for subscribing! Check your inbox soon.
                                </div>
                            ) : (
                                <form 
                                    onSubmit={handleSubmit}
                                    className="bg-white rounded-full p-1 sm:p-1.5 pl-3 sm:pl-5 flex items-center shadow-md w-full"
                                >
                                    <input 
                                        type="email" 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address" 
                                        className="bg-transparent text-gray-800 placeholder-gray-400 text-xs sm:text-sm outline-none w-full min-w-0 pr-1.5 sm:pr-2"
                                    />
                                    <button 
                                        type="submit" 
                                        className="bg-[#48633B] hover:bg-[#364d2b] text-white text-xs sm:text-sm font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center gap-1 sm:gap-1.5 transition-all duration-300 shrink-0 cursor-pointer shadow-xs group"
                                    >
                                        <span>Subscribe</span>
                                        <HiArrowRight className="text-xs sm:text-sm transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Subtle Paw Print Line-Art Doodle (Far Right) */}
                        <div className="hidden 2xl:block absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 text-white" aria-hidden="true">
                            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="8" cy="9" r="2" />
                                <circle cx="16" cy="9" r="2" />
                                <circle cx="5" cy="14" r="1.8" />
                                <circle cx="19" cy="14" r="1.8" />
                                <path d="M12 14c-3 0-5 2-5 4.5 0 1.5 1.5 2.5 5 2.5s5-1 5-2.5c0-2.5-2-4.5-5-4.5z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Newsletter;

