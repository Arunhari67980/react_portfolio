import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    { title: 'Intern at Iniram Square Private Ltd.', period: '2025 - Present', description: 'Developing scalable web applications and led team projects.' },
    { title: 'Intern at PlaceMantra', period: '2024 - 2025', description: 'Gained hands-on experience in frontend development.' },
    { title: "Bachelor's in Computer Science", period: '2023 - 2027', description: "Stella Mary's College of Engineering - Focused on web technologies and AI." },
    { title: 'High School Diploma', period: '2021 - 2023', description: 'SLB Government Higher Secondary School - Excelled in Academics with 75%.' },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Experience & Education</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;