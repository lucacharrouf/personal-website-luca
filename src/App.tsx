// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-12">
      <Header />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
};

export default App;



