import React from 'react';
import './Achievements.css';
import img1 from "../images/achievement1.png"
import img2 from "../images/achievement2.jpg"
import img3 from "../images/achievement3.png"
import img4 from "../images/achievement4.jpg"

const achievementData = [
  {
    image: img1,
    title: 'Problem Solver - 140+ Problems on LeetCode & GFG',
    description: 'Successfully solved 140+ problems on platforms like LeetCode and GeeksforGeeks, improving problem-solving skills and algorithms knowledge.',
    date: '2025',

  },

  {
    image: img2,
    title: 'Volunteer - NGO God’s Plan',
    description: 'Volunteered with the NGO God’s Plan and received a recognition certificate for contributions to community development.',
    date: '2023',
  },
  {
    image: img3,
    title: 'NPTEL Cloud Computing Exam - Elite Ranking',
    description: 'Achieved Elite ranking with a score of 63% in the NPTEL Cloud Computing examination, showcasing strong understanding of cloud technologies and concepts.',
    date: '2024',
  },
  {
    image: img4,
    title: 'Academic Excellence - CGPA 8.6/10',
    description: 'Maintained a CGPA of 8.6/10 throughout my academic career, reflecting consistent performance and dedication to studies.',
    date: '2025',
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <h2 className="achievements-title">Achievements</h2>
        <div className="achievement-grid">
          {achievementData.map((ach, index) => (
            <div key={index} className="achievement-card">
              <img src={ach.image} alt={ach.title} className="achievement-image" />
              <div className="achievement-content">
                <h3 className="achievement-title">{ach.title}</h3>
                <p className="achievement-description">{ach.description}</p>
                <span className="achievement-date">{ach.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
