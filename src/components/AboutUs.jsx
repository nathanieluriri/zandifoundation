import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="py-20 md:py-28 bg-warm-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-navy mb-8">
              Who We Are
            </h2>
            <div className="w-full h-px bg-border-gray mb-10"></div>
            
            <p className="text-xl text-dark-navy font-sans leading-relaxed mb-8">
              The <strong className="text-deep-navy font-bold">Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation)</strong> is a non-profit, non-political organization dedicated to improving the lives of children in Nigeria.
            </p>
            <p className="text-xl text-dark-navy font-sans leading-relaxed">
  Our mission is practical and people-first: <br /><br />
  
  • Championing childhood diabetes awareness and care through education, early detection, and access to treatment so children living with diabetes can thrive. <br /><br />
  
  • Providing holistic child care and protection by supporting orphaned and vulnerable children with healthcare, education, and social welfare, creating a nurturing environment where every child has the chance to grow and succeed. <br /><br />
  
  At ZandI Foundation, we believe every child deserves both good health and a safe, supportive community.
</p></motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="bg-light-gray border border-border-gray rounded-[2px] p-8 md:p-10 mt-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-serif text-deep-navy mb-4 flex items-center gap-2">
                  <Shield className="text-deep-navy" size={24} aria-label="Legal shield icon" />
                  Legal Transparency
                </h3>
                <p className="text-dark-navy text-sm font-sans mb-1">
                  Officially registered with the Corporate Affairs Commission.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">CAC Registration</p>
                  <p className="text-lg font-serif font-bold text-deep-navy">IT 8365812</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Incorporation Date</p>
                  <p className="text-lg font-serif font-bold text-deep-navy">March 25, 2025</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutUs;
