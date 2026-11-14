import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import DonatePage from '@/pages/DonatePage';
import ShopPage from '@/pages/ShopPage';
import { CartProvider } from '@/context/CartContext';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <CartProvider>
    <Router>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;