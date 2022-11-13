const menuToggle = document.querySelector('.burger');
const menuToggleRemove = document.querySelector('.burger-remove');
const nav = document.querySelector('#nav-mobile');
const hamburger = document.querySelector('.hamburger');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});

menuToggleRemove.addEventListener('click', () => {
  nav.classList.remove('slide');
});
