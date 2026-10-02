import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

// Pages
import Home from './pages/Home';
import Collection from './pages/Collection';
import Signature from './pages/Signature';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CartProvider>
      <ScrollToTop />
      <div className="min-h-screen w-full overflow-x-hidden bg-elvara-black text-elvara-ivory flex flex-col font-body selection:bg-elvara-gold selection:text-elvara-black">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content View with Routing */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onViewDetails={handleOpenProductModal} />} />
            <Route path="/collection" element={<Collection onViewDetails={handleOpenProductModal} />} />
            <Route path="/signature" element={<Signature onViewDetails={handleOpenProductModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Home onViewDetails={handleOpenProductModal} />} />
          </Routes>
        </main>

        {/* Global Luxury Footer */}
        <Footer />

        {/* Global Product Detail Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseProductModal}
        />
      </div>
    </CartProvider>
  );
}
