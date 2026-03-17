import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Children Reached', value: '500+' },
  { label: 'Community Screenings', value: '40+' },
  { label: 'Volunteer Partners', value: '25+' },
  { label: 'Abuja Communities Served', value: '12+' }
];

const ImpactStats = () => {
  return (
    <section className="py-10 md:py-14 bg-white border-b border-border-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-md border border-border-gray bg-warm-off-white p-5 md:p-6 text-center"
            >
              <p className="text-2xl md:text-3xl font-serif text-deep-navy font-bold">{item.value}</p>
              <p className="text-xs md:text-sm mt-2 uppercase tracking-wide text-dark-navy/75 font-sans">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
