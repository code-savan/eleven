import React from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-3xl mb-4">Your Shopping Bag is Empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added any pieces yet.</p>
        <Link to="/">
          <Button variant="primary">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <h1 className="font-serif text-3xl md:text-4xl mb-12 text-center">Shopping Bag</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="lg:w-2/3 space-y-8">
          <div className="hidden md:flex justify-between border-b pb-4 text-xs uppercase tracking-widest text-gray-400">
            <span className="w-1/2">Product</span>
            <span className="w-1/6 text-center">Quantity</span>
            <span className="w-1/6 text-right">Total</span>
          </div>

          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex flex-col md:flex-row items-center gap-6 border-b pb-8">
              {/* Product Info */}
              <div className="flex w-full md:w-1/2 gap-6">
                <Link to={`/product/${item.id}`} className="w-24 h-32 bg-gray-100 flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex flex-col justify-center">
                  <Link to={`/product/${item.id}`} className="font-serif text-lg hover:text-gray-600 transition-colors">{item.name}</Link>
                  <p className="text-sm text-gray-500 mt-1">{item.selectedColor} / {item.selectedSize}</p>
                  <p className="text-sm mt-1 md:hidden">${item.price.toLocaleString()}</p>
                  <button 
                    onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-red-500 mt-4 transition-colors uppercase tracking-wider"
                  >
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="w-full md:w-1/6 flex justify-center">
                <div className="flex items-center border border-gray-200">
                  <button 
                    onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100"
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="w-full md:w-1/6 text-right font-medium hidden md:block">
                ${(item.price * item.quantity).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:w-1/3">
          <div className="bg-luxury-cream p-8 sticky top-24">
            <h2 className="font-serif text-xl mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex justify-between items-center text-lg font-medium">
                <span>Total</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
            </div>

            <Link to="/checkout" className="block">
              <Button fullWidth>Proceed to Checkout</Button>
            </Link>
            
            <div className="mt-6 text-xs text-gray-500 text-center space-y-2">
              <p>Secure Checkout</p>
              <div className="flex justify-center gap-2 opacity-50">
                {/* Mock Payment Icons */}
                <div className="w-8 h-5 bg-gray-300 rounded"></div>
                <div className="w-8 h-5 bg-gray-300 rounded"></div>
                <div className="w-8 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};