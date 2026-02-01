import React from 'react';

const ProfileSection = ({ profile }) => {
  return (
    <div className="lg:w-1/3 lg:sticky lg:top-16 lg:self-start mb-12 lg:mb-0 ">
      <div className="flex flex-col items-left max-lg:items-center md:text-left text-center space-y-6 px-4">
        {/* Avatar */}
        <div className="w-44 h-44 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
          <img 
            src={profile.avatar} 
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name */}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          {profile.name}
        </h1>
        
        {/* Bio */}
        <div className="text-gray-600 space-y-4 w-full max-w-md">
          <p 
            className="leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: profile.bio }}
          />
          
          <div className="space-y-2 text-left">
            <p className="text-gray-900">
              <span className="font-bold">Present:</span> {profile.present}
            </p>
            <p className="text-gray-700 text-left">
              <span className="font-bold">Past:</span> {profile.past}
            </p>
          </div>
          
          <p className="text-gray-700 text-left">{profile.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;