import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GetInvolved = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'NNPC Estate, Lifecamp, Abuja',
      action: null
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'zandiinitiative@gmail.com',
      action: 'mailto:zandiinitiative@gmail.com'
    },
    {
      icon: Phone,
      label: 'Call Chairman',
      value: '+234 903 508 5013',
      action: 'tel:+2349035085013'
    },
    {
      icon: Phone,
      label: 'Call Secretary',
      value: '+234 703 275 0275',
      action: 'tel:+2347032750275'
    }
  ];

  return (
    <section id="get-involved" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-blue-900 mb-6">
            Get Involved
          </h2>

          <p className="text-xl text-gray-700 font-sans mb-10 max-w-2xl mx-auto">
            Your support transforms lives. Every contribution helps us provide essential healthcare, diabetes awareness, and protection for vulnerable children.
          </p>

          {/* ✅ FIXED BUTTON */}
          <Button
            onClick={() => window.open('mailto:zandiinitiative@gmail.com', '_blank')} 
            className="bg-blue-700 text-white hover:bg-blue-800 px-10 py-6 text-lg font-sans font-medium rounded-md transition-colors duration-200"
          >
            Donate or Partner via Email
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            const Card = (
              <div className="bg-white border border-gray-200 p-6 h-full flex flex-col hover:border-blue-400 transition-colors duration-200">
                <div className="mb-4">
                  <Icon size={24} className="text-blue-600" />
                </div>

                <h3 className="text-sm uppercase tracking-wider text-gray-500 font-sans mb-2 font-semibold">
                  {item.label}
                </h3>

                <p className="text-blue-900 font-serif font-bold text-lg leading-snug">
                  {item.value}
                </p>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.action ? (
                  <a href={item.action} className="block h-full">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;