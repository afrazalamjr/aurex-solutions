import React from 'react';
import styles from '../../style';

const CryptoCoinLaunch = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="pt-20">
          <h1 className="text-white font-poppins font-bold text-4xl mb-8">Crypto Enhanced Coin Launch</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-white font-poppins font-bold text-2xl mb-4">Complete Token Launch Solutions</h2>
              <p className="text-dimWhite font-poppins text-lg mb-6">
                Launch your cryptocurrency project with confidence. We provide end-to-end 
                solutions for token creation, smart contract development, and successful 
                market launch strategies.
              </p>
            </div>
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Launch Services</h3>
              <ul className="text-dimWhite font-poppins space-y-2">
                <li>• Smart Contract Development</li>
                <li>• Token Economics Design</li>
                <li>• Security Audits</li>
                <li>• Marketing & Community Building</li>
                <li>• Exchange Listings</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Smart Contract Development</h3>
              <p className="text-dimWhite font-poppins">
                Secure, audited smart contracts for token creation, staking, 
                and DeFi protocols built with industry best practices.
              </p>
            </div>
            
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Token Economics</h3>
              <p className="text-dimWhite font-poppins">
                Design sustainable tokenomics with proper distribution, 
                utility mechanisms, and long-term value proposition.
              </p>
            </div>
            
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Security Audits</h3>
              <p className="text-dimWhite font-poppins">
                Comprehensive security audits by certified professionals 
                to ensure your smart contracts are safe and secure.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-aurex-blue text-white font-poppins font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors">
              Launch Your Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCoinLaunch;
