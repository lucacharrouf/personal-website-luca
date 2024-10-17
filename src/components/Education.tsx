// src/components/Education.tsx
import React from 'react';
import uowLogo from '../assets/uow.jpg';
import cuhkLogo from '../assets/cuhk.png';
import calLogo from '../assets/cal.png';

interface EducationItemProps {
  logo: string;
  institution: string;
  degree: string;
  location: string;
  dates: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ logo, institution, degree, location, dates }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200">
      <div className="flex items-center">
        {/* Image container to maintain circular shape and consistent size */}
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-300">
          <img src={logo} alt={institution} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-md font-semibold">{institution}</h3>
          <p className="text-sm text-gray-600">{degree}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-gray-700">{location}</p>
        <p className="text-xs text-gray-500">{dates}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section className="w-full max-w-5xl p-4">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <div className="space-y-2">
        <EducationItem
          logo={calLogo}
          institution="University of California, Berkeley"
          degree="Master of Information Systems"
          location="Berkeley, CA"
          dates="2024 - Present"
        />
        <EducationItem
          logo={cuhkLogo}
          institution="Chinese University of Hong Kong"
          degree="Exchange Program in Statistics & Mathematics"
          location="Hong Kong"
          dates="summer 2023"
        />
        <EducationItem
          logo={uowLogo}
          institution="University of Westminster"
          degree="Bachelor of Arts, Management"
          location="London, UK"
          dates="2021 - 2024"
        />
        {/* Add more EducationItem components as needed */}
      </div>
    </section>
  );
};

export default Education;
