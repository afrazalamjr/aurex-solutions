import React from 'react';
import styles from '../style';

const Services = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <h1 className="text-white font-poppins font-bold text-4xl mb-8">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Cards */}
          <div className="bg-black-gradient p-6 rounded-lg">
            <h3 className="text-white font-poppins font-bold text-xl mb-4">Service 1</h3>
            <p className="text-dimWhite font-poppins">
              Detailed description of service 1 and its benefits.
            </p>
          </div>
          {/* Add more services as needed */}
        </div>
      </div>
    </div>
  );
};

export default Services;