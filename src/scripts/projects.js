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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
    technologies: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma ORM", "Docker", "REST API", "CRUD", "JWT"],
    link: "",
    sourceCode: "https://github.com/StanislavMamulin/nodejs2023uz-service",
    type: projectTypes.backend,
  }
];

function createProjects() {
  const projectsContainer = document.querySelector('.projects-container');
  
  projectsData.forEach(project => {
    const { name, type, titleImage, sourceCode, link } = project;
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
    
    const titleImageURL = type === projectTypes.backend ? BACKEND_IMAGE_PATH : `${IMAGE_FOLDER_PATH}/${titleImage}`;
    
    const projectTemplate = document.querySelector('.template-project');
    const projectClone = projectTemplate.content.cloneNode(true);
    
    const screenshotEl = projectClone.querySelector('.project__screenshot');
    screenshotEl.src = titleImageURL;
    screenshotEl.alt = name;
    
    const nameEl = projectClone.querySelector('.project__name');
    nameEl.innerText = name;
    
    const typeEl = projectClone.querySelector('.project__type');
    typeEl.innerText = type;
    
    const sourceCodeBtn = projectClone.querySelector('.project__source-code');
    sourceCodeBtn?.addEventListener('click', () => window.open(`${sourceCode}`, '_blank'));
    
    projectContainer.appendChild(projectClone);
    
    if (link) {
      addSiteVisitBtn(projectContainer, link);
    }
    
    const detailsBtn = projectContainer.querySelector('.project__details');
    addModal(project, detailsBtn);
    
    projectsContainer.appendChild(projectContainer);
  });
}

function addSiteVisitBtn(projectContainer, link) {
  const siteBtn = document.createElement('button');
  siteBtn.classList.add("button", "action", "action_site");
  siteBtn.type = "button";
  siteBtn.innerText = "Visit site";
  
  siteBtn.addEventListener('click', () => window.open(`${link}`, '_blank'));
  
  const screenshot = projectContainer.querySelector('.project__screenshot-container');
  
  screenshot?.append(siteBtn);
}

function addModal(projectData, button) {
  const modal = document.querySelector('.modal');
  
  button?.addEventListener('click', () => {
    const content = createDetails(projectData, modal);
    showModal(content);
  });
  
  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.visibility = 'hidden';
    }
  })
}

function createDetails(projectData, modal) {
  const { name, description, titleImage, images, technologies, type } = projectData;
  
  const imagesEl = modal.querySelector('.project__images');
  const nameEl = modal.querySelector('.project__name');
  const descriptionEl = modal.querySelector('.project__description-text');
  const technologiesEl = modal.querySelector('.project__technologies');
  const typeEl = modal.querySelector('.project__type');
  
  nameEl.innerText = name;
  descriptionEl.innerText = description;
  technologiesEl.innerText = `Technologies:\n ${technologies.join(', ')}`;
  typeEl.innerText = type;
  
  imagesEl.innerHTML = '';
  
  [titleImage, ...images].forEach((image, i, images) => {
    const imageEl = document.createElement('img');
    const imagePath = `${IMAGE_FOLDER_PATH}/${image}`;
    
    imageEl.classList.add('project__image');
    imageEl.src = imagePath;
    
    imageEl.addEventListener('click', () => {
      const bigImage = document.createElement('img');
      bigImage.classList.add('project__image_big');
      bigImage.src = imagePath;
      
      showImageModal(bigImage);
    });

    if (images.length < 3) {
      const projectsContainer = document.querySelector('.projects-container');
      const gap = getComputedStyle(projectsContainer).getPropertyValue('--gap-between-projects');

      imageEl.style.width = `calc((100% - 2 * ${gap}) / ${images.length})`;
    }
    toggleArrows(images.length);
    
    imagesEl.append(imageEl);
  });
  
  let closeButton = document.querySelector('.modal__close');
  if (!closeButton) {
    closeButton = getCloseButton();
    modal.append(closeButton);
  }
  
  closeButton.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });
  
  new Carousel({
    container: ".project__images",
    prev: ".carousel__arrow_left_modal",
    next: ".carousel__arrow_right_modal",
  }); 
}

function toggleArrows(imagesCount) {
  const arrowLeft = document.querySelector('.carousel__arrow_left_modal');
  const arrowRight = document.querySelector('.carousel__arrow_right_modal');

  if (imagesCount < 3) {
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'none';
  } else {
    arrowLeft.style.display = 'block';
    arrowRight.style.display = 'block';
  }
}

function getCloseButton(htmlSymbol = '&times;') {
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('button', 'modal__close');
  closeBtn.type = 'button';
  closeBtn.innerHTML = htmlSymbol;
  
  return closeBtn;
}

function showImageModal(image) {
  const modal = document.createElement('div');
  modal.classList.add('image-modal');
  
  modal.append(getCloseButton());
  modal.append(image);
  
  document.body.append(modal);
  
  const closeBtn = modal.querySelector('.modal__close');
  
  closeBtn.addEventListener('click', () => {
    closeImageModal(modal);
  });
  
  window.addEventListener('click', event => {
    if (event.target === modal) {
      closeImageModal(modal);
    }
  });
}

function showModal() {
  const modal = document.querySelector('.modal');
  
  modal.style.visibility = 'visible';
}

function closeImageModal(modal) {
  modal.remove();
}

createProjects();

new Carousel({
  container: ".projects-container",
  prev: ".carousel__arrow_left",
  next: ".carousel__arrow_right",
});
