import React from 'react';
import styles from '../../style';

const AIWorkflowAutomation = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="pt-20">
          <h1 className="text-white font-poppins font-bold text-4xl mb-8">AI Workflow Automation</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-white font-poppins font-bold text-2xl mb-4">Intelligent Process Automation</h2>
              <p className="text-dimWhite font-poppins text-lg mb-6">
                Transform your business operations with cutting-edge AI-powered automation solutions. 
                Reduce manual work, increase efficiency, and scale your operations with intelligent 
                workflow automation.
              </p>
            </div>
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Automation Solutions</h3>
              <ul className="text-dimWhite font-poppins space-y-2">
                <li>• AI-Powered Chatbots</li>
                <li>• Document Processing Automation</li>
                <li>• Customer Service Automation</li>
                <li>• Data Entry & Management</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Smart Chatbots</h3>
              <p className="text-dimWhite font-poppins">
                Deploy intelligent chatbots that understand context, handle complex queries, 
                and provide 24/7 customer support with natural language processing.
              </p>
            </div>
            
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Document Automation</h3>
              <p className="text-dimWhite font-poppins">
                Automate document processing, data extraction, and classification 
                to streamline workflows and reduce human error.
              </p>
            </div>
            
            <div className="bg-black-gradient p-6 rounded-lg">
              <h3 className="text-white font-poppins font-bold text-xl mb-4">Predictive Analytics</h3>
              <p className="text-dimWhite font-poppins">
                Leverage machine learning to predict trends, optimize processes, 
                and make data-driven decisions for better business outcomes.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-aurex-blue text-white font-poppins font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors">
              Automate Your Workflow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkflowAutomation;
