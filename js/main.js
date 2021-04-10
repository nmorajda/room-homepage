// Toggle header menu
const header = document.getElementById('header');
const btnToggleNavigation = document.getElementById('btnToggleNavigation');

btnToggleNavigation.addEventListener('click', () => {
  header.classList.toggle('header--nav-active');
  btnToggleNavigation.classList.toggle('active');
});

// HERO SLIDER
// Create navigation
// navigation container
const sliderNavigationContainer = document.querySelector(
  '.header__image-wrapper'
);

const sliderNavigation = document.createElement('div');
sliderNavigation.classList.add('header__slide__navigation');

// navigation buttons
const btnPrev = document.createElement('button');
const btnNext = document.createElement('button');

btnPrev.classList.add('btn', 'btn--prev');
btnNext.classList.add('btn', 'btn--next');

// append navigation to DOM
sliderNavigation.appendChild(btnPrev);
sliderNavigation.appendChild(btnNext);
sliderNavigationContainer.appendChild(sliderNavigation);

// get all header images
const headerImages = [
  ...document.querySelectorAll('.header__image-wrapper img'),
];
// get all hero items
const heroItems = [...document.querySelectorAll('.hero__item')];

// function to set active slide
const setActiveSlide = index => {
  headerImages.forEach(image =>
    image.classList.remove('header__image--active')
  );
  heroItems.forEach(item => item.classList.remove('hero__item--active'));

  headerImages[currentIndex].classList.add('header__image--active');
  heroItems[currentIndex].classList.add('hero__item--active');
};

// default slide
let currentIndex = 0;
setActiveSlide(currentIndex);

// button events
btnPrev.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = headerImages.length - 1;
  } else {
    currentIndex--;
  }

  setActiveSlide(currentIndex);
});

btnNext.addEventListener('click', () => {
  if (currentIndex === headerImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  setActiveSlide(currentIndex);
});
