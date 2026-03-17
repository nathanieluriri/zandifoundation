import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-navy"
    >
      {/* Background Image converted to img for SEO Alt text support */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1680778468132-603f082fa4f5" 
          alt="Smiling Nigerian child receiving care at ZandI Foundation outreach in Abuja."
          className="w-full h-full object-cover"
        />
        {/* Solid overlay with opacity */}
        <div className="absolute inset-0 bg-deep-navy/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Championing Health, <br/>
            <span className="text-sage-green">Cherishing Every Child.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 font-sans font-light max-w-2xl"
          >
            Caring for Children, Preventing Diabetes, Building Healthy Futures
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              onClick={() => scrollToSection('#get-involved')}
              className="bg-white hover:bg-gray-100 text-deep-navy px-8 py-6 text-lg font-sans font-medium rounded-[2px] shadow-none border border-transparent transition-colors"
            >
              Donate Now
            </Button>
            <Button
              onClick={() => scrollToSection('#about')}
              variant="outline"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-deep-navy px-8 py-6 text-lg font-sans font-medium rounded-[2px] shadow-none transition-colors"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;