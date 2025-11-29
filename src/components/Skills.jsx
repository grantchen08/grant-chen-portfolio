import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'JavaScript',
    'Python',
    'Java',
    'HTML/CSS',
    'React',
    'Phaser 3',
    'Git / GitHub',
    'UI/UX Design',
    'Game Design',
    'Robotics',
  ];

  const interestsAndStrengths = [
    'Creative Problem-Solving',
    'Fast Learner',
    'Digital Art',
    'Independent & Self-Driven',
    'Computer Science',
    'Computer Engineering',
    'Detail-Oriented',
    'Experimentation',
  ];

  return (
    <section className="bg-light p-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills & Interests</h2>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center mb-3">Technical Skills</h3>
            <div className="text-center">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="badge bg-primary fs-6 m-1">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-center mb-3">Interests & Strengths</h3>
            <div className="text-center">
              {interestsAndStrengths.map((skill, index) => (
                <span key={index} className="badge bg-secondary fs-6 m-1">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
