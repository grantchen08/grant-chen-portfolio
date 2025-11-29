import React from 'react';

const Activities = () => {
  const activities = [
    {
      title: 'Robotics Club',
      description: 'Participated in robotics competitions, focusing on mechanical tasks, building, and testing.',
    },
    {
      title: 'Computer Science Club',
      description: 'Active member of the computer science club, collaborating on projects and exploring new technologies.',
    },
    {
      title: 'Personal Projects',
      description: 'Independently developed personal game projects and coding projects on GitHub.',
    },
    {
      title: 'Digital Art',
      description: 'Practiced digital drawing and art, creating various original pieces.',
    },
  ];

  return (
    <section className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Activities & Achievements</h2>
        <div className="row">
          {activities.map((activity, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{activity.title}</h5>
                  <p className="card-text">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
            <h4>Achievement</h4>
            <p className="lead">Honour Roll of Unionville High School Grade 9-10</p>
        </div>
      </div>
    </section>
  );
};

export default Activities;
