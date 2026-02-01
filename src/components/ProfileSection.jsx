import React from 'react';

const ProfileSection = ({ profile }) => {
  return (
    <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start mb-12 lg:mb-0">
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-gray-100">
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {profile.name}
          </h1>
          
          {/* Bio */}
          <div className="text-gray-600 space-y-3 mb-6">
            <p 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: profile.bio }}
            />
            <p className="font-semibold text-gray-900">
              <span className="font-bold">Present:</span> {profile.present}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Past:</span> {profile.past}
            </p>
            <p className="text-gray-700">{profile.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;