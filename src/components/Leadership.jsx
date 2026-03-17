import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const team = [
    {
      name: 'Zainab Oyiza Umar',
      role: 'Chairman & Trustee',
      description: 'Leading the vision for compassionate healthcare and child advocacy.',
      image: 'https://placehold.co/300x300?text=Zainab+Oyiza+Umar',
      alt: 'Portrait of Zainab Oyiza Umar, Chairman of ZandI Foundation.'
    },
    {
      name: 'Massoud Abdulrahman Oredola',
      role: 'Secretary & Trustee',
      description: 'Ensuring transparent governance and strategic execution of our mission.',
      image: 'https://placehold.co/300x300?text=Massoud+Abdulrahman+Oredola',
      alt: 'Portrait of Massoud Abdulrahman Oredola, Secretary of ZandI Foundation.'
    }
  ];

  return (
    <section id="leadership" className="py-20 md:py-28 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Confirmed H2 Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-deep-navy mb-6">
            Our Board of Trustees
          </h2>
          <div className="w-24 h-px bg-deep-navy mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-border-gray p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start hover:border-sage-green transition-colors duration-300"
            >
              <div className="w-full md:w-48 h-48 flex-shrink-0 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover border border-border-gray"
                />
              </div>
              <div className="flex-1">
                {/* H3 for team member names is semantically appropriate inside H2 section */}
                <h3 className="text-2xl font-serif text-deep-navy font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-sage-green font-sans font-medium text-sm mb-4 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-dark-navy font-sans leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;