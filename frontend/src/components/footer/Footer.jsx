import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaPinterestP,
  FaApple
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  shop: [
    { name: 'Food & Treats', path: '/shop' },
    { name: 'Toys & Play', path: '/shop' },
    { name: 'Beds & Comfort', path: '/shop' },
    { name: 'Grooming', path: '/shop' },
    { name: 'Accessories', path: '/shop' },
  ],
  customerService: [
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Return & Exchange', path: '/returns' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Track Order', path: '/track-order' },
  ],
  aboutUs: [
    { name: 'Our Story', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Affiliates', path: '/affiliates' },
    { name: 'Partner with Us', path: '/partners' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#FAF7F2] border-t border-stone-200/60 overflow-hidden">
      
      {/* Decorative Large Paw Watermark (Bottom Right) */}
      <div 
        aria-hidden="true" 
        className="absolute right-0 bottom-0 pointer-events-none opacity-20 text-[#D9D0C1] translate-x-12 translate-y-12 sm:translate-x-16 sm:translate-y-16"
      >
        <svg width="280" height="280" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="8" cy="8.5" r="2.2" />
          <circle cx="16" cy="8.5" r="2.2" />
          <circle cx="4.5" cy="13.5" r="2" />
          <circle cx="19.5" cy="13.5" r="2" />
          <path d="M12 13.5c-3.2 0-5.8 2.2-5.8 5 0 1.8 1.8 3 5.8 3s5.8-1.2 5.8-3c0-2.8-2.6-5-5.8-5z" />
        </svg>
      </div>

      <div className="container relative z-10 pt-12 sm:pt-16 pb-10 sm:pb-12">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start gap-3 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block transition-transform duration-200 hover:scale-[1.02]">
              <img 
                src="/images/logos/logo.webp" 
                alt="Meowy" 
                className="h-9 sm:h-10 w-auto object-contain -ml-1.5"
              />
            </Link>
            
            <p className="text-gray-500 text-xs sm:text-sm">
              For Happier, Healthier Pets
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3.5 mt-2 text-gray-700">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="hover:text-[#3E592E] transition-colors"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="hover:text-[#3E592E] transition-colors"
              >
                <FaInstagram className="text-base" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="hover:text-[#3E592E] transition-colors"
              >
                <FaYoutube className="text-base" />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Pinterest"
                className="hover:text-[#3E592E] transition-colors"
              >
                <FaPinterestP className="text-sm" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="X (Twitter)"
                className="hover:text-[#3E592E] transition-colors"
              >
                <FaXTwitter className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">
              Shop
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#3E592E] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">
              Customer Service
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.customerService.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#3E592E] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">
              About Us
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#3E592E] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: We Accept */}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">
              We Accept
            </h4>
            
            {/* Payment Method Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Visa Badge */}
              <div 
                className="h-7 px-2.5 bg-white border border-stone-200/90 rounded-md flex items-center justify-center shadow-2xs"
                title="Visa"
              >
                <span className="font-extrabold text-[#1A1F71] text-xs italic tracking-wider">
                  VISA
                </span>
              </div>

              {/* Mastercard Badge */}
              <div 
                className="h-7 px-2.5 bg-white border border-stone-200/90 rounded-md flex items-center justify-center shadow-2xs"
                title="Mastercard"
              >
                <div className="flex items-center -space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#EB001B] inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#F79E1B]/95 inline-block" />
                </div>
              </div>

              {/* PayPal Badge */}
              <div 
                className="h-7 px-2.5 bg-white border border-stone-200/90 rounded-md flex items-center justify-center shadow-2xs"
                title="PayPal"
              >
                <span className="font-bold text-[#003087] text-xs italic">
                  <span className="text-[#0079C1]">Pay</span>Pal
                </span>
              </div>

              {/* Apple Pay Badge */}
              <div 
                className="h-7 px-2.5 bg-white border border-stone-200/90 rounded-md flex items-center justify-center gap-1 shadow-2xs"
                title="Apple Pay"
              >
                <FaApple className="text-black text-xs" />
                <span className="font-semibold text-black text-[11px] leading-none">
                  Pay
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Copyright & Legal Links Bar */}
      <div className="w-full border-t border-stone-200/70 relative z-10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Meowy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#3E592E] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-stone-300">|</span>
            <Link to="/terms" className="hover:text-[#3E592E] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
