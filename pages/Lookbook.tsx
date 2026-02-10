import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Lookbook: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-8 italic">The Collection</h1>
        <p className="text-gray-600 text-lg font-light leading-relaxed">
          A study in form, function, and the enduring beauty of natural materials. 
          Highlighting our most iconic silhouettes across four distinct color stories.
        </p>
      </section>

      {/* Noir Focus */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">01. Noir</span>
            <h2 className="font-serif text-4xl md:text-5xl">Shadow & Structure</h2>
            <p className="text-gray-500 font-light leading-relaxed max-w-md">
              The Obsidian Tote represents the pinnacle of our minimalist philosophy. 
              Stripped of excess, defined by its architectural lines and the profound depth of matte black calfskin.
            </p>
            <Link to="/product/blk-1" className="inline-flex items-center gap-2 border-b border-black pb-1 uppercase text-xs tracking-widest hover:text-gray-600 transition-colors">
              Shop The Obsidian <ArrowRight size={14} />
            </Link>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] bg-gray-100 overflow-hidden">
             <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqrlYudjBJ095hBvWyaFOeNE8c2x7dM6oCftKS" alt="Noir Collection" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Full Width Visual */}
      <section className="mb-32 relative h-[80vh] w-full overflow-hidden">
        <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqBTl6RQ5Wz1Di7wjTAVvMu5Q4Oth0sKRdbkXU" alt="Travel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-12 left-6 md:left-24 text-white">
           <p className="font-serif text-3xl md:text-5xl italic mb-4">"Carry your world with you."</p>
        </div>
      </section>

      {/* Cognac Focus */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
             <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqQGqCsE45dWUGN9Yr4ymxqiozEMkLH3nh1cub" alt="Cognac Collection" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8 md:pl-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">02. Earth</span>
            <h2 className="font-serif text-4xl md:text-5xl">The Patina Journey</h2>
            <p className="text-gray-500 font-light leading-relaxed max-w-md">
              Our vegetable-tanned Heritage leather is designed to change. Sun, rain, and the oils from your hands will darken the leather over time, creating a map of your travels unique to you.
            </p>
            <Link to="/product/brn-1" className="inline-flex items-center gap-2 border-b border-black pb-1 uppercase text-xs tracking-widest hover:text-gray-600 transition-colors">
              Shop Heritage Satchel <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid of Details */}
      <section className="mb-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="aspect-square bg-gray-100 overflow-hidden relative group">
              <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq62n7XAymO3JrVAYE8nZN12x4hSabd7eWCXDc" alt="Detail 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
           </div>
           <div className="aspect-square bg-gray-100 overflow-hidden relative group">
              <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqYHrw7je2ArZODV5MSz6Y0wkbn3eU7FfWgmKt" alt="Detail 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
           </div>
           <div className="aspect-square bg-gray-100 overflow-hidden relative group">
              <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqGSFh6P7mVBzEUXwWtx09OrkR51CSPjQysldb" alt="Detail 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
           </div>
        </div>
        <div className="text-center mt-8">
           <p className="text-sm uppercase tracking-widest text-gray-400">Details: Brass Hardware / Hand Stitching / Natural Rattan</p>
        </div>
      </section>

      {/* Wood Focus */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">03. Nature</span>
            <h2 className="font-serif text-4xl md:text-5xl">Woven & Wood</h2>
            <p className="text-gray-500 font-light leading-relaxed max-w-md">
              Blurring the line between accessory and artifact. We pair rigid, reclaimed wood elements with soft, woven rattan to create silhouettes that feel organic yet thoroughly modern.
            </p>
            <Link to="/category/wood" className="inline-flex items-center gap-2 border-b border-black pb-1 uppercase text-xs tracking-widest hover:text-gray-600 transition-colors">
              Explore The Collection <ArrowRight size={14} />
            </Link>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] bg-gray-100 overflow-hidden">
             <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqIjTDbVCKTsCGB0uYanL1EqzAF9NgbPU2JVhQ" alt="Wood Collection" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <div className="text-center py-20 bg-luxury-cream">
         <h2 className="font-serif text-3xl mb-6">Discover Your Piece</h2>
         <Link to="/category/all">
            <button className="bg-luxury-black text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
               Shop All Bags
            </button>
         </Link>
      </div>

    </div>
  );
};