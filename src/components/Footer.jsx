import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">

          {/* Left */}
          <div className="max-w-sm">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4 leading-snug">
              Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation)
            </h3>

            <p className="font-sans text-sm leading-relaxed text-foreground">
              Championing health and cherishing every child through compassionate care, advocacy, and community empowerment.
            </p>
          </div>

          {/* Right */}
          <div className="text-left md:text-right space-y-2">

            <p className="text-sm text-foreground">
              NNPC Estate, Lifecamp, Abuja
            </p>

            <p className="text-sm text-foreground">
              Abuja, FCT, Nigeria
            </p>

            <a
              href="mailto:zandiinitiative@gmail.com"
              className="block text-sm text-primary hover:text-teal transition-colors"
            >
              zandiinitiative@gmail.com
            </a>

            <a
              href="tel:+2349035085013"
              className="block text-sm text-primary hover:text-green transition-colors"
            >
              +234 903 508 5013
            </a>

            <a
              href="tel:+2347032750275"
              className="block text-sm text-primary hover:text-green transition-colors"
            >
              +234 703 275 0275
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-sans">

          <p className="text-center md:text-left max-w-xl">
            Funds are applied solely towards the promotion of the foundation's objectives as per Article 13 of our Constitution.
          </p>

          <p className="text-center md:text-right">
            © {new Date().getFullYear()} Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation)
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;