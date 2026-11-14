import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products, formatNaira } from '@/data/products';

const featuredIds = [
  'healthy-hero-top-blue',
  'healthy-hero-cap-white',
  'secure-the-futures-top-green',
  'secure-the-futures-cap-green',
];

const ShopPreview = () => {
  const navigate = useNavigate();
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section id="shop" className="py-20 bg-[#dff7fb]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop Our Merchandise</h2>
          <p className="text-muted-foreground">
            Show your support with official ZandI Foundation tops and caps. Every
            purchase helps us reach more children and communities.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {featured.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => navigate('/shop')}
              className="bg-white rounded-2xl border border-blue-100 overflow-hidden text-left hover:border-blue-700 transition-colors"
            >
              <div className="aspect-square bg-white">
                <img
                  src={product.images[0].src}
                  alt={product.name}
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="p-4 border-t border-blue-50">
                <p className="font-semibold text-blue-900 text-sm md:text-base">{product.name}</p>
                <p className="text-sm text-gray-700 mt-1">
                  {product.price != null ? formatNaira(product.price) : 'Price coming soon'}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <ShoppingBag size={20} className="text-white" />
            <span className="text-white">Visit the Shop</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;
