import React from 'react';

const AwardCard = ({ award }) => {
  if (award.type === 'image') {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={award.image} 
            alt={award.caption}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {award.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 m-3 rounded-lg">
              <p className="text-center font-semibold text-gray-900 text-sm">
                {award.caption}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (award.type === 'text') {
    return (
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
        <p className="text-white leading-relaxed text-base">
          {award.content}
        </p>
      </div>
    );
  }

  // Default: Always show image and text side-by-side
  return (
    <div className="flex flex-row gap-4 items-stretch min-h-[160px]">
      {/* Left side - Image with caption in its own card */}
      {award.image && (
        <div className="w-36 sm:w-44 md:w-52 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="relative h-full">
            <img 
              src={award.image} 
              alt={award.caption || award.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {award.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-2.5 m-2.5 rounded-lg z-10">
                <p className="text-center font-semibold text-gray-900 text-xs leading-tight">
                  {award.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Right side - Description in its own dark card */}
      {award.content && (
        <div className="flex-1 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-5 sm:p-6 md:p-7 flex items-center shadow-sm">
          <p className="text-white leading-relaxed text-sm sm:text-base">
            {award.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default AwardCard;