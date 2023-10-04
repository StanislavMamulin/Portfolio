const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.nav-menu');
const menuItems = document.querySelectorAll('.nav-menu__link');

function toggleMenu() {
  burger.classList.toggle('active');
  menu.classList.toggle('nav-menu_open');
}

burger.addEventListener('click', function() {
  toggleMenu();
});

document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    if (burger.classList.contains('active')){
      toggleMenu();
    }
  }
});

menuItems.forEach(item => item.addEventListener('click', function(event) {
  if (burger.classList.contains('active')){
    toggleMenu();
  }
}));