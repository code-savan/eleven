import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ARTICLES } from '../constants';

export const Journal: React.FC = () => {
  return (
    <div className="-mt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop" 
            alt="Journal Hero" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4">The Editorial</h2>
          <h1 className="font-serif text-5xl md:text-7xl italic">Journal</h1>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={ARTICLES[0].image} alt={ARTICLES[0].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-6 lg:pl-10">
                <span className="text-xs uppercase tracking-widest text-luxury-gold">{ARTICLES[0].category} — {ARTICLES[0].date}</span>
                <h2 className="font-serif text-4xl leading-tight">{ARTICLES[0].title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{ARTICLES[0].excerpt}</p>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white mt-4">Read Story</Button>
            </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {ARTICLES.slice(1).map(article => (
                  <article key={article.id} className="group cursor-pointer">
                      <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-6">
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                      </div>
                      <div className="space-y-3">
                          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                             <span className="text-xs uppercase tracking-widest text-luxury-gold">{article.category}</span>
                             <span className="text-xs text-gray-400">{article.date}</span>
                          </div>
                          <h3 className="font-serif text-2xl leading-tight group-hover:text-gray-600 transition-colors">{article.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                              {article.excerpt}
                          </p>
                          <span className="inline-block text-xs uppercase tracking-wider underline mt-2">Read More</span>
                      </div>
                  </article>
              ))}
          </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-luxury-cream text-center px-6">
          <div className="max-w-xl mx-auto space-y-6">
              <h2 className="font-serif text-3xl italic">Subscribe to the Journal</h2>
              <p className="text-gray-500 text-sm">Receive the latest stories, style guides, and exclusive interviews directly in your inbox.</p>
              <div className="flex border-b border-black pb-2">
                  <input type="email" placeholder="Email Address" className="bg-transparent w-full outline-none placeholder-gray-500" />
                  <button className="text-xs uppercase tracking-widest font-bold">Sign Up</button>
              </div>
          </div>
      </section>
    </div>
  );
};