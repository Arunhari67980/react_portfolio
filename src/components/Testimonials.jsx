import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    { quote: '"Arun is an exceptional developer with a keen eye for detail. Highly recommended!"', author: 'Colleague A' },
    { quote: '"Innovative solutions and timely delivery. A pleasure to work with."', author: 'Client B' },
    { quote: '"Outstanding technical skills and creative problem-solving."', author: 'Mentor C' },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>{testimonial.quote}</p>
            <h4>{testimonial.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;