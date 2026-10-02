import { Link } from 'react-router-dom';
import { brandInfo } from '../data/products';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-elvara-black border-t border-elvara-border/30 relative text-elvara-ivory overflow-hidden">
      {/* Top subtle golden glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-elvara-gold/30 to-transparent pointer-events-none" />

      {/* Main Footer Container with responsive luxury boundaries */}
      <div className="container-luxury pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">

        {/* 1 Col Mobile -> 2 Col Tablet -> 4 Col Desktop with deliberate column gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-14 mb-14 sm:mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="max-w-70">
            <Link to="/" className="inline-block mb-4 group py-1">
              <span className="text-elvara-gold text-xl sm:text-2xl tracking-[0.08em] font-heading font-semibold">
                Perfume Showcase
              </span>
              <span className="block text-[9px] tracking-[0.2em] uppercase text-elvara-muted/50 mt-1 font-body">
                Startup · Pernambut, TN (2026)
              </span>
            </Link>
            <p className="text-elvara-muted/65 text-xs sm:text-sm font-body font-light leading-relaxed mb-6">
              A student fragrance startup project founded in 2026 in Pernambut, Tamil Nadu, India (635810). Dedicated to exploring handcrafted scent artistry and modern perfume formulation.
            </p>
            <div className="text-xs text-elvara-muted/60 font-body space-y-1.5 font-light">
              <p className="text-elvara-ivory/80 font-normal">Founder & Creator: Raiyan S A</p>
              <p>Pernambut, Tamil Nadu — 635810</p>
              <p className="text-elvara-gold">zakwanraiyan47@gmail.com</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-elvara-gold/80 font-body mb-5 font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body font-light text-elvara-muted/70">
              <li>
                <Link to="/" className="inline-block py-1 hover:text-elvara-gold transition-colors duration-300">
                  Showcase Home
                </Link>
              </li>
              <li>
                <Link to="/collection" className="inline-block py-1 hover:text-elvara-gold transition-colors duration-300">
                  All Fragrances
                </Link>
              </li>
              <li>
                <Link to="/signature" className="inline-block py-1 hover:text-elvara-gold transition-colors duration-300">
                  Signature Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block py-1 hover:text-elvara-gold transition-colors duration-300">
                  About Our Startup
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-1 hover:text-elvara-gold transition-colors duration-300">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Services */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-elvara-gold/80 font-body mb-5 font-medium">
              Startup Initiatives
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body font-light text-elvara-muted/70">
              <li className="py-1 hover:text-elvara-ivory transition-colors cursor-pointer">
                Handcrafted Discovery Samples
              </li>
              <li className="py-1 hover:text-elvara-ivory transition-colors cursor-pointer">
                Custom College Blend Requests
              </li>
              <li className="py-1 hover:text-elvara-ivory transition-colors cursor-pointer">
                Scent Evaluation & Feedback
              </li>
              <li className="py-1 hover:text-elvara-ivory transition-colors cursor-pointer">
                Local Tamil Nadu Delivery
              </li>
              <li className="py-1 hover:text-elvara-ivory transition-colors cursor-pointer">
                Eco-Friendly Glass Flacons
              </li>
            </ul>
          </div>

          {/* Column 4: Startup Details */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-elvara-gold/80 font-body mb-5 font-medium">
              Startup Hub
            </h4>
            <div className="space-y-4 text-xs font-body font-light text-elvara-muted/70">
              <div>
                <p className="text-elvara-ivory font-normal tracking-wide">Pernambut Atelier</p>
                <p className="text-[11px] text-elvara-muted/50 mt-0.5">Pernambut, Tamil Nadu — 635810</p>
              </div>
              <div>
                <p className="text-elvara-ivory font-normal tracking-wide">Project Initiative</p>
                <p className="text-[11px] text-elvara-muted/50 mt-0.5">College Fragrance Startup (Est. 2026)</p>
              </div>
              <div>
                <p className="text-elvara-ivory font-normal tracking-wide">Direct Contact</p>
                <p className="text-[11px] text-elvara-gold/90 mt-0.5">zakwanraiyan47@gmail.com</p>
              </div>
              <div>
                <p className="text-elvara-ivory font-normal tracking-wide">Creator Rights</p>
                <p className="text-[11px] text-elvara-muted/50 mt-0.5">All Rights Reserved to Raiyan S A</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Stacked on mobile, row on md+ */}
        <div className="pt-8 border-t border-elvara-border/20 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:zakwanraiyan47@gmail.com"
              className="text-elvara-muted/60 hover:text-elvara-gold transition-colors duration-300 p-2 min-w-9 min-h-9 flex items-center justify-center"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/raiyan_sha7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-elvara-muted/60 hover:text-elvara-gold transition-colors duration-300 p-2 min-w-9 min-h-9 flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            <a
              href="https://wa.me/919487265295"
              target="_blank"
              rel="noopener noreferrer"
              className="text-elvara-muted/60 hover:text-elvara-gold transition-colors duration-300 p-2 min-w-9 min-h-9 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
          </div>

          <p className="text-[11px] text-elvara-muted/50 font-body font-light">
            © 2026 Perfume Showcase Website. All rights and credits reserved to Raiyan S A.
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-elvara-muted/60 hover:text-elvara-gold transition-colors font-body p-2"
          >
            <span>Back to top</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
