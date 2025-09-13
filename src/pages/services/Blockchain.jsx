import React from 'react';
import styles from '../../style';

const Blockchain = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="pt-20">
          <h1 className="text-white font-poppins font-bold text-4xl mb-8">Blockchain Solutions</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-white font-poppins font-bold text-2xl mb-4">Enterprise Blockchain Development</h2>
              <p className="text-dimWhite font-poppins text-lg mb-6">
                Build secure, scalable blockchain solutions for your business. From private 
                blockchains to DeFi protocols, we create custom solutions that leverage 
                the power of distributed ledger technology.
              </p>
            </div>
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Blockchain Services</h3>
              <ul className="text-dimWhite font-poppins space-y-2">
                <li>• Private Blockchain Networks</li>
                <li>• DeFi Protocol Development</li>
                <li>• NFT Marketplace Creation</li>
                <li>• Supply Chain Solutions</li>
                <li>• Cross-Chain Integration</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Private Blockchains</h3>
              <p className="text-dimWhite font-poppins">
                Deploy secure private blockchain networks for enterprise use cases 
                with custom consensus mechanisms and governance models.
              </p>
            </div>
            
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">DeFi Protocols</h3>
              <p className="text-dimWhite font-poppins">
                Build decentralized finance protocols including DEXs, lending platforms, 
                and yield farming solutions with advanced security features.
              </p>
            </div>
            
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">NFT Marketplaces</h3>
              <p className="text-dimWhite font-poppins">
                Create comprehensive NFT marketplaces with minting, trading, 
                and auction capabilities for digital assets and collectibles.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-aurex-blue text-white font-poppins font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors">
              Build Your Blockchain Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
