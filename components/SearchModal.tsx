import React, { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, ARTICLES } from '../constants';
import { Product, Article } from '../types';
import { useCurrency } from '../context/CurrencyContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus input after animation
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query) {
      setFilteredProducts([]);
      setFilteredArticles([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    const matchedProducts = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 4);

    const matchedArticles = ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(lowerQuery) ||
        a.category.toLowerCase().includes(lowerQuery) ||
        a.excerpt.toLowerCase().includes(lowerQuery)
    ).slice(0, 2);

    setFilteredProducts(matchedProducts);
    setFilteredArticles(matchedArticles);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-[25vh]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-white shadow-2xl animate-fade-in mx-4">
        <div className="relative">
          <div className="flex items-center p-6 border-b border-gray-100 gap-4">
            <SearchIcon className="text-gray-400 w-6 h-6" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products, stories, categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-lg md:text-xl font-serif outline-none placeholder-gray-400 text-luxury-black bg-gray-50 px-6 py-4 rounded-sm"
            />
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-6">
            {!query ? (
              <div className="text-center py-12 text-gray-400">
                <p className="uppercase tracking-widest text-xs mb-2">Start typing to search</p>
                <p className="font-serif italic text-lg opacity-60">Discover the collection</p>
              </div>
            ) : filteredProducts.length === 0 && filteredArticles.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p>No results found for "{query}".</p>
              </div>
            ) : (
              <div className="space-y-10">
                
                {/* Products Section */}
                {filteredProducts.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold">Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {filteredProducts.map((product) => (
                        <Link 
                          key={product.id} 
                          to={`/product/${product.id}`}
                          onClick={onClose}
                          className="flex gap-4 group"
                        >
                          <div className="w-20 h-24 bg-gray-100 shrink-0 overflow-hidden">
                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="font-serif text-lg leading-tight group-hover:text-luxury-gold-dark transition-colors">{product.name}</h4>
                            <p className="text-sm text-gray-500 mt-1">{formatPrice(product.price)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Articles Section */}
                {filteredArticles.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold">Journal</h3>
                    <div className="space-y-6">
                      {filteredArticles.map((article) => (
                        <Link 
                          key={article.id} 
                          to="/journal"
                          onClick={onClose}
                          className="flex gap-4 group items-center border-b border-gray-50 pb-4 last:border-0"
                        >
                          <div className="w-24 h-16 bg-gray-100 shrink-0 overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div>
                             <span className="text-[10px] uppercase tracking-widest text-luxury-gold">{article.category}</span>
                             <h4 className="font-serif text-lg group-hover:text-luxury-gold-dark transition-colors">{article.title}</h4>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-luxury-black transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {query && (
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
               <Link to={`/category/all`} onClick={onClose} className="text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:text-luxury-gold transition-colors">
                 View All Products <ArrowRight size={12} />
               </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};