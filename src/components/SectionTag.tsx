// src/components/SectionTag.tsx
import React from 'react';

interface SectionTagProps {
  text: string;
}

const SectionTag: React.FC<SectionTagProps> = ({ text }) => {
  return (
    <span className="bg-black text-white text-xs px-3 py-1 rounded-full tracking-wide">
      {text}
    </span>
  );
};

export default SectionTag;

