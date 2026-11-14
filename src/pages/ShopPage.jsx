import React from 'react';
import { ShoppingBag } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/shop/ProductCard';
import CartDrawer from '@/components/shop/CartDrawer';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const collections = [...new Set(products.map((p) => p.collection))];

const ShopPage = () => {
  const { count, setIsOpen } = useCart();

  return (
    <>
      <SEO
        title="Shop – ZandI Foundation Merchandise"
        description="Buy official ZandI Foundation merchandise. Every purchase supports diabetes awareness and child care across Nigeria."
        url="https://zandifoundation.org/shop"
      />

      <div className="min-h-screen bg-[#dff7fb] flex flex-col">
        <Header />

        <main className="flex-grow pt-20 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center pt-12 mb-10">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
                Shop
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Wear the mission. Every purchase supports our Healthy Futures and
                Secure the Futures programmes for children and communities.
              </p>
            </div>

            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
              >
                <ShoppingBag size={18} className="text-white" />
                <span className="text-white">Cart ({count})</span>
              </button>
            </div>

            {collections.map((collection) => (
              <section key={collection} className="mb-14">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
                  {collection}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.collection === collection)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </section>
            ))}
          </div>
        </main>

        <Footer />
      </div>

      <CartDrawer />
    </>
  );
};

export default ShopPage;
