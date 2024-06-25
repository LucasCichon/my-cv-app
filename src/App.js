// src/App.js

import React from 'react';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import ProfessionalPractice from './components/ProfessionalPractice';
import ProfessionalExperience from './components/ProfessionalExperience';
import ForeignLanguages from './components/ForeignLanguages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProfilePicture />
      <AboutMe />
      <Education />
      <ProfessionalPractice />
      <ProfessionalExperience />
      <ForeignLanguages />
    </div>
  );
}

export default App;
