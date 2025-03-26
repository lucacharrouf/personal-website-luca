// src/components/Footer.tsx
import React from 'react';
import SectionTag from './SectionTag';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-5xl p-6 mt-12 text-center border-t border-gray-200">
      <SectionTag text="Contact" /> {/* Contact tag */}
      <h2 className="text-3xl font-bold mt-2 mb-2">Get in Touch</h2>
      <p className="text-gray-700 max-w-md mx-auto mb-4">
        Feel free to text me at <a href="mailto:lucacharrouf@berkeley.edu" className="text-blue-500 underline">lucacharrouf@berkeley.edu</a> and I'll respond whenever I can.
      </p>
    </footer>
  );
};

export default Footer;

