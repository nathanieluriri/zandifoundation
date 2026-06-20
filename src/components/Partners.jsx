import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-blue-900 mb-6">
            Our Partners
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We are grateful to work with partners who support our mission to build healthier futures.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
          >
            <img
              src="/partners/aperture-security.png"
              alt="Aperture Security Solutions Limited"
              className="w-full max-w-xs object-contain mb-6"
            />

            <h3 className="text-xl font-bold text-blue-900">
              Aperture Security Solutions Limited
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;