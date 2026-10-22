import React from 'react';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'horizontal' | 'compact' | 'receipt';
  showTagline?: boolean;
  showWebsite?: boolean;
  theme?: 'light' | 'dark';
}

export const KashmirPremierLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  showTagline = true,
  showWebsite = false,
  theme = 'light'
}) => {
  const logoSrc = '/kashmir-premier-logo.jpeg';

  // Sizing definitions
  const sizeMap = {
    sm: { img: 'w-9 h-9', title: 'text-base', sub: 'text-[9px]', tag: 'text-[8px]' },
    md: { img: 'w-12 h-12', title: 'text-xl', sub: 'text-[10px]', tag: 'text-[9.5px]' },
    lg: { img: 'w-16 h-16', title: 'text-2xl', sub: 'text-xs', tag: 'text-[11px]' },
    xl: { img: 'w-24 h-24', title: 'text-3xl', sub: 'text-sm', tag: 'text-xs' }
  }[size];

  // Common circular emblem image with luxury gold & sky blue border
  const Emblem = ({ imgClass = 'w-12 h-12' }: { imgClass?: string }) => (
    <div className={`relative shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-amber-600 via-[#87CEEB] to-amber-300 shadow-sm ${imgClass}`}>
      <img
        src={logoSrc}
        alt="Kashmir Premier Logo"
        className="w-full h-full object-cover rounded-full bg-emerald-950"
        onError={(e) => {
          // Fallback if needed
          const target = e.currentTarget;
          if (target.src.indexOf('KP_LOGO') === -1) {
            target.src = '/assets/aistudio/KP_LOGO_53259c38.jpeg';
          }
        }}
      />
    </div>
  );

  // Variant: Receipt (Clean, high-contrast, centered for printed/rendered invoice)
  if (variant === 'receipt') {
    return (
      <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
        <Emblem imgClass="w-16 h-16 mb-1.5" />
        <div className="flex items-center justify-center leading-none tracking-tight">
          <span className="font-serif font-black text-2xl text-[#0c4a28] tracking-tight">
            KASHMIR
          </span>
          <span className="font-serif font-black text-2xl text-[#b45309] italic tracking-tight ml-1.5">
            PREMIER
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center justify-center gap-2 mt-1 w-full max-w-[240px]">
            <div className="h-[1px] bg-amber-500 flex-1" />
            <span className="text-[9.5px] font-semibold text-emerald-900 tracking-wider uppercase whitespace-nowrap">
              Pure Goodness from Kashmir
            </span>
            <div className="h-[1px] bg-amber-500 flex-1" />
          </div>
        )}
        {showWebsite && (
          <div className="mt-1.5 inline-flex items-center gap-1.5 bg-[#0c4a28] text-amber-200 px-3 py-0.5 rounded-full text-[10px] font-medium">
            <span className="tracking-wide">kashmirpremier.com</span>
          </div>
        )}
      </div>
    );
  }

  // Variant: Horizontal (ideal for navbars, header bars)
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
        <Emblem imgClass={sizeMap.img} />
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline leading-tight">
            <span
              className={`font-serif font-black tracking-tight ${sizeMap.title} ${
                theme === 'dark' ? 'text-white' : 'text-[#0c4a28]'
              }`}
            >
              Kashmir
            </span>
            <span
              className={`font-serif font-bold italic tracking-wide ml-1.5 ${sizeMap.title} ${
                theme === 'dark' ? 'text-amber-400' : 'text-[#b45309]'
              }`}
            >
              Premier
            </span>
          </div>
          {showTagline && (
            <div className="flex items-center gap-1.5 -mt-0.5">
              <span
                className={`font-sans font-medium tracking-wide uppercase ${sizeMap.tag} ${
                  theme === 'dark' ? 'text-amber-200/90' : 'text-emerald-800'
                }`}
              >
                Pure Goodness from Kashmir
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB] shrink-0" title="Himalayan Glacial Purity" />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Variant: Compact (single row, no tagline)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        <Emblem imgClass={sizeMap.img} />
        <div className="flex items-baseline leading-none">
          <span
            className={`font-serif font-black text-base sm:text-lg tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-[#0c4a28]'
            }`}
          >
            Kashmir
          </span>
          <span className="font-serif font-bold text-base sm:text-lg text-amber-500 italic ml-1">
            Premier
          </span>
        </div>
      </div>
    );
  }

  // Variant: Full Stacked (Standard / Footer / Modals)
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      <Emblem
        imgClass={
          size === 'sm'
            ? 'w-12 h-12'
            : size === 'md'
            ? 'w-16 h-16'
            : size === 'lg'
            ? 'w-24 h-24'
            : 'w-32 h-32'
        }
      />
      <div className="flex items-baseline justify-center leading-tight mt-2">
        <span
          className={`font-serif font-black tracking-tight ${sizeMap.title} ${
            theme === 'dark' ? 'text-white' : 'text-[#0c4a28]'
          }`}
        >
          Kashmir
        </span>
        <span
          className={`font-serif font-black italic tracking-tight ml-1.5 ${sizeMap.title} ${
            theme === 'dark' ? 'text-amber-400' : 'text-[#b45309]'
          }`}
        >
          Premier
        </span>
      </div>

      {showTagline && (
        <div className="flex items-center justify-center gap-2 mt-1 w-full max-w-xs px-2">
          <div className={`h-[1px] flex-1 ${theme === 'dark' ? 'bg-amber-400/40' : 'bg-amber-500/50'}`} />
          <span
            className={`font-medium tracking-wider uppercase whitespace-nowrap ${sizeMap.tag} ${
              theme === 'dark' ? 'text-amber-200' : 'text-emerald-900'
            }`}
          >
            Pure Goodness from Kashmir
          </span>
          <div className={`h-[1px] flex-1 ${theme === 'dark' ? 'bg-amber-400/40' : 'bg-amber-500/50'}`} />
        </div>
      )}

      {showWebsite && (
        <div
          className={`mt-2 inline-flex items-center gap-1.5 rounded-full font-medium ${
            theme === 'dark'
              ? 'bg-emerald-900/80 text-amber-300 border border-amber-500/30'
              : 'bg-[#0c4a28] text-amber-200'
          } ${sizeMap.sub} px-3 py-0.5`}
        >
          <span>kashmirpremier.com</span>
        </div>
      )}
    </div>
  );
};

// Backward compatibility alias so all existing component imports work without refactoring
export const BanglaXpressLogo = KashmirPremierLogo;
