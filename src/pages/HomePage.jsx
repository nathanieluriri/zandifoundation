import React from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImpactStats from '@/components/ImpactStats';
import AboutUs from '@/components/AboutUs';
import ImpactPillars from '@/components/ImpactPillars';
import Leadership from '@/components/Leadership';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <SEO />
      
      <div className="min-h-screen bg-warm-off-white flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <Hero />
          <ImpactStats />
          <AboutUs />
          <ImpactPillars />
          <Leadership />
          <GetInvolved />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
