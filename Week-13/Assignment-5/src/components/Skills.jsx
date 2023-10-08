import React from 'react';

function Skills() {
  const skills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
