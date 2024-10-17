// src/components/Experience.tsx
import React from 'react';
import pmalphaLogo from '../assets/pmalpha.jpg';
import raysLogo from '../assets/12rays.jpg';
import wbsLogo from '../assets/wbs.png';
import rpLogo from '../assets/rp.png';

interface ExperienceItemProps {
  logo: string;
  company: string;
  title: string;
  location: string;
  dates: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ logo, company, title, location, dates }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200">
      <div className="flex items-center">
        <img src={logo} alt={company} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 className="text-md font-semibold">{company}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-gray-700">{location}</p>
        <p className="text-xs text-gray-500">{dates}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="w-full max-w-5xl p-4">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-2">
        <ExperienceItem
          logo={rpLogo}
          company="Recursive Pioneers"
          title="Founder"
          location="Berkeley, CA"
          dates="Jan 2024 - Present"
        />
        <ExperienceItem
          logo={pmalphaLogo}
          company="Private Markets Alpha"
          title="Product Manager"
          location="London, UK"
          dates="April 2023 - May 2024"
        />
        <ExperienceItem
          logo={raysLogo}
          company="12 Rays"
          title="Product Manager"
          location="London, UK"
          dates="March 2022 - March 2023"
        />
        <ExperienceItem
          logo={wbsLogo}
          company="Westminster Blockchain Society"
          title="President"
          location="London, UK"
          dates="Jan 2022 - May 2024"
        />
        {/* Add more ExperienceItem components as needed */}
      </div>
    </section>
  );
};

export default Experience;
