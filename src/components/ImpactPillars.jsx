import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Heart, GraduationCap } from 'lucide-react';

const ImpactPillars = () => {
  const pillars = [
    {
      icon: Droplet,
      title: 'Diabetes Care & Prevention',
      description: 'Championing childhood diabetes awareness and support through early screening, education, and management programs. We help children and families prevent and manage diabetes with lifestyle guidance, nutritional support, and access to essential medical care—ensuring that no child is left behind in the fight against diabetes.',
      iconAlt: 'Icon representing diabetes blood sugar monitoring.'
    },
    {
      icon: Heart,
      title: 'Child Welfare & Orphan Care',
      description: 'Providing a safety net for vulnerable and orphaned children by offering healthcare, education, and emotional support. We create nurturing environments that foster resilience, growth, and opportunity, so every child can thrive regardless of their circumstances.',
      iconAlt: 'Icon representing child care and support.'
    },
    {
      icon: GraduationCap,
      title: 'Community & Education',
      description: 'Empowering families and communities with knowledge through health education workshops, awareness campaigns, and capacity-building initiatives. By promoting preventive healthcare and healthy living, we build stronger, more informed communities that safeguard the well-being of their children.',
      iconAlt: 'Icon representing community education and scholarships.'
    }
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          {/* Updated H2 Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-deep-navy mb-6">
            Our Impact & Core Pillars
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            Three core focus areas driving meaningful change in our communities through dedicated action and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-border-gray p-8 hover:border-deep-navy transition-colors duration-300"
              >
                <div 
                  className="w-14 h-14 bg-light-gray flex items-center justify-center rounded-[2px] mb-6"
                  aria-label={pillar.iconAlt}
                  role="img"
                >
                  <Icon size={28} className="text-deep-navy" strokeWidth={1.5} aria-hidden="true" />
                </div>
                {/* Updated to H3 */}
                <h3 className="text-2xl font-serif text-deep-navy mb-4 font-bold">
                  {pillar.title}
                </h3>
                <p className="text-dark-navy font-sans leading-relaxed text-sm md:text-base">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactPillars;