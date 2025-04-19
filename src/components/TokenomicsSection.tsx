import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH2 } from '../styles/shared';

const data = [
  { name: 'Liquidity', value: 100, color: '#3b82f6' },
];

const TokenomicsSection: React.FC = () => {
  return (
    <section id="tokenomics" className={sectionStyles.base}>
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
              TOKENOMICS
            </span>
          </MotionH2>
          <p className={sectionStyles.subheading}>
            Transparent and sustainable token distribution for long-term growth.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionDiv 
            className={sectionStyles.card.base}
            {...fadeInScale}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(234, 179, 8, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                    itemStyle={{ color: '#ffffff' }}
                    labelStyle={{ color: '#ffffff' }}
                    formatter={(value: number) => [`${value}%`, 'Allocation']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </MotionDiv>

          <MotionDiv 
            className="space-y-8"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={sectionStyles.card.base}>
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className={sectionStyles.heading.gradient}>
                  Token Distribution
                </span>
              </h3>
              <div className="space-y-4">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-3" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white/80">{item.name}</span>
                    </div>
                    <span className="text-white font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={sectionStyles.card.base}>
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className={sectionStyles.heading.gradient}>
                  Tax Structure
                </span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Total Supply</span>
                  <span className="text-white font-semibold">1,000,000,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Sell/Buy Tax</span>
                  <span className="text-white font-semibold">5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Fair Launch</span>
                  <span className="text-white font-semibold">100%</span>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={sectionStyles.background.bottomFade} />
    </section>
  );
};

export default TokenomicsSection;
