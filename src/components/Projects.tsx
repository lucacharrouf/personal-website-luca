// src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import edutrustLogo from '../assets/Edutrust.png';
import glyf from '../assets/glyf.jpg';
import tuku from '../assets/tuku.jpeg';

const Projects: React.FC = () => {
  return (
    <section className="w-full max-w-5xl p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Check out my latest work</h2>
      <p className="text-center text-gray-600 mb-6">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* EduTrust Project Card */}
        <ProjectCard
          image={edutrustLogo}
          title="EduTrust"
          dateRange="2023"
          description="A digital identity wallet for students to store their microcredentials. Presented at a startup competition and secured funding."
          tags={['React Native', 'Blockchain', 'Digital Identity', 'Microcredentials']}
          website="https://youtu.be/DDYJMjAl-rY"
        />
        <ProjectCard
          image={glyf}
          title="Glyf"
          dateRange="2022"
          description="I worked on a digital identity wallet for stateless people during my experience at 12 Rays."
          tags={['Product', 'Prototyping', 'Figma', 'Mobile app']}
          website="https://drive.google.com/file/d/1xcslZopEX7qpeUhy-n0G0XBhAS-y589H/view?usp=drive_link"
        />
        {/* Tukuypaj project card */}
        <ProjectCard
          image={tuku}
          title="Tukuypaj"
          dateRange="2024"
          description="I consulted for a non-profit organisation in Chile that works with people with intellectual and physiscal disabilities."
          tags={['Consulting', 'Strategy', 'Company restructuring', 'Media presence']}
          website="https://tukuypaj.org/"
        />
      </div>
    </section>
  );
};

export default Projects;
