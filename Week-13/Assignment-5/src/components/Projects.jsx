import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A description of project 1.',
      image: 'project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'A description of project 2.',
      image: 'project2.jpg',
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {/* Display project image here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
