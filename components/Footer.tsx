import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-wider">ELEVEN</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Refined luxury for the modern individual. Timeless designs, exceptional craftsmanship, and sustainable practices.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-gray-400">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/category/ready-to-wear" className="hover:text-white transition-colors">Ready to Wear</Link></li>
              <li><Link to="/category/handbags" className="hover:text-white transition-colors">Handbags</Link></li>
              <li><Link to="/category/shoes" className="hover:text-white transition-colors">Shoes</Link></li>
              <li><Link to="/category/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-gray-400">Client Services</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/sizing" className="hover:text-white transition-colors">Sizing Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-gray-400">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex border-b border-gray-700 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full outline-none text-white placeholder-gray-600 text-sm"
              />
              <button type="button" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Eleven Luxury Fashion. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};