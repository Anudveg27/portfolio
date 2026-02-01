import React from 'react';
import { portfolioData } from './data/portfolioData';
import ProfileSection from './components/ProfileSection';
import SectionHeader from './components/SectionHeader';
import SocialLinkCard from './components/SocialLinkCard';
import CertificationCard from './components/CertificationCard';
import WorkCard from './components/WorkCard';
import AwardCard from './components/AwardCard';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Section - Sticky on large screens */}
          <ProfileSection profile={portfolioData.profile} />

          {/* Content Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Social Links Section */}
              <SectionHeader title="🌍 Social Links-" />
              {portfolioData.socialLinks.map((link, idx) => (
                <SocialLinkCard key={idx} link={link} />
              ))}

              {/* Certifications Section */}
              <SectionHeader title="🎓 Certifications-" />
              {portfolioData.certifications.map((cert, idx) => (
                <CertificationCard key={idx} cert={cert} />
              ))}

              {/* Recent Works Section */}
              <SectionHeader title="👨🏻‍💻 Recent Works-" />
              <div className="col-span-full">
                <div className="flex flex-wrap gap-6">
                  {portfolioData.recentWorks.map((work, idx) => (
                    <WorkCard key={idx} work={work} />
                  ))}
                </div>
              </div>

              {/* Awards & Achievements Section */}
              <SectionHeader title="🏆 Awards & Achievements-" />
              {portfolioData.awards.map((award, idx) => {
                const hasImageAndContent = award.image && award.content;
                const spanClass = hasImageAndContent ? 'md:col-span-2' : 'md:col-span-1';
                            
                return (
                  <div key={idx} className={spanClass}>
                    <AwardCard award={award} />
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;