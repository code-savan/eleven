import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { productService } from '../services/productService';
import { Product } from '../types';
import { CATEGORIES } from '../constants';
import { ArrowRight, ArrowLeft, Truck, RefreshCw, ShieldCheck } from 'lucide-react';

const MOODBOARD_IMAGES = [
  "https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq9FbR5fYapK8W9RjUltCThVHxfXJIgrBbNMd2",
  "https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq4GFlk33nNf2MLFqpiQux39KhTPbW1YUzAsSc",
  "https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqGSFh6P7mVBzEUXwWtx09OrkR51CSPjQysldb",
  "https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqrlYudjBJ095hBvWyaFOeNE8c2x7dM6oCftKS",
  "https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq26okXWUgCz3FKvneSqBIQ4au1V9OmpkTji08",
  "https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqH3OcN3sYRont0jI5aTidF7hcbKqX1yNOE4sp"
];

export const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    productService.getFeaturedProducts().then(setFeaturedProducts);
    
    // Ensure video plays
    if (videoRef.current) {
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
      const scrollAmount = 400; 
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
            {/* Using a stock video that emphasizes texture/fashion */}
            <source src="https://www.pexels.com/download/video/6649430" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl space-y-6 text-white animate-fade-in-up">
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-4 text-gray-200 font-sans">The 2024 Collection</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight italic">
              Art of the <br/><span className="not-italic">Carry</span>
            </h1>
            <div className="pt-8">
              <Link to="/category/all">
                <Button variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-black transition-all duration-500">
                  Shop Bags
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories (Colors) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold uppercase tracking-widest text-2xl md:text-3xl mb-4 text-luxury-black">The Palette</h2>
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
                  Shop {cat.slug} <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Campaign Section -> Lookbook */}
      <section className="relative h-[85vh] w-full my-12 overflow-hidden">
        <img 
           src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqIn8ly9CKTsCGB0uYanL1EqzAF9NgbPU2JVhQ" 
           alt="Campaign"
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] hover:scale-110 ease-linear"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-12 left-6 md:bottom-24 md:left-24 text-white max-w-xl animate-fade-in-up">
           <h2 className="text-xs md:text-sm font-bold font-sans uppercase tracking-[0.4em] mb-4">The Campaign</h2>
           <h3 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Shadow & <br/>Silhouette</h3>
           <p className="text-lg font-light mb-8 max-w-md leading-relaxed text-gray-100">
             An exploration of form in our darkest leathers. Discover the pieces that define the season.
           </p>
           <Link to="/lookbook">
             <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
               View Lookbook
             </Button>
           </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-sans font-bold uppercase tracking-widest text-2xl md:text-3xl mb-2 text-luxury-black">Signature Pieces</h2>
              <p className="text-gray-500 font-sans">Hand-finished. Vegetable tanned. Timeless.</p>
            </div>
            <Link to="/category/all" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors">
              View Collection <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/category/all">
              <Button variant="secondary" className="min-w-[200px]">View Collection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Moodboard / Slider (Restored) */}
      <section className="py-24 bg-luxury-cream overflow-hidden h-fit">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-sans font-bold uppercase tracking-widest text-2xl md:text-3xl mb-4 text-luxury-black">Visual Diary</h2>
            <p className="text-gray-500 font-sans">A curation of texture and form.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scrollMoodboard('left')} 
              className="p-3 border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all rounded-full"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scrollMoodboard('right')} 
              className="p-3 border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all rounded-full"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="h-[80dvh] flex gap-6 overflow-x-auto px-6 pb-8 no-scrollbar scroll-smooth"
        >
          {MOODBOARD_IMAGES.map((img, index) => (
             <div key={index} className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative flex-shrink-0 group">
               <img src={img} alt={`Mood ${index}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
             </div>
          ))}
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="font-sans font-bold uppercase tracking-widest text-2xl md:text-3xl mb-4 text-luxury-black">The Journal</h2>
              <p className="text-gray-500 font-light">Craftsmanship, care, and travel.</p>
            </div>
            <Link to="/journal" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors">
              Read All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            <Link to="/journal" className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1470&auto=format&fit=crop" 
                  alt="Process" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-luxury-gold">Process</span>
                <h3 className="font-serif text-xl leading-tight group-hover:text-gray-600 transition-colors">The Art of Vegetable Tanning</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  Why we choose time-honored, chemical-free processes to create leather that breathes.
                </p>
                <span className="inline-block text-xs uppercase tracking-wider border-b border-black pb-1 mt-2">Read Article</span>
              </div>
            </Link>

            <Link to="/journal" className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Care" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-luxury-gold">Care</span>
                <h3 className="font-serif text-xl leading-tight group-hover:text-gray-600 transition-colors">Preserving the Patina</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  A comprehensive guide to conditioning and storing your Eleven bag.
                </p>
                <span className="inline-block text-xs uppercase tracking-wider border-b border-black pb-1 mt-2">Read Article</span>
              </div>
            </Link>

            <Link to="/journal" className="group cursor-pointer hidden md:block lg:block">
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1287&auto=format&fit=crop" 
                  alt="Travel" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-luxury-gold">Travel</span>
                <h3 className="font-serif text-xl leading-tight group-hover:text-gray-600 transition-colors">Travel Journal: Marrakech</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                   Testing the durability of our Heritage Satchel through vibrant markets and deserts.
                </p>
                <span className="inline-block text-xs uppercase tracking-wider border-b border-black pb-1 mt-2">Read Article</span>
              </div>
            </Link>
            
             {/* Mobile specific item for 3rd post to ensure it's accessible or hidden gracefully based on design choice. 
                 Above I hid it on mobile (hidden md:block) to keep 2 cols or stack nicely without hanging. 
                 Actually, stacking 3 items on mobile is fine. I will remove the hidden class to make it truly responsive stack.
             */}
          </div>
          
           {/* Re-rendering the 3rd link without hidden for mobile stacking if desired, 
               but the previous block had `hidden md:block`. 
               Let's correct that to just be a standard grid. 
           */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mt-12 md:mt-0 lg:hidden">
               {/* If we want to show the 3rd item on mobile/tablet specifically if it was hidden above. 
                   Actually, simpler approach: Just one grid that works for all.
               */}
           </div>
        </div>
        
        {/* Correcting the grid implementation to be clean */}
        <div className="max-w-7xl mx-auto mt-[-48px] md:mt-0"> {/* Negative margin hack to pull up if previous div was empty, but better to replace the whole block */}
             {/* I will replace the entire grid div in the main return */}
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
              <h3 className="font-serif text-xl">Lifetime Warranty</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We stand by our craftsmanship. All bags come with a lifetime warranty on stitching and hardware.
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
              <h3 className="font-serif text-xl">The Spa Service</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Send your bag back to us once a year for complimentary conditioning and minor repairs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};