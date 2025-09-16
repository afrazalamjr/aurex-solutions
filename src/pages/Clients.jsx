import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const ClientsPage = () => {
  // Add descriptions for each client
  const clientDescriptions = {
    'client-1': 'Leading technology solutions provider specializing in enterprise software development and digital transformation.',
    'client-2': 'Innovative IT services company focused on bridging technology gaps and delivering cutting-edge solutions.',
    'client-3': 'Healthcare technology company revolutionizing patient care through advanced medical solutions.',
    'client-4': 'Business consulting firm helping organizations pivot and transform their operations for the digital age.',
    'client-5': 'Cosmetics and beauty brand leveraging technology to enhance customer experience and product innovation.',
    'client-6': 'Educational technology platform providing innovative learning solutions and digital education tools.',
    'client-7': 'AI-powered platform delivering intelligent solutions for businesses across various industries.'
  };

  return (
    <div className={`${styles.paddingX} ${styles.flexStart} py-16`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center mb-16">
          <h1 className="text-white font-poppins font-bold text-5xl mb-4">Our Clients</h1>
          <p className="text-dimWhite text-xl">Trusted by innovative companies worldwide</p>
        </div>
        
        <div className="space-y-12">
          {clients.map((client) => (
            <div key={client.id} className="bg-dolyGray/20 p-8 rounded-2xl hover:bg-dolyGray/40 transition-colors group">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center group-hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={client.logo}
                      alt={client.id}
                      className='h-24 w-auto object-contain'
                    />
                  </a>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {client.id.replace('client-', 'Client ').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>
                  <p className="text-dimWhite text-lg leading-relaxed mb-4">
                    {clientDescriptions[client.id]}
                  </p>
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-dolyBlue hover:text-dolyBlue/80 transition-colors font-semibold"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;