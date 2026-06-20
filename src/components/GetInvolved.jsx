import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const volunteerFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfaDa45ak6i1iBGyshayzb5_29_HV0Zs6RN8Uvia5aAfGTotA/viewform?usp=header';

const GetInvolved = () => {
  const openVolunteerForm = () => {
    window.open(volunteerFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="get-involved" className="py-20 md:py-28 bg-[#dff7fb]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center mx-auto mb-6">
            <HeartHandshake size={32} />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-blue-900 mb-6">
            Get Involved
          </h2>

          <p className="text-lg md:text-xl text-gray-700 font-sans mb-10 max-w-3xl mx-auto leading-relaxed">
            Join us as a volunteer and help support children, families, and
            communities through health awareness, outreach activities, and
            compassionate care. Your time and commitment can make a meaningful
            difference in building healthier futures.
          </p>

          <Button
            onClick={openVolunteerForm}
            className="bg-blue-700 text-white hover:bg-blue-800 px-10 py-6 text-lg font-sans font-medium rounded-md transition-colors duration-200 inline-flex items-center gap-2"
          >
            Become a Volunteer
            <ExternalLink size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;