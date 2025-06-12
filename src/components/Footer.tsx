import React from 'react';
import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/biki51',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/mainalibiki/',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/bikash-mainali-629505168/',
      label: 'LinkedIn'
    },
    {
      icon: Phone,
      href: 'tel:510-927-5844',
      label: 'Phone'
    }
  ];

  return (
    <footer className="bg-accent/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
              BM
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Bikash Mainali</h3>
            <p className="text-muted-foreground">Software Engineer & Web Developer</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              &copy; Copyright {currentYear}. All Rights Reserved
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Designed by <span className="font-semibold text-primary">Bikash Mainali</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
