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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        
        {/* Image */}
        <img 
          src="https://images.unsplash.com/photo-1680778468132-603f082fa4f5" 
          alt="Smiling Nigerian child receiving care at ZandI Foundation outreach in Abuja."
          className="w-full h-full object-cover brightness-50"
        />

        {/* Strong Blue Overlay */}
        <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm uppercase tracking-widest px-4 py-2 mb-6"
          >
            Registered NGO | CAC IT 8365812
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Zainab and Ismail Diabetes and Child Care Initiative
            <span className="block text-white mt-2">(ZandI Foundation)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-100 mb-10 font-sans font-light max-w-3xl"
          >
            Caring for children, preventing diabetes, and building healthier futures through outreach, education, and direct support for vulnerable families in Abuja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              onClick={() => scrollToSection('#get-involved')}
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-6 text-lg font-sans font-medium rounded-[2px]"
            >
              Donate Now
            </Button>

            <Button
              onClick={() => scrollToSection('#about')}
              variant="outline"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg font-sans font-medium rounded-[2px]"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl"
          >
            <div className="border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-3 text-white text-sm">
              Health Screening Outreach
            </div>
            <div className="border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-3 text-white text-sm">
              Child Welfare Support
            </div>
            <div className="border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-3 text-white text-sm">
              Community Health Education
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;