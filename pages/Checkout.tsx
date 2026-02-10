import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { cart, subtotal } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">Your cart is empty.</p>
          <Link to="/" className="underline hover:text-gray-600">Return Home</Link>
        </div>
      </div>
    );
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6">
            <Check size={40} />
          </div>
          <h1 className="font-serif text-3xl">Order Confirmed</h1>
          <p className="text-gray-500 leading-relaxed">
            Thank you for your purchase. We have sent a confirmation email to your inbox. Your order ID is <span className="text-black font-medium">#ELVN-{Math.floor(Math.random() * 10000)}</span>.
          </p>
          <div className="pt-8">
            <Link to="/">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const inputClasses = "w-full bg-gray-50 border-b border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors placeholder-gray-400";

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Column: Forms */}
        <div className="p-6 md:p-12 lg:p-20 order-2 lg:order-1">
          <div className="mb-8 text-xs uppercase tracking-widest text-gray-400 flex items-center gap-2">
            <span className={step === 1 ? 'text-black' : ''}>Shipping</span>
            <ChevronRight size={12} />
            <span className={step === 2 ? 'text-black' : ''}>Payment</span>
          </div>

          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl mb-8">Contact Information</h2>
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold text-gray-500">Email Address</label>
                  <input required type="email" className={inputClasses} placeholder="you@example.com" />
                </div>
                
                <h2 className="font-serif text-2xl pt-8 mb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-gray-500">First Name</label>
                    <input required type="text" className={inputClasses} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-gray-500">Last Name</label>
                    <input required type="text" className={inputClasses} />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase font-bold text-gray-500">Address</label>
                  <input required type="text" className={inputClasses} />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-gray-500">City</label>
                    <input required type="text" className={inputClasses} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-gray-500">Postal Code</label>
                    <input required type="text" className={inputClasses} />
                  </div>
                </div>

                <div className="pt-8">
                  <Button fullWidth type="submit">Continue to Payment</Button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl mb-8">Payment Method</h2>
              <form onSubmit={handlePayment} className="space-y-6">
                <div className="border border-gray-200 p-4 rounded-sm space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-gray-500">Card Number</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors bg-transparent px-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs uppercase font-bold text-gray-500">Expiry</label>
                      <input required type="text" placeholder="MM / YY" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors bg-transparent px-2" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs uppercase font-bold text-gray-500">CVC</label>
                      <input required type="text" placeholder="123" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors bg-transparent px-2" />
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex gap-4">
                  <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
                  <Button fullWidth type="submit" disabled={loading}>
                    {loading ? 'Processing...' : `Pay $${subtotal.toLocaleString()}`}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Right Column: Order Summary (Sticky) */}
        <div className="bg-luxury-cream p-6 md:p-12 lg:p-20 order-1 lg:order-2 border-l border-gray-100">
          <div className="sticky top-24">
            <h2 className="font-serif text-xl mb-8">Order Summary</h2>
            {/* Added pt-4 and pr-4 to container to prevent badge clipping */}
            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto no-scrollbar pt-4 pr-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}`} className="flex gap-4">
                  <div className="w-16 h-20 bg-white relative shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center shadow-sm z-10">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.selectedColor}</p>
                  </div>
                  <div className="text-sm font-medium">
                    ${(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4 text-lg font-serif">
                <span>Total</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};