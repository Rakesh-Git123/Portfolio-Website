import React from 'react';
import './Certificates.css';
import dsa from "../images/dsa.png"
import php from "../images/php.png"
import html from "../images/html.png"
import node from "../images/nodejs.png"

const Certificates = () => {
    const certificateData = [
        {
          image: dsa,
          title: 'Data Structures And Algorithms',
          description: 'Learned core concepts of arrays, linked lists, trees, graphs, recursion, and sorting algorithms.',
          link: 'certificate1.jpg',
        },
        {
          image: html,
          title: 'HTML CSS and Javascript for web developers',
          description: 'Gained practical knowledge of building responsive web pages using HTML5, CSS3, and JavaScript.',
          link: 'certificate2.jpg',
        },
        {
          image: node,
          title: 'Server side javascript with Nodejs',
          description: 'Explored backend development using Node.js, including Express, routing, and RESTful APIs.',
          link: 'certificate3.jpg',
        },
        {
          image: php,
          title: 'Build web applications in PHP',
          description: 'Built dynamic web applications using PHP, working with forms, sessions, and MySQL integration.',
          link: 'certificate4.jpg',
        },
      ];
      

  return (
    <section className="certificate-section">
      <div className="certificate-container">
        <h2 className="certificate-title">Certificates</h2>

        <div className="certificate-grid">
          {certificateData.map((cert, index) => (
            <div key={index} className="certificate-card">
              <img  src={cert.image} alt={cert.title} className="certificate-image" />
              <div className="certificate-info">
                <h3 className="certificate-name">{cert.title}</h3>
                <p className="certificate-desc">{cert.description}</p>
                <a href={cert.link} className="view-btn" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
