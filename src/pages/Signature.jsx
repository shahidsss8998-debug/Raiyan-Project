import { Link } from 'react-router-dom';
import FeaturedCollection from '../components/FeaturedCollection';
import SectionHeading from '../components/SectionHeading';

const rareIngredients = [
  {
    title: 'Laotian Oud Royale',
    origin: 'Vientiane Reserve, Laos',
    aging: 'Aged 20+ Years',
    description: 'Harvested from sustainably aged wild Aquilaria trees. Distilled through slow wood-fired copper alembics, yielding an incomparable smoky honey warmth.',
  },
  {
    title: 'Bulgarian Rose de Mai',
    origin: 'Valley of the Roses, Kazanlak',
    aging: 'Dawn Harvest Selection',
    description: 'Picked exclusively by hand before the morning dew evaporates. Over four tons of delicate petals are required to yield a single liter of pure essence.',
  },
  {
    title: 'Florentine Iris Butter',
    origin: 'Tuscany, Italy',
    aging: '3-Year Cellar Curing',
    description: 'Rhizomes dried and aged for thirty-six months in stone cellars before extraction. Celebrated for its velvety, powder-soft, aristocratic persistence.',
  },
];

export default function Signature({ onViewDetails }) {
  return (
    <div className="bg-elvara-black min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 overflow-x-hidden w-full">
      {/* Header Container with responsive gutter system */}
      <div className="container-luxury mb-8 sm:mb-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-body text-elvara-muted/50 mb-8 sm:mb-12 tracking-wider">
          <Link to="/" className="hover:text-elvara-gold transition-colors py-1">Home</Link>
          <span className="text-elvara-border">/</span>
          <span className="text-elvara-gold">Signature Collection</span>
        </div>

        <SectionHeading
          number="III"
          subtitle="Haute Parfumerie"
          title={
            <>
              The Signature <span className="italic text-elvara-gold">Masterpieces</span>
            </>
          }
          description="Crafted without artistic compromise. The Signature editions represent our highest concentration of rare extraits and decades-aged naturals."
        />
      </div>

      {/* Featured Collection Section */}
      <FeaturedCollection onViewDetails={onViewDetails} />

      {/* The Rare Botanicals Section */}
      <section className="section-spacing-standard bg-elvara-dark relative border-t border-elvara-border/30 overflow-hidden">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 lg:mb-20 px-2">
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-elvara-gold/80 font-body block mb-3 font-medium">
              Noble Terroirs
            </span>
            <h2 className="font-heading font-light text-elvara-ivory tracking-wide text-fluid-section">
              The Rare <span className="italic text-elvara-gold">Botanicals</span>
            </h2>
            <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 mx-auto my-5 sm:my-6" />
            <p className="text-elvara-muted/70 text-xs sm:text-sm md:text-[15px] font-body font-light leading-relaxed">
              We travel to the edges of the world to cultivate relationships with multigenerational distillers and artisan growers.
            </p>
          </div>

          {/* 1 Col Mobile -> 3 Col Tablet/Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-md md:max-w-none mx-auto w-full">
            {rareIngredients.map((item) => (
              <div
                key={item.title}
                className="bg-elvara-surface/40 border border-elvara-border/40 p-6 sm:p-8 lg:p-9 relative group hover:border-elvara-gold/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-elvara-gold/85 font-body font-medium truncate">
                      {item.origin}
                    </span>
                    <span className="text-[10px] text-elvara-muted/50 font-body tracking-wider shrink-0">
                      {item.aging}
                    </span>
                  </div>

                  <h3 className="font-heading font-light text-xl sm:text-2xl text-elvara-ivory mb-3.5">
                    {item.title}
                  </h3>

                  <p className="text-elvara-muted/75 text-xs sm:text-sm font-body font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-8 sm:w-10 h-px bg-elvara-gold/30 mt-6" />
              </div>
            ))}
          </div>

          {/* Bespoke Engraving Invitation */}
          <div className="mt-16 sm:mt-24 p-6 sm:p-10 lg:p-12 border border-elvara-border/40 bg-elvara-black/70 text-center max-w-3xl mx-auto shadow-2xl">
            <h4 className="font-heading font-light text-xl sm:text-2xl lg:text-3xl text-elvara-ivory mb-2.5">
              Bespoke Gold Calligraphy & Monogramming
            </h4>
            <p className="text-xs sm:text-sm text-elvara-muted/70 font-body font-light max-w-xl mx-auto mb-6 leading-relaxed">
              All 100ml Signature flacons arrive in custom lacquer wooden coffrets with complimentary 24k gold hand-engraved initials upon request.
            </p>
            <Link
              to="/contact"
              className="inline-block text-xs tracking-[0.2em] uppercase text-elvara-gold hover:text-elvara-gold-soft underline underline-offset-4 font-body py-1"
            >
              Inquire About Customization →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
