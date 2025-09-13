import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';

const Services = () => {
  const services = [
    {
      id: 'business-development',
      title: 'Business Development',
      description: 'Strategic growth solutions, market analysis, and partnership development to scale your business.',
      path: '/services/business-development',
      features: ['Market Research', 'Strategic Planning', 'Partnership Development']
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation with AI-powered solutions to streamline operations and boost efficiency.',
      path: '/services/ai-workflow-automation',
      features: ['Smart Chatbots', 'Document Automation', 'Predictive Analytics']
    },
    {
      id: 'crypto-coin-launch',
      title: 'Crypto Enhanced Coin Launch',
      description: 'Complete token launch solutions including smart contracts, security audits, and market strategies.',
      path: '/services/crypto-coin-launch',
      features: ['Smart Contracts', 'Token Economics', 'Security Audits']
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Enterprise blockchain development, DeFi protocols, and custom distributed ledger solutions.',
      path: '/services/blockchain',
      features: ['Private Blockchains', 'DeFi Protocols', 'NFT Marketplaces']
    }
  ];

  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="pt-20">
          <h1 className="text-white font-poppins font-bold text-4xl mb-4">Our Services</h1>
          <p className="text-dimWhite font-poppins text-lg mb-12 max-w-3xl">
            We provide comprehensive technology solutions to help your business grow, 
            automate processes, and leverage cutting-edge technologies for competitive advantage.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-black-gradient p-8 rounded-lg hover:bg-gradient-to-r hover:from-black-gradient hover:to-gray-800 transition-all duration-300">
                <h3 className="text-white font-poppins font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-dimWhite font-poppins mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-poppins font-semibold mb-3">Key Features:</h4>
                  <ul className="text-dimWhite font-poppins space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-aurex-blue mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.path}
                  className="inline-block bg-aurex-blue text-white font-poppins font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;