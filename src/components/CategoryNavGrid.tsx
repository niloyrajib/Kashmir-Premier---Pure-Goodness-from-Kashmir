import React from 'react';
import {
  ArrowRight,
  Wheat,
  Sprout,
  CircleDot,
  Flame,
  Sparkles,
  Apple,
  Droplets,
  Beef,
  Egg,
  Fish,
  Bird,
  Cat,
  Package,
  Layers,
  Watch,
  Headphones,
  Zap,
  Laptop,
  Home,
  Shirt,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { Category } from '../types';
import { getCategoryDisplayName } from '../utils/translations';

interface CategoryNavGridProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  title?: string;
  subtitle?: string;
  lang?: 'en' | 'bn';
}

const ICON_MAP: Record<string, any> = {
  Wheat,
  Sprout,
  CircleDot,
  Flame,
  Sparkles,
  Apple,
  Droplets,
  Beef,
  Egg,
  Fish,
  Bird,
  Cat,
  Package,
  Layers,
  Watch,
  Headphones,
  Zap,
  Laptop,
  Home,
  Shirt,
  Smartphone
};

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80';

export const CategoryNavGrid: React.FC<CategoryNavGridProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  title,
  subtitle,
  lang = 'bn'
}) => {
  const defaultTitle = lang === 'en' ? 'Browse All Categories' : 'সকল ক্যাটাগরি ব্রাউজ করুন';
  const defaultSubtitle = lang === 'en' ? 'Explore our fresh grains, pure spices, pulses and animal feed' : 'খাঁটি দানা শস্য, মসলা, ডাল ও পুষ্টিকর ফিড সামগ্রী সহজে খুঁজে নিন';
  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;
  const handleCategoryClick = (cat: Category) => {
    if (cat.link) {
      if (cat.link.startsWith('http://') || cat.link.startsWith('https://')) {
        window.open(cat.link, '_blank', 'noopener,noreferrer');
        return;
      }
      if (cat.link.startsWith('#')) {
        const el = document.querySelector(cat.link);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
    }
    onSelectCategory(cat.name);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
            {displayTitle}
          </h2>
          <p className="text-xs text-gray-500">
            {displaySubtitle}
          </p>
        </div>

        {selectedCategory !== 'all' && (
          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
          >
            <span>{lang === 'en' ? 'Show All' : 'সব দেখুন (Show All)'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
        {categories.map((cat) => {
          const IconComp = ICON_MAP[cat.iconName] || Package;
          const isSelected = selectedCategory === cat.name;

          return (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat)}
              className={`p-3 rounded-2xl border text-center cursor-pointer transition-all duration-200 group flex flex-col items-center justify-between min-h-[128px] ${
                isSelected
                  ? 'border-[#0c4a28] bg-emerald-50/90 shadow-md ring-2 ring-emerald-300 scale-102'
                  : 'border-gray-200 hover:border-emerald-300 bg-white hover:shadow-md'
              }`}
              title={cat.link ? `Link: ${cat.link}` : cat.name}
            >
              {/* Category Image / Icon with reliable fallback */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all overflow-hidden mb-2 relative bg-gray-100 border border-gray-100 ${
                  isSelected
                    ? 'ring-2 ring-emerald-600 shadow-xs'
                    : 'group-hover:scale-105 group-hover:shadow-xs'
                }`}
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_IMG;
                    }}
                  />
                ) : (
                  <IconComp className="w-6 h-6 text-gray-700 group-hover:text-rose-600" />
                )}
              </div>

              <div className="w-full">
                <h3 className="text-xs font-bold text-gray-900 line-clamp-1 group-hover:text-rose-600">
                  {getCategoryDisplayName(cat, lang)}
                </h3>
                <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                  {lang === 'bn' ? cat.name : (cat.banglaName || '')}
                </p>
              </div>

              <div className="mt-1 flex items-center gap-1">
                <span className="text-[9.5px] font-mono font-semibold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                  {cat.itemCount || 0}+ {lang === 'en' ? 'items' : 'আইটেম'}
                </span>
                {cat.link && (
                  <ExternalLink className="w-2.5 h-2.5 text-rose-500 opacity-60 group-hover:opacity-100" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
