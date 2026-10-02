import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { signatureProducts } from '../data/products';

export default function FeaturedCollection({ onViewDetails }) {
  const [ref, isVisible] = useScrollReveal(0.08);

  return (
    <section className="section-spacing-major bg-elvara-black relative overflow-hidden">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-elvara-gold/30 to-transparent" />

      <div className="container-luxury relative">
        <SectionHeading
          number="III"
          subtitle="Exclusive Reserve"
          title={
            <>
              The Signature{' '}
              <span className="italic text-elvara-gold">Collection</span>
            </>
          }
          description="A collection created for those who leave an impression without saying a word. Formulated with our highest natural oil concentrations."
        />

        <div ref={ref} className="space-y-24 sm:space-y-32 lg:space-y-40 mt-14 sm:mt-20">
          {signatureProducts.map((product, index) => (
            <article
              key={product.id}
              className={`grid md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Image Block: Always top on mobile, alternating on md+ */}
              <div
                className={`md:col-span-6 w-full ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div className="relative max-w-85 sm:max-w-100 md:max-w-115 mx-auto p-6 sm:p-8 lg:p-10 bg-linear-to-b from-elvara-surface/85 via-elvara-dark to-elvara-black border border-elvara-border/40 hover:border-elvara-gold/40 transition-colors duration-500 shadow-2xl">
                  {/* Decorative gold corner brackets */}
                  <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-elvara-gold/60 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-elvara-gold/60 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-elvara-gold/60 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-elvara-gold/60 pointer-events-none" />

                  {/* Perfume Flacon Image */}
                  <div className="relative aspect-4/5 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={`${product.name} — Perfume Showcase Signature Collection`}
                      className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Number watermark */}
                    <div className="absolute top-1 left-1 pointer-events-none">
                      <span className="text-elvara-gold/15 text-5xl sm:text-6xl lg:text-7xl font-heading font-light">
                        {product.number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Editorial Block: Controlled max-width, always below image on mobile, alternating on md+ */}
              <div
                className={`md:col-span-6 text-center md:text-left max-w-125 mx-auto md:mx-0 w-full ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                {/* Eyebrow Category */}
                <div className="flex items-center gap-3 justify-center md:justify-start mb-3.5">
                  <div className="w-6 sm:w-8 h-px bg-elvara-gold/60" />
                  <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-elvara-gold/90 font-body font-medium">
                    {product.category}
                  </span>
                  <div className="w-6 sm:w-8 h-px bg-elvara-gold/60 md:hidden" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-elvara-ivory tracking-wide font-light">
                  {product.name}
                </h3>

                {/* Fragrance Type */}
                <p className="text-elvara-gold/75 text-xs tracking-[0.2em] uppercase mt-2 font-body">
                  {product.type}
                </p>

                <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 my-5 mx-auto md:mx-0" />

                {/* Description with comfortable reading line length */}
                <p className="text-elvara-muted/80 text-[13px] sm:text-sm md:text-base leading-relaxed font-body font-light mb-7">
                  {product.description}
                </p>

                {/* Fragrance Notes Breakdown Box */}
                <div className="space-y-2.5 p-4 sm:p-5 lg:p-6 bg-elvara-surface/40 border border-elvara-border/40 mb-7 text-left">
                  {['top', 'heart', 'base'].map((noteType) => (
                    <div key={noteType} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-elvara-gold/80 w-14 shrink-0 font-body font-medium">
                        {noteType}
                      </span>
                      <span className="text-elvara-ivory/80 text-xs sm:text-sm font-body font-light">
                        {product.notes[noteType].join(' · ')}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 sm:gap-8 pt-2">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-elvara-muted/50 block font-body">Starting at</span>
                    <span className="text-elvara-gold text-2xl sm:text-3xl font-heading font-light">
                      ₹{product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onViewDetails(product)}
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-elvara-gold text-elvara-black px-7 sm:px-9 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-elvara-gold-soft transition-all duration-300 shadow-md font-body min-h-11.5"
                  >
                    <span>Discover Flacon</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-elvara-gold/30 to-transparent" />
    </section>
  );
}
