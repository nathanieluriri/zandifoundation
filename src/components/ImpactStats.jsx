import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Children Reached', value: '416' },
  { label: 'Children Screened', value: '142' },
  { label: 'Community Screenings', value: '1' },
  { label: 'Partners', value: '4' },
  { label: 'Communities Served', value: '2' }
];

const ImpactStats = () => {
  return (
    <section className="py-10 md:py-14 bg-white border-b border-border-gray">
      <div className="container mx-auto px-1.5 sm:px-4">
        <div className="grid grid-cols-5 gap-1 min-[400px]:gap-2 sm:gap-3 md:gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-md border border-border-gray bg-warm-off-white min-w-0 px-0.5 py-3 sm:p-4 lg:p-6 text-center flex flex-col justify-center"
            >
              <p className="text-lg sm:text-2xl md:text-3xl font-serif text-deep-navy font-bold">{item.value}</p>
              <p className="text-[7px] min-[360px]:text-[8px] min-[400px]:text-[9px] sm:text-[11px] lg:text-sm mt-1 md:mt-2 uppercase tracking-tighter min-[400px]:tracking-normal lg:tracking-wide leading-tight text-dark-navy/75 font-sans">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
