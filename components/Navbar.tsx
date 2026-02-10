import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../constants';
import { SearchModal } from './SearchModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  // Define routes that have a dark hero section where the nav should be transparent/white text initially
  const isDarkHeroRoute = location.pathname === '/' || location.pathname === '/journal';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine styles based on state
  const isTransparent = isDarkHeroRoute && !isScrolled && !isMobileMenuOpen;
  
  const headerBgClass = isTransparent 
    ? 'bg-transparent' 
    : 'bg-white shadow-sm';
    
  const textColorClass = isTransparent 
    ? 'text-white' 
    : 'text-luxury-black';

  // Brighter hover color for large screens
  const hoverColorClass = "hover:text-[#eebb00]";

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${headerBgClass} ${textColorClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
          
          {/* Left Section: Mobile Menu & Nav Links */}
          <div className="flex items-center justify-start">
            {/* Mobile Menu Button - Visible on screens smaller than lg */}
            <button 
              className="lg:hidden p-2 -ml-2 hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/category/all"
                className={`text-xs uppercase tracking-[0.15em] ${hoverColorClass} transition-colors font-medium`}
              >
                Shop All
              </Link>
              <Link 
                to="/journal"
                className={`text-xs uppercase tracking-[0.15em] ${hoverColorClass} transition-colors font-medium`}
              >
                Journal
              </Link>
              <Link 
                to="/about"
                className={`text-xs uppercase tracking-[0.15em] ${hoverColorClass} transition-colors font-medium`}
              >
                About
              </Link>
            </nav>
          </div>

          {/* Center Section: Logo */}
          <div className="flex justify-center">
            <Link to="/" className="font-serif text-3xl tracking-wide font-bold italic hover:opacity-80 transition-opacity whitespace-nowrap">
              ELEVEN
            </Link>
          </div>

          {/* Right Section: Actions */}
          <div className="flex items-center justify-end space-x-6">
            <button 
              className={`hidden sm:block ${hoverColorClass} transition-colors`}
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link to="/account" className={`hidden sm:block ${hoverColorClass} transition-colors`}>
              <User size={20} strokeWidth={1.5} />
            </Link>
            <button 
              className={`relative ${hoverColorClass} transition-colors`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxury-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white text-luxury-black border-t h-[calc(100vh-80px)] overflow-y-auto animate-fade-in">
            <div className="flex flex-col p-8 space-y-6">
              <button 
                onClick={() => { setIsSearchOpen(true); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-2 text-lg font-serif mb-4"
              >
                <Search size={20} /> Search
              </button>
              
              <Link to="/category/all" className="text-lg uppercase tracking-widest font-serif border-b border-gray-100 pb-2">Shop All</Link>
              <Link to="/journal" className="text-lg uppercase tracking-widest font-serif border-b border-gray-100 pb-2">Journal</Link>
              <Link to="/about" className="text-lg uppercase tracking-widest font-serif border-b border-gray-100 pb-2">About</Link>
              
              <div className="pt-2 space-y-4">
                <span className="text-xs text-gray-400 uppercase tracking-widest block mb-4">Categories</span>
                {CATEGORIES.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/category/${cat.slug}`}
                    className="block text-lg font-serif hover:text-luxury-gold transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-gray-100 my-4"></div>
              <Link to="/account" className="text-sm text-gray-500">Account</Link>
            </div>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};