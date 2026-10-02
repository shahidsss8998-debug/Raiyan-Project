import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ProductGrid from '../components/ProductGrid';
import FeaturedCollection from '../components/FeaturedCollection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import { products } from '../data/products';

export default function Home({ onViewDetails }) {
  // Show first 3 products as a curated selection
  const curatedProducts = products.slice(0, 3);

  return (
    <div className="bg-elvara-black overflow-x-hidden w-full">
      {/* Hero Section */}
      <Hero />

      {/* Curated Preview Section */}
      <section className="section-spacing-standard bg-elvara-dark relative overflow-hidden">
        <div className="container-luxury">
          <SectionHeading
            number="I"
            subtitle="Curated Selection"
            title={
              <>
                The Autumn / Winter <span className="italic text-elvara-gold">Editions</span>
              </>
            }
            description="Explore our most celebrated olfactory compositions, each formulated with rare absolutes and timeless elegance."
          />

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <ProductGrid products={curatedProducts} onViewDetails={onViewDetails} />
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link
              to="/collection"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 border border-elvara-gold/60 px-8 sm:px-10 py-3.5 text-xs tracking-[0.2em] uppercase text-elvara-gold hover:bg-elvara-gold hover:text-elvara-black transition-all duration-500 font-body shadow-sm min-h-11.5"
            >
              <span>View Complete Collection</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* The Signature Collection Showcase */}
      <FeaturedCollection onViewDetails={onViewDetails} />

      {/* Editorial Quote Banner */}
      <section className="section-spacing-standard bg-elvara-black border-y border-elvara-border/30 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-elvara-gold/3 to-transparent pointer-events-none" />
        <div className="container-reading">
          <span className="text-elvara-gold/40 text-3xl sm:text-5xl font-heading block mb-2 sm:mb-4">“</span>
          <blockquote className="font-heading font-light text-elvara-ivory leading-relaxed tracking-wide italic text-fluid-quote">
            Perfume is the unseen, unforgettable, ultimate accessory of fashion. It heralds your arrival and prolongs your departure.
          </blockquote>
          <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 mx-auto my-5 sm:my-7" />
          <cite className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-elvara-gold/80 font-body not-italic font-medium">
            Perfume Showcase Website · Pernambut, Tamil Nadu (2026)
          </cite>
        </div>
      </section>

      {/* About The Atelier */}
      <AboutSection />

      {/* Contact & Concierge */}
      <ContactSection />
    </div>
  );
}
