import React from 'react';
import { Button } from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const inputClasses = "w-full bg-gray-50 border-b border-gray-200 px-4 py-3 focus:outline-none focus:border-black focus:bg-white transition-all placeholder-gray-400";

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Our client services team is available to assist with size guidance, product inquiries, and order support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <h2 className="font-serif text-2xl mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">First Name</label>
                  <input type="text" className={inputClasses} placeholder="Jane" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Last Name</label>
                  <input type="text" className={inputClasses} placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Email Address</label>
                <input type="email" className={inputClasses} placeholder="jane@example.com" />
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Subject</label>
                <select className={`${inputClasses} text-gray-700`}>
                  <option>Order Inquiry</option>
                  <option>Product Information</option>
                  <option>Returns & Exchanges</option>
                  <option>Press & Media</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase font-bold text-gray-500 tracking-wider">Message</label>
                <textarea rows={5} className={`${inputClasses} resize-none`} placeholder="How can we help you today?"></textarea>
              </div>

              <div className="pt-6">
                <Button type="submit" className="min-w-[200px]">Send Message</Button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-luxury-cream p-12 lg:p-16 flex flex-col justify-center space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="font-serif text-2xl mb-8">Client Services</h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 text-luxury-black" strokeWidth={1.5} />
                  <div>
                    <h3 className="uppercase text-xs font-bold tracking-widest text-black mb-1">Email</h3>
                    <p className="font-light">concierge@eleven-luxury.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 text-luxury-black" strokeWidth={1.5} />
                  <div>
                    <h3 className="uppercase text-xs font-bold tracking-widest text-black mb-1">Phone</h3>
                    <p className="font-light">+1 (212) 555-0199</p>
                    <p className="text-xs text-gray-400 mt-1">Mon - Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-luxury-black" strokeWidth={1.5} />
                  <div>
                    <h3 className="uppercase text-xs font-bold tracking-widest text-black mb-1">Headquarters</h3>
                    <p className="font-light">
                      11 Mercer Street<br />
                      SoHo, New York<br />
                      NY 10013, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
               <h2 className="font-serif text-xl mb-4">Press Inquiries</h2>
               <p className="text-gray-600 font-light mb-4">For all press and styling pulls, please contact our PR team.</p>
               <a href="mailto:press@eleven-luxury.com" className="text-sm border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">press@eleven-luxury.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};