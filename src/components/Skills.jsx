import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'Python',
    'HTML/CSS',
    'React',
    'Phaser 3',
    'Git',
    'Creativity',
    'Innovation',
    'Drive',
    'Open Mindedness',
    'Problem Solving',
    'Caring & Compassion'
  ];

  return (
    <section className="bg-light p-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills & Attributes</h2>
        <div className="text-center">
          {skills.map((skill, index) => (
            <span key={index} className="badge bg-primary fs-6 m-1">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
