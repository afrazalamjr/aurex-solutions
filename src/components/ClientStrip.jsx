import React from 'react';
import { clients } from '../constants';

const ClientStrip = () => {
  // Duplicate clients array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="py-8 bg-dolyGray/10 overflow-hidden">
      <div className="flex animate-scroll">
        {duplicatedClients.map((client, index) => (
          <div key={`${client.id}-${index}`} className="flex-shrink-0 mx-8">
            <a
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src={client.logo}
                alt={client.id}
                className="h-12 w-auto object-contain filter brightness-0 invert opacity-60"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientStrip;
