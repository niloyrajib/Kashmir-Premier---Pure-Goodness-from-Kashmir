import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, ShoppingCart, ArrowRight, Shield, Truck } from 'lucide-react';
import { STORE_SETTINGS } from '../../data/mockData';
import { ThemeConfig } from '../../types';
import { TRANSLATIONS } from '../../utils/translations';

interface HeroBannerProps {
  onShopNow: () => void;
  onSelectCategory: (cat: string) => void;
  heroConfig?: ThemeConfig['hero'];
  lang?: 'en' | 'bn';
}

const SLIDES_BN = [
  {
    id: 1,
    badge: '🔥 মেগা গ্যাজেট অফার ২০২৬',
    title: 'T900 Ultra 2 স্মার্টওয়াচ',
    subtitle: 'বিশাল ২.০৯ ইঞ্চি এইচডি ডিসপ্লে, কলিং সুবিধা ও ওয়্যারলেস চার্জার',
    priceText: 'মাত্র ১৩৯০৳',
    regularPrice: '২২৫০৳',
    discount: '৩৮% ছাড়',
    category: 'Smart Watches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80',
    bgGradient: 'from-emerald-950 via-emerald-900 to-amber-950',
    accentColor: 'bg-emerald-600'
  },
  {
    id: 2,
    badge: '⚡ হাই-ফাই অডিও মেলা',
    title: 'Lenovo LP40 Pro TWS',
    subtitle: 'ক্রিস্টাল ক্লিয়ার সাউন্ড, ডিপ বেস এবং একটানা ৫ ঘণ্টা ব্যাটারি লাইফ',
    priceText: 'মাত্র ৮৯০৳',
    regularPrice: '১৪৫০৳',
    discount: '৩৯% অফ',
    category: 'Earbuds & Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&auto=format&fit=crop&q=80',
    bgGradient: 'from-emerald-950 via-slate-900 to-amber-950',
    accentColor: 'bg-amber-600'
  },
  {
    id: 3,
    badge: '🧢 প্রিমিয়াম কালেকশন',
    title: 'নিউ ইয়র্ক ইয়াঙ্কিস ক্যাপ',
    subtitle: '১০০% পিওর কটন ফেব্রিক, ক্লাসিক ৩ডি এমব্রয়ডারি ডিজাইন',
    priceText: 'মাত্র ৪৯০৳',
    regularPrice: '৮৫০৳',
    discount: '৪২% ছাড়',
    category: "Men's Caps & Fashion",
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=900&auto=format&fit=crop&q=80',
    bgGradient: 'from-amber-950 via-slate-900 to-stone-900',
    accentColor: 'bg-amber-500'
  }
];

const SLIDES_EN = [
  {
    id: 1,
    badge: '🔥 Mega Deals 2026',
    title: 'Pure Kashmiri Heritage Collection',
    subtitle: 'Certified Mongra Saffron, Royal Walnuts & Himalayan Delicacies',
    priceText: 'Only ৳950',
    regularPrice: '৳1,450',
    discount: '34% OFF',
    category: 'Pure Saffron',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=900&auto=format&fit=crop&q=80',
    bgGradient: 'from-emerald-950 via-emerald-900 to-amber-950',
    accentColor: 'bg-emerald-600'
  },
  {
    id: 2,
    badge: '⚡ Hi-Fi Audio Fest',
    title: 'Lenovo LP40 Pro TWS Earbuds',
    subtitle: 'Crystal clear acoustic sound, punchy deep bass & 5 hours playtime',
    priceText: 'Only ৳890',
    regularPrice: '৳1,450',
    discount: '39% OFF',
    category: 'Earbuds & Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&auto=format&fit=crop&q=80',
    bgGradient: 'from-purple-950 via-slate-900 to-blue-950',
    accentColor: 'bg-purple-500'
  },
  {
    id: 3,
    badge: '🧢 Premium Caps Collection',
    title: 'New York Yankees Classic Cap',
    subtitle: '100% pure washed cotton fabric, 3D embroidery stitched design',
    priceText: 'Only ৳490',
    regularPrice: '৳850',
    discount: '42% OFF',
    category: "Men's Caps & Fashion",
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=900&auto=format&fit=crop&q=80',
    bgGradient: 'from-amber-950 via-slate-900 to-stone-900',
    accentColor: 'bg-amber-500'
  }
];

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onShopNow,
  onSelectCategory,
  heroConfig,
  lang = 'bn'
}) => {
  if (heroConfig && !heroConfig.enabled) {
    return null;
  }

  const t = TRANSLATIONS[lang];
  const defaultSlides = lang === 'en' ? SLIDES_EN : SLIDES_BN;
  const slides = (heroConfig?.slides && heroConfig.slides.length > 0) ? heroConfig.slides : defaultSlides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroConfig && heroConfig.autoplay === false) return;
    const intervalMs = (heroConfig?.autoplaySpeed || 5.5) * 1000;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, heroConfig?.autoplay, heroConfig?.autoplaySpeed]);

  const slide = slides[currentSlide] || slides[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Main Hero Slider (8 cols) */}
        <div className="lg:col-span-8 relative rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[420px] flex items-center shadow-lg">
          
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} transition-all duration-700`} />

          {/* Decorative Pattern & Glow */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-[#87CEEB]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Content & Product Visual */}
          <div className="relative z-10 w-full p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Text */}
            <div className="flex-1 text-white text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-amber-300 border border-amber-400/20 mb-3">
                {slide.badge}
              </span>

              <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
                {slide.title}
              </h1>

              <p className="mt-2 text-xs sm:text-sm text-emerald-100/80 max-w-md line-clamp-2">
                {slide.subtitle}
              </p>

              {/* Pricing Box */}
              <div className="mt-4 flex items-baseline gap-3 justify-center md:justify-start">
                <span className="text-2xl sm:text-3xl font-serif font-black text-amber-300">
                  {slide.priceText}
                </span>
                <span className="text-sm sm:text-base text-emerald-200/60 line-through">
                  {slide.regularPrice}
                </span>
                <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-amber-500 text-emerald-950">
                  {slide.discount}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <button
                  id="hero-buy-now-btn"
                  onClick={onShopNow}
                  className="px-6 py-3 rounded-xl bg-[#0c4a28] hover:bg-[#07331c] text-amber-200 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 hover:shadow-emerald-950/60 transform hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer border border-amber-400/30"
                >
                  <ShoppingCart className="w-4 h-4 text-amber-300" />
                  <span>{slide.buttonText || t.heroOrderNow}</span>
                </button>
                <button
                  onClick={() => onSelectCategory(slide.category)}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.heroViewCollection}</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>

              <p className="mt-4 text-[11px] text-emerald-200/80 flex items-center justify-center md:justify-start gap-3">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  {t.hero7DaysReplacement}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  {t.heroCod}
                </span>
              </p>
            </div>

            {/* Right Product Image */}
            <div className="w-44 h-44 sm:w-64 sm:h-64 relative flex-shrink-0">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/20 bg-slate-800/40">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

          {/* Slider Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-colors z-20 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-colors z-20 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/40'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Right Promotional Feature Cards (4 cols) */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
          
          {/* Card 1: Pure Saffron / Organic Promo */}
          <div className="flex-1 bg-gradient-to-br from-[#0c4a28] to-emerald-900 rounded-2xl p-5 text-white flex items-center justify-between shadow-md relative overflow-hidden group cursor-pointer border border-emerald-700/50"
            onClick={() => onSelectCategory('Smart Watches')}
          >
            <div className="relative z-10">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-emerald-950 uppercase">
                {lang === 'en' ? 'Authentic Kashmir' : 'খাঁটি কাশ্মীরি'}
              </span>
              <h3 className="text-base sm:text-lg font-serif font-black mt-1">
                {lang === 'en' ? 'Pampore Saffron' : 'পামপোর মঙ্গরা জাফরান'}
              </h3>
              <p className="text-xs text-emerald-200 mt-0.5">{lang === 'en' ? 'Direct from organic farmers' : '১০০% পিওর গ্রেড-১ কোয়ালিটি'}</p>
              <p className="mt-2 text-sm font-black text-amber-900 bg-amber-300 px-2.5 py-1 rounded-lg inline-block">
                {lang === 'en' ? 'Starting from ৳950' : 'শুরু মাত্র ৯৫০৳ থেকে'}
              </p>
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md flex-shrink-0 border-2 border-amber-400/30">
              <img
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&auto=format&fit=crop&q=80"
                alt="Kashmiri Saffron"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
          </div>

          {/* Card 2: Express Delivery Guarantee */}
          <div className="flex-1 bg-[#042013] rounded-2xl p-5 text-white flex items-center justify-between shadow-md border border-emerald-800/80 hover:border-[#87CEEB]/40 relative overflow-hidden group cursor-pointer transition-colors"
            onClick={onShopNow}
          >
            <div className="relative z-10">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#87CEEB]/20 text-[#87CEEB] border border-[#87CEEB]/40">
                {lang === 'en' ? '⚡ Super Express' : '⚡ সুপার এক্সপ্রেস'}
              </span>
              <h3 className="text-base sm:text-lg font-serif font-black mt-1">
                {t.hero24hTitle}
              </h3>
              <p className="text-xs text-emerald-200/70 mt-0.5">{t.hero24hSubtitle}</p>
              <span className="mt-2 text-xs font-bold text-[#87CEEB] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>{t.heroViewAll}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md flex-shrink-0 border-2 border-[#87CEEB]/30 bg-emerald-950 flex items-center justify-center">
              <Truck className="w-12 h-12 text-[#87CEEB] group-hover:scale-110 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
