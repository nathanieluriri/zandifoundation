import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const policiesUrl =
  'https://drive.google.com/file/d/16nBP1odBHn2vq-0_qwbxSw7yW5imJMlR/view?usp=sharing';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', href: '#home', type: 'section' },
    { name: 'About Us', href: '#about', type: 'section' },
    { name: 'Our Impact', href: '#impact', type: 'section' },
    { name: 'Media', href: '#media', type: 'section' },
    { name: 'Partners', href: '#partners', type: 'section' },
    { name: 'Leadership', href: '#leadership', type: 'section' },
    { name: 'Get Involved', href: '#get-involved', type: 'section' },
    { name: 'Policies', href: policiesUrl, type: 'external' }
  ];

  const scrollToSection = (href) => {
    const scroll = () => {
      const element = document.querySelector(href);

      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scroll, 300);
    } else {
      scroll();
    }

    setIsMobileMenuOpen(false);
  };

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsMobileMenuOpen(false);
  };

  const handleMenuClick = (item) => {
    if (item.type === 'external') {
      openExternalLink(item.href);
      return;
    }

    scrollToSection(item.href);
  };

  const goToDonatePage = () => {
    navigate('/donate');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-border h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center"
          >
            <img
              src="https://res.cloudinary.com/dbf0qhuqc/image/upload/f_auto,q_auto/new_logo_a8kk3p"
              alt="Zainab and Ismail Logo"
              className="h-14 w-auto object-contain p-1"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.type === 'external' ? '_blank' : undefined}
                rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item);
                }}
                className="text-foreground hover:text-primary font-sans font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            <Button onClick={goToDonatePage}>
              Donate Now
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-[2px] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-border bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.type === 'external' ? '_blank' : undefined}
                  rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item);
                  }}
                  className="block py-2 text-foreground hover:text-primary font-medium border-b border-border last:border-0"
                >
                  {item.name}
                </a>
              ))}

              <Button className="w-full" onClick={goToDonatePage}>
                Donate Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;