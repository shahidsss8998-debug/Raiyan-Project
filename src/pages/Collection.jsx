import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const categories = ['All', 'Woody Oriental', 'Amber Spicy', 'Parfum', 'Fresh Floral', 'Floral Oriental', 'Spicy Woody'];

export default function Collection({ onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.type.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedCategory, sortBy]);

  return (
    <div className="bg-elvara-black min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 overflow-x-hidden w-full">
      <div className="container-luxury">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-body text-elvara-muted/50 mb-8 sm:mb-12 tracking-wider">
          <Link to="/" className="hover:text-elvara-gold transition-colors py-1">Home</Link>
          <span className="text-elvara-border">/</span>
          <span className="text-elvara-gold">Collection</span>
        </div>

        {/* Section Header */}
        <SectionHeading
          number="II"
          subtitle="Haute Parfumerie"
          title={
            <>
              The Complete <span className="italic text-elvara-gold">Collection</span>
            </>
          }
          description="Each fragrance is an architectural work of art, balancing raw precious botanicals with masterfully aged resins and distillations."
        />

        {/* Filter Tabs & Sort Controls */}
        <div className="mt-10 sm:mt-14 mb-8 sm:mb-12 pb-6 border-b border-elvara-border/30 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6">
          {/* Category Tabs: Flex-wrap with comfortable tap targets */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-10 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-body transition-all duration-300 rounded-none flex items-center justify-center ${
                  selectedCategory === cat
                    ? 'bg-elvara-gold text-elvara-black font-medium shadow-md'
                    : 'bg-elvara-surface/60 border border-elvara-border/50 text-elvara-muted/70 hover:text-elvara-ivory hover:border-elvara-border-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 self-start md:self-center">
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-elvara-muted/50 font-body">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-elvara-dark border border-elvara-border/60 text-elvara-ivory text-xs px-3.5 py-2.5 min-h-10 font-body focus:outline-none focus:border-elvara-gold transition-colors cursor-pointer rounded-none"
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs text-elvara-muted/60 font-body tracking-wider">
            Showing <span className="text-elvara-gold font-medium">{filteredProducts.length}</span> luxury creations
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} onViewDetails={onViewDetails} />
        ) : (
          <div className="text-center py-20 sm:py-24 border border-elvara-border/30 bg-elvara-dark/40 p-6">
            <p className="text-elvara-muted/70 text-sm font-body">No fragrances found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-6 py-2.5 min-h-10.5 border border-elvara-gold/50 text-elvara-gold text-xs uppercase tracking-wider hover:bg-elvara-gold hover:text-elvara-black transition-colors"
            >
              View All Fragrances
            </button>
          </div>
        )}

        {/* Olfactory Discovery Banner */}
        <div className="mt-20 sm:mt-28 bg-linear-to-r from-elvara-dark via-elvara-surface/40 to-elvara-dark border border-elvara-gold/25 p-6 sm:p-10 lg:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] uppercase text-elvara-gold/80 font-body block mb-3 font-medium">
              Personalized Consultation
            </span>
            <h3 className="font-heading font-light text-2xl sm:text-3xl lg:text-4xl text-elvara-ivory mb-3.5">
              Finding Your Signature Note
            </h3>
            <p className="text-elvara-muted/75 text-xs sm:text-sm font-body font-light leading-relaxed mb-8 max-w-lg mx-auto">
              Fragrance evolves uniquely on every individual skin chemistry. Inquire with our private concierges for customized discovery sets or a bespoke consultation.
            </p>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-elvara-gold px-8 sm:px-10 py-3.5 text-xs tracking-[0.2em] uppercase text-elvara-gold hover:bg-elvara-gold hover:text-elvara-black transition-all duration-300 font-body min-h-11.5"
            >
              Book Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
