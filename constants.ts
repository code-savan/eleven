import { Product, Category, Article } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'c1',
    name: 'Ready to Wear',
    slug: 'ready-to-wear',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1287&auto=format&fit=crop',
    description: 'Effortless elegance for every day.',
  },
  {
    id: 'c2',
    name: 'Handbags',
    slug: 'handbags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop',
    description: 'Iconic silhouettes in premium leather.',
  },
  {
    id: 'c3',
    name: 'Shoes',
    slug: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop',
    description: 'Step into sophistication.',
  },
  {
    id: 'c4',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    description: 'The finishing touches.',
  },
];

export const PRODUCTS: Product[] = [
  // Ready to Wear
  {
    id: 'rtw-1',
    name: 'The Cashmere Overcoat',
    price: 2450,
    currency: 'USD',
    category: 'ready-to-wear',
    description: 'Crafted from double-faced cashmere, this overcoat offers an relaxed yet refined silhouette. Featuring hand-stitched details and a belted waist for versatility.',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce6a25e8?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Camel', 'Black', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
  },
  {
    id: 'rtw-2',
    name: 'Silk Evening Gown',
    price: 3200,
    currency: 'USD',
    category: 'ready-to-wear',
    description: 'A floor-sweeping gown in pure silk satin. The bias cut ensures a fluid drape, while the open back adds a touch of modern sensuality.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1324&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black', 'Emerald', 'Ivory'],
    sizes: ['2', '4', '6', '8', '10'],
    isBestSeller: true,
  },
  {
    id: 'rtw-3',
    name: 'Structured Blazer',
    price: 1250,
    currency: 'USD',
    category: 'ready-to-wear',
    description: 'Tailored to perfection, this wool-blend blazer features a defined shoulder and a nipped-in waist. The ultimate power dressing staple.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1334&auto=format&fit=crop'
    ],
    colors: ['Black', 'Navy', 'Check'],
    sizes: ['34', '36', '38', '40', '42'],
  },
  {
    id: 'rtw-4',
    name: 'Pleated Midi Skirt',
    price: 890,
    currency: 'USD',
    category: 'ready-to-wear',
    description: 'A timeless pleated midi skirt in lightweight crepe. Moves beautifully with every step.',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582142327305-1817d30f8f48?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Cream', 'Black'],
    sizes: ['34', '36', '38', '40'],
  },
  {
    id: 'rtw-5',
    name: 'Oversized Knit Sweater',
    price: 650,
    currency: 'USD',
    category: 'ready-to-wear',
    description: 'Luxuriously soft wool-blend knit with a contemporary oversized fit. Perfect for layering.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Grey', 'Beige', 'White'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'rtw-6',
    name: 'Silk Shirt',
    price: 550,
    currency: 'USD',
    category: 'ready-to-wear',
    description: 'A classic button-down shirt reimagined in fluid silk. Features mother-of-pearl buttons.',
    images: [
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1363&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1374&auto=format&fit=crop'
    ],
    colors: ['White', 'Black', 'Champagne'],
    sizes: ['34', '36', '38', '40', '42'],
  },
  {
    id: 'rtw-7',
    name: 'Tailored Linen Trousers',
    price: 495,
    currency: 'USD',
    category: 'ready-to-wear',
    description: 'High-waisted trousers cut from breathable Italian linen. Wide leg silhouette.',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Sand', 'White', 'Black'],
    sizes: ['34', '36', '38', '40', '42'],
    isNew: true
  },
  {
    id: 'rtw-8',
    name: 'Leather Biker Jacket',
    price: 1890,
    currency: 'USD',
    category: 'ready-to-wear',
    description: 'A wardrobe icon. Soft lambskin leather with silver hardware and a cropped fit.',
    images: [
      'https://images.unsplash.com/photo-1551028919-ac3e9eaa594c?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black'],
    sizes: ['36', '38', '40'],
  },

  // Handbags
  {
    id: 'bag-1',
    name: 'Signature Tote Medium',
    price: 1850,
    currency: 'USD',
    category: 'handbags',
    description: 'Our signature tote, reimagined in grained calfskin. Spacious enough for daily essentials, with gold-tone hardware and a detachable shoulder strap.',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1338&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Tan', 'Black', 'Burgundy'],
    sizes: ['One Size'],
    isBestSeller: true,
  },
  {
    id: 'bag-2',
    name: 'Mini Crossbody',
    price: 1100,
    currency: 'USD',
    category: 'handbags',
    description: 'Compact yet functional. This mini crossbody bag is crafted from embossed crocodile-effect leather with our signature lock mechanism.',
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black', 'Red', 'Emerald'],
    sizes: ['One Size'],
    isNew: true,
  },
  {
    id: 'bag-3',
    name: 'The Classic Clutch',
    price: 850,
    currency: 'USD',
    category: 'handbags',
    description: 'An elegant evening clutch in satin with a jeweled clasp. Perfect for galas and special occasions.',
    images: [
      'https://images.unsplash.com/photo-1566150909168-e4f1a59f9654?q=80&w=1356&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop'
    ],
    colors: ['Black', 'Gold', 'Silver'],
    sizes: ['One Size'],
  },
  {
    id: 'bag-4',
    name: 'Canvas Weekender',
    price: 1450,
    currency: 'USD',
    category: 'handbags',
    description: 'Durable cotton canvas trimmed with Italian leather. The ideal companion for short getaways.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Beige/Brown', 'Black/Black'],
    sizes: ['One Size'],
  },
  {
    id: 'bag-5',
    name: 'Woven Bucket Bag',
    price: 1200,
    currency: 'USD',
    category: 'handbags',
    description: 'Intricately woven leather strips create a unique texture. Features a drawstring closure.',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1357&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['White', 'Tan'],
    sizes: ['One Size'],
  },
  {
    id: 'bag-6',
    name: 'Quilted Shoulder Bag',
    price: 2100,
    currency: 'USD',
    category: 'handbags',
    description: 'Timeless quilted leather with a sliding chain strap. Wear it on the shoulder or crossbody.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1357&auto=format&fit=crop'
    ],
    colors: ['Black', 'Beige', 'Red'],
    sizes: ['Small', 'Medium'],
    isBestSeller: true
  },
  {
    id: 'bag-7',
    name: 'Minimalist Shopper',
    price: 950,
    currency: 'USD',
    category: 'handbags',
    description: 'Clean lines and unlined interior for a lightweight feel. Fits a 13-inch laptop.',
    images: [
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618679092497-2a420b9e8431?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black', 'Cognac'],
    sizes: ['One Size'],
  },
  {
    id: 'bag-8',
    name: 'Structured Top Handle',
    price: 2300,
    currency: 'USD',
    category: 'handbags',
    description: 'Architectural shape with a rigid top handle. A statement piece for the modern wardrobe.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1338&auto=format&fit=crop'
    ],
    colors: ['White', 'Black'],
    sizes: ['One Size'],
  },

  // Shoes
  {
    id: 'shoe-1',
    name: 'Leather Ankle Boots',
    price: 950,
    currency: 'USD',
    category: 'shoes',
    description: 'Sleek ankle boots handcrafted in Italy from smooth calf leather. Featuring a stable block heel and a sharp squared toe.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b69f?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black', 'Cream'],
    sizes: ['36', '37', '38', '39', '40', '41'],
  },
  {
    id: 'shoe-2',
    name: 'Suede Loafers',
    price: 650,
    currency: 'USD',
    category: 'shoes',
    description: 'Classic penny loafers reimagined in soft suede. Leather sole and lining for comfort.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Brown', 'Navy', 'Sand'],
    sizes: ['36', '37', '38', '39', '40'],
  },
  {
    id: 'shoe-3',
    name: 'Strappy Sandals',
    price: 720,
    currency: 'USD',
    category: 'shoes',
    description: 'Minimalist barely-there sandals with a 90mm heel. Perfect for evening wear.',
    images: [
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf6c?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black', 'Gold', 'Nude'],
    sizes: ['36', '37', '38', '39', '40'],
    isNew: true
  },
  {
    id: 'shoe-4',
    name: 'Low Top Sneakers',
    price: 495,
    currency: 'USD',
    category: 'shoes',
    description: 'Premium leather sneakers with a clean, minimal design. Rubber cupsole.',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1312&auto=format&fit=crop'
    ],
    colors: ['White', 'Black'],
    sizes: ['36', '37', '38', '39', '40', '41'],
  },
  {
    id: 'shoe-5',
    name: 'Knee-High Boots',
    price: 1250,
    currency: 'USD',
    category: 'shoes',
    description: 'Structured knee-high boots in polished leather. Side zip closure.',
    images: [
      'https://images.unsplash.com/photo-1620655381045-318e9766ee26?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black', 'Burgundy'],
    sizes: ['36', '37', '38', '39', '40'],
  },
  {
    id: 'shoe-6',
    name: 'Pointed Toe Pumps',
    price: 695,
    currency: 'USD',
    category: 'shoes',
    description: 'The essential work-to-dinner shoe. 85mm stiletto heel.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black', 'Nude', 'Red'],
    sizes: ['36', '37', '38', '39', '40'],
    isBestSeller: true
  },
  {
    id: 'shoe-7',
    name: 'Platform Mules',
    price: 580,
    currency: 'USD',
    category: 'shoes',
    description: 'Retro-inspired mules with a chunky platform sole. Leather upper.',
    images: [
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Tan', 'Black'],
    sizes: ['36', '37', '38', '39'],
  },
  {
    id: 'shoe-8',
    name: 'Velvet Slippers',
    price: 450,
    currency: 'USD',
    category: 'shoes',
    description: 'Embroidered velvet slippers for lounging in luxury.',
    images: [
      'https://images.unsplash.com/photo-1574365738676-465451a31d9b?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Navy', 'Black'],
    sizes: ['36', '37', '38', '39', '40'],
  },

  // Accessories
  {
    id: 'acc-1',
    name: 'Gold Chain Necklace',
    price: 450,
    currency: 'USD',
    category: 'accessories',
    description: 'An 18k gold-plated chain necklace with a textured finish. A timeless statement piece designed to be layered or worn alone.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Gold'],
    sizes: ['One Size'],
  },
  {
    id: 'acc-2',
    name: 'Silk Scarf',
    price: 295,
    currency: 'USD',
    category: 'accessories',
    description: 'Printed in Como, Italy, this 100% silk twill scarf features an archival floral motif. Hand-rolled edges complete this luxurious accessory.',
    images: [
      'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Floral Multi'],
    sizes: ['90x90cm'],
  },
  {
    id: 'acc-3',
    name: 'Oversized Sunglasses',
    price: 350,
    currency: 'USD',
    category: 'accessories',
    description: 'Acetate frames with gradient lenses. 100% UV protection.',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black/Black', 'Tortoise/Brown'],
    sizes: ['One Size'],
    isBestSeller: true
  },
  {
    id: 'acc-4',
    name: 'Leather Belt',
    price: 420,
    currency: 'USD',
    category: 'accessories',
    description: 'Reversible leather belt featuring our iconic logo buckle in brass.',
    images: [
      'https://images.unsplash.com/photo-1624223046261-3a059d646d6b?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black/Brown'],
    sizes: ['80', '85', '90', '95'],
  },
  {
    id: 'acc-5',
    name: 'Pearl Drop Earrings',
    price: 550,
    currency: 'USD',
    category: 'accessories',
    description: 'Freshwater pearls suspended from gold vermeil hoops.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=1338&auto=format&fit=crop'
    ],
    colors: ['Gold/Pearl'],
    sizes: ['One Size'],
    isNew: true
  },
  {
    id: 'acc-6',
    name: 'Cashmere Beanie',
    price: 195,
    currency: 'USD',
    category: 'accessories',
    description: 'Ribbed knit cashmere beanie for cold weather elegance.',
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521319209503-46e387f3e46c?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Grey', 'Black', 'Cream'],
    sizes: ['One Size'],
  },
  {
    id: 'acc-7',
    name: 'Minimalist Watch',
    price: 1200,
    currency: 'USD',
    category: 'accessories',
    description: 'Swiss movement watch with a stainless steel mesh strap and sapphire crystal.',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1399&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1294&auto=format&fit=crop'
    ],
    colors: ['Silver', 'Rose Gold'],
    sizes: ['38mm', '42mm'],
  },
  {
    id: 'acc-8',
    name: 'Leather Wallet',
    price: 350,
    currency: 'USD',
    category: 'accessories',
    description: 'Bifold wallet with eight card slots and a bill compartment.',
    images: [
      'https://images.unsplash.com/photo-1627123424574-18bd75f2b964?q=80&w=1287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1287&auto=format&fit=crop'
    ],
    colors: ['Black', 'Tan'],
    sizes: ['One Size'],
  }
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "The Art of Slow Fashion",
    excerpt: "Why we believe in quality over quantity, and how building a capsule wardrobe can transform your daily ritual.",
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1550614000-4b9519e09d43?q=80&w=2070&auto=format&fit=crop",
    date: "October 12, 2023"
  },
  {
    id: 2,
    title: "Milan Fashion Week Highlights",
    excerpt: "A curated look at the trends defining the upcoming season, from oversized tailoring to the return of minimalism.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    date: "September 28, 2023"
  },
  {
    id: 3,
    title: "Material Focus: Cashmere",
    excerpt: "Understanding the origins of the world's finest fiber and how to care for your cashmere pieces to ensure they last a lifetime.",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1364&auto=format&fit=crop",
    date: "November 5, 2023"
  },
  {
    id: 4,
    title: "In Conversation: Elena Rossi",
    excerpt: "Our creative director discusses the inspiration behind the Spring/Summer 2024 collection and her vision for the future of Eleven.",
    category: "Interviews",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1264&auto=format&fit=crop",
    date: "August 15, 2023"
  },
  {
    id: 5,
    title: "The Ultimate Guide to Leather Care",
    excerpt: "Preserve the beauty of your leather goods with our expert tips on cleaning, conditioning, and storage.",
    category: "Care",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    date: "July 22, 2023"
  },
  {
    id: 6,
    title: "Destinations: Lake Como",
    excerpt: "A travel diary from our recent campaign shoot in the breathtaking scenery of Lake Como, Italy.",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1506057527569-640245203362?q=80&w=1974&auto=format&fit=crop",
    date: "June 10, 2023"
  }
];