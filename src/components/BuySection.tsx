import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH2, MotionH3 } from '../styles/shared';

const BuySection: React.FC = () => {
  return (
    <section id="buy" className={sectionStyles.base}>
      {/* Background elements */}
      <div className={sectionStyles.background.grid}>
        <div className={sectionStyles.background.gridPattern} />
        <div className={sectionStyles.background.gradient} />
      </div>

      <div className={sectionStyles.container}>
        <MotionDiv 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <MotionH2 
            className={sectionStyles.heading.base}
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={sectionStyles.heading.gradient}>
              HOW TO BUY
            </span>{' '}
            EZB
          </MotionH2>
          <p className={sectionStyles.subheading}>
            Follow these simple steps to purchase EZB and start earning BNB rewards.
          </p>
        </MotionDiv>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="space-y-12">
              <MotionDiv 
                className="flex flex-col sm:flex-row gap-6 items-start"
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 text-xl">
                  1
                </div>
                <div className={sectionStyles.card.base}>
                  <MotionH3 className="text-2xl font-semibold mb-4 text-white">Create a Wallet</MotionH3>
                  <p className="text-white/80 mb-6">
                    Download and install Trust Wallet or MetaMask from the App Store or Google Play.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      variant="robot" 
                      asChild
                      className={sectionStyles.button.primary}
                    >
                      <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
                        <span className="indicator"></span>
                        MetaMask
                      </a>
                    </Button>
                    <Button 
                      variant="robot" 
                      asChild
                      className={sectionStyles.button.primary}
                    >
                      <a href="https://trustwallet.com/download" target="_blank" rel="noopener noreferrer">
                        <span className="indicator"></span>
                        Trust Wallet
                      </a>
                    </Button>
                  </div>
                </div>
              </MotionDiv>
              
              <MotionDiv 
                className="flex flex-col sm:flex-row gap-6 items-start"
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 text-xl">
                  2
                </div>
                <div className={sectionStyles.card.base}>
                  <MotionH3 className="text-2xl font-semibold mb-4 text-white">Get BNB</MotionH3>
                  <p className="text-white/80 mb-6">
                    Purchase BNB from an exchange like Binance or direct in your wallet.
                    Transfer it to your wallet if buying from an exchange.
                  </p>
                  <Button 
                    variant="robot" 
                    asChild
                    className={sectionStyles.button.primary}
                  >
                    <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">
                      <span className="indicator"></span>
                      Get BNB
                    </a>
                  </Button>
                </div>
              </MotionDiv>
              
              <MotionDiv 
                className="flex flex-col sm:flex-row gap-6 items-start"
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 text-xl">
                  3
                </div>
                <div className={sectionStyles.card.base}>
                  <MotionH3 className="text-2xl font-semibold mb-4 text-white">Connect to PancakeSwap</MotionH3>
                  <p className="text-white/80 mb-6">
                    Open PancakeSwap in your wallet's browser or connect your wallet to the PancakeSwap website.
                  </p>
                  <Button 
                    variant="robot" 
                    asChild
                    className={sectionStyles.button.primary}
                  >
                    <a href="https://pancakeswap.finance" target="_blank" rel="noopener noreferrer">
                      <span className="indicator"></span>
                      Open PancakeSwap
                    </a>
                  </Button>
                </div>
              </MotionDiv>
            </div>
          </div>
          
          <MotionDiv 
            className="lg:w-1/3"
            {...fadeInScale}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={`${sectionStyles.card.base} sticky top-24`}>
              <MotionH3 className="text-2xl font-semibold mb-6 text-white text-center">
                <span className={sectionStyles.heading.gradient}>
                  Ready to Earn BNB?
                </span>
              </MotionH3>
              <div className="space-y-4 mb-8">
                <p className="text-white/80">
                  After buying EZB, you'll automatically start receiving BNB rewards every 5 minutes if you hold at least 1,000 EZB tokens.
                </p>
                <p className="text-white/80">
                  No staking or claiming needed - rewards are sent directly to your wallet!
                </p>
              </div>
              
              <div className={sectionStyles.card.inner}>
                <h4 className="text-white font-semibold mb-4 text-lg">Important Details</h4>
                <ul className="text-white/80 space-y-3">
                  <li className={sectionStyles.list.item}>
                    <span className={sectionStyles.list.bullet}></span>
                    <span>Set slippage to 6% (5% tax + 1% price impact)</span>
                  </li>
                  <li className={sectionStyles.list.item}>
                    <span className={sectionStyles.list.bullet}></span>
                    <span>Minimum holding: 1,000 EZB</span>
                  </li>
                  <li className={sectionStyles.list.item}>
                    <span className={sectionStyles.list.bullet}></span>
                    <span>Rewards cycle: Every 5 minutes</span>
                  </li>
                  <li className={sectionStyles.list.item}>
                    <span className={sectionStyles.list.bullet}></span>
                    <span>Network: Binance Smart Chain (BEP-20)</span>
                  </li>
                </ul>
              </div>
{/*               
              <Button 
                variant="robotPrimary" 
                className={`${sectionStyles.button.primary} w-full`}
                asChild
              >
                <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer">
                  <span className="indicator"></span>
                  Buy EZB Now <ArrowRight size={18} className="ml-2" />
                </a>
              </Button> */}
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={sectionStyles.background.bottomFade} />
    </section>
  );
};

export default BuySection;
