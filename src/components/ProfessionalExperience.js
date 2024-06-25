import React from 'react';
import './ProfessionalExperience.css';

const ProfessionalExperience = () => {
  return (
    <section className="professional-experience">
      <h2>Professional Experience</h2>
      <div className="experience-item">
        <span>09.2020-11.2022</span>
        <span>HSI SP. Z O. O. INFORMATYKA W BIZNESIE</span>
        <span>Internship as a C# .NET programmer in the ERP systems implementation department.</span>
      </div>
      <div className="experience-item">
        <span>11.2022-04.2024</span>
        <span>Motorola Solutions Systems Polska SP. Z O. O.</span>
        <span>Working as a backend .NET developer.</span>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
