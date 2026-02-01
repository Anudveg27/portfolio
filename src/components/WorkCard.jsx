import React from 'react';

const FigmaIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#3E3E3E"/>
    <path d="M16.2315 32.0002C18.5663 32.0002 20.4611 30.2082 20.4611 28.0002L20.4611 24.0002H16.2315C13.8968 24.0002 12.0019 25.7922 12.0019 28.0002C12.0019 30.2082 13.8968 32.0002 16.2315 32.0002Z" fill="#0ACF83"/>
    <path d="M12.001 19.9997C12.001 17.7917 13.8958 15.9997 16.2306 15.9997H20.4602L20.4601 23.9997H16.2305C13.8958 23.9997 12.001 22.2077 12.001 19.9997Z" fill="#A259FF"/>
    <path d="M12.001 12.0001C12.001 9.79209 13.8958 8.00009 16.2306 8.00009H20.4602L20.4601 16.0001H16.2305C13.8958 16.0001 12.001 14.2081 12.001 12.0001Z" fill="#F24E1E"/>
    <path d="M20.46 7.99982H24.6896C27.0243 7.99982 28.9191 9.79182 28.9191 11.9998C28.9191 14.2078 27.0243 15.9998 24.6895 15.9998H20.4599L20.46 7.99982Z" fill="#FF7262"/>
    <path d="M28.9191 19.9998C28.9191 22.2078 27.0243 23.9998 24.6895 23.9998C22.3548 23.9998 20.4599 22.2078 20.4599 19.9998C20.46 17.7918 22.3548 15.9998 24.6896 15.9998C27.0243 15.9998 28.9191 17.7918 28.9191 19.9998Z" fill="#1ABCFE"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gray-600">
    <rect width="40" height="40" rx="10" fill="currentColor" fillOpacity="0.1"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.95 23.85C18.12 25.02 20.02 25.02 21.19 23.85L22.6 22.44C23 22.04 23.63 22.04 24.02 22.44C24.41 22.83 24.41 23.46 24.02 23.85L22.6 25.26C20.65 27.21 17.48 27.21 15.53 25.26C13.58 23.31 13.58 20.14 15.53 18.19L16.95 16.78C17.34 16.39 17.97 16.39 18.36 16.78C18.75 17.17 18.75 17.80 18.36 18.19L16.95 19.61C15.78 20.78 15.78 22.68 16.95 23.85Z" fill="currentColor"/>
  </svg>
);

const WorkCard = ({ work }) => {
  const cardClasses = work.size === 'small' 
    ? 'md:col-span-1' 
    : 'md:col-span-2';

  return (
    <a 
      href={work.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${cardClasses}`}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {work.type === 'figma' ? (
              <FigmaIcon />
            ) : work.icon ? (
              <img src={work.icon} alt="" className="w-10 h-10 rounded-lg" />
            ) : (
              <LinkIcon />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-gray-900 line-clamp-2">
              {work.title}
            </div>
            <div className="text-sm text-gray-500">
              {work.host}
            </div>
          </div>
        </div>
        
        {work.image && (
          <div className="mt-4 rounded-xl overflow-hidden">
            <img 
              src={work.image} 
              alt={work.title}
              className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                work.size === 'small' ? 'h-32' : 'h-48'
              }`}
            />
          </div>
        )}
      </div>
    </a>
  );
};

export default WorkCard;