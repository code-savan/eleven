import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-6">
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-white/90 text-xs px-2 py-1 uppercase tracking-wider z-10">New Arrival</span>
        )}
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <h3 className="font-serif text-lg text-luxury-black">{product.name}</h3>
        <p className="text-sm text-gray-500 font-sans">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};