import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

// Helper component for reveal-on-scroll animation
const RevealSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHql1VFsg0A3WQukhRDSGxNynFJ2jqVZe8YLXtb" 
            alt="Leather Workshop" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <RevealSection>
            <h2 className="text-sm uppercase tracking-[0.4em] mb-6 text-white">The Atelier</h2>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-white">
              The Soul of <br/> <span className="italic text-gray-300">Leather</span>
            </h1>
          </RevealSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <RevealSection>
          <div className="w-px h-24 bg-luxury-gold mx-auto mb-12"></div>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">One Material, Infinite Depth</h2>
          <p className="text-gray-600 leading-loose text-lg font-light">
            At Eleven, we have dedicated ourselves to a single pursuit: creating the perfect bag. We believe that leather is not just a material, but a living canvas that records the passage of time. Our philosophy is rooted in subtraction—removing the ornamental to reveal the structural beauty and the tactile richness of the hide itself.
          </p>
        </RevealSection>
      </section>

      {/* The Process Section (New & Visual) */}
      <section className="bg-luxury-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
           <RevealSection>
             <h2 className="font-serif text-4xl md:text-5xl text-center mb-24">The Process</h2>
           </RevealSection>

           <div className="space-y-32">
             
             {/* Step 1 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <RevealSection>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                    <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqRvseulohxoi5W3Y4zsvwMHZyAUQJp0tr7Ggc" alt="Selection" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                  </div>
                </RevealSection>
                <RevealSection delay={200}>
                   <span className="text-luxury-gold text-6xl font-serif block mb-4 opacity-50">01</span>
                   <h3 className="text-2xl uppercase tracking-widest mb-6">Selection</h3>
                   <p className="text-gray-400 font-light leading-relaxed max-w-md">
                     It begins with the hide. We source exclusively full-grain calfskin from sustainable farms in France and Italy. We look for a tight grain structure and natural character, rejecting heavily corrected leathers that feel synthetic to the touch.
                   </p>
                </RevealSection>
             </div>

             {/* Step 2 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 md:text-right flex flex-col items-end">
                  <RevealSection delay={200}>
                     <span className="text-luxury-gold text-6xl font-serif block mb-4 opacity-50">02</span>
                     <h3 className="text-2xl uppercase tracking-widest mb-6">Tanning</h3>
                     <p className="text-gray-400 font-light leading-relaxed max-w-md">
                       We utilize a slow, vegetable-tanning process involving tree barks and natural tannins. This takes up to 40 days, compared to the 24 hours of chemical chrome tanning. The result is a leather that smells of earth and wood, not chemicals.
                     </p>
                  </RevealSection>
                </div>
                <div className="order-1 md:order-2">
                  <RevealSection>
                    <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                      <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq9rAB3KhYapK8W9RjUltCThVHxfXJIgrBbNMd" alt="Tanning" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                    </div>
                  </RevealSection>
                </div>
             </div>

             {/* Step 3 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <RevealSection>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                    <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq6LbLJpymO3JrVAYE8nZN12x4hSabd7eWCXDc" alt="Stitching" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                  </div>
                </RevealSection>
                <RevealSection delay={200}>
                   <span className="text-luxury-gold text-6xl font-serif block mb-4 opacity-50">03</span>
                   <h3 className="text-2xl uppercase tracking-widest mb-6">Construction</h3>
                   <p className="text-gray-400 font-light leading-relaxed max-w-md">
                     Each bag is assembled by a single artisan from start to finish. Edges are hand-painted and polished up to five times to ensure longevity. The hardware, solid brass, is designed to patina alongside the leather.
                   </p>
                </RevealSection>
             </div>

           </div>
        </div>
      </section>

      {/* Materials Details */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <h2 className="font-serif text-4xl text-center mb-16">The Elements</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <RevealSection delay={100}>
              <div className="aspect-square bg-white mb-6 p-8 flex items-center justify-center">
                 <div className="w-full h-full bg-gray-200 overflow-hidden relative group">
                   <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqevtS1ArM4HfLN6A7Xa5znO3hVSY2eZCxUvoB" alt="Calfskin" className="w-full h-full object-cover" />
                 </div>
              </div>
              <h3 className="text-lg font-serif mb-2">French Calfskin</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">Renowned for its tight grain and buttery hand-feel. It creates a bag that holds its structure while remaining soft.</p>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="aspect-square bg-white mb-6 p-8 flex items-center justify-center">
                 <div className="w-full h-full bg-gray-200 overflow-hidden relative group">
                   <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq62n7XAymO3JrVAYE8nZN12x4hSabd7eWCXDc" alt="Brass" className="w-full h-full object-cover" />
                 </div>
              </div>
              <h3 className="text-lg font-serif mb-2">Solid Brass</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">We do not use plated alloys. Our hardware is solid brass, ensuring it will never chip or flake, only darken with age.</p>
            </RevealSection>
            <RevealSection delay={300}>
              <div className="aspect-square bg-white mb-6 p-8 flex items-center justify-center">
                 <div className="w-full h-full bg-gray-200 overflow-hidden relative group">
                   <img src="https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqC9k4GW7ItnWs3qzUFo7HhVvwQdpEMZylYbfS" alt="Linen" className="w-full h-full object-cover" />
                 </div>
              </div>
              <h3 className="text-lg font-serif mb-2">Belgian Linen</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">Interiors are lined with heavy-weight, natural Belgian linen. Durable, breathable, and light enough to find your belongings easily.</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1654707634812-3ce01a6258f9?q=80&w=1060" alt="Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <RevealSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Carry the Story</h2>
            <p className="text-lg font-light mb-8 max-w-xl mx-auto">Explore our latest collection of hand-finished leather goods.</p>
            <Link to="/lookbook">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                View Lookbook
              </Button>
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};