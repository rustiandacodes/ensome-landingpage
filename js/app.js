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

const pages = document.querySelector('#pages');
const pagesContent = document.querySelector('.dropdown-responsive-content');

pages.classList.add('fa-chevron-down');

pages.addEventListener('click', () => {
  if (pages.classList.contains('fa-chevron-up')) {
    pages.classList.remove('fa-chevron-up');
    pages.classList.toggle('fa-chevron-down');
    pagesContent.style.display = 'none';
  } else if (pages.classList.contains('fa-chevron-down')) {
    pages.classList.remove('fa-chevron-down');
    pages.classList.toggle('fa-chevron-up');
    pagesContent.style.display = 'block';
  }
});
