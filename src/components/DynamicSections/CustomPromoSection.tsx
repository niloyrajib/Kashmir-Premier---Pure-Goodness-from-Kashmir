import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Truck } from 'lucide-react';

interface CustomPromoProps {
  customData?: {
    badge?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    bgGradient?: string;
    image?: string;
  };
  onAction?: () => void;
}

export const CustomPromoSection: React.FC<CustomPromoProps> = ({ customData, onAction }) => {
  const badge = customData?.badge || '🏔️ কাশ্মীর প্রিমিয়ার স্পেশাল অফার';
  const title = customData?.subtitle || 'কাশ্মীরের খাঁটি অর্গানিক উপহার আপনার দরজায়';
  const description = customData?.description || '১০০% খাঁটি জাফরান, কাশ্মীরি ড্রাই ফ্রুটস ও ঐতিহ্যবাহী পণ্য। ক্যাশ অন ডেলিভারি এবং ইনস্ট্যান্ট চেক সুবিধা!';
  const buttonText = customData?.buttonText || 'অর্ডার করুন';
  const bgGradient = customData?.bgGradient || 'from-[#042013] via-[#0c4a28] to-[#1e3a24]';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className={`bg-gradient-to-r ${bgGradient} rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800/60`}>
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <span className="px-3.5 py-1 rounded-full text-xs font-black bg-amber-500 text-emerald-950 uppercase tracking-wider mb-3 inline-block shadow-xs">
            {badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight font-serif">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 leading-relaxed">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap gap-4 justify-center md:justify-start text-xs font-semibold text-amber-200/90">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-amber-400" />
              ঢাকা মাত্র ৬০৳
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              ১০০% খাঁটি গ্যারান্টি
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              কাশ্মীরের খাঁটি সতেজতা
            </span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-3">
          {onAction && (
            <button
              onClick={onAction}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-emerald-950 font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
