import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import RewardsCalculator from '@/components/RewardsCalculator';
import BenefitsSection from '@/components/BenefitsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import BuySection from '@/components/BuySection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "EZB Token | Earn BNB Every 5 Minutes";
  }, []);

  return (
    <div className="bg-ezb-primary text-white">
      
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <RewardsCalculator />
      <BenefitsSection />
      <WhyChooseSection />
      <TokenomicsSection />
      <BuySection />
      <Footer />
    </div>
  );
};

export default Index;
