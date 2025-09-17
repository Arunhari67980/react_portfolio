import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm Arun, a 20-year-old Aspiring Web Developer from Kanniyakumari, Tamil Nadu. With a strong foundation in the basics of Web development, I specialize in creating impactful projects that blend creativity and technology. My mission is to push boundaries, innovate relentlessly, and deliver exceptional results. I thrive in collaborative environments and am committed to lifelong learning.
        </p>
        <a href="#" className="resume-button">Download Resume</a>
      </div>
    </section>
  );
}

export default About;