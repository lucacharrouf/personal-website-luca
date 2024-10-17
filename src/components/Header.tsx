// src/components/Header.tsx
import React from 'react';
import personal from '../assets/personal.jpg';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl p-6 mb-12 border-b border-gray-200">
      <div className="text-center lg:text-left">
        {/* Name Section */}
        <h1 className="text-6xl font-bold mb-4 text-black">Luca Charrouf 👋</h1>
        
        {/* About Section */}
        <p className="text-base text-gray-700 max-w-md mt-2">
          I am a product manager with a passion for building impactful tech solutions. With experience in managing product development from concept to release, I focus on creating innovative tools that solve real-world problems.
        </p>
        
        {/* Current Location */}
        <p className="text-sm text-gray-500 mt-4">
          📍 <span className="font-semibold text-gray-700">Berkeley, CA</span>
        </p>
      </div>
      <div className="mt-6 lg:mt-0 lg:ml-8">
        <img
          src={personal}
          alt="Luca Charrouf"
          className="rounded-full w-32 h-32 lg:w-48 lg:h-48 object-cover border border-gray-300 shadow-lg"
        />
      </div>
    </header>
  );
};

export default Header;


