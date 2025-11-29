import React from 'react';
import nezhaImage from '../assets/images/nezha.png';
import chemistryImage from '../assets/images/chemistry.png';
import cityBuilderImage from '../assets/images/city-builder.png';
import gptHelperImage from '../assets/images/gpt-helper.png';
import drawing1 from '../assets/images/drawings/20240601_114500.jpg';
import drawing2 from '../assets/images/drawings/20240601_114652.jpg';
import drawing3 from '../assets/images/drawings/20240601_114712.jpg';
import drawing4 from '../assets/images/drawings/20240601_114737.jpg';
import drawing5 from '../assets/images/drawings/FINAL ARTWORK Image 1 Grant Chen.jpg';
import drawing6 from '../assets/images/drawings/mmexport1713106717843~2.jpg';
import drawing7 from '../assets/images/drawings/mmexport1717872966604.jpg';
import drawing8 from '../assets/images/drawings/mmexport1717872974069.jpg';
import drawing9 from '../assets/images/drawings/mmexport1717872978962.jpg';
import drawing10 from '../assets/images/drawings/mmexport1717872984925.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Nezha - A Real-Time Strategy Game',
      description: 'I developed \'Nezha,\' a real-time strategy browser game using Phaser 3. The project\'s main challenge was creating an autonomous AI for unit pathfinding and decision-making, which I implemented from scratch. This project solidified my JavaScript skills and experience with game development frameworks.',
      image: nezhaImage,
      link: 'https://github.com/grantchen08/nezha',
      demoLink: 'https://grantchen08.github.io/nezha'
    },
    {
      title: 'Grade 12 Chemistry Tutor',
      description: 'To aid with Grade 12 organic chemistry, I created a gamified learning tool. This project, built with JavaScript, transformed complex concepts into an interactive quiz game. It was a great exercise in applying programming to solve real-world problems and creating educational software.',
      image: chemistryImage,
      link: 'https://github.com/grantchen08/grade12-chemistry-tutor',
      demoLink: 'https://grantchen08.github.io/grade12-chemistry-tutor/'
    },
    {
      title: 'City Merge Puzzle',
      description: 'My first major project, a 2048-inspired city-builder puzzle game. I used JavaScript to implement the core game logic and tile-merging mechanics. This project was a foundational experience in game development and version control with Git and GitHub.',
      image: cityBuilderImage,
      link: 'https://github.com/grantchen08/puzzle',
      demoLink: 'https://grantchen08.github.io/puzzle/'
    },
    {
      title: 'GPT-Helper',
      description: 'I created GPT-Helper, a Python command-line tool to streamline applying AI-generated code patches. It uses fuzzy string matching algorithms to intelligently find the correct location for code changes within a file. This project enhanced my Python skills and my ability to develop practical developer tools.',
      image: gptHelperImage,
      link: 'https://github.com/grantchen08/GPT-Helper'
    }
  ];

  const drawings = [
    { title: 'Drawing 1', image: drawing1 },
    { title: 'Drawing 2', image: drawing2 },
    { title: 'Drawing 3', image: drawing3 },
    { title: 'Drawing 4', image: drawing4 },
    { title: 'Drawing 5', image: drawing5 },
    { title: 'Drawing 6', image: drawing6 },
    { title: 'Drawing 7', image: drawing7 },
    { title: 'Drawing 8', image: drawing8 },
    { title: 'Drawing 9', image: drawing9 },
    { title: 'Drawing 10', image: drawing10 },
  ];

  return (
    <section className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4 project-card" key={index}>
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto">
                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                    {project.demoLink && (
                      <a href={project.demoLink} className="btn btn-info ms-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://github.com/grantchen08?tab=repositories" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">View All Projects on GitHub</a>
        </div>
      </div>
      <div className="container mt-5 drawings-section">
        <h2 className="text-center mb-4">Drawings</h2>
        <div className="row drawings-row">
          {drawings.map((drawing, index) => (
            <div className="col-md-4 mb-4 drawing-card" key={index}>
              <div className="card h-100">
                <a href={drawing.image} target="_blank" rel="noopener noreferrer">
                  <img src={drawing.image} className="card-img-top" alt={drawing.title} />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{drawing.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
