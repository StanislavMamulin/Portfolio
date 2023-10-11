export class Carousel {
  #lastVisible = 0;
  #firstVisible = 0;
  #elements;
  #itemsCount;
  #childrenWidth;

  get capacity() {
    return Math.floor(this.#elements.container.offsetWidth / this.#childrenWidth);
  }

  /**
   * 
   * @param {{container: string, prev: string, next: string}} selectors 
   * @param selectors.container - selector of container with carousel items
   * @param selectors.prev - selector of container with carousel items
   * @param selectors.next - selector of container with carousel items
   */
  constructor(selectors) {   
    const container = document.querySelector(selectors.container);
    const children = container.children;
   
    this.#elements = {
      container,
      children,
      "prev": document.querySelector(selectors.prev),
      "next": document.querySelector(selectors.next)
    };
    
    this.#childrenWidth = children[0]?.offsetWidth;
    this.#itemsCount = children.length;
    
    this.#elements.prev?.addEventListener('click', () => {
      this.prev_slide();
    });
    
    this.#elements.next?.addEventListener('click', () => {
      this.next_slide();
    });

    this.resetVisibility();
  }

  resetVisibility = () => {
    this.#firstVisible = 0;
    this.#lastVisible = this.#firstVisible + this.capacity - 1;
  }
  
  prev_slide = () => {
    let currentProject;

    if (this.#firstVisible === 0) {
      this.#firstVisible = this.#itemsCount - this.capacity;
      this.#lastVisible = this.#itemsCount - 1;
      currentProject = this.#elements.children[this.#lastVisible];
    } else {
      this.#firstVisible--;
      this.#lastVisible--;
      currentProject = this.#elements.children[this.#firstVisible];
    }
    
    currentProject?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  next_slide = () => {
    let currentProject;

    if (this.#lastVisible === this.#itemsCount - 1) {
      this.resetVisibility();
      currentProject = this.#elements.children[this.#firstVisible];
    } else {
      currentProject = this.#elements.children[this.#lastVisible + 1];
      this.#firstVisible++;
      this.#lastVisible++;
    }

    currentProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}
