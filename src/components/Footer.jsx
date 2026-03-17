import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-warm-off-white py-16 border-t border-deep-navy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div className="max-w-sm">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
              Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation)
            </h3>
            <p className="text-gray-300 font-sans text-sm leading-relaxed">
              Championing health and cherishing every child through compassionate care, advocacy, and community empowerment.
            </p>
          </div>
          
          <div className="text-left md:text-right">
             <p className="text-sm text-gray-300 mb-2">Block C9, Flat 1, FCDA Owners Occupier Estate</p>
             <p className="text-sm text-gray-300 mb-2">Abuja, FCT, Nigeria</p>
             <a href="mailto:zeebuumar@gmail.com" className="text-sm text-white hover:text-sage-green transition-colors block mb-2">
               zeebuumar@gmail.com
             </a>
             <div className="flex flex-col md:items-end gap-1">
               <a href="tel:+2349035085013" className="text-sm text-white hover:text-sage-green transition-colors">
                 +234 903 508 5013
               </a>
               <a href="tel:+2347032750275" className="text-sm text-white hover:text-sage-green transition-colors">
                 +234 703 275 0275
               </a>
             </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-sans">
          <p className="text-center md:text-left">
            Funds are applied solely towards the promotion of the foundation's objectives as per Article 13 of our Constitution.
          </p>
          <p>
            © {new Date().getFullYear()} Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
