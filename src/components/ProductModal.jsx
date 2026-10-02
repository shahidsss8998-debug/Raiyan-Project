import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductModal({ product, isOpen, onClose }) {
  const [selectedSize, setSelectedSize] = useState(0);
  const [addedMessage, setAddedMessage] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSelectedSize(0);
      setAddedMessage(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, product.sizes[selectedSize]);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  return (
    <div
      className={`fixed inset-0 z-70 transition-all duration-500 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal Container with responsive padding */}
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        <div
          className={`relative bg-elvara-dark border border-elvara-border/40 w-full max-w-4xl max-h-[92vh] overflow-y-auto transition-all duration-500 shadow-2xl my-auto ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {/* Close button with comfortable touch target */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 bg-elvara-black/80 hover:bg-elvara-black text-elvara-muted hover:text-elvara-ivory p-2.5 rounded-full border border-elvara-border/50 min-w-10 min-h-10 flex items-center justify-center shadow-lg transition-colors"
            aria-label="Close modal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image Showcase */}
            <div className="relative aspect-4/3 sm:aspect-square md:aspect-auto bg-linear-to-b from-elvara-surface to-elvara-black p-6 sm:p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={`${product.name} by Perfume Showcase`}
                className="w-full h-full max-h-65 sm:max-h-90 md:max-h-none object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
              />
              <div className="absolute bottom-3 left-3">
                <span className="text-elvara-gold/40 text-[10px] tracking-[0.2em] font-body bg-elvara-black/60 px-2 py-0.5 border border-elvara-border/30">
                  N° {product.number}
                </span>
              </div>
            </div>

            {/* Details Column with responsive padding */}
            <div className="p-5 sm:p-7 lg:p-9 flex flex-col justify-between">
              <div>
                {/* Category */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-5 h-px bg-elvara-gold/60" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-elvara-gold/80 font-body font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Name */}
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-elvara-ivory tracking-wide font-light">
                  {product.name}
                </h2>

                {/* Type */}
                <p className="text-elvara-gold/70 text-[11px] tracking-[0.18em] uppercase mt-1.5 font-body">
                  {product.type}
                </p>

                {/* Description */}
                <p className="text-elvara-muted/75 text-xs sm:text-sm leading-relaxed mt-4 sm:mt-5 font-body font-light">
                  {product.longDescription}
                </p>

                {/* Fragrance Notes Breakdown */}
                <div className="mt-6 space-y-3">
                  <h3 className="text-[10px] tracking-[0.25em] uppercase text-elvara-gold/80 font-body font-medium mb-2">
                    Fragrance Notes
                  </h3>

                  {[
                    { label: 'Top', notes: product.notes.top },
                    { label: 'Heart', notes: product.notes.heart },
                    { label: 'Base', notes: product.notes.base },
                  ].map((group) => (
                    <div
                      key={group.label}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-elvara-border/20 text-left"
                    >
                      <span className="text-[10px] tracking-[0.2em] uppercase text-elvara-gold/70 w-12 shrink-0 font-body font-medium">
                        {group.label}
                      </span>
                      <p className="text-elvara-ivory/85 text-xs sm:text-[13px] font-body font-light">
                        {group.notes.join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Size Selection */}
                <div className="mt-6">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-elvara-muted/50 font-body block mb-2.5">
                    Flacon Size
                  </span>
                  <div className="flex gap-3">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={size.ml}
                        onClick={() => setSelectedSize(idx)}
                        className={`px-5 py-2.5 min-h-10.5 text-xs tracking-wider border transition-all duration-300 font-body ${
                          selectedSize === idx
                            ? 'border-elvara-gold bg-elvara-gold/15 text-elvara-gold font-medium shadow-sm'
                            : 'border-elvara-border/50 text-elvara-muted/70 hover:border-elvara-border-light hover:text-elvara-ivory'
                        }`}
                      >
                        {size.ml}ml
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Add to Bag Footer Row */}
              <div className="mt-8 pt-5 border-t border-elvara-border/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-elvara-muted/50 block font-body">Selected Flacon</span>
                  <span className="text-elvara-gold text-2xl sm:text-3xl font-heading font-light">
                    ₹{product.sizes[selectedSize].price}
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`w-full sm:w-auto px-7 sm:px-9 py-3.5 min-h-11.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-body font-medium ${
                    addedMessage
                      ? 'bg-emerald-900/60 border border-emerald-600/70 text-emerald-300'
                      : 'bg-elvara-gold text-elvara-black hover:bg-elvara-gold-soft shadow-md'
                  }`}
                >
                  {addedMessage ? '✓ Added to Bag' : 'Add to Bag'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
