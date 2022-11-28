// toggle menu
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

// swiper slider sreviews section
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
