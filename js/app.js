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

// swipper slider

const swiper = new Swiper('.slide-content', {
  spaceBetween: 30,
  loop: false,
  centerSlide: 'true',
  fade: 'true',
  grapCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    530: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const swiperReviews = new Swiper('.slide-reviews', {
  spaceBetween: 40,
  loop: false,
  centerSlide: 'true',
  fade: 'true',
  grapCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    530: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
  },
});
