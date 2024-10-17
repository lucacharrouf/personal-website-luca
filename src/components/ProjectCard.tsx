// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  dateRange: string;
  description: string;
  tags: string[];
  website: string;
  source?: string; // Optional source link if you want to include it
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, dateRange, description, tags, website, source }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4">
      <div className="rounded overflow-hidden mb-2">
        <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-xs text-gray-500 mb-1">{dateRange}</p>
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-gray-200 text-gray-800 py-1 px-2 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-2">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-medium text-white bg-black px-3 py-1 rounded-md"
        >
          Check it out
        </a>
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-medium text-white bg-black px-3 py-1 rounded-md"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
