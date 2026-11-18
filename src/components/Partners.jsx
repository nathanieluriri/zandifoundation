import React from 'react';
import { motion } from 'framer-motion';

// To add a partner: put a 600x400 logo on a white background in /public/partners/
// and add a line below.
const partners = [
  { name: 'Aperture Security Solutions Limited', logo: '/partners/aperture-security.jpg' },
  { name: 'Blossom Hall School', logo: '/partners/blossom-hall-school.jpg' },
  { name: 'Digital Guardians', logo: '/partners/digital-guardians.jpg' },
  { name: 'Juli Tola International School', logo: '/partners/juli-tola-international-school.jpg' },
];

// Repeat the list so the strip is always wider than the screen, then render it twice
// so the loop is seamless.
const strip = [...partners, ...partners];

const LogoCard = ({ partner, hidden }) => (
  <li
    className="shrink-0 w-44 h-28 sm:w-56 sm:h-36 md:w-64 md:h-40 mx-3 md:mx-4 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-2 md:p-3"
    aria-hidden={hidden || undefined}
  >
    <img
      src={partner.logo}
      alt={hidden ? '' : partner.name}
      title={partner.name}
      className="max-w-full max-h-full object-contain"
      loading="lazy"
      draggable="false"
    />
  </li>
);

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
      </div>

      <div className="partners-marquee relative overflow-hidden">
        <div className="partners-marquee-track flex w-max">
          <ul className="flex shrink-0">
            {strip.map((partner, i) => (
              <LogoCard key={`a-${i}`} partner={partner} hidden={i >= partners.length} />
            ))}
          </ul>
          <ul className="flex shrink-0" aria-hidden="true">
            {strip.map((partner, i) => (
              <LogoCard key={`b-${i}`} partner={partner} hidden />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
