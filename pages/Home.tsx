import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { productService } from '../services/productService';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { ArrowRight, ArrowLeft, Truck, RefreshCw, ShieldCheck } from 'lucide-react';

const MOODBOARD_IMAGES = [
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1287&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1288&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1312&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1026&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1286&auto=format&fit=crop"
];

export const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    productService.getFeaturedProducts().then(setFeaturedProducts);
    
    // Ensure video plays
    if (videoRef.current) {
      // Setting muted property directly is sometimes required for React to handle autoplay correctly on certain browsers
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => {
          console.log("Autoplay prevented:", e);
        });
      }
    }
  }, []);

  const scrollMoodboard = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjusted for new card size
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="-mt-20">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg"
            className="w-full h-full object-cover"
          >
            <source src="https://www.pexels.com/download/video/6649430/" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl space-y-6 text-white animate-fade-in-up">
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-4 text-gray-200 font-sans">Spring Summer 2024</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight italic">
              Elegance in <br/><span className="not-italic">Motion</span>
            </h1>
            <div className="pt-8">
              <Link to="/category/ready-to-wear">
                <Button variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-black transition-all duration-500">
                  Discover Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold uppercase tracking-widest text-2xl md:text-3xl mb-4 text-luxury-black">Shop by Category</h2>
          <div className="w-12 h-0.5 bg-luxury-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/category/${cat.slug}`} className="group relative h-[400px] overflow-hidden block">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-2xl font-serif mb-2">{cat.name}</h3>
                <span className="text-xs uppercase tracking-widest border-b border-transparent group-hover:border-white transition-all pb-1 flex items-center gap-2">
                  Explore <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Aesthetic Campaign Section */}
      <section className="relative h-[85vh] w-full my-12 overflow-hidden">
        <img 
           src="https://images.unsplash.com/photo-1654707634812-3ce01a6258f9?q=80&w=1060" 
           alt="Campaign"
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] hover:scale-110 ease-linear"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-12 left-6 md:bottom-24 md:left-24 text-white max-w-xl animate-fade-in-up">
           <h2 className="text-xs md:text-sm font-bold font-sans uppercase tracking-[0.4em] mb-4">The Campaign</h2>
           <h3 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Shadows & <br/>Silhouette</h3>
           <p className="text-lg font-light mb-8 max-w-md leading-relaxed text-gray-100">Exploring the duality of light and texture in our latest edit. Pieces designed to move with you.</p>
           <Link to="/category/ready-to-wear">
             <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">View Lookbook</Button>
           </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-sans font-bold uppercase tracking-widest text-2xl md:text-3xl mb-2 text-luxury-black">New Arrivals</h2>
              <p className="text-gray-500 font-sans">Curated pieces for the season.</p>
            </div>
            <Link to="/category/ready-to-wear" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/category/ready-to-wear">
              <Button variant="secondary" className="min-w-[200px]">View All</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Curated Moodboard Section (Updated) */}
      <section className="h-[80vh] min-h-[600px] bg-luxury-black text-white relative overflow-hidden flex flex-col justify-center">
        <div className="pl-6 md:pl-12 lg:pl-24 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 pr-6 md:pr-12 lg:pr-24">
            <div>
              <h2 className="font-sans font-bold uppercase tracking-widest text-3xl md:text-4xl mb-4">Curated Life</h2>
              <p className="text-gray-400 max-w-lg text-sm md:text-base">A glimpse into the Eleven universe. Where form meets function in perfect harmony.</p>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
               <button 
                onClick={() => scrollMoodboard('left')}
                className="p-3 border border-gray-700 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Scroll left"
               >
                 <ArrowLeft size={20} />
               </button>
               <button 
                onClick={() => scrollMoodboard('right')}
                className="p-3 border border-gray-700 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Scroll right"
               >
                 <ArrowRight size={20} />
               </button>
            </div>
          </div>
          
          {/* Horizontal Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar items-center"
            style={{ scrollBehavior: 'smooth' }}
          >
             {MOODBOARD_IMAGES.map((src, index) => (
                <div 
                  key={index} 
                  className="h-[50vh] aspect-[3/4] relative group overflow-hidden snap-center flex-shrink-0"
                >
                   <img 
                    src={src} 
                    alt={`Mood ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
             ))}
             {/* Spacer for right padding visual */}
             <div className="w-6 flex-shrink-0"></div>
          </div>
        </div>
      </section>

      {/* Journal Section (Updated) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="font-sans font-bold uppercase tracking-widest text-2xl md:text-3xl mb-4 text-luxury-black">The Journal</h2>
              <p className="text-gray-500 font-light">Stories, interviews, and inspirations.</p>
            </div>
            <Link to="/journal" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors">
              Read All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Article 1 */}
            <Link to="/journal" className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fashion Week" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-luxury-gold">Fashion Week</span>
                <h3 className="font-serif text-xl leading-tight group-hover:text-gray-600 transition-colors">Highlights from Milan Fashion Week 2024</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  Exploring the trends that defined this season, from oversized tailoring to the return of minimalism.
                </p>
                <span className="inline-block text-xs uppercase tracking-wider border-b border-black pb-1 mt-2">Read Article</span>
              </div>
            </Link>

            {/* Article 2 */}
            <Link to="/journal" className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2059&auto=format&fit=crop" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-luxury-gold">Craftsmanship</span>
                <h3 className="font-serif text-xl leading-tight group-hover:text-gray-600 transition-colors">The Art of Leather Selection</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  A look inside our Tuscan tannery where we source the finest calfskin for our signature handbags.
                </p>
                <span className="inline-block text-xs uppercase tracking-wider border-b border-black pb-1 mt-2">Read Article</span>
              </div>
            </Link>

            {/* Article 3 */}
            <Link to="/journal" className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Style Guide" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-luxury-gold">Style Guide</span>
                <h3 className="font-serif text-xl leading-tight group-hover:text-gray-600 transition-colors">5 Essentials for the Modern Wardrobe</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  Building a capsule wardrobe that transitions effortlessly from day to night, featuring our best sellers.
                </p>
                <span className="inline-block text-xs uppercase tracking-wider border-b border-black pb-1 mt-2">Read Article</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-luxury-cream pb-24 border-t border-gray-100 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 px-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-white text-luxury-black mb-4 shadow-sm">
                <ShieldCheck size={24} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-xl">The Luxury Promise</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Authenticity guaranteed. Each piece is hand-inspected for quality and craftsmanship before shipping.
              </p>
            </div>
            <div className="space-y-4 px-4 border-l-0 md:border-l border-gray-200">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-white text-luxury-black mb-4 shadow-sm">
                <Truck size={24} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-xl">Global Shipping</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Complimentary express shipping on all orders over $500. We ship to over 80 countries worldwide.
              </p>
            </div>
            <div className="space-y-4 px-4 border-l-0 md:border-l border-gray-200">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-white text-luxury-black mb-4 shadow-sm">
                <RefreshCw size={24} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-xl">Easy Returns</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Not perfectly satisfied? Return or exchange your items within 30 days, hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};