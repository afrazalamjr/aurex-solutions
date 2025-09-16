import React from 'react';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-dimWhite max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
