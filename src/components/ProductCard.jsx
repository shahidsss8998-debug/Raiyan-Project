export default function ProductCard({ product, index, onViewDetails }) {
  return (
    <article
      className="group relative bg-elvara-dark/85 border border-elvara-border/50 hover:border-elvara-gold/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl"
    >
      {/* Product number pill */}
      <div className="absolute top-4 left-4 z-20">
        <span className="text-elvara-gold/60 text-[10px] tracking-[0.2em] font-body bg-elvara-black/80 backdrop-blur-sm px-2.5 py-1 border border-elvara-border/40">
          N° {product.number}
        </span>
      </div>

      {/* Image Container with generous padding and 4/5 aspect ratio */}
      <div className="relative aspect-4/5 overflow-hidden bg-linear-to-b from-elvara-surface/90 via-elvara-dark to-elvara-black p-7 sm:p-9 flex items-center justify-center">
        <img
          src={product.image}
          alt={`${product.name} artisan perfume by Perfume Showcase`}
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_16px_24px_rgba(0,0,0,0.85)]"
          loading="lazy"
        />

        {/* Desktop Hover Quick Action */}
        <div className="absolute inset-0 bg-elvara-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center p-4">
          <button
            onClick={() => onViewDetails(product)}
            className="border border-elvara-gold bg-elvara-black/90 px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase text-elvara-gold hover:bg-elvara-gold hover:text-elvara-black transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg font-body"
          >
            Explore Fragrance
          </button>
        </div>
      </div>

      {/* Card Info Section with controlled inner padding */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-elvara-dark/95 border-t border-elvara-border/40">
        <div>
          {/* Title & Price Header */}
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <h3 className="font-heading font-light text-xl sm:text-2xl text-elvara-ivory tracking-wide truncate group-hover:text-elvara-gold transition-colors">
              {product.name}
            </h3>
            <span className="text-elvara-gold font-heading text-lg sm:text-xl font-normal shrink-0">
              ₹{product.price}
            </span>
          </div>

          {/* Fragrance Type */}
          <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-elvara-gold/80 font-body mb-3">
            {product.type}
          </p>

          {/* Description with readable font size */}
          <p className="text-elvara-muted/70 text-xs sm:text-[13px] leading-relaxed line-clamp-2 font-body font-light mb-4">
            {product.description}
          </p>
        </div>

        {/* Action Button & Metadata (Accessible on Mobile and Touch) */}
        <div className="pt-4 border-t border-elvara-border/30 flex items-center justify-between">
          <span className="text-[10px] tracking-wider text-elvara-muted/50 font-body">
            50ml / 100ml
          </span>
          <button
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase text-elvara-gold hover:text-elvara-gold-soft font-body py-1.5 group-hover:translate-x-1 transition-transform min-h-9.5"
          >
            <span>View Notes</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
