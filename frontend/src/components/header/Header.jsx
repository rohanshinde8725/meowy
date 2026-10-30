import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Pages', path: '/pages' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close dropdowns on 'Escape' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all">
        <div className="container flex items-center justify-between py-3.5 sm:py-4 lg:py-5">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <div className="h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-48 transition-transform duration-200 hover:scale-[1.02]">
              <img
                className="h-full w-full object-contain"
                src="/images/logos/logo.webp"
                alt="Meowy Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation (visible on screens >= lg 1024px) */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10 2xl:gap-14 uppercase font-semibold text-sm xl:text-[16px] tracking-wide text-gray-800">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`relative py-1 transition-colors duration-200 hover:text-[#3E592E] group ${
                        isActive ? 'text-[#3E592E]' : ''
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#3E592E] transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Actions: Icons & Hamburger Button */}
          <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5 text-gray-700">
            {/* Search Toggle */}
            <button
              type="button"
              aria-label="Toggle Search"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100 hover:text-[#3E592E] transition-colors cursor-pointer"
            >
              <FaSearch className="text-base sm:text-lg" />
            </button>

            {/* Wishlist Icon (hidden on small mobile screens to prevent crowding) */}
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:flex p-2 rounded-full hover:bg-gray-100 hover:text-[#3E592E] transition-colors"
            >
              <FaRegHeart className="text-base sm:text-lg" />
            </Link>

            {/* User Profile Icon (hidden on smaller screens, accessible in mobile menu) */}
            <Link
              to="/account"
              aria-label="Account Profile"
              className="hidden md:flex p-2 rounded-full hover:bg-gray-100 hover:text-[#3E592E] transition-colors"
            >
              <FaRegUser className="text-base sm:text-lg" />
            </Link>

            {/* Cart Icon */}
            <Link
              to="/cart"
              aria-label="Shopping Cart"
              className="relative p-2 rounded-full hover:bg-gray-100 hover:text-[#3E592E] transition-colors"
            >
              <IoCartOutline className="text-2xl sm:text-[26px]" />
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 sm:w-4.5 sm:h-4.5 text-[10px] font-bold text-white bg-[#3E592E] rounded-full ring-2 ring-white">
                0
              </span>
            </Link>

            {/* Mobile Hamburger Toggle Button (< lg) */}
            <button
              type="button"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-gray-800 hover:bg-gray-100 hover:text-[#3E592E] transition-colors cursor-pointer"
            >
              <IoMenuOutline className="text-2xl sm:text-3xl" />
            </button>
          </div>
        </div>

        {/* Expandable Desktop / Tablet Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-100 bg-gray-50/80 py-3 px-4 shadow-inner animate-fadeIn">
            <div className="container max-w-2xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, brands, or categories..."
                  autoFocus
                  className="w-full py-2.5 pl-10 pr-24 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#3E592E] focus:ring-1 focus:ring-[#3E592E] transition-all shadow-xs"
                />
                <FaSearch className="absolute left-3.5 text-gray-400 text-sm" />
                <button
                  type="submit"
                  className="absolute right-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-[#3E592E] hover:bg-[#2d4221] rounded-full transition-colors cursor-pointer"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Backdrop Overlay (rendered outside <header> to avoid backdrop-filter containing block bug) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Off-Canvas Sidebar (rendered outside <header> to span full viewport height) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 h-screen h-[100dvh] w-[85%] max-w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="h-9 w-28 flex items-center">
            <img
              className="h-full w-full object-contain"
              src="/images/logos/logo.webp"
              alt="Meowy"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <IoCloseOutline className="text-2xl" />
          </button>
        </div>

        {/* Drawer Search Input */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 shrink-0">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full py-2 pl-9 pr-3 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#3E592E]"
            />
            <FaSearch className="absolute left-3 text-gray-400 text-xs" />
          </form>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <ul className="space-y-1">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm uppercase font-semibold tracking-wider transition-colors ${
                      isActive
                        ? 'bg-[#3E592E]/10 text-[#3E592E]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#3E592E]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-300">›</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Bottom Quick Actions */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/60 space-y-2 shrink-0">
          <Link
            to="/wishlist"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-[#3E592E] transition-colors"
          >
            <FaRegHeart className="text-base text-gray-500" />
            <span className="font-medium">My Wishlist</span>
          </Link>
          <Link
            to="/account"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-[#3E592E] transition-colors"
          >
            <FaRegUser className="text-base text-gray-500" />
            <span className="font-medium">My Account</span>
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-[#3E592E] transition-colors"
          >
            <div className="flex items-center gap-3">
              <IoCartOutline className="text-lg text-gray-500" />
              <span className="font-medium">Shopping Cart</span>
            </div>
            <span className="bg-[#3E592E] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              0
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Header;