export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
}

export type SortOption = 'newest' | 'price-low-high' | 'price-high-low' | 'popularity';