import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { sectionStyles, fadeInScale, MotionDiv } from '../styles/shared';

// Sample data - replace with real data
const data = [
  { time: '00:00', price: 0.0001 },
  { time: '04:00', price: 0.00012 },
  { time: '08:00', price: 0.00011 },
  { time: '12:00', price: 0.00013 },
  { time: '16:00', price: 0.00014 },
  { time: '20:00', price: 0.00015 },
  { time: '24:00', price: 0.00016 },
];

const TokenChart: React.FC = () => {
  return (
    <MotionDiv 
      className={sectionStyles.card.base}
      {...fadeInScale}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-6">
          <span className={sectionStyles.heading.gradient}>
            EZB Price Chart
          </span>
        </h3>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis 
                dataKey="time" 
                stroke="#ffffff80"
                tick={{ fill: '#ffffff80' }}
              />
              <YAxis 
                stroke="#ffffff80"
                tick={{ fill: '#ffffff80' }}
                tickFormatter={(value) => `${value} BNB`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid rgba(234, 179, 8, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
                labelStyle={{ color: '#ffffff' }}
                formatter={(value: number) => [`${value} BNB`, 'Price']}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#eab308" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: '#eab308' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-white/60 text-sm">Current Price</p>
            <p className="text-2xl font-bold text-white">0.00016 BNB</p>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-sm">24h Change</p>
            <p className="text-xl font-bold text-green-500">+60%</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className={sectionStyles.card.inner}>
            <p className="text-white/60 text-sm">Market Cap</p>
            <p className="text-xl font-bold text-white">$1,000,000</p>
          </div>
          <div className={sectionStyles.card.inner}>
            <p className="text-white/60 text-sm">24h Volume</p>
            <p className="text-xl font-bold text-white">$100,000</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default TokenChart;
