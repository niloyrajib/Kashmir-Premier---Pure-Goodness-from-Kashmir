import React, { useState } from 'react';
import { LayoutGrid, Flame, Sparkles, Tag, ChevronDown, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Category } from '../../types';
import { TRANSLATIONS, getCategoryDisplayName } from '../../utils/translations';

interface CategoryBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onScrollToFlashSale: () => void;
  onOpenTracking: () => void;
  lang?: 'en' | 'bn';
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onScrollToFlashSale,
  onOpenTracking,
  lang = 'bn'
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  return (
    <nav className="bg-white border-b border-gray-100 hidden md:block relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* All Categories Dropdown Menu */}
        <div className="relative">
          <button
            id="all-categories-dropdown-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2.5 bg-[#0c4a28] hover:bg-[#07331c] text-amber-200 px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4 text-amber-300" />
            <span>{t.allCategories}</span>
            <ChevronDown className={`w-4 h-4 text-amber-300 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Mega Dropdown Menu */}
          {dropdownOpen && (
            <div
              onMouseLeave={() => setDropdownOpen(false)}
              className="absolute top-full left-0 w-64 bg-white border border-emerald-100 shadow-xl rounded-b-xl z-50 py-2 divide-y divide-emerald-50 animate-in fade-in slide-in-from-top-1 duration-150"
            >
              <button
                onClick={() => {
                  onSelectCategory('all');
                  setDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between hover:bg-emerald-50 hover:text-emerald-800 transition-colors ${
                  selectedCategory === 'all' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-gray-700'
                }`}
              >
                <span>{lang === 'en' ? 'All Products' : 'সব প্রোডাক্ট (All Products)'}</span>
                <span className="text-[11px] text-emerald-600">View all</span>
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.name);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs font-medium flex items-center justify-between hover:bg-emerald-50 hover:text-emerald-800 transition-colors ${
                    selectedCategory === cat.name ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-gray-700'
                  }`}
                >
                  <div className="flex flex-col">
                    <span>{getCategoryDisplayName(cat, lang)}</span>
                    <span className="text-[10px] text-gray-400">
                      {lang === 'bn' ? cat.name : (cat.banglaName || '')}
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-100 px-1.5 py-0.5 rounded font-mono">
                    {cat.itemCount}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Center Quick Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-4 lg:gap-6 text-xs font-medium text-gray-700">
          <button
            onClick={() => onSelectCategory('all')}
            className={`py-3 hover:text-emerald-800 transition-colors flex items-center gap-1 ${
              selectedCategory === 'all' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800' : ''
            }`}
          >
            <span>{t.home}</span>
          </button>

          <button
            onClick={onScrollToFlashSale}
            className="py-3 text-amber-600 hover:text-amber-700 font-bold transition-colors flex items-center gap-1.5 animate-pulse"
          >
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>{t.flashDealsNav}</span>
          </button>

          <button
            onClick={() => onSelectCategory('Spice')}
            className={`py-3 hover:text-emerald-800 transition-colors ${
              selectedCategory === 'Spice' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800' : ''
            }`}
          >
            {lang === 'en' ? 'Spice' : 'খাঁটি মসলা'}
          </button>

          <button
            onClick={() => onSelectCategory('Grains')}
            className={`py-3 hover:text-emerald-800 transition-colors ${
              selectedCategory === 'Grains' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800' : ''
            }`}
          >
            {lang === 'en' ? 'Grains' : 'দানা শস্য'}
          </button>

          <button
            onClick={() => onSelectCategory('Pulse')}
            className={`py-3 hover:text-emerald-800 transition-colors ${
              selectedCategory === 'Pulse' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800' : ''
            }`}
          >
            {lang === 'en' ? 'Pulse' : 'ডাল ও ডালজাতীয়'}
          </button>

          <button
            onClick={() => onSelectCategory('Nuts & Fruits')}
            className={`py-3 hover:text-emerald-800 transition-colors ${
              selectedCategory === 'Nuts & Fruits' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800' : ''
            }`}
          >
            {lang === 'en' ? 'Nuts & Fruits' : 'বাদাম ও ড্রাই ফ্রুটস'}
          </button>

          <button
            onClick={() => onSelectCategory('Cattle Feed')}
            className={`py-3 hover:text-emerald-800 transition-colors ${
              selectedCategory === 'Cattle Feed' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800' : ''
            }`}
          >
            {lang === 'en' ? 'Cattle Feed' : 'গবাদি পশুর খাদ্য'}
          </button>

          <button
            onClick={onOpenTracking}
            className="py-3 text-[#0284c7] hover:text-[#0369a1] font-semibold transition-colors flex items-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>{t.orderTrackingNav}</span>
          </button>
        </div>

        {/* Right Badges */}
        <div className="flex items-center gap-2.5 text-xs font-medium">
          <div className="flex items-center gap-1.5 text-[#0369a1] bg-[#87CEEB]/20 px-2.5 py-1 rounded-full border border-[#87CEEB]/50 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold">100% Himalayan Pure</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px] font-semibold">{t.codBadgeNav}</span>
          </div>
        </div>

      </div>
    </nav>
  );
};
