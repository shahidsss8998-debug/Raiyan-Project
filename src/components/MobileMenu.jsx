import { Link, useLocation } from 'react-router-dom';

export default function MobileMenu({ isOpen, links, onClose }) {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[85vw] max-w-85 bg-elvara-dark border-l border-elvara-border/40 transition-transform duration-500 ease-out flex flex-col shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Header with Close Button */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-elvara-border/30">
          <div className="flex flex-col">
            <span className="text-elvara-gold text-base tracking-[0.06em] font-heading font-semibold">
              Perfume Showcase
            </span>
            <span className="text-[8px] tracking-[0.15em] uppercase text-elvara-muted/50 font-body">
              Pernambut, Tamil Nadu (2026)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-elvara-muted/70 hover:text-elvara-ivory transition-colors min-w-10 min-h-10 flex items-center justify-center rounded-sm"
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links Navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <nav className="flex flex-col">
            {links.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={onClose}
                  className={`py-3.5 border-b border-elvara-border/20 transition-all duration-300 min-h-12 flex items-center ${
                    isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                  }`}
                  style={{ transitionDelay: isOpen ? `${index * 60 + 100}ms` : '0ms' }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <span className="text-elvara-gold/40 text-[10px] tracking-wider font-body">
                        0{index + 1}
                      </span>
                      <span
                        className={`text-lg tracking-widest font-heading font-light ${
                          isActive
                            ? 'text-elvara-gold font-normal'
                            : 'text-elvara-ivory/80 hover:text-elvara-ivory'
                        }`}
                      >
                        {link.name}
                      </span>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`transition-colors ${
                        isActive ? 'text-elvara-gold' : 'text-elvara-muted/30'
                      }`}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom editorial branding */}
          <div
            className={`pt-8 transition-all duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '450ms' : '0ms' }}
          >
            <div className="w-8 h-px bg-elvara-gold/40 mb-4" />
            <p className="text-elvara-muted/50 text-[10px] tracking-[0.2em] uppercase font-body leading-relaxed">
              Startup Project · Pernambut, TN 635810
            </p>
            <p className="text-elvara-muted/40 text-[11px] font-body font-light mt-1">
              Created & Developed by Raiyan S A
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
