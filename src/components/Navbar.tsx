import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH2, MotionH3 } from '../styles/shared';


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Why EZB', href: '#why-ezb' },
    { name: 'Tokenomics', href: '#tokenomics' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20 py-2 p-8' : 'p-8 bg-transparent'
      )}
    >
      <div className="ezb-container flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-4xl">
          <span className="text-blue-500 my-text-neon"><a href="/"><b>[EZB]</b></a></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          {/* <Button
            variant="robotPrimary"
            className={`${sectionStyles.button.primary}`}
            asChild
          >
            <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer">
              <span className="indicator"></span>
              Buy Now <ArrowRight size={18} className="ml-2" />
            </a>
          </Button> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 py-4 border-b border-blue-500/20">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#buy"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors shadow-lg hover:shadow-xl text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buy EZB
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
