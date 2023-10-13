import { Carousel } from './carousel.js';
import { projectsData, projectTypes } from './projectsDB.js';

const IMAGE_FOLDER_PATH = './src/assets/img/projects';
const BACKEND_IMAGE_PATH = `${IMAGE_FOLDER_PATH}/backend.png`;

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
    createDetails(projectData, modal);
    showModal();
  });
  
  window.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal(modal);
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
    closeModal(modal);
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
  document.body.style.overflow = 'hidden'; // disable scrolling
}

function closeModal(modal) {
  modal.style.visibility = 'hidden';
  document.body.style.overflow = 'auto'; // enable scrolling
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
