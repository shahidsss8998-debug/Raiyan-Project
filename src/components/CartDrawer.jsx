import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div
      className={`fixed inset-0 z-60 transition-all duration-500 ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-500 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:max-w-md bg-elvara-dark border-l border-elvara-border/40 transition-transform duration-500 ease-out flex flex-col shadow-2xl ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 pt-6 pb-4 border-b border-elvara-border/30">
          <div>
            <h2 className="text-elvara-ivory text-lg sm:text-xl tracking-widest font-heading font-light">
              Shopping Bag
            </h2>
            <p className="text-elvara-muted/60 text-xs tracking-wider mt-0.5">
              {totalItems} {totalItems === 1 ? 'creation' : 'creations'}
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-elvara-muted/70 hover:text-elvara-ivory transition-colors p-2 min-w-10 min-h-10 flex items-center justify-center rounded-sm"
            aria-label="Close shopping bag"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 rounded-full border border-elvara-border/40 flex items-center justify-center mb-4 text-elvara-muted/40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <p className="text-elvara-ivory/80 text-sm font-heading tracking-wide">Your bag is empty</p>
              <p className="text-elvara-muted/50 text-xs mt-1.5 font-body font-light">
                Discover our olfactory creations
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}`}
                  className="flex gap-4 pb-5 border-b border-elvara-border/25 items-center"
                >
                  <div className="w-16 h-20 bg-elvara-surface/80 border border-elvara-border/30 rounded-none overflow-hidden shrink-0 p-1 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-elvara-ivory text-sm sm:text-base font-heading tracking-wide truncate">
                      {item.name}
                    </h3>
                    <p className="text-elvara-muted/60 text-xs mt-0.5 font-body">
                      {item.selectedSize}ml
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-elvara-border/40 bg-elvara-surface/30">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                          className="px-2 py-0.5 text-elvara-muted hover:text-elvara-gold transition-colors focus:outline-none"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs text-elvara-ivory min-w-6 text-center font-body">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                          className="px-2 py-0.5 text-elvara-muted hover:text-elvara-gold transition-colors focus:outline-none"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-elvara-gold text-sm font-heading font-light">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-elvara-muted/40 hover:text-elvara-ivory transition-colors p-2.5 min-w-9.5 min-h-9.5 flex items-center justify-center"
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 sm:px-8 py-5 border-t border-elvara-border/30 bg-elvara-black/60">
            <div className="flex justify-between items-center mb-4">
              <span className="text-elvara-muted/70 text-xs tracking-wider uppercase font-body">
                Estimated Total
              </span>
              <span className="text-elvara-gold text-xl sm:text-2xl font-heading font-light">
                ₹{totalPrice}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full py-3.5 min-h-12 bg-elvara-gold text-elvara-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-elvara-gold-soft transition-colors duration-300 shadow-md">
              Proceed to Checkout
            </button>
            <p className="text-[10px] text-elvara-muted/40 text-center mt-2.5 font-body">
              Complimentary sample included with every flacon
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
