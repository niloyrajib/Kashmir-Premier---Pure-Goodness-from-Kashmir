import { ThemeConfig, DynamicSectionItem } from '../types';
import { STORE_SETTINGS, CATEGORIES } from './mockData';

export const DEFAULT_DYNAMIC_SECTIONS: DynamicSectionItem[] = [
  { id: 'sec-hero', type: 'hero', title: 'Hero Slider & Banners', enabled: true },
  { id: 'sec-trust', type: 'trustBadges', title: 'Trust Badges (৪টি সুবিধা ও গ্যারান্টি)', enabled: true },
  { id: 'sec-flash', type: 'flashDeals', title: 'Flash Deals & Countdown Timer', enabled: true },
  { id: 'sec-categories', type: 'categoriesSection', title: 'Category Icons Navigation Grid', enabled: true },
  { id: 'sec-catalog', type: 'catalogSection', title: 'Main Product Catalog & Filter', enabled: true },
  { id: 'sec-promo', type: 'promoBanner', title: 'Express Delivery Banner', enabled: true },
  { id: 'sec-reviews', type: 'reviewsSection', title: 'Customer Reviews & Feedback', enabled: true },
];

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
  themeName: 'Kashmir Premier Heritage Gold & Emerald',
  lastSaved: 'Just now',
  
  announcementBar: {
    enabled: true,
    text: 'কাশ্মীর থেকে সরাসরি খাঁটি জাফরান, প্রিমিয়াম আখরোট ও কাঠবাদাম • সারা দেশে ক্যাশ অন ডেলিভারি',
    phoneText: 'হটলাইন',
    phone: STORE_SETTINGS.phone,
    whatsappText: 'WhatsApp অর্ডার',
    whatsapp: STORE_SETTINGS.whatsapp,
    bgColor: '#052414',
    textColor: '#fef08a'
  },

  header: {
    storeName: 'Kashmir Premier',
    storeTagline: 'Pure Goodness from Kashmir',
    logoUrl: '/kashmir-premier-logo.jpeg',
    sticky: true
  },

  hero: {
    enabled: true,
    autoplay: true,
    autoplaySpeed: 5,
    slides: [
      {
        id: 'slide-1',
        badge: '✨ ১০০% খাঁটি কাশ্মীরি মঙ্গরা জাফরান',
        title: 'Original Kashmiri Mongra Saffron',
        subtitle: 'কাশ্মীরের পামপোর উপত্যকা থেকে সংগৃহীত সর্বোচ্চ গ্রেডের প্রাকৃতিক জাফরান',
        priceText: 'মাত্র ৯৫০৳',
        regularPrice: '১৪৫০৳',
        discount: '৩৪% ছাড়',
        category: 'Pure Saffron',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=900&auto=format&fit=crop&q=80',
        bgGradient: 'from-emerald-950 via-emerald-900 to-amber-950',
        buttonText: 'অর্ডার করুন'
      },
      {
        id: 'slide-2',
        badge: '🌰 রয়েল স্নো-হোয়াইট আখরোট',
        title: 'Kashmiri Royal Kagzi Walnuts',
        subtitle: 'পাতলা খোসা ও ক্রিস্পি স্বাদের তেলসমৃদ্ধ তাজা পাহাড়ি আখরোট',
        priceText: 'মাত্র ৮৫০৳/কেজি',
        regularPrice: '১২০০৳',
        discount: '২৯% অফ',
        category: 'Organic Walnuts',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&auto=format&fit=crop&q=80',
        bgGradient: 'from-amber-950 via-emerald-950 to-stone-900',
        buttonText: 'কালেকশন দেখুন'
      },
      {
        id: 'slide-3',
        badge: '🍯 খাঁটি কাশ্মীরি পাহাড়ি মধু ও মামরা বাদাম',
        title: 'Kashmiri Mamra Almonds & Forest Honey',
        subtitle: 'পুষ্টিগুণে ভরপুর আসল মামরা বাদাম ও প্রাকৃতিক র ফরেস্ট হানি',
        priceText: 'মাত্র ১৪৯০৳',
        regularPrice: '২১০০৳',
        discount: '২৯% ছাড়',
        category: 'Dry Fruits & Honey',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=900&auto=format&fit=crop&q=80',
        bgGradient: 'from-emerald-900 via-stone-900 to-amber-900',
        buttonText: 'এখনই কিনুন'
      }
    ]
  },

  trustBadges: {
    enabled: true,
    badges: [
      {
        id: 'b-1',
        title: '১০০% খাঁটি উপত্যকার পণ্য',
        subtitle: 'কাশ্মীর থেকে পরীক্ষিত ও সার্টিফাইড পিউরিটি',
        iconName: 'shield'
      },
      {
        id: 'b-2',
        title: 'সারা দেশে হোম ডেলিভারি',
        subtitle: 'পণ্য হাতে পেয়ে মূল্য পরিশোধ (COD)',
        iconName: 'truck'
      },
      {
        id: 'b-3',
        title: '৭ দিনের গ্যারান্টি সুবিধা',
        subtitle: 'গুণমানে অসন্তুষ্ট হলে দ্রুত রিটার্ন বা রিপ্লেস',
        iconName: 'refresh'
      },
      {
        id: 'b-4',
        title: '২৪/৭ ডেডিকেটেড সাপোর্ট',
        subtitle: 'হটলাইন ও হোয়াটসঅ্যাপে তাৎক্ষণিক সহায়তা',
        iconName: 'phone'
      }
    ]
  },

  flashDeals: {
    enabled: true,
    title: 'আজকের কাশ্মীরি প্রিমিয়ার ডিল',
    badgeText: 'সীমিত স্টক অফার',
    dealHours: 12
  },

  categoriesSection: {
    enabled: true,
    title: 'প্রিমিয়াম কালেকশনসমূহ',
    subtitle: 'কাশ্মীরের সেরা অর্গানিক খাদ্য ও বিশেষ পণ্য খুঁজে নিন',
    items: CATEGORIES
  },

  catalogSection: {
    title: 'আমাদের খাঁটি কাশ্মীরি কালেকশন',
    subtitle: 'পাহাড়ি উপত্যকার খাঁটি স্বাদ ও বিশ্বস্ত মানের নিশ্চয়তা',
    columns: 3
  },

  promoBanner: {
    enabled: true,
    badge: '🌿 ভ্যালি টু টেবিল গ্যারান্টি',
    title: 'কাশ্মীরের আসল স্বাদ ও পুষ্টি এখন আপনার ঘরে',
    subtitle: 'ঢাকা সিটিতে ২৪ ঘণ্টায় দ্রুত ডেলিভারি ও ১০০% ক্যাশ অন ডেলিভারি সুবিধা!',
    buttonText: 'অর্ডার ট্র্যাক করুন',
    buttonLink: 'tracking',
    bgGradient: 'from-emerald-900 via-emerald-800 to-amber-900'
  },

  reviewsSection: {
    enabled: true,
    title: 'গ্রাহকদের মুগ্ধ করা অভিজ্ঞতা',
    subtitle: 'হাজারো সন্তুষ্ট পরিবারের খাঁটি পর্যালোচনা'
  },

  footer: {
    aboutText: 'Kashmir Premier brings pure, authentic goodness straight from the pristine valleys of Kashmir to your table: certified Mongra saffron, royal Kashmiri walnuts, Mamra almonds, and Himalayan specialty foods.',
    helpline: STORE_SETTINGS.phone,
    whatsapp: STORE_SETTINGS.whatsapp,
    email: STORE_SETTINGS.email,
    address: 'Pristine Valleys of Kashmir • Worldwide Express Delivery',
    copyrightText: '© 2026 Kashmir Premier. All Rights Reserved. Pure Goodness from Kashmir.',
    brandName: 'Kashmir Premier',
    brandSuffix: '',
    logoUrl: '/kashmir-premier-logo.jpeg',
    logoStyle: 'transparent',
    showLogo: true,
    categoriesTitle: 'জনপ্রিয় কালেকশন',
    categoriesList: [
      { label: 'খাঁটি কাশ্মীরি জাফরান ও মসলা', categoryName: 'Spice' },
      { label: 'দানা শস্য ও পোলাও চাল', categoryName: 'Grains' },
      { label: 'অর্গানিক ডাল ও ডালজাতীয় শস্য', categoryName: 'Pulse' },
      { label: 'সিরিয়ালস ও কর্ন কার্নেল', categoryName: 'Cereals/Kernels' },
      { label: 'রয়েল কাগজি আখরোট ও কাঠবাদাম', categoryName: 'Nuts & Fruits' },
      { label: 'খাঁটি গাওয়া ঘি ও বাটার', categoryName: 'Butters' },
      { label: 'গবাদি পশু ও পোল্ট্রি ফিড', categoryName: 'Cattle Feed' },
      { label: 'মাছের খাবার ও ক্যাট ফুড', categoryName: 'Fish Feed' }
    ],
    customerCareTitle: 'গ্রাহক সেবা ও নীতিমালা',
    customerCareItems: [
      { label: 'লাইভ অর্ডার ট্র্যাকিং (Track Order)', iconType: 'truck', actionType: 'track' },
      { label: '৭ দিনের রিপ্লেসমেন্ট ও রিটার্ন গ্যারান্টি', iconType: 'refresh', actionType: 'none' },
      { label: 'শতভাগ খাঁটি উপত্যকার কোয়ালিটি গ্যারান্টি', iconType: 'shield', actionType: 'none' },
      { label: 'ডেলিভারি সময়সূচী (ঢাকা ২৪h, সারাদেশে ৪৮-৭২h)', iconType: 'clock', actionType: 'none' },
      { label: 'Admin & Store Management Panel', iconType: 'link', actionType: 'admin' }
    ],
    paymentTitle: 'পেমেন্ট মাধ্যমসমূহ',
    paymentMethods: [
      { name: 'Cash on Delivery', colorScheme: 'emerald' },
      { name: 'bKash বিকাশ', colorScheme: 'pink' },
      { name: 'Nagad নগদ', colorScheme: 'orange' },
      { name: 'Rocket রকেট', colorScheme: 'purple' },
      { name: 'Visa / Master', colorScheme: 'blue' }
    ],
    courierTitle: 'ডেলিভারি পার্টনার',
    couriersList: ['Steadfast Courier', 'Pathao Courier', 'RedX Express'],
    legalLinks: [
      { label: 'প্রাইভেসি পলিসি', url: '#' },
      { label: 'ব্যবহারের শর্তাবলী', url: '#' },
      { label: 'রিটার্ন পলিসি', url: '#' }
    ]
  },

  styling: {
    primaryColor: '#0c4a28', // Kashmir Deep Forest Green
    accentColor: '#d97706',  // Kashmir Warm Royal Amber
    skyColor: '#87CEEB',     // Standard Sky Blue (Himalayan skies & glacial waters)
    borderRadius: 'rounded-xl'
  },

  sectionsOrder: DEFAULT_DYNAMIC_SECTIONS,

  seo: {
    metaTitle: 'Kashmir Premier - Pure Goodness from Kashmir',
    metaDescription: 'Kashmir Premier brings pure, authentic goodness straight from the pristine valleys of Kashmir to your table: certified Mongra saffron, royal Kashmiri walnuts, Mamra almonds, and Himalayan specialty foods.',
    metaKeywords: 'kashmir premier, pure goodness from kashmir, kashmiri saffron, kashmiri walnuts, mamra almonds, authentic kashmir dry fruits',
    author: 'Kashmir Premier',
    canonicalUrl: 'https://kashmirpremier.com',
    ogTitle: 'Kashmir Premier - Pure Goodness from Kashmir',
    ogDescription: 'Experience pure authentic goodness straight from Kashmir valleys. 100% pure saffron, snow-white walnuts, Mamra almonds, and organic foods with fast delivery.',
    ogImage: '/kashmir-premier-logo.jpeg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterCreator: '@kashmirpremier',
    enableStructuredData: true,
    structuredDataType: 'OnlineStore',
    lastUpdated: '2026-10-22'
  }
};
