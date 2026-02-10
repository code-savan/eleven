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
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop" 
            alt="Studio" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <RevealSection>
            <h2 className="text-sm uppercase tracking-[0.4em] mb-6">Established 2010</h2>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-luxury-black">
              Crafting <br/> <span className="italic text-gray-600">Timelessness</span>
            </h1>
          </RevealSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <RevealSection>
          <div className="w-px h-24 bg-luxury-gold mx-auto mb-12"></div>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">The Philosophy</h2>
          <p className="text-gray-600 leading-loose text-lg font-light">
            At Eleven, we believe that true luxury lies in simplicity. We strip away the unnecessary to reveal the essential beauty of form and material. Every stitch is intentional, every fabric selected with an obsessive attention to touch and drape. We don't follow trends; we create pieces that live outside of time.
          </p>
        </RevealSection>
      </section>

      {/* Materials Section (New) */}
      <section className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <h2 className="font-serif text-4xl text-center mb-16">Materiality</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <RevealSection delay={100}>
              <div className="aspect-[4/5] bg-gray-200 mb-6 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1287&auto=format&fit=crop" alt="Cashmere" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-lg font-serif mb-2">Grade-A Cashmere</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">Sourced from the high plateaus of Mongolia, our cashmere is combed, not sheared, ensuring the longest, softest fibers.</p>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="aspect-[4/5] bg-gray-200 mb-6 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1470&auto=format&fit=crop" alt="Leather" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-lg font-serif mb-2">Vegetable Tanned Leather</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">We work with a heritage tannery in Tuscany that uses natural tannins, allowing the leather to age beautifully over time.</p>
            </RevealSection>
            <RevealSection delay={300}>
              <div className="aspect-[4/5] bg-gray-200 mb-6 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1363&auto=format&fit=crop" alt="Silk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-lg font-serif mb-2">Ethical Silk</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">Our silk is woven in Como using traditional techniques that preserve the natural luster and strength of the thread.</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <RevealSection>
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
                alt="Atelier" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">The Atelier — Paris</p>
          </RevealSection>
          <div className="space-y-8 md:pl-12">
            <RevealSection delay={200}>
              <h3 className="font-serif text-3xl mb-4">Uncompromising Quality</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                 Our artisans have honed their craft over decades. Working with the finest tanneries in Tuscany and silk mills in Como, we ensure that every Eleven piece is not just purchased, but collected.
              </p>
            </RevealSection>
            <RevealSection delay={400}>
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop" 
                  alt="Detail" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* The Studio (New) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
             <RevealSection>
               <h2 className="font-serif text-3xl md:text-4xl mb-6">Designed in Milan</h2>
               <p className="text-gray-600 leading-loose mb-6">
                 Our creative process begins in our Milan studio, housed in a converted 19th-century factory. Here, natural light floods the space, illuminating the fabric swatches and sketches that line the walls. 
               </p>
               <p className="text-gray-600 leading-loose">
                 It is a place of quiet focus, where innovation meets tradition. We prototype every garment in-house, refining the fit on live models to ensure movement and comfort are never sacrificed for style.
               </p>
             </RevealSection>
          </div>
          <div className="order-1 md:order-2">
            <RevealSection delay={200}>
              <div className="aspect-[16/9] md:aspect-square bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1502005229766-939cb934d60b?q=80&w=1500&auto=format&fit=crop" 
                  alt="Milan Studio" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-luxury-cream">
        <div className="max-w-5xl mx-auto">
           <RevealSection>
             <h2 className="font-serif text-4xl text-center mb-20">Our Journey</h2>
           </RevealSection>
           
           <div className="relative border-l border-gray-300 ml-4 md:ml-1/2 space-y-20">
             
             {/* Item 1 */}
             <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-luxury-black border-4 border-luxury-cream md:left-1/2 md:-ml-[5px]"></div>
                <div className="md:w-1/2 md:pr-12 md:text-right md:ml-0">
                  <RevealSection>
                    <span className="text-luxury-gold font-bold text-sm tracking-widest block mb-2">2010</span>
                    <h3 className="font-serif text-2xl mb-3">The Inception</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Eleven was founded in a small studio in Milan with a singular vision: to create the perfect white shirt.</p>
                  </RevealSection>
                </div>
             </div>

             {/* Item 2 */}
             <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-luxury-black border-4 border-luxury-cream md:left-1/2 md:-ml-[5px]"></div>
                <div className="md:w-1/2 md:ml-auto md:pl-12">
                  <RevealSection>
                    <span className="text-luxury-gold font-bold text-sm tracking-widest block mb-2">2015</span>
                    <h3 className="font-serif text-2xl mb-3">Global Expansion</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">We opened our first flagship store in New York, bringing our minimalist aesthetic to the global stage.</p>
                  </RevealSection>
                </div>
             </div>

             {/* Item 3 */}
             <div className="relative pl-12 md:pl-0">
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-luxury-black border-4 border-luxury-cream md:left-1/2 md:-ml-[5px]"></div>
                <div className="md:w-1/2 md:pr-12 md:text-right md:ml-0">
                  <RevealSection>
                    <span className="text-luxury-gold font-bold text-sm tracking-widest block mb-2">2024</span>
                    <h3 className="font-serif text-2xl mb-3">Sustainable Future</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Committing to 100% ethically sourced materials and carbon-neutral shipping for all our collections.</p>
                  </RevealSection>
                </div>
             </div>

           </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 text-center">
         <RevealSection>
           <blockquote className="font-serif text-3xl md:text-5xl max-w-4xl mx-auto leading-tight italic text-gray-800">
             "Simplicity is the keynote of all true elegance."
           </blockquote>
           <cite className="block mt-8 text-sm uppercase tracking-widest text-gray-500 not-italic">— Coco Chanel</cite>
         </RevealSection>
      </section>

      {/* CTA Section (New) */}
      <section className="h-[50vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" alt="Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <RevealSection>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Experience the Collection</h2>
            <p className="text-lg font-light mb-8 max-w-xl mx-auto">Discover pieces designed to be cherished for a lifetime.</p>
            <Link to="/category/all">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Shop New Arrivals
              </Button>
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};