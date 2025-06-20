import React from 'react';
import { bill } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse} relative`}>
      
      {/* ✅ Left Side → Image */}
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt='billing-software'
          className='w-[100%] h-[100%] relative z-[5] object-contain'
        />
      </div>

      {/* ✅ Right Side → Text */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Your Full-Service <br className='sm:block hidden' /> Digital & Software Partner
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5 text-white`}>
          Dedicated to helping you and your business grow from inception to success.
          <br /><br />
          We specialize in crafting cutting-edge digital solutions, enhancing your online presence that drives sales with websites and e-commerce stores, and optimizing your operations for greater efficiency and profitability through ERP and cloud solutions.
          <br /><br />
          With our expertise, creativity, and commitment, we turn your ideas into reality, ensuring your business thrives in the digital age.
        </p>
      </div>
      
    </section>
  );
};

export default Billing;
