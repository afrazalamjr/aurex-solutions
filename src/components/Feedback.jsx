import React from 'react';
import { quotes } from '../assets';

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className='flex flex-col items-center text-center px-4 py-6 rounded-[20px] w-full feedback-card hover:scale-[1.02] transition-all duration-300'>
      {/* Profile Picture */}
      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-dolyBlue/20 to-dolyBlue/5 border-2 border-dolyBlue/30 flex items-center justify-center mb-4'>
        <div className='w-12 h-12 rounded-full bg-dolyBlue/40 flex items-center justify-center'>
          <span className='text-dolyBlue font-bold text-lg'>{name.charAt(0)}</span>
        </div>
      </div>
      
      {/* Name */}
      <h4 className='font-poppins font-semibold text-[16px] leading-[22px] text-white mb-2'>{name}</h4>
      
      {/* Quote */}
      <p className='font-poppins font-normal text-[14px] leading-[22px] text-dimWhite mb-4'>
        "{content}"
      </p>
    </div>
  );
};

export default Feedback;
