import React from 'react';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Truck,
  Clock,
  RefreshCw,
  ExternalLink,
  CreditCard,
  ChevronRight
} from 'lucide-react';
import { STORE_SETTINGS } from '../data/mockData';
import { ThemeConfig } from '../types';
import { BanglaXpressLogo } from './BanglaXpressLogo';

interface FooterProps {
  onOpenTracking: () => void;
  onSelectCategory: (cat: string) => void;
  onOpenAdmin: () => void;
  footerConfig?: ThemeConfig['footer'];
  lang?: 'en' | 'bn';
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTracking,
  onSelectCategory,
  onOpenAdmin,
  footerConfig,
  lang = 'bn'
}) => {
  const brandName = footerConfig?.brandName || 'Kashmir Premier';
  const brandSuffix = footerConfig?.brandSuffix !== undefined ? footerConfig.brandSuffix : '';
  const helpline = footerConfig?.helpline || STORE_SETTINGS.phone;
  const whatsapp = footerConfig?.whatsapp || STORE_SETTINGS.whatsapp;
  const email = footerConfig?.email || STORE_SETTINGS.email;
  const address = footerConfig?.address || 'Pristine Valleys of Kashmir • Worldwide Express Delivery';
  const aboutText =
    footerConfig?.aboutText ||
    (lang === 'en'
      ? 'Kashmir Premier brings pure, authentic goodness straight from the pristine valleys of Kashmir to your table: certified Mongra saffron, royal Kashmiri walnuts, Mamra almonds, and Himalayan specialty foods.'
      : 'কাশ্মীর প্রিমিয়ার সরাসরি কাশ্মীরের নির্মল উপত্যকা থেকে আপনার দস্তরখানে পৌঁছে দিচ্ছে ১০০% খাঁটি জাফরান, আখরোট, কাঠবাদাম ও অর্গানিক ড্রাই ফ্রুটস।');
  const copyright =
    footerConfig?.copyrightText ||
    '© 2026 Kashmir Premier. All Rights Reserved. Pure Goodness from Kashmir.';

  const categoriesTitle =
    footerConfig?.categoriesTitle || (lang === 'en' ? 'Popular Categories' : 'জনপ্রিয় ক্যাটাগরি');
  const categoriesList =
    footerConfig?.categoriesList && footerConfig.categoriesList.length > 0
      ? footerConfig.categoriesList
      : lang === 'en'
      ? [
          { label: 'Smart Watches & Calling Watches', categoryName: 'Smart Watches' },
          { label: 'TWS & Wireless Earbuds', categoryName: 'Earbuds & Audio' },
          { label: 'Fast GaN Chargers & Power Banks', categoryName: 'Power & Charging' },
          { label: "Men's Premium Baseball Caps", categoryName: "Men's Caps & Fashion" },
          { label: 'Smart Home & Kitchen Gadgets', categoryName: 'Home & Kitchen' },
          { label: 'Gaming Accessories & Keyboards', categoryName: 'Computer & Gaming' }
        ]
      : [
          { label: 'স্মার্টওয়াচ ও কলিং ওয়াচ (Smart Watches)', categoryName: 'Smart Watches' },
          { label: 'টিডব্লিউএস ও ব্লুটুথ ইয়ারবাডস (TWS Earbuds)', categoryName: 'Earbuds & Audio' },
          { label: 'ফাস্ট চার্জার ও পাওয়ার ব্যাংক (GaN Chargers)', categoryName: 'Power & Charging' },
          { label: 'প্রিমিয়াম বেসবল ক্যাপ (Men\'s Caps)', categoryName: "Men's Caps & Fashion" },
          { label: 'হোম ও কিচেন গ্যাজেট (Home Appliances)', categoryName: 'Home & Kitchen' },
          { label: 'গেমিং কিবোর্ড ও মাউস (Gaming Accessories)', categoryName: 'Computer & Gaming' }
        ];

  const customerCareTitle =
    footerConfig?.customerCareTitle || (lang === 'en' ? 'Customer Care & Policies' : 'গ্রাহক সেবা ও পলিসি');
  const customerCareItems =
    footerConfig?.customerCareItems && footerConfig.customerCareItems.length > 0
      ? footerConfig.customerCareItems
      : lang === 'en'
      ? [
          { label: 'Live Order Tracking', iconType: 'truck' as const, actionType: 'track' as const },
          { label: '7 Days Return & Replacement Policy', iconType: 'refresh' as const, actionType: 'none' as const },
          { label: 'Warranty Claim Instructions', iconType: 'shield' as const, actionType: 'none' as const },
          { label: 'Delivery Schedule (Dhaka 24h, Nationwide 48-72h)', iconType: 'clock' as const, actionType: 'none' as const },
          { label: 'Shop Merchant & Admin Dashboard', iconType: 'link' as const, actionType: 'admin' as const }
        ]
      : [
          { label: 'লাইভ অর্ডার ট্র্যাকিং (Track Order)', iconType: 'truck' as const, actionType: 'track' as const },
          { label: '৭ দিনের রিটার্ন ও রিপ্লেসমেন্ট পলিসি', iconType: 'refresh' as const, actionType: 'none' as const },
          { label: 'ওয়ারেন্টি দাবি করার নিয়মাবলী', iconType: 'shield' as const, actionType: 'none' as const },
          { label: 'ডেলিভারি সময়সূচী (ঢাকা ২৪h, সারাদেশে ৪৮-৭২h)', iconType: 'clock' as const, actionType: 'none' as const },
          { label: 'Laravel Merchant & Admin Management Panel', iconType: 'link' as const, actionType: 'admin' as const }
        ];

  const paymentTitle =
    footerConfig?.paymentTitle || (lang === 'en' ? 'Accepted Payment Methods' : 'পেমেন্ট মাধ্যমসমূহ');
  const paymentMethods =
    footerConfig?.paymentMethods && footerConfig.paymentMethods.length > 0
      ? footerConfig.paymentMethods
      : [
          { name: 'Cash on Delivery', colorScheme: 'emerald' },
          { name: 'bKash বিকাশ', colorScheme: 'pink' },
          { name: 'Nagad নগদ', colorScheme: 'orange' },
          { name: 'Rocket রকেট', colorScheme: 'purple' },
          { name: 'Visa / Master', colorScheme: 'blue' }
        ];

  const courierTitle =
    footerConfig?.courierTitle || (lang === 'en' ? 'Delivery Partners' : 'ডেলিভারি পার্টনার');
  const couriersList =
    footerConfig?.couriersList && footerConfig.couriersList.length > 0
      ? footerConfig.couriersList
      : ['Steadfast Courier', 'Pathao Courier', 'RedX Express'];

  const legalLinks =
    footerConfig?.legalLinks && footerConfig.legalLinks.length > 0
      ? footerConfig.legalLinks
      : lang === 'en'
      ? [
          { label: 'Privacy Policy', url: '#' },
          { label: 'Terms of Service', url: '#' },
          { label: 'Return & Refund Policy', url: '#' }
        ]
      : [
          { label: 'প্রাইভেসি পলিসি', url: '#' },
          { label: 'ব্যবহারের শর্তাবলী', url: '#' },
          { label: 'রিটার্ন পলিসি', url: '#' }
        ];

  // Helper for Payment Badge Colors
  const getBadgeColorClass = (color: string) => {
    switch (color) {
      case 'pink':
        return 'bg-pink-950/60 border-pink-700/50 text-pink-300';
      case 'orange':
        return 'bg-orange-950/60 border-orange-700/50 text-orange-300';
      case 'purple':
        return 'bg-purple-950/60 border-purple-700/50 text-purple-300';
      case 'sky':
      case 'blue':
        return 'bg-sky-950/60 border-[#87CEEB]/50 text-[#87CEEB]';
      case 'emerald':
      case 'green':
        return 'bg-emerald-950/60 border-emerald-700/50 text-emerald-400';
      case 'amber':
      case 'yellow':
        return 'bg-amber-950/60 border-amber-700/50 text-amber-300';
      default:
        return 'bg-slate-800 border-slate-700 text-slate-300';
    }
  };

  // Helper for Icon Rendering
  const renderItemIcon = (iconType: string) => {
    switch (iconType) {
      case 'truck':
        return <Truck className="w-3.5 h-3.5 text-[#87CEEB] shrink-0" />;
      case 'refresh':
        return <RefreshCw className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      case 'shield':
        return <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case 'clock':
        return <Clock className="w-3.5 h-3.5 text-[#87CEEB] shrink-0" />;
      case 'phone':
        return <Phone className="w-3.5 h-3.5 text-rose-400 shrink-0" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />;
    }
  };

  return (
    <footer className="bg-[#042013] text-emerald-100/70 pt-14 pb-8 border-t border-emerald-900/60 relative selection:bg-amber-500 selection:text-emerald-950">
      {/* Pristine Himalayan Glacier Sky Blue Gradient Top Accent Ribbon */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-800 via-[#87CEEB] to-amber-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-emerald-900/40">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Store Official Logo Prominently Displayed */}
            <div className="flex items-center">
              <div
                className="cursor-pointer select-none inline-flex items-center hover:opacity-95 transition-opacity"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="flex items-center gap-3">
                  <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-amber-600 via-[#87CEEB] to-amber-300 shadow-lg shadow-black/40">
                    <img
                      src="/kashmir-premier-logo.jpeg"
                      alt="Kashmir Premier Logo"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover bg-emerald-950"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/aistudio/KP_LOGO_53259c38.jpeg';
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline">
                      <span className="font-serif font-black text-2xl text-white tracking-tight">Kashmir</span>
                      <span className="font-serif font-black text-2xl text-amber-400 italic tracking-wide ml-1.5">Premier</span>
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-amber-300/90">
                      Pure Goodness from Kashmir
                    </span>
                    <span className="text-[9px] text-emerald-300/60 italic">
                      From Our Valleys to Your Table
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              {aboutText}
            </p>

            <div className="space-y-2 text-xs pt-1">
              {helpline && (
                <div className="flex items-center gap-2 text-emerald-100/90">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">হটলাইন: {helpline}</span>
                </div>
              )}
              {whatsapp && (
                <div className="flex items-center gap-2 text-emerald-100/90">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {whatsapp}</span>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-2 text-emerald-100/90">
                  <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>{email}</span>
                </div>
              )}
              {address && (
                <div className="flex items-start gap-2 text-emerald-200/70">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {categoriesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {categoriesList.map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(item.categoryName)}
                    className="hover:text-amber-300 text-emerald-200/80 transition-colors text-left flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400 -ml-4 group-hover:ml-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Customer Care & Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {customerCareTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {customerCareItems.map((item, idx) => {
                if (item.actionType === 'track') {
                  return (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={onOpenTracking}
                        className="hover:text-amber-300 text-emerald-200/80 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                      >
                        {renderItemIcon(item.iconType)}
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                }

                if (item.actionType === 'admin') {
                  return (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={onOpenAdmin}
                        className="text-amber-300 hover:text-amber-200 transition-colors text-[11px] font-semibold underline flex items-center gap-1 text-left cursor-pointer"
                      >
                        {renderItemIcon(item.iconType)}
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={idx} className="flex items-center gap-1.5 text-emerald-200/80">
                    {renderItemIcon(item.iconType)}
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Payment Methods & Couriers (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {paymentTitle}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {paymentMethods.map((pm, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 border rounded text-[11px] font-bold ${getBadgeColorClass(
                    pm.colorScheme
                  )}`}
                >
                  {pm.name}
                </span>
              ))}
            </div>

            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 pt-2">
              {courierTitle}
            </h4>
            <div className="text-[11px] space-y-1 text-emerald-200/70">
              {couriersList.map((c, idx) => (
                <p key={idx}>• {c}</p>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright & Trade License */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-300/60">
          <p>
            {copyright}
          </p>
          <div className="flex items-center gap-3 flex-wrap text-[11px]">
            {legalLinks.map((link, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span>•</span>}
                <a
                  href={link.url || '#'}
                  onClick={(e) => {
                    if (!link.url || link.url === '#') e.preventDefault();
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

