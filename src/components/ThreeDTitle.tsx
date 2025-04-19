import React from 'react';
import '../styles/3d-title.css';

const ThreeDTitle: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center perspective-1000">
      <div className="relative w-full max-w-6xl h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl md:text-8xl font-bold text-center">
            <div className="relative transform-style-preserve-3d">
              {/* <span 
                className="my-neon text-blue-500 transform translate-z-20 neon-text glitch-text hover:scale-110 transition-transform [text-stroke:2px] [text-stroke-color:white]"
                data-text="Easy Bag Rewards"
              >
                Easy Bag Rewards
              </span> */}
              <div className="wrapper">
                <div className="bg"> Easy Bag Rewards </div>
                <div className="fg"> Easy Bag Rewards </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDTitle; 