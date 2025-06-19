import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] transition-all hover:scale-[1.02] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} bg-[#1f1f1f] feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#158ec7]`}>
      <img
        src={icon}
        alt={title}
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-5'>
      <h4 className='font-poppins font-semibold text-white text-[20px] leading-[26px] mb-2'>
        {title}
      </h4>
      <p className={`${styles.paragraph} max-w-[90%] text-white`}>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='features' className={`${layout.section} relative bg-transparent`}>
      
      {/* Removed all background gradient elements */}

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-white`}>
          Your Vision, <br className='sm:block hidden' />
          <span className="bg-gradient-to-r from-white to-[#158ec7] bg-clip-text text-transparent">
            Our Implementation
          </span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          Aurex combines technical excellence with creative problem-solving to deliver 
          software solutions that drive real business impact.
        </p>
        <Button styles='mt-10' text="Explore Services" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard 
            key={feature.id} 
            index={index} 
            {...feature} 
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
