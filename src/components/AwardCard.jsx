import React from 'react';

const AwardCard = ({ award }) => {
  if (award.type === 'image') {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="aspect-square overflow-hidden">
          <img 
            src={award.image} 
            alt={award.caption}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {award.caption && (
          <div className="p-4 text-center font-semibold text-gray-900">
            {award.caption}
          </div>
        )}
      </div>
    );
  }

  if (award.type === 'text') {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <p className="text-gray-700 leading-relaxed">
          {award.content}
        </p>
      </div>
    );
  }

  return null;
};

export default AwardCard;