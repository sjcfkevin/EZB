import React from 'react';
import { Twitter, Globe, Mail } from 'lucide-react';
import { sectionStyles, fadeInUp, MotionDiv } from '../styles/shared';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/90 py-12">
      {/* Background elements */}
      <div className={sectionStyles.background.grid}>
        <div className={sectionStyles.background.gridPattern} />
        <div className={sectionStyles.background.gradient} />
      </div>

      <div className={sectionStyles.container}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MotionDiv 
            className="text-center md:text-left"
            {...fadeInUp}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className={sectionStyles.heading.gradient}>
                EZB Token
              </span>
            </h3>
            <p className="text-white/80 mb-6">
              The revolutionary BEP-20 token that pays automatic BNB rewards every 5 minutes.
            </p>

          </MotionDiv>

          <MotionDiv 
            className="text-center md:text-left"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 flex gap-12">
              <li className='mt-[12px]'>
                <a href="#hero" className="text-white/80 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-white/80 hover:text-white transition-colors duration-300">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#buy" className="text-white/80 hover:text-white transition-colors duration-300">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-white/80 hover:text-white transition-colors duration-300">
                  Tokenomics
                </a>
              </li>
            </ul>
          </MotionDiv>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} EZB Token. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
