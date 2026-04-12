import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const team = [
    {
      name: 'Zainab Oyiza Umar',
      role: 'CHAIRMAN & TRUSTEE',
      description:
        'Guiding the organization’s vision with compassionate leadership and unwavering advocacy for healthcare and child welfare.',
      image: 'https://placehold.co/300x300?text=Zainab+Oyiza+Umar',
      alt: 'Portrait of Zainab Oyiza Umar, Chairman of ZandI Foundation.'
    },
    {
      name: 'Massoud Abdulrahman Oredola',
      role: 'SECRETARY & TRUSTEE',
      description:
        'Upholding transparent governance and ensuring effective execution of our mission with integrity and accountability.',
      image: 'https://placehold.co/300x300?text=Massoud+Abdulrahman+Oredola',
      alt: 'Portrait of Massoud Abdulrahman Oredola, Secretary of ZandI Foundation.'
    },
    {
      name: 'Ismail Adeiza Suleiman',
      role: 'FUNDRAISING OFFICER & TRUSTEE',
      description:
        'Driving sustainable growth through strategic fundraising initiatives and fostering partnerships that empower our mission.',
      image: 'https://placehold.co/300x300?text=Ismail+Adeiza+Suleiman',
      alt: 'Portrait of Ismail Adeiza Suleiman, Fundraising Officer of ZandI Foundation.'
    },
    {
      name: 'Dr Aisha Suleiman',
      role: 'TRUSTEE MEMBER',
      description:
        'Championing integrity and collaborative leadership to advance our mission and ensure lasting impact within the community.',
      image: 'https://placehold.co/300x300?text=Dr+Aisha+Suleiman',
      alt: 'Portrait of Dr Aisha Suleiman, Trustee Member of ZandI Foundation.'
    },
    {
      name: 'Dr Lukman Olatoke',
      role: 'TRUSTEE MEMBER',
      description:
        'Providing steadfast guidance and committed oversight to strengthen our vision and uphold the values of our organization.',
      image: 'https://placehold.co/300x300?text=Dr+Lukman+Olatoke',
      alt: 'Portrait of Dr Lukman Olatoke, Trustee Member of ZandI Foundation.'
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
          <h2 className="text-4xl md:text-5xl font-serif text-deep-navy mb-6">
            Our Board of Trustees
          </h2>
          <div className="w-24 h-px bg-deep-navy mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-border-gray p-6 flex flex-col items-center text-center hover:border-sage-green transition-colors duration-300"
            >
              <div className="w-full h-48 bg-gray-200 mb-5">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover border border-border-gray"
                />
              </div>

              <h3 className="text-xl font-serif text-deep-navy font-bold mb-2">
                {member.name}
              </h3>

              <p className="text-sage-green font-sans font-medium text-xs mb-4 uppercase tracking-wide">
                {member.role}
              </p>

              <p className="text-dark-navy font-sans leading-relaxed text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;