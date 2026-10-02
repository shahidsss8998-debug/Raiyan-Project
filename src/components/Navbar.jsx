import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MobileMenu from './MobileMenu';
import CartDrawer from './CartDrawer';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection' },
  { name: 'Signature', path: '/signature' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-elvara-black/95 backdrop-blur-md border-b border-elvara-border/60 py-1'
            : 'bg-linear-to-b from-elvara-black/90 via-elvara-black/40 to-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-luxury">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group py-2"
              aria-label="Perfume Showcase Website Home"
            >
              <div className="flex flex-col">
                <span className="text-elvara-gold text-sm sm:text-base md:text-lg tracking-[0.08em] font-heading font-semibold transition-transform duration-300 group-hover:scale-[1.02] whitespace-nowrap leading-tight">
                  Perfume Showcase Website
                </span>
                <span className="hidden sm:block text-[8px] tracking-[0.2em] uppercase text-elvara-muted/50 font-body">
                  Pernambut, Tamil Nadu · Est. 2026
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative text-[12px] tracking-[0.2em] uppercase font-light group py-2"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? 'text-elvara-gold font-normal'
                          : 'text-elvara-ivory/70 group-hover:text-elvara-ivory'
                      }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-elvara-gold transition-all duration-300 ease-out ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Bag & Menu Triggers */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Shopping Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-elvara-ivory/80 hover:text-elvara-gold transition-colors duration-300 p-2.5 min-w-10.5 min-h-10.5 flex items-center justify-center rounded-sm"
                aria-label="Shopping bag"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 min-w-4.5 h-4.5 px-1 bg-elvara-gold text-elvara-black text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-elvara-ivory/80 hover:text-elvara-gold transition-colors duration-300 p-2.5 min-w-10.5 min-h-10.5 flex items-center justify-center rounded-sm"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                <div className="w-5 flex flex-col gap-1.25">
                  <span
                    className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                      mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-current transition-all duration-300 ${
                      mobileOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                      mobileOpen ? '-rotate-45 translate-y-[-6.5px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        links={navLinks}
        onClose={() => setMobileOpen(false)}
      />
      <CartDrawer />
    </>
  );
}
