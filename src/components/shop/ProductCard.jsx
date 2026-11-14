import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatNaira } from '@/data/products';

const ProductCard = ({ product }) => {
  const { addItem, setIsOpen } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState('');
  const [error, setError] = useState('');
  const [added, setAdded] = useState(false);

  const hasPrice = product.price != null;
  const needsSize = product.sizes.length > 0;

  const handleAdd = () => {
    if (needsSize && !size) {
      setError('Please choose a size');
      return;
    }
    setError('');
    addItem(product.id, size || null, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setIsOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden flex flex-col">
      <div className="relative bg-white aspect-square">
        <img
          src={product.images[activeImage].src}
          alt={`${product.name} – ${product.images[activeImage].label}`}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />

        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((img, index) => (
              <button
                key={img.label}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                  activeImage === index
                    ? 'bg-blue-900 border-blue-900 text-white'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-blue-900'
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow border-t border-blue-50">
        <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
          {product.collection}
        </p>
        <h3 className="text-lg font-bold text-blue-900 mb-2">{product.name}</h3>

        <p className="text-xl font-bold text-blue-950 mb-4">
          {hasPrice ? formatNaira(product.price) : 'Price coming soon'}
        </p>

        {needsSize && hasPrice && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSize(s);
                    setError('');
                  }}
                  className={`min-w-[44px] h-10 px-3 rounded-md border text-sm font-semibold transition-colors ${
                    size === s
                      ? 'bg-blue-900 border-blue-900 text-white'
                      : 'bg-white border-gray-300 text-gray-800 hover:border-blue-900'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
          </div>
        )}

        <div className="mt-auto">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!hasPrice}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {added ? (
              <Check size={18} className="text-white" />
            ) : (
              <ShoppingBag size={18} className="text-white" />
            )}
            <span className="text-white">
              {!hasPrice ? 'Coming soon' : added ? 'Added' : 'Add to cart'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
