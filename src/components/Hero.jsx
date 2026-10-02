import { Link } from 'react-router-dom';
import { heroImage, brandInfo } from '../data/products';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-elvara-black hero-section-spacing">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-elvara-black via-elvara-dark to-elvara-black pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-elvara-gold/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 bg-amber-900/8 rounded-full blur-3xl pointer-events-none" />

      {/* Main Luxury Container */}
      <div className="container-luxury relative">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* Text Column (Items 1-5 on Mobile, Left Column on Desktop) */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start max-w-140 mx-auto lg:mx-0 w-full">
            
            {/* 1. Eyebrow */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-3 mb-3.5 sm:mb-7 animate-fade-in-up max-w-full">
              <div className="w-3 sm:w-8 h-px bg-elvara-gold/50 shrink-0" />
              <span className="text-[8.5px] xs:text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.25em] uppercase text-elvara-gold/90 font-body font-medium whitespace-nowrap">
                Artisan Fragrance Startup · Pernambut (2026)
              </span>
              <div className="w-3 sm:w-8 h-px bg-elvara-gold/50 shrink-0 lg:hidden" />
            </div>

            {/* 2. Main Heading (Fluid Editorial Typography) */}
            <h1
              className="font-heading font-light leading-[1.06] tracking-[0.01em] mb-3.5 sm:mb-8 text-elvara-ivory animate-fade-in-up text-fluid-hero"
              style={{ animationDelay: '100ms' }}
            >
              <span className="block">Sculpting</span>
              <span className="block text-elvara-ivory/95">Scents Into</span>
              <span className="block text-elvara-gold italic font-normal">Art.</span>
            </h1>

            {/* 3. Description (Controlled Line Length) */}
            <p
              className="text-elvara-muted/80 text-[12px] xs:text-[13px] sm:text-[15px] md:text-base leading-relaxed max-w-70 xs:max-w-[340px] sm:max-w-none prose-editorial mb-5 sm:mb-10 font-body font-light animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              Discover fragrances crafted with rare absolutes, aged woods, and timeless French artistry. Created for those who leave an indelible impression.
            </p>

            {/* 4. CTA Buttons */}
            <div
              className="w-full max-w-65 xs:max-w-[280px] sm:max-w-none sm:w-auto flex flex-col sm:flex-row items-center gap-2.5 sm:gap-5 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <Link
                to="/collection"
                className="w-full sm:w-auto text-center group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-elvara-gold text-elvara-black px-6 sm:px-9 py-2.5 sm:py-3.5 text-[10.5px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase font-medium hover:bg-elvara-gold-soft transition-all duration-300 shadow-lg shadow-elvara-gold/10 min-h-10.5 sm:min-h-11.5"
              >
                <span>Explore Collection</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/signature"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border border-elvara-border/60 hover:border-elvara-gold/70 text-elvara-ivory/80 hover:text-elvara-gold px-6 sm:px-8 py-2.5 sm:py-3.5 text-[10.5px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase transition-all duration-300 min-h-10.5 sm:min-h-11.5"
              >
                <span>Signature Line</span>
              </Link>
            </div>

            {/* 5. Statistics (Responsive 3-Column Grid) */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-14 pt-4 sm:pt-8 border-t border-elvara-border/30 max-w-[320px] sm:max-w-105 w-full animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              {[
                { value: brandInfo.stats.fragrances, label: 'Curated Scents' },
                { value: brandInfo.stats.clients, label: 'Connoisseurs' },
                { value: brandInfo.stats.signatures, label: 'Signature Reserves' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-elvara-gold text-lg xs:text-xl sm:text-2xl md:text-3xl font-heading font-light leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-elvara-muted/60 text-[8px] xs:text-[9px] sm:text-[10px] tracking-[0.08em] sm:tracking-[0.15em] uppercase font-body line-clamp-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Perfume Image Frame (Items 6 & 7 on Mobile, Right Column on Desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full mt-6 sm:mt-0">
            <div
              className="relative w-full max-w-55 xs:max-w-[260px] sm:max-w-85 md:max-w-92.5 lg:max-w-102.5 p-4 sm:p-7 lg:p-8 animate-fade-in"
              style={{ animationDelay: '250ms' }}
            >
              {/* Outer Decorative Frame */}
              <div className="absolute inset-0 border border-elvara-gold/25 pointer-events-none transform -rotate-1 rounded-sm" />
              <div className="absolute inset-1.5 sm:inset-2 border border-elvara-border/40 pointer-events-none rounded-sm" />

              {/* Delicate Gold Corner Accents */}
              <div className="absolute -top-1 -left-1 w-3 sm:w-3.5 h-3 sm:h-3.5 border-t-2 border-l-2 border-elvara-gold pointer-events-none" />
              <div className="absolute -top-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 border-t-2 border-r-2 border-elvara-gold pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-3 sm:w-3.5 h-3 sm:h-3.5 border-b-2 border-l-2 border-elvara-gold pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 border-b-2 border-r-2 border-elvara-gold pointer-events-none" />

              {/* Inner Showcase Box */}
              <div className="relative bg-linear-to-b from-elvara-surface/85 via-elvara-dark to-elvara-black/95 p-4 sm:p-7 lg:p-8 overflow-hidden shadow-2xl">
                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-amber-600/15 rounded-full blur-2xl pointer-events-none" />

                {/* 6. Perfume Image */}
                <div className="relative z-10 aspect-3/4 flex items-center justify-center">
                  <img
                    src={heroImage}
                    alt="Perfume Showcase signature flacon with 24k gold engraved accents"
                    className="w-full h-full object-contain mx-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] hover:scale-[1.03] transition-transform duration-700"
                    loading="eager"
                  />
                </div>

                {/* 7. Image Caption / Subtitle */}
                <div className="relative z-10 text-center mt-3 sm:mt-4 pt-2.5 sm:pt-3.5 border-t border-elvara-border/30">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-elvara-gold/90 font-body block font-medium">
                    Signature Edition · Pernambut
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-elvara-muted/60 font-body font-light tracking-wider mt-0.5 block">
                    Handcrafted Flacon & Gold Cap
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 8. Scroll indicator with generous clearance */}
        <div className="mt-8 sm:mt-24 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div
            className="inline-flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer p-2"
            onClick={() => window.scrollBy({ top: 450, behavior: 'smooth' })}
          >
            <span className="text-[8.5px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] text-elvara-muted/40 uppercase font-body group-hover:text-elvara-gold transition-colors">
              Scroll to Discover
            </span>
            <div className="w-px h-5 sm:h-6 bg-linear-to-b from-elvara-gold/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
