import { useScrollReveal } from '../hooks/useScrollReveal';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onViewDetails }) {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-9 max-w-95 sm:max-w-none mx-auto w-full"
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? `${(index % 3) * 120}ms` : '0ms' }}
        >
          <ProductCard
            product={product}
            index={index}
            onViewDetails={onViewDetails}
          />
        </div>
      ))}
    </div>
  );
}
