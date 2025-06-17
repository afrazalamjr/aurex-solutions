import React from 'react';
import { quotes } from '../assets';

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className='flex flex-col px-6 py-8 rounded-[20px] w-full max-w-[310px] feedback-card hover:scale-[1.02] transition-all duration-300 mx-auto'>
      <img 
        src={quotes} 
        alt='quotes' 
        className='w-[36px] h-[24px] object-contain mb-4' 
      />
      <p className='font-poppins font-normal text-[15px] leading-[26px] text-white mb-6'>
        {content}
      </p>
      <div className='flex items-center'>
        <img 
          src={img} 
          alt={name} 
          className='w-[40px] h-[40px] rounded-full object-cover mr-3' 
        />
        <div>
          <h4 className='font-poppins font-semibold text-[16px] leading-[22px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;