import React, { useState, useEffect } from 'react';
import { Flame, Clock, ShoppingCart, Eye, Zap, ArrowRight, AlertCircle, Check } from 'lucide-react';
import { Product, ThemeConfig } from '../types';
import { TRANSLATIONS, getProductTitle } from '../utils/translations';

interface FlashDealsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onFastBuyNow: (product: Product) => void;
  flashConfig?: ThemeConfig['flashDeals'];
  lang?: 'en' | 'bn';
}

export const FlashDeals: React.FC<FlashDealsProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onFastBuyNow,
  flashConfig,
  lang = 'bn'
}) => {
  if (flashConfig && !flashConfig.enabled) {
    return null;
  }

  const t = TRANSLATIONS[lang];
  const flashProducts = products.filter((p) => p.isFlashDeal);

  // Real countdown timer state
  const initialHours = flashConfig?.dealHours || 8;
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="flash-sale-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Flash Header with Countdown Timer */}
      <div className="bg-gradient-to-r from-[#042013] via-[#0c4a28] to-[#2c1d06] rounded-2xl p-4 sm:p-6 text-white mb-6 shadow-xl border border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Title */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 backdrop-blur-md flex items-center justify-center text-amber-300 shadow-inner">
            <Flame className="w-7 h-7 fill-amber-400 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-white">
                {flashConfig?.title || t.flashDealsTitle}
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-400 text-emerald-950 uppercase tracking-wider animate-bounce">
                {flashConfig?.badgeText || (lang === 'en' ? 'Limited Stock!' : 'সীমিত স্টক!')}
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 mt-0.5">
              {t.flashDealsSubtitle}
            </p>
          </div>
        </div>

        {/* Countdown Box */}
        <div className="flex items-center gap-2 bg-emerald-950/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#87CEEB]/40 shadow-inner">
          <Clock className="w-4 h-4 text-[#87CEEB] animate-pulse" />
          <span className="text-xs font-semibold text-emerald-200 mr-1">{t.endsIn}</span>
          
          <div className="flex items-center gap-1.5 font-mono font-bold text-white">
            <div className="bg-emerald-900/90 border border-[#87CEEB]/30 rounded px-2 py-1 text-sm text-[#87CEEB]">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="text-[#87CEEB]">:</span>
            <div className="bg-emerald-900/90 border border-[#87CEEB]/30 rounded px-2 py-1 text-sm text-[#87CEEB]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="text-amber-400">:</span>
            <div className="bg-amber-400 text-emerald-950 rounded px-2 py-1 text-sm font-black">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>

      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {flashProducts.map((product) => {
          const savings = product.originalPrice - product.price;
          const soldPercentage = Math.min(
            100,
            Math.round((product.soldCount / (product.soldCount + product.stockCount)) * 100)
          );

          // Dynamic stock status calculation
          const stock = typeof product.stockCount === 'number' ? product.stockCount : (product.inStock ? 15 : 0);
          const isOutOfStock = !product.inStock || stock <= 0;
          const isLowStock = !isOutOfStock && stock <= 10;
          const isInStock = !isOutOfStock && !isLowStock;

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              {/* Badge & Discount */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#0c4a28] text-amber-300 border border-amber-400/30 shadow-xs">
                  -{product.discountPercent}% {t.off}
                </span>

                {/* Dynamic Stock Status Badge */}
                {isOutOfStock ? (
                  <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-rose-600 text-white shadow-xs border border-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                    <span>{t.outOfStock}</span>
                  </span>
                ) : isLowStock ? (
                  <span className="px-2 py-0.5 rounded-md text-[9.5px] font-extrabold bg-amber-500 text-emerald-950 shadow-xs border border-amber-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping shrink-0" />
                    <span>{lang === 'en' ? `Low Stock (${stock})` : `সীমিত স্টক (${stock} টি)`}</span>
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-white/95 text-emerald-800 shadow-xs border border-emerald-300 flex items-center gap-1 backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{lang === 'en' ? `In Stock (${stock})` : `ইন-স্টক (${stock})`}</span>
                  </span>
                )}
                {product.badge && (
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-600 text-white shadow-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Quick View Floating Button */}
              <button
                onClick={() => onSelectProduct(product)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-emerald-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                title={t.quickView}
              >
                <Eye className="w-4 h-4" />
              </button>

              {/* Product Image */}
              <div
                onClick={() => onSelectProduct(product)}
                className="w-full h-52 bg-gray-100 overflow-hidden cursor-pointer relative"
              >
                <img
                  src={product.images[0]}
                  alt={getProductTitle(product, lang)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide">
                    {product.category}
                  </span>
                  
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 mt-1 hover:text-emerald-800 cursor-pointer transition-colors"
                  >
                    {getProductTitle(product, lang)}
                  </h3>

                  {/* Stock progress */}
                  <div className="mt-3">
                    <div className="flex justify-between items-center text-[11px] text-gray-500 font-medium mb-1">
                      <span>{lang === 'en' ? `Sold: ${product.soldCount}` : `বিক্রি হয়েছে: ${product.soldCount} টি`}</span>
                      {isOutOfStock ? (
                        <span className="text-rose-700 font-bold bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded text-[10px] flex items-center gap-1 shadow-xs">
                          <AlertCircle className="w-2.5 h-2.5 text-rose-600" />
                          <span>{t.outOfStock}</span>
                        </span>
                      ) : isLowStock ? (
                        <span className="text-amber-900 font-bold bg-amber-50 border border-amber-300 px-1.5 py-0.5 rounded text-[10px] flex items-center gap-1 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          <span>{lang === 'en' ? `Low Stock (${stock})` : `সীমিত স্টক (${stock} টি)`}</span>
                        </span>
                      ) : (
                        <span className="text-emerald-700 font-semibold text-[10.5px]">
                          {lang === 'en' ? `Stock: ${stock}` : `স্টক: ${stock} টি`}
                        </span>
                      )}
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isLowStock
                            ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                            : 'bg-gradient-to-r from-emerald-600 to-amber-500'
                        }`}
                        style={{ width: `${soldPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-lg font-black text-[#0c4a28]">
                      ৳{product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ৳{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[#0284c7] bg-[#87CEEB]/15 border border-[#87CEEB]/40 font-bold px-1.5 py-0.5 rounded">
                      {lang === 'en' ? `Save ৳${savings.toLocaleString()}` : `সাশ্রয় ৳${savings.toLocaleString()}`}
                    </span>
                  </div>
                </div>

                {/* Direct Buy Now (Order Now) & Add to Cart */}
                <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
                  <button
                    disabled={isOutOfStock}
                    onClick={() => onAddToCart(product)}
                    className={`w-full py-2.5 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors ${
                      isOutOfStock
                        ? 'border border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                        : 'border border-emerald-800/30 hover:border-emerald-700 text-emerald-900 hover:bg-emerald-50 cursor-pointer'
                    }`}
                  >
                    <ShoppingCart className={`w-3.5 h-3.5 ${isOutOfStock ? 'text-gray-400' : 'text-emerald-800'}`} />
                    <span>{t.addToCart}</span>
                  </button>

                  <button
                    disabled={isOutOfStock}
                    onClick={() => onFastBuyNow(product)}
                    className={`w-full py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-md transition-all ${
                      isOutOfStock
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed shadow-none'
                        : 'bg-[#0c4a28] hover:bg-[#07331c] text-amber-200 shadow-emerald-950/20 hover:shadow-emerald-950/40 cursor-pointer'
                    }`}
                  >
                    <Zap className={`w-3.5 h-3.5 ${isOutOfStock ? 'text-gray-400' : 'fill-amber-300 text-amber-300'}`} />
                    <span>{isOutOfStock ? t.outOfStock : t.buyNow}</span>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
