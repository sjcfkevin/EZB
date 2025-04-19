import React from 'react';
import { Twitter } from 'lucide-react';
import { sectionStyles, fadeInUp, fadeInScale, MotionDiv, MotionH2 } from '../styles/shared';

const TwitterFollowers: React.FC = () => {
  return (
    <section id="twitter" className={sectionStyles.base}>
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
              Join Our
            </span>{' '}
            Community
          </MotionH2>
          <p className={sectionStyles.subheading}>
            Follow us on Twitter to stay updated with the latest news and announcements.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MotionDiv 
            className={sectionStyles.card.base}
            {...fadeInScale}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Twitter size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-white mb-4">10K+</h3>
            <p className="text-white/80 text-center">Twitter Followers</p>
          </MotionDiv>

          <MotionDiv 
            className={sectionStyles.card.base}
            {...fadeInScale}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Twitter size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-white mb-4">5K+</h3>
            <p className="text-white/80 text-center">Daily Engagement</p>
          </MotionDiv>

          <MotionDiv 
            className={sectionStyles.card.base}
            {...fadeInScale}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Twitter size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-white mb-4">1M+</h3>
            <p className="text-white/80 text-center">Monthly Impressions</p>
          </MotionDiv>

          <MotionDiv 
            className={sectionStyles.card.base}
            {...fadeInScale}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Twitter size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-white mb-4">24/7</h3>
            <p className="text-white/80 text-center">Active Support</p>
          </MotionDiv>
        </div>

        <MotionDiv 
          className="text-center mt-12"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://twitter.com/ezbtoken" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${sectionStyles.button.primary} inline-flex items-center`}
          >
            <Twitter size={20} className="mr-2" />
            Follow Us on Twitter
          </a>
        </MotionDiv>
      </div>

      {/* Decorative elements */}
      <div className={sectionStyles.background.bottomFade} />
    </section>
  );
};

export default TwitterFollowers;
