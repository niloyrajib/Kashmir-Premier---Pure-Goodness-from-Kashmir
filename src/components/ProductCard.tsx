import React from 'react';
import { ShoppingCart, Zap, Star, Heart, Eye, Check, Scale, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { TRANSLATIONS, getProductTitle } from '../utils/translations';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onFastBuyNow: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onSelectCategory?: (category: string) => void;
  isCompared?: boolean;
  onToggleCompare?: (product: Product) => void;
  lang?: 'en' | 'bn';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
  onFastBuyNow,
  isWishlisted,
  onToggleWishlist,
  onSelectCategory,
  isCompared = false,
  onToggleCompare,
  lang = 'bn'
}) => {
  const t = TRANSLATIONS[lang];
  const savings = product.originalPrice - product.price;

  // Dynamic stock status calculation based on product quantity
  const stock = typeof product.stockCount === 'number' ? product.stockCount : (product.inStock ? 15 : 0);
  const isOutOfStock = !product.inStock || stock <= 0;
  const isLowStock = !isOutOfStock && stock <= 10;
  const isInStock = !isOutOfStock && !isLowStock;

  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col group relative ${
      isCompared ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-md' : 'border-gray-200 hover:shadow-xl'
    }`}>
      
      {/* Top Floating Badges */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
        <span className="px-2 py-0.5 rounded-md text-[10.5px] font-black bg-[#0c4a28] text-amber-300 shadow-xs border border-amber-400/30">
          -{product.discountPercent}%
        </span>

        {/* Dynamic Stock Status Badge */}
        {isOutOfStock ? (
          <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-rose-600 text-white shadow-xs border border-rose-500/70 flex items-center gap-1">
            <AlertCircle className="w-2.5 h-2.5 shrink-0" />
            <span>{t.outOfStock}</span>
          </span>
        ) : isLowStock ? (
          <span className="px-2 py-0.5 rounded-md text-[9.5px] font-extrabold bg-amber-500 text-emerald-950 shadow-xs border border-amber-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping shrink-0" />
            <span>{lang === 'en' ? `Low Stock (${stock})` : `সীমিত স্টক (${stock} টি)`}</span>
          </span>
        ) : (
          <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-white/95 text-emerald-800 shadow-xs border border-emerald-300/80 flex items-center gap-1 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span>{lang === 'en' ? `In Stock (${stock})` : `ইন-স্টক (${stock})`}</span>
          </span>
        )}
        {product.badge && (
          <span className="px-2 py-0.5 rounded-md text-[9.5px] font-extrabold bg-amber-600 text-white shadow-xs">
            {product.badge}
          </span>
        )}
        {isCompared && (
          <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1 shadow-xs">
            <Scale className="w-2.5 h-2.5 text-amber-700" /> {lang === 'en' ? 'Compared' : 'তুলনা যুক্ত'}
          </span>
        )}
      </div>

      {/* Wishlist, Compare & Quick View Buttons */}
      <div className="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1.5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer ${
            isWishlisted
              ? 'bg-amber-500 text-emerald-950 shadow-amber-500/30'
              : 'bg-white/90 hover:bg-white text-gray-700 hover:text-emerald-800'
          }`}
          title={t.wishlist}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-emerald-950' : ''}`} />
        </button>

        {onToggleCompare && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(product);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer ${
              isCompared
                ? 'bg-[#0c4a28] text-amber-300'
                : 'bg-white/90 hover:bg-white text-gray-700 hover:text-emerald-800 opacity-90 group-hover:opacity-100'
            }`}
            title={isCompared ? 'Remove from Compare' : t.compare}
          >
            <Scale className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectProduct(product);
          }}
          className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-emerald-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          title={t.quickView}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Image with Enhanced Hover-Zoom */}
      <div
        onClick={() => onSelectProduct(product)}
        className="w-full h-48 bg-gray-50 overflow-hidden cursor-pointer relative"
      >
        <img
          src={product.images[0]}
          alt={getProductTitle(product, lang)}
          className={`w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform ${
            isOutOfStock ? 'opacity-60 grayscale' : ''
          }`}
          loading="lazy"
        />
        {/* Out of stock overlay banner */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center p-2 z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-lg bg-rose-600 text-white text-xs font-black shadow-md border border-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              {t.outOfStock}
            </span>
          </div>
        )}
        {/* Subtle hover overlay for contrast and depth */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Breadcrumb */}
          <div className="flex items-center gap-1 text-[11px] text-sky-600 font-medium mb-1 truncate">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectCategory) onSelectCategory('all');
              }}
              className="text-sky-600 hover:text-sky-800 hover:underline cursor-pointer"
            >
              {t.home}
            </button>
            <span className="text-gray-400 select-none">›</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectCategory) onSelectCategory(product.category);
              }}
              className="text-sky-600 hover:text-sky-800 hover:underline font-semibold uppercase tracking-wider truncate cursor-pointer"
              title={product.category}
            >
              {product.category}
            </button>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelectProduct(product)}
            className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 mt-1 hover:text-emerald-800 cursor-pointer transition-colors"
            title={getProductTitle(product, lang)}
          >
            {getProductTitle(product, lang)}
          </h3>

          {/* Rating and Stock */}
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold ml-1 text-gray-800">{product.rating}</span>
            </div>
            <span className="text-[11px] text-gray-400">({product.reviewCount})</span>

            {/* Dynamic Stock Status Indicator */}
            {isOutOfStock ? (
              <span className="text-[10px] ml-auto text-rose-700 font-bold bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded flex items-center gap-1 shadow-xs">
                <AlertCircle className="w-3 h-3 text-rose-600 shrink-0" />
                <span>{t.outOfStock}</span>
              </span>
            ) : isLowStock ? (
              <span className="text-[10px] ml-auto text-amber-900 font-bold bg-amber-50 border border-amber-300 px-1.5 py-0.5 rounded flex items-center gap-1 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                <span>{lang === 'en' ? `Only ${stock} left` : `মাত্র ${stock} টি বাকি`}</span>
              </span>
            ) : (
              <span className="text-[10.5px] ml-auto text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow-xs">
                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{lang === 'en' ? `In Stock (${stock})` : `স্টকে আছে (${stock})`}</span>
              </span>
            )}
          </div>

          {/* Color preview dots if any */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1 mt-2">
              <span className="text-[10px] text-gray-400 mr-1">{lang === 'en' ? 'Color:' : 'রঙ:'}</span>
              {product.colors.map((c, idx) => (
                <span
                  key={idx}
                  className="w-3 h-3 rounded-full border border-gray-300 shadow-xs"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          )}

          {/* Price */}
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-black text-[#0c4a28]">
              ৳{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
            <span className="text-[10px] text-[#0284c7] bg-[#87CEEB]/15 border border-[#87CEEB]/40 px-1.5 py-0.5 rounded font-bold ml-auto">
              {lang === 'en' ? `Save ৳${savings.toLocaleString()}` : `সাশ্রয় ৳${savings.toLocaleString()}`}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-col gap-2">
          {onToggleCompare && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(product);
              }}
              className={`w-full py-1 px-2 rounded-lg text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                isCompared
                  ? 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
                  : 'bg-gray-50 text-gray-600 hover:text-emerald-800 hover:bg-emerald-50/50 border border-gray-200/80'
              }`}
            >
              <Scale className="w-3 h-3 text-amber-600" />
              <span>
                {lang === 'en'
                  ? (isCompared ? '✓ Added to Compare' : '+ Compare Product')
                  : (isCompared ? '✓ তুলনা তালিকায় যুক্ত' : '+ পণ্য তুলনা করুন')}
              </span>
            </button>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              disabled={isOutOfStock}
              onClick={() => onAddToCart(product)}
              className={`w-full py-2 px-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors ${
                isOutOfStock
                  ? 'border border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                  : 'border border-emerald-800/30 hover:border-emerald-700 text-emerald-900 hover:bg-emerald-50 cursor-pointer'
              }`}
            >
              <ShoppingCart className={`w-3.5 h-3.5 ${isOutOfStock ? 'text-gray-400' : 'text-emerald-800'}`} />
              <span className="text-[11px] sm:text-xs">{t.addToCart}</span>
            </button>

            <button
              disabled={isOutOfStock}
              onClick={() => onFastBuyNow(product)}
              className={`w-full py-2 px-1.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all ${
                isOutOfStock
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed shadow-none'
                  : 'bg-[#0c4a28] hover:bg-[#07331c] text-amber-200 shadow-emerald-950/20 hover:shadow-emerald-950/40 cursor-pointer'
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${isOutOfStock ? 'text-gray-400' : 'fill-amber-300 text-amber-300'}`} />
              <span className="text-[11px] sm:text-xs">
                {isOutOfStock ? t.outOfStock : t.buyNow}
              </span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
