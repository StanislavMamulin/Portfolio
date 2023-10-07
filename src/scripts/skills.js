const frontendSkills = [
  { name: 'HTML', icon: './src/assets/icon/skills/html.png' },
  { name: 'CSS', icon: './src/assets/icon/skills/css.png' },
  { name: 'Sass', icon: './src/assets/icon/skills/sass.png' },
  { name: 'JavaScript', icon: './src/assets/icon/skills/js.png' },
  { name: 'TypeScript', icon: './src/assets/icon/skills/typescript.png' },
  { name: 'React', icon: './src/assets/icon/skills/react.png' },
  { name: 'Redux', icon: './src/assets/icon/skills/redux.png' },
  { name: 'Git', icon: './src/assets/icon/skills/git.png' },
  { name: 'Firebase', icon: './src/assets/icon/skills/firebase.png' },
  { name: 'REST API', icon: './src/assets/icon/skills/api.png' },
  { name: 'GraphQL', icon: './src/assets/icon/skills/graphql.png' }
];

const backendSkills = [
  { name: 'Node.js', icon: './src/assets/icon/skills/nodejs.png' },
  { name: 'Express.js', icon: './src/assets/icon/skills/express.png' },
  { name: 'NestJS', icon: './src/assets/icon/skills/nestjs.png' },
  { name: 'MongoDB', icon: './src/assets/icon/skills/mongodb.svg' },
  { name: 'PostgreSQL', icon: './src/assets/icon/skills/postgresql.png' },
  { name: 'Docker', icon: './src/assets/icon/skills/docker.png' },
  { name: 'Create REST API', icon: './src/assets/icon/skills/api.png' },
  { name: 'Authentication (JWT)', icon: './src/assets/icon/skills/jwt.png' }
];

const additionalSkills = [
  { name: 'Mobile cross-platform (iOS, Android) development using React Native', icon: './src/assets/icon/skills/react.png' },
  { name: 'Desktop development using Electron', icon: './src/assets/icon/skills/electron.svg' },
];

const softSkills = [
  { name: 'Adaptability', icon: './src/assets/icon/checkmark.svg' },
  { name: 'Teamwork', icon: './src/assets/icon/checkmark.svg' },
  { name: 'Communication', icon: './src/assets/icon/checkmark.svg' },
  { name: 'Problem solving', icon: './src/assets/icon/checkmark.svg' },
];

const languages = [
  { name: 'English: A2+', icon: './src/assets/icon/checkmark.svg' },
  { name: 'Russian: Native', icon: './src/assets/icon/checkmark.svg' },
];

function createSkillsList(listSelector, skills) {
  const skillsList = document.querySelector(`.${listSelector}`);

  skills.forEach(skill => {
    const li = document.createElement('li');

    li.classList.add('skill__item');
    li.innerHTML = `
      <img class="skill__icon" src="${skill.icon}" alt="">
      <span class="text skill__name" title="${skill.name}">${skill.name}</span>
    `;

    skillsList.appendChild(li);
  });
}

createSkillsList('skills__frontend', frontendSkills);
createSkillsList('skills__backend', backendSkills);
createSkillsList('skills__extra', additionalSkills);
createSkillsList('skills__softskills', softSkills);
createSkillsList('skills__languages', languages);
