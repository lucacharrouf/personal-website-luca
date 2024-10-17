// src/components/ExperienceItem.tsx
import React, { useState } from 'react';

interface ExperienceItemProps {
  logo: string;
  company: string;
  title: string;
  location: string;
  dates: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ logo, company, title, location, dates, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-start justify-between py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start">
        <img src={logo} alt={company} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 className="text-md font-semibold">{company}</h3>
          <p className="text-sm text-gray-600">{title}</p>
          {isHovered && (
            <p className="text-xs text-gray-600 mt-2 transition-opacity duration-300 ease-in-out">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-gray-700">{location}</p>
        <p className="text-xs text-gray-500">{dates}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
