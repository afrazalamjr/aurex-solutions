import React from 'react';
import styles from '../style';

const AboutUs = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <h1 className="text-white font-poppins font-bold text-4xl mb-8">About Us</h1>
        <p className="text-dimWhite font-poppins text-lg max-w-3xl">
          We are a innovative company dedicated to providing exceptional services 
          to our clients. Our team consists of experienced professionals committed 
          to delivering excellence in every project we undertake.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default AboutUs;