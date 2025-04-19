import React from 'react';
import { Shield, Zap, Clock, Gift } from 'lucide-react';
import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH2 } from '../styles/shared';

const features = [
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
  },
  {
    icon: <Gift size={32} className="text-white" />,
    title: "Automatic Rewards",
    description: "Receive BNB rewards automatically every 5 minutes without any manual claiming."
  }
];

const WhyChooseSection: React.FC = () => {
  return (
    <></>
  );
};

export default WhyChooseSection;
