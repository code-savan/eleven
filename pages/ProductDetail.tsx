import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { Button } from '../components/Button';
import { ChevronRight, Star } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  useEffect(() => {
    if (id) {
      setLoading(true);
      productService.getProductById(id).then((data) => {
        setProduct(data || null);
        if (data) {
          setSelectedColor(data.colors[0]);
          setSelectedSize(data.sizes[0]);
        }
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="h-screen flex items-center justify-center">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-xs text-gray-500 mb-8 uppercase tracking-widest">
        <span>Home</span>
        <ChevronRight size={12} className="mx-2" />
        <span>{product.category.replace('-', ' ')}</span>
        <ChevronRight size={12} className="mx-2" />
        <span className="text-black">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100 w-full overflow-hidden">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-[3/4] bg-gray-100 overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-black opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col h-full pt-4">
          <div className="flex-1">
            <h1 className="font-serif text-3xl md:text-4xl mb-4 text-luxury-black">{product.name}</h1>
            <p className="text-2xl font-sans font-light mb-8">{formatPrice(product.price)}</p>
            
            <p className="text-gray-600 leading-relaxed mb-8 font-light text-sm md:text-base">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3 block">Color: {selectedColor}</span>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-8 px-4 border text-sm transition-all ${selectedColor === color ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Size: {selectedSize}</span>
                <button className="text-xs text-gray-500 underline hover:text-black">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 border text-sm transition-all flex items-center justify-center ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-600 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-gray-100">
             <Button 
               fullWidth 
               onClick={() => addToCart(product, 1, selectedColor, selectedSize)}
               className="h-14"
             >
               Add to Bag - {formatPrice(product.price)}
             </Button>
             
             <div className="text-xs text-gray-500 text-center flex flex-col gap-2 mt-4">
               <p>Free shipping and returns on all orders.</p>
               <p>Estimated delivery: 2-4 business days.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};