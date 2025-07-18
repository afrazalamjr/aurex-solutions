import React from 'react';
import styles from '../style';

const ClientsPage = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <h1 className="text-white font-poppins font-bold text-4xl mb-8">Our Clients</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Client logos or testimonials */}
          <div className="bg-black-gradient p-6 rounded-lg flex items-center justify-center">
            <span className="text-white font-poppins">Client Logo 1</span>
          </div>
          {/* Add more clients as needed */}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;