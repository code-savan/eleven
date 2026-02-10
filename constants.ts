import { Product, Category, Article } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'c1',
    name: 'Noir Collection',
    slug: 'black',
    image: 'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqH3OcN3sYRont0jI5aTidF7hcbKqX1yNOE4sp',
    description: 'Timeless elegance in deepest obsidian.',
  },
  {
    id: 'c2',
    name: 'Cognac & Earth',
    slug: 'brown',
    image: 'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq62n7XAymO3JrVAYE8nZN12x4hSabd7eWCXDc',
    description: 'Warm tones from vegetable-tanned leathers.',
  },
  {
    id: 'c3',
    name: 'Wood & Rattan',
    slug: 'wood',
    image: 'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqukTOAFixAcJYUKS6e4pmjDuVWF8iRfNZTynr',
    description: 'Natural fibers and architectural structures.',
  },
  {
    id: 'c4',
    name: 'Forest Green',
    slug: 'green',
    image: 'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqVK5HxW2CuFbZtTaNUV7PpkO9H8f23yYneL4X',
    description: 'Rich, organic hues inspired by nature.',
  },
];

export const PRODUCTS: Product[] = [
  // --- BLACK (NOIR) ---
  {
    id: 'blk-1',
    name: 'Eleven Obsidian Calfskin Valley Tote',
    price: 2450,
    currency: 'USD',
    category: 'black',
    description: 'Crafted from full-grain calfskin, this architectural tote features our signature matte black hardware. A study in minimalism.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqH3OcN3sYRont0jI5aTidF7hcbKqX1yNOE4sp',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqH3OcN3sYRont0jI5aTidF7hcbKqX1yNOE4sp'
    ],
    colors: ['Black'],
    sizes: ['Medium', 'Large'],
    isBestSeller: true,
  },
  {
    id: 'blk-2',
    name: 'Eleven Midnight Structural Crossbody',
    price: 1850,
    currency: 'USD',
    category: 'black',
    description: 'Compact yet commanding. The Midnight Crossbody features a structured silhouette with hand-painted edges.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqrlYudjBJ095hBvWyaFOeNE8c2x7dM6oCftKS',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqrlYudjBJ095hBvWyaFOeNE8c2x7dM6oCftKS'
    ],
    colors: ['Black'],
    sizes: ['One Size'],
  },
  {
    id: 'blk-3',
    name: 'Eleven Noir Pebbled Weekender',
    price: 3200,
    currency: 'USD',
    category: 'black',
    description: 'Designed for the modern traveler. Soft, pebbled leather that ages beautifully, with ample room for a 3-day escape.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqI1QaIrCKTsCGB0uYanL1EqzAF9NgbPU2JVhQ',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqI1QaIrCKTsCGB0uYanL1EqzAF9NgbPU2JVhQ'
    ],
    colors: ['Black'],
    sizes: ['Standard'],
  },
  {
    id: 'blk-4',
    name: 'Eleven Onyx Satin Evening Box',
    price: 1450,
    currency: 'USD',
    category: 'black',
    description: 'A rigid evening bag wrapped in smooth satin-finish leather. Gold clasp detailing.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq4GFlk33nNf2MLFqpiQux39KhTPbW1YUzAsSc',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq4GFlk33nNf2MLFqpiQux39KhTPbW1YUzAsSc'
    ],
    colors: ['Black'],
    sizes: ['Small'],
    isNew: true,
  },

  // --- BROWN (COGNAC & EARTH) ---
  {
    id: 'brn-1',
    name: 'Eleven Heritage Cognac Satchel',
    price: 2100,
    currency: 'USD',
    category: 'brown',
    description: 'Vegetable-tanned Italian leather in a rich cognac hue. This bag develops a unique patina over time, telling your story.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqqP9GUSK3pXsZ8Skce6VM7HTrjWEJz1tyLImf',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqqP9GUSK3pXsZ8Skce6VM7HTrjWEJz1tyLImf'
    ],
    colors: ['Cognac', 'Espresso'],
    sizes: ['Medium'],
    isBestSeller: true,
  },
  {
    id: 'brn-2',
    name: 'Eleven Taupe Suede Slouch Tote',
    price: 1950,
    currency: 'USD',
    category: 'brown',
    description: 'Buttery soft calf suede in a warm taupe. Unstructured and effortless.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqevtS1ArM4HfLN6A7Xa5znO3hVSY2eZCxUvoB',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqevtS1ArM4HfLN6A7Xa5znO3hVSY2eZCxUvoB'
    ],
    colors: ['Taupe', 'Sand'],
    sizes: ['Large'],
  },
  {
    id: 'brn-3',
    name: 'Eleven Chocolate Classic Bucket',
    price: 1650,
    currency: 'USD',
    category: 'brown',
    description: 'A timeless silhouette in smooth chocolate leather. Drawstring closure with gold aglets.',
    images: [
       'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq62n7XAymO3JrVAYE8nZN12x4hSabd7eWCXDc',
       'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq62n7XAymO3JrVAYE8nZN12x4hSabd7eWCXDc'
    ],
    colors: ['Chocolate'],
    sizes: ['One Size'],
  },
  {
    id: 'brn-4',
    name: 'Eleven Sienna Leather Messenger',
    price: 2350,
    currency: 'USD',
    category: 'brown',
    description: 'A robust messenger bag crafted from thick sienna leather. Features a dedicated laptop compartment.',
    images: [
       'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqQGqCsE45dWUGN9Yr4ymxqiozEMkLH3nh1cub',
       'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqQGqCsE45dWUGN9Yr4ymxqiozEMkLH3nh1cub'
    ],
    colors: ['Sienna'],
    sizes: ['One Size'],
    isNew: true,
  },

  // --- WOOD & RATTAN ---
  {
    id: 'wd-1',
    name: 'Eleven Natural Woven Shopper',
    price: 1200,
    currency: 'USD',
    category: 'wood',
    description: 'Intricately woven rattan paired with structured leather handles. The epitome of summer luxury.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqukTOAFixAcJYUKS6e4pmjDuVWF8iRfNZTynr',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqukTOAFixAcJYUKS6e4pmjDuVWF8iRfNZTynr'
    ],
    colors: ['Natural/Tan'],
    sizes: ['One Size'],
    isNew: true,
  },
  {
    id: 'wd-2',
    name: 'Eleven Bamboo Handle Linen Clutch',
    price: 950,
    currency: 'USD',
    category: 'wood',
    description: 'A structured clutch featuring a genuine heat-bent bamboo handle and linen body.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqGSFh6P7mVBzEUXwWtx09OrkR51CSPjQysldb',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqGSFh6P7mVBzEUXwWtx09OrkR51CSPjQysldb'
    ],
    colors: ['Natural'],
    sizes: ['Small'],
  },
  {
    id: 'wd-3',
    name: 'Eleven Walnut Architectural Box',
    price: 2800,
    currency: 'USD',
    category: 'wood',
    description: 'Carved from reclaimed walnut wood, lined with soft suede. A statement piece bridging art and fashion.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqIjTDbVCKTsCGB0uYanL1EqzAF9NgbPU2JVhQ',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqIjTDbVCKTsCGB0uYanL1EqzAF9NgbPU2JVhQ'
    ],
    colors: ['Walnut'],
    sizes: ['One Size'],
    isNew: true,
  },
  {
    id: 'wd-4',
    name: 'Eleven Rattan Circular Crossbody',
    price: 1350,
    currency: 'USD',
    category: 'wood',
    description: 'A playful circular silhouette woven from fine rattan with leather accents.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqYHrw7je2ArZODV5MSz6Y0wkbn3eU7FfWgmKt',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqYHrw7je2ArZODV5MSz6Y0wkbn3eU7FfWgmKt'
    ],
    colors: ['Natural'],
    sizes: ['One Size'],
  },

  // --- GREEN (FOREST) ---
  {
    id: 'grn-1',
    name: 'Eleven Emerald High-Shine Shoulder Bag',
    price: 2250,
    currency: 'USD',
    category: 'green',
    description: 'Deep emerald leather with a high-shine finish. Inspired by the dense forests of the Pacific Northwest.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqAnrrgb1cYLh0UQCizxDGnNHofRKlA5Zt9qga',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqAnrrgb1cYLh0UQCizxDGnNHofRKlA5Zt9qga'
    ],
    colors: ['Emerald'],
    sizes: ['One Size'],
    isBestSeller: true,
  },
  {
    id: 'grn-2',
    name: 'Eleven Olive Drab Canvas Weekender',
    price: 1890,
    currency: 'USD',
    category: 'green',
    description: 'Rugged yet refined. Heavyweight canvas in olive drab with dark green leather trim.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqVK5HxW2CuFbZtTaNUV7PpkO9H8f23yYneL4X',
       'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqVK5HxW2CuFbZtTaNUV7PpkO9H8f23yYneL4X'
    ],
    colors: ['Olive'],
    sizes: ['Large'],
  },
  {
    id: 'grn-3',
    name: 'Eleven Moss Textured Mini',
    price: 1150,
    currency: 'USD',
    category: 'green',
    description: 'A playful mini bag in textured moss-green leather. Detachable strap for versatility.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqC9k4GW7ItnWs3qzUFo7HhVvwQdpEMZylYbfS',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHqC9k4GW7ItnWs3qzUFo7HhVvwQdpEMZylYbfS'
    ],
    colors: ['Moss'],
    sizes: ['Mini'],
  },
  {
    id: 'grn-4',
    name: 'Eleven Pine Leather Saddle Bag',
    price: 2150,
    currency: 'USD',
    category: 'green',
    description: 'A classic saddle shape reimagined in deep pine leather with antique brass hardware.',
    images: [
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq9FbR5fYapK8W9RjUltCThVHxfXJIgrBbNMd2',
      'https://xdzo3l0q9w.ufs.sh/f/kFidUZgXvMHq9FbR5fYapK8W9RjUltCThVHxfXJIgrBbNMd2'
    ],
    colors: ['Pine'],
    sizes: ['Medium'],
    isNew: true,
  }
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "The Art of Vegetable Tanning",
    excerpt: "Why we choose time-honored, chemical-free processes to create leather that breathes and ages with you.",
    category: "Process",
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1470&auto=format&fit=crop",
    date: "October 12, 2023"
  },
  {
    id: 2,
    title: "Caring for Your Eleven Bag",
    excerpt: "A comprehensive guide to conditioning, storing, and preserving the life of your leather goods.",
    category: "Care",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    date: "September 28, 2023"
  },
  {
    id: 3,
    title: "Travel Journal: Marrakech",
    excerpt: "Testing the durability of our Heritage Satchel through the vibrant markets and deserts of Morocco.",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1287&auto=format&fit=crop",
    date: "November 5, 2023"
  }
];