import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';

export const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return PRODUCTS;
  },

  getProductsByCategory: async (slug: string): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const category = CATEGORIES.find(c => c.slug === slug);
    if (!category) return [];
    // For demo purposes, if category is specific, filter. If not found, return empty.
    // However, our mock data is small, so let's match loosely or by exact category id match logic if we had it.
    // Here we filter by the string category property in Product.
    return PRODUCTS.filter(p => p.category === slug);
  },

  getProductById: async (id: string): Promise<Product | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return PRODUCTS.find(p => p.id === id);
  },

  getFeaturedProducts: async (): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return PRODUCTS.filter(p => p.isBestSeller || p.isNew).slice(0, 4);
  }
};