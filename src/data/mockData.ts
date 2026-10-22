import { Category, Coupon, Order, Product, Review } from '../types';

export const STORE_SETTINGS = {
  name: 'BanglaXpress',
  tagline: 'Your Trusted Express E-Commerce in Bangladesh',
  phone: '09678-123456',
  whatsapp: '+8801700123456',
  email: 'support@banglaxpress.store',
  address: 'Level 4, House 12, Road 7, Dhanmondi, Dhaka-1205, Bangladesh',
  deliveryInsideDhaka: 60,
  deliveryOutsideDhaka: 120,
  freeDeliveryThreshold: 3000,
  estimatedDeliveryDhaka: '24 - 48 Hours',
  estimatedDeliveryNationwide: '48 - 72 Hours',
  bkashNumber: '01700-123456 (Merchant)',
  nagadNumber: '01800-654321 (Merchant)',
  rocketNumber: '01900-987654 (Merchant)',
};

export const CATEGORIES: Category[] = [
  {
    id: 'cat-cereals-kernels',
    name: 'Cereals/Kernels',
    banglaName: 'সিরিয়ালস ও কার্নেল',
    slug: 'cereals-kernels',
    iconName: 'Wheat',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
    itemCount: 18,
    subcategories: ['Sweet Corn Kernels', 'Whole Oats & Barley', 'Wheat Kernels', 'Cereal Flakes'],
  },
  {
    id: 'cat-grains',
    name: 'Grains',
    banglaName: 'দানা শস্য',
    slug: 'grains',
    iconName: 'Sprout',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
    itemCount: 24,
    subcategories: ['Aromatic Polao Rice', 'Brown & Red Rice', 'Millet Grains', 'Organic Whole Grains'],
  },
  {
    id: 'cat-pulse',
    name: 'Pulse',
    banglaName: 'ডাল ও ডালজাতীয় শস্য',
    slug: 'pulse',
    iconName: 'CircleDot',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
    itemCount: 22,
    subcategories: ['Red Lentils (মসুর ডাল)', 'Mung Dal (মুগ ডাল)', 'Chickpeas (ছোলা বুট)', 'Black Gram (মাষকলাই)'],
  },
  {
    id: 'cat-spice',
    name: 'Spice',
    banglaName: 'খাঁটি মসলা',
    slug: 'spice',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80',
    itemCount: 35,
    subcategories: ['Pure Saffron (জাফরান)', 'Green Cardamom (এলাচ)', 'Cloves & Cinnamon (দারুচিনি)', 'Himalayan Organic Spices'],
  },
  {
    id: 'cat-mehendi',
    name: 'Mehendi',
    banglaName: 'মেহেন্দি ও ভেষজ যত্ন',
    slug: 'mehendi',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80',
    itemCount: 16,
    subcategories: ['Organic Henna Powder', 'Natural Mehendi Cones', 'Herbal Hair Henna', 'Mehendi Oil & Stencils'],
  },
  {
    id: 'cat-nuts-fruits',
    name: 'Nuts & Fruits',
    banglaName: 'বাদাম ও ড্রাই ফ্রুটস',
    slug: 'nuts-fruits',
    iconName: 'Apple',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
    itemCount: 28,
    subcategories: ['Kashmiri Walnuts (আখরোট)', 'Mamra Almonds (কাঠবাদাম)', 'Pistachios & Cashews (কাজুবাদাম)', 'Dried Figs & Dates (খুরমা)'],
  },
  {
    id: 'cat-butters',
    name: 'Butters',
    banglaName: 'পিওর বাটার ও ঘি',
    slug: 'butters',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&auto=format&fit=crop&q=80',
    itemCount: 14,
    subcategories: ['Desi Ghee (গাওয়া ঘি)', 'Artisanal Churned Butter', 'Peanut & Almond Butter', 'Organic Cultured Butter'],
  },
  {
    id: 'cat-cattle-feed',
    name: 'Cattle Feed',
    banglaName: 'গবাদি পশুর খাদ্য',
    slug: 'cattle-feed',
    iconName: 'Beef',
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&auto=format&fit=crop&q=80',
    itemCount: 20,
    subcategories: ['Dairy Cattle Pellets', 'Fattening Booster Feed', 'Wheat Bran (গমের ভুসি)', 'Mineral Salt Licks'],
  },
  {
    id: 'cat-chicken-feed',
    name: 'Chicken Feed',
    banglaName: 'মুরগি ও পোল্ট্রি খাদ্য',
    slug: 'chicken-feed',
    iconName: 'Egg',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
    itemCount: 19,
    subcategories: ['Broiler Starter & Grower', 'Layer Mash Feed', 'Deshi Chicken Grain Mix', 'Crushed Corn Feed'],
  },
  {
    id: 'cat-fish-feed',
    name: 'Fish Feed',
    banglaName: 'মাছের খাদ্য',
    slug: 'fish-feed',
    iconName: 'Fish',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&auto=format&fit=crop&q=80',
    itemCount: 17,
    subcategories: ['Floating Fish Pellets', 'Sinking Aquaculture Feed', 'Tilapia & Pangas Growth Feed', 'Fingerling Nursery Feed'],
  },
  {
    id: 'cat-bird-feed',
    name: 'Bird Feed',
    banglaName: 'পাখির খাবার',
    slug: 'bird-feed',
    iconName: 'Bird',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?w=600&auto=format&fit=crop&q=80',
    itemCount: 15,
    subcategories: ['Pigeon Balanced Mix', 'Parrot & Cockatiel Seeds', 'Canary & Finch Seed Mix', 'Cuttlefish Bone & Calcium'],
  },
  {
    id: 'cat-cat-feed',
    name: 'Cat Feed',
    banglaName: 'বিড়ালের খাবার',
    slug: 'cat-feed',
    iconName: 'Cat',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80',
    itemCount: 25,
    subcategories: ['Dry Cat Kibble', 'Ocean Fish Wet Food', 'Kitten Growth Nutrition', 'Cat Dental Treats'],
  },
  {
    id: 'cat-others',
    name: 'Others',
    banglaName: 'অন্যান্য পণ্য',
    slug: 'others',
    iconName: 'Package',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
    itemCount: 30,
    subcategories: ['Bio-Organic Fertilizers', 'Feeding Bowls & Dispensers', 'Farm Storage & Packaging', 'Agricultural Accessories'],
  },
];

export interface CollectionItem {
  id: string;
  title: string;
  productsCount: number;
  conditions: string;
  image: string;
  badgeLogoText?: string;
  categoryMatch?: string;
}

export const INITIAL_COLLECTIONS: CollectionItem[] = [
  {
    id: 'col-1',
    title: 'Grains & Cereals',
    productsCount: 18,
    conditions: 'Product category is equal to Grains or Cereals/Kernels',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
    badgeLogoText: 'GRAINS & CEREALS'
  },
  {
    id: 'col-2',
    title: 'Pure Spices & Saffron',
    productsCount: 12,
    conditions: 'Product category is equal to Spice',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80',
    badgeLogoText: 'PURE SPICES'
  },
  {
    id: 'col-3',
    title: 'Nuts & Dry Fruits',
    productsCount: 15,
    conditions: 'Product category is equal to Nuts & Fruits',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
    badgeLogoText: 'NUTS & DRY FRUITS'
  },
  {
    id: 'col-4',
    title: 'Artisanal Butters & Ghee',
    productsCount: 8,
    conditions: 'Product category is equal to Butters',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&auto=format&fit=crop&q=80',
    badgeLogoText: 'BUTTERS & GHEE'
  },
  {
    id: 'col-5',
    title: 'Livestock & Poultry Feed',
    productsCount: 24,
    conditions: 'Product category is equal to Cattle Feed or Chicken Feed',
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&auto=format&fit=crop&q=80',
    badgeLogoText: 'ANIMAL FEEDS'
  },
  {
    id: 'col-6',
    title: 'Fish & Pet Feed',
    productsCount: 19,
    conditions: 'Product category is equal to Fish Feed, Bird Feed or Cat Feed',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80',
    badgeLogoText: 'PET & AQUA CARE'
  },
  {
    id: 'col-7',
    title: 'Organic Henna & Mehendi',
    productsCount: 10,
    conditions: 'Product category is equal to Mehendi',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80',
    badgeLogoText: 'MEHENDI CARE'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Golden Sweet Corn Kernels & Whole Oats Flakes Blend (1kg)',
    banglaName: 'প্রিমিয়াম গোল্ডেন সুইট কর্ন ও ওটস কার্নেল মিক্স (১ কেজি)',
    slug: 'golden-sweet-corn-kernels-oats-flakes-blend',
    category: 'Cereals/Kernels',
    subcategory: 'Sweet Corn Kernels',
    price: 450,
    originalPrice: 650,
    discountPercent: 31,
    rating: 4.9,
    reviewCount: 84,
    images: [
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 5,
    soldCount: 310,
    isFlashDeal: true,
    flashDealEnd: '2026-10-25T23:59:59',
    isFeatured: true,
    isTrending: true,
    badge: 'FLASH DEAL',
    brand: 'Kashmir Harvest',
    sku: 'KP-CR-001',
    shortDescription: 'Golden sun-dried sweet corn kernels blended with high-fiber rolled oats for healthy breakfast and cooking.',
    description: 'Carefully sorted and cleaned high-grade golden corn kernels and hearty whole oats. Naturally rich in dietary fiber, essential vitamins, and wholesome energy for the whole family.',
    banglaDescription: 'সূর্যালোকে শুকানো সোনালী মিষ্টি ভুট্টার কার্নেল ও পুষ্টিকর ওটসের নিখুঁত ব্লেন্ড। সকালের নাস্তা কিংবা স্বাস্থ্যকর রান্নার জন্য দারুণ উপযোগী।',
    features: [
      '100% Natural Whole Grain Kernels',
      'No Added Preservatives or Artificial Flavors',
      'High in Dietary Fiber and Antioxidants',
      'Airtight Moisture-Proof Food-Grade Seal'
    ],
    specifications: {
      'Net Weight': '1 kg',
      'Source': 'Himalayan Foothills',
      'Shelf Life': '12 Months',
      'Storage': 'Store in cool and dry place'
    },
    warranty: '100% Quality & Freshness Guarantee',
    tags: ['cereals', 'corn kernels', 'oats', 'healthy grains', 'breakfast']
  },
  {
    id: 'prod-2',
    name: 'Aromatic Chinigura Kalijira Polao Rice & Wild Grains (5kg)',
    banglaName: 'খাঁটি চিনিগুঁড়া ও কালোজিরা সুগন্ধি পোলাও চাল (৫ কেজি)',
    slug: 'aromatic-chinigura-kalijira-polao-rice',
    category: 'Grains',
    subcategory: 'Aromatic Polao Rice',
    price: 680,
    originalPrice: 850,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 165,
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 42,
    soldCount: 520,
    isFlashDeal: true,
    flashDealEnd: '2026-10-25T23:59:59',
    isFeatured: true,
    isTrending: true,
    badge: 'BEST SELLER',
    brand: 'Kashmir Heritage',
    sku: 'KP-GR-002',
    shortDescription: 'Naturally aged small grain aromatic Chinigura rice with unmatched fragrance, perfect for biryani, polao, and khichuri.',
    description: 'Traditional heritage grain cultivated in chemical-free river delta soil. Each grain is carefully aged to bring out its distinctive sweet aroma and non-sticky fluffy texture after cooking.',
    banglaDescription: 'আসল সুবাসযুক্ত পুরাতন চিনিগুঁড়া পোলাও চাল। পোলাও, বিরিয়ানি ও পায়েস তৈরিতে দারুণ সুগন্ধ ও স্বাদ ছড়ায়।',
    features: [
      'Naturally Aged Small Grain Rice',
      'Rich Natural Aroma and Non-Sticky Cooking',
      'Triple-Cleaned Free from Stones and Impurities',
      'Ideal for Festive Biryani & Polao'
    ],
    specifications: {
      'Net Weight': '5 kg',
      'Purity': '100% Unadulterated',
      'Grain Type': 'Short Aromatic A-Grade',
      'Packaging': 'Heavy-duty woven bag with handle'
    },
    warranty: 'Money-back Satisfaction Guarantee',
    tags: ['grains', 'rice', 'polao rice', 'chinigura', 'organic grains']
  },
  {
    id: 'prod-3',
    name: 'Organic Deshi Masoor Dal / Small Grain Red Lentils (2kg)',
    banglaName: 'অর্গানিক দেশি ছোট দানার মসুর ডাল (২ কেজি)',
    slug: 'organic-deshi-masoor-dal-red-lentils',
    category: 'Pulse',
    subcategory: 'Red Lentils (মসুর ডাল)',
    price: 340,
    originalPrice: 420,
    discountPercent: 19,
    rating: 4.8,
    reviewCount: 112,
    images: [
      'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 3,
    soldCount: 410,
    isFlashDeal: false,
    isFeatured: true,
    isTrending: false,
    brand: 'Green Valley Organic',
    sku: 'KP-PL-003',
    shortDescription: 'Pure small grain crimson red lentils, quick to cook, silky smooth texture, rich in plant protein and iron.',
    description: 'Deshi red masoor dal with high protein content and effortless cooking. Boils into a delicious creamy broth without requiring excessive time or pressure cooking.',
    banglaDescription: 'ছোট দানার দেশি মসুর ডাল। খুব দ্রুত সিদ্ধ হয় এবং রান্নায় আসে অসাধারণ স্বাদ ও ঘন টেক্সচার।',
    features: [
      'Deshi Small Seed Red Lentils',
      'High Plant Protein & Essential Iron',
      'Unpolished with No Synthetic Color Polish',
      'Quick-Cooking and Easy to Digest'
    ],
    specifications: {
      'Net Weight': '2 kg',
      'Origin': 'Locally Farmed Organic',
      'Polish': 'Unpolished Zero Dye',
      'Shelf Life': '1 Year'
    },
    warranty: 'Guaranteed Unpolished & Natural',
    tags: ['pulse', 'dal', 'masoor dal', 'lentils', 'protein']
  },
  {
    id: 'prod-4',
    name: 'Original Kashmiri Mongra Saffron Grade-A (1g Airtight Box)',
    banglaName: '১০০% খাঁটি কাশ্মীরি মঙ্গরা জাফরান (১ গ্রাম প্রিমিয়াম টিন)',
    slug: 'original-kashmiri-mongra-saffron',
    category: 'Spice',
    subcategory: 'Pure Saffron (জাফরান)',
    price: 950,
    originalPrice: 1450,
    discountPercent: 34,
    rating: 5.0,
    reviewCount: 240,
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 18,
    soldCount: 680,
    isFlashDeal: true,
    flashDealEnd: '2026-10-25T23:59:59',
    isFeatured: true,
    isTrending: true,
    badge: 'TOP DEAL',
    brand: 'Kashmir Premier',
    sku: 'KP-SP-004',
    shortDescription: 'Highest Grade Mongra Saffron freshly harvested from Pampore, Kashmir. Deep red stigmas with pure aroma and rich golden hue.',
    description: 'Hand-picked Grade-A Mongra stigmas from Kashmir. Free of any yellow style or floral parts. A single strand infuses a radiant golden yellow color and heavenly aroma into milk, desserts, and biryanis.',
    banglaDescription: 'কাশ্মীরের পামপোর ভ্যালি থেকে সংগৃহীত সর্বোচ্চ গ্রেডের মঙ্গরা জাফরান। এক চিমটি জাফরানেই তৈরি হয় মনোমুগ্ধকর সুবাস ও খাঁটি সোনালী রঙ।',
    features: [
      '100% Pure Kashmiri Mongra Stigmas (Zero Yellow Tail)',
      'High Crocin & Safranal Content for Maximum Potency',
      'Airtight Moisture-Sealed Acrylic Box',
      'Tested for Natural Purity and Authentic Origin'
    ],
    specifications: {
      'Net Weight': '1 Gram',
      'Grade': 'Grade-A Mongra Export Quality',
      'Harvest Region': 'Pampore, Kashmir Valley',
      'Packaging': 'Velvet-lined protective box'
    },
    warranty: 'Certified 100% Pure Kashmir Mongra',
    tags: ['saffron', 'spice', 'kashmir', 'mongra', 'zafran']
  },
  {
    id: 'prod-5',
    name: 'Organic Rajasthani Herbal Mehendi Henna Cones (Pack of 12)',
    banglaName: 'অর্গানিক রাজস্থানি হারবাল মেহেন্দি কোন (১২ পিস বক্স)',
    slug: 'organic-rajasthani-herbal-mehendi-cones',
    category: 'Mehendi',
    subcategory: 'Natural Mehendi Cones',
    price: 360,
    originalPrice: 550,
    discountPercent: 35,
    rating: 4.8,
    reviewCount: 96,
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 50,
    soldCount: 380,
    isFlashDeal: false,
    isFeatured: true,
    isTrending: false,
    brand: 'Sojat Henna',
    sku: 'KP-MH-005',
    shortDescription: '100% natural organic henna paste cone with Nilgiri and eucalyptus oils for rich dark reddish-maroon stain without chemicals.',
    description: 'Triple-filtered fine henna paste filled in fine-tipped ergonomic cones. Made with freshly ground Sojat henna leaves and natural essential oils. Dermatologically safe, zero PPD, and guaranteed deep color.',
    banglaDescription: 'খাঁটি রাজস্থানি সোযাত পাতার নির্যাস ও ইউক্যালিপটাস তেল সমৃদ্ধ প্রাকৃতিক মেহেন্দি কোন। কোনো ক্ষতিকর কেমিক্যাল বা পিপিডি ছাড়া গাঢ় মেরুন রঙ নিশ্চিত করে।',
    features: [
      '100% Pure Herbal Henna from Sojat, Rajasthan',
      'Zero PPD, No Toxic Chemicals or Artificial Dyes',
      'Fine Precision Tip for Intricate Bridal Designs',
      'Long-Lasting Deep Rich Stain up to 14 Days'
    ],
    specifications: {
      'Pack Size': '12 Cones per Box',
      'Weight': '35g each cone',
      'Ingredients': 'Henna Powder, Eucalyptus Oil, Clove Oil, Water',
      'Safety': 'Skin-friendly herbal formula'
    },
    warranty: 'Safe & Natural Color Guarantee',
    tags: ['mehendi', 'henna', 'bridal henna', 'organic mehendi', 'herbal care']
  },
  {
    id: 'prod-6',
    name: 'Kashmiri Royal Kagzi Walnuts & Mamra Almonds Combo (1kg)',
    banglaName: 'রয়েল কাশ্মীরি কাগজি আখরোট ও মামরা কাঠবাদাম কম্বো (১ কেজি)',
    slug: 'kashmiri-royal-kagzi-walnuts-mamra-almonds',
    category: 'Nuts & Fruits',
    subcategory: 'Kashmiri Walnuts (আখরোট)',
    price: 1490,
    originalPrice: 2100,
    discountPercent: 29,
    rating: 4.9,
    reviewCount: 178,
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 4,
    soldCount: 490,
    isFlashDeal: true,
    flashDealEnd: '2026-10-25T23:59:59',
    isFeatured: true,
    isTrending: true,
    badge: 'POPULAR',
    brand: 'Kashmir Premier',
    sku: 'KP-NF-006',
    shortDescription: 'Super premium thin-shell Kagzi walnuts with oil-rich kernels paired with genuine Kashmiri Mamra almonds.',
    description: 'Crush the walnut shell easily with bare hands. These snow-white walnut halves and Mamra almonds are packed with Omega-3 fatty acids, vitamin E, and natural oils for heart and brain vitality.',
    banglaDescription: 'হাতে চাপ দিলেই ভেঙে যাওয়া পাতলা কাগজি খোসার তাজা কাশ্মীরি আখরোট ও তেলসমৃদ্ধ আসল মামরা কাঠবাদামের প্রিমিয়াম কম্বো প্যাক।',
    features: [
      'Thin Paper-Shell Easy to Crack with Bare Hands',
      'Full Snow-White Kernels with High Natural Oil Content',
      'Rich in Brain-Boosting Omega-3 and Antioxidants',
      'Zero Bleach, Freshly Shelled Crop'
    ],
    specifications: {
      'Combo Net Weight': '1 kg (500g Walnuts + 500g Mamra Almonds)',
      'Processing': 'Sun-dried, raw and unpasteurized',
      'Shelf Life': '9 Months',
      'Origin': 'Anantnag & Shopian, Kashmir'
    },
    warranty: 'Fresh Crop Purity Guarantee',
    tags: ['nuts', 'walnuts', 'almonds', 'dry fruits', 'kashmiri nuts']
  },
  {
    id: 'prod-7',
    name: 'Artisanal Pure Desi Cow Ghee & Churned Butter (500g Glass Jar)',
    banglaName: 'খাঁটি দানাদার গাওয়া ঘি ও ট্র্যাডিশনাল বাটার (৫০০ গ্রাম)',
    slug: 'artisanal-pure-desi-cow-ghee-butter',
    category: 'Butters',
    subcategory: 'Desi Ghee (গাওয়া ঘি)',
    price: 890,
    originalPrice: 1250,
    discountPercent: 29,
    rating: 4.9,
    reviewCount: 135,
    images: [
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 22,
    soldCount: 330,
    isFlashDeal: false,
    isFeatured: true,
    isTrending: false,
    brand: 'Farm Fresh Pure',
    sku: 'KP-BT-007',
    shortDescription: 'Golden grainy pure cow ghee prepared using traditional bilona churning. Aromatic, rich, and 100% natural.',
    description: 'Prepared using traditional slow-simmering of cultured butter churned from pasture-grazed cow milk. Granular texture, divine aroma, and zero artificial colors or vanaspati blends.',
    banglaDescription: 'ঘরোয়া পদ্ধতিতে তৈরি আসল দানাদার খাঁটি গাওয়া ঘি। অতুলনীয় সুবাস ও খাঁটি স্বাদ যা গরম ভাতে বা রান্নায় যোগ করে পরম তৃপ্তি।',
    features: [
      'Traditional Bilona Churned Pure Cow Milk Ghee',
      'Naturally Granular (দানাদার) Golden Texture',
      'No Added Chemicals, Starch or Vegetable Fat',
      'Airtight Hygienic Glass Jar Packaging'
    ],
    specifications: {
      'Net Weight': '500 Grams',
      'Fat Content': '99.7% Pure Milk Fat',
      'Packaging': 'Food-Grade Glass Jar',
      'Shelf Life': '12 Months at Room Temperature'
    },
    warranty: '100% Pure Cow Ghee or 2x Money Back',
    tags: ['ghee', 'butter', 'cow ghee', 'desi ghee', 'organic butter']
  },
  {
    id: 'prod-8',
    name: 'High-Yield Dairy Cattle Balanced Feed Pellets (25kg Bag)',
    banglaName: 'উচ্চ পুষ্টিসমৃদ্ধ ডেইরি ক্যাটেল ফিড ও পুষ্টিকর দানাদার খাদ্য (২৫ কেজি)',
    slug: 'high-yield-dairy-cattle-feed-pellets',
    category: 'Cattle Feed',
    subcategory: 'Dairy Cattle Pellets',
    price: 1750,
    originalPrice: 2200,
    discountPercent: 20,
    rating: 4.7,
    reviewCount: 88,
    images: [
      'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 15,
    soldCount: 290,
    isFlashDeal: false,
    isFeatured: true,
    isTrending: false,
    brand: 'AgroMax Nutrition',
    sku: 'KP-CF-008',
    shortDescription: 'Balanced protein and mineral pellets formulated to boost dairy cow milk production and herd vitality.',
    description: 'Specially engineered by veterinary nutritionists for lactating cows and bulls. Contains corn, soybean meal, wheat bran, calcium, phosphorus, and essential vitamins for peak milk yield and health.',
    banglaDescription: 'দুগ্ধবতী গাভী ও মোটাতাজাকরণ গরুর জন্য বৈজ্ঞানিক ফর্মুলায় প্রস্তুত ব্যালেন্সড পুষ্টিসমৃদ্ধ দানাদার ক্যাটেল ফিড। দুধের উৎপাদন বাড়ায় ও হজমশক্তি বৃদ্ধি করে।',
    features: [
      '18% Crude Protein with High Digestibility',
      'Fortified with Calcium, Phosphorus & Vitamin ADE',
      'Prevents Acidosis and Supports Healthy Rumen',
      'Increases Milk Yield and Butterfat Content'
    ],
    specifications: {
      'Bag Weight': '25 kg',
      'Pellet Size': '6mm Steam Extruded',
      'Crude Protein': '18% Min',
      'Crude Fiber': '10% Max'
    },
    warranty: 'Veterinary Certified Feed Quality',
    tags: ['cattle feed', 'dairy feed', 'cow feed', 'livestock', 'agro nutrition']
  },
  {
    id: 'prod-9',
    name: 'Nutri-Grow Layer & Broiler Chicken Crushed Mash Feed (10kg)',
    banglaName: 'লেয়ার ও ব্রয়লার মুরগির ব্যালেন্সড পুষ্টিকর ফিড (১০ কেজি)',
    slug: 'nutri-grow-layer-broiler-chicken-feed',
    category: 'Chicken Feed',
    subcategory: 'Broiler Starter & Grower',
    price: 820,
    originalPrice: 1050,
    discountPercent: 22,
    rating: 4.8,
    reviewCount: 72,
    images: [
      'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 25,
    soldCount: 360,
    isFlashDeal: true,
    flashDealEnd: '2026-10-25T23:59:59',
    isFeatured: false,
    isTrending: true,
    brand: 'PoultryPro Feeds',
    sku: 'KP-CH-009',
    shortDescription: 'Balanced poultry feed rich in amino acids, corn crumbles, and prebiotics for rapid growth and optimal egg production.',
    description: 'Complete balanced poultry diet suitable for both commercial farms and backyard poultry. Formulated with yellow corn, dehulled soy, essential amino acids, and minerals for disease resistance.',
    banglaDescription: 'ব্রয়লার ও লেয়ার মুরগির জন্য সুষম দানাদার খাদ্য। দ্রুত শারীরিক বৃদ্ধি, হাড়ের শক্তি এবং নিয়মিত ডিম উৎপাদন বৃদ্ধিতে সহায়তা করে।',
    features: [
      'Balanced Protein & Amino Acid Formula',
      'Boosts Egg Laying Rate and Shell Thickness',
      'Enriched with Probiotics for Gut Health',
      'Clean Dust-Free Mash Crumbles'
    ],
    specifications: {
      'Bag Weight': '10 kg',
      'Protein': '19.5% Min',
      'Form': 'Crumbled Mash',
      'Target': 'Broiler, Layer & Deshi Poultry'
    },
    warranty: 'Quality Assurance Guaranteed',
    tags: ['chicken feed', 'poultry feed', 'broiler feed', 'layer mash', 'bird feed']
  },
  {
    id: 'prod-10',
    name: 'Aqua-Max Floating High-Protein Fish Feed Pellets (5kg)',
    banglaName: 'অ্যাকুয়া-ম্যাক্স হাই প্রোটিন ফ্লোটিং মাছের খাবার (৫ কেজি)',
    slug: 'aqua-max-floating-fish-feed-pellets',
    category: 'Fish Feed',
    subcategory: 'Floating Fish Pellets',
    price: 580,
    originalPrice: 750,
    discountPercent: 23,
    rating: 4.7,
    reviewCount: 64,
    images: [
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555169062-013468b47731?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 2,
    soldCount: 280,
    isFlashDeal: false,
    isFeatured: true,
    isTrending: false,
    brand: 'AquaFeed Prime',
    sku: 'KP-FF-010',
    shortDescription: 'Premium floating fish feed pellets with 32% protein for Tilapia, Pangas, Koi, and Carp rapid growth.',
    description: 'Floating fish feed pellets designed to remain buoyant on the water surface for over 45 minutes, preventing water pollution and allowing precise feeding control.',
    banglaDescription: 'পানিতে ভাসা (ফ্লোটিং) উচ্চ প্রোটিনসমৃদ্ধ মাছের খাদ্য। তেলাপিয়া, পাঙ্গাস, কার্প ও শিং মাছের দ্রুত ওজন ও সাইজ বৃদ্ধিতে কার্যকরী।',
    features: [
      '32% High Marine & Plant Protein Formulation',
      'Floats for 45+ Minutes without Clouding Pond Water',
      'Enhanced with Spirulina for Vibrant Fish Health',
      'High Feed Conversion Ratio (FCR)'
    ],
    specifications: {
      'Weight': '5 kg',
      'Pellet Size': '2mm / 3mm Floating',
      'Crude Protein': '32% Min',
      'Crude Fat': '5% Min'
    },
    warranty: 'Fresh Fish Feed Guarantee',
    tags: ['fish feed', 'aqua feed', 'floating feed', 'carp feed', 'tilapia']
  },
  {
    id: 'prod-11',
    name: 'Multigrain Exotic Bird & Pigeon Seed Booster Mix (2kg)',
    banglaName: 'পুষ্টিকর মাল্টিগ্রেইন পাখির খাবার কবুতর ও টিয়া স্পেশাল মিক্স (২ কেজি)',
    slug: 'multigrain-bird-pigeon-seed-mix',
    category: 'Bird Feed',
    subcategory: 'Pigeon Balanced Mix',
    price: 390,
    originalPrice: 520,
    discountPercent: 25,
    rating: 4.9,
    reviewCount: 91,
    images: [
      'https://images.unsplash.com/photo-1555169062-013468b47731?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 30,
    soldCount: 410,
    isFlashDeal: false,
    isFeatured: true,
    isTrending: false,
    brand: 'FeatherCare',
    sku: 'KP-BF-011',
    shortDescription: 'Nutrient-rich seed mix featuring canary grass, red millet, safflower, green peas, and crushed corn for all bird types.',
    description: 'Triple-cleaned gourmet seed mix designed for pigeons, budgies, parrots, finches, and doves. Free from dust, filler chaff, and synthetic additives.',
    banglaDescription: 'কবুতর, টিয়া, বাজরিগার ও কোকোটেল পাখির জন্য সম্পূর্ণ পুষ্টিকর মাল্টিগ্রেইন সিড মিক্স। পালকের উজ্জ্বলতা ও রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।',
    features: [
      '12-Seed Natural Formulation for Exotic Birds & Pigeons',
      'Triple-Cleaned Dust-Free Grain & Seed Blend',
      'Natural Calcium and Vitamin E for Lustrous Feathers',
      'Vacuum Sealed for Pest-Free Storage'
    ],
    specifications: {
      'Weight': '2 kg',
      'Composition': 'Millet, Canary Seed, Safflower, Sunflower, Peas',
      'Purity': '99.5% Weed-Free',
      'Target': 'Pigeons, Parrots, Budgies, Finches'
    },
    warranty: '100% Clean Seed Guarantee',
    tags: ['bird feed', 'pigeon seed', 'parrot food', 'pet birds', 'bird mix']
  },
  {
    id: 'prod-12',
    name: 'Ocean Fish & Salmon Dry Cat Food Kibbles for Adult Cats (1.2kg)',
    banglaName: 'ওশেন ফিশ ও স্যামন ড্রাইড ক্যাট ফুড কিবলস (১.২ কেজি)',
    slug: 'ocean-fish-salmon-dry-cat-food',
    category: 'Cat Feed',
    subcategory: 'Dry Cat Kibble',
    price: 720,
    originalPrice: 950,
    discountPercent: 24,
    rating: 4.8,
    reviewCount: 110,
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 16,
    soldCount: 390,
    isFlashDeal: true,
    flashDealEnd: '2026-10-25T23:59:59',
    isFeatured: false,
    isTrending: true,
    badge: 'PET FAVORITE',
    brand: 'Whiskers Delight',
    sku: 'KP-CF-012',
    shortDescription: 'Delicious real ocean fish and salmon kibbles enriched with Taurine, Omega-6, and Vitamin E for shiny coat and urinary tract health.',
    description: 'Complete and balanced dry food for cats of all breeds. Formulated with real deep-sea ocean fish and salmon. Promotes healthy eyes, lean muscles, clean teeth, and prevents hairballs.',
    banglaDescription: 'আসল সামুদ্রিক মাছ ও স্যামনের পুষ্টিগুণে তৈরি বিড়ালের সুস্বাদু শুকনো খাবার। লোম পড়া রোধ করে, চোখের দৃষ্টি ভালো রাখে এবং দাঁতের স্বাস্থ্য বজায় রাখে।',
    features: [
      'Real Ocean Fish & Wild Salmon Protein',
      'Enriched with Taurine for Healthy Heart & Vision',
      'Omega-3 & 6 for Silky Glossy Fur Coat',
      'Anti-Hairball and Urinary Health Formulation'
    ],
    specifications: {
      'Net Weight': '1.2 kg',
      'Crude Protein': '30% Min',
      'Crude Fat': '12% Min',
      'Suitable For': 'Adult Cats (1+ years)'
    },
    warranty: '100% Pet Satisfaction Guarantee',
    tags: ['cat food', 'cat feed', 'pet food', 'ocean fish', 'cat kibbles']
  },
  {
    id: 'prod-shopify-stand-881',
    name: 'Agro-Bio Organic Fertilizer & Soil Vitality Booster (5kg)',
    banglaName: 'বায়ো-অর্গানিক ভার্মিকম্পোস্ট সার ও মাটি উর্বরতা বুস্টার (৫ কেজি)',
    slug: 'agro-bio-organic-fertilizer-soil-booster',
    category: 'Others',
    subcategory: 'Bio-Organic Fertilizers',
    price: 420,
    originalPrice: 580,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 45,
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    stockCount: 8,
    soldCount: 220,
    isFlashDeal: false,
    isFeatured: true,
    isTrending: false,
    brand: 'GreenEarth Bio',
    sku: 'KP-OT-013',
    shortDescription: '100% organic vermicompost microbial booster for rooftop gardening, vegetables, flowering plants, and crop fields.',
    description: 'Enriched with beneficial soil microbes, humus, and natural trace minerals. Rejuvenates barren soil, accelerates root growth, increases crop yield, and retains moisture.',
    banglaDescription: 'ছাদবাগান, শাকসবজি ও ফসলি জমির জন্য শতভাগ অর্গানিক কেঁচো সার (ভার্মিকম্পোস্ট)। মাটির উর্বরতা বাড়ায় ও গাছের দ্রুত বৃদ্ধি নিশ্চিত করে।',
    features: [
      '100% Pure Organic Vermicompost with Active Soil Microbes',
      'Improves Soil Water Retention and Aeration',
      'Chemical-Free and Safe for Vegetables and Fruits',
      'Odorless and Ready-to-Use Formulation'
    ],
    specifications: {
      'Net Weight': '5 kg',
      'Form': 'Granular Moist Compost',
      'Organic Matter': '45% Min',
      'Origin': 'Locally Farmed Bio-Compost'
    },
    warranty: 'Organic Certified Quality',
    tags: ['fertilizer', 'soil booster', 'gardening', 'organic farming', 'agro supplies']
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'BX-1005',
    createdAt: '2026-09-25 13:08',
    customerName: 'Tanvir Ahmed',
    phone: '01712-345678',
    altPhone: '01898765432',
    customerEmail: 'tanvir.ahmed@gmail.com',
    address: 'House 12, Road 5, Block C, Banasree, Dhaka',
    cityDivision: 'Inside Dhaka',
    district: 'Dhaka',
    thanaZone: 'Banasree',
    deliveryCharge: 70,
    items: [
      {
        productId: 'prod-4',
        name: 'Original Kashmiri Mongra Saffron Grade-A (1g Airtight Box)',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80',
        price: 950,
        quantity: 2,
        color: 'Grade-A Mongra'
      }
    ],
    subtotal: 1900,
    discount: 0,
    total: 1970,
    paymentMethod: 'cod',
    paymentStatus: 'unpaid',
    status: 'pending',
    courierName: 'Steadfast Courier',
    trackingNumber: 'ST-1005-DH89',
    customerNotes: 'Please call before delivery.',
    confirmationCode: 'ST-1005-DH89',
    fulfillmentId: '#BX-1005-F1',
    salesChannel: 'Online Store',
    timeline: [
      {
        status: 'pending',
        title: 'Order Placed',
        description: 'Order placed by Tanvir Ahmed via Online Store Cash on Delivery.',
        timestamp: '25 Sep, 01:08 PM',
        completed: true
      },
      {
        status: 'pending',
        title: 'Payment Pending',
        description: 'A ৳1,970.00 BDT payment is pending on Cash on Delivery (COD).',
        timestamp: '25 Sep, 01:08 PM',
        completed: true
      }
    ]
  },
  {
    id: 'BX-14585',
    createdAt: '2026-09-24 16:45',
    customerName: 'Niloy Rajib',
    phone: '01789-123456',
    altPhone: '01811223344',
    customerEmail: 'niloyrajib@gmail.com',
    address: 'Plot 18, Road 3, Sector 7, Uttara, Dhaka',
    cityDivision: 'Inside Dhaka',
    district: 'Dhaka',
    thanaZone: 'Uttara',
    deliveryCharge: 60,
    items: [
      {
        productId: 'prod-2',
        name: 'Aromatic Chinigura Kalijira Polao Rice & Wild Grains (5kg)',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80',
        price: 680,
        quantity: 2,
        color: '5kg Pack'
      }
    ],
    subtotal: 1360,
    discount: 0,
    total: 2700,
    paymentMethod: 'cod',
    paymentStatus: 'unpaid',
    status: 'confirmed',
    courierName: 'Steadfast Courier',
    trackingNumber: 'ST-14584-DH01',
    customerNotes: 'Deliver between 2 PM to 5 PM.',
    confirmationCode: 'ST-14584-DH01',
    fulfillmentId: '#BX-14585-F1',
    salesChannel: 'Online Store',
    timeline: [
      {
        status: 'pending',
        title: 'Order Placed',
        description: 'Order received via BanglaXpress Cash on Delivery checkout.',
        timestamp: '24 Sep, 04:45 PM',
        completed: true
      },
      {
        status: 'confirmed',
        title: 'Order Confirmed by Phone',
        description: 'Customer service executive confirmed delivery address via phone call.',
        timestamp: '24 Sep, 05:15 PM',
        completed: true
      }
    ]
  },
  {
    id: 'BX-14584',
    createdAt: '25 Sept 2026, 19:05',
    customerName: 'Jaarin Hassan',
    phone: '01829101355',
    altPhone: '01711223344',
    customerEmail: 'jaarin.hassan@gmail.com',
    address: 'South Banasree, Dhaka',
    cityDivision: 'Inside Dhaka',
    district: 'Dhaka',
    thanaZone: 'South Banasree',
    deliveryCharge: 60,
    items: [
      {
        productId: 'prod-1',
        name: 'T900 Ultra 2 Bluetooth Calling Smartwatch with 2.09" HD Display',
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80',
        price: 1390,
        quantity: 1,
        color: 'Midnight Black'
      }
    ],
    subtotal: 1390,
    discount: 0,
    total: 1450,
    paymentMethod: 'cod',
    paymentStatus: 'unpaid',
    status: 'pending',
    courierName: 'Steadfast Express',
    trackingNumber: 'EXP-400920',
    customerNotes: 'Please call before delivery.',
    confirmationCode: 'EXP-400920-JH',
    fulfillmentId: '#BX-14584-F1',
    salesChannel: 'Online Store',
    timeline: [
      {
        status: 'pending',
        title: 'Order Placed',
        description: 'Order placed by Jaarin Hassan via Online Store Cash on Delivery.',
        timestamp: '25 Sep, 07:05 PM',
        completed: true
      },
      {
        status: 'pending',
        title: 'Payment Pending',
        description: 'A ৳1,450.00 BDT payment is pending on Cash on Delivery (COD).',
        timestamp: '25 Sep, 07:05 PM',
        completed: true
      },
      {
        status: 'confirmed',
        title: 'Courier Booking Created',
        description: 'Steadfast Express consignment #EXP-400920 created for delivery.',
        timestamp: '25 Sep, 07:10 PM',
        completed: false
      }
    ]
  },
  {
    id: 'BX-1001',
    createdAt: 'August 4, 2026 at 12:18 pm',
    customerName: 'Muhtasim Ahmed Ahmed',
    customerEmail: 'muhtasim.devscred@gmail.com',
    phone: '+880 1534-761175',
    address: '67/2 Moghal House Shantinagar, Jonaki Goli, 4th Floor, Dhaka, Bangladesh',
    cityDivision: 'Inside Dhaka',
    district: 'Dhaka',
    thanaZone: 'Shantinagar',
    deliveryCharge: 80,
    items: [
      {
        productId: 'prod-bp-1',
        name: 'Automatic Rechargeable Digital Touch Screen Wrist type Blood-Pressure Machine',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
        price: 1020,
        quantity: 1,
        color: 'Standard White'
      }
    ],
    subtotal: 1020,
    discount: 0,
    total: 1100,
    paymentMethod: 'cod',
    paymentStatus: 'paid',
    status: 'delivered',
    archived: true,
    fulfillmentId: '#BX-1001-F1',
    confirmationCode: 'PJP0FA5N7',
    shippingWeight: 0.0,
    salesChannel: 'Online Store',
    courierName: 'Steadfast Courier',
    trackingNumber: 'ST-1005-DH',
    customerNotes: '4th Floor, Jonaki Goli, Shantinagar.',
    timeline: [
      {
        status: 'pending',
        title: 'Order Confirmation',
        description: 'Confirmation #PJP0FA5N7 was generated for this order.',
        timestamp: '12:18 PM',
        completed: true
      },
      {
        status: 'pending',
        title: 'Payment Pending',
        description: 'A ৳1,100.00 BDT payment is pending on Cash on Delivery (COD).',
        timestamp: '12:18 PM',
        completed: true
      },
      {
        status: 'confirmed',
        title: 'Confirmation Email Sent',
        description: 'Order confirmation email was sent to Muhtasim Ahmed Ahmed (muhtasim.devscred@gmail.com).',
        timestamp: '12:18 PM',
        completed: true
      },
      {
        status: 'shipped',
        title: 'Marked as Fulfilled',
        description: 'You marked 1 item as fulfilled from Shop location.',
        timestamp: '11:34 PM',
        completed: true
      },
      {
        status: 'delivered',
        title: 'Payment Marked Paid',
        description: 'You manually marked ৳1,100.00 BDT as paid by Cash on Delivery (COD).',
        timestamp: '11:34 PM',
        completed: true
      },
      {
        status: 'delivered',
        title: 'Order Archived',
        description: 'This order was archived.',
        timestamp: '11:34 PM',
        completed: true
      }
    ]
  },
  {
    id: 'BX-89210',
    createdAt: '2026-09-12 14:30',
    customerName: 'Tanvir Hossain',
    phone: '01712345678',
    altPhone: '01898765432',
    address: 'Flat 4B, House 24, Road 11, Dhanmondi, Dhaka',
    cityDivision: 'Inside Dhaka',
    district: 'Dhaka',
    thanaZone: 'Dhanmondi',
    deliveryCharge: 60,
    items: [
      {
        productId: 'prod-1',
        name: 'T900 Ultra 2 Bluetooth Calling Smartwatch with 2.09" HD Display',
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80',
        price: 1390,
        quantity: 1,
        color: 'Midnight Black + Matte Black Case'
      },
      {
        productId: 'prod-2',
        name: 'Lenovo LP40 Pro True Wireless Stereo Bluetooth Earbuds (TWS)',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
        price: 890,
        quantity: 1,
        color: 'Pure White'
      }
    ],
    subtotal: 2280,
    discount: 100,
    couponCode: 'EXPRESS50',
    total: 2240,
    paymentMethod: 'cod',
    paymentStatus: 'unpaid',
    status: 'shipped',
    courierName: 'Steadfast Courier',
    trackingNumber: 'ST-9021482-DH',
    customerNotes: 'Please deliver after 2 PM if possible.',
    timeline: [
      {
        status: 'pending',
        title: 'Order Placed',
        description: 'Order received via BanglaXpress Cash on Delivery checkout.',
        timestamp: '12 Sep, 02:30 PM',
        completed: true
      },
      {
        status: 'confirmed',
        title: 'Order Verified & Phone Confirmed',
        description: 'Customer service executive confirmed delivery address via call.',
        timestamp: '12 Sep, 03:15 PM',
        completed: true
      },
      {
        status: 'processing',
        title: 'Packed at Dhaka Central Sorting Hub',
        description: 'QC passed, safety packed with bubble wrap & assigned barcode.',
        timestamp: '12 Sep, 06:40 PM',
        completed: true
      },
      {
        status: 'shipped',
        title: 'Handed Over to Courier (Out for Delivery)',
        description: 'Rider on the way. Courier Tracking ID: ST-9021482-DH',
        timestamp: '13 Sep, 09:10 AM',
        completed: true
      },
      {
        status: 'delivered',
        title: 'Delivered & Payment Collected',
        description: 'Package delivered to customer successfully.',
        timestamp: 'Pending Delivery',
        completed: false
      }
    ]
  },
  {
    id: 'BX-88145',
    createdAt: '2026-09-10 11:20',
    customerName: 'Nusrat Jahan',
    phone: '01855667788',
    address: 'GEC Circle, Nasirabad, Chattogram',
    cityDivision: 'Outside Dhaka',
    district: 'Chattogram',
    thanaZone: 'Nasirabad',
    deliveryCharge: 120,
    items: [
      {
        productId: 'prod-4',
        name: 'Remax RPP-292 20000mAh 22.5W Fast Charging Power Bank',
        image: 'https://images.unsplash.com/photo-1609592424368-23f261905ea5?w=800&auto=format&fit=crop&q=80',
        price: 1850,
        quantity: 1,
        color: 'Dark Navy'
      }
    ],
    subtotal: 1850,
    discount: 0,
    total: 1970,
    paymentMethod: 'bkash',
    paymentStatus: 'paid',
    trxId: 'BK9A72619Z',
    status: 'delivered',
    courierName: 'Pathao Courier',
    trackingNumber: 'PTH-CTG-66291',
    timeline: [
      {
        status: 'pending',
        title: 'Order Placed',
        description: 'Order placed with online bKash payment.',
        timestamp: '10 Sep, 11:20 AM',
        completed: true
      },
      {
        status: 'confirmed',
        title: 'bKash TrxId Verified',
        description: 'Payment of ৳1,970 verified via bKash Merchant Gateway.',
        timestamp: '10 Sep, 11:45 AM',
        completed: true
      },
      {
        status: 'processing',
        title: 'Dispatched to Chattogram Hub',
        description: 'Processed at main warehouse and shipped via highway line-haul.',
        timestamp: '10 Sep, 05:00 PM',
        completed: true
      },
      {
        status: 'shipped',
        title: 'Arrived at Nasirabad Delivery Station',
        description: 'Pathao delivery hero assigned.',
        timestamp: '11 Sep, 10:30 AM',
        completed: true
      },
      {
        status: 'delivered',
        title: 'Delivered Successfully',
        description: 'Customer received package and signed confirmation.',
        timestamp: '11 Sep, 04:15 PM',
        completed: true
      }
    ]
  }
];

export const VALID_COUPONS: Coupon[] = [
  {
    code: 'BANGLA10',
    title: '10% off for Smart Gadgets and Accessories',
    discountType: 'percentage',
    amount: 10,
    minSpend: 1000,
    description: '10% instant discount on orders above ৳1,000',
    expiryDate: '2026-12-31',
    status: 'active',
    usageCount: 89
  },
  {
    code: 'EXPRESS50',
    title: '৳50 flat discount for first order',
    discountType: 'fixed',
    amount: 50,
    minSpend: 800,
    description: 'Flat ৳50 discount on your order',
    expiryDate: '2026-12-31',
    status: 'active',
    usageCount: 142
  },
  {
    code: 'EID20',
    title: '20% off Mega Festival Voucher',
    discountType: 'percentage',
    amount: 20,
    minSpend: 1500,
    description: '20% special discount on orders above ৳1,500',
    expiryDate: '2026-06-30',
    status: 'active',
    usageCount: 57
  },
  {
    code: 'FREESHIP',
    title: '৳60 delivery subsidy on orders above ৳2,000',
    discountType: 'fixed',
    amount: 60,
    minSpend: 2000,
    description: '৳60 off on delivery fee for orders above ৳2,000',
    expiryDate: '2026-06-30',
    status: 'active',
    usageCount: 64
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    productId: 'prod-1',
    userName: 'Rafiqul Islam (মিরপুর, ঢাকা)',
    rating: 5,
    date: '2 দিন আগে',
    verified: true,
    location: 'Mirpur, Dhaka',
    comment: 'আলহামদুলিল্লাহ ঘড়িটা হাতে পেয়ে খুব ভালো লাগল। ডিসপ্লে অনেক স্মুথ এবং সাউন্ড কোয়ালিটি বেশ ক্লিয়ার। ২৪ ঘণ্টার মধ্যেই ডেলিভারি পেয়েছি। ক্যাশ অন ডেলিভারিতে চেক করে নেওয়ার সুযোগ ছিল।'
  },
  {
    id: 'rev-2',
    productId: 'prod-2',
    userName: 'Shakil Ahmed (সিলেট)',
    rating: 5,
    date: '৪ দিন আগে',
    verified: true,
    location: 'Sylhet Sadar',
    comment: 'Lenovo LP40 Pro একদম জেনুইন প্রোডাক্ট। বাস যথেষ্ট ভালো এবং চার্জ প্রায় ৫ ঘন্টা থাকছে। বাবল র‍্যাপ দিয়ে খুব সুন্দর প্যাকেজিং ছিল। BanglaXpress এর সার্ভিস সত্যি প্রশংসনীয়।'
  },
  {
    id: 'rev-3',
    productId: 'prod-5',
    userName: 'Kazi Mahbub (উত্তরা, ঢাকা)',
    rating: 5,
    date: '১ সপ্তাহ আগে',
    verified: true,
    location: 'Uttara, Dhaka',
    comment: 'Vintage T9 ট্রিমারটা মেটাল বডির হওয়ায় হাতে ধরে বেশ প্রিমিয়াম ফিল হয়। কাটিং স্পিড দারুণ। দাম হিসেবে অসাধারণ ভ্যালু ফর মানি।'
  },
  {
    id: 'rev-4',
    productId: 'prod-6',
    userName: 'Farhan Kabir (চট্টগ্রাম)',
    rating: 4,
    date: '২ সপ্তাহ আগে',
    verified: true,
    location: 'Chattogram',
    comment: 'NY cap color and fitting is 10/10. Fabric quality is pure cotton, fits comfortably. Will definitely order again.'
  }
];

export const FAQ_LIST = [
  {
    question: 'কিভাবে অর্ডার করব? (How to place an order?)',
    answer: 'পণ্যটি পছন্দ হলে "অর্ডার করুন" বা "Buy Now" বাটনে ক্লিক করুন। আপনার নাম, মোবাইল নম্বর এবং সম্পূর্ণ ঠিকানা লিখে "অর্ডার কনফার্ম করুন" এ চাপ দিন। কোনো অগ্রিম পেমেন্ট ছাড়াই ক্যাশ অন ডেলিভারিতে অর্ডার কনফার্ম হয়ে যাবে।'
  },
  {
    question: 'ডেলিভারি চার্জ কত এবং কত দিনে পাব?',
    answer: 'ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৬০ টাকা এবং ২৪ থেকে ৪৮ ঘণ্টার মধ্যে পৌঁছে যায়। ঢাকা সিটির বাইরে সারাদেশে ডেলিভারি চার্জ ১২০ টাকা এবং ২ থেকে ৩ দিনের মধ্যে আপনার নিকটবর্তী কুরিয়ার বা হোম ডেলিভারির মাধ্যমে পণ্য পাবেন।'
  },
  {
    question: 'পণ্য হাতে পেয়ে টাকা দেওয়ার সুযোগ আছে কি?',
    answer: 'হ্যাঁ! ১০০% ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা রয়েছে। পণ্য হাতে পেয়ে রাইডারের সামনে দেখে নিশ্চিত হয়ে টাকা পরিশোধ করতে পারবেন।'
  },
  {
    question: 'পণ্য কোনো ত্রুটি থাকলে কি রিটার্ন বা এক্সচেঞ্জ করা যাবে?',
    answer: 'অবশ্যই। ডেলিভারির পর পণ্যে কোনো সমস্যা থাকলে ৭ দিনের মধ্যে আমাদের হটলাইন (09678-123456) অথবা WhatsApp এ যোগাযোগ করলে আমরা কোনো অতিরিক্ত চার্জ ছাড়াই প্রোডাক্ট পরিবর্তন করে দেব।'
  }
];
