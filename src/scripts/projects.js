import { Carousel } from './carousel.js';

const IMAGE_FOLDER_PATH = './src/assets/img/projects';
const BACKEND_IMAGE_PATH = `${IMAGE_FOLDER_PATH}/backend.png`;

const projectTypes = {
  'backend': 'Backend',
  'frontend': 'Front end',
  'fullStack': 'Full stack',
  'landing': 'Landing page',
  'bot': 'Backend (Bot)',
  'mobile': 'Mobile application (iOS, Android)'
}

const projectsData = [
  {
    id: 1,
    name: "Early rise VK Bot",
    description: "I created this project, inspired by the book \"Magic Morning\". I created a bot for the social network VK, tracking the time for laying sleeping and getting up. Depending on the time of laying and the battles, a different number of points are accrued. You can open a tournament table for all participants, as well as build a visual schedule of laying time and getting up.",
    titleImage: "early-riser.png",
    images: "",
    technologies: ["JavaScript", "NodeJS", "MongoDB (mongoose)"],
    link: "",
    sourceCode: "https://github.com/StanislavMamulin/Early-Rise-VKBot",
    type: projectTypes.bot
  },
  {
    id: 2,
    name: "VK Market mobile client",
    description: "A cross-platform (iOS, Android) mobile client for an online shop in social net VK, adapted to the needs of the customer.",
    titleImage: "vkmarket.jpeg",
    images: [],
    technologies: ["JavaScript", "React Native", "Redux", "Expo", "REST API for backend interaction"],
    link: "",
    sourceCode: "https://github.com/StanislavMamulin/Early-Rise-API",
    type: projectTypes.mobile,
  },
  {
    id: 3,
    name: "Online store",
    description: "Front-end part of the online store.\nTeam project of 3 people: 2 developers with reviews by a mentor.\n 𝗔𝗰𝗵𝗶𝗲𝘃𝗲𝗺𝗲𝗻𝘁𝘀\n - Learned Angular framework new for myself (and the whole team) and implemented a ready project on it in 1 month.\n - Implemented a Node.js backend using JWT authentication next to the main frontend part.",
    features: [
      'Product page with filters',
      'Cart page of selected items',
      'Modal window of registration (purchase) of selected goods',
      'Product description page',
      'Header containing the number of items added to the cart and the total amount of purchases',
      'Page 404'
    ],
    titleImage: "online-store.png",
    images: "",
    technologies: ["TypeScript", "Webpack", "SCSS", "HTML", "Git", "GitHub - teamwork"],
    link: "https://stanislavmamulin-online-store-team.netlify.app/",
    sourceCode: "https://github.com/StanislavMamulin/online-store-team",
    type: projectTypes.frontend,
  },
  {
    id: 4,
    name: "Trello clone",
    description: "Clone of web-based, Kanban-style, list-making application - Trello.     Full-stack team project of 4 people: 3 developers with final and milestone reviews by a mentor.",
    features: [
      'Multi-user application',
      'Adaptive web design (AWD)',
      'Validation of form fields',
      'Keyboard control, hotkeys',
      'Switching between two languages',
      'Modal windows',
      'Routing (without reloading the application page)',
      'Displaying 404 error page'
    ],
    titleImage: "trello.jpeg",
    images: "",
    technologies: ["TypeScript", "Angular", "RxJS", "Angular Material", "Node.js", "Connect middleware framework", "CRUD", "JWT", "CORS", "Git", "Gitflow", "GitHub - teamwork", "REST API"],
    link: "https://rsclone-trello.netlify.app/main",
    sourceCode: "https://github.com/StanislavMamulin/rsclone-trello",
    type: projectTypes.fullStack,
  },
  {
    id: 5,
    name: "GraphiQL",
    description: "GraphiQL is a playground/IDE for GraphQL requests.\nTeam project of 4 people: 3 developers with final review by a mentor.\n Contain 3 pages: Welcome, User auth, GraphiQL editors.",
    features: [
      'Allows you to send requests to any GraphQL server (by default Rick and Morty API)',
      'Authorization and authentication by Firebase',
      'Localization into 2 languages'
    ],
    titleImage: "graphiql.png",
    images: "",
    technologies: ["TypeScript", "GraphQL", "", "React 18 + suspense feature", "Redux, Redux Toolkit Query", "React hook form", "Vite", "Firebase Authentication", "Private routes", "404 error page", "Error boundary", "Internalization by i18next", "Semantic layout", "Git", "Gitflow", "GitHub - teamwork", "GitHub Projects"],
    link: "https://graphiql-ksv-rss.netlify.app/",
    sourceCode: "https://github.com/StanislavMamulin/graphiql-app",
    type: projectTypes.frontend,
  },
  {
    id: 6,
    name: "Home Library Service",
    description: "REST API server for home music library",
    features: [
      'Users can create, read, update, delete data about Artists, Tracks, and Albums, add them to Favorites in their own Home Library.',
      'Using PostgreSQL as a database to store the library records.',
      'Authentication and Authorization with JWT.'
    ],
    titleImage: "",
    images: "",
    technologies: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma ORM", "Docker", "REST API", "CRUD", "JWT"],
    link: "",
    sourceCode: "https://github.com/StanislavMamulin/nodejs2023uz-service",
    type: projectTypes.backend,
  }
];

function createProjects() {
  const projectsContainer = document.querySelector('.projects-container');

  projectsData.forEach(project => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');

    const titleImage = project.type === projectTypes.backend ? BACKEND_IMAGE_PATH : `${IMAGE_FOLDER_PATH}/${project.titleImage}`;

    projectContainer.innerHTML = `
      <div class="project__info">
        <div class="project__screenshot-container">
          <img class="project__screenshot" src="${titleImage}" alt="">
        </div>

        <div class="project__description">
          <p class="text text_bold project__name">${project.name}</p>
          <p class="text project__type">${project.type}</p>
        </div>
      </div>

      <div class="actions">
        <button
          class="button action"
          type="button"
          onclick="window.open('${project.sourceCode}', '_blank')"
        >
          Source code
        </button>
        <button class="button action" type="button">Details</button>
      </div>      
    `;

    if (project.link) {
      const siteBtn = document.createElement('button');
      siteBtn.classList.add("button", "action", "action_site");
      siteBtn.type = "button";
      siteBtn.innerText = "Visit site";

      siteBtn.addEventListener('click', () => window.open(`${project.link}`, '_blank'));

      // const actions = projectContainer.querySelector('.actions');
      // actions?.prepend(siteBtn);
      const screenshot = projectContainer.querySelector('.project__screenshot-container');
      console.log('screenshot', screenshot);
      screenshot?.append(siteBtn);
    }

    projectsContainer.appendChild(projectContainer);
  });
}

createProjects();

new Carousel({
  container: ".projects-container",
  prev: ".carousel__arrow_left",
  next: ".carousel__arrow_right",
});

