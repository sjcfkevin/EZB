import React from 'react';
import { Wallet, ArrowRight, Coins, Clock } from 'lucide-react';
import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH2 } from '../styles/shared';

const steps = [
  {
    icon: <Wallet size={32} className="text-white" />,
    title: "Buy & Hold EZB",
    description: "Purchase EZB tokens and hold them in your wallet. No staking or locking required."
  },
  {
    icon: <Coins size={32} className="text-white" />,
    title: "Automatic Rewards",
    description: "Receive BNB rewards automatically every 5 minutes directly to your wallet."
  },
  {
    icon: <Clock size={32} className="text-white" />,
    title: "Continuous Earnings",
    description: "Keep earning rewards as long as you hold your tokens. No action needed."
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className={sectionStyles.base}>
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
            className={`${sectionStyles.heading.base} my-text-neon`}
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={sectionStyles.heading.gradient}>
              HOW IT
            </span>{' '}
            WORKS
          </MotionH2>
          <p className={sectionStyles.subheading}>
            A simple three-step process to start earning BNB rewards automatically.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <MotionDiv 
              key={index}
              className={sectionStyles.card.base}
              {...fadeInScale}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-white mb-4 my-text-neon">{step.title}</h3>
              <p className="text-white/80 text-center mb-6">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight size={24} className="text-blue-500" />
                </div>
              )}
            </MotionDiv>
          ))}
        </div>

        <MotionDiv 
          className="text-center mt-12"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#buy" 
            className={`${sectionStyles.button.primary} inline-flex items-center`}
          >
            Get Started <ArrowRight size={18} className="ml-2" />
          </a>
        </MotionDiv>
      </div>

      {/* Decorative elements */}
      <div className={sectionStyles.background.bottomFade} />
    </section>
  );
};

export default HowItWorksSection;
