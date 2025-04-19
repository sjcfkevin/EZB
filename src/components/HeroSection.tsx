import React, { useEffect, useState } from 'react';
import BNBPriceChart from './BNBPriceChart';
import ThreeDTitle from './ThreeDTitle';

import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH1, MotionP } from '../styles/shared';

const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(currentIndex));
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
};

const HeroSection: React.FC = () => {
  const titleText = "Earn BNB rewards every 5 minutes just by holding EZB";
  const typedTitle = useTypewriter(titleText, 70);

  return (
    <section id="hero" className={sectionStyles.base}>
            {/* <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
      {/* Background elements */}
      <div className={sectionStyles.background.grid}>
        <div className={sectionStyles.background.gridPattern} />
        <div className={sectionStyles.background.gradient} />
      </div>

      <div className={sectionStyles.container}>
        <div className="max-w-8xl mx-auto flex flex-col items-center justify-center min-h-screen">
          <MotionDiv
            className="text-center w-full"
            {...fadeInUp}
          >
            <ThreeDTitle />
            <MotionP
              className={sectionStyles.subheading}
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {typedTitle}
              <span className="animate-pulse">|</span>
              
            </MotionP>

            <MotionDiv
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 max-w-8xl mx-auto"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Left side - Coin Image (1/3 width) */}
              <div className="lg:col-span-4 flex justify-center">
                <img
                  src="/coin.png"
                  alt="EZB Coin"
                  className="w-auto h-auto max-w-[300px]"
                />
              </div>

              {/* Right side - Content (2/3 width) */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                  <div className={`${sectionStyles.card.base} box-neon`}>
                    <div className="font-semibold text-blue-500 mb-3 text-xl my-text-neon">TOKEN DETAILS</div>
                    <div className="text-white/80 space-y-2">
                      <div className={sectionStyles.list.item}>
                        <span className={sectionStyles.list.bullet}></span>
                        <span>Name: Easy Bag</span>
                      </div>
                      <div className={sectionStyles.list.item}>
                        <span className={sectionStyles.list.bullet}></span>
                        <span>Symbol: EZB</span>
                      </div>
                      <div className={sectionStyles.list.item}>
                        <span className={sectionStyles.list.bullet}></span>
                        <span>Network: BSC</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${sectionStyles.card.base} box-neon`}>
                    <div className="font-semibold text-blue-500 mb-3 text-xl my-text-neon">KEY FEATURES</div>
                    <div className="text-white/80 space-y-2">
                      <div className={sectionStyles.list.item}>
                        <span className={sectionStyles.list.bullet}></span>
                        <span>5% Buy/Sell Tax</span>
                      </div>
                      <div className={sectionStyles.list.item}>
                        <span className={sectionStyles.list.bullet}></span>
                        <span>Auto BNB Rewards</span>
                      </div>
                      <div className={sectionStyles.list.item}>
                        <span className={sectionStyles.list.bullet}></span>
                        <span>No Transfer Tax</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
            <hr className='py-4' />

            <MotionDiv
              className="flex flex-col sm:flex-row gap-4 justify-center"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                className={`${sectionStyles.button.secondary} min-w-36`}
              >
                <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer">
                  <span className="indicator"></span>
                  Buy Now
                </a>
              </button>
              {/* <button className={`${sectionStyles.button.secondary} min-w-36`} disabled={true} >
                <a href="https://bscscan.com/address/0xa0c8fb9cdfb4b7ff64bf22b11311e66caca6e703" target="_blank" rel="noopener noreferrer">
                  <span className="indicator"></span>
                  EZB Chart
                </a>
              </button> */}
              <button className={`${sectionStyles.button.secondary} min-w-36`}>
                <a href="https://x.com/EZBrewards" target="_blank" rel="noopener noreferrer">
                  <span className="indicator"></span>
                  X
                </a>
              </button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
