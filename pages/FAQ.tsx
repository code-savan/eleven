import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    category: 'Orders',
    questions: [
      {
        q: "Can I modify or cancel my order?",
        a: "We process orders quickly to ensure fast delivery. If you need to make changes, please contact our Client Services team immediately. Once an order has been dispatched, we cannot modify it."
      },
      {
        q: "Where is my order confirmation?",
        a: "You should receive an email confirmation shortly after placing your order. If you haven't received it within an hour, please check your spam folder or contact us."
      }
    ]
  },
  {
    category: 'Products',
    questions: [
      {
        q: "Where are your products made?",
        a: "Our collections are designed in Milan and crafted by expert artisans in Italy, France, and Portugal, ensuring the highest quality standards."
      },
      {
        q: "How do I care for my cashmere items?",
        a: "We recommend hand washing your cashmere in cold water with a gentle detergent or professional dry cleaning. Store folded in a cool, dry place to maintain shape."
      },
      {
        q: "Do you offer repairs?",
        a: "Yes, we offer a complimentary repair service for handbags and leather goods within one year of purchase. Please contact Client Services for assessment."
      }
    ]
  },
  {
    category: 'Shipping & Returns',
    questions: [
      {
        q: "How long does shipping take?",
        a: "Domestic orders typically arrive within 3-5 business days. Express shipping options are available at checkout for 1-2 day delivery."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to over 80 countries. International shipping times vary but typically take 3-7 business days via DHL Express."
      },
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of delivery for unworn items with tags attached. A $10 processing fee applies to returns."
      }
    ]
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-500 font-light">
            Find answers to common questions about your order and our services.
          </p>
        </div>

        <div className="space-y-16">
          {FAQ_ITEMS.map((section, sIdx) => (
            <div key={sIdx} className="animate-fade-in" style={{ animationDelay: `${sIdx * 0.1}s` }}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, qIdx) => {
                  const id = `${sIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={qIdx} className="border-b border-gray-100 last:border-0">
                      <button 
                        onClick={() => toggleFAQ(id)}
                        className="w-full flex justify-between items-center py-6 text-left group"
                      >
                        <span className={`font-serif text-lg transition-colors ${isOpen ? 'text-black' : 'text-gray-700 group-hover:text-black'}`}>
                          {item.q}
                        </span>
                        <span className="text-gray-400 group-hover:text-black transition-colors">
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-gray-500 font-light leading-relaxed pr-8">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-luxury-cream p-12">
          <h3 className="font-serif text-2xl mb-4">Still have questions?</h3>
          <p className="text-gray-500 font-light mb-8">Our Client Services team is here to help.</p>
          <a href="/#/contact" className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};