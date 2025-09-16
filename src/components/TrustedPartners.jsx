import React from 'react';
import { partners } from '../constants';

const TrustedPartners = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <p className="text-white text-lg font-medium">
          Our Core Technologies
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partners.map((partner) => (
          <div 
            key={partner.id}
            className="flex items-center space-x-2 text-white hover:text-dolyBlue transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 bg-dolyBlue/20 rounded-full flex items-center justify-center text-dolyBlue font-bold text-sm">
              {partner.logo}
            </div>
            <span className="font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
