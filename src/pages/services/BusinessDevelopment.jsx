import React from 'react';
import styles from '../../style';

const BusinessDevelopment = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="pt-20">
          <h1 className="text-white font-poppins font-bold text-4xl mb-8">Business Development</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-white font-poppins font-bold text-2xl mb-4">Strategic Growth Solutions</h2>
              <p className="text-dimWhite font-poppins text-lg mb-6">
                We help businesses scale and grow through strategic planning, market analysis, and 
                partnership development. Our comprehensive approach ensures sustainable growth 
                and market expansion.
              </p>
            </div>
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Key Services</h3>
              <ul className="text-dimWhite font-poppins space-y-2">
                <li>• Market Research & Analysis</li>
                <li>• Strategic Planning & Roadmapping</li>
                <li>• Partnership Development</li>
                <li>• Revenue Growth Strategies</li>
                <li>• Business Model Optimization</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Market Analysis</h3>
              <p className="text-dimWhite font-poppins">
                Comprehensive market research to identify opportunities, analyze competitors, 
                and understand customer needs for informed decision-making.
              </p>
            </div>
            
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Strategic Planning</h3>
              <p className="text-dimWhite font-poppins">
                Develop actionable business strategies with clear objectives, timelines, 
                and success metrics tailored to your industry and goals.
              </p>
            </div>
            
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Partnership Development</h3>
              <p className="text-dimWhite font-poppins">
                Build strategic alliances and partnerships that drive mutual growth 
                and create new revenue streams for your business.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-aurex-blue text-white font-poppins font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopment;
