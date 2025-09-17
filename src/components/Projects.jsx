import React from 'react';
import './Projects.css';
import webpage from './images/webpage.jpeg';

function Projects() {
  const projects = [
    { title: 'Project One', description: 'A dynamic web application built with HTML, CSS, and JavaScript. Features real-time updates and responsive design.', image: webpage ,},
    { title: 'Project Two', description: 'An interactive platform with React and modern APIs. Includes user authentication and data visualization.', image: 'https://via.placeholder.com/340x260?text=Project+2' },
    { title: 'Project Three', description: 'A data-driven solution using Python and machine learning. Optimized for performance and accuracy.', image: 'https://via.placeholder.com/340x260?text=Project+3' },
    { title: 'Project Four', description: 'A full-stack app with Node.js backend and React frontend. Secure and scalable.', image: 'https://via.placeholder.com/340x260?text=Project+4' },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;