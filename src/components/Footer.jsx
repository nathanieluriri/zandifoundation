import React from 'react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.75 8.45-4.92 8.45-9.94z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 4.2A3.8 3.8 0 1 1 12 15.8 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.3 6.7a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L6.3 22H3.2l7.3-8.4L2.8 2h6.4l4.5 6.8L18.9 2zm-1.1 17.8h1.7L8.2 4.1H6.4l11.4 15.7z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M16.6 2c.3 2.4 1.7 3.9 4.1 4.1v3.1c-1.4.1-2.7-.3-4-1.1v6.1c0 5.3-5.8 8.6-10.4 5.8-4.3-2.6-4-9.1.5-11.2 1.3-.6 2.6-.7 4-.4v3.3c-.5-.2-1-.2-1.5-.1-2.5.5-3.2 3.9-1 5.2 2.1 1.2 4.8-.3 4.8-2.8V2h3.5z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1A4cLLjDnR/?mibextid=wwXIfr',
      icon: FacebookIcon
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@zandifoundation?_r=1&_t=ZS-96z2V2aqKF2',
      icon: TikTokIcon
    },
    {
      name: 'X',
      href: 'https://x.com/zandiinitiative?s=21',
      icon: XIcon
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/zandifoundation?igsh=Z2YwMzhoOWEzaDd2&utm_source=qr',
      icon: InstagramIcon
    }
  ];

  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div className="max-w-sm">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4 leading-snug">
              Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation)
            </h3>

            <p className="font-sans text-sm leading-relaxed text-foreground">
              Championing health and cherishing every child through compassionate care, advocacy, and community empowerment.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

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

        <div className="w-full h-px bg-border mb-8"></div>

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