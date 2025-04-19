import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { sectionStyles, fadeInScale, MotionDiv } from '../styles/shared';

// Sample data - replace with real data
const data = [
  { time: '00:00', price: 300 },
  { time: '04:00', price: 310 },
  { time: '08:00', price: 305 },
  { time: '12:00', price: 315 },
  { time: '16:00', price: 320 },
  { time: '20:00', price: 325 },
  { time: '24:00', price: 330 },
];

const BNBPriceChart: React.FC = () => {
  return (
    <MotionDiv 
      className={sectionStyles.card.base}
      {...fadeInScale}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-6">
          <span className={sectionStyles.heading.gradient}>
            BNB Price Chart
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
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid rgba(234, 179, 8, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
                labelStyle={{ color: '#ffffff' }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: '#3b82f6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-white/60 text-sm">Current Price</p>
            <p className="text-2xl font-bold text-white">$330.00</p>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-sm">24h Change</p>
            <p className="text-xl font-bold text-green-500">+5.2%</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default BNBPriceChart; 