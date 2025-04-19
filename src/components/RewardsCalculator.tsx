import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH2 } from '../styles/shared';

const RewardsCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string>('1000');
  const [price, setPrice] = useState<string>('0.0001');
  const [volume, setVolume] = useState<string>('1000000');

  const totalSupply = 1000000000;



  const RewardsPool = () => {
    const amountNum = parseFloat(amount);
    const priceNum = parseFloat(price);

    if (isNaN(amountNum)) {
      return 0;
    }

    // 5% of volume is distributed as rewards
    const dailyRewards = (amountNum * 0.05);
    return dailyRewards.toFixed(4);
  };

  const DailyRewards = () => {
    const amountNum = parseFloat(amount);
    const priceNum = parseFloat(price);

    if (isNaN(amountNum)) {
      return 0;
    }
   
    const dailyRewards = (amountNum * priceNum / 1000000000);
    return dailyRewards.toFixed(4);
  }
    
  return (
    <section id="calculator" className={sectionStyles.base}>
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
              REWARD
            </span>{' '}
            CALCULATOR
          </MotionH2>
          <p className={sectionStyles.subheading}>
            Calculate your potential BNB rewards based on your token holdings and trading volume.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            className={sectionStyles.card.base}
            {...fadeInScale}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-white/80">24h Volume (USD)</label>
                  <span className="text-white font-semibold">$ {amount}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={1000000}
                  step="100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-2  rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-white/80">Your EZB Token Holdings</label>
                  <span className="text-white font-semibold">$ {price}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max={totalSupply}
                  step="1000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full h-2  rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            className={sectionStyles.card.base}
            {...fadeInScale}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className={sectionStyles.heading.gradient}>
                  Daily Rewards Pool
                </span>
              </h3>

              <div className="text-4xl font-bold text-white mb-6">
                $ {RewardsPool()}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Your Daily Earnings</span>
                  <span className="text-white font-semibold">$ {parseFloat(DailyRewards()).toFixed(4)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Monthly Projection</span>
                  <span className="text-white font-semibold">$ {parseFloat(DailyRewards() * 30).toFixed(4)}</span>
                </div>
              </div>

              <a
                href="#buy"
                className={`${sectionStyles.button.primary} inline-flex items-center`}
              >
                Start Earning <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={sectionStyles.background.bottomFade} />
    </section>
  );
};

export default RewardsCalculator;
