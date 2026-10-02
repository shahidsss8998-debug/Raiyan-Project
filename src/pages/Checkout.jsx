import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { items, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookOnWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill out all fields before booking.');
      return;
    }

    if (items.length === 0) {
      alert('Your shopping bag is empty.');
      return;
    }

    const phoneNumber = '919487265295';
    
    // Format the items text
    let itemsText = '';
    items.forEach((item, index) => {
      itemsText += `\n🛍️ *Item ${index + 1}:* ${item.name} (${item.selectedSize}ml) x ${item.quantity}`;
      itemsText += `\n💰 *Price:* ₹${item.price * item.quantity}`;
    });

    const message = `🛍️ *NEW ORDER — PERFUME SHOWCASE*\n` +
      `──────────────────────────────\n\n` +
      `📋 *CUSTOMER DETAILS:*\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Number:* ${formData.phone}\n` +
      `📍 *Address:* ${formData.address}\n` +
      `\n🛒 *ORDER SUMMARY*${itemsText}\n` +
      `\n✨ *Total Amount:* ₹${totalPrice}\n\n` +
      `Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="bg-elvara-black min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-elvara-ivory text-2xl sm:text-3xl font-heading tracking-widest mb-4">Your Bag is Empty</h2>
        <p className="text-elvara-muted/60 mb-8 font-body">Return to our collection to discover your signature scent.</p>
        <Link to="/collection" className="inline-block py-3.5 px-8 bg-elvara-gold text-elvara-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-elvara-gold-soft transition-colors duration-300 shadow-md">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-elvara-black min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 overflow-x-hidden w-full">
      <div className="container-luxury max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-2 text-xs font-body text-elvara-muted/50 mb-8 sm:mb-12 tracking-wider">
          <Link to="/" className="hover:text-elvara-gold transition-colors py-1">Home</Link>
          <span className="text-elvara-border">/</span>
          <span className="text-elvara-gold">Checkout</span>
        </div>

        <h1 className="font-heading font-light text-elvara-ivory text-3xl sm:text-4xl lg:text-5xl tracking-wide mb-8">
          Complete Your <span className="italic text-elvara-gold">Order</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form Section */}
          <div className="lg:col-span-7 bg-elvara-dark/70 border border-elvara-border/40 p-6 sm:p-8 md:p-10 shadow-2xl">
            <h2 className="text-elvara-ivory text-xl font-heading mb-6 tracking-wide">Delivery Details</h2>
            <form onSubmit={handleBookOnWhatsApp} className="space-y-5 font-body">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-elvara-muted mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-elvara-black/50 border border-elvara-border/40 text-elvara-ivory focus:border-elvara-gold/60 focus:outline-none px-4 py-3 min-h-12 text-sm transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-elvara-muted mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-elvara-black/50 border border-elvara-border/40 text-elvara-ivory focus:border-elvara-gold/60 focus:outline-none px-4 py-3 min-h-12 text-sm transition-colors"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-xs uppercase tracking-widest text-elvara-muted mb-2">
                  Complete Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full bg-elvara-black/50 border border-elvara-border/40 text-elvara-ivory focus:border-elvara-gold/60 focus:outline-none px-4 py-3 text-sm transition-colors resize-none"
                  placeholder="Enter your full delivery address"
                ></textarea>
              </div>

              <div className="pt-4 mt-2 border-t border-elvara-border/30">
                <button
                  type="submit"
                  className="w-full py-4 min-h-12.5 flex items-center justify-center gap-3 bg-[#25D366] text-white text-xs sm:text-sm tracking-widest uppercase font-bold hover:bg-[#128C7E] transition-colors duration-300 shadow-lg rounded-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  Book on WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-elvara-surface/40 border border-elvara-border/30 p-6 sm:p-8 shadow-xl sticky top-28">
              <h3 className="text-elvara-ivory text-lg font-heading mb-6 tracking-wider uppercase border-b border-elvara-border/25 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 items-center">
                    <div className="w-14 h-14 bg-elvara-surface/80 border border-elvara-border/30 flex items-center justify-center p-1">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0 font-body">
                      <h4 className="text-elvara-ivory text-sm truncate">{item.name}</h4>
                      <p className="text-elvara-muted/60 text-xs mt-0.5">{item.selectedSize}ml · Qty {item.quantity}</p>
                    </div>
                    <div className="text-elvara-gold text-sm font-heading">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-elvara-border/25 pt-4 font-body">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-elvara-muted text-xs uppercase tracking-wider">Subtotal</span>
                  <span className="text-elvara-ivory text-sm">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-elvara-muted text-xs uppercase tracking-wider">Shipping</span>
                  <span className="text-elvara-gold text-sm">Complimentary</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-elvara-border/25">
                  <span className="text-elvara-ivory text-sm uppercase tracking-widest font-medium">Total</span>
                  <span className="text-elvara-gold text-2xl font-heading font-light">₹{totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
