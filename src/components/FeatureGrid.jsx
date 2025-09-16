import React from 'react';
import { Link } from 'react-router-dom';
import businessImg from '../assets/business.png';
import aiImg from '../assets/ai.webp';
import blockchainImg from '../assets/blockchain.png';
import cryptoImg from '../assets/crypto.webp';

const FeatureGrid = () => {
  const features = [
    {
      id: "business-development",
      title: "Strategic Business Development",
      description: "Comprehensive business development strategies to scale your operations and maximize growth potential.",
      details: "We help you identify new opportunities, develop strategic partnerships, and create sustainable growth models that drive long-term success.",
      keyword: "GROWTH",
      image: businessImg,
      path: "/services/business-development"
    },
    {
      id: "ai-automation", 
      title: "AI Workflow Automation",
      description: "Intelligent automation solutions that streamline your business processes and boost productivity.",
      details: "Custom AI solutions that automate workflows, reduce manual tasks, and enhance operational efficiency across your organization.",
      keyword: "AUTOMATE",
      image: aiImg,
      path: "/services/ai-workflow-automation"
    },
    {
      id: "blockchain",
      title: "Blockchain Development", 
      description: "Cutting-edge blockchain solutions for modern businesses and decentralized applications.",
      details: "Expert blockchain development services including smart contracts, DApps, DeFi solutions, and custom blockchain implementations.",
      keyword: "SECURE",
      image: blockchainImg,
      path: "/services/blockchain"
    },
    {
      id: "crypto-launch",
      title: "Crypto Launch Pad",
      description: "Complete crypto project launch and management services from concept to market.",
      details: "End-to-end crypto project support including token creation, smart contract development, marketing, and community building.",
      keyword: "LAUNCH",
      image: cryptoImg,
      path: "/services/crypto-coin-launch"
    }
  ];

  return (
    <div className="py-32">
      <div className="space-y-32">
        {features.map((feature, index) => (
          <div key={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
            
            {/* Visual Section */}
            <div className="flex-1">
              <Link to={feature.path} className="group block">
                <div className="relative h-96 w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>
            
            {/* Text Section */}
            <div className="flex-1 space-y-6">
              <h3 className="text-4xl font-bold text-white leading-tight">
                {feature.title}
              </h3>
              <p className="text-xl text-dimWhite leading-relaxed">
                {feature.description}
              </p>
              <p className="text-lg text-dimWhite/80 leading-relaxed">
                {feature.details}
              </p>
              <Link 
                to={feature.path}
                className="inline-block bg-dolyBlue text-white font-semibold px-8 py-3 rounded-lg hover:bg-dolyBlue/90 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
