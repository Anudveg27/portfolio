import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="col-span-full mb-6">
      <h2 className="text-2xl font-bold text-gray-900">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;