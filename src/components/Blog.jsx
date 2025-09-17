import React from 'react';
import './Blog.css';

function Blog() {
  const posts = [
    { title: 'Building Scalable Web Apps', description: 'Exploring best practices for creating efficient and scalable web applications.', image: 'https://via.placeholder.com/340x200?text=Blog+1' },
    { title: 'The Future of AI in Development', description: 'How artificial intelligence is transforming software development workflows.', image: 'https://via.placeholder.com/340x200?text=Blog+2' },
    { title: 'Mastering Responsive Design', description: 'Tips and tricks for creating websites that work on any device.', image: 'https://via.placeholder.com/340x200?text=Blog+3' },
  ];

  return (
    <section className="blog" id="blog">
      <h2>My Blog</h2>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-info">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;