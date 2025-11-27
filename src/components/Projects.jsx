import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Nezha - A Real-Time Strategy Game',
      description: 'I returned to my initial passion for games to build a real-time strategy game based on the myth of Nezha. The biggest challenge was the AI. I spent weeks figuring out how to make units decide what to do on their own. Seeing a unit move into the fog of war by itself for the first time was a moment of pure joy.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/grantchen08/nezha'
    },
    {
      title: 'Grade 12 Chemistry Tutor',
      description: 'To help my friends and I struggling with organic chemistry, I created an educational game. It started as a simple quiz but grew into a tool that helped us understand the lessons better. This project taught me how powerful coding can be for learning.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/grantchen08/grade12-chemistry-tutor'
    },
    {
      title: 'City Merge Puzzle',
      description: 'My first real project, a city-builder puzzle game inspired by 2048. Watching the tiles merge because of my code was an incredible feeling. Uploading it to GitHub made it feel real, like I had built something that existed beyond my computer.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/grantchen08/puzzle'
    },
    {
      title: 'GPT-Helper',
      description: 'I built this Python tool to solve a personal problem: applying AI-generated code patches to my projects. It uses fuzzy matching to figure out where new code should go. It reminded me that coding is not just about writing code, but about solving problems creatively.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/grantchen08/GPT-Helper'
    }
  ];

  return (
    <section className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://github.com/grantchen08?tab=repositories" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">View All Projects on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
