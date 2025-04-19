import React from 'react';
import { Gift, Shield, Zap, Clock } from 'lucide-react';
import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH2 } from '../styles/shared';

const benefits = [
  {
    icon: <Gift size={32} className="text-white" />,
    title: "Automatic Rewards",
    description: "Receive BNB rewards automatically every 5 minutes without any manual claiming."
  },
  {
    icon: <Shield size={32} className="text-white" />,
    title: "Secure & Reliable",
    description: "Built on Binance Smart Chain with audited smart contracts for maximum security."
  },
  {
    icon: <Zap size={32} className="text-white" />,
    title: "Fast Transactions",
    description: "Experience lightning-fast transactions with low fees on the BSC network."
  },
  {
    icon: <Clock size={32} className="text-white" />,
    title: "24/7 Rewards",
    description: "Earn rewards around the clock, no matter when you hold your tokens."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className={sectionStyles.base}>
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
              WHY CHOOSE
            </span>{' '}
            EZB?
          </MotionH2>
          <p className={sectionStyles.subheading}>
            Experience the benefits of holding EZB tokens and earning passive BNB rewards.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <MotionDiv 
              key={index}
              className={sectionStyles.card.base}
              {...fadeInScale}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">{benefit.title}</h3>
              <p className="text-white/80 text-center">{benefit.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className={sectionStyles.background.bottomFade} />
    </section>
  );
};

export default BenefitsSection;
