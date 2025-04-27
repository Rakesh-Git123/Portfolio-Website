import React from 'react';
import './Education.css';

const EducationSection = ({ education }) => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
      <p className='education-text'> <i class="fa-solid fa-laptop-code"></i> Education</p>

        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-top">
              <img src={edu.image} alt={edu.institution} height={200} className="education-logo" />
              <div className="education-info">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="year">{edu.year}</span>
                </div>
                <p className="institution">{edu.institution}</p>
                <p className="description">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
