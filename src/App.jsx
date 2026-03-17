import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;