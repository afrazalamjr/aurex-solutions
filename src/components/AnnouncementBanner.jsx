import React from 'react';

const AnnouncementBanner = () => {
  return (
    <div className="bg-dolyGray border-b border-dolyBlue/20 py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <span className="bg-dolyBlue text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </span>
          <span className="text-white text-sm">
            Introducing Aurex Solutions, your trusted partner for digital transformation
          </span>
          <svg 
            className="w-4 h-4 text-dolyBlue" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
