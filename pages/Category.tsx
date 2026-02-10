import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { productService } from '../services/productService';
import { Product, SortOption } from '../types';
import { CATEGORIES } from '../constants';
import { SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 12;

export const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [filterCategory, setFilterCategory] = useState<string>(slug === 'all' ? 'all' : slug || 'all');
  const [currentPage, setCurrentPage] = useState(1);

  // Initial fetch
  useEffect(() => {
    setLoading(true);
    productService.getAllProducts().then((data) => {
      setAllProducts(data);
      setLoading(false);
    });
  }, []);

  // Update local filter state when URL slug changes
  useEffect(() => {
    if (slug) {
      setFilterCategory(slug);
      setCurrentPage(1); // Reset to page 1 on category change
    }
  }, [slug]);

  // Filtering and Sorting Logic
  useEffect(() => {
    let filtered = [...allProducts];

    // Filter by Category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(p => p.category === filterCategory);
    }

    // Sort
    if (sortBy === 'price-low-high') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high-low') filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === 'newest') filtered.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    // Popularity logic omitted for simplicity

    setDisplayProducts(filtered);
  }, [allProducts, filterCategory, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(displayProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = displayProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    navigate(`/category/${newCategory}`);
  };

  const getPageTitle = () => {
    if (filterCategory === 'all') return 'Shop All';
    const cat = CATEGORIES.find(c => c.slug === filterCategory);
    return cat ? cat.name : 'Shop';
  };

  const getPageDescription = () => {
    if (filterCategory === 'all') return 'Explore our complete collection of luxury items.';
    const cat = CATEGORIES.find(c => c.slug === filterCategory);
    return cat ? cat.description : '';
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-luxury-cream py-16 md:py-24 px-6 text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 capitalize">{getPageTitle()}</h1>
        <p className="text-gray-500 max-w-xl mx-auto">{getPageDescription()}</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-100 gap-6">
          
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-luxury-black">
               <SlidersHorizontal size={16} /> Filter:
            </div>
            
            {/* Category Filter */}
            <div className="relative group">
              <select 
                value={filterCategory} 
                onChange={handleCategoryChange}
                className="appearance-none bg-transparent text-sm uppercase tracking-wider pr-8 cursor-pointer focus:outline-none text-gray-500 hover:text-black transition-colors"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.slug}>{c.name}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
            </div>

            <span className="text-gray-300 hidden md:inline">|</span>
            <span className="text-sm text-gray-500">{displayProducts.length} Products</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 uppercase tracking-widest hidden md:inline">Sort By:</span>
            <div className="relative group">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-transparent text-sm uppercase tracking-wider pr-8 cursor-pointer focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="popularity">Popularity</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
               <div key={n} className="animate-pulse">
                 <div className="bg-gray-200 aspect-[3/4] mb-4"></div>
                 <div className="h-4 bg-gray-200 w-2/3 mx-auto mb-2"></div>
                 <div className="h-3 bg-gray-200 w-1/3 mx-auto"></div>
               </div>
             ))}
          </div>
        ) : paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {paginatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 min-h-[400px] flex items-center justify-center">
            <p className="text-gray-500 font-serif text-lg">No products found matching your selection.</p>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center space-x-4">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 border border-gray-200 hover:border-black disabled:opacity-30 disabled:hover:border-gray-200 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                 <button
                   key={page}
                   onClick={() => setCurrentPage(page)}
                   className={`w-8 h-8 flex items-center justify-center text-sm transition-colors ${
                     currentPage === page 
                       ? 'bg-black text-white border border-black' 
                       : 'border border-gray-200 hover:border-black text-gray-600'
                   }`}
                 >
                   {page}
                 </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-200 hover:border-black disabled:opacity-30 disabled:hover:border-gray-200 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};